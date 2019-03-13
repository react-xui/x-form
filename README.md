# x-form
react组件开发规范
***
创建组件的方式
## npm安装

```bash
npm install xui-form --save
```
基本使用方式
```js
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
```
### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)

### xui
react xui组件一直在持续更新中，欢迎大家关注[https://github.com/react-xui](https://github.com/react-xui)