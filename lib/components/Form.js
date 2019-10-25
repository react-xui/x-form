'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

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

// import ReactDOM from 'react-dom';

// import { EventEmitter } from 'events';


// import 'antd/lib/tooltip/style/css';

function getValue(d, na) {
  if (na.length === 0) {
    return d;
  }
  var n = na.shift();
  if (typeof d === 'undefined') return '';
  var obj = d[n];
  return getValue(obj, na);
}
var getI18n = function getI18n(key) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var na = String(key).split('.');
  var value = getValue(d, na);
  if (typeof value === 'undefined') {
    return key;
  } else {
    return value;
  }
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (event) {
      event.preventDefault();
      _this.props.onSubmit && _this.props.onSubmit(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      // console.log(this.props)
      var cls = (this.props.className || "") + ' x-form';
      return _react2.default.createElement('form', _extends({ className: cls }, this.props, { onSubmit: this.onSubmit }));
    }
  }], [{
    key: 'addMethod',
    //自定义的规则
    value: function addMethod(rule, callback) {
      Form.methods[rule] = callback;
    }
  }]);

  return Form;
}(_react.Component);

Form.methods = {};
exports.default = Form;

Form.Item = _FormItem2.default;

function setValue(v, na, formData) {
  // if(na.length===0){
  //     return d;
  // }
  var n = na.shift();
  // if(typeof formData[n]=='undefined'){
  if (na.length === 0) {
    formData[n] = v;
  } else {
    formData[n] = formData[n] || {};
  }
  // }
  if (na.length > 0) {
    return setValue(v, na, formData[n]);
  }
}
Form.create = function () {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var prefix = param.name;
  var FormContext = _react2.default.createContext(prefix);
  var form = {
    formData: {},
    formControl: {},
    validator: {},
    getFieldDecorator: function getFieldDecorator(name, obj) {
      var triggerName = obj.trigger || "onChange";
      var validateTrigger = obj.validateTrigger || "onChange";
      var self = this;
      // console.log(this)
      var formData = this.formData;
      return function (WrapComponent) {
        var cname = prefix ? prefix + '.' + name : name;

        var Cls = function (_Component2) {
          _inherits(Cls, _Component2);

          _createClass(Cls, [{
            key: 'setFormData',

            // return hoistNonReactStatics(WrapComponent,<Item/>)
            value: function setFormData(name, v) {
              var na = name.split('.');
              setValue(v, na, formData);
            }
          }]);

          function Cls(props) {
            _classCallCheck(this, Cls);

            var _this2 = _possibleConstructorReturn(this, (Cls.__proto__ || Object.getPrototypeOf(Cls)).call(this, props));

            var v = typeof obj.value === 'undefined' ? '' : obj.value;
            _this2.state = { v: v, validateStatus: true };
            // console.log(self)
            // formData[cname] = v;
            _this2.setFormData(name, v);
            self.formControl[cname] = _this2;
            return _this2;
          }

          _createClass(Cls, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
              // self.formControl[cname].on('setValue', v => {
              //   this.setState({ v });
              // });
              // self.formControl[cname].on('validate', (callback) => {
              //   this.validate(this.state.v);
              //   callback(self.validator[cname]);
              // });
            }
          }, {
            key: 'setValue',
            value: function setValue(v) {
              this.setState({ v: v });
            }
          }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(newProps) {
              var nv = newProps.value;
              if (typeof nv === 'undefined') {
                nv = '';
              }
              if (newProps.value != this.state.v) {
                this.setState({ v: newProps.value });
              }
            }
          }, {
            key: 'validateValue',
            value: function validateValue() {
              this.validate(this.state.v);
            }
          }, {
            key: 'validate',
            value: function validate(v) {
              var _this3 = this;

              var rules = obj.rules || [];
              // let v = this.state.v;
              v = typeof v === 'undefined' ? '' : String(v);
              var isvalid = true,
                  msg = '';

              var _loop = function _loop(i, l) {
                var r = rules[i];
                for (var k in r) {
                  switch (k) {
                    case 'required':
                      {
                        if (v.length === 0) {
                          isvalid = false;
                          msg = r.message;
                        }
                      }
                      break;
                    case 'minLength':
                      if (v.length < r.minLength) {
                        isvalid = false;
                        msg = r.message;
                      }
                      break;
                    case 'maxLength':
                      if (v.length > r.maxLength) {
                        isvalid = false;
                        msg = r.message;
                      }
                      break;
                    case 'min':
                      if (v < r.min) {
                        isvalid = false;
                        msg = r.message;
                      }
                      break;
                    case 'max':
                      if (v > r.max) {
                        isvalid = false;
                        msg = r.message;
                      }
                      break;
                    case 'pattern':
                      {
                        var reg = r.pattern;
                        if (!reg.test(v)) {
                          isvalid = false;
                          msg = r.message;
                        }
                      }break;
                    case 'custom':
                      {
                        var m = r.custom || 'validate';
                        if (!_this3.ref[m](v)) {
                          isvalid = false;
                          msg = r.message;
                        }
                        break;
                      }
                    case 'async':
                      {
                        var _m = r.async || 'asyncValidate';
                        _this3.ref[_m](v).then(function () {
                          if (isvalid) {
                            self.validator[cname] = { validateStatus: true };
                            _this3.setState({ validateStatus: true });
                          }
                        }).catch(function (res) {
                          isvalid = false;
                          msg = res || r.message;
                          self.validator[cname] = { validateStatus: false, msg: msg };
                          _this3.setState({ validateStatus: false, msg: msg });
                        });
                        break;
                      }
                    default:
                      {
                        //取全局定义的验证规则
                        if (Form.methods[k]) {
                          if (!Form.methods[k](v)) {
                            isvalid = false;
                            msg = r.message;
                          }
                        }
                        break;
                      }
                  }
                }
              };

              for (var i = 0, l = rules.length; i < l; i++) {
                _loop(i, l);
              }
              if (isvalid) {
                self.validator[cname] = { validateStatus: true };
                this.setState({ validateStatus: true });
              } else {
                self.validator[cname] = { validateStatus: false, msg: msg };
                this.setState({ validateStatus: false, msg: msg });
              }
            }
          }, {
            key: 'render',
            value: function render() {
              var _this4 = this;

              var override = {
                value: this.state.v
              };
              // formData[cname] = this.state.v;
              this.setFormData(name, this.state.v);
              var className = '',
                  title = '';
              if (!this.state.validateStatus) {
                className = 'validate-error';
                title = this.state.msg;
              }
              override["className"] = className;
              // override["title"] = title;
              // console.log(WrapComponent)
              //对trigger进行合并，先执行内部的change方法
              override[triggerName] = function (v) {
                WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](v) : null;
                // formData[cname] = v;
                _this4.setFormData(name, v);
                // if(triggerName==='onChange'){
                // debugger;
                if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v.constructor.name === 'SyntheticEvent') {
                  v = v.currentTarget.value;
                }
                _this4.setState({ v: v });
                // }
                if (triggerName === validateTrigger) {
                  _this4.validate(v);
                }
              };
              if (validateTrigger !== 'onChange') {
                override[validateTrigger] = function (v) {
                  _this4.validate(v);
                };
              }
              var mergeprops = _extends({ autoFocus: true }, this.props, override);
              if (typeof this.props.className !== 'undefined' && typeof override.className !== 'undefined') {
                mergeprops.className = this.props.className + ' ' + override.className;
              }
              // this.ref = React.createRef();
              // mergeprops.ref = this.ref;
              mergeprops.onLoad = function (ref) {
                _this4.ref = ref;
              };

              var newdom = _react2.default.cloneElement(WrapComponent, mergeprops);
              if (!this.state.validateStatus) {
                getI18n(title, mergeprops.locale);
                newdom = _react2.default.createElement(_tooltip2.default, { title: title, trigger: 'focus|hover' }, newdom);
              }
              return newdom;
            }
          }]);

          return Cls;
        }(_react.Component);
        // let props = this.formControl[name];


        Cls.displayName = 'formItem';
        // this.formControl[cname] = new EventEmitter();
        return _react2.default.createElement(Cls, null);
        // return <Cls {...props}/>
      };
    },
    getFormData: function getFormData() {
      if (prefix) {
        var newData = {};
        for (var k in this.formData) {
          newData[prefix + '.' + k] = this.formData[k];
        }
        return newData;
      }
      return this.formData;
    },
    setFieldsValue: function setFieldsValue(param) {
      // for (let k in param) {
      //   // this.formControl[k] = {value : param[k]};
      //   this.formControl[k].emit('setValue', param[k]);
      // }
      this.setv(param, []);
      console.log(this.formData);
    },
    setv: function setv(obj, path) {
      for (var k in obj) {
        if (k === 'children') continue;
        path.push(k);
        if (_typeof(obj[k]) === 'object') {
          this.setv(obj[k], path);
        } else {
          console.log(path.join('.') + ':' + obj[k]);
          // let eventer = this.formControl[path.join('.')];
          // eventer && eventer.emit('setValue', obj[k]);
          // this.formData[path.join('.')] = obj[k];
          // setValue(obj[k],path.join('.').split('.'),this.formData);
          this.formControl[path.join('.')] && this.formControl[path.join('.')].setValue(obj[k]);
          path.pop();
        }
      }
      path.splice(0, path.length);
    },

    //验证form
    validateFields: function validateFields() {
      var _this5 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof fields === 'function') {
        callback = fields;
        fields = [];
      }
      var result = {};
      var promiseArr = [];
      if (fields.length == 0) {
        var _loop2 = function _loop2(k) {
          promiseArr.push(new Promise(function (resolve) {
            if (_this5.formControl[k]) {
              _this5.formControl[k].validateValue();
              result[k] = _this5.validator[k];
              resolve(result);
            } else {
              resolve({});
            }
            // this.formControl[k].emit('validate', res => {
            //   result[k] = res;
            //   resolve(result)
            // });
          }));
        };

        for (var k in this.formControl) {
          _loop2(k);
        }
      } else {
        var _loop3 = function _loop3(k) {
          promiseArr.push(new Promise(function (resolve) {
            if (_this5.formControl[fields[k]]) {
              result[fields[k]] = _this5.validator[fields[k]];
              resolve(result);
            } else {
              resolve({});
            }
            // this.formControl[fields[k]].emit('validate', res => {
            //   result[fields[k]] = res;
            //   resolve(result)
            // });
          }));
        };

        for (var k in fields) {
          _loop3(k);
        }
      }
      Promise.all(promiseArr).then(function () {
        var isvalid = true,
            msg = [],
            errors = [];
        for (var k in result) {
          if (result[k] && result[k].validateStatus === false) {
            isvalid = false;
            msg.push(result[k].msg);
            errors[k] = result[k];
          }
        }
        callback(errors, isvalid, msg);
      });
    }
  };
  form.getFieldDecorator = form.getFieldDecorator.bind(form);
  form.getFormData = form.getFormData.bind(form);
  form.setFieldsValue = form.setFieldsValue.bind(form);
  form.validateFields = form.validateFields.bind(form);
  return function (WrapComponent) {
    return function (_Component3) {
      _inherits(_class, _Component3);

      function _class(props) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
        // form.getFieldDecorator('a',{})
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          // console.log(form)
          // console.log(WrapComponent)
          return _react2.default.createElement(WrapComponent, _extends({}, this.props, { form: form }));
        }
      }]);

      return _class;
    }(_react.Component);
  };
};