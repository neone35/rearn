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

/***/ "./components/DataList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\DataList.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__("material-ui/List");

var _Avatar = __webpack_require__("material-ui/Avatar");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _folder = __webpack_require__("material-ui/svg-icons/file/folder");

var _folder2 = _interopRequireDefault(_folder);

var _viewCarousel = __webpack_require__("material-ui/svg-icons/action/view-carousel");

var _viewCarousel2 = _interopRequireDefault(_viewCarousel);

var _colors = __webpack_require__("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataList = function DataList() {
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    _react2.default.createElement(
      _List.List,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }), backgroundColor: _colors.purple800, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }),
        rightIcon: _react2.default.createElement(
          'p',
          { style: { color: 'blue' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          '60%'
        ),
        primaryText: 'Physics folder',
        secondaryText: '5 sets',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }), backgroundColor: _colors.purple800, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        rightIcon: _react2.default.createElement(
          'p',
          { style: { color: 'green' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          '92%'
        ),
        primaryText: 'Flashcard folder long name',
        secondaryText: '2 sets',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_viewCarousel2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }),
        rightIcon: _react2.default.createElement(
          'p',
          { style: { color: 'green' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          '75%'
        ),
        primaryText: 'Geography islands',
        secondaryText: '88 cards',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_viewCarousel2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }),
        rightIcon: _react2.default.createElement(
          'p',
          { style: { color: 'red' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          '35%'
        ),
        primaryText: 'History dates',
        secondaryText: '25 cards',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })
    )
  );
};

exports.default = DataList;

/***/ }),

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

var _AutoComplete = __webpack_require__("material-ui/AutoComplete");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Zoom = __webpack_require__("react-reveal/Zoom");

