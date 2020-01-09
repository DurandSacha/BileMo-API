(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assets/css/bilemo.css":
/*!*******************************!*\
  !*** ./assets/css/bilemo.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/css/bilemo.css?");

/***/ }),

/***/ "./assets/js/Components/ResponseView.js":
/*!**********************************************!*\
  !*** ./assets/js/Components/ResponseView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResponseView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_generateButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/generateButton */ \"./assets/js/Components/generateButton.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ResponseView =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ResponseView, _Component);\n\n  function ResponseView(props) {\n    var _this;\n\n    _classCallCheck(this, ResponseView);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponseView).call(this, props));\n\n    _this.setState({\n      smartphones: []\n    });\n\n    return _this;\n  } //   (arg) => this.namefunction (){}\n\n\n  _createClass(ResponseView, [{\n    key: \"apiQuery\",\n    value: function apiQuery() {\n      if (this.props.buttonViewSmartphoneState == true) {\n        this.queryViewSmartphone();\n      } else if (this.props.buttonViewOneSmartphoneState == true) {\n        this.queryViewOneSmartphone();\n      } else if (this.props.buttonViewUsers == true) {\n        this.queryViewUsers();\n      }\n    }\n  }, {\n    key: \"queryViewSmartphone\",\n    value: function queryViewSmartphone() {\n      var _this2 = this;\n\n      console.log('query in progress');\n      return fetch('api/smartphones?page=1').then(function (response) {\n        _this2.setState({\n          smartphones: response.smartphones\n        }); //return response.json();\n\n      });\n    }\n  }, {\n    key: \"queryViewOneSmartphone\",\n    value: function queryViewOneSmartphone() {\n      return fetch('api/smartphones/1 ').then(function (response) {\n        return response.json();\n      });\n    }\n  }, {\n    key: \"queryViewUsers\",\n    value: function queryViewUsers() {\n      return fetch('api/users/ ').then(function (response) {\n        return response.json();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      //const { smartphones2 } = this.state;\n      console.log('view smartphones: ' + this.props.buttonViewSmartphoneState);\n      console.log('view one smartphone: ' + this.props.buttonViewOneSmartphoneState);\n      console.log('view users: ' + this.props.buttonViewUsers);\n      console.log('-------------------');\n      this.apiQuery();\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"new-line\"\n      }, \"/*\", this.apiQuery(), \"*/\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"JSON Response :\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, \"/*\", smartphones.map(function (smartphone) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: smartphone.name\n        }, smartphone.name);\n      }), \"*/\"));\n    }\n  }]);\n\n  return ResponseView;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./assets/js/Components/ResponseView.js?");

/***/ }),

/***/ "./assets/js/Components/generateButton.js":
/*!************************************************!*\
  !*** ./assets/js/Components/generateButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_ResponseView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ResponseView */ \"./assets/js/Components/ResponseView.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar generateButton =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(generateButton, _Component);\n\n  function generateButton(props) {\n    var _this;\n\n    _classCallCheck(this, generateButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(generateButton).call(this, props));\n    _this.state = {\n      viewSmartphoneState: false,\n      viewOneSmartphoneState: false,\n      viewUserState: false\n    };\n    return _this;\n  }\n\n  _createClass(generateButton, [{\n    key: \"ReinizializeState\",\n    value: function ReinizializeState() {\n      this.setState({\n        viewSmartphoneState: false\n      });\n      this.setState({\n        viewOneSmartphoneState: false\n      });\n      this.setState({\n        viewUserState: false\n      });\n      console.log('reinitialisation executé');\n    }\n  }, {\n    key: \"viewSmartphone\",\n    value: function viewSmartphone() {\n      this.ReinizializeState();\n      this.setState({\n        viewSmartphoneState: true\n      });\n      var button = 'viewSmartphoneState';\n      console.log('API vers api/smartphones?page=1 ');\n    }\n  }, {\n    key: \"viewOneSmartphone\",\n    value: function viewOneSmartphone() {\n      this.ReinizializeState();\n      this.setState({\n        viewOneSmartphoneState: true\n      });\n      console.log('API vers api/smartphones/{id} ');\n    }\n  }, {\n    key: \"viewUsers\",\n    value: function viewUsers() {\n      this.ReinizializeState();\n      this.setState({\n        viewUserState: true\n      });\n      console.log('API vers api/users ');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"data col-lg-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-success js-view-smartphones\",\n        onClick: function onClick() {\n          return _this2.viewSmartphone();\n        }\n      }, \"View Smartphones Available\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"data col-lg-2\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-success js-view-one-smartphone\",\n        onClick: function onClick() {\n          return _this2.viewOneSmartphone();\n        }\n      }, \"View one Smartphone\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"data col-lg-2\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-success js-view-users\",\n        onClick: function onClick() {\n          return _this2.viewUsers();\n        }\n      }, \"View Your User\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"state 1 :  \", this.state.viewSmartphoneState)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ResponseView__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        buttonViewSmartphoneState: this.state.viewSmartphoneState,\n        buttonViewOneSmartphoneState: this.state.viewOneSmartphoneState,\n        buttonViewUsers: this.state.viewUserState\n      }));\n    }\n  }]);\n\n  return generateButton;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./assets/js/Components/generateButton.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_bilemo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/bilemo.css */ \"./assets/css/bilemo.css\");\n/* harmony import */ var _css_bilemo_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_bilemo_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_ResponseView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/ResponseView */ \"./assets/js/Components/ResponseView.js\");\n/* harmony import */ var _Components_generateButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/generateButton */ \"./assets/js/Components/generateButton.js\");\n\n\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_generateButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), document.getElementById('js-button-generate'));\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ })

},[["./assets/js/main.js","runtime","vendors~main"]]]);