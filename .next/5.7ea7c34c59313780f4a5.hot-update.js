webpackHotUpdate(5,{

/***/ "./components/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\Header.jsx';

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

  reactHotLoader.register(Header, 'Header', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.7ea7c34c59313780f4a5.hot-update.js.map