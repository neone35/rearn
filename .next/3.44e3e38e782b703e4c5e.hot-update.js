webpackHotUpdate(3,{

/***/ "./components/StatTabs.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\components\\StatTabs.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__("./node_modules/next/router.js");

var _router2 = _interopRequireDefault(_router);

var _Tabs = __webpack_require__("./node_modules/material-ui/Tabs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      value: 'init'
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
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _props = this.props,
          propLabels = _props.propLabels,
          propPages = _props.propPages;

      var tabs = null;
      if (propLabels != null) {
        tabs = propLabels.map(function (propLabel, index) {
          return _react2.default.createElement(
            _Tabs.Tab,
            {
              style: { backgroundColor: 'white', textColor: 'grey' },
              label: propLabel,
              key: propLabel,
              onActive: handleActive,
              dataroute: '/settings',
              value: propLabel,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                propPages[index]
              )
            )
          );
        });
      } else {
        tabs = localLabels.map(function (localLabel, index) {
          return _react2.default.createElement(
            _Tabs.Tab,
            {
              style: { backgroundColor: 'white' },
              textStyle: { color: 'grey' },
              label: localLabel,
              key: localLabel,
              onActive: handleActive,
              dataroute: '/settings',
              value: localLabel,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                localPages[index]
              )
            )
          );
        });
      }
      return _react2.default.createElement(
        _Tabs.Tabs,
        {
          value: this.state.value,
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        tabs
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        },
        this.renderTabs()
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return StatTabs;
}(_react2.default.Component);

var _default = StatTabs;
exports.default = _default;

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

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(localLabels, 'localLabels', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/StatTabs.jsx');
  reactHotLoader.register(localPages, 'localPages', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/StatTabs.jsx');
  reactHotLoader.register(handleActive, 'handleActive', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/StatTabs.jsx');
  reactHotLoader.register(StatTabs, 'StatTabs', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/StatTabs.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/aarta/Documents/PersonalFiles/Projects/WEBprojects/rearn/components/StatTabs.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.44e3e38e782b703e4c5e.hot-update.js.map