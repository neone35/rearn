webpackHotUpdate(4,{

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\index.jsx';

var _Toolbar = __webpack_require__("./node_modules/material-ui/Toolbar/index.js");

var _RaisedButton = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
        lineNumber: 8
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/cardset?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
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
        lineNumber: 16
      }
    },
    _react2.default.createElement(
      _Toolbar.Toolbar,
      { style: { backgroundColor: '#FFF' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          '8 sets'
        ),
        _react2.default.createElement(_Toolbar.ToolbarSeparator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        })
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          '8 sets'
        ),
        _react2.default.createElement(_Toolbar.ToolbarSeparator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        })
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          '8 sets'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      'Hello Rearn!'
    ),
    _react2.default.createElement(CardsetLink, { title: 'Physics1', __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Button test', __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    })
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

  reactHotLoader.register(CardsetLink, 'CardsetLink', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
  reactHotLoader.register(Index, 'Index', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/index.jsx');
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
//# sourceMappingURL=4.9c04ec9ff1476e7bb435.hot-update.js.map