webpackHotUpdate(4,{

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/material-ui/Avatar/Avatar.js":
false,

/***/ "./node_modules/material-ui/Avatar/index.js":
false,

/***/ "./node_modules/material-ui/Card/Card.js":
false,

/***/ "./node_modules/material-ui/Card/CardActions.js":
false,

/***/ "./node_modules/material-ui/Card/CardExpandable.js":
false,

/***/ "./node_modules/material-ui/Card/CardHeader.js":
false,

/***/ "./node_modules/material-ui/Card/CardMedia.js":
false,

/***/ "./node_modules/material-ui/Card/CardText.js":
false,

/***/ "./node_modules/material-ui/Card/CardTitle.js":
false,

/***/ "./node_modules/material-ui/Card/index.js":
false,

/***/ "./node_modules/material-ui/Slider/Slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__("./node_modules/material-ui/internal/FocusRipple.js");

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Verifies min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if min >= max otherwise null.
 */
var minMaxPropType = function minMaxPropType(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  if (props.min >= props.max) {
    var errorMsg = propName === 'min' ? 'min should be less than max' : 'max should be greater than min';
    return new Error(errorMsg);
  }
};

/**
 * Verifies value is within the min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if the value is not within the range otherwise null.
 */
var valueInRangePropType = function valueInRangePropType(props, propName, componentName) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  var value = props[propName];
  if (value < props.min || props.max < value) {
    return new Error(propName + ' should be within the range specified by min and max');
  }
};

var crossAxisProperty = {
  x: 'height',
  'x-reverse': 'height',
  y: 'width',
  'y-reverse': 'width'
};

var crossAxisOffsetProperty = {
  x: 'top',
  'x-reverse': 'top',
  y: 'left',
  'y-reverse': 'left'
};

var mainAxisProperty = {
  x: 'width',
  'x-reverse': 'width',
  y: 'height',
  'y-reverse': 'height'
};

var mainAxisMarginFromEnd = {
  x: 'marginRight',
  'x-reverse': 'marginLeft',
  y: 'marginTop',
  'y-reverse': 'marginBottom'
};

var mainAxisMarginFromStart = {
  x: 'marginLeft',
  'x-reverse': 'marginRight',
  y: 'marginBottom',
  'y-reverse': 'marginTop'
};

var mainAxisOffsetProperty = {
  x: 'left',
  'x-reverse': 'right',
  y: 'bottom',
  'y-reverse': 'top'
};

var mainAxisClientProperty = {
  x: 'clientWidth',
  'x-reverse': 'clientWidth',
  y: 'clientHeight',
  'y-reverse': 'clientHeight'
};

var mainAxisClientOffsetProperty = {
  x: 'clientX',
  'x-reverse': 'clientX',
  y: 'clientY',
  'y-reverse': 'clientY'
};

var reverseMainAxisOffsetProperty = {
  x: 'right',
  'x-reverse': 'left',
  y: 'top',
  'y-reverse': 'bottom'
};

var isMouseControlInverted = function isMouseControlInverted(axis) {
  return axis === 'x-reverse' || axis === 'y';
};

var calculateAxis = function calculateAxis(axis, isRtl) {
  if (isRtl) {
    switch (axis) {
      case 'x':
        return 'x-reverse';
      case 'x-reverse':
        return 'x';
    }
  }
  return axis;
};

function getPercent(value, min, max) {
  var percent = (value - min) / (max - min);
  if (isNaN(percent)) {
    percent = 0;
  }

  return percent;
}

var getStyles = function getStyles(props, context, state) {
  var _slider, _track, _filledAndRemaining, _handle, _objectAssign2, _objectAssign3;

  var axis = props.axis,
      disabled = props.disabled,
      max = props.max,
      min = props.min;
  var _context$muiTheme = context.muiTheme,
      isRtl = _context$muiTheme.isRtl,
      _context$muiTheme$sli = _context$muiTheme.slider,
      handleColorZero = _context$muiTheme$sli.handleColorZero,
      handleFillColor = _context$muiTheme$sli.handleFillColor,
      handleSize = _context$muiTheme$sli.handleSize,
      handleSizeDisabled = _context$muiTheme$sli.handleSizeDisabled,
      handleSizeActive = _context$muiTheme$sli.handleSizeActive,
      trackSize = _context$muiTheme$sli.trackSize,
      trackColor = _context$muiTheme$sli.trackColor,
      trackColorSelected = _context$muiTheme$sli.trackColorSelected,
      rippleColor = _context$muiTheme$sli.rippleColor,
      selectionColor = _context$muiTheme$sli.selectionColor;


  var fillGutter = handleSize / 2;
  var disabledGutter = trackSize + handleSizeDisabled / 2;
  var calcDisabledSpacing = disabled ? ' - ' + disabledGutter + 'px' : '';
  var percent = getPercent(state.value, min, max);
  var calculatedAxis = calculateAxis(axis, isRtl);

  var styles = {
    slider: (_slider = {
      touchCallout: 'none',
      userSelect: 'none',
      cursor: 'default'
    }, (0, _defineProperty3.default)(_slider, crossAxisProperty[calculatedAxis], handleSizeActive), (0, _defineProperty3.default)(_slider, mainAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_slider, 'position', 'relative'), (0, _defineProperty3.default)(_slider, 'marginTop', 24), (0, _defineProperty3.default)(_slider, 'marginBottom', 48), _slider),
    track: (_track = {
      position: 'absolute'
    }, (0, _defineProperty3.default)(_track, crossAxisOffsetProperty[calculatedAxis], (handleSizeActive - trackSize) / 2), (0, _defineProperty3.default)(_track, mainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_track, mainAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_track, crossAxisProperty[calculatedAxis], trackSize), _track),
    filledAndRemaining: (_filledAndRemaining = {
      directionInvariant: true,
      position: 'absolute'
    }, (0, _defineProperty3.default)(_filledAndRemaining, crossAxisOffsetProperty, 0), (0, _defineProperty3.default)(_filledAndRemaining, crossAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_filledAndRemaining, 'transition', _transitions2.default.easeOut(null, 'margin')), _filledAndRemaining),
    handle: (_handle = {
      directionInvariant: true,
      boxSizing: 'border-box',
      position: 'absolute',
      cursor: 'pointer',
      pointerEvents: 'inherit'
    }, (0, _defineProperty3.default)(_handle, crossAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_handle, mainAxisOffsetProperty[calculatedAxis], percent === 0 ? '0%' : percent * 100 + '%'), (0, _defineProperty3.default)(_handle, 'zIndex', 1), (0, _defineProperty3.default)(_handle, 'margin', {
      x: trackSize / 2 + 'px 0 0 0',
      'x-reverse': trackSize / 2 + 'px 0 0 0',
      y: '0 0 0 ' + trackSize / 2 + 'px',
      'y-reverse': '0 0 0 ' + trackSize / 2 + 'px'
    }[calculatedAxis]), (0, _defineProperty3.default)(_handle, 'width', handleSize), (0, _defineProperty3.default)(_handle, 'height', handleSize), (0, _defineProperty3.default)(_handle, 'backgroundColor', selectionColor), (0, _defineProperty3.default)(_handle, 'backgroundClip', 'padding-box'), (0, _defineProperty3.default)(_handle, 'border', '0px solid transparent'), (0, _defineProperty3.default)(_handle, 'borderRadius', '50%'), (0, _defineProperty3.default)(_handle, 'transform', {
      x: 'translate(-50%, -50%)',
      'x-reverse': 'translate(50%, -50%)',
      y: 'translate(-50%, 50%)',
      'y-reverse': 'translate(-50%, -50%)'
    }[calculatedAxis]), (0, _defineProperty3.default)(_handle, 'transition', _transitions2.default.easeOut('450ms', 'background') + ', ' + _transitions2.default.easeOut('450ms', 'border-color') + ', ' + _transitions2.default.easeOut('450ms', 'width') + ', ' + _transitions2.default.easeOut('450ms', 'height')), (0, _defineProperty3.default)(_handle, 'overflow', 'visible'), (0, _defineProperty3.default)(_handle, 'outline', 'none'), _handle),
    handleWhenDisabled: {
      boxSizing: 'content-box',
      cursor: 'not-allowed',
      backgroundColor: trackColor,
      width: handleSizeDisabled,
      height: handleSizeDisabled,
      border: 'none'
    },
    handleWhenPercentZero: {
      border: trackSize + 'px solid ' + handleColorZero,
      backgroundColor: handleFillColor,
      boxShadow: 'none'
    },
    handleWhenPercentZeroAndDisabled: {
      cursor: 'not-allowed',
      width: handleSizeDisabled,
      height: handleSizeDisabled
    },
    handleWhenPercentZeroAndFocused: {
      border: trackSize + 'px solid ' + trackColorSelected
    },
    handleWhenActive: {
      width: handleSizeActive,
      height: handleSizeActive
    },
    ripple: {
      height: handleSize,
      width: handleSize,
      overflow: 'visible'
    },
    rippleWhenPercentZero: {
      top: -trackSize,
      left: -trackSize
    },
    rippleInner: {
      height: '300%',
      width: '300%',
      top: -handleSize,
      left: -handleSize
    },
    rippleColor: {
      fill: percent === 0 ? handleColorZero : rippleColor
    }
  };
  styles.filled = (0, _simpleAssign2.default)({}, styles.filledAndRemaining, (_objectAssign2 = {}, (0, _defineProperty3.default)(_objectAssign2, mainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_objectAssign2, 'backgroundColor', disabled ? trackColor : selectionColor), (0, _defineProperty3.default)(_objectAssign2, mainAxisMarginFromEnd[calculatedAxis], fillGutter), (0, _defineProperty3.default)(_objectAssign2, mainAxisProperty[calculatedAxis], 'calc(' + percent * 100 + '%' + calcDisabledSpacing + ')'), _objectAssign2));
  styles.remaining = (0, _simpleAssign2.default)({}, styles.filledAndRemaining, (_objectAssign3 = {}, (0, _defineProperty3.default)(_objectAssign3, reverseMainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_objectAssign3, 'backgroundColor', (state.hovered || state.focused) && !disabled ? trackColorSelected : trackColor), (0, _defineProperty3.default)(_objectAssign3, mainAxisMarginFromStart[calculatedAxis], fillGutter), (0, _defineProperty3.default)(_objectAssign3, mainAxisProperty[calculatedAxis], 'calc(' + (1 - percent) * 100 + '%' + calcDisabledSpacing + ')'), _objectAssign3));

  return styles;
};

var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slider);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      dragging: false,
      focused: false,
      hovered: false,
      value: 0
    }, _this.track = null, _this.handle = null, _this.resolveValue = function (value, min, max) {
      if (value > max) {
        return max;
      }

      if (value < min) {
        return min;
      }

      return value;
    }, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          axis = _this$props.axis,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var isRtl = _this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);

      var action = void 0;

      switch ((0, _keycode2.default)(event)) {
        case 'page down':
        case 'down':
          if (calculatedAxis === 'y-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'left':
          if (calculatedAxis === 'x-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'page up':
        case 'up':
          if (calculatedAxis === 'y-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'right':
          if (calculatedAxis === 'x-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }

      if (action) {
        var newValue = void 0;

        // Cancel scroll
        event.preventDefault();

        switch (action) {
          case 'decrease':
            newValue = _this.state.value - step;
            break;
          case 'increase':
            newValue = _this.state.value + step;
            break;
          case 'min':
            newValue = min;
            break;
          case 'max':
            newValue = max;
            break;
        }

        // We need to use toFixed() because of float point errors.
        // For example, 0.01 + 0.06 = 0.06999999999999999
        newValue = _this.resolveValue(parseFloat(newValue.toFixed(5)), min, max);

        if (_this.state.value !== newValue) {
          _this.setState({
            value: newValue
          });

          if (_this.props.onChange) {
            _this.props.onChange(event, newValue);
          }
        }
      }
    }, _this.handleDragMouseMove = function (event) {
      _this.onDragUpdate(event, 'mouse');
    }, _this.handleTouchMove = function (event) {
      _this.onDragUpdate(event, 'touch');
    }, _this.handleMouseEnd = function (event) {
      document.removeEventListener('mousemove', _this.handleDragMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseEnd);

      _this.onDragStop(event);
    }, _this.handleTouchEnd = function (event) {
      document.removeEventListener('touchmove', _this.handleTouchMove);
      document.removeEventListener('touchup', _this.handleTouchEnd);
      document.removeEventListener('touchend', _this.handleTouchEnd);
      document.removeEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStop(event);
    }, _this.handleTouchStart = function (event) {
      var _this$props2 = _this.props,
          axis = _this$props2.axis,
          disabled = _this$props2.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('touchmove', _this.handleTouchMove);
      document.addEventListener('touchup', _this.handleTouchEnd);
      document.addEventListener('touchend', _this.handleTouchEnd);
      document.addEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStart(event);

      // Cancel scroll and context menu
      event.preventDefault();
    }, _this.handleFocus = function (event) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({
        focused: false,
        active: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleMouseDown = function (event) {
      var _this$props3 = _this.props,
          axis = _this$props3.axis,
          disabled = _this$props3.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event[mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event[mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('mousemove', _this.handleDragMouseMove);
      document.addEventListener('mouseup', _this.handleMouseEnd);

      // Cancel text selection
      event.preventDefault();

      // Set focus manually since we called preventDefault()
      _this.handle.focus();

      _this.onDragStart(event);
    }, _this.handleMouseUp = function () {
      if (!_this.props.disabled) {
        _this.setState({
          active: false
        });
      }
    }, _this.handleMouseEnter = function () {
      _this.setState({
        hovered: true
      });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        hovered: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          min = _props.min,
          max = _props.max;
      var value = this.props.value;


      if (value === undefined) {
        value = defaultValue !== undefined ? defaultValue : min;
      }

      this.setState({
        value: this.resolveValue(value, min, max)
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== undefined && !this.state.dragging) {
        var _nextProps$min = nextProps.min,
            min = _nextProps$min === undefined ? this.props.min : _nextProps$min,
            _nextProps$max = nextProps.max,
            max = _nextProps$max === undefined ? this.props.max : _nextProps$max;


        this.setState({
          value: this.resolveValue(nextProps.value, min, max)
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
       true ? (0, _warning2.default)(false, 'Material-UI Slider: getValue() method is deprecated.\n      Use the onChange callbacks instead.\n      It will be removed with v0.17.0.') : void 0;

      return this.state.value;
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
       true ? (0, _warning2.default)(false, 'Material-UI Slider: clearValue() method is deprecated.\n      Use the value property to control the component instead.\n      It will be removed with v0.17.0.') : void 0;

      this.setState({
        value: this.props.min
      });
    }
  }, {
    key: 'getTrackOffset',
    value: function getTrackOffset() {
      var axis = this.props.axis;
      var isRtl = this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);

      return this.track.getBoundingClientRect()[mainAxisOffsetProperty[calculatedAxis]];
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(event) {
      this.setState({
        dragging: true,
        active: true
      });

      if (this.props.onDragStart) {
        this.props.onDragStart(event);
      }
    }
  }, {
    key: 'onDragUpdate',
    value: function onDragUpdate(event, type) {
      var _this2 = this;

      var _props2 = this.props,
          axis = _props2.axis,
          disabled = _props2.disabled;
      var isRtl = this.context.muiTheme.isRtl;


      if (this.dragRunning) {
        return;
      }
      this.dragRunning = true;

      requestAnimationFrame(function () {
        _this2.dragRunning = false;

        var calculatedAxis = calculateAxis(axis, isRtl);
        var source = type === 'touch' ? event.touches[0] : event;

        var position = void 0;
        if (isMouseControlInverted(calculatedAxis)) {
          position = _this2.getTrackOffset() - source[mainAxisClientOffsetProperty[calculatedAxis]];
        } else {
          position = source[mainAxisClientOffsetProperty[calculatedAxis]] - _this2.getTrackOffset();
        }

        if (!disabled) {
          _this2.setValueFromPosition(event, position);
        }
      });
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(event) {
      this.setState({
        dragging: false,
        active: false
      });

      if (this.props.onDragStop) {
        this.props.onDragStop(event);
      }
    }
  }, {
    key: 'setValueFromPosition',
    value: function setValueFromPosition(event, position) {
      var _props3 = this.props,
          axis = _props3.axis,
          step = _props3.step,
          min = _props3.min,
          max = _props3.max;
      var isRtl = this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);
      var positionMax = this.track[mainAxisClientProperty[calculatedAxis]];

      var value = void 0;

      if (position <= 0) {
        value = min;
      } else if (position >= positionMax) {
        value = max;
      } else {
        value = position / positionMax * (max - min);
        value = Math.round(value / step) * step + min;
        value = parseFloat(value.toFixed(5));
      }

      value = this.resolveValue(value, min, max);

      if (this.state.value !== value) {
        this.setState({
          value: value
        });

        if (this.props.onChange) {
          this.props.onChange(event, value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          axis = _props4.axis,
          disabled = _props4.disabled,
          disableFocusRipple = _props4.disableFocusRipple,
          max = _props4.max,
          min = _props4.min,
          name = _props4.name,
          onBlur = _props4.onBlur,
          onChange = _props4.onChange,
          onDragStart = _props4.onDragStart,
          onDragStop = _props4.onDragStop,
          onFocus = _props4.onFocus,
          required = _props4.required,
          sliderStyle = _props4.sliderStyle,
          step = _props4.step,
          style = _props4.style,
          propValue = _props4.value,
          other = (0, _objectWithoutProperties3.default)(_props4, ['axis', 'disabled', 'disableFocusRipple', 'max', 'min', 'name', 'onBlur', 'onChange', 'onDragStart', 'onDragStop', 'onFocus', 'required', 'sliderStyle', 'step', 'style', 'value']);
      var _state = this.state,
          active = _state.active,
          focused = _state.focused,
          hovered = _state.hovered,
          value = _state.value;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var percent = getPercent(value, min, max);

      var handleStyles = {};
      if (percent === 0) {
        handleStyles = (0, _simpleAssign2.default)({}, styles.handle, styles.handleWhenPercentZero, active && styles.handleWhenActive, (hovered || focused) && !disabled && styles.handleWhenPercentZeroAndFocused, disabled && styles.handleWhenPercentZeroAndDisabled);
      } else {
        handleStyles = (0, _simpleAssign2.default)({}, styles.handle, active && styles.handleWhenActive, disabled && styles.handleWhenDisabled);
      }

      var rippleStyle = (0, _simpleAssign2.default)({}, styles.ripple, percent === 0 && styles.rippleWhenPercentZero);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, style)) }),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.slider, sliderStyle)),
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onMouseDown: this.handleMouseDown,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseUp: this.handleMouseUp,
            onTouchStart: this.handleTouchStart,
            onKeyDown: !disabled ? this.handleKeyDown : undefined
          },
          _react2.default.createElement(
            'div',
            { ref: function ref(node) {
                return _this3.track = node;
              }, style: prepareStyles(styles.track) },
            _react2.default.createElement('div', { style: prepareStyles(styles.filled) }),
            _react2.default.createElement('div', { style: prepareStyles(styles.remaining) }),
            _react2.default.createElement(
              'div',
              {
                ref: function ref(node) {
                  return _this3.handle = node;
                },
                style: prepareStyles(handleStyles),
                tabIndex: 0
              },
              !disabled && !disableFocusRipple && _react2.default.createElement(_FocusRipple2.default, {
                style: rippleStyle,
                innerStyle: styles.rippleInner,
                show: (hovered || focused) && !active,
                color: styles.rippleColor.fill
              })
            )
          )
        ),
        _react2.default.createElement('input', {
          type: 'hidden',
          name: name,
          value: value,
          required: required,
          min: min,
          max: max,
          step: step
        })
      );
    }
  }]);
  return Slider;
}(_react.Component);

Slider.defaultProps = {
  axis: 'x',
  disabled: false,
  disableFocusRipple: false,
  max: 1,
  min: 0,
  required: true,
  step: 0.01,
  style: {}
};
Slider.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Slider.propTypes =  true ? {
  /**
   * The axis on which the slider will slide.
   */
  axis: _propTypes2.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),
  /**
   * The default value of the slider.
   */
  defaultValue: valueInRangePropType,
  /**
   * Disables focus ripple if set to true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If true, the slider will not be interactable.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The maximum value the slider can slide to on
   * a scale from 0 to 1 inclusive. Cannot be equal to min.
   */
  max: minMaxPropType,
  /**
   * The minimum value the slider can slide to on a scale
   * from 0 to 1 inclusive. Cannot be equal to max.
   */
  min: minMaxPropType,
  /**
   * The name of the slider. Behaves like the name attribute
   * of an input element.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event KeyDown event targeting the slider.
   * @param {number} newValue The new value of the slider.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider has begun to move.
   *
   * @param {object} event MouseDown or TouchStart event targeting the slider.
   */
  onDragStart: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slide has stopped moving.
   *
   * @param {object} event MouseEnd or TouchEnd event targeting the slider.
   */
  onDragStop: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Whether or not the slider is required in a form.
   */
  required: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner slider element.
   */
  sliderStyle: _propTypes2.default.object,
  /**
   * The granularity the slider can step through values.
   */
  step: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of the slider.
   */
  value: valueInRangePropType
} : {};
exports.default = Slider;

/***/ }),

