import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/index';
import '../src/_index';
import {Input} from 'jsx-input';
import Select from 'jsx-select';
import 'jsx-select/lib/index.css'
const {Option} = Select;

var appElement = document.getElementById('example');
// const {getFieldDecorator,getFormData} = Form;
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e){
    e.preventDefault();
    let {getFormData,validateFields} = this.props.form;
    validateFields((res,isvalid,msg)=>console.log(res,isvalid,msg));
    console.log(getFormData())
    // console.log(this.passRef)
  }
  onChange(){
    // alert(1)
    console.log(+new Date())
  }
  render() {
    let {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.onSubmit.bind(this)} >
          <Form.Item>
          {getFieldDecorator('obj.name',{value:'aa'})(
            <Input onChange={this.onChange.bind(this)}/>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('biz.password',{rules:[
           { 
             required:true, message:'必填项'
          },{ 
            pattern:/^\d*$/, message:'只能输入数字'
         }
          ]})(
            <Input type="password" ref={ref=>this.passRef=ref}/>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('obj.sex',{value:['2']})(
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
class Password extends React.Component{
  validate(v){
    if(v.length>6 ){
      return true;
    }else{
      return false;
    }
  }
  onChange=(e)=>{
    let v = e.target.value;
    this.props.onChange(v)
  }
  render(){
    return <input type="text" {...this.props} onChange={this.onChange}/>
  }
}
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e){
    e.preventDefault();
    let {getFormData,validateFields} = this.props.form;
    console.log(getFormData())
    validateFields(['obj.name'],function(arg){
      console.log(arg,1111)
    });
    validateFields([],function(arg){
      console.log(arg,2222)
    });
  }
  onChange(){
    // alert(1)
    console.log(+new Date())
  }
  clear(){
    this.props.form.setFieldsValue({
      'obj.name':+new Date()
    });
  }
  render() {
    // debugger;
    let {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Item>
          {getFieldDecorator('obj.name',{
            value:'1234',
            rules:[{
              required:true,message:'名称必填项'
            }]
          })(
            <Input onChange={this.onChange.bind(this)}/>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('biz.password.txb',{
            rules:[{
              required:true,message:'密码必填项'
            },{
              custom:true,message:"自定义验证"
            }]
          })(
            <Password ref={ref=>this.passRef=ref}/>
          )}
          </Form.Item>
          <Form.Item>
            <button type="submit" value="提交">提交</button>
            <button type="button" onClick={this.clear.bind(this)}>赋值</button>
          </Form.Item>
        </Form>
    )
  }
}
let Form1 = Form.create({name:"txb"})(App1);
let Form2 = Form.create({})(App2);
function App(){
  return (
  <div>
    <Form1/>
    <Form2/>
  </div>
  )
}
ReactDOM.render(<App />, appElement);