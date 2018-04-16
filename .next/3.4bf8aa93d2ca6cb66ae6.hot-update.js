webpackHotUpdate(3,{

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppBar = __webpack_require__("./node_modules/material-ui/AppBar/index.js");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = __webpack_require__("./node_modules/material-ui/svg-icons/action/search.js");

var _search2 = _interopRequireDefault(_search);

var _settings = __webpack_require__("./node_modules/material-ui/svg-icons/action/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _AutoComplete = __webpack_require__("./node_modules/material-ui/AutoComplete/index.js");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Zoom = __webpack_require__("./node_modules/react-reveal/Zoom.js");

var _Zoom2 = _interopRequireDefault(_Zoom);

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
              { style: _SharedStyles.titleStyle, __source: {
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
                { duration: 700, right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                },
                _react2.default.createElement(_AutoComplete2.default, {
                  inputStyle: { color: '#FFF' },
                  hintStyle: { color: '#e5e5e5' },
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
              { tooltip: 'Search', iconStyle: _SharedStyles.linkStyle, __source: {
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
                { tooltip: 'Settings', iconStyle: _SharedStyles.linkStyle, __source: {
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
//# sourceMappingURL=3.4bf8aa93d2ca6cb66ae6.hot-update.js.map