module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MuiThemeProvider = __webpack_require__(3);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _head = __webpack_require__(4);

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _rearnTheme = __webpack_require__(13);

var _rearnTheme2 = _interopRequireDefault(_rearnTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: _rearnTheme2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _head2.default,
            null,
            _react2.default.createElement(
              'title',
              null,
              this.props.title
            ),
            _react2.default.createElement('meta', { charSet: 'utf-8' }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
          ),
          _react2.default.createElement(_Header2.default, null),
          this.props.children,
          _react2.default.createElement(
            'footer',
            null,
            _react2.default.createElement('span', null)
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppBar = __webpack_require__(6);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(7);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = __webpack_require__(8);

var _search2 = _interopRequireDefault(_search);

var _settings = __webpack_require__(9);

var _settings2 = _interopRequireDefault(_settings);

var _AutoComplete = __webpack_require__(10);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Zoom = __webpack_require__(11);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _link = __webpack_require__(1);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SharedStyles = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { dataSource: [], showSearch: false };
    _this.handleUpdateInput = _this.handleUpdateInput.bind(_this);
    _this.handleSearchClick = _this.handleSearchClick.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'handleUpdateInput',
    value: function handleUpdateInput(value) {
      this.setState({
        dataSource: [value, value + value, value + value + value]
      });
    }
  }, {
    key: 'handleSearchClick',
    value: function handleSearchClick() {
      this.setState({
        showSearch: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, {
          title: _react2.default.createElement(
            _link2.default,
            { href: '/' },
            _react2.default.createElement(
              'span',
              { style: _SharedStyles.titleStyle },
              'REARN'
            )
          ),
          iconElementRight: _react2.default.createElement(
            'div',
            null,
            this.state.showSearch ? _react2.default.createElement(
              'div',
              { style: { display: 'inline-block' } },
              _react2.default.createElement(
                _Zoom2.default,
                { duration: 500, right: true },
                _react2.default.createElement(_AutoComplete2.default, {
                  inputStyle: { color: '#FFF' },
                  hintStyle: { color: '#936dc5' },
                  hintText: 'for what?',
                  dataSource: this.state.dataSource,
                  onUpdateInput: this.handleUpdateInput
                })
              )
            ) : null,
            _react2.default.createElement(
              _IconButton2.default,
              { tooltip: 'Search', iconStyle: _SharedStyles.linkStyle },
              _react2.default.createElement(_search2.default, { onClick: this.handleSearchClick })
            ),
            _react2.default.createElement(
              _link2.default,
              { href: '/settings' },
              _react2.default.createElement(
                _IconButton2.default,
                { tooltip: 'Settings', iconStyle: _SharedStyles.linkStyle },
                _react2.default.createElement(_settings2.default, null)
              )
            )
          )
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/search");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/settings");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AutoComplete");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var linkStyle = {
  color: '#FFF'
};

var layoutStyle = {
  border: '1px solid #DDD'
};

var titleStyle = {
  cursor: 'pointer',
  fontWeight: 'bold'
};

exports.linkStyle = linkStyle;
exports.layoutStyle = layoutStyle;
exports.titleStyle = titleStyle;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = __webpack_require__(14);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(15);

var _spacing = __webpack_require__(16);

var _spacing2 = _interopRequireDefault(_spacing);

var _colorManipulator = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rearnTheme = (0, _getMuiTheme2.default)({
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.purple800,
    primary2Color: _colors.purple500,
    primary3Color: _colors.purple200,
    accent1Color: _colors.cyan200,
    accent2Color: _colors.cyan400,
    accent3Color: _colors.green800,
    textColor: _colors.darkBlack,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.cyan500,
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack
  },
  appBar: {
    height: 50
  },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36'
});

exports.default = rearnTheme;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/spacing");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/colorManipulator");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cardset = function Cardset(props) {
  return _react2.default.createElement(
    _layout2.default,
    null,
    console.log(props.url),
    _react2.default.createElement(
      'h1',
      null,
      props.url.query.title
    ),
    _react2.default.createElement(
      'p',
      { style: { color: 'red' } },
      'This is the blog post content.'
    )
  );
};

exports.default = Cardset;

/***/ })
/******/ ]);