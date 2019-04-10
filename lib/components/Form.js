'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _events = require('events');

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


var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      // console.log(this.props)
      var cls = (this.props.className || "") + ' x-form';
      return _react2.default.createElement('form', _extends({ className: cls }, this.props));
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;

Form.Item = _FormItem2.default;
Form.create = function () {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var prefix = param.name;
  var form = {
    formData: {},
    formControl: {},
    validator: {},
    getFieldDecorator: function getFieldDecorator(name, obj) {
      var _this5 = this;

      var triggerName = obj.trigger || "onChange";
      var validateTrigger = obj.validateTrigger || "onChange";
      var self = this;
      // console.log(this)
      var formData = this.formData;
      return function (WrapComponent) {
        var cname = prefix ? prefix + '.' + name : name;

        var Cls = function (_Component2) {
          _inherits(Cls, _Component2);

          // return hoistNonReactStatics(WrapComponent,<Item/>)
          function Cls(props) {
            _classCallCheck(this, Cls);

            var _this2 = _possibleConstructorReturn(this, (Cls.__proto__ || Object.getPrototypeOf(Cls)).call(this, props));

            var v = typeof obj.initValue === 'undefined' ? '' : obj.initValue;
            _this2.state = { v: v, validateStatus: true };
            // console.log(self)
            formData[cname] = v;
            return _this2;
          }

          _createClass(Cls, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
              var _this3 = this;

              self.formControl[name].on('setValue', function (v) {
                _this3.setState({ v: v });
              });
              self.formControl[name].on('validate', function (callback) {
                _this3.validate(_this3.state.v);
                callback(self.validator[name]);
              });
            }
          }, {
            key: 'validate',
            value: function validate(v) {
              var rules = obj.rules || [];
              // let v = this.state.v;
              var isvalid = true,
                  msg = '';
              for (var i = 0, l = rules.length; i < l; i++) {
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
                    case 'pattern':
                      {
                        var reg = r.pattern;
                        if (!reg.test(v)) {
                          isvalid = false;
                          msg = r.message;
                        }
                      }break;
                  }
                }
              }
              if (isvalid) {
                self.validator[name] = { validateStatus: true };
                this.setState({ validateStatus: true });
              } else {
                self.validator[name] = { validateStatus: false, msg: msg };
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
              formData[cname] = this.state.v;
              var className = '',
                  title = '';
              if (!this.state.validateStatus) {
                className = 'validate-error';
                title = this.state.msg;
              }
              override["className"] = className;
              override["title"] = title;
              // console.log(WrapComponent)
              //对trigger进行合并，先执行内部的change方法
              override[triggerName] = function (v) {
                WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](v) : null;
                formData[cname] = v;
                // if(triggerName==='onChange'){
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
              // console.log(override)
              return _react2.default.cloneElement(WrapComponent, override);
            }
          }]);

          return Cls;
        }(_react.Component);
        // let props = this.formControl[name];

        _this5.formControl[name] = new _events.EventEmitter();
        return _react2.default.createElement(Cls, null);
        // return <Cls {...props}/>
      };
    },
    getFormData: function getFormData() {
      return this.formData;
    },
    setFieldsValue: function setFieldsValue(param) {
      for (var k in param) {
        // this.formControl[k] = {value : param[k]};
        this.formControl[k].emit('setValue', param[k]);
      }
    },

    //验证form
    validateFields: function validateFields() {
      var _this6 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof fields === 'function') {
        callback = fields;
        fields = [];
      }
      var result = {};
      var promiseArr = [];
      if (fields.length == 0) {
        var _loop = function _loop(k) {
          promiseArr.push(new Promise(function (resolve) {
            _this6.formControl[k].emit('validate', function (res) {
              result[k] = res;
              resolve(result);
            });
          }));
        };

        for (var k in this.formControl) {
          _loop(k);
        }
      } else {
        var _loop2 = function _loop2(k) {
          promiseArr.push(new Promise(function (resolve) {
            _this6.formControl[fields[k]].emit('validate', function (res) {
              result[fields[k]] = res;
              resolve(result);
            });
          }));
        };

        for (var k in fields) {
          _loop2(k);
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