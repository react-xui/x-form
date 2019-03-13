'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-seed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import Style from './_Seed'; 


var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      // console.log(123)
      return _react2.default.createElement('form', this.props);
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;

Form.Item = _FormItem2.default;
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
var formData = {};
// let formRef = {};
//提供方法对表单控件进行再次封装 ，托管value的管理，返回一个新的表单克隆实例
Form.getFieldDecorator = function (name, obj) {
  // return (WrapComponent) => class extends Component{
  //   render(){
  //     return <WrapComponent />
  //   }
  // }
  var triggerName = [obj.trigger || "onChange"];
  return function (WrapComponent) {
    var Cls = function (_Component2) {
      _inherits(Cls, _Component2);

      // console.log(WrapComponent)
      // return hoistNonReactStatics(WrapComponent,<Item/>)
      function Cls(props) {
        _classCallCheck(this, Cls);

        var _this2 = _possibleConstructorReturn(this, (Cls.__proto__ || Object.getPrototypeOf(Cls)).call(this, props));

        var v = typeof obj.initValue === 'undefined' ? '' : obj.initValue;
        _this2.state = { v: v };
        formData[name] = v;
        return _this2;
      }

      _createClass(Cls, [{
        key: 'render',
        value: function render() {
          var _this3 = this;

          var override = {
            // ref:(ref)=>{
            //   // console.log(ref)
            //   formRef[name] = ref;
            // },
            // [obj.trigger||"onChange"]:(e,v)=>{
            //   formData[name] = v;
            // }
            value: this.state.v
          };
          console.log(WrapComponent);
          //对trigger进行合并，先执行内部的change方法
          override[triggerName] = function (e, v) {
            WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](e, v) : null;
            formData[name] = v;
            _this3.setState({ v: v });
          };
          return _react2.default.cloneElement(WrapComponent, override);
        }
      }]);

      return Cls;
    }(_react.Component);

    return _react2.default.createElement(Cls, null);
  };
};
Form.getFormData = function () {
  // let result = {};
  // for(let k in formData){
  //   // debugger;
  //   result[k] = formData[k].state.value;
  // }
  // return result;
  return formData;
};