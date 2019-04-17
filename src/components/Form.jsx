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
import {EventEmitter} from 'events';

export default class Form extends Component {
  render () {
    // console.log(this.props)
    let cls = (this.props.className || "") + ' x-form';
    return (
        <form className={cls} {...this.props}/>
    );
  }
}
Form.Item = FormItem;

    
function setValue(v,na,formData){
  // if(na.length===0){
  //     return d;
  // }
  let n = na.shift();
  // if(typeof formData[n]=='undefined'){
    if(na.length===0){
      formData[n] = v
    }else{
      formData[n] =formData[n]  || {};
    }
  // }
  if(na.length>0){
    return setValue(v,na,formData[n])
  }
}
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
          setFormData(name,v){
            let na = name.split('.');
            setValue(v,na,formData);
          }
          constructor(props){
            super(props)
            let v = typeof obj.value ==='undefined' ?'':obj.value;
            this.state ={v,validateStatus:true};
            // console.log(self)
            // formData[cname] = v;
            this.setFormData(name,v);
          } 
          componentDidMount(){
            self.formControl[cname].on('setValue',v=>{
              this.setState({v});
            });
            self.formControl[cname].on('validate',(callback)=>{
              this.validate(this.state.v);
              callback(self.validator[cname]);
            });
          }
          componentWillReceiveProps(newProps){
            if (newProps.value != this.state.v) {
              this.setState({v:newProps.value})
            }
          }
          validate(v){
            let rules = obj.rules ||[];
            // let v = this.state.v;
            let isvalid = true,msg=''
            for(let i=0,l=rules.length;i<l;i++){
              let r = rules[i];
              for(let k in r){
                switch(k){
                  case 'required':{
                    if(v.length===0){
                      isvalid = false;
                      msg = r.message;
                    }
                  }
                  break;
                  case 'pattern':{
                    let reg = r.pattern;
                    if(!reg.test(v)){
                      isvalid = false;
                      msg = r.message;
                    }
                  }break;
                }
              }
            }
            if(isvalid){
              self.validator[cname]={validateStatus:true};
              this.setState({validateStatus:true});
            }else{
              self.validator[cname]={validateStatus:false,msg};
              this.setState({validateStatus:false,msg})
            }
          }
          render(){
            let override = {
              value:this.state.v
            };
            // formData[cname] = this.state.v;
            this.setFormData(name,this.state.v);
            let className = '',title='';
            if(!this.state.validateStatus){
              className = 'validate-error';
              title = this.state.msg;
            }
            override["className"] = className;
            override["title"] = title;
            // console.log(WrapComponent)
              //对trigger进行合并，先执行内部的change方法
            override[triggerName] = (v)=>{
              WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](v):null;
              // formData[cname] = v;
              this.setFormData(name,v);
              // if(triggerName==='onChange'){
                this.setState({v});
              // }
              if(triggerName === validateTrigger ){
                this.validate(v);
              }
            }
            if(validateTrigger !=='onChange'){
              override[validateTrigger] = (v)=>{
                this.validate(v);
              }
            }
            let mergeprops = Object.assign({},this.props,override);
            if(typeof this.props.className !=='undefined' && typeof override.className !=='undefined'){
                mergeprops.className = this.props.className +' '+override.className ;
            }
            // console.log(override)
            return React.cloneElement(WrapComponent,mergeprops);
          }
        }
        // let props = this.formControl[name];
        
        this.formControl[cname] = new EventEmitter();
        return <Cls/>;
        // return <Cls {...props}/>
      }
    },
    getFormData(){
      if(prefix){
        let newData = {};
        for(let k in this.formData){
          newData[`${prefix}.${k}`] = this.formData[k];
        }
        return newData;
      }
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
      let promiseArr = [];
      if(fields.length==0){
        for(let k in this.formControl){
          promiseArr.push( new Promise(resolve =>{
            this.formControl[k].emit('validate',res=>{
              result[k] = res;
              resolve(result)
            });
          }))
        }
      }else{
        for(let k in fields){
          promiseArr.push( new Promise(resolve =>{
            this.formControl[fields[k]].emit('validate',res=>{
              result[fields[k]] = res;
              resolve(result)
            });
          }))
        }
      }
      Promise.all(promiseArr).then(()=>{
        let isvalid = true,msg = [],errors=[];
        for(let k in result){
          if(result[k]&&result[k].validateStatus===false ){
            isvalid = false;
            msg.push(result[k].msg);
            errors[k] = result[k];
          }
        }
        callback(errors,isvalid,msg)
      })
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
      // console.log(WrapComponent)
      return <WrapComponent {...this.props}  form={form} ></WrapComponent>
    }
  }
} 