/***/ "./node_modules/material-ui/Slider/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Slider = __webpack_require__("./node_modules/material-ui/Slider/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Slider2.default;

/***/ }),

/***/ "./node_modules/material-ui/Tabs/InkBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      inkBar = _context$muiTheme.inkBar,
      isRtl = _context$muiTheme.isRtl;


  return {
    root: {
      left: props.left,
      width: props.width,
      bottom: 0,
      display: 'block',
      backgroundColor: props.color || inkBar.backgroundColor,
      height: 2,
      marginTop: -2,
      position: 'relative',
      transition: _transitions2.default.easeOut('1s', isRtl ? 'right' : 'left')
    }
  };
}

var InkBar = function (_Component) {
  (0, _inherits3.default)(InkBar, _Component);

  function InkBar() {
    (0, _classCallCheck3.default)(this, InkBar);
    return (0, _possibleConstructorReturn3.default)(this, (InkBar.__proto__ || (0, _getPrototypeOf2.default)(InkBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(InkBar, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) });
    }
  }]);
  return InkBar;
}(_react.Component);

InkBar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
InkBar.propTypes =  true ? {
  color: _propTypes2.default.string,
  left: _propTypes2.default.string.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  width: _propTypes2.default.string.isRequired
} : {};
exports.default = InkBar;

