webpackHotUpdate(3,{

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

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

var rightButtons = _react2.default.createElement(
  'div',
  {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  },
  _react2.default.createElement(
    _IconButton2.default,
    { tooltip: 'Search', iconStyle: _SharedStyles.linkStyle, ref: undefined.searchBtn, onClick: handleClick, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    _react2.default.createElement(_search2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    })
  ),
  _react2.default.createElement(
    _link2.default,
    { href: '/settings', __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'Settings', iconStyle: _SharedStyles.linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      _react2.default.createElement(_settings2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })
    )
  )
);

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleClick',
    value: function handleClick() {
      console.log('this is:', this);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        _react2.default.createElement(_AppBar2.default, {
          title: _react2.default.createElement(
            _link2.default,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            _react2.default.createElement(
              'span',
              { style: _SharedStyles.titleStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              'REARN'
            )
          ),
          iconElementRight: rightButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
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

  reactHotLoader.register(rightButtons, 'rightButtons', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  reactHotLoader.register(Header, 'Header', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d950294cbcb0743b88e4.hot-update.js.map