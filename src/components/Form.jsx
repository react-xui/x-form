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
import hoistNonReactStatics from 'hoist-non-react-statics';

export default class Form extends Component {
  render () {
    // console.log(123)
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
//存储表单的数据对象
let formData = {}
// let formRef = {};
//提供方法对表单控件进行再次封装 ，托管value的管理，返回一个新的表单克隆实例
Form.getFieldDecorator = (name,obj) =>{
  // return (WrapComponent) => class extends Component{
  //   render(){
  //     return <WrapComponent />
  //   }
  // }
  let triggerName = [obj.trigger||"onChange"];
  return (WrapComponent) =>{
     class Cls extends Component{
      // console.log(WrapComponent)
      // return hoistNonReactStatics(WrapComponent,<Item/>)
      constructor(props){
        super(props)
        let v = typeof obj.initValue ==='undefined' ?'':obj.initValue;
        this.state ={v};
        formData[name] = v;
      } 
      render(){
        let override = {
          // ref:(ref)=>{
          //   // console.log(ref)
          //   formRef[name] = ref;
          // },
          // [obj.trigger||"onChange"]:(e,v)=>{
          //   formData[name] = v;
          // }
          value:this.state.v
        };
        console.log(WrapComponent)
          //对trigger进行合并，先执行内部的change方法
        override[triggerName] = (e,v)=>{
          WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](e,v):null;
          formData[name] = v;
          this.setState({v});
        }
        return React.cloneElement(WrapComponent,override);
      }
    }
    return <Cls/>
  }
}
Form.getFormData = ()=>{
  // let result = {};
  // for(let k in formData){
  //   // debugger;
  //   result[k] = formData[k].state.value;
  // }
  // return result;
  return formData;
}