(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"), require("react-dom"));
	else
		root["Dialog"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Form = __webpack_require__(1);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _Form2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-xui/x-form
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _FormItem = __webpack_require__(4);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	var _events = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
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
	  }]);

	  return Form;
	}(_react.Component);

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
	            return _this2;
	          }

	          _createClass(Cls, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	              var _this3 = this;

	              self.formControl[cname].on('setValue', function (v) {
	                _this3.setState({ v: v });
	              });
	              self.formControl[cname].on('validate', function (callback) {
	                _this3.validate(_this3.state.v);
	                callback(self.validator[cname]);
	              });
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
	            key: 'validate',
	            value: function validate(v) {
	              var rules = obj.rules || [];
	              // let v = this.state.v;
	              v = typeof v === 'undefined' ? '' : String(v);
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
	                        if (!this.ref.validate(v)) {
	                          isvalid = false;
	                          msg = r.message;
	                        }
	                      }
	                  }
	                }
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
	              override["title"] = title;
	              // console.log(WrapComponent)
	              //对trigger进行合并，先执行内部的change方法
	              override[triggerName] = function (v) {
	                WrapComponent.props.hasOwnProperty(triggerName) ? WrapComponent.props[triggerName](v) : null;
	                // formData[cname] = v;
	                _this4.setFormData(name, v);
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
	              var mergeprops = _extends({}, this.props, override);
	              if (typeof this.props.className !== 'undefined' && typeof override.className !== 'undefined') {
	                mergeprops.className = this.props.className + ' ' + override.className;
	              }
	              mergeprops.ref = function (ref) {
	                _this4.ref = ref;
	              };
	              // console.log(override)
	              return _react2.default.cloneElement(WrapComponent, mergeprops);
	            }
	          }]);

	          return Cls;
	        }(_react.Component);
	        // let props = this.formControl[name];

	        _this5.formControl[cname] = new _events.EventEmitter();
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var FormItem = function (_Component) {
	    _inherits(FormItem, _Component);

	    function FormItem() {
	        _classCallCheck(this, FormItem);

	        return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
	    }

	    _createClass(FormItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_react2.default.Fragment, null, this.props.children);
	        }
	    }]);

	    return FormItem;
	}(_react.Component);

	exports.default = FormItem;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ })
/******/ ])
});
;