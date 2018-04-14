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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _SharedStyles = __webpack_require__("./components/SharedStyles.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'nav',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        'a',
        { style: _SharedStyles.linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        'Home'
      )
    ),
    _react2.default.createElement(
      _link2.default,
      { href: '/settings', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      _react2.default.createElement(
        'a',
        { style: _SharedStyles.linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'Settings'
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ "./components/SharedStyles.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var linkStyle = {
  marginRight: 15
};

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

exports.linkStyle = linkStyle;
exports.layoutStyle = layoutStyle;

/***/ }),

/***/ "./lib/layout.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\lib\\layout.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _SharedStyles = __webpack_require__("./components/SharedStyles.jsx");

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
        'div',
        { style: _SharedStyles.layoutStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          _head2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          _react2.default.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            this.props.title
          ),
          _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          })
        ),
        _react2.default.createElement(_Header2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        this.props.children,
        _react2.default.createElement(
          'footer',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react2.default.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),

/***/ "./pages/cardset.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\cardset.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cardset = function Cardset(props) {
  return _react2.default.createElement(
    _layout2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    console.log(props.url),
    _react2.default.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      props.url.query.title
    ),
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'This is the blog post content.'
    )
  );
};

exports.default = Cardset;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cardset.jsx");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=cardset.js.map