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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppBar = __webpack_require__("material-ui/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = __webpack_require__("material-ui/svg-icons/action/search");

var _search2 = _interopRequireDefault(_search);

var _settings = __webpack_require__("material-ui/svg-icons/action/settings");

var _settings2 = _interopRequireDefault(_settings);

var _menu = __webpack_require__("material-ui/svg-icons/navigation/menu");

var _menu2 = _interopRequireDefault(_menu);

var _close = __webpack_require__("material-ui/svg-icons/navigation/close");

var _close2 = _interopRequireDefault(_close);

var _AutoComplete = __webpack_require__("material-ui/AutoComplete");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Drawer = __webpack_require__("material-ui/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Zoom = __webpack_require__("react-reveal/Zoom");

var _Zoom2 = _interopRequireDefault(_Zoom);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sharedStyles = __webpack_require__("./lib/sharedStyles.js");

var _DrawerList = __webpack_require__("./components/lists/DrawerList.jsx");

var _DrawerList2 = _interopRequireDefault(_DrawerList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { dataSource: [], showSearch: false, openDrawer: false };
    _this.handleUpdateInput = _this.handleUpdateInput.bind(_this);
    _this.handleSearchClick = _this.handleSearchClick.bind(_this);
    _this.handleDrawer = _this.handleDrawer.bind(_this);
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
    key: 'handleDrawer',
    value: function handleDrawer() {
      this.setState({
        openDrawer: !this.state.openDrawer
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        _react2.default.createElement(_AppBar2.default, {
          title: _react2.default.createElement(
            _link2.default,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            _react2.default.createElement(
              'span',
              { style: _sharedStyles.titleStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              'REARN'
            )
          ),
          iconElementLeft: _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react2.default.createElement(
              _IconButton2.default,
              { iconStyle: _sharedStyles.linkStyle, onClick: this.handleDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              this.state.openDrawer ? _react2.default.createElement(_close2.default, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              }) : _react2.default.createElement(_menu2.default, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              })
            ),
            _react2.default.createElement(
              _Drawer2.default,
              {
                open: this.state.openDrawer,
                docked: false,
                onRequestChange: function onRequestChange(openDrawer) {
                  return _this2.setState({ openDrawer: openDrawer });
                },
                width: 185,
                containerStyle: { top: '50px' },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react2.default.createElement(_DrawerList2.default, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              })
            )
          ),
          iconElementRight: _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            this.state.showSearch ? _react2.default.createElement(
              'div',
              { style: { display: 'inline-block' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              _react2.default.createElement(
                _Zoom2.default,
                { duration: 500, right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                _react2.default.createElement(_AutoComplete2.default, {
                  inputStyle: { color: '#FFF' },
                  hintStyle: { color: '#936dc5' },
                  hintText: 'for what?',
                  dataSource: this.state.dataSource,
                  onUpdateInput: this.handleUpdateInput,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                })
              )
            ) : null,
            _react2.default.createElement(
              _IconButton2.default,
              { tooltip: 'Search', iconStyle: _sharedStyles.linkStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              _react2.default.createElement(_search2.default, { onClick: this.handleSearchClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              })
            ),
            _react2.default.createElement(
              _link2.default,
              { href: '/settings', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                }
              },
              _react2.default.createElement(
                _IconButton2.default,
                { tooltip: 'Settings', iconStyle: _sharedStyles.linkStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                },
                _react2.default.createElement(_settings2.default, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  }
                })
              )
            )
          ),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ "./components/lists/DrawerList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\lists\\DrawerList.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__("material-ui/List");

var _Avatar = __webpack_require__("material-ui/Avatar");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _accountCircle = __webpack_require__("material-ui/svg-icons/action/account-circle");

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _info = __webpack_require__("material-ui/svg-icons/action/info");

var _info2 = _interopRequireDefault(_info);

var _colors = __webpack_require__("material-ui/styles/colors");

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerList = function DrawerList() {
  return _react2.default.createElement(
    _List.List,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    _react2.default.createElement(_List.ListItem, {
      leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_accountCircle2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }), backgroundColor: _colors.purple800, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      primaryText: 'Login',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    _react2.default.createElement(
      _link2.default,
      { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_info2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }), backgroundColor: _colors.purple800, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        primaryText: 'About',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    )
  );
};

exports.default = DrawerList;

/***/ }),

/***/ "./lib/layout.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\lib\\layout.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MuiThemeProvider = __webpack_require__("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _rearnTheme = __webpack_require__("./lib/rearnTheme.js");

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
        { muiTheme: _rearnTheme2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          _react2.default.createElement(
            _head2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            _react2.default.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              this.props.title
            ),
            _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            })
          ),
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }),
          this.props.children,
          _react2.default.createElement(
            'footer',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            _react2.default.createElement('span', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),

/***/ "./lib/rearnTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = __webpack_require__("material-ui/styles/getMuiTheme");

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__("material-ui/styles/colors");

var _spacing = __webpack_require__("material-ui/styles/spacing");

var _spacing2 = _interopRequireDefault(_spacing);

var _colorManipulator = __webpack_require__("material-ui/utils/colorManipulator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rearnTheme = (0, _getMuiTheme2.default)({
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.purple800,
    primary2Color: _colors.purple500,
    primary3Color: _colors.purple200,
    accent1Color: _colors.cyan200,
    accent2Color: '#33869F',
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

/***/ "./lib/sharedStyles.js":
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

/***/ "./pages/settings.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\settings.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Settings = function Settings() {
  return _react2.default.createElement(
    _layout2.default,
    { title: 'Rearn - settings', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      'Welcome to Settings!'
    )
  );
};

exports.default = Settings;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/settings.jsx");


/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/AutoComplete":
/***/ (function(module, exports) {

module.exports = require("material-ui/AutoComplete");

/***/ }),

/***/ "material-ui/Avatar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),

/***/ "material-ui/Drawer":
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),

/***/ "material-ui/IconButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "material-ui/styles/colors":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "material-ui/styles/spacing":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/spacing");

/***/ }),

/***/ "material-ui/svg-icons/action/account-circle":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/account-circle");

/***/ }),

/***/ "material-ui/svg-icons/action/info":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/info");

/***/ }),

/***/ "material-ui/svg-icons/action/search":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/search");

/***/ }),

/***/ "material-ui/svg-icons/action/settings":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/settings");

/***/ }),

/***/ "material-ui/svg-icons/navigation/close":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/close");

/***/ }),

/***/ "material-ui/svg-icons/navigation/menu":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/menu");

/***/ }),

/***/ "material-ui/utils/colorManipulator":
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/colorManipulator");

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

/***/ }),

/***/ "react-reveal/Zoom":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ })

/******/ });
//# sourceMappingURL=settings.js.map