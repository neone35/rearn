webpackHotUpdate(4,{

/***/ "./pages/settings.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\settings.jsx';

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__("./lib/layout.jsx");

var _layout2 = _interopRequireDefault(_layout);

var _StatTabs = __webpack_require__("./components/StatTabs.jsx");

var _StatTabs2 = _interopRequireDefault(_StatTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Settings = function Settings() {
  return _react2.default.createElement(
    _layout2.default,
    { title: 'Rearn - settings', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(_StatTabs2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Welcome to Settings!'
    )
  );
};

var _default = Settings;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Settings, 'Settings', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/settings.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/pages/settings.jsx');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/settings.jsx")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7b6a819d2691bb51e936.hot-update.js.map