/***/ }),

/***/ "./node_modules/material-ui/Tabs/Tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    root: {
      color: props.selected ? tabs.selectedTextColor : tabs.textColor,
      fontWeight: 500,
      fontSize: 14,
      width: props.width,
      textTransform: 'uppercase',
      padding: 0
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: props.label && props.icon ? 72 : 48
    }
  };
}

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(_this.props.value, event, _this);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          index = _props.index,
          onActive = _props.onActive,
          onClick = _props.onClick,
          selected = _props.selected,
          label = _props.label,
          buttonStyle = _props.buttonStyle,
          style = _props.style,
          value = _props.value,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['icon', 'index', 'onActive', 'onClick', 'selected', 'label', 'buttonStyle', 'style', 'value', 'width']);


      var styles = getStyles(this.props, this.context);

      var iconElement = void 0;
      if (icon && _react2.default.isValidElement(icon)) {
        iconElement = _react2.default.cloneElement(icon, {
          style: {
            fontSize: 24,
            color: icon.props && icon.props.style && icon.props.style.color ? icon.props.style.color : styles.root.color,
            marginBottom: label ? 5 : 0
          }
        });
      }

      var rippleOpacity = 0.3;
      var rippleColor = this.context.muiTheme.tabs.selectedTextColor;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          style: (0, _simpleAssign2.default)(styles.root, style),
          focusRippleColor: rippleColor,
          touchRippleColor: rippleColor,
          focusRippleOpacity: rippleOpacity,
          touchRippleOpacity: rippleOpacity,
          onClick: this.handleClick
        }),
        _react2.default.createElement(
          'div',
          { style: (0, _simpleAssign2.default)(styles.button, buttonStyle) },
          iconElement,
          label
        )
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.muiName = 'Tab';
Tab.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Tab.propTypes =  true ? {
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  index: _propTypes2.default.any,
  /**
   * Sets the text value of the tab item to the string specified.
   */
  label: _propTypes2.default.node,
  /**
   * Fired when the active tab changes by touch or tap.
   * Use this event to specify any functionality when an active tab changes.
   * For example - we are using this to route to home when the third tab becomes active.
   * This function will always recieve the active tab as it\'s first argument.
   */
  onActive: _propTypes2.default.func,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Defines if the current tab is selected or not.
   * The Tabs component is responsible for setting this property.
   */
  selected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If value prop passed to Tabs component, this value prop is also required.
   * It assigns a value to the tab so that it can be selected by the Tabs.
   */
  value: _propTypes2.default.any,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  width: _propTypes2.default.string
} : {};
exports.default = Tab;

