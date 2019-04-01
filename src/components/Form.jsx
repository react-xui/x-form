/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormItem from './FormItem';
// import Style from './_Seed'; 
// import hoistNonReactStatics from 'hoist-non-react-statics';
import {EventEmitter} from 'events';

export default class Form extends Component {
  render () {
    // console.log(this.props)
    return (
        <form {...this.props} />
    );
  }
}
Form.Item = FormItem;
// class Item extends Component{
//   onChange(){
    
//   }
//   render(){
//     return null;
//   }
// }
// function Item(){
//   // return null;
// }
// class FormClass{
//   constructor(){
//     this.formData={};
//   }
//   getFieldDecorator(name,obj){
//     let triggerName = [obj.trigger||"onChange"];
//     let self = this;
//     console.log(this)
//     let formData= {}
//     return (WrapComponent) =>{
//       class Cls extends Component{
//         // return hoistNonReactStatics(WrapComponent,<Item/>)
//         constructor(props){
//           super(props)
//           let v = typeof obj.initValue ==='undefined' ?'':obj.initValue;
//           this.state ={v};
//           console.log(self)
//           formData[name] = v;

//         } 
//         render(){
//           let override = {
//             value:this.state.v
//           };
//           // console.log(WrapComponent)
//             //对trigger进行合并，先执行内部的change方法
//           override[triggerName] = (e,v)=>{
//             WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](e,v):null;
//             formData[name] = v;
//             this.setState({v});
//           }
//           return React.cloneElement(WrapComponent,override);
//         }
//       }
//       return <Cls/>
//     }
//   }
//   getFormData(){
//     return this.formData;
//   }
// }
// //存储表单的数据对象
// let formData = {}
// // let formRef = {};
// //提供方法对表单控件进行再次封装 ，托管value的管理，返回一个新的表单克隆实例
// Form.getFieldDecorator = (name,obj) =>{
//   // return (WrapComponent) => class extends Component{
//   //   render(){
//   //     return <WrapComponent />
//   //   }
//   // }
//   let triggerName = [obj.trigger||"onChange"];
//   return (WrapComponent) =>{
//      class Cls extends Component{
//       // console.log(WrapComponent)
//       // return hoistNonReactStatics(WrapComponent,<Item/>)
//       constructor(props){
//         super(props)
//         let v = typeof obj.initValue ==='undefined' ?'':obj.initValue;
//         this.state ={v};
//         formData[name] = v;
//       } 
//       render(){
//         let override = {
//           // ref:(ref)=>{
//           //   // console.log(ref)
//           //   formRef[name] = ref;
//           // },
//           // [obj.trigger||"onChange"]:(e,v)=>{
//           //   formData[name] = v;
//           // }
//           value:this.state.v
//         };
//         // console.log(WrapComponent)
//           //对trigger进行合并，先执行内部的change方法
//         override[triggerName] = (e,v)=>{
//           WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](e,v):null;
//           formData[name] = v;
//           this.setState({v});
//         }
//         return React.cloneElement(WrapComponent,override);
//       }
//     }
//     return <Cls/>
//   }
// }
// Form.getFormData = ()=>{
//   // let result = {};
//   // for(let k in formData){
//   //   // debugger;
//   //   result[k] = formData[k].state.value;
//   // }
//   // return result;
//   return formData;
// }
Form.create=(param={})=>{
  let prefix = param.name;
  let form = {
    formData:{},
    formControl:{},
    validator:{},
    getFieldDecorator(name,obj){
      let triggerName = obj.trigger||"onChange";
      let validateTrigger = obj.validateTrigger||"onChange";
      let self = this;
      // console.log(this)
      let formData= this.formData;
      return (WrapComponent) =>{
        let cname = prefix ? prefix+'.'+name:name;
        class Cls extends Component{
          // return hoistNonReactStatics(WrapComponent,<Item/>)
          constructor(props){
            super(props)
            let v = typeof obj.initValue ==='undefined' ?'':obj.initValue;
            this.state ={v};
            // console.log(self)
            formData[cname] = v;
          } 
          componentDidMount(){
            self.formControl[name].on('setValue',v=>{
              this.setState({v});
            });
            self.formControl[name].on('validate',(callback)=>{
              this.validate();
              callback(self.validator[name]);
            });
          }
          validate(){
            let rules = obj.rules ||[];
            let v = this.state.v;
            for(let i=0,l=rules.length;i<l;i++){
              let r = rules[i];
              for(let k in r){
                switch(k){
                  case 'required':{
                    if(v.length===0){
                      self.validator[name]={validateStatus:false,msg:r.message};
                      this.setState({validateStatus:false,msg:r.message})
                    }else{
                      self.validator[name]={validateStatus:true};
                      this.setState({validateStatus:true});
                    }
                    break;
                  }
                }
              }
            }
          }
          render(){
            let override = {
              value:this.state.v
            };
            formData[cname] = this.state.v;
            // console.log(WrapComponent)
              //对trigger进行合并，先执行内部的change方法
            override[triggerName] = (v)=>{
              WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](v):null;
              formData[cname] = v;
              if(triggerName==='onChange'){
                this.setState({v});
              }
              if(triggerName === validateTrigger ){
                this.validate(v);
              }
            }
            if(validateTrigger !=='onChange'){
              override[validateTrigger] = (v)=>{
                this.validate(v);
              }
            }
            return React.cloneElement(WrapComponent,override);
          }
        }
        // let props = this.formControl[name];
        this.formControl[name] = new EventEmitter();
        return <Cls/>;
        // return <Cls {...props}/>
      }
    },
    getFormData(){
      return this.formData;
    },
    setFieldsValue(param){
      for(let k in param){
        // this.formControl[k] = {value : param[k]};
        this.formControl[k].emit('setValue',param[k]);
      }
    },
    //验证form
    validateFields(fields=[],callback=()=>{}){
      if(typeof fields ==='function'){
        callback=fields;
        fields=[];
      }
      let result = {};
      if(fields.length==0){
        for(let k in this.formControl){
          this.formControl[k].emit('validate',res=>{
            result[k] = res;
          });
        }
      }else{
        for(let k in fields){
          this.formControl[fields[k]].emit('validate',res=>{
            result[fields[k]] = res;
          });
        }
      }
      callback(result)
    }
  }
  form.getFieldDecorator = form.getFieldDecorator.bind(form);
  form.getFormData = form.getFormData.bind(form);
  form.setFieldsValue = form.setFieldsValue.bind(form);
  form.validateFields = form.validateFields.bind(form);
  return WrapComponent => class extends Component{
    constructor(props){
      super(props)
      // form.getFieldDecorator('a',{})
    }
    render(){
      // console.log(form)
      return <WrapComponent {...this.props}  form={form}></WrapComponent>
    }
  }
} 