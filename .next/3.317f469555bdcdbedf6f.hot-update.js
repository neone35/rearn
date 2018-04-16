webpackHotUpdate(3,{

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'c:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

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

var Header = function Header() {
  return _react2.default.createElement(
    'ul',
    { className: 'nav nav-tabs bg-primary', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      _link2.default,
      { className: 'nav-item', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        'li',
        { className: 'nav-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(
          'a',
          { className: 'nav-link', style: _SharedStyles.linkStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          'Home'
        )
      )
    ),
    _react2.default.createElement(
      _link2.default,
      { className: 'nav-item', href: '/settings', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      _react2.default.createElement(
        'li',
        { className: 'nav-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          'a',
          { className: 'nav-link', style: _SharedStyles.linkStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          'Settings'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'bmd-form-group bmd-collapse-inline pull-xs-left', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      _react2.default.createElement(
        'button',
        { className: 'btn bmd-btn-icon text-white', htmlFor: 'search', 'data-toggle': 'collapse', 'data-target': '#collapse-search', 'aria-expanded': 'false', 'aria-controls': 'collapse-search', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(
          'i',
          { className: 'material-icons', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          'search'
        )
      ),
      _react2.default.createElement(
        'span',
        { id: 'collapse-search', className: 'collapse', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        _react2.default.createElement('input', { className: 'form-control', type: 'text', id: 'search', placeholder: 'Enter your query...', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      )
    )
  );
};

var _default = Header;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  reactHotLoader.register(_default, 'default', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/SharedStyles.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var linkStyle = {
  color: '#FFF'
};

var layoutStyle = {
  border: '1px solid #DDD'
};

exports.linkStyle = linkStyle;
exports.layoutStyle = layoutStyle;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(linkStyle, 'linkStyle', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/SharedStyles.jsx');
  reactHotLoader.register(layoutStyle, 'layoutStyle', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/SharedStyles.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/layout.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'c:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\lib\\layout.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _head = __webpack_require__("./node_modules/next/head.js");

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _SharedStyles = __webpack_require__("./components/SharedStyles.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(_react2.default.Component);

var _default = Layout;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, 'Layout', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/lib/layout.jsx');
  reactHotLoader.register(_default, 'default', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/lib/layout.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/rearnTheme.js":
false,

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/babel-runtime/helpers/toArray.js":
false,

/***/ "./node_modules/bowser/src/bowser.js":
false,

/***/ "./node_modules/chain-function/index.js":
false,

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
false,

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
false,

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
false,

/***/ "./node_modules/keycode/index.js":
false,

/***/ "./node_modules/lodash.merge/index.js":
false,

/***/ "./node_modules/lodash.throttle/index.js":
false,

/***/ "./node_modules/material-ui/AppBar/AppBar.js":
false,

/***/ "./node_modules/material-ui/AppBar/index.js":
false,

/***/ "./node_modules/material-ui/AutoComplete/AutoComplete.js":
false,

/***/ "./node_modules/material-ui/AutoComplete/index.js":
false,

/***/ "./node_modules/material-ui/Divider/Divider.js":
false,

/***/ "./node_modules/material-ui/Divider/index.js":
false,

/***/ "./node_modules/material-ui/FontIcon/FontIcon.js":
false,

/***/ "./node_modules/material-ui/FontIcon/index.js":
false,

/***/ "./node_modules/material-ui/IconButton/IconButton.js":
false,

/***/ "./node_modules/material-ui/IconButton/index.js":
false,

/***/ "./node_modules/material-ui/List/List.js":
false,

/***/ "./node_modules/material-ui/List/ListItem.js":
false,

/***/ "./node_modules/material-ui/List/NestedList.js":
false,

/***/ "./node_modules/material-ui/Menu/Menu.js":
false,

/***/ "./node_modules/material-ui/Menu/index.js":
false,

/***/ "./node_modules/material-ui/Menu/menuUtils.js":
false,

/***/ "./node_modules/material-ui/MenuItem/MenuItem.js":
false,

/***/ "./node_modules/material-ui/MenuItem/index.js":
false,

/***/ "./node_modules/material-ui/Paper/Paper.js":
false,

/***/ "./node_modules/material-ui/Paper/index.js":
false,

/***/ "./node_modules/material-ui/Popover/Popover.js":
false,

/***/ "./node_modules/material-ui/Popover/PopoverAnimationDefault.js":
false,

/***/ "./node_modules/material-ui/RaisedButton/RaisedButton.js":
false,

/***/ "./node_modules/material-ui/RaisedButton/index.js":
false,

/***/ "./node_modules/material-ui/Subheader/Subheader.js":
false,

/***/ "./node_modules/material-ui/Subheader/index.js":
false,

/***/ "./node_modules/material-ui/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/material-ui/SvgIcon/index.js":
false,

/***/ "./node_modules/material-ui/TextField/EnhancedTextarea.js":
false,

/***/ "./node_modules/material-ui/TextField/TextField.js":
false,

/***/ "./node_modules/material-ui/TextField/TextFieldHint.js":
false,

/***/ "./node_modules/material-ui/TextField/TextFieldLabel.js":
false,

/***/ "./node_modules/material-ui/TextField/TextFieldUnderline.js":
false,

/***/ "./node_modules/material-ui/TextField/index.js":
false,

/***/ "./node_modules/material-ui/internal/CircleRipple.js":
false,

/***/ "./node_modules/material-ui/internal/ClickAwayListener.js":
false,

/***/ "./node_modules/material-ui/internal/EnhancedButton.js":
false,

/***/ "./node_modules/material-ui/internal/FocusRipple.js":
false,

/***/ "./node_modules/material-ui/internal/RenderToLayer.js":
false,

/***/ "./node_modules/material-ui/internal/ScaleIn.js":
false,

/***/ "./node_modules/material-ui/internal/ScaleInChild.js":
false,

/***/ "./node_modules/material-ui/internal/Tooltip.js":
false,

/***/ "./node_modules/material-ui/internal/TouchRipple.js":
false,

/***/ "./node_modules/material-ui/node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/material-ui/node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/material-ui/styles/MuiThemeProvider.js":
false,

/***/ "./node_modules/material-ui/styles/baseThemes/lightBaseTheme.js":
false,

/***/ "./node_modules/material-ui/styles/colors.js":
false,

/***/ "./node_modules/material-ui/styles/getMuiTheme.js":
false,

/***/ "./node_modules/material-ui/styles/spacing.js":
false,

/***/ "./node_modules/material-ui/styles/transitions.js":
false,

/***/ "./node_modules/material-ui/styles/typography.js":
false,

/***/ "./node_modules/material-ui/styles/zIndex.js":
false,

/***/ "./node_modules/material-ui/svg-icons/action/search.js":
false,

/***/ "./node_modules/material-ui/svg-icons/action/settings.js":
false,

/***/ "./node_modules/material-ui/svg-icons/navigation/check.js":
false,

/***/ "./node_modules/material-ui/svg-icons/navigation/expand-less.js":
false,

/***/ "./node_modules/material-ui/svg-icons/navigation/expand-more.js":
false,

/***/ "./node_modules/material-ui/svg-icons/navigation/menu.js":
false,

/***/ "./node_modules/material-ui/utils/autoPrefix.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixer.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixerDynamic.js":
false,

/***/ "./node_modules/material-ui/utils/autoprefixerStatic.js":
false,

/***/ "./node_modules/material-ui/utils/callOnce.js":
false,

/***/ "./node_modules/material-ui/utils/childUtils.js":
false,

/***/ "./node_modules/material-ui/utils/colorManipulator.js":
false,

/***/ "./node_modules/material-ui/utils/dom.js":
false,

/***/ "./node_modules/material-ui/utils/events.js":
false,

/***/ "./node_modules/material-ui/utils/propTypes.js":
false,

/***/ "./node_modules/material-ui/utils/rtl.js":
false,

/***/ "./node_modules/react-event-listener/lib/index.js":
false,

/***/ "./node_modules/react-event-listener/lib/supports.js":
false,

/***/ "./node_modules/recompose/compose.js":
false,

/***/ "./node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/recompose/pure.js":
false,

/***/ "./node_modules/recompose/setDisplayName.js":
false,

/***/ "./node_modules/recompose/setStatic.js":
false,

/***/ "./node_modules/recompose/shallowEqual.js":
false,

/***/ "./node_modules/recompose/shouldUpdate.js":
false,

/***/ "./node_modules/recompose/wrapDisplayName.js":
false,

/***/ "./node_modules/simple-assign/index.js":
false,

/***/ "./node_modules/warning/browser.js":
false,

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'c:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\index.jsx';

var _reactstrap = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"reactstrap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _link = __webpack_require__("./node_modules/next/link.js");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var CardsetLink = function CardsetLink(props) {
  return _react2.default.createElement(
    'li',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/cardset?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      _react2.default.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
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
        lineNumber: 15
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      'Hello Rearn!'
    ),
    _react2.default.createElement(CardsetLink, { title: 'Physics1', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }),
    _react2.default.createElement(
      _reactstrap.Button,
      { className: 'bg-secondary text-white', size: 'sm', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      'Button test'
    )
  );
};

var _default = Index;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardsetLink, 'CardsetLink', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
  reactHotLoader.register(Index, 'Index', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
  reactHotLoader.register(_default, 'default', 'c:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index.jsx")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.317f469555bdcdbedf6f.hot-update.js.map