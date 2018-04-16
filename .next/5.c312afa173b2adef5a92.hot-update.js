webpackHotUpdate(5,{

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _link = __webpack_require__("./node_modules/next/link.js");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _SharedStyles = __webpack_require__("./components/SharedStyles.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.toggleNavbar = _this.toggleNavbar.bind(_this);
    _this.state = {
      collapsed: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'toggleNavbar',
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
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
            lineNumber: 35
          }
        },
        _react2.default.createElement(
          _reactstrap.Navbar,
          { color: 'primary', light: true, expand: 'md', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          _react2.default.createElement(
            _reactstrap.NavbarBrand,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            'REARN'
          ),
          _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          _react2.default.createElement(
            _reactstrap.Collapse,
            { isOpen: this.state.isOpen, navbar: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(
              _reactstrap.Nav,
              { className: 'ml-auto', navbar: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              _react2.default.createElement(
                _reactstrap.NavItem,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', style: _SharedStyles.linkStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      }
                    },
                    'Home'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/settings', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', style: _SharedStyles.linkStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                      }
                    },
                    'Settings'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.UncontrolledDropdown,
                { nav: true, inNavbar: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                _react2.default.createElement(
                  _reactstrap.DropdownToggle,
                  { nav: true, caret: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  'Options'
                ),
                _react2.default.createElement(
                  _reactstrap.DropdownMenu,
                  { right: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    }
                  },
                  _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      }
                    },
                    'Option 1'
                  ),
                  _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      }
                    },
                    'Option 2'
                  ),
                  _react2.default.createElement(_reactstrap.DropdownItem, { divider: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    }
                  }),
                  _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      }
                    },
                    'Reset'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(_react2.default.Component);

var _default = Header;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.c312afa173b2adef5a92.hot-update.js.map