/***/ }),

/***/ "./node_modules/material-ui/Tabs/TabTemplate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  width: '100%',
  position: 'relative',
  textAlign: 'initial'
};

var TabTemplate = function TabTemplate(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      style = _ref.style;

  var templateStyle = (0, _simpleAssign2.default)({}, styles, style);
  if (!selected) {
    templateStyle.height = 0;
    templateStyle.overflow = 'hidden';
  }

  return _react2.default.createElement(
    'div',
    { style: templateStyle },
    children
  );
};

TabTemplate.propTypes =  true ? {
  children: _propTypes2.default.node,
  selected: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : {};

exports.default = TabTemplate;

/***/ }),

/***/ "./node_modules/material-ui/Tabs/Tabs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _TabTemplate = __webpack_require__("./node_modules/material-ui/Tabs/TabTemplate.js");

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _InkBar = __webpack_require__("./node_modules/material-ui/Tabs/InkBar.js");

var _InkBar2 = _interopRequireDefault(_InkBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex'
    }
  };
}

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.handleTabClick = function (value, event, tab) {
      var valueLink = _this.getValueLink(_this.props);
      var index = tab.props.index;

      if (valueLink.value && valueLink.value !== value || _this.state.selectedIndex !== index) {
        valueLink.requestChange(value, event, tab);
      }

      _this.setState({ selectedIndex: index });

      if (tab.props.onActive) {
        tab.props.onActive(tab);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var valueLink = this.getValueLink(this.props);
      var initialIndex = this.props.initialSelectedIndex;

      this.setState({
        selectedIndex: valueLink.value !== undefined ? this.getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps, nextContext) {
      var valueLink = this.getValueLink(newProps);
      var newState = {
        muiTheme: nextContext.muiTheme || this.context.muiTheme
      };

      if (valueLink.value !== undefined) {
        newState.selectedIndex = this.getSelectedIndex(newProps);
      }

      this.setState(newState);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var tabs = [];

      _react.Children.forEach(props.children, function (tab) {
        if ((0, _react.isValidElement)(tab)) {
          tabs.push(tab);
        }
      });

      return tabs;
    }
  }, {
    key: 'getTabCount',
    value: function getTabCount() {
      return this.getTabs().length;
    }

    // Do not use outside of this component, it will be removed once valueLink is deprecated

  }, {
    key: 'getValueLink',
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex(props) {
      var valueLink = this.getValueLink(props);
      var selectedIndex = -1;

      this.getTabs(props).forEach(function (tab, index) {
        if (valueLink.value === tab.props.value) {
          selectedIndex = index;
        }
      });

      return selectedIndex;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(tab, index) {
      var valueLink = this.getValueLink(this.props);
      return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          contentContainerClassName = _props.contentContainerClassName,
          contentContainerStyle = _props.contentContainerStyle,
          initialSelectedIndex = _props.initialSelectedIndex,
          inkBarStyle = _props.inkBarStyle,
          onChange = _props.onChange,
          style = _props.style,
          tabItemContainerStyle = _props.tabItemContainerStyle,
          tabTemplate = _props.tabTemplate,
          tabTemplateStyle = _props.tabTemplateStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'onChange', 'style', 'tabItemContainerStyle', 'tabTemplate', 'tabTemplateStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var valueLink = this.getValueLink(this.props);
      var tabValue = valueLink.value;
      var tabContent = [];
      var width = 100 / this.getTabCount();

      var tabs = this.getTabs().map(function (tab, index) {
         true ? (0, _warning2.default)(tab.type && tab.type.muiName === 'Tab', 'Material-UI: Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.muiName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs') : void 0;

         true ? (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Material-UI: Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.') : void 0;

        tabContent.push(tab.props.children ? (0, _react.createElement)(tabTemplate || _TabTemplate2.default, {
          key: index,
          selected: _this2.getSelected(tab, index),
          style: tabTemplateStyle
        }, tab.props.children) : undefined);

        return (0, _react.cloneElement)(tab, {
          key: index,
          index: index,
          selected: _this2.getSelected(tab, index),
          width: width + '%',
          onClick: _this2.handleTabClick
        });
      });

      var realSelectedIndex = valueLink.value ? this.getSelectedIndex(this.props) : this.state.selectedIndex;

      var inkBar = realSelectedIndex !== -1 ? _react2.default.createElement(_InkBar2.default, {
        left: width * realSelectedIndex + '%',
        width: width + '%',
        style: inkBarStyle
      }) : null;

      var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.tabItemContainer, tabItemContainerStyle)) },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { style: { width: inkBarContainerWidth } },
          inkBar
        ),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles((0, _simpleAssign2.default)({}, contentContainerStyle)),
            className: contentContainerClassName
          },
          tabContent
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  initialSelectedIndex: 0,
  onChange: function onChange() {}
};
Tabs.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Tabs.propTypes =  true ? {
  /**
   * Should be used to pass `Tab` components.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The css class name of the content's container.
   */
  contentContainerClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the content's container.
   */
  contentContainerStyle: _propTypes2.default.object,
  /**
   * Specify initial visible tab index.
   * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
   * `initialSelectedIndex` will revert back to default.
   * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
   */
  initialSelectedIndex: _propTypes2.default.number,
  /**
   * Override the inline-styles of the InkBar.
   */
  inkBarStyle: _propTypes2.default.object,
  /**
   * Called when the selected value change.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the tab-labels container.
   */
  tabItemContainerStyle: _propTypes2.default.object,
  /**
   * Override the default tab template used to wrap the content of each tab element.
   */
  tabTemplate: _propTypes2.default.func,
  /**
   * Override the inline-styles of the tab template.
   */
  tabTemplateStyle: _propTypes2.default.object,
  /**
   * Makes Tabs controllable and selects the tab whose value prop matches this prop.
   */
  value: _propTypes2.default.any
} : {};
exports.default = Tabs;