var _Zoom2 = _interopRequireDefault(_Zoom);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sharedStyles = __webpack_require__("./lib/sharedStyles.js");

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
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        _react2.default.createElement(_AppBar2.default, {
          title: _react2.default.createElement(
            _link2.default,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            _react2.default.createElement(
              'span',
              { style: _sharedStyles.titleStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'REARN'
            )
          ),
          iconElementRight: _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            this.state.showSearch ? _react2.default.createElement(
              'div',
              { style: { display: 'inline-block' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              _react2.default.createElement(
                _Zoom2.default,
                { duration: 500, right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
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
                    lineNumber: 50
                  }
                })
              )
            ) : null,
            _react2.default.createElement(
              _IconButton2.default,
              { tooltip: 'Search', iconStyle: _sharedStyles.linkStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              _react2.default.createElement(_search2.default, { onClick: this.handleSearchClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              })
            ),
            _react2.default.createElement(
              _link2.default,
              { href: '/settings', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              _react2.default.createElement(
                _IconButton2.default,
                { tooltip: 'Settings', iconStyle: _sharedStyles.linkStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                _react2.default.createElement(_settings2.default, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                })
              )
            )
          ),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ "./components/LastInfo.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\LastInfo.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__("material-ui/Toolbar");

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LastInfo = function LastInfo(props) {
  return _react2.default.createElement(
    _link2.default,
    { href: '/settings', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      _Toolbar.Toolbar,
      { style: { cursor: 'pointer' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Last studied', style: { color: 'white', fontSize: '0.8em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        _react2.default.createElement(_Toolbar.ToolbarTitle, { text: props.lastStudied, style: { color: 'white' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        })
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        { lastChild: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        _react2.default.createElement(_Toolbar.ToolbarTitle, { text: props.lastSet, style: { color: 'white' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        })
      )
    )
  );
};

exports.default = LastInfo;

/***/ }),

/***/ "./components/StatTabs.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\StatTabs.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

var _Tabs = __webpack_require__("material-ui/Tabs");

var _Paper = __webpack_require__("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localLabels = ['8 sets', '235 cards', '2 folders'];
var localPages = ['/sets', '/cards', '/folders'];

function handleActive(tab) {
  var dataroute = tab.props.dataroute;

  _router2.default.push(dataroute);
}

var StatTabs = function (_React$Component) {
  _inherits(StatTabs, _React$Component);

  function StatTabs(props) {
    _classCallCheck(this, StatTabs);

    var _this = _possibleConstructorReturn(this, (StatTabs.__proto__ || Object.getPrototypeOf(StatTabs)).call(this, props));

    _this.state = {
      value: _this.props.labels[1] != null ? _this.props.labels[1] : localLabels[1]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(StatTabs, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }

    // TODO: replace dataroute=/settings with {propPages[index]}

  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _props = this.props,
          labels = _props.labels,
          pages = _props.pages;

      var useLabels = labels == null ? localLabels : labels;
      var usePages = pages == null ? localPages : pages; // eslint-disable-line
      var tabs = useLabels.map(function (useLabel, index) {
        return (// eslint-disable-line
          _react2.default.createElement(_Tabs.Tab, {
            buttonStyle: { backgroundColor: 'white', color: 'grey' },
            label: useLabel,
            key: useLabel,
            onActive: handleActive,
            dataroute: '/settings',
            value: useLabel,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          })
        );
      });
      return _react2.default.createElement(
        _Tabs.Tabs,
        {
          value: this.state.value,
          onChange: this.handleChange,
          inkBarStyle: { backgroundColor: 'purple' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        tabs
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Paper2.default,
        { zDepth: 1, rounded: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        this.renderTabs()
      );
    }
  }]);

  return StatTabs;
}(_react2.default.Component);

exports.default = StatTabs;

// TODO: replace /settings with {propPages[index]}
// function StatTabs(props) {
//   const { propLabels, propPages } = props;
//   let tabs = null;
//   if (propLabels != null) {
//     tabs = propLabels.map((propLabel, index) =>
//       (
//         <Tab
//           label={propLabel}
//           key={propLabel}
//           onActive={handleActive}
//           dataroute="/settings"
//         >
//           <div>
//             <p>{propPages[index]}</p>
//           </div>
//         </Tab>
//       ));
//   } else {
//     tabs = localLabels.map((localLabel, index) =>
//       (
//         <Tab
//           label={localLabel}
//           key={localLabel}
//           onActive={handleActive}
//           dataroute="/settings"
//         >
//           <div>
//             <p>{localPages[index]}</p>
//           </div>
//         </Tab>
//       ));
//   }
//   return (
//     <Tabs>{tabs}</Tabs>
//   );
// }

// export default StatTabs;

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
          {
            __source: {
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

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\index.jsx';

var _RaisedButton = __webpack_require__("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = __webpack_require__("material-ui/FloatingActionButton");

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = __webpack_require__("material-ui/svg-icons/content/add");

var _add2 = _interopRequireDefault(_add);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

var _StatTabs = __webpack_require__("./components/StatTabs.jsx");

var _StatTabs2 = _interopRequireDefault(_StatTabs);

var _LastInfo = __webpack_require__("./components/LastInfo.jsx");

var _LastInfo2 = _interopRequireDefault(_LastInfo);

var _DataList = __webpack_require__("./components/DataList.jsx");

var _DataList2 = _interopRequireDefault(_DataList);

var _colors = __webpack_require__("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsetLink = function CardsetLink(props) {
  return _react2.default.createElement(
    'li',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/cardset?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _react2.default.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
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
        lineNumber: 21
      }
    },
    _react2.default.createElement(_StatTabs2.default, {
      labels: ['10 sets', '612 cards', '8 folders'],
      pages: ['/sets', '/cards', '/folders'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    _react2.default.createElement(_LastInfo2.default, { lastStudied: 'MAR10 14:38', lastSet: 'Flashcard folder 1', __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    _react2.default.createElement(_DataList2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }),
    _react2.default.createElement(CardsetLink, { title: 'Physics1', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Button test', __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      {
        backgroundColor: _colors.green800,
        style: {
          margin: 0,
          top: 'auto',
          right: 160,
          bottom: 20,
          left: 'auto',
          position: 'fixed'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      _react2.default.createElement(_add2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })
    )
  );
};

exports.default = Index;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


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

/***/ "material-ui/FloatingActionButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/FloatingActionButton");

/***/ }),

/***/ "material-ui/IconButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/Paper":
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),

/***/ "material-ui/RaisedButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ "material-ui/Tabs":
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),

/***/ "material-ui/Toolbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

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

/***/ "material-ui/svg-icons/action/search":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/search");

/***/ }),

/***/ "material-ui/svg-icons/action/settings":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/settings");

/***/ }),

/***/ "material-ui/svg-icons/action/view-carousel":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/view-carousel");

/***/ }),

/***/ "material-ui/svg-icons/content/add":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/add");

/***/ }),

/***/ "material-ui/svg-icons/file/folder":
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/file/folder");

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

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map