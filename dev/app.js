import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/index';
import '../src/_index';
import {Input} from 'jsx-input';

var appElement = document.getElementById('example');
const {getFieldDecorator,getFormData} = Form;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  onSubmit(e){
    e.preventDefault();
    console.log(getFormData())
    console.log(this.passRef)
  }
  onChange(){
    // alert(1)
    console.log(+new Date())
  }
  render() {
    // debugger;
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
ReactDOM.render(<App />, appElement);