/***/ }),

/***/ "./node_modules/material-ui/Tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = exports.Tab = undefined;

var _Tab2 = __webpack_require__("./node_modules/material-ui/Tabs/Tab.js");

var _Tab3 = _interopRequireDefault(_Tab2);

var _Tabs2 = __webpack_require__("./node_modules/material-ui/Tabs/Tabs.js");

var _Tabs3 = _interopRequireDefault(_Tabs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _Tab3.default;
exports.Tabs = _Tabs3.default;
exports.default = _Tabs3.default;

/***/ }),

/***/ "./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-down.js":
false,

/***/ "./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-up.js":
false,

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\aarta\\Documents\\PersonalFiles\\Projects\\WEBprojects\\rearn\\pages\\index.jsx';

var _Toolbar = __webpack_require__("./node_modules/material-ui/Toolbar/index.js");

var _Tabs = __webpack_require__("./node_modules/material-ui/Tabs/index.js");

var _Slider = __webpack_require__("./node_modules/material-ui/Slider/index.js");

var _Slider2 = _interopRequireDefault(_Slider);

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
        lineNumber: 10
      }
    },
    _react2.default.createElement(
      _link2.default,
      { href: '/cardset?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      _react2.default.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
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
        lineNumber: 18
      }
    },
    _react2.default.createElement(
      _Tabs.Tabs,
      { style: { backgroundColor: '#FFF' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      _react2.default.createElement(
        _Tabs.Tab,
        { label: 'Item One', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react2.default.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            'Tab One'
          ),
          _react2.default.createElement(_Slider2.default, { name: 'slider0', defaultValue: 0.5, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          })
        )
      ),
      _react2.default.createElement(
        _Tabs.Tab,
        { label: 'Item Two', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            'Tab Two'
          )
        )
      ),
      _react2.default.createElement(
        _Tabs.Tab,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react2.default.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            'Tab Three'
          )
        )
      )
    ),
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      },
      'Hello Rearn!'
    ),
    _react2.default.createElement(CardsetLink, { title: 'Physics1', __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Button test', __source: {
        fileName: _jsxFileName,
        lineNumber: 39
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
//# sourceMappingURL=4.6be056595dc9636e0fb0.hot-update.js.map