/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-03-12 11:32:14
 * @LastEditTime: 2021-01-13 09:33:06
 * @github: https://github.com/tianxiangbing
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/index';
import '../src/_index';
import { Input } from 'jsx-input';
import Select from 'jsx-select';
import 'jsx-select/lib/index.css'
const { Option } = Select;
Form.addMethod('testRule',(v,props,data)=>{
  if(v=='123'){
    return {success:false,message:'最大值'};
  }else{
    return true;
  }
})
Form.autoShowTip = true;
var appElement = document.getElementById('example');
// const {getFieldDecorator,getFormData} = Form;
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e) {
    e.preventDefault();
    let { getFormData, validateFields } = this.props.form;
    validateFields((res, isvalid, msg) => console.log(res, isvalid, msg));
    console.log(getFormData())
    // console.log(this.passRef)
  }
  onChange() {
    // alert(1)
    console.log(+new Date())
  }
  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.onSubmit.bind(this)} >
        <Form.Item>
          {getFieldDecorator('obj.name', { value: '' , rules: [
              {
                required: true, message: '必填项'
              }
          ]})(
            <Input onChange={this.onChange.bind(this)} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('obj.name', { value: '' , rules: [
              {
                required: true, message: '必填项'
              }
          ]})(
            <Input onChange={this.onChange.bind(this)} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('biz.password', {
            rules: [
              {
                required: true, message: '必填项'
              }, {
                pattern: /^\d*$/, message: '只能输入数字'
              }
            ]
          })(
            <Input type="password" ref={ref => this.passRef = ref} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('obj.sex', { value: ['2'] })(
            <Select placeholder="请选择" multiple={true} width={180} >
              <Option value="1">这是一段很长很长的文字这是一段很长很长的文字</Option>
              <Option value="2">我好2</Option>
              <Option value="3">E1</Option>
              <Option value="4">D3</Option>
              <Option value="5">D5</Option>
              <Option value="6">我好2</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <button type="submit" value="提交">提交</button>
        </Form.Item>
      </Form>
    )
  }
}
class Password extends React.Component {
  constructor(props) {
    super(props);
    this.props.onLoad(this)
  }
  asyncValidate(v) {
    return new Promise((resovle, reject) => {
      fetch('http://192.168.80.37:8080/demo/del.action', {
        method: 'POST'
      }).then(function (response) {
        return response.json();
      }).then(res => {
        console.log(res)
        if (res.success) {
          resovle();
        } else {
          reject('ajax error')
        }
      })
    })
  }
  validate(v) {
    if (v.length > 6) {
      return true;
    } else {
      return false;
    }
  }
  onChange = (e) => {
    let v = e.target.value;
    this.props.onChange(v)
  }
  render() {
    return <input type="text" {...this.props} onChange={this.onChange} />
  }
}
const NewPass = Password => class extends React.Component {
  validate() {

  }
  render() {
    return <Password {...this.props} />
  }
}
const NewPassWord = NewPass(Password)
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e) {
    e.preventDefault();
    let { getFormData, validateFields } = this.props.form;
    console.log(getFormData())
    validateFields([], function (arg) {
      console.log(arg, 1111)
    });
    // validateFields([], function (arg) {
    //   console.log(arg, 2222)
    // });
  }
  onChange() {
    // alert(1)
    console.log(+new Date())
  }
  clear() {
    this.props.form.setFieldsValue({
      'obj.name': +new Date()
    });
    this.props.form.setFieldsValue({
      obj: { name: +new Date(), b: 1 },
      biz: { password: { txb: +new Date() * 100 }, b: { c: 99 } },
      xxx: 'yyy'
    });
  }
  onBlur(v){
    this.forceUpdate();
  }
  render() {
    // debugger;
    let { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Item>
          {getFieldDecorator('obj.name', {
            value: '',
            rules: [{
              required: true, message: '名称必填项',
              'testRule':true,message:'not 123'
            }]
          })(
            <Input onChange={this.onChange.bind(this)} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('obj.name2', {
            value: '',
            rules: [{
              required: true, message: '名称必填项',
              'testRule':true,message:'not 123'
            }]
          })(
            <Input onChange={this.onChange.bind(this)} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('biz.password.txb', {
            value: '',
            rules: [{
              required: true, message: '密码必填项'
            }, {
              custom: 'validate', message: "自定义验证"
            },
            {
              async: 'asyncValidate', message: "异步验证"
            }]
          })(
            <NewPassWord ref={ref => this.passRef = ref} onBlur={this.onBlur.bind(this)}/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('biz.password.txb', {
            value: '',
            rules: [{
              required: true, message: '密码必填项'
            }, {
              custom: 'validate', message: "自定义验证"
            },
            {
              async: 'asyncValidate', message: "异步验证"
            }]
          })(
            <Test onChange={()=>{
              this.forceUpdate();
            }}/>
          )}
        </Form.Item>
        <Form.Item>
          <input ref={ref => this.passRef = ref} />
        </Form.Item>
        <Form.Item>
          <button type="submit" onClick={()=>{
            this.forceUpdate();
          }} value="提交">提交</button>
          <button type="button" onClick={this.clear.bind(this)}>赋值</button>
        </Form.Item>
      </Form>
    )
  }
}
class Test extends React.Component{
  onChange=()=>{
    this.props.onChange();
  }
  componentWillUnmount(){
    debugger;
  }
  render(){
    return <Input onChange={this.onChange}/>
  }
}
let Form1 = Form.create({ name: "txb" })(App1);
let Form2 = Form.create({})(App2);
function App() {
  return (
    <div>
      <Form1 />
      <Form2 />
    </div>
  )
}
ReactDOM.render(<App />, appElement);