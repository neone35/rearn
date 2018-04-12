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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _SharedStyles = __webpack_require__("./components/SharedStyles.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Default title' : _ref$title;
  return _react2.default.createElement(
    'div',
    { style: _SharedStyles.layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      _head2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      _react2.default.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        title
      ),
      _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ),
    _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    children,
    _react2.default.createElement(
      'footer',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    )
  );
};

exports.default = Layout;

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\index.jsx';

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsetLink = function CardsetLink(props) {
  return _react2.default.createElement(
    'li',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/cardset?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        props.title
      )
    )
  );
};

var Index = function Index() {
  return _react2.default.createElement(
    _layout2.default,
    { title: 'Rearn - index', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      'Hello Rearn!'
    ),
    _react2.default.createElement(CardsetLink, { title: 'Physics1', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })
  );
};

exports.default = Index;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


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
//# sourceMappingURL=index.js.map