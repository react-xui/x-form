# x-form
react组件开发规范
***
创建组件的方式
## npm安装

```bash
npm install xui-form --save
```
# 使用方式
```
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
    <Option value="6">我好2</Option>
    </Select>
    )}
    </Form.Item>
    <Form.Item>
    <button type="submit" value="提交">提交</button>
    </Form.Item>
</Form>
```
# API

| 方法 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| getFieldDecorator | 用于和表单进行双向绑定 | | |
| getFormData | 获取表单数据对象 | |
| setFieldsValue | 设置表单数据绑定 | |
| validateFields | 验证表单所有元素 | | 

## getFieldDecorator(id, options) 参数
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| id | 必填输入控件唯一标志。支持嵌套式的写法。 | string | |
| options.rules | 验证规则 | | |
| options.value | 子节点的初始值，类型、可选值均由子节点决定 | | |
## 校验规则

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| required | 不为空 | bool | |
| minLength | 最小长度 | number |
| maxLength | 最大长度 | number |
| min | 最小值 | number |
| max | 最大值 | number | 
| pattern | 正则表达式 | Regex | |
| custom | 自定义验证 | string | 需要在组件的构造函数中调用` this.props.onLoad(this)`，然后声明对应的验证方法，返回`true`或`false` |
| async | 异步验证 | string | 异步验证需要在组件中定义对应的方法，接收value值并返回`promise` |
### 全局添加验证规则
```
Form.addMethod('testRule',(v)=>{
  if(v=='123'){
    return false;
  }else{
    return true;
  }
})
```
或者自定义提示信息
```
Form.addMethod('testRule',(v,props,data)=>{
  if(v=='123'){
    return {success:false,message:'最大值'};
  }else{
    return true;
  }
})
```
### 异步验证
```
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
```
```
{getFieldDecorator('biz.password.txb', {
            rules: [{
              required: true, message: '密码必填项'
            }, {
              custom: 'validate', message: "自定义验证"
            },
            {
              async: 'asyncValidate', message: "异步验证"
            }]
          })(
            <NewPassWord ref={ref => this.passRef = ref} />
          )}
```
### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)

### xui
react xui组件一直在持续更新中，欢迎大家关注[https://github.com/react-xui](https://github.com/react-xui)