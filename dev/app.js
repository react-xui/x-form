import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/index';
import '../src/_index';
import {Input} from 'jsx-input';

var appElement = document.getElementById('example');
// const {getFieldDecorator,getFormData} = Form;
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e){
    e.preventDefault();
    let {getFormData} = this.props.form;
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
      <div>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Item>
          {getFieldDecorator('obj.name',{initValue:'1234'})(
            <Input onChange={this.onChange.bind(this)}/>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('biz.password',{})(
            <Input type="password" ref={ref=>this.passRef=ref}/>
          )}
          </Form.Item>
          <Form.Item>
            <button type="submit" value="提交">提交</button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e){
    e.preventDefault();
    let {getFormData} = this.props.form;
    console.log(getFormData())
    // console.log(this.passRef)
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
      <div>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Item>
          {getFieldDecorator('obj.name',{
            initValue:'1234',
            rules:[{
              required:true,message:'名称必填项'
            }]
          })(
            <Input onChange={this.onChange.bind(this)}/>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('biz.password',{})(
            <Input type="password" ref={ref=>this.passRef=ref}/>
          )}
          </Form.Item>
          <Form.Item>
            <button type="submit" value="提交">提交</button>
            <button type="button" onClick={this.clear.bind(this)}>赋值</button>
          </Form.Item>
        </Form>
      </div>
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