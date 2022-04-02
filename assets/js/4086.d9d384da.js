"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[4086],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 5772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Colors = __importStar(__webpack_require__(4269));
var Convert_1 = __importDefault(__webpack_require__(6627));
var Modify_1 = __importDefault(__webpack_require__(3315));
var Util_1 = __importDefault(__webpack_require__(7298));
var Blend = /** @class */ (function () {
    function Blend() {
    }
    /**
     * Blend of one RGB color onto another
     *
     * @param  {Colors.rgb} rgb1
     * @param  {Colors.rgb} rgb2
     * @param  {number}     amount amount to blend, 0-1
     * @return {Colors.rgb}
     */
    Blend.rgbBlendMode = function (rgb1, rgb2, amount, method) {
        if (amount === void 0) { amount = 0.5; }
        // clamp amount of blend to 0-100%
        amount = Math.min(Math.max(amount, 0), 1);
        // normalize to [0,1]
        var c1 = Convert_1.default.rgbNormalize(rgb1);
        var c2 = Convert_1.default.rgbNormalize(rgb2);
        // blending mode
        var c = [
            { a: c1.getR(), b: c2.getR() },
            { a: c1.getG(), b: c2.getG() },
            { a: c1.getB(), b: c2.getB() },
        ];
        var cb = [];
        c.forEach(function (_a) {
            var a = _a.a, b = _a.b;
            var newValue;
            switch (method) {
                case 'screen':
                    newValue = 1 - (1 - a) * (1 - b);
                    break;
                case 'multiply':
                    newValue = a * b;
                    break;
                case 'divide':
                    newValue = a / b;
                    break;
                case 'overlay':
                    newValue = a < 0.5 ? 2 * a * b : 1 - 2 * (1 - a) * (1 - b);
                    break;
                case 'softlight':
                    // W3C method, similar to Photoshop
                    if (b <= 0.5) {
                        newValue = a - (1 - 2 * b) * a * (1 - a);
                    }
                    else {
                        var g = a <= 0.25 ? ((16 * a - 12) * a + 4) * a : Math.sqrt(a);
                        newValue = a + (2 * b - 1) * (g - a);
                    }
                    break;
                case 'colordodge':
                    newValue = b == 1 ? 1 : a / (1 - b);
                    break;
                case 'colorburn':
                    newValue = a > 0 ? 1 - ((1 - b) / a) : 0;
                    break;
                case 'vividlight':
                    if (b > 0.5) {
                        newValue = b == 1 ? 1 : a / (1 - b);
                    }
                    else {
                        newValue = a > 0 ? 1 - ((1 - b) / a) : 0;
                    }
                    break;
                case 'subtraction':
                    newValue = a - b;
                    break;
                case 'lineardodge':
                case 'addition':
                    newValue = a + b;
                    break;
                case 'linearburn':
                    newValue = a + b - 1;
                    break;
                case 'linearlight':
                    newValue = b > 0.5 ? a + b : a + b - 1;
                    break;
                case 'difference':
                    newValue = Math.abs(a - b);
                    break;
                default:
                    newValue = b;
            }
            cb.push(newValue);
        });
        // clamp
        var r3 = Math.min(Math.max(cb[0], 0), rgb1.getMax());
        var g3 = Math.min(Math.max(cb[1], 0), rgb1.getMax());
        var b3 = Math.min(Math.max(cb[2], 0), rgb1.getMax());
        // scale to bitdepth
        r3 = Util_1.default.scaleValueRange(r3, 0, 1, 0, rgb1.getMax(), false);
        g3 = Util_1.default.scaleValueRange(g3, 0, 1, 0, rgb1.getMax(), false);
        b3 = Util_1.default.scaleValueRange(b3, 0, 1, 0, rgb1.getMax(), false);
        // blend as much as opacity of color 2
        var realAmount = (rgb1.getA() / rgb1.getMax()) * amount;
        // blend
        var c4 = this.rgbBlend(rgb1, new Colors.rgb(r3, g3, b3, rgb1.getA()), realAmount);
        return c4;
    };
    /**
     * Blend one RGB color with another
     *
     * @param  {Colors.rgb} rgb1
     * @param  {Colors.rgb} rgb2
     * @param  {number}     amount amount to blend, 0-1
     * @return {Colors.rgb}
     */
    Blend.rgbBlend = function (rgb1, rgb2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var r3 = rgb1.getR() + (rgb2.getR() - rgb1.getR()) * amount;
        var g3 = rgb1.getG() + (rgb2.getG() - rgb1.getG()) * amount;
        var b3 = rgb1.getB() + (rgb2.getB() - rgb1.getB()) * amount;
        var a3 = rgb1.getA() + (rgb2.getA() - rgb1.getA()) * amount;
        return new Colors.rgb(r3, g3, b3, a3);
    };
    /**
     * Blend the hue of one HSV color with another
     *
     * @param  {Colors.hsv} hsv1
     * @param  {Colors.hsv} hsv2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsv}
     */
    Blend.hueBlend = function (hsv1, hsv2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var hueDiff;
        if (Math.abs(hsv2.getH() - hsv1.getH()) > 180) {
            hueDiff = 360 - (hsv2.getH() - hsv1.getH()) * amount * -1;
        }
        else {
            hueDiff = (hsv2.getH() - hsv1.getH()) * amount;
        }
        var h3 = Modify_1.default.hueShift(hsv1.getH(), hueDiff);
        return new Colors.hsv(h3, hsv1.getS(), hsv1.getV(), hsv1.getA());
    };
    /**
     * Blend one HSV color with another
     *
     * @param  {Colors.hsv} hsv1
     * @param  {Colors.hsv} hsv2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsv}
     */
    Blend.hsvBlend = function (hsv1, hsv2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var hueDiff;
        if (Math.abs(hsv2.getH() - hsv1.getH()) > 180) {
            hueDiff = 360 - (hsv2.getH() - hsv1.getH()) * amount * -1;
        }
        else {
            hueDiff = (hsv2.getH() - hsv1.getH()) * amount;
        }
        var h3 = Modify_1.default.hueShift(hsv1.getH(), hueDiff);
        var s3 = hsv1.getS() + (hsv2.getS() - hsv1.getS()) * amount;
        var v3 = hsv1.getV() + (hsv2.getV() - hsv1.getV()) * amount;
        var a3 = hsv1.getA() + (hsv2.getA() - hsv1.getA()) * amount;
        return new Colors.hsv(h3, s3, v3, a3);
    };
    /**
     * Blend the value of one HSV color with another
     *
     * @param  {Colors.hsv} hsv1
     * @param  {Colors.hsv} hsv2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsv}
     */
    Blend.valueBlend = function (hsv1, hsv2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var v3 = hsv1.getV() + (hsv2.getV() - hsv1.getV()) * amount;
        return new Colors.hsv(hsv1.getH(), hsv1.getS(), v3, hsv1.getA());
    };
    /**
     * Blend one HSL color with another
     *
     * @param  {Colors.hsl} hsl1
     * @param  {Colors.hsl} hsl2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsl}
     */
    Blend.hslBlend = function (hsl1, hsl2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var hueDiff;
        if (Math.abs(hsl2.getH() - hsl1.getH()) > 180) {
            hueDiff = 360 - (hsl2.getH() - hsl1.getH()) * amount * -1;
        }
        else {
            hueDiff = (hsl2.getH() - hsl1.getH()) * amount;
        }
        var h3 = Modify_1.default.hueShift(hsl1.getH(), hueDiff);
        var s3 = hsl1.getS() + (hsl2.getS() - hsl1.getS()) * amount;
        var l3 = hsl1.getL() + (hsl2.getL() - hsl1.getL()) * amount;
        var a3 = hsl1.getA() + (hsl2.getA() - hsl1.getA()) * amount;
        return new Colors.hsl(h3, s3, l3, a3);
    };
    /**
     * Blend the lightness of one HSV color with another
     *
     * @param  {Colors.hsl} hsl1
     * @param  {Colors.hsl} hsl2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsl}
     */
    Blend.lightnessBlend = function (hsl1, hsl2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var l3 = hsl1.getL() + (hsl2.getL() - hsl1.getL()) * amount;
        return new Colors.hsl(hsl1.getH(), hsl1.getS(), l3, hsl1.getA());
    };
    /**
     * Blend one HSI color with another
     *
     * @param  {Colors.hsi} hsi1
     * @param  {Colors.hsi} hsi2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsi}
     */
    Blend.hsiBlend = function (hsi1, hsi2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var hueDiff;
        if (Math.abs(hsi2.getH() - hsi1.getH()) > 180) {
            hueDiff = 360 - (hsi2.getH() - hsi1.getH()) * amount * -1;
        }
        else {
            hueDiff = (hsi2.getH() - hsi1.getH()) * amount;
        }
        var h3 = Modify_1.default.hueShift(hsi1.getH(), hueDiff);
        var s3 = hsi1.getS() + (hsi2.getS() - hsi1.getS()) * amount;
        var i3 = hsi1.getI() + (hsi2.getI() - hsi1.getI()) * amount;
        var a3 = hsi1.getA() + (hsi2.getA() - hsi1.getA()) * amount;
        return new Colors.hsi(h3, s3, i3, a3);
    };
    /**
     * Blend the intensity of one HSI color with another
     *
     * @param  {Colors.hsi} hsi1
     * @param  {Colors.hsi} hsi2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsi}
     */
    Blend.intensityBlend = function (hsi1, hsi2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var i3 = hsi1.getI() + (hsi2.getI() - hsi1.getI()) * amount;
        return new Colors.hsi(hsi1.getH(), hsi1.getS(), i3, hsi1.getA());
    };
    /**
     * Blend one HSP color with another
     *
     * @param  {Colors.hsp} hsp1
     * @param  {Colors.hsp} hsp2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsp}
     */
    Blend.hspBlend = function (hsp1, hsp2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var hueDiff;
        if (Math.abs(hsp2.getH() - hsp1.getH()) > 180) {
            hueDiff = 360 - (hsp2.getH() - hsp1.getH()) * amount * -1;
        }
        else {
            hueDiff = (hsp2.getH() - hsp1.getH()) * amount;
        }
        var h3 = Modify_1.default.hueShift(hsp1.getH(), hueDiff);
        var s3 = hsp1.getS() + (hsp2.getS() - hsp1.getS()) * amount;
        var p3 = hsp1.getP() + (hsp2.getP() - hsp1.getP()) * amount;
        var a3 = hsp1.getA() + (hsp2.getA() - hsp1.getA()) * amount;
        return new Colors.hsp(h3, s3, p3, a3);
    };
    /**
     * Blend the perceived brightness of one HSP color with another
     *
     * @param  {Colors.hsp} hsp1
     * @param  {Colors.hsp} hsp2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.hsp}
     */
    Blend.perceivedBrightnessBlend = function (hsp1, hsp2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var p3 = hsp1.getP() + (hsp2.getP() - hsp1.getP()) * amount;
        return new Colors.hsp(hsp1.getH(), hsp1.getS(), p3, hsp1.getA());
    };
    /**
     * Blend one CMYK color with another
     *
     * @param  {Colors.cmyk} cmyk1
     * @param  {Colors.cmyk} cmyk2
     * @param  {number}      amount amount to blend (0-1)
     * @return {Colors.cmyk}
     */
    Blend.cmykBlend = function (cmyk1, cmyk2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var c3 = cmyk1.getC() + (cmyk2.getC() - cmyk1.getC()) * amount;
        var m3 = cmyk1.getM() + (cmyk2.getM() - cmyk1.getM()) * amount;
        var y3 = cmyk1.getY() + (cmyk2.getY() - cmyk1.getY()) * amount;
        var k3 = cmyk1.getK() + (cmyk2.getK() - cmyk1.getK()) * amount;
        return new Colors.cmyk(c3, m3, y3, k3);
    };
    /**
     * Blend one YIQ color with another
     *
     * @param  {Colors.yiq} c1
     * @param  {Colors.yiq} c2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.yiq}
     */
    Blend.yiqBlend = function (c1, c2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var y = c1.getY() + (c2.getY() - c1.getY()) * amount;
        var i = c1.getI() + (c2.getI() - c1.getI()) * amount;
        var q = c1.getQ() + (c2.getQ() - c1.getQ()) * amount;
        return new Colors.yiq(y, i, q);
    };
    /**
     * Blend one Lab color with another
     *
     * @param  {Colors.lab} c1
     * @param  {Colors.lab} c2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.lab}
     */
    Blend.labBlend = function (c1, c2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var l = c1.getL() + (c2.getL() - c1.getL()) * amount;
        var a = c1.getA() + (c2.getA() - c1.getA()) * amount;
        var b = c1.getB() + (c2.getB() - c1.getB()) * amount;
        return new Colors.lab(l, a, b);
    };
    /**
     * Blend one Luv color with another
     *
     * @param  {Colors.luv} c1
     * @param  {Colors.luv} c2
     * @param  {number}     amount amount to blend (0-1)
     * @return {Colors.luv}
     */
    Blend.luvBlend = function (c1, c2, amount) {
        if (amount === void 0) { amount = 0.5; }
        amount = Math.min(Math.max(amount, 0), 1);
        var l = c1.getL() + (c2.getL() - c1.getL()) * amount;
        var u = c1.getU() + (c2.getU() - c1.getU()) * amount;
        var v = c1.getV() + (c2.getV() - c1.getV()) * amount;
        return new Colors.luv(l, u, v);
    };
    return Blend;
}());
module.exports = Blend;


/***/ }),

/***/ 5835:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Colors = __importStar(__webpack_require__(4269));
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.from = function (type, value, args) {
        type = type.toLowerCase().replace(/[^a-z0-9]/, '');
        if (typeof args === 'undefined')
            args = {};
        if (typeof args.bitDepth === 'undefined' &&
            typeof args.bitRate !== 'undefined') {
            args.bitDepth = args.bitRate;
        }
        var from;
        if (typeof value === 'string') {
            if (type == 'hex')
                from = new Colors.hex(value);
            else
                throw new Error('Unable to parse color');
        }
        else if (typeof value === 'number') {
            switch (type) {
                case 'hex':
                    from = new Colors.hex(value);
                    break;
                case 'nm':
                case 'light':
                case 'nanometers':
                case 'nano':
                case 'wavelength':
                    from = new Colors.nm(value);
                    break;
                case 'kelvin':
                case 'k':
                case 'temperature':
                case 'colortemperature':
                case 'temp':
                    from = new Colors.kelvin(value);
                    break;
                default:
                    throw new Error('Unable to determine color type');
            }
        }
        else {
            switch (type) {
                case 'rgb':
                case 'rgba':
                    if (typeof args.bitDepth === 'undefined')
                        args.bitDepth = 8;
                    if (typeof value[3] === 'undefined')
                        value[3] = Math.pow(2, args.bitDepth) - 1;
                    from = new Colors.rgb(value[0], value[1], value[2], value[3], args.bitDepth);
                    break;
                case 'rec709':
                case 'rgb709':
                case 'rec709rgb':
                case 'rgbrec709':
                    if (typeof args.bitDepth === 'undefined')
                        args.bitDepth = 8;
                    if (typeof value[3] === 'undefined')
                        value[3] = Math.pow(2, args.bitDepth) - 1;
                    from = new Colors.rec709rgb(value[0], value[1], value[2], value[3], args.bitDepth);
                    break;
                case 'rec2020':
                case 'rgb2020':
                case 'rec2020rgb':
                case 'rgbrec2020':
                    if (typeof args.bitDepth === 'undefined')
                        args.bitDepth = 10;
                    if (typeof value[3] === 'undefined')
                        value[3] = Math.pow(2, args.bitDepth) - 1;
                    from = new Colors.rec2020rgb(value[0], value[1], value[2], value[3], args.bitDepth);
                    break;
                case 'hsv':
                case 'hsva':
                    if (typeof value[3] === 'undefined')
                        value[3] = 100;
                    from = new Colors.hsv(value[0], value[1], value[2], value[3]);
                    break;
                case 'hsl':
                case 'hsla':
                    if (typeof value[3] === 'undefined')
                        value[3] = 100;
                    from = new Colors.hsl(value[0], value[1], value[2], value[3]);
                    break;
                case 'hsi':
                case 'hsia':
                    if (typeof value[3] === 'undefined')
                        value[3] = 100;
                    from = new Colors.hsi(value[0], value[1], value[2], value[3]);
                    break;
                case 'hsp':
                case 'hspa':
                    if (typeof value[3] === 'undefined')
                        value[3] = 100;
                    from = new Colors.hsp(value[0], value[1], value[2], value[3], args.pb, args.pr);
                    break;
                case 'cmyk':
                    from = new Colors.cmyk(value[0], value[1], value[2], value[3]);
                    break;
                case 'yiq':
                    from = new Colors.yiq(value[0], value[1], value[2], args.normalized);
                    break;
                case 'xyz':
                    from = new Colors.xyz(value[0], value[1], value[2]);
                    break;
                case 'xyy':
                    from = new Colors.xyy(value[0], value[1], value[2]);
                    break;
                case 'lab':
                    from = new Colors.lab(value[0], value[1], value[2]);
                    break;
                case 'luv':
                    from = new Colors.luv(value[0], value[1], value[2]);
                    break;
                case 'ypbpr':
                    if (typeof args.kb == 'undefined' || typeof args.kr == 'undefined') {
                        throw new Error('Must supply Kb and Kr constants');
                    }
                    from = new Colors.ypbpr(value[0], value[1], value[2], args.kb, args.kr);
                    break;
                case 'ycbcr':
                    from = new Colors.ycbcr(value[0], value[1], value[2], args.yLower, args.yUpper, args.cLower, args.cUpper);
                    break;
                default:
                    throw new Error('Unable to determine color type');
            }
        }
        return from;
    };
    return Color;
}());
exports["default"] = new Color();


/***/ }),

/***/ 6035:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.colorType = void 0;
var Convert_1 = __importDefault(__webpack_require__(6627));
var Modify_1 = __importDefault(__webpack_require__(3315));
var Blend_1 = __importDefault(__webpack_require__(5772));
var Harmony_1 = __importDefault(__webpack_require__(3714));
var Colors = __importStar(__webpack_require__(4269));
var colorType = /** @class */ (function () {
    function colorType() {
        this.type = 'colorType';
        // private bitDepth?: number
        // private normalized?: boolean
        // private colorSpace?: string
        // private referenceWhite?: string
        // private kb?: number
        // private kr?: number
        // private pb?: number
        // private pr?: number
        // private yLower?: number
        // private yUpper?: number
        // private cLower?: number
        // private cUpper?: number
        // private gamma?: number
        /**
         * Returns generic simplified object for toString()
         * Overwrite with each subclass
         *
         * @returns {object}
         */
        this.toStringValues = function () { return ({}); };
    }
    /**
     * Returns any property of type boolean|number|string, otherwise returns undefined
     * Useful for passing values as arguments back and forth
     *
     * @param   {string} propertyName
     * @returns {any}
     */
    colorType.prototype.get = function (propertyName) {
        if (['boolean', 'number', 'string'].includes(typeof this[propertyName])) {
            return this[propertyName];
        }
        return undefined;
    };
    /**
     * Set alpha
     * Extend on color types with an alpha value
     *
     * @param   {number}  value
     * @returns {boolean}
     */
    colorType.prototype.setAlpha = function (value) {
        return false;
    };
    /**
     * Stringify object
     *
     * @param   {string | number} whitespace equiv to third JSON.stringify parameter
     * @returns {string}
     */
    colorType.prototype.toString = function (whitespace, quotes, showType) {
        if (quotes === void 0) { quotes = true; }
        if (showType === void 0) { showType = true; }
        // only have a space if the string is whitespaced
        var type = showType ? this.getType() + (whitespace ? ': ' : ':') : '';
        if (whitespace == null)
            whitespace = undefined;
        var json = JSON.stringify(this.toStringValues(), null, whitespace);
        if (!quotes) {
            json = json.replace(/"([^"]+)":/g, '$1:');
        }
        return type + json;
    };
    colorType.prototype.to = function (type, args) {
        args = this.setArgs(args);
        type = type.toLowerCase().replace(/[^a-z0-9]/, '');
        var to;
        switch (type) {
            case 'rgb':
            case 'rgba':
                to = this.torgb(args);
                break;
            case 'hex':
                to = this.tohex(args);
                break;
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                to = this.torec709(args);
                break;
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                to = this.torec2020(args);
                break;
            case 'hsv':
            case 'hsva':
                to = this.tohsv(args);
                break;
            case 'hsl':
            case 'hsla':
                to = this.tohsl(args);
                break;
            case 'hsi':
            case 'hsia':
                to = this.tohsi(args);
                break;
            case 'hsp':
            case 'hspa':
            case 'hspb':
            case 'hspba':
                to = this.tohsp(args);
                break;
            case 'cmyk':
                to = this.tocmyk(args);
                break;
            case 'yiq':
                to = this.toyiq(args);
                break;
            case 'xyz':
                to = this.toxyz(args);
                break;
            case 'xyy':
                to = this.toxyy(args);
                break;
            case 'lab':
                to = this.tolab(args);
                break;
            case 'luv':
                to = this.toluv(args);
                break;
            case 'ypbpr':
                to = this.toypbpr(args);
                break;
            case 'ycbcr':
                to = this.toycbcr(args);
                break;
            default:
                throw new Error('Unable to find conversion path from ' +
                    this.getType() +
                    ' to ' +
                    type);
        }
        return to;
    };
    colorType.prototype.getType = function () {
        return this.type;
    };
    colorType.prototype.modify = function (modification, args) {
        modification = modification.toLowerCase();
        if (typeof args == 'undefined')
            args = {};
        var og = this.getType();
        var ogargs = {
            round: args.round,
            bitDepth: this.get('bitDepth'),
            normalize: this.get('normalized'),
            colorSpace: this.get('colorSpace'),
            referenceWhite: this.get('referenceWhite'),
            kb: this.get('kb'),
            kr: this.get('kr'),
            pb: this.get('pb'),
            pr: this.get('pr'),
            yLower: this.get('yLower'),
            yUpper: this.get('yUpper'),
            cLower: this.get('cLower'),
            cUpper: this.get('cUpper'),
            gamma: this.get('gamma'),
        };
        var ogalpha = this.get('a');
        var modified;
        switch (modification) {
            case 'blend':
                if (typeof args.with === 'undefined') {
                    throw new Error('Missing second color to blend with');
                }
                if (typeof args.method === 'undefined') {
                    if (['rgb', 'hsl', 'hsi', 'hsv', 'hsp', 'cmyk'].includes(og)) {
                        args.method = og;
                    }
                    else {
                        args.method = 'rgb';
                    }
                }
                args.method = args.method.toLowerCase().replace(' ', '');
                var tmpColor1 = void 0, tmpColor2 = void 0;
                if ([
                    'multiply',
                    'screen',
                    'overlay',
                    'softlight',
                    'colordodge',
                    'colorburn',
                    'vividlight',
                    'lineardodge',
                    'linearburn',
                    'linearlight',
                    'divide',
                    'addition',
                    'subtraction',
                    'difference',
                ].includes(args.method)) {
                    tmpColor1 = this.torgb({ round: false });
                    tmpColor2 = args.with.torgb({ round: false });
                    modified = Blend_1.default.rgbBlendMode(tmpColor1, tmpColor2, args.amount, args.method);
                }
                else {
                    switch (args.method) {
                        case 'rgb':
                        case 'rgba':
                        case 'hex':
                            tmpColor1 = this.torgb({ round: false });
                            tmpColor2 = args.with.torgb({ round: false });
                            modified = Blend_1.default.rgbBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'hue':
                            tmpColor1 = this.tohsv({ round: false });
                            tmpColor2 = args.with.tohsv({ round: false });
                            modified = Blend_1.default.hueBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'hsv':
                        case 'hsva':
                            tmpColor1 = this.tohsv({ round: false });
                            tmpColor2 = args.with.tohsv({ round: false });
                            modified = Blend_1.default.hsvBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'value':
                            tmpColor1 = this.tohsv({ round: false });
                            tmpColor2 = args.with.tohsv({ round: false });
                            modified = Blend_1.default.valueBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'hsl':
                        case 'hsla':
                            tmpColor1 = this.tohsl({ round: false });
                            tmpColor2 = args.with.tohsl({ round: false });
                            modified = Blend_1.default.hslBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'lightness':
                            tmpColor1 = this.tohsl({ round: false });
                            tmpColor2 = args.with.tohsl({ round: false });
                            modified = Blend_1.default.lightnessBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'hsi':
                        case 'hsia':
                            tmpColor1 = this.tohsi({ round: false });
                            tmpColor2 = args.with.tohsi({ round: false });
                            modified = Blend_1.default.hsiBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'intensity':
                            tmpColor1 = this.tohsi({ round: false });
                            tmpColor2 = args.with.tohsi({ round: false });
                            modified = Blend_1.default.intensityBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'hsp':
                        case 'hspa':
                            tmpColor1 = this.tohsp({ round: false });
                            tmpColor2 = args.with.tohsp({ round: false });
                            modified = Blend_1.default.hspBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'perceived':
                        case 'perceivedbrightness':
                            tmpColor1 = this.tohsp({ round: false });
                            tmpColor2 = args.with.tohsp({ round: false });
                            modified = Blend_1.default.perceivedBrightnessBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'cmyk':
                            tmpColor1 = this.tocmyk({ round: false });
                            tmpColor2 = args.with.tocmyk({ round: false });
                            modified = Blend_1.default.cmykBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'yiq':
                            tmpColor1 = this.toyiq({ round: false });
                            tmpColor2 = args.with.toyiq({ round: false });
                            modified = Blend_1.default.yiqBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'lab':
                            tmpColor1 = this.tolab({ round: false });
                            tmpColor2 = args.with.tolab({ round: false });
                            modified = Blend_1.default.labBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        case 'luv':
                            tmpColor1 = this.toluv({ round: false });
                            tmpColor2 = args.with.toluv({ round: false });
                            modified = Blend_1.default.luvBlend(tmpColor1, tmpColor2, args.amount);
                            break;
                        default:
                            throw new Error('Unrecognized blending method: ' + args.method);
                    }
                }
                break;
            case 'darken':
            case 'darker':
                if (typeof args.method === 'undefined') {
                    if (['rgb', 'hsl', 'hsi', 'hsv', 'hsp', 'cmyk'].includes(og)) {
                        args.method = og;
                    }
                    else {
                        args.method = 'hsl';
                    }
                }
                switch (args.method) {
                    case 'rgb':
                    case 'rgba':
                        modified = Modify_1.default.rgbDarken(this.torgb({ round: false }), args.amount);
                        break;
                    case 'rgb2':
                    case 'rgb2a':
                    case 'rgba2':
                        modified = Modify_1.default.rgb2Darken(this.torgb({ round: false }), args.amount);
                        break;
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify_1.default.hslDarken(this.tohsl({ round: false }), args.amount);
                        break;
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify_1.default.hsvDarken(this.tohsv({ round: false }), args.amount);
                        break;
                    case 'hsi':
                    case 'hsia':
                    case 'intensity':
                        modified = Modify_1.default.hsiDarken(this.tohsi({ round: false }), args.amount);
                        break;
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify_1.default.hspDarken(this.tohsp({ round: false }), args.amount);
                        break;
                    case 'cmyk':
                        modified = Modify_1.default.cmykDarken(this.tocmyk({ round: false }), args.amount);
                        break;
                    case 'cmyk2':
                    case 'black':
                        modified = Modify_1.default.cmyk2Darken(this.tocmyk({ round: false }), args.amount);
                        break;
                    case 'lab':
                        modified = Modify_1.default.labDarken(this.tolab({ round: false }), args.amount);
                        break;
                    case 'lab2':
                    case 'lstar':
                        modified = Modify_1.default.lab2Darken(this.tolab({ round: false }), args.amount);
                        break;
                    case 'luv':
                        modified = Modify_1.default.luvDarken(this.toluv({ round: false }), args.amount);
                        break;
                    case 'luv2':
                        modified = Modify_1.default.luv2Darken(this.toluv({ round: false }), args.amount);
                        break;
                    default:
                        throw new Error('Unrecognized darken method: ' + args.method);
                }
                break;
            case 'lighten':
            case 'lighter':
                if (typeof args.method === 'undefined') {
                    if (['rgb', 'hsl', 'hsi', 'hsv', 'hsp', 'cmyk'].includes(og)) {
                        args.method = og;
                    }
                    else {
                        args.method = 'hsl';
                    }
                }
                switch (args.method) {
                    case 'rgb':
                    case 'rgba':
                        modified = Modify_1.default.rgbLighten(this.torgb({ round: false }), args.amount);
                        break;
                    case 'rgb2':
                    case 'rgb2a':
                    case 'rgba2':
                        modified = Modify_1.default.rgb2Lighten(this.torgb({ round: false }), args.amount);
                        break;
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify_1.default.hslLighten(this.tohsl({ round: false }), args.amount);
                        break;
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify_1.default.hsvLighten(this.tohsv({ round: false }), args.amount);
                        break;
                    case 'hsi':
                    case 'hsia':
                    case 'intensity':
                        modified = Modify_1.default.hsiLighten(this.tohsi({ round: false }), args.amount);
                        break;
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify_1.default.hspLighten(this.tohsp({ round: false }), args.amount);
                        break;
                    case 'cmyk':
                        modified = Modify_1.default.cmykLighten(this.tocmyk({ round: false }), args.amount);
                        break;
                    case 'cmyk2':
                    case 'black':
                        modified = Modify_1.default.cmyk2Lighten(this.tocmyk({ round: false }), args.amount);
                        break;
                    case 'lab':
                        modified = Modify_1.default.labLighten(this.tolab({ round: false }), args.amount);
                        break;
                    case 'lab2':
                    case 'lstar':
                        modified = Modify_1.default.lab2Lighten(this.tolab({ round: false }), args.amount);
                        break;
                    case 'luv':
                        modified = Modify_1.default.luvLighten(this.toluv({ round: false }), args.amount);
                        break;
                    case 'luv2':
                        modified = Modify_1.default.luv2Lighten(this.toluv({ round: false }), args.amount);
                        break;
                    default:
                        throw new Error('Unrecognized lighten method: ' + args.method);
                }
                break;
            case 'desaturate':
            case 'desat':
                if (typeof args.method === 'undefined') {
                    if (['hsl', 'hsi', 'hsv', 'hsp'].includes(og)) {
                        args.method = og;
                    }
                    else {
                        args.method = 'hsl';
                    }
                }
                switch (args.method) {
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify_1.default.hsvDesaturate(this.tohsv({ round: false }), args.amount);
                        break;
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify_1.default.hslDesaturate(this.tohsl({ round: false }), args.amount);
                        break;
                    case 'hsi':
                    case 'hsia':
                    case 'intensity':
                        modified = Modify_1.default.hsiDesaturate(this.tohsi({ round: false }), args.amount);
                        break;
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify_1.default.hspDesaturate(this.tohsp({ round: false }), args.amount);
                        break;
                    default:
                        throw new Error('Unrecognized desaturate method: ' + args.method);
                }
                break;
            case 'saturate':
            case 'sat':
                if (typeof args.method === 'undefined') {
                    if (['hsl', 'hsi', 'hsv', 'hsp'].includes(og)) {
                        args.method = og;
                    }
                    else {
                        args.method = 'hsl';
                    }
                }
                switch (args.method) {
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify_1.default.hsvSaturate(this.tohsv({ round: false }), args.amount);
                        break;
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify_1.default.hslSaturate(this.tohsl({ round: false }), args.amount);
                        break;
                    case 'hsi':
                    case 'hsia':
                    case 'intensity':
                        modified = Modify_1.default.hsiSaturate(this.tohsi({ round: false }), args.amount);
                        break;
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify_1.default.hspSaturate(this.tohsp({ round: false }), args.amount);
                        break;
                    default:
                        throw new Error('Unrecognized saturate method: ' + args.method);
                }
                break;
            default:
                throw new Error('Unrecognized modify action: ' + modification);
        }
        var ogModified = modified.to(og, ogargs);
        if (typeof ogalpha !== 'undefined')
            ogModified.setAlpha(ogalpha); // otherwise this gets lost on some modifications
        return ogModified;
    };
    colorType.prototype.scheme = function (type, args) {
        var _a;
        if (typeof args === 'undefined')
            args = {};
        var og = this.getType();
        var ogargs = {
            round: args.round,
            bitDepth: this.get('bitDepth'),
            normalize: this.get('normalized'),
            // Don't pass the following or the color will shift
            // colorSpace: this.get('colorSpace'),
            // referenceWhite: this.get('referenceWhite'),
            kb: this.get('kb'),
            kr: this.get('kr'),
            pb: this.get('pb'),
            pr: this.get('pr'),
            yLower: this.get('yLower'),
            yUpper: this.get('yUpper'),
            cLower: this.get('cLower'),
            cUpper: this.get('cUpper'),
            gamma: this.get('gamma'),
        };
        var ogalpha = this.get('a');
        var intScheme;
        var distance;
        type = type.toLowerCase();
        switch (type) {
            case 'complement':
            case 'comp':
                var hsv = this.to('hsv', { round: false });
                intScheme = Harmony_1.default.complement(hsv);
                break;
            case 'analogous':
                intScheme = Harmony_1.default.analogous(this.to('hsv', { round: false }), args.angle);
                break;
            case 'split complement':
            case 'splitcomplement':
            case 'split':
                intScheme = Harmony_1.default.splitComplement(this.to('hsv', { round: false }), args.angle);
                break;
            case 'triadic':
            case 'triad':
            case 'triangle':
                intScheme = Harmony_1.default.triadic(this.to('hsv', { round: false }), args.angle);
                break;
            case 'tetradic':
            case 'tetrad':
                intScheme = Harmony_1.default.tetradic(this.to('hsv', { round: false }), args.angle);
                break;
            case 'square':
                intScheme = Harmony_1.default.square(this.to('hsv', { round: false }));
                break;
            case 'shade':
            case 'shades':
            case 'darken':
                if (typeof args.colors === 'undefined') {
                    throw new Error('Must specify number of colors to include in scheme');
                }
                distance =
                    typeof args.distanceToBlack === 'undefined'
                        ? args.distance
                        : args.distanceToBlack;
                intScheme = Harmony_1.default.shade(this, args.method ? args.method.toLowerCase() : 'hsl', args.colors, distance !== null && distance !== void 0 ? distance : 1);
                break;
            case 'tint':
            case 'tints':
            case 'lighten':
                if (typeof args.colors === 'undefined') {
                    throw new Error('Must specify number of colors to include in scheme');
                }
                distance =
                    typeof args.distanceToWhite === 'undefined'
                        ? args.distance
                        : args.distanceToWhite;
                intScheme = Harmony_1.default.tint(this, args.method ? args.method.toLowerCase() : 'hsl', args.colors, distance !== null && distance !== void 0 ? distance : 1);
                break;
            case 'tintshade':
            case 'tintsshades':
            case 'shadetint':
            case 'shadestints':
            case 'lightdark':
            case 'darklight':
                if (typeof args.colors === 'undefined') {
                    throw new Error('Must specify number of colors to include in scheme');
                }
                distance =
                    typeof args.distanceToWhite === 'undefined'
                        ? args.distance
                        : args.distanceToWhite;
                intScheme = Harmony_1.default.shadetint(this, args.method ? args.method.toLowerCase() : 'hsl', args.colors, (_a = args.round) !== null && _a !== void 0 ? _a : true, distance !== null && distance !== void 0 ? distance : 1, args.distanceToBlack);
                break;
            case 'gradient':
            case 'grad':
                if (typeof args.colors === 'undefined') {
                    throw new Error('Must specify number of colors to include in scheme');
                }
                if (typeof args.with === 'undefined') {
                    throw new Error('Must specify second color');
                }
                intScheme = Harmony_1.default.gradient(args.method ? args.method.toLowerCase() : 'rgb', this, args.with, args.colors, args.round);
                break;
            default:
                throw new Error('Unrecognized color scheme');
        }
        var ogScheme = [];
        intScheme.forEach(function (color) {
            var ogColor = color.to(og, ogargs);
            if (typeof ogalpha !== 'undefined')
                ogColor.setAlpha(ogalpha); // otherwise this gets lost on some modifications
            ogScheme.push(ogColor);
        });
        return ogScheme;
    };
    colorType.prototype.css = function (args) {
        if (typeof args === 'undefined') {
            args = {
                method: 'hex',
            };
        }
        else if (typeof args.method === 'undefined') {
            args.method = 'hex';
        }
        var colorString;
        switch (args.method) {
            case 'hex':
                var hex = this.to('hex');
                colorString = "#".concat(hex.getHex());
                break;
            // case 'hexa':
            //   break
            case 'rgb':
                var rgb = this.to('rgb');
                colorString = "rgb(".concat(rgb.getR(), ", ").concat(rgb.getG(), ", ").concat(rgb.getB(), ")");
                break;
            case 'rgba':
                var rgba = this.to('rgb');
                // precision of alpha is ~1/256, or ~0.004 at best
                var rgbaAlpha = (rgba.getA() / rgba.getMax())
                    .toPrecision(4)
                    .replace(/\.?0+$/, '');
                colorString = "rgba(".concat(rgba.getR(), ", ").concat(rgba.getG(), ", ").concat(rgba.getB(), ", ").concat(rgbaAlpha, ")");
                break;
            case 'hsl':
                var hsl = this.to('hsl');
                colorString = "hsl(".concat(hsl.getH(), ", ").concat(hsl.getS(), "%, ").concat(hsl.getL(), "%)");
                break;
            case 'hsla':
                var hsla = this.to('hsl');
                // precision of alpha is ~1/256, or ~0.004 at best
                var hslaAlpha = (hsla.getA() / 100)
                    .toPrecision(4)
                    .replace(/\.?0+$/, '');
                colorString = "hsla(".concat(hsla.getH(), ", ").concat(hsla.getS(), "%, ").concat(hsla.getL(), "%, ").concat(hslaAlpha, ")");
                break;
            default:
                throw new Error("Unrecognized css method '".concat(args.method, "'."));
        }
        return colorString;
    };
    colorType.prototype.torgb = function (args) {
        // always override
        var rgbOverridden = new Colors.rgb(0, 0, 0);
        return rgbOverridden;
    };
    colorType.prototype.torec709 = function (args) {
        if (typeof args.bitRate !== 'undefined')
            args.bitDepth = args.bitRate;
        else if (typeof args.bitDepth === 'undefined')
            args.bitDepth = 8;
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2rec709rgb(rgb, args.round, args.bitDepth);
    };
    colorType.prototype.torec2020 = function (args) {
        if (typeof args.bitRate !== 'undefined')
            args.bitDepth = args.bitRate;
        else if (typeof args.bitDepth === 'undefined')
            args.bitDepth = 10;
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2rec2020rgb(rgb, args.round, args.bitDepth);
    };
    colorType.prototype.tohex = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2hex(rgb);
    };
    colorType.prototype.tohsv = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2hsv(rgb, args.round);
    };
    colorType.prototype.tohsl = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2hsl(rgb, args.round);
    };
    colorType.prototype.tohsi = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2hsi(rgb, args.round);
    };
    colorType.prototype.tohsp = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2hsp(rgb, args.round, args.pb, args.pr);
    };
    colorType.prototype.tocmyk = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2cmyk(rgb, args.round);
    };
    colorType.prototype.toyiq = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2yiq(rgb, args.normalize, args.round);
    };
    colorType.prototype.toxyz = function (args) {
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2xyz(rgb, args.colorSpace, args.referenceWhite);
    };
    colorType.prototype.toxyy = function (args) {
        return Convert_1.default.xyz2xyy(this.toxyz(args), args.referenceWhite);
    };
    colorType.prototype.tolab = function (args) {
        return Convert_1.default.xyz2lab(this.toxyz(args), args.referenceWhite, args.round);
    };
    colorType.prototype.toluv = function (args) {
        return Convert_1.default.xyz2luv(this.toxyz(args), args.referenceWhite, args.round);
    };
    colorType.prototype.toypbpr = function (args) {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr');
        }
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2ypbpr(rgb, args.kb, args.kr);
    };
    colorType.prototype.toycbcr = function (args) {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr');
        }
        var rgb = this.torgb(args);
        return Convert_1.default.rgb2ycbcr(rgb, args.kb, args.kr);
    };
    colorType.prototype.setArgs = function (args) {
        if (typeof args == 'undefined')
            args = {};
        else if (typeof args.bitDepth === 'undefined' &&
            typeof args.bitRate !== 'undefined') {
            args.bitDepth = args.bitRate;
        }
        return args;
    };
    /**
     * Range check to make sure numeric value is within lower and upper limits
     * Throws error on fail, returns nothing
     *
     * @param  {number}         value
     * @param  {number|boolean} lowerLimit number or false
     * @param  {number|boolean} upperLimit number or false
     * @param  {string}         msg        error message if fail
     */
    colorType.prototype.valueRangeCheck = function (value, lowerLimit, upperLimit, msg) {
        if (!isFinite(value)) {
            throw new Error('Invalid color value: ' + value);
        }
        if (lowerLimit !== false &&
            upperLimit !== false &&
            lowerLimit >= upperLimit) {
            throw new Error('Invalid range (lower limit must exceed upper limit)');
        }
        if ((lowerLimit !== false && value < lowerLimit) ||
            (upperLimit !== false && value > upperLimit)) {
            throw new Error(typeof msg !== 'undefined'
                ? msg
                : 'Color value: ' +
                    value +
                    ' out of range [' +
                    lowerLimit +
                    ',' +
                    upperLimit +
                    ']');
        }
    };
    return colorType;
}());
exports.colorType = colorType;


/***/ }),

/***/ 4269:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kelvin = exports.nm = exports.ycbcr = exports.ypbpr = exports.luv = exports.lab = exports.xyy = exports.xyz = exports.yiq = exports.cmyk = exports.hsp = exports.hsi = exports.hsl = exports.hsv = exports.rec2020rgb = exports.rec709rgb = exports.rgb = exports.hex = exports.rgbNormalized = void 0;
var Convert_1 = __importDefault(__webpack_require__(6627));
var ColorType_1 = __webpack_require__(6035);
var rgbNormalized = /** @class */ (function (_super) {
    __extends(rgbNormalized, _super);
    function rgbNormalized(r, g, b, a, gamma) {
        if (a === void 0) { a = 1; }
        var _this = _super.call(this) || this;
        _this.type = 'rgbNormalized';
        _this.toStringValues = function () { return ({
            r: _this.r,
            g: _this.g,
            b: _this.b,
            a: _this.a,
            gamma: _this.gamma,
        }); };
        _this.getR = function () {
            return _this.r;
        };
        _this.getG = function () {
            return _this.g;
        };
        _this.getB = function () {
            return _this.b;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.getGamma = function () {
            return _this.gamma;
        };
        _this.gety = function () { return _this.getGamma(); };
        _this.getY = function () { return _this.getGamma(); };
        _this.valueRangeCheck(r, 0, 1);
        _this.valueRangeCheck(g, 0, 1);
        _this.valueRangeCheck(b, 0, 1);
        _this.valueRangeCheck(a, 0, 1);
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        if (typeof gamma !== 'undefined') {
            _this.valueRangeCheck(gamma, 0, false);
            _this.gamma = gamma;
        }
        return _this;
    }
    rgbNormalized.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, 1);
        this.a = value;
        return true;
    };
    return rgbNormalized;
}(ColorType_1.colorType));
exports.rgbNormalized = rgbNormalized;
var hex = /** @class */ (function (_super) {
    __extends(hex, _super);
    function hex(hex) {
        var _this = _super.call(this) || this;
        _this.type = 'hex';
        _this.toStringValues = function () { return ({
            hex: _this.hex,
        }); };
        _this.getHex = function () {
            return _this.hex;
        };
        if (typeof hex === 'string') {
            if (hex.charAt(0) == '#') {
                hex = hex.substring(1);
            }
            if (!/[0-9A-Fa-f]/g.test(hex)) {
                throw new Error('Invalid hex value');
            }
            if (hex.length == 3) {
                hex = hex
                    .split('')
                    .map(function (hex) {
                    return hex + hex;
                })
                    .join('');
            }
            else if (hex.length != 6) {
                throw new Error('Invalid hex value');
            }
            _this.hex = hex;
        }
        else {
            _this.hex = hex.toString(16);
        }
        return _this;
    }
    hex.prototype.torgb = function (args) {
        return Convert_1.default.hex2rgb(this, args.bitDepth);
    };
    hex.prototype.tohex = function (args) {
        return this;
    };
    return hex;
}(ColorType_1.colorType));
exports.hex = hex;
var rgb = /** @class */ (function (_super) {
    __extends(rgb, _super);
    function rgb(r, g, b, a, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 8; }
        var _this = _super.call(this) || this;
        _this.type = 'rgb';
        _this.toStringValues = function () { return ({
            r: _this.r,
            g: _this.g,
            b: _this.b,
            a: _this.a,
            bitDepth: _this.bitDepth,
        }); };
        _this.getR = function () {
            return _this.r;
        };
        _this.getG = function () {
            return _this.g;
        };
        _this.getB = function () {
            return _this.b;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.getMax = function () {
            return _this.max;
        };
        _this.getBitDepth = function () {
            return _this.bitDepth;
        };
        _this.valueRangeCheck(bitDepth, 1, false, 'Bit depth must be a positive number greater than 1');
        var max = Math.pow(2, bitDepth) - 1;
        if (typeof a == 'undefined')
            a = max;
        _this.valueRangeCheck(r, 0, max);
        _this.valueRangeCheck(g, 0, max);
        _this.valueRangeCheck(b, 0, max);
        _this.valueRangeCheck(a, 0, max);
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        _this.bitDepth = bitDepth;
        _this.max = max;
        return _this;
    }
    rgb.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, this.max);
        this.a = value;
        return true;
    };
    rgb.prototype.torgb = function (args) {
        if (args.round !== false) {
            this.r = Math.round(this.r);
            this.g = Math.round(this.g);
            this.b = Math.round(this.b);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return rgb;
}(ColorType_1.colorType));
exports.rgb = rgb;
var rec709rgb = /** @class */ (function (_super) {
    __extends(rec709rgb, _super);
    function rec709rgb(r, g, b, a, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 8; }
        var _this = _super.call(this) || this;
        _this.type = 'rec709rgb';
        _this.toStringValues = function () { return ({
            r: _this.r,
            g: _this.g,
            b: _this.b,
            a: _this.a,
            bitDepth: _this.bitDepth,
        }); };
        _this.getR = function () {
            return _this.r;
        };
        _this.getG = function () {
            return _this.g;
        };
        _this.getB = function () {
            return _this.b;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.getMax = function () {
            return _this.max;
        };
        _this.getBitDepth = function () {
            return _this.bitDepth;
        };
        if (bitDepth != 8 && bitDepth != 10) {
            throw new Error('Invalid bitrate for Rec709, must be 8 or 10');
        }
        var max = Math.pow(2, bitDepth) - 1;
        if (typeof r == 'undefined')
            throw new Error('r undefined');
        if (typeof g == 'undefined')
            throw new Error('g undefined');
        if (typeof b == 'undefined')
            throw new Error('b undefined');
        if (typeof a == 'undefined')
            a = max;
        else
            _this.valueRangeCheck(a, 0, max);
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        _this.bitDepth = bitDepth;
        _this.max = max;
        return _this;
    }
    rec709rgb.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, this.max);
        this.a = value;
        return true;
    };
    rec709rgb.prototype.torgb = function (args) {
        return Convert_1.default.rec709rgb2rgb(this, args.round, args.bitDepth);
    };
    rec709rgb.prototype.torec709 = function (args) {
        if (args.round !== false) {
            this.r = Math.round(this.r);
            this.g = Math.round(this.g);
            this.b = Math.round(this.b);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return rec709rgb;
}(ColorType_1.colorType));
exports.rec709rgb = rec709rgb;
var rec2020rgb = /** @class */ (function (_super) {
    __extends(rec2020rgb, _super);
    function rec2020rgb(r, g, b, a, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 10; }
        var _this = _super.call(this) || this;
        _this.type = 'rec2020rgb';
        _this.toStringValues = function () { return ({
            r: _this.r,
            g: _this.g,
            b: _this.b,
            a: _this.a,
            bitDepth: _this.bitDepth,
        }); };
        _this.getR = function () {
            return _this.r;
        };
        _this.getG = function () {
            return _this.g;
        };
        _this.getB = function () {
            return _this.b;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.getMax = function () {
            return _this.max;
        };
        _this.getBitDepth = function () {
            return _this.bitDepth;
        };
        if (bitDepth != 10 && bitDepth != 12) {
            throw new Error('Invalid bitrate for Rec2020, must be 10 or 12');
        }
        var max = Math.pow(2, bitDepth) - 1;
        if (typeof r == 'undefined')
            throw new Error('r undefined');
        if (typeof g == 'undefined')
            throw new Error('g undefined');
        if (typeof b == 'undefined')
            throw new Error('b undefined');
        if (typeof a == 'undefined')
            a = max;
        else
            _this.valueRangeCheck(a, 0, max);
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        _this.bitDepth = bitDepth;
        _this.max = max;
        return _this;
    }
    rec2020rgb.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, this.max);
        this.a = value;
        return true;
    };
    rec2020rgb.prototype.torgb = function (args) {
        return Convert_1.default.rec2020rgb2rgb(this, args.round, args.bitDepth);
    };
    rec2020rgb.prototype.torec2020 = function (args) {
        if (args.round !== false) {
            this.r = Math.round(this.r);
            this.g = Math.round(this.g);
            this.b = Math.round(this.b);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return rec2020rgb;
}(ColorType_1.colorType));
exports.rec2020rgb = rec2020rgb;
var hsv = /** @class */ (function (_super) {
    __extends(hsv, _super);
    function hsv(h, s, v, a) {
        if (a === void 0) { a = 100; }
        var _this = _super.call(this) || this;
        _this.type = 'hsv';
        _this.toStringValues = function () { return ({
            h: _this.h,
            s: _this.s,
            v: _this.v,
            a: _this.a,
        }); };
        _this.getH = function () {
            return _this.h;
        };
        _this.getS = function () {
            return _this.s;
        };
        _this.getV = function () {
            return _this.v;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.valueRangeCheck(h, 0, 360);
        _this.valueRangeCheck(s, 0, 100);
        _this.valueRangeCheck(v, 0, 100);
        _this.valueRangeCheck(a, 0, 100);
        _this.h = h;
        _this.s = s;
        _this.v = v;
        _this.a = a;
        return _this;
    }
    hsv.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, 100);
        this.a = value;
        return true;
    };
    hsv.prototype.torgb = function (args) {
        return Convert_1.default.hsv2rgb(this, args.round, args.bitDepth);
    };
    hsv.prototype.tohsv = function (args) {
        if (args.round !== false) {
            this.h = Math.round(this.h);
            this.s = Math.round(this.s);
            this.v = Math.round(this.v);
            this.a = Math.round(this.a);
        }
        return this;
    };
    hsv.prototype.tohsl = function (args) {
        return Convert_1.default.hsv2hsl(this, args.round);
    };
    return hsv;
}(ColorType_1.colorType));
exports.hsv = hsv;
var hsl = /** @class */ (function (_super) {
    __extends(hsl, _super);
    function hsl(h, s, l, a) {
        if (a === void 0) { a = 100; }
        var _this = _super.call(this) || this;
        _this.type = 'hsl';
        _this.toStringValues = function () { return ({
            h: _this.h,
            s: _this.s,
            l: _this.l,
            a: _this.a,
        }); };
        _this.getH = function () {
            return _this.h;
        };
        _this.getS = function () {
            return _this.s;
        };
        _this.getL = function () {
            return _this.l;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.valueRangeCheck(h, 0, 360);
        _this.valueRangeCheck(s, 0, 100);
        _this.valueRangeCheck(l, 0, 100);
        _this.valueRangeCheck(a, 0, 100);
        _this.h = h;
        _this.s = s;
        _this.l = l;
        _this.a = a;
        return _this;
    }
    hsl.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, 100);
        this.a = value;
        return true;
    };
    hsl.prototype.torgb = function (args) {
        return Convert_1.default.hsl2rgb(this, args.round, args.bitDepth);
    };
    hsl.prototype.tohsv = function (args) {
        return Convert_1.default.hsl2hsv(this, args.round);
    };
    hsl.prototype.tohsl = function (args) {
        if (args.round !== false) {
            this.h = Math.round(this.h);
            this.s = Math.round(this.s);
            this.l = Math.round(this.l);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return hsl;
}(ColorType_1.colorType));
exports.hsl = hsl;
var hsi = /** @class */ (function (_super) {
    __extends(hsi, _super);
    function hsi(h, s, i, a) {
        if (a === void 0) { a = 100; }
        var _this = _super.call(this) || this;
        _this.type = 'hsi';
        _this.toStringValues = function () { return ({
            h: _this.h,
            s: _this.s,
            i: _this.i,
            a: _this.a,
        }); };
        _this.getH = function () {
            return _this.h;
        };
        _this.getS = function () {
            return _this.s;
        };
        _this.getI = function () {
            return _this.i;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.valueRangeCheck(h, 0, 360);
        _this.valueRangeCheck(s, 0, 100);
        _this.valueRangeCheck(i, 0, 100);
        _this.valueRangeCheck(a, 0, 100);
        _this.h = h;
        _this.s = s;
        _this.i = i;
        _this.a = a;
        return _this;
    }
    hsi.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, 100);
        this.a = value;
        return true;
    };
    hsi.prototype.torgb = function (args) {
        return Convert_1.default.hsi2rgb(this, args.round, args.bitDepth);
    };
    // protected tohsv(args: newColorArgs): hsv {
    //   return Convert.hsi2hsv(this, args.round)
    // }
    // protected tohsl(args: newColorArgs): hsl {
    //   return Convert.hsi2hsl(this, args.round)
    // }
    hsi.prototype.tohsi = function (args) {
        if (args.round !== false) {
            this.h = Math.round(this.h);
            this.s = Math.round(this.s);
            this.i = Math.round(this.i);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return hsi;
}(ColorType_1.colorType));
exports.hsi = hsi;
var hsp = /** @class */ (function (_super) {
    __extends(hsp, _super);
    function hsp(h, s, p, a, pb, pr) {
        if (a === void 0) { a = 100; }
        if (pb === void 0) { pb = 0.114; }
        if (pr === void 0) { pr = 0.299; }
        var _this = _super.call(this) || this;
        _this.type = 'hsp';
        _this.toStringValues = function () { return ({
            h: _this.h,
            s: _this.s,
            p: _this.p,
            a: _this.a,
            pb: _this.pb,
            pr: _this.pr,
        }); };
        _this.getH = function () {
            return _this.h;
        };
        _this.getS = function () {
            return _this.s;
        };
        _this.getP = function () {
            return _this.p;
        };
        _this.getPb = function () {
            return _this.pb;
        };
        _this.getPr = function () {
            return _this.pr;
        };
        _this.getPg = function () {
            return 1 - _this.pr - _this.pb;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getAlpha = function () { return _this.getA(); };
        _this.valueRangeCheck(h, 0, 360);
        _this.valueRangeCheck(s, 0, 100);
        _this.valueRangeCheck(p, 0, 100);
        _this.valueRangeCheck(a, 0, 100);
        if (pr + pb > 1) {
            throw new Error('Pr + Pg + Pb must = 1');
        }
        _this.h = h;
        _this.s = s;
        _this.p = p;
        _this.a = a;
        _this.pr = pr;
        _this.pb = pb;
        _this.pg = 1 - pr - pb;
        return _this;
    }
    hsp.prototype.setAlpha = function (value) {
        this.valueRangeCheck(value, 0, 100);
        this.a = value;
        return true;
    };
    hsp.prototype.torgb = function (args) {
        return Convert_1.default.hsp2rgb(this, args.round, args.bitDepth);
    };
    hsp.prototype.tohsp = function (args) {
        if (args.round !== false) {
            this.h = Math.round(this.h);
            this.s = Math.round(this.s);
            this.p = Math.round(this.p);
            this.a = Math.round(this.a);
        }
        return this;
    };
    return hsp;
}(ColorType_1.colorType));
exports.hsp = hsp;
var cmyk = /** @class */ (function (_super) {
    __extends(cmyk, _super);
    function cmyk(c, m, y, k) {
        var _this = _super.call(this) || this;
        _this.type = 'cmyk';
        _this.toStringValues = function () { return ({
            c: _this.c,
            m: _this.m,
            y: _this.y,
            k: _this.k,
        }); };
        _this.getC = function () {
            return _this.c;
        };
        _this.getM = function () {
            return _this.m;
        };
        _this.getY = function () {
            return _this.y;
        };
        _this.getK = function () {
            return _this.k;
        };
        _this.valueRangeCheck(c, 0, 100, 'CMYK values must be between 0 and 100');
        _this.valueRangeCheck(m, 0, 100, 'CMYK values must be between 0 and 100');
        _this.valueRangeCheck(y, 0, 100, 'CMYK values must be between 0 and 100');
        _this.valueRangeCheck(k, 0, 100, 'CMYK values must be between 0 and 100');
        _this.c = c;
        _this.m = m;
        _this.y = y;
        _this.k = k;
        return _this;
    }
    cmyk.prototype.torgb = function (args) {
        return Convert_1.default.cmyk2rgb(this, args.round, args.bitDepth);
    };
    cmyk.prototype.tocmyk = function (args) {
        if (args.round !== false) {
            this.c = Math.round(this.c);
            this.m = Math.round(this.m);
            this.y = Math.round(this.y);
            this.k = Math.round(this.k);
        }
        return this;
    };
    return cmyk;
}(ColorType_1.colorType));
exports.cmyk = cmyk;
var yiq = /** @class */ (function (_super) {
    __extends(yiq, _super);
    /**
     * YIQ
     *
     * @param {number}  y 0-1 or 0-255 normalized
     * @param {number}  i -0.5957 to 0.5957 or -128 to 128 normalized
     * @param {number}  q -0.5226 to 0.5226 or -128 to 128 normalized
     * @param {boolean} normalized
     */
    function yiq(y, i, q, normalized) {
        if (normalized === void 0) { normalized = true; }
        var _this = _super.call(this) || this;
        _this.type = 'yiq';
        _this.toStringValues = function () { return ({
            y: _this.y,
            i: _this.i,
            q: _this.q,
            normalized: _this.normalized,
        }); };
        _this.getY = function () {
            return _this.y;
        };
        _this.getI = function () {
            return _this.i;
        };
        _this.getQ = function () {
            return _this.q;
        };
        _this.isNormalized = function () {
            return _this.normalized;
        };
        _this.getNormalized = function () { return _this.isNormalized(); };
        if (normalized) {
            _this.valueRangeCheck(y, 0, 255, 'Normalized Y value must be between 0 and 255');
            _this.valueRangeCheck(i, -128, 128, 'Normalized I value must be between -128 and 128');
            _this.valueRangeCheck(q, -128, 128, 'Normalized Q value must be between -128 and 128');
        }
        else {
            _this.valueRangeCheck(y, 0, 1, 'Non-normalized Y value must be between 0 and 1');
            _this.valueRangeCheck(i, -0.5957, 0.5957, 'Non-normalized I value must be between -0.5957 and 0.5957');
            _this.valueRangeCheck(q, -0.5226, 0.5226, 'Non-normalized Q value must be between -0.5226 and 0.5226');
        }
        _this.y = y;
        _this.i = i;
        _this.q = q;
        _this.normalized = normalized;
        return _this;
    }
    yiq.prototype.torgb = function (args) {
        return Convert_1.default.yiq2rgb(this, args.round, args.bitDepth);
    };
    yiq.prototype.toyiq = function (args) {
        if (args.round !== false) {
            this.y = Math.round(this.y);
            this.i = Math.round(this.i);
            this.q = Math.round(this.q);
        }
        return this;
    };
    return yiq;
}(ColorType_1.colorType));
exports.yiq = yiq;
var xyz = /** @class */ (function (_super) {
    __extends(xyz, _super);
    function xyz(x, y, z) {
        var _this = _super.call(this) || this;
        _this.type = 'xyz';
        _this.toStringValues = function () { return ({
            x: _this.x,
            y: _this.y,
            z: _this.z,
        }); };
        _this.getX = function () {
            return _this.x;
        };
        _this.getY = function () {
            return _this.y;
        };
        _this.getZ = function () {
            return _this.z;
        };
        // this.valueRangeCheck(x, 0, 1, 'XYZ values must be between 0 and 1')
        // this.valueRangeCheck(y, 0, 1, 'XYZ values must be between 0 and 1')
        // this.valueRangeCheck(z, 0, 1, 'XYZ values must be between 0 and 1')
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    xyz.prototype.torgb = function (args) {
        return Convert_1.default.xyz2rgb(this, args.colorSpace, args.referenceWhite, args.round, args.bitDepth);
    };
    xyz.prototype.toxyz = function (args) {
        return this;
    };
    return xyz;
}(ColorType_1.colorType));
exports.xyz = xyz;
var xyy = /** @class */ (function (_super) {
    __extends(xyy, _super);
    function xyy(x, y, yy) {
        var _this = _super.call(this) || this;
        _this.type = 'xyy';
        _this.getX = function () {
            return _this.x;
        };
        _this.getY = function () {
            return _this.y;
        };
        _this.gety = function () {
            throw new Error('Use getY() and getYY() for the y and Y values of xyY');
        };
        _this.getYY = function () {
            return _this.yy;
        };
        _this.toStringValues = function () { return ({
            x: _this.x,
            y: _this.y,
            yy: _this.yy,
        }); };
        _this.x = x;
        _this.y = y;
        _this.yy = yy;
        return _this;
    }
    xyy.prototype.torgb = function (args) {
        return Convert_1.default.xyz2rgb(this.toxyz(args), args.colorSpace, args.referenceWhite, args.round, args.bitDepth);
    };
    xyy.prototype.toxyz = function (args) {
        return Convert_1.default.xyy2xyz(this);
    };
    xyy.prototype.toxyy = function (args) {
        return this;
    };
    return xyy;
}(ColorType_1.colorType));
exports.xyy = xyy;
var lab = /** @class */ (function (_super) {
    __extends(lab, _super);
    /**
     *
     * @param {number} l  0-100+
     * @param {number} a  unbounded, but typically clamped at -128 and 127
     * @param {number} b  unbounded, but typically clamped at -128 and 127
     */
    function lab(l, a, b) {
        var _this = _super.call(this) || this;
        _this.type = 'lab';
        _this.toStringValues = function () { return ({
            l: _this.l,
            a: _this.a,
            b: _this.b,
        }); };
        _this.getL = function () {
            return _this.l;
        };
        _this.getA = function () {
            return _this.a;
        };
        _this.getB = function () {
            return _this.b;
        };
        _this.valueRangeCheck(l, 0, false);
        if (typeof a === 'undefined')
            throw new Error('a undefined');
        if (typeof b === 'undefined')
            throw new Error('b undefined');
        _this.l = l;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    lab.prototype.torgb = function (args) {
        return Convert_1.default.xyz2rgb(this.toxyz(args), args.colorSpace, args.referenceWhite, args.round, args.bitDepth);
    };
    lab.prototype.toxyz = function (args) {
        return Convert_1.default.lab2xyz(this, args.referenceWhite);
    };
    lab.prototype.tolab = function (args) {
        if (args.round !== false) {
            this.l = Math.round(this.l);
            this.a = Math.round(this.a);
            this.b = Math.round(this.b);
        }
        return this;
    };
    return lab;
}(ColorType_1.colorType));
exports.lab = lab;
var luv = /** @class */ (function (_super) {
    __extends(luv, _super);
    /**
     *
     * @param {number} l    0-100
     * @param {number} u -100-100
     * @param {number} v -100-100
     */
    function luv(l, u, v) {
        var _this = _super.call(this) || this;
        _this.type = 'luv';
        _this.toStringValues = function () { return ({
            l: _this.l,
            u: _this.u,
            v: _this.v,
        }); };
        _this.getL = function () {
            return _this.l;
        };
        _this.getU = function () {
            return _this.u;
        };
        _this.getV = function () {
            return _this.v;
        };
        _this.valueRangeCheck(l, 0, 100);
        // this.valueRangeCheck(u, -100, 100)
        // this.valueRangeCheck(v, -100, 100)
        if (typeof u === 'undefined')
            throw new Error('u undefined');
        if (typeof v === 'undefined')
            throw new Error('v undefined');
        _this.l = l;
        _this.u = u;
        _this.v = v;
        return _this;
    }
    luv.prototype.torgb = function (args) {
        return Convert_1.default.xyz2rgb(this.toxyz(args), args.colorSpace, args.referenceWhite, args.round, args.bitDepth);
    };
    luv.prototype.toxyz = function (args) {
        return Convert_1.default.luv2xyz(this, args.referenceWhite);
    };
    luv.prototype.toluv = function (args) {
        if (args.round !== false) {
            this.l = Math.round(this.l);
            this.u = Math.round(this.u);
            this.v = Math.round(this.v);
        }
        return this;
    };
    return luv;
}(ColorType_1.colorType));
exports.luv = luv;
var ypbpr = /** @class */ (function (_super) {
    __extends(ypbpr, _super);
    function ypbpr(y, pb, pr, kb, kr) {
        var _this = _super.call(this) || this;
        _this.type = 'ypbpr';
        _this.getY = function () {
            return _this.y;
        };
        _this.getPb = function () {
            return _this.pb;
        };
        _this.getPr = function () {
            return _this.pr;
        };
        _this.getPg = function () {
            return 1 - _this.pr - _this.pb;
        };
        _this.getKb = function () {
            return _this.kb;
        };
        _this.getKr = function () {
            return _this.kr;
        };
        _this.getKg = function () {
            return 1 - _this.kr - _this.kb;
        };
        _this.toStringValues = function () { return ({
            y: _this.y,
            pb: _this.pb,
            pr: _this.pr,
            kb: _this.kb,
            kr: _this.kr,
        }); };
        _this.valueRangeCheck(y, 0, 1);
        _this.valueRangeCheck(pb, -0.5, 0.5);
        _this.valueRangeCheck(pr, -0.5, 0.5);
        _this.y = y;
        _this.pb = pb;
        _this.pr = pr;
        _this.kb = kb;
        _this.kr = kr;
        return _this;
    }
    ypbpr.prototype.torgb = function (args) {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr');
        }
        return Convert_1.default.ypbpr2rgb(this, args.kb, args.kr, args.round, args.bitDepth);
    };
    ypbpr.prototype.toypbpr = function (args) {
        return this;
    };
    ypbpr.prototype.toycbcr = function (args) {
        if (typeof args.yLower === 'undefined' ||
            typeof args.yUpper === 'undefined' ||
            typeof args.cLower === 'undefined' ||
            typeof args.cUpper === 'undefined') {
            throw new Error('Missing arguments yLower, yUpper, cLower, cUpper');
        }
        return Convert_1.default.ypbpr2ycbcr(this, args.yLower, args.yUpper, args.cLower, args.cUpper, args.round);
    };
    return ypbpr;
}(ColorType_1.colorType));
exports.ypbpr = ypbpr;
var ycbcr = /** @class */ (function (_super) {
    __extends(ycbcr, _super);
    function ycbcr(y, cb, cr, yLower, yUpper, cLower, cUpper) {
        var _this = _super.call(this) || this;
        _this.type = 'ycbcr';
        _this.toStringValues = function () { return ({
            y: _this.y,
            cb: _this.cb,
            cr: _this.cr,
            yLower: _this.yLower,
            yUpper: _this.yUpper,
            cLower: _this.cLower,
            cUpper: _this.cUpper,
        }); };
        _this.getY = function () {
            return _this.y;
        };
        _this.getCb = function () {
            return _this.cb;
        };
        _this.getCr = function () {
            return _this.cr;
        };
        _this.getYLower = function () {
            return _this.yLower;
        };
        _this.getYUpper = function () {
            return _this.yUpper;
        };
        _this.getCLower = function () {
            return _this.cLower;
        };
        _this.getCUpper = function () {
            return _this.cUpper;
        };
        _this.y = y;
        _this.cb = cb;
        _this.cr = cr;
        if (typeof yLower === 'undefined')
            yLower = 16;
        if (typeof yUpper === 'undefined')
            yUpper = 235;
        if (typeof cLower === 'undefined')
            cLower = 16;
        if (typeof cUpper === 'undefined')
            cUpper = 240;
        _this.yLower = yLower;
        _this.yUpper = yUpper;
        _this.cLower = cLower;
        _this.cUpper = cUpper;
        return _this;
    }
    ycbcr.prototype.torgb = function (args) {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr');
        }
        return Convert_1.default.ypbpr2rgb(this.toypbpr(args), args.kb, args.kr, args.round, args.bitDepth);
    };
    ycbcr.prototype.toypbpr = function (args) {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr');
        }
        return Convert_1.default.ycbcr2ypbpr(this, args.kb, args.kr);
    };
    ycbcr.prototype.toycbcr = function (args) {
        if (args.round !== false) {
            this.y = Math.round(this.y);
            this.cb = Math.round(this.cb);
            this.cr = Math.round(this.cr);
        }
        return this;
    };
    return ycbcr;
}(ColorType_1.colorType));
exports.ycbcr = ycbcr;
var nm = /** @class */ (function (_super) {
    __extends(nm, _super);
    function nm(wavelength) {
        var _this = _super.call(this) || this;
        _this.type = 'nm';
        _this.getWavelength = function () {
            return _this.wavelength;
        };
        _this.getNm = function () { return _this.getWavelength(); };
        _this.toStringValues = function () { return ({
            wavelength: _this.wavelength,
        }); };
        _this.valueRangeCheck(wavelength, 380, 800, 'Wavelength (in nm) must fall between 380 and 800');
        _this.wavelength = wavelength;
        return _this;
    }
    nm.prototype.torgb = function (args) {
        return Convert_1.default.nm2rgb(this, args.gamma, args.round, args.bitDepth);
    };
    return nm;
}(ColorType_1.colorType));
exports.nm = nm;
var kelvin = /** @class */ (function (_super) {
    __extends(kelvin, _super);
    function kelvin(k) {
        var _this = _super.call(this) || this;
        _this.type = 'kelvin';
        _this.getK = function () {
            return _this.k;
        };
        _this.getKelvin = function () { return _this.getK(); };
        _this.toStringValues = function () { return ({
            k: _this.k,
        }); };
        _this.valueRangeCheck(k, 1000, 40000, 'Temperature must fall between 1000 and 40000');
        _this.k = k;
        return _this;
    }
    kelvin.prototype.torgb = function (args) {
        return Convert_1.default.kelvin2rgb(this, args.round, args.bitDepth);
    };
    return kelvin;
}(ColorType_1.colorType));
exports.kelvin = kelvin;


/***/ }),

/***/ 6627:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can ristribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Colors = __importStar(__webpack_require__(4269));
var Util_1 = __importDefault(__webpack_require__(7298));
var Reference_1 = __webpack_require__(6626);
var Convert = /** @class */ (function () {
    function Convert() {
    }
    /////////// NORMALIZE & GAMMA ///////////
    /**
     * Normalize RGB values to 0-1
     *
     * @param  {Colors.rgb} rgb
     * @return {Colors.rgbNormalized}
     */
    Convert.rgbNormalize = function (rgb) {
        return new Colors.rgbNormalized(rgb.getR() / rgb.getMax(), rgb.getG() / rgb.getMax(), rgb.getB() / rgb.getMax(), rgb.getA() / rgb.getMax());
    };
    /**
     * Apply gamma to normalized RGB value
     * NOT to be used with sRGB, L*, or other color spaces that utilize companding transformation formulae
     *
     * @param  {Colors.rgbNormalized} rgb
     * @param  {number}               gamma
     * @return {Colors.rgbNormalized}
     */
    Convert.applyGamma = function (rgb, gamma) {
        var gammaN;
        if (typeof gamma === 'number') {
            gammaN = gamma;
        }
        else if (typeof Reference_1.colorSpaces[gamma]['gamma'] === 'number') {
            gammaN = Reference_1.colorSpaces[gamma]['gamma'];
        }
        else {
            throw new Error('Gamma not found for specificed color space');
        }
        var r = Math.pow(rgb.getR(), gammaN);
        var g = Math.pow(rgb.getG(), gammaN);
        var b = Math.pow(rgb.getB(), gammaN);
        return new Colors.rgbNormalized(r, g, b, rgb.getA(), gammaN);
    };
    /////////// HUE, SATURATION, VALUE/LIGHTNESS/BRIGHTNESS ///////////
    /**
     * Convert RGB to HSV
     * Saturation and Value are in percentages
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @return {Colors.hsv}
     */
    Convert.rgb2hsv = function (rgb, round) {
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var range = max - min;
        var val = (max / 1) * 100;
        var sat = max ? (range / max) * 100 : 0;
        var hue;
        if (!range)
            hue = 0;
        else if (r == max)
            hue = (g - b) / range;
        else if (g == max)
            hue = (b - r) / range + 2;
        else if (b == max)
            hue = (r - g) / range + 4;
        else
            hue = 0;
        hue *= 60;
        while (hue >= 360)
            hue -= 360;
        while (hue < 0)
            hue += 360;
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, 100);
        if (round) {
            hue = Math.round(hue);
            sat = Math.round(sat);
            val = Math.round(val);
            a = Math.round(a);
        }
        return new Colors.hsv(hue, sat, val, a);
    };
    /**
     * Convert RGB to HSL
     * Saturation and Lightness are in percentages
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @return {Colors.hsl}
     */
    Convert.rgb2hsl = function (rgb, round) {
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var chroma = max - min;
        var lit = (max + min) / 2;
        var sat = (lit == 0 || lit == 1 ? 0 : (max - lit) / Math.min(lit, 1 - lit)) * 100;
        lit *= 100;
        var hue;
        if (!chroma)
            hue = 0;
        else if (max == r)
            hue = (g - b) / chroma;
        else if (max == g)
            hue = (b - r) / chroma + 2;
        else if (max == b)
            hue = (r - g) / chroma + 4;
        else
            hue = 0;
        hue *= 60;
        while (hue >= 360)
            hue -= 360;
        while (hue < 0)
            hue += 360;
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, 100);
        if (round) {
            hue = Math.round(hue);
            sat = Math.round(sat);
            lit = Math.round(lit);
            a = Math.round(a);
        }
        return new Colors.hsl(hue, sat, lit, a);
    };
    /**
     * Convert RGB to HSI
     * Saturation and Intensity are in percentages
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @return {Colors.hsi}
     */
    Convert.rgb2hsi = function (rgb, round) {
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var i = (r + g + b) / 3;
        var h = 0, s = 0;
        if (i) {
            s = 1 - Math.min(r, g, b) / i;
            h =
                Math.atan2((Math.sqrt(3) / 2) * (g - b), 0.5 * (2 * r - g - b)) *
                    (180 / Math.PI);
            if (h < 0)
                h += 360;
            s = Math.min(Math.max(s, 0), 1);
            i = Math.min(Math.max(i, 0), 1);
            s *= 100;
            i *= 100;
        }
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, 100, round);
        if (round) {
            h = Math.round(h);
            s = Math.round(s);
            i = Math.round(i);
        }
        return new Colors.hsi(h, s, i, a);
    };
    /**
     * Convert RGB to HSI
     * Saturation and Intensity are in percentages
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @return {Colors.hsi}
     */
    Convert.rgb2hsi_deprecated = function (rgb, round) {
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var chroma = max - min;
        var int = (r + g + b) * (1 / 3);
        var hue;
        var sat;
        if (!chroma) {
            hue = 0;
            sat = 0;
        }
        else {
            if (max == r)
                hue = Util_1.default.fmod((g - b) / chroma, 6);
            else if (max == g)
                hue = (b - r) / chroma + 2;
            else
                hue = (r - g) / chroma + 4;
            hue *= 60;
            while (hue >= 360)
                hue -= 360;
            while (hue < 0)
                hue += 360;
            sat = chroma && int ? (1 - min / int) * 100 : 0;
        }
        int *= 100;
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, 100);
        if (round) {
            hue = Math.round(hue);
            sat = Math.round(sat);
            int = Math.round(int);
            a = Math.round(a);
        }
        return new Colors.hsi(hue, sat, int, a);
    };
    /**
     * Convert HSV to RGB
     * Saturation and Value should be in percentages
     *
     * @param  {Colors.hsv} hsv
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.hsv2rgb = function (hsv, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var r, g, b;
        var max = Math.pow(2, bitDepth) - 1;
        if (hsv.getS() == 0) {
            var all = hsv.getV() / 100;
            r = all;
            g = all;
            b = all;
        }
        else {
            var h = hsv.getH() / 60;
            var s = hsv.getS() / 100;
            var v = hsv.getV() / 100;
            var i = Math.floor(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));
            switch (i) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                default:
                    r = v;
                    g = p;
                    b = q;
            }
        }
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        r *= max;
        g *= max;
        b *= max;
        var a = Util_1.default.scaleValueRange(hsv.getA(), 0, 100, 0, max, round);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
            a = Math.round(a);
        }
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert HSV to HSL
     * Saturation and Value should be in percentages
     * Saturation and Lightness are in percentages
     *
     * @param  {Colors.hsv} hsv
     * @param  {boolean}    [round=true]
     * @return {Colors.hsl}
     */
    Convert.hsv2hsl = function (hsv, round) {
        if (round === void 0) { round = true; }
        var s = hsv.getS() / 100;
        var v = hsv.getV() / 100;
        var lit = v * (1 - s / 2);
        var sat;
        if (lit == 0 || lit == 1) {
            sat = 0;
        }
        else {
            sat = (v - lit) / Math.min(lit, 1 - lit);
        }
        lit *= 100;
        sat *= 100;
        if (round) {
            lit = Math.round(lit);
            sat = Math.round(sat);
        }
        return new Colors.hsl(hsv.getH(), sat, lit, hsv.getA());
    };
    /**
     * Convert HSV to HSI
     * Saturation(V) and Value should be in percentages
     * Saturation(I) and Intensity will be in percentages
     *
     * @param  {Colors.hsv} hsv
     * @param  {boolean}    [round=true]
     * @return {Colors.hsi}
     */
    Convert.hsv2hsi = function (hsv, round) {
        if (round === void 0) { round = true; }
        var rgb = this.hsv2rgb(hsv, false);
        var hsi = this.rgb2hsi(rgb, round);
        return hsi;
    };
    /**
     * Convert HSL to HSV
     * Saturation and Lightness should be in percentages
     * Saturation and Value are in percentages
     *
     * @param  {Colors.hsl} hsl
     * @param  {boolean}    [round=true]
     * @return {Colors.hsv}
     */
    Convert.hsl2hsv = function (hsl, round) {
        if (round === void 0) { round = true; }
        var s = hsl.getS() / 100;
        var l = hsl.getL() / 100;
        var val = l + s * Math.min(l, 1 - l);
        var sat = val ? 2 * (1 - l / val) : 0;
        val *= 100;
        sat *= 100;
        if (round) {
            val = Math.round(val);
            sat = Math.round(sat);
        }
        return new Colors.hsv(hsl.getH(), sat, val, hsl.getA());
    };
    /**
     * Convert HSL to RGB
     * Saturation and Lightness should be in percentages
     *
     * @param  {Colors.hsl} hsl
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.hsl2rgb = function (hsl, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var h = hsl.getH() / 60;
        var s = hsl.getS() / 100;
        var l = hsl.getL() / 100;
        var r;
        var g;
        var b;
        if (!s) {
            r = l;
            g = l;
            b = l;
        }
        else {
            var chroma = (1 - Math.abs(2 * l - 1)) * s;
            var huef = Math.floor(h);
            var huefmod = Number((h - Math.floor(h / 2) * 2).toPrecision(8));
            var x = chroma * (1 - Math.abs(huefmod - 1));
            var m = l - chroma / 2;
            switch (huef) {
                case 0:
                    r = chroma + m;
                    g = x + m;
                    b = m;
                    break;
                case 1:
                    r = x + m;
                    g = chroma + m;
                    b = m;
                    break;
                case 2:
                    r = m;
                    g = chroma + m;
                    b = x + m;
                    break;
                case 3:
                    r = m;
                    g = x + m;
                    b = chroma + m;
                    break;
                case 4:
                    r = x + m;
                    g = m;
                    b = chroma + m;
                    break;
                case 5:
                    r = chroma + m;
                    g = m;
                    b = x + m;
                    break;
                default:
                    r = m;
                    g = m;
                    b = m;
            }
        }
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        var a = Util_1.default.scaleValueRange(hsl.getA(), 0, 100, 0, max, round);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
            a = Math.round(a);
        }
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert HSL to HSI
     * Saturation(L) and Lightness should be in percentages
     * Saturation(I) and Intensity will be in percentages
     *
     * @param  {Colors.hsl} hsl
     * @param  {boolean}    [round=true]
     * @return {Colors.hsi}
     */
    Convert.hsl2hsi = function (hsl, round) {
        if (round === void 0) { round = true; }
        var rgb = this.hsl2rgb(hsl, false);
        var hsi = this.rgb2hsi(rgb, round);
        return hsi;
    };
    /**
     * Convert HSI to RGB
     * Saturation and Intensity should be in percentages
     *
     * @param  {Colors.hsi} hsi
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.hsi2rgb = function (hsi, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var h = hsi.getH() - 360 * Math.floor(hsi.getH() / 360);
        var s = hsi.getS() / 100;
        var i = hsi.getI() / 100;
        var r, g, b;
        if (h < 120) {
            b = i * (1 - s);
            r =
                i *
                    (1 +
                        (s * Math.cos(h * (Math.PI / 180))) /
                            Math.cos((60 - h) * (Math.PI / 180)));
            g = 3 * i - r - b;
        }
        else if (h < 240) {
            h = h - 120;
            r = i * (1 - s);
            g =
                i *
                    (1 +
                        (s * Math.cos(h * (Math.PI / 180))) /
                            Math.cos((60 - h) * (Math.PI / 180)));
            b = 3 * i - r - g;
        }
        else {
            h = h - 240;
            g = i * (1 - s);
            b =
                i *
                    (1 +
                        (s * Math.cos(h * (Math.PI / 180))) /
                            Math.cos((60 - h) * (Math.PI / 180)));
            r = 3 * i - g - b;
        }
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        var a = Util_1.default.scaleValueRange(hsi.getA(), 0, 100, 0, Math.pow(2, bitDepth) - 1, round);
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert HSI to RGB
     * Saturation and Intensity should be in percentages
     *
     * @param  {Colors.hsi} hsi
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.hsi2rgb_deprecated = function (hsi, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var h = hsi.getH() / 60;
        var s = hsi.getS() / 100;
        var i = hsi.getI() / 100;
        var m = i * (1 - s);
        var r;
        var g;
        var b;
        if (!s) {
            r = m;
            g = m;
            b = m;
        }
        else {
            var hfmod2 = Number((h - Math.floor(h / 2) * 2).toPrecision(8));
            var z = 1 - Math.abs(hfmod2 - 1);
            var chroma = (3 * i * s) / (1 + z);
            var x = chroma * z;
            var huef = Math.floor(h);
            switch (huef) {
                case 0:
                    r = chroma + m;
                    g = x + m;
                    b = m;
                    break;
                case 1:
                    r = x + m;
                    g = chroma + m;
                    b = m;
                    break;
                case 2:
                    r = m;
                    g = chroma + m;
                    b = x + m;
                    break;
                case 3:
                    r = m;
                    g = x + m;
                    b = chroma + m;
                    break;
                case 4:
                    r = x + m;
                    g = m;
                    b = chroma + m;
                    break;
                case 5:
                    r = chroma + m;
                    g = m;
                    b = x + m;
                    break;
                default:
                    r = m;
                    g = m;
                    b = m;
            }
        }
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        var a = Util_1.default.scaleValueRange(hsi.getA(), 0, 100, 0, max, round);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
            a = Math.round(a);
        }
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert RGB to HSP
     * Saturation and Perceived Brightness will be in percentages
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @return {Colors.hsp}
     */
    Convert.rgb2hsp = function (rgb, round, Pb, Pr) {
        if (round === void 0) { round = true; }
        if (Pb === void 0) { Pb = 0.114; }
        if (Pr === void 0) { Pr = 0.299; }
        if (Pr + Pb > 1) {
            throw new Error('Pr + Pg + Pb must = 1');
        }
        var Pg = 1 - Pr - Pb;
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var pb = Math.sqrt(Math.pow(r, 2) * Pr + Math.pow(g, 2) * Pg + Math.pow(b, 2) * Pb);
        var value = Math.max(r, g, b);
        var chroma = value - Math.min(r, g, b);
        var s = value ? chroma / value : 0;
        var h;
        if (!chroma)
            h = 0;
        else if (value == r)
            h = (g - b) / chroma;
        else if (value == g)
            h = (b - r) / chroma + 2;
        else if (value == b)
            h = (r - g) / chroma + 4;
        else
            h = 0;
        h *= 60;
        while (h >= 360)
            h -= 360;
        while (h < 0)
            h += 360;
        s *= 100;
        pb *= 100;
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, 100, round);
        if (round) {
            h = Math.round(h);
            s = Math.round(s);
            pb = Math.round(pb);
            a = Math.round(a);
        }
        return new Colors.hsp(h, s, pb, a, Pb, Pr);
    };
    /**
     * Convert HSP to RGB
     * Saturation and Perceived Brightness should be in percentages
     *
     * @param  {Colors.hsp} hsp
     * @param  {boolean}    [round=true]
     * @return {Colors.rgb}
     */
    Convert.hsp2rgb = function (hsp, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var hp = hsp.getH() / 60;
        var s = hsp.getS() / 100;
        var pb = hsp.getP() / 100;
        var s0 = 1 - s;
        var r, g, b;
        var hpf = Math.floor(hp);
        // console.log(s0, hpf)
        var hpp;
        if (s0 > 0) {
            switch (hpf) {
                case 0: //R>G>B
                    hpp = hp;
                    b =
                        pb /
                            Math.sqrt(hsp.getPr() / Math.pow(s0, 2) +
                                hsp.getPg() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPb());
                    r = b / s0;
                    g = b + hpp * (r - b);
                    break;
                case 1: //G>R>B
                    hpp = -1 * hp + 2;
                    b =
                        pb /
                            Math.sqrt(hsp.getPg() / Math.pow(s0, 2) +
                                hsp.getPr() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPb());
                    g = b / s0;
                    r = b + hpp * (g - b);
                    break;
                case 2: //G>B>R
                    hpp = hp - 2;
                    r =
                        pb /
                            Math.sqrt(hsp.getPg() / Math.pow(s0, 2) +
                                hsp.getPb() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPr());
                    g = r / s0;
                    b = r + hpp * (g - r);
                    break;
                case 3: //B>G>R
                    hpp = -1 * hp + 4;
                    r =
                        pb /
                            Math.sqrt(hsp.getPb() / Math.pow(s0, 2) +
                                hsp.getPg() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPr());
                    b = r / s0;
                    g = r + hpp * (b - r);
                    break;
                case 4: //B>R>G
                    hpp = hp - 4;
                    g =
                        pb /
                            Math.sqrt(hsp.getPb() / Math.pow(s0, 2) +
                                hsp.getPr() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPg());
                    b = g / s0;
                    r = g + hpp * (b - g);
                    break;
                case 5: //R>B>G
                default:
                    hpp = -1 * hp + 6;
                    g =
                        pb /
                            Math.sqrt(hsp.getPr() / Math.pow(s0, 2) +
                                hsp.getPb() * Math.pow(1 + hpp * (1 / s0 - 1), 2) +
                                hsp.getPg());
                    r = g / s0;
                    b = g + hpp * (r - g);
            }
        }
        else {
            switch (hpf) {
                case 0: //R>G>B
                    hpp = hp;
                    r = Math.sqrt(Math.pow(pb, 2) / (hsp.getPr() + hsp.getPg() * Math.pow(hpp, 2)));
                    g = r * hpp;
                    b = 0;
                    break;
                case 1: //G>R>B
                    hpp = -1 * hp + 2;
                    g = Math.sqrt(Math.pow(pb, 2) / (hsp.getPg() + hsp.getPr() * Math.pow(hpp, 2)));
                    r = g * hpp;
                    b = 0;
                    break;
                case 2: //G>B>R
                    hpp = hp - 2;
                    g = Math.sqrt(Math.pow(pb, 2) / (hsp.getPg() + hsp.getPb() * Math.pow(hpp, 2)));
                    b = g * hpp;
                    r = 0;
                    break;
                case 3: //B>G>R
                    hpp = -1 * hp + 4;
                    b = Math.sqrt(Math.pow(pb, 2) / (hsp.getPb() + hsp.getPg() * Math.pow(hpp, 2)));
                    g = b * hpp;
                    r = 0;
                    break;
                case 4: //B>R>G
                    hpp = hp - 4;
                    b = Math.sqrt(Math.pow(pb, 2) / (hsp.getPb() + hsp.getPr() * Math.pow(hpp, 2)));
                    r = b * hpp;
                    g = 0;
                    break;
                case 5: //R>B>G
                default:
                    hpp = -1 * hp + 6;
                    r = Math.sqrt(Math.pow(pb, 2) / (hsp.getPr() + hsp.getPb() * Math.pow(hpp, 2)));
                    b = r * hpp;
                    g = 0;
            }
        }
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        var a = Util_1.default.scaleValueRange(hsp.getA(), 0, 100, 0, max, round);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
            a = Math.round(a);
        }
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /////////// CMYK ///////////
    /**
     * Convert RGB to CMYK
     * This conversion is mathematical and does not take pigment conversion into account
     *
     * @param  {Colors.rgb} rgb
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=255] RGB max value per channel
     * @return {Colors.cmyk}
     */
    Convert.rgb2cmyk = function (rgb, round) {
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        //todo: if alpha, blend value with white
        var c;
        var m;
        var y;
        var k = 1 - Math.max(r, g, b);
        if (k == 1) {
            c = 0;
            m = 0;
            y = 0;
        }
        else {
            c = ((1 - r - k) / (1 - k)) * 100;
            m = ((1 - g - k) / (1 - k)) * 100;
            y = ((1 - b - k) / (1 - k)) * 100;
        }
        k *= 100;
        if (round) {
            c = Math.round(c);
            m = Math.round(m);
            y = Math.round(y);
            k = Math.round(k);
        }
        return new Colors.cmyk(c, m, y, k);
    };
    /**
     * Convert CMYK to RGB
     * This conversion is mathematical and does not take pigment conversion into account
     *
     * @param  {Colors.cmyk} cmyk
     * @param  {boolean}     [round=true]
     * @param  {number}      [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.cmyk2rgb = function (cmyk, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var c = cmyk.getC() / 100;
        var m = cmyk.getM() / 100;
        var y = cmyk.getY() / 100;
        var k = cmyk.getK() / 100;
        var max = Math.pow(2, bitDepth) - 1;
        var r = (1 - c) * (1 - k) * max;
        var g = (1 - m) * (1 - k) * max;
        var b = (1 - y) * (1 - k) * max;
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /////////// YIQ ///////////
    /**
     * Convert RGB to YIQ
     * TODO: Validate Algorithm
     *
     * @param  {Colors.rgb}   rgb
     * @param  {boolean}      [normalize=true] true = Y[0,255], I&Q[-128,128]; false = Y[0,1], I[-0.5957,0.5957], Q[-0.5226,0.5226]
     * @param  {boolean}      [round=true]     will not round if not normalized
     * @return {Colors.yiq}
     */
    Convert.rgb2yiq = function (rgb, normalize, round) {
        if (normalize === void 0) { normalize = true; }
        if (round === void 0) { round = true; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var y = 0.299 * r + 0.587 * g + 0.114 * b;
        var i = 0.5959 * r + -0.2746 * g + -0.3213 * b;
        var q = 0.2115 * r + -0.5227 * g + 0.3112 * b;
        y = Math.min(Math.max(y, 0), 1);
        i = Math.min(Math.max(i, -0.5957), 0.5957);
        q = Math.min(Math.max(q, -0.5226), 0.5226);
        if (normalize) {
            y = Util_1.default.scaleValueRange(y, 0, 1, 0, 255, false);
            i = Util_1.default.scaleValueRange(i + 0.5957, 0, 1.1914, 0, 256, false) - 128;
            q = Util_1.default.scaleValueRange(q + 0.5226, 0, 1.0452, 0, 256, false) - 128;
            if (round) {
                y = Math.round(y);
                i = Math.round(i);
                q = Math.round(q);
            }
        }
        return new Colors.yiq(y, i, q, normalize);
    };
    /**
     * Convert YIQ to RGB
     *
     * @param  {Colors.yiq} yiq
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.yiq2rgb = function (yiq, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var y = yiq.getY();
        var i = yiq.getI();
        var q = yiq.getQ();
        if (yiq.isNormalized()) {
            y = Util_1.default.scaleValueRange(y, 0, 255, 0, 1, false);
            i = Util_1.default.scaleValueRange(i, -128, 128, -0.5957, 0.5957, false);
            q = Util_1.default.scaleValueRange(q, -128, 128, -0.5226, 0.5226, false);
        }
        var r = y + 0.956 * i + 0.621 * q;
        var g = y + -0.272 * i + -0.647 * q;
        var b = y + -1.106 * i + 1.703 * q;
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /////////// XYZ, xyY ///////////
    /**
     * Convert RGB to XYZ
     * X, Y, and Z will be between 0 and the white point reference XYZ values
     *
     * @param  {Colors.rgb} rgb
     * @param  {string}     [colorSpace=srgb]    RGB color space (e.g. sRGB)
     * @param  {string}     [referenceWhite=d65] RGB reference white (e.g. D65)
     * @return {Colors.xyz}
     */
    Convert.rgb2xyz = function (rgb, colorSpace, referenceWhite) {
        if (colorSpace === void 0) { colorSpace = 'srgb'; }
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var space = Util_1.default.validColorSpace(colorSpace);
        referenceWhite = referenceWhite.toLowerCase();
        if (typeof space['rgb2xyz'] == 'undefined' ||
            typeof space['rgb2xyz'][referenceWhite] == 'undefined') {
            throw new Error('Transformation matrix unavailable for this color space and reference white');
        }
        var m = space['rgb2xyz'][referenceWhite];
        if (colorSpace == 'srgb') {
            // sRGB
            r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
            b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        }
        else if (colorSpace == 'ecirgb') {
            // L*
            r = r <= 0.08 ? 100 * (r / Reference_1.cieK) : Math.pow((r + 0.16) / 1.16, 3);
            g = g <= 0.08 ? 100 * (g / Reference_1.cieK) : Math.pow((g + 0.16) / 1.16, 3);
            b = b <= 0.08 ? 100 * (b / Reference_1.cieK) : Math.pow((b + 0.16) / 1.16, 3);
        }
        else {
            // Gamma
            if (typeof space['gamma'] == 'undefined') {
                throw new Error('Gamma not defined for this color space');
            }
            var gamma = space['gamma'];
            r = Math.pow(r, gamma);
            g = Math.pow(g, gamma);
            b = Math.pow(b, gamma);
        }
        // [X]           [R]
        // [Y] = [M 3x3]*[G]
        // [Z]           [B]
        var x = m[0][0] * r + m[0][1] * g + m[0][2] * b;
        var y = m[1][0] * r + m[1][1] * g + m[1][2] * b;
        var z = m[2][0] * r + m[2][1] * g + m[2][2] * b;
        return new Colors.xyz(x, y, z);
    };
    /**
     * Convert XYZ to RGB
     * RGB values that fall outsize representable values will be clamped
     *
     * @param  {Colors.xyz} xyz
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.xyz2rgb = function (xyz, colorSpace, referenceWhite, round, bitDepth) {
        if (colorSpace === void 0) { colorSpace = 'srgb'; }
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var space = Util_1.default.validColorSpace(colorSpace);
        referenceWhite = referenceWhite.toLowerCase();
        if (typeof space['xyz2rgb'] == 'undefined' ||
            typeof space['xyz2rgb'][referenceWhite] == 'undefined') {
            throw new Error('Transformation matrix unavailable for this color space and reference white');
        }
        var m = space['xyz2rgb'][referenceWhite];
        // [R]       [X]
        // [G] = [M]*[Y]  where [M] is [RGB to XYZ matrix]^-1
        // [B]       [Z]
        var r = m[0][0] * xyz.getX() + m[0][1] * xyz.getY() + m[0][2] * xyz.getZ();
        var g = m[1][0] * xyz.getX() + m[1][1] * xyz.getY() + m[1][2] * xyz.getZ();
        var b = m[2][0] * xyz.getX() + m[2][1] * xyz.getY() + m[2][2] * xyz.getZ();
        if (colorSpace == 'srgb') {
            // sRGB
            r = r <= 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 1 / 2.4) - 0.055;
            g = g <= 0.0031308 ? g * 12.92 : 1.055 * Math.pow(g, 1 / 2.4) - 0.055;
            b = b <= 0.0031308 ? b * 12.92 : 1.055 * Math.pow(b, 1 / 2.4) - 0.055;
        }
        else if (colorSpace == 'ecirgb') {
            // L*
            r = r <= Reference_1.cieE ? (r * Reference_1.cieK) / 100 : 1.16 * Math.pow(r, 1 / 3) - 0.16;
            r = g <= Reference_1.cieE ? (g * Reference_1.cieK) / 100 : 1.16 * Math.pow(g, 1 / 3) - 0.16;
            r = b <= Reference_1.cieE ? (b * Reference_1.cieK) / 100 : 1.16 * Math.pow(b, 1 / 3) - 0.16;
        }
        else {
            // Gamma
            if (typeof space['gamma'] == 'undefined') {
                throw new Error('Gamma not defined for this color space');
            }
            r = Math.pow(r, 1 / space['gamma']);
            g = Math.pow(g, 1 / space['gamma']);
            b = Math.pow(b, 1 / space['gamma']);
        }
        var max = Math.pow(2, bitDepth) - 1;
        r = Math.min(Math.max(r, 0), 1) * max;
        g = Math.min(Math.max(g, 0), 1) * max;
        b = Math.min(Math.max(b, 0), 1) * max;
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /**
     * Convert XYZ to xyY
     * If X = Z = Y = 0, set x and y to chromaticity coordinates of reference white
     *
     * @param  {Colors.xyz} xyz
     * @return {Colors.xyy}
     */
    Convert.xyz2xyy = function (xyz, referenceWhite) {
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        var w = Util_1.default.validReferenceWhite(referenceWhite);
        var cx;
        var cy;
        var sum = xyz.getX() + xyz.getY() + xyz.getZ();
        if (!sum) {
            cx = w.x;
            cy = w.y;
        }
        else {
            cx = xyz.getX() / sum;
            cy = xyz.getY() / sum;
        }
        return new Colors.xyy(cx, cy, xyz.getY());
    };
    /**
     * Convert xyY to XYZ
     *
     * @param  {Colors.xyy} xyy
     * @return {Colors.xyz}
     */
    Convert.xyy2xyz = function (xyy) {
        var cx, cz;
        if (!xyy.getYY()) {
            cx = 0;
            cz = 0;
        }
        else {
            cx = (xyy.getX() * xyy.getYY()) / xyy.getY();
            cz = ((1 - xyy.getX() - xyy.getY()) * xyy.getYY()) / xyy.getY();
        }
        return new Colors.xyz(cx, xyy.getYY(), cz);
    };
    /////////// Lab ///////////
    /**
     * Convert XYZ to Lab
     *
     * @param  {Colors.xyz} xyz
     * @param  {string}     referenceWhite
     * @param  {boolean}    [round=true]
     * @return {Colors.lab}
     */
    Convert.xyz2lab = function (xyz, referenceWhite, round) {
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        if (round === void 0) { round = true; }
        var w = Util_1.default.validReferenceWhite(referenceWhite);
        var xr = xyz.getX() / w.x;
        var yr = xyz.getY() / w.y;
        var zr = xyz.getZ() / w.z;
        var fx = xr > Reference_1.cieE ? Math.pow(xr, 1 / 3) : (Reference_1.cieK * xr + 16) / 116;
        var fy = yr > Reference_1.cieE ? Math.pow(yr, 1 / 3) : (Reference_1.cieK * yr + 16) / 116;
        var fz = zr > Reference_1.cieE ? Math.pow(zr, 1 / 3) : (Reference_1.cieK * zr + 16) / 116;
        var l = 116 * fy - 16;
        var a = 500 * (fx - fy);
        var b = 200 * (fy - fz);
        l = Math.max(l, 0); // specular white can be over 100
        if (round) {
            l = Math.round(l);
            a = Math.round(a);
            b = Math.round(b);
        }
        return new Colors.lab(l, a, b);
    };
    /**
     * Convert Lab to XYZ
     *
     * @param  {Colors.lab} lab
     * @return {Colors.xyz}
     */
    Convert.lab2xyz = function (lab, referenceWhite) {
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        var w = Util_1.default.validReferenceWhite(referenceWhite);
        var lr = (lab.getL() + 16) / 116; // y
        var ar = lab.getA() / 500 + lr; // x
        var br = lr - lab.getB() / 200; // z
        var xr = Math.pow(ar, 3) > Reference_1.cieE ? Math.pow(ar, 3) : (116 * ar - 16) / Reference_1.cieK;
        // the following two y(r) formulae seem to be equivalent??? somehow???
        // let yr = lab.getL() > cieK * cieE ? Math.pow(lr, 3) : lab.getL() / cieK
        var yr = Math.pow(lr, 3) > Reference_1.cieE ? Math.pow(lr, 3) : (116 * lr - 16) / Reference_1.cieK;
        var zr = Math.pow(br, 3) > Reference_1.cieE ? Math.pow(br, 3) : (116 * br - 16) / Reference_1.cieK;
        var x = xr * w.x;
        var y = yr * w.y;
        var z = zr * w.z;
        return new Colors.xyz(x, y, z);
    };
    /////////// Luv ///////////
    /**
     * Convert XYZ to Luv
     * L will range between 0% and 100%
     * u and v will range between -100% and 100%
     *
     * @param  {Colors.xyz} xyz
     * @return {Colors.luv}
     */
    Convert.xyz2luv = function (xyz, referenceWhite, round) {
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        if (round === void 0) { round = true; }
        var w = Util_1.default.validReferenceWhite(referenceWhite);
        var yr = xyz.getY() / w.y;
        var div = xyz.getX() + 15 * xyz.getY() + 3 * xyz.getZ();
        var up, vp;
        if (!div) {
            up = 0;
            vp = 0;
        }
        else {
            up = (4 * xyz.getX()) / div;
            vp = (9 * xyz.getY()) / div;
        }
        var upr = (4 * w.x) / (w.x + 15 * w.y + 3 * w.z);
        var vpr = (9 * w.y) / (w.x + 15 * w.y + 3 * w.z);
        var l = yr > Reference_1.cieE ? 116 * Math.pow(yr, 1 / 3) - 16 : Reference_1.cieK * yr;
        var u = 13 * l * (up - upr);
        var v = 13 * l * (vp - vpr);
        l = Math.min(Math.max(l, 0), 100);
        if (round) {
            l = Math.round(l);
            u = Math.round(u);
            v = Math.round(v);
        }
        return new Colors.luv(l, u, v);
    };
    /**
     * Convert Luv to XYZ
     * X, Y, and Z will be in range 0 to 1
     *
     * @param  {Colors.luv} luv
     * @return {Colors.xyz}
     */
    Convert.luv2xyz = function (luv, referenceWhite) {
        if (referenceWhite === void 0) { referenceWhite = 'd65'; }
        var w = Util_1.default.validReferenceWhite(referenceWhite);
        var u0 = (4 * w.x) / (w.x + 15 * w.y + 3 * w.z);
        var v0 = (9 * w.y) / (w.x + 15 * w.y + 3 * w.z);
        var y = luv.getL() > Reference_1.cieK * Reference_1.cieE
            ? Math.pow((luv.getL() + 16) / 116, 3)
            : luv.getL() / Reference_1.cieK;
        var ad = luv.getU() + 13 * luv.getL() * u0;
        var adf = ad ? (52 * luv.getL()) / ad : 0;
        var a = (1 / 3) * (adf - 1);
        var x = a + 1 / 3
            ? (y * ((39 * luv.getL()) / (luv.getV() + 13 * luv.getL() * v0) - 5) +
                5 * y) /
                (a + 1 / 3)
            : 0;
        var z = x * a - 5 * y;
        return new Colors.xyz(x, y, z);
    };
    /////////// YCbCr and STANDARDS ///////////
    /**
     * Convert RGB to Rec709 RGB
     * Will output either 8-bit or 10-bit depending on input color space
     *
     * @param  {Colors.rgb}   rgb
     * @param  {boolean}      [round=true]
     * @param  {number}       [bitRate=8]
     * @return {Colors.rec709rgb}
     */
    Convert.rgb2rec709rgb = function (rgb, round, bitRate) {
        if (round === void 0) { round = true; }
        if (bitRate === void 0) { bitRate = 8; }
        // output must be 8-bit or 10-bit, pick whichever is closer to input depth
        var rgbLower, rgbUpper;
        if (bitRate == 8) {
            rgbLower = 16;
            rgbUpper = 235;
        }
        else if (bitRate == 10) {
            rgbLower = 64;
            rgbUpper = 940;
        }
        else {
            throw new Error('Invalid bitrate for Rec709, must be 8 or 10');
        }
        var r = Util_1.default.scaleValueRange(rgb.getR(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var g = Util_1.default.scaleValueRange(rgb.getG(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var b = Util_1.default.scaleValueRange(rgb.getB(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, Math.pow(2, bitRate) - 1, round);
        return new Colors.rec709rgb(r, g, b, a, bitRate);
    };
    /**
     * Convert Rec709 RGB to RGB
     * Converts 8-bit or 10-bit Rec709 RGB values to standard (0 - $color_depth) range
     * Input RGB values outside of legal black and white points will be clamped
     *
     * @param  {Colors.rec709rgb} rgb709
     * @param  {boolean}          [round=true]
     * @param  {number}           [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.rec709rgb2rgb = function (rgb709, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var minFrom, maxFrom;
        if (rgb709.getBitDepth() == 8) {
            minFrom = 16;
            maxFrom = 235;
        }
        else if (rgb709.getBitDepth() == 10) {
            minFrom = 64;
            maxFrom = 940;
        }
        else {
            throw new Error('Invalid bitrate (must be 8 or 10)');
        }
        // Rather than require bounds, clamp values
        var r709 = Math.min(Math.max(rgb709.getR(), minFrom), maxFrom);
        var g709 = Math.min(Math.max(rgb709.getG(), minFrom), maxFrom);
        var b709 = Math.min(Math.max(rgb709.getB(), minFrom), maxFrom);
        var a709 = Math.min(Math.max(rgb709.getA(), minFrom), maxFrom);
        var max = Math.pow(2, bitDepth) - 1;
        var r = Util_1.default.scaleValueRange(r709, minFrom, maxFrom, 0, max, round);
        var g = Util_1.default.scaleValueRange(g709, minFrom, maxFrom, 0, max, round);
        var b = Util_1.default.scaleValueRange(b709, minFrom, maxFrom, 0, max, round);
        var a = Util_1.default.scaleValueRange(a709, 0, rgb709.getMax(), 0, max, round);
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert RGB to Rec2020 RGB
     * Will output either 10-bit or 12-bit depending on input color space
     *
     * @param  {Colors.rgb}   rgb
     * @param  {boolean}      [round=true]
     * @param  {number}       [bitRate=10]
     * @return {Colors.rec2020rgb}
     */
    Convert.rgb2rec2020rgb = function (rgb, round, bitRate) {
        if (round === void 0) { round = true; }
        if (bitRate === void 0) { bitRate = 10; }
        // output must be 10-bit or 12-bit, pick whichever is closer to input depth
        var rgbLower, rgbUpper;
        if (bitRate == 10) {
            rgbLower = 64;
            rgbUpper = 940;
        }
        else if (bitRate == 12) {
            rgbLower = 256;
            rgbUpper = 3760;
        }
        else {
            throw new Error('Invalid bitrate for Rec2020, must be 10 or 12');
        }
        var r = Util_1.default.scaleValueRange(rgb.getR(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var g = Util_1.default.scaleValueRange(rgb.getG(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var b = Util_1.default.scaleValueRange(rgb.getB(), 0, rgb.getMax(), rgbLower, rgbUpper, round);
        var a = Util_1.default.scaleValueRange(rgb.getA(), 0, rgb.getMax(), 0, Math.pow(2, bitRate) - 1, round);
        return new Colors.rec2020rgb(r, g, b, a, bitRate);
    };
    /**
     * Convert Rec2020 RGB to RGB
     * Converts 10-bit or 12-bit Rec2020 RGB values to standard (0 - $color_depth) range
     * Input RGB values outside of legal black and white points will be clamped
     *
     * @param  {Colors.rec2020rgb} rgb2020
     * @param  {boolean}           [round=true]
     * @param  {number}            [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.rec2020rgb2rgb = function (rgb2020, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var minFrom, maxFrom;
        if (rgb2020.getBitDepth() == 10) {
            minFrom = 64;
            maxFrom = 940;
        }
        else if (rgb2020.getBitDepth() == 12) {
            minFrom = 256;
            maxFrom = 3760;
        }
        else {
            throw new Error('Invalid bitrate (must be 10 or 12)');
        }
        // Rather than require bounds, clamp values
        var r2020 = Math.min(Math.max(rgb2020.getR(), minFrom), maxFrom);
        var g2020 = Math.min(Math.max(rgb2020.getG(), minFrom), maxFrom);
        var b2020 = Math.min(Math.max(rgb2020.getB(), minFrom), maxFrom);
        var a2020 = Math.min(Math.max(rgb2020.getA(), minFrom), maxFrom);
        var max = Math.pow(2, bitDepth) - 1;
        var r = Util_1.default.scaleValueRange(r2020, minFrom, maxFrom, 0, max, round);
        var g = Util_1.default.scaleValueRange(g2020, minFrom, maxFrom, 0, max, round);
        var b = Util_1.default.scaleValueRange(b2020, minFrom, maxFrom, 0, max, round);
        var a = Util_1.default.scaleValueRange(a2020, 0, rgb2020.getMax(), 0, max, round);
        return new Colors.rgb(r, g, b, a, bitDepth);
    };
    /**
     * Convert RGB to YCbCr
     *
     * @param  {Colors.rgb}   rgb
     * @param  {number}       kb   Kb constant defined from target color space, such that Kb + Kr + Kg = 1
     * @param  {number}       kr   Kr constant defined from target color space, such that Kb + Kr + Kg = 1
     * @param  {boolean}      [round=true]
     * @return {Colors.ycbcr}
     */
    Convert.rgb2ycbcr = function (rgb, kb, kr, round) {
        if (round === void 0) { round = true; }
        var yppbpr = this.rgb2ypbpr(rgb, kb, kr);
        var ycbcr = this.ypbpr2ycbcr(yppbpr, 0, rgb.getMax(), 0, rgb.getMax(), round);
        return ycbcr;
    };
    /**
     * Convert RGB to YPbPr
     * Y will range from 0 to 1; Pb and Pr will range from -0.5 to 0.5
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     kb   Kb constant defined from target color space, such that Kb + Kr + Kg = 1
     * @param  {number}     kr   Kr constant defined from target color space, such that Kb + Kr + Kg = 1
     * @return {Colors.ypbpr}
     */
    Convert.rgb2ypbpr = function (rgb, kb, kr) {
        var r = rgb.getR() / rgb.getMax();
        var g = rgb.getG() / rgb.getMax();
        var b = rgb.getB() / rgb.getMax();
        var kg = 1 - kb - kr;
        // Y' ranges from 0 to 1
        var y = kr * r + kg * g + kb * b;
        // Pb and Pr range from -0.5 to +0.5
        // the following equations are equivalent
        var pb = 0.5 * ((b - y) / (1 - kb));
        var pr = 0.5 * ((r - y) / (1 - kr));
        // let pb = (-0.5 * (kr / (1 - kb))) * r + (-0.5 * (kg / (1 - kb))) * g + 0.5 * b;
        // let pr = 0.5 * r + (-0.5 * (kg / (1 - kr))) * g + (-0.5 * (kb / (1 - kr))) * b;
        return new Colors.ypbpr(y, pb, pr, kb, kr);
    };
    /**
     * Convert YPbPr to RGB
     * Y must range from 0 to 1; Pb and Pr must range from -0.5 to 0.5
     *
     * @param  {Colors.ypbpr} ypbpr
     * @param  {number}       kb             Kb constant defined from target color space, such that Kb + Kr + Kg = 1
     * @param  {number}       kr             Kr constant defined from target color space, such that Kb + Kr + Kg = 1
     * @param  {boolean}      [round=true]
     * @param  {number}       [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.ypbpr2rgb = function (ypbpr, kb, kr, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var kg = 1 - kb - kr;
        var r = ypbpr.getY() + (2 - 2 * kr) * ypbpr.getPr();
        var g = ypbpr.getY() +
            -1 * (kb / kg) * (2 - 2 * kb) * ypbpr.getPb() +
            -1 * (kr / kg) * (2 - 2 * kr) * ypbpr.getPr();
        var b = ypbpr.getY() + (2 - 2 * kb) * ypbpr.getPb();
        var max = Math.pow(2, bitDepth) - 1;
        r *= max;
        g *= max;
        b *= max;
        // values may be very nearly slightly less than exactly 0 or 255 (:
        r = Math.min(Math.max(0, r), max);
        g = Math.min(Math.max(0, g), max);
        b = Math.min(Math.max(0, b), max);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /**
     * Convert YPbPr to YCbCr
     * Y must be in range 0 to 1; Pb and Pr must be in range -0.5 to 0.5.
     * Y' defaults to 16 for black and 235 for white when using an 8-bit representation.
     * The standard has 8-bit digitized versions of CB and CR scaled to a different range of 16 to 240.
     *
     * @param  {Colors.ypbpr} ypbpr
     * @param  {number}       [yLower=16]  Lower bounds of Y
     * @param  {number}       [yUpper=235] Upper bounds of Y
     * @param  {number}       [cLower=16]  Lower bounds of Cb and Cr
     * @param  {number}       [cUpper=240] Upper bounds of Cb and Cr
     * @param  {boolean}      [round=true]
     * @return {Colors.ycbcr}
     */
    Convert.ypbpr2ycbcr = function (ypbpr, yLower, yUpper, cLower, cUpper, round) {
        if (yLower === void 0) { yLower = 16; }
        if (yUpper === void 0) { yUpper = 135; }
        if (cLower === void 0) { cLower = 16; }
        if (cUpper === void 0) { cUpper = 240; }
        if (round === void 0) { round = true; }
        var y2 = Util_1.default.scaleValueRange(ypbpr.getY(), 0, 1, yLower, yUpper, round);
        var cb = Util_1.default.scaleValueRange(ypbpr.getPb() + 0.5, 0, 1, cLower, cUpper, round);
        var cr = Util_1.default.scaleValueRange(ypbpr.getPr() + 0.5, 0, 1, cLower, cUpper, round);
        return new Colors.ycbcr(y2, cb, cr, yLower, yUpper, cLower, cUpper);
    };
    /**
     * Convert YCbCr to YPbPr
     * Y will be in range 0 to 1; Pb and Pr will be in range -0.5 to 0.5
     *
     * @param  {Colors.ycbcr} ycbcr
     * @param  {number}       kb
     * @param  {number}       kr
     * @return {Colors.ypbpr}
     */
    Convert.ycbcr2ypbpr = function (ycbcr, kb, kr) {
        var y2 = Util_1.default.scaleValueRange(ycbcr.getY(), ycbcr.getYLower(), ycbcr.getYUpper(), 0, 1, false);
        var pb = Util_1.default.scaleValueRange(ycbcr.getCb(), ycbcr.getCLower(), ycbcr.getCUpper(), 0, 1, false) - 0.5;
        var pr = Util_1.default.scaleValueRange(ycbcr.getCr(), ycbcr.getCLower(), ycbcr.getCUpper(), 0, 1, false) - 0.5;
        return new Colors.ypbpr(y2, pb, pr, kb, kr);
    };
    /**
     * Convert RGB to JPEG YCbCr
     * Output Y, Cb, and Cr range from 0 to 255
     *
     * @param  {Colors.rgb}   rgb
     * @param  {boolean}      [round=true]
     * @return {Colors.ycbcr}
     */
    Convert.rgb2jpegycbcr = function (rgb, round) {
        if (round === void 0) { round = false; }
        var r = rgb.getR();
        var g = rgb.getG();
        var b = rgb.getB();
        if (rgb.getMax() != 255) {
            r = (r / rgb.getMax()) * 255;
            g = (g / rgb.getMax()) * 255;
            b = (b / rgb.getMax()) * 255;
        }
        var y = 0.299 * r + 0.587 * g + 0.114 * b;
        var cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b;
        var cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;
        if (round) {
            y = Math.round(y);
            cb = Math.round(cb);
            cr = Math.round(cr);
        }
        return new Colors.ycbcr(y, cb, cr);
    };
    /**
     * Convert JPEG YCbCr to RGB
     * Y, Cb, and Cr should range from 0 to 255
     *
     * @param  {Colors.ycbcr} ycbcr
     * @param  {boolean}      [round=true]
     * @param  {number}       [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.jpegycbcr2rgb = function (ycbcr, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var r = ycbcr.getY() + 1.402 * (ycbcr.getCr() - 128);
        var g = ycbcr.getY() -
            0.344136 * (ycbcr.getCb() - 128) -
            0.714136 * (ycbcr.getCr() - 128);
        var b = ycbcr.getY() + 1.772 * (ycbcr.getCb() - 128);
        var max = Math.pow(2, bitDepth) - 1;
        if (bitDepth != 255) {
            r = (r / 255) * max;
            g = (g / 255) * max;
            b = (b / 255) * max;
        }
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /////////// ONE WAY APPROXIMATIONS to RGB ///////////
    /**
     * Convert a wavelength in nm to RGB
     * This is hugely perceptual and approximate.
     * Adapted from http://www.physics.sfasu.edu/astro/color/spectra.html,
     * but with better visual falloff at edges.
     *
     * @param  {Colors.nm}  nm            Wavelength of light in nanometers (positive number)
     * @param  {number}     [gamma=0.8]   Gamma adjustment
     * @param  {boolean}    [round=true]
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.nm2rgb = function (nm, gamma, round, bitDepth) {
        if (gamma === void 0) { gamma = 0.8; }
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var r;
        var g;
        var b;
        if (nm.getWavelength() >= 380 && nm.getWavelength() < 440) {
            r = ((nm.getWavelength() - 440) / (440 - 380)) * -1;
            g = 0;
            b = 1;
        }
        else if (nm.getWavelength() >= 440 && nm.getWavelength() < 490) {
            r = 0;
            g = (nm.getWavelength() - 440) / (490 - 440);
            b = 1;
        }
        else if (nm.getWavelength() >= 490 && nm.getWavelength() < 510) {
            r = 0;
            g = 1;
            b = ((nm.getWavelength() - 510) / (510 - 490)) * -1;
        }
        else if (nm.getWavelength() >= 510 && nm.getWavelength() < 580) {
            r = (nm.getWavelength() - 510) / (580 - 510);
            g = 1;
            b = 0;
        }
        else if (nm.getWavelength() >= 580 && nm.getWavelength() < 645) {
            r = 1;
            g = ((nm.getWavelength() - 645) / (645 - 580)) * -1;
            b = 0;
        }
        else if (nm.getWavelength() >= 645 && nm.getWavelength() <= 800) {
            r = 1;
            g = 0;
            b = 0;
        }
        else {
            r = 0;
            g = 0;
            b = 0;
        }
        // Let the intensity fall off near the vision limits
        // The falloff at 380 and 800nm is such that the rgb values are
        // roughly [8, 0, 8] and [16, 0, 0], or equivalently very close to black
        var factor;
        if (nm.getWavelength() >= 380 && nm.getWavelength() < 400) {
            factor = 1 / 71 + (1 / 10 * (nm.getWavelength() - 380)) / (400 - 380);
        }
        else if (nm.getWavelength() >= 400 && nm.getWavelength() < 420) {
            factor = 1 / 5 + (5 / 7 * (nm.getWavelength() - 400)) / (420 - 400);
        }
        else if (nm.getWavelength() >= 420 && nm.getWavelength() < 701) {
            factor = 1;
        }
        else if (nm.getWavelength() >= 701 && nm.getWavelength() < 781) {
            factor = 1 / 3 + (5 / 7 * (780 - nm.getWavelength())) / (780 - 700);
        }
        else if (nm.getWavelength() >= 781 && nm.getWavelength() <= 800) {
            factor = 1 / 32 + (1 / 5 * (800 - nm.getWavelength())) / (800 - 781);
        }
        else {
            factor = 0;
        }
        var max = Math.pow(2, bitDepth) - 1;
        if (r > 0) {
            r = Math.max(0, Math.min(max, max * Math.pow(r * factor, gamma)));
        }
        if (g > 0) {
            g = Math.max(0, Math.min(max, max * Math.pow(g * factor, gamma)));
        }
        if (b > 0) {
            b = Math.max(0, Math.min(max, max * Math.pow(b * factor, gamma)));
        }
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /**
     * Convert a color temperature in Kelvin to RGB
     * Adapted from 'RGB VALUES FOR HOT OBJECTS' by William T. Bridgman, NASA, 2000
     * http://www.physics.sfasu.edu/astro/color/blackbodyc.txt
     *
     *   A black body approximation is used where the temperature,
     *   T, is given in Kelvin.  The XYZ values are determined by
     *   "integrating" the product of the wavelength distribution of
     *   energy and the XYZ functions for a uniform source.
     *
     * @param  {Colors.kelvin}  kelvin        Color temperature in degrees Kelvin; must fall between 1000 and 40000
     * @param  {boolean}        [round=true]
     * @param  {number}         [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.kelvin2rgb = function (kelvin, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        // initialize accumulators
        var xx = 0, yy = 0, zz = 0;
        var con = 1240.0 / 8.617e-5;
        var dis, wavelength, weight;
        var band, nbands = Reference_1.xyzWavelengths.vectors.length;
        // loop over wavelength bands
        // integration by trapezoid method
        for (band = 0; band < nbands; band++) {
            weight = band == 0 || band == nbands - 1 ? 0.5 : 1;
            wavelength = 380 + band * 5;
            // generate a black body spectrum
            dis =
                (3.74183e-16 * (1 / Math.pow(wavelength, 5))) /
                    (Math.exp(con / (wavelength * kelvin.getK())) - 1);
            // simple integration over bands
            xx += weight * dis * Reference_1.xyzWavelengths.vectors[band][0];
            yy += weight * dis * Reference_1.xyzWavelengths.vectors[band][1];
            zz += weight * dis * Reference_1.xyzWavelengths.vectors[band][2];
        }
        // re-normalize
        var xxyyzzMax = Math.max(xx, yy, zz);
        var x = xx / xxyyzzMax;
        var y = yy / xxyyzzMax;
        var z = zz / xxyyzzMax;
        var xr = Reference_1.xyzWavelengths.chromaticityCoordinates.r[0];
        var yr = Reference_1.xyzWavelengths.chromaticityCoordinates.r[1];
        var zr = 1 - xr - yr;
        var xg = Reference_1.xyzWavelengths.chromaticityCoordinates.g[0];
        var yg = Reference_1.xyzWavelengths.chromaticityCoordinates.g[1];
        var zg = 1 - xg - yg;
        var xb = Reference_1.xyzWavelengths.chromaticityCoordinates.b[0];
        var yb = Reference_1.xyzWavelengths.chromaticityCoordinates.b[1];
        var zb = 1 - xb - yb;
        // convert to rgb
        var denominator = (xr * yg - xg * yr) * zb +
            (xb * yr - xr * yb) * zg +
            (xg * yb - xb * yg) * zr;
        var r = ((x * yg - xg * y) * zb +
            (xg * yb - xb * yg) * z +
            (xb * y - x * yb) * zg) /
            denominator;
        var g = ((xr * y - x * yr) * zb +
            (xb * yr - xr * yb) * z +
            (x * yb - xb * y) * zr) /
            denominator;
        var b = ((xr * yg - xg * yr) * z +
            (x * yr - xr * y) * zg +
            (xg * y - x * yg) * zr) /
            denominator;
        r = Math.min(Math.max(r, 0), 1);
        g = Math.min(Math.max(g, 0), 1);
        b = Math.min(Math.max(b, 0), 1);
        // adjust gamma
        var rangeMax = Math.max(1.0e-10, r, g, b);
        r = Math.pow(r / rangeMax, Reference_1.xyzWavelengths.gamma);
        g = Math.pow(g / rangeMax, Reference_1.xyzWavelengths.gamma);
        b = Math.pow(b / rangeMax, Reference_1.xyzWavelengths.gamma);
        // adjust to given bit depth
        var depth = Math.pow(2, bitDepth) - 1;
        r *= depth;
        g *= depth;
        b *= depth;
        r = Math.min(r, depth);
        g = Math.min(g, depth);
        b = Math.min(b, depth);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, depth, bitDepth);
    };
    /**
     * Convert a color temperature in Kelvin to RGB
     * Not accurate for scientific purposes
     * Original algorithm from:
     * https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html
     *
     * @param  {Colors.kelvin}  kelvin    Color temperature in degrees Kelvin; must fall between 1000 and 40000
     * @param  {boolean}        [round=true]
     * @param  {number}         [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.kelvin2rgb_deprecated = function (kelvin, round, bitDepth) {
        if (round === void 0) { round = true; }
        if (bitDepth === void 0) { bitDepth = 8; }
        var k = kelvin.getK() / 100;
        var max = Math.pow(2, bitDepth) - 1;
        var scalar = max / 255;
        var r;
        var g;
        var b;
        if (k <= 66) {
            r = max;
            g = 99.4708025861 * Math.log(k) - 161.1195681661;
        }
        else {
            r = 329.698727466 * Math.pow(k - 60, -0.1332047592);
            g = 288.1221695283 * Math.pow(k - 60, -0.0755148492);
        }
        if (k >= 66) {
            b = max;
        }
        else if (k <= 19) {
            b = 0;
        }
        else {
            b = 138.5177312231 * Math.log(k - 10) - 305.0447927307;
        }
        r *= scalar;
        g *= scalar;
        b *= scalar;
        r = Math.min(Math.max(r, 0), max);
        g = Math.min(Math.max(g, 0), max);
        b = Math.min(Math.max(b, 0), max);
        if (round) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /////////// HEXIDECIMAL ///////////
    /**
     * Convert HEX to RGB
     *
     * @param  {Colors.hex} hex
     * @param  {number}     [bitDepth=8]
     * @return {Colors.rgb}
     */
    Convert.hex2rgb = function (hex, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 8; }
        var r = parseInt(hex.getHex().substring(0, 2), 16);
        var g = parseInt(hex.getHex().substring(2, 4), 16);
        var b = parseInt(hex.getHex().substring(4, 6), 16);
        var max = Math.pow(2, bitDepth) - 1;
        if (max != 255) {
            r = (r / 255) * max;
            g = (g / 255) * max;
            b = (b / 255) * max;
        }
        return new Colors.rgb(r, g, b, max, bitDepth);
    };
    /**
     * Convert RGB to HEX
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [bitDepth=8]
     * @return {Colors.hex}
     */
    Convert.rgb2hex = function (rgb, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 8; }
        var hexint = this.rgb2hexint(rgb, bitDepth);
        return new Colors.hex(hexint.toString(16).slice(1));
    };
    /**
     * Convert RGB to integer of HEX code
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [bitDepth=8]
     * @return {number}     0xRRGGBB
     */
    Convert.rgb2hexint = function (rgb, bitDepth) {
        if (bitDepth === void 0) { bitDepth = 8; }
        var r = rgb.getR();
        var g = rgb.getG();
        var b = rgb.getB();
        if (bitDepth != 8) {
            r = (r / (Math.pow(2, bitDepth) - 1)) * 255;
            g = (g / (Math.pow(2, bitDepth) - 1)) * 255;
            b = (b / (Math.pow(2, bitDepth) - 1)) * 255;
        }
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);
        var hexint = (1 << 24) + (r << 16) + (g << 8) + b;
        return hexint;
    };
    return Convert;
}());
module.exports = Convert;


/***/ }),

/***/ 3714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Modify_1 = __importDefault(__webpack_require__(3315));
var Blend_1 = __importDefault(__webpack_require__(5772));
var Colors = __importStar(__webpack_require__(4269));
var Harmony = /** @class */ (function () {
    function Harmony() {
    }
    /**
     * Return 180deg complement of color
     *
     * @param  {Colors.hsv} hsv
     * @return {Colors.hsv[]}
     */
    Harmony.complement = function (hsv) {
        var hueComplement = Modify_1.default.hueShift(hsv.getH(), 180);
        return [hsv, new Colors.hsv(hueComplement, hsv.getS(), hsv.getV())];
    };
    /**
     * Return an analogous color scheme based on input color and angle
     *
     * @param  {Colors.hsv}        hsv
     * @param  {number}            [angle=30] degrees
     * @return {Array<Colors.hsv>}
     */
    Harmony.analogous = function (hsv, angle) {
        if (angle === void 0) { angle = 30; }
        var aHue1 = Modify_1.default.hueShift(hsv.getH(), angle);
        var aHue2 = Modify_1.default.hueShift(hsv.getH(), angle * -1);
        return [
            hsv,
            new Colors.hsv(aHue1, hsv.getS(), hsv.getV()),
            new Colors.hsv(aHue2, hsv.getS(), hsv.getV()),
        ];
    };
    /**
     * Return a triadic color scheme based on input color
     * Alias of analogous() with 120deg angle
     *
     * @param  {Colors.hsv}        hsv
     * @param  {number}            [angle=120]
     * @return {Array<Colors.hsv>}
     */
    Harmony.triadic = function (hsv, angle) {
        if (angle === void 0) { angle = 120; }
        return this.analogous(hsv, angle);
    };
    /**
     * Return a split complement color scheme based on input color and angle
     * Alias of analogous() but with different default angle
     *
     * @param  {Colors.hsv}        hsv
     * @param  {number}            [angle=150] degrees
     * @return {Array<Colors.hsv>}
     */
    Harmony.splitComplement = function (hsv, angle) {
        if (angle === void 0) { angle = 150; }
        return this.analogous(hsv, angle);
    };
    /**
     * Return a tetradic color scheme based on input color and angle
     *
     * @param  {Colors.hsv}        hsv
     * @param  {number}            [angle=45] degrees
     * @return {Array<Colors.hsv>}
     */
    Harmony.tetradic = function (hsv, angle) {
        if (angle === void 0) { angle = 45; }
        var hue2 = Modify_1.default.hueShift(hsv.getH(), angle);
        var hue3 = Modify_1.default.hueShift(hsv.getH(), angle + 180);
        var hue4 = Modify_1.default.hueShift(hsv.getH(), 180);
        return [
            hsv,
            new Colors.hsv(hue2, hsv.getS(), hsv.getV()),
            new Colors.hsv(hue3, hsv.getS(), hsv.getV()),
            new Colors.hsv(hue4, hsv.getS(), hsv.getV()),
        ];
    };
    /**
     * Return a square color scheme based on input color
     * Alias of tetradic() with 90deg angle
     *
     * @param  {Colors.hsv}        hsv
     * @return {Array<Colors.hsv>}
     */
    Harmony.square = function (hsv) {
        return this.tetradic(hsv, 90);
    };
    /**
     * Returns an array of colors of a darker shade
     *
     * @param {T extends colorType} color
     * @param {string}              [method='hsl']
     * @param {number}              colors
     * @param {number}              [distanceToBlack=1]  0-1, where 1 is all the way to black
     * @param {boolesn}             [round=true]
     * @returns {T[]}
     */
    Harmony.shade = function (color, method, colors, distanceToBlack) {
        if (method === void 0) { method = 'hsl'; }
        if (distanceToBlack === void 0) { distanceToBlack = 1; }
        var scheme = [];
        if ([
            'hsv',
            'hsva',
            'hsi',
            'hsia',
            'hsp',
            'hspa',
            'hsl',
            'hsla',
            'rgb',
            'rgb2',
            'cmyk',
            'lab',
            'luv',
        ].includes(method)) {
            var type = method.replace(/[0-9]/, '').replace(/a$/, '');
            var start = color.to(type, { round: false });
            for (var n = 0; n < colors; n++) {
                scheme.push(start.modify('darken', {
                    method: method,
                    amount: (n / (colors - 1)) * distanceToBlack,
                    round: false,
                }));
            }
        }
        else {
            throw new Error('Invalid shade scheme method: ' + method);
        }
        return scheme;
    };
    /**
     * Returns an array of colors of a lighter tint
     *
     * @param {T extends colorType} color
     * @param {string}              [method='hsl']
     * @param {number}              colors
     * @param {number}              [distanceToWhite=1]  0-1, where 1 is all the way to white
     * @param {boolesn}             [round=true]
     * @returns {T[]}
     */
    Harmony.tint = function (color, method, colors, distanceToWhite) {
        if (method === void 0) { method = 'hsl'; }
        if (distanceToWhite === void 0) { distanceToWhite = 1; }
        var scheme = [];
        if ([
            'hsv',
            'hsva',
            'hsi',
            'hsia',
            'hsp',
            'hspa',
            'hsl',
            'hsla',
            'rgb',
            'rgb2',
            'cmyk',
            'lab',
            'luv',
        ].includes(method)) {
            var type = method.replace(/[0-9]/, '').replace(/a$/, '');
            var start = color.to(type, { round: false });
            for (var n = 0; n < colors; n++) {
                scheme.push(start.modify('lighten', {
                    method: method,
                    amount: (n / (colors - 1)) * distanceToWhite,
                    round: false,
                }));
            }
        }
        else {
            throw new Error('Invalid tint scheme method: ' + method);
        }
        return scheme;
    };
    /**
     * Returns an array of colors of darker shades and lighter tints
     *
     * @param {T extends colorType} color
     * @param {string}              method
     * @param {number}              colors
     * @param {boolean}             [round=true]
     * @param {number}              [distance=1]       0-1, where 1 is all the way to closest bound OR white, if distanceShade given
     * @param {number}              [distanceShade=1]  0-1, where 1 is all the way to black
     * @returns
     */
    Harmony.shadetint = function (color, method, colors, round, distance, distanceShade) {
        if (round === void 0) { round = true; }
        if (distance === void 0) { distance = 1; }
        var scheme = [];
        switch (method) {
            case 'hsl':
            case 'hsla':
                var hsl = color.to('hsl', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (100 - hsl.getL() < hsl.getL()) {
                        distanceShade = ((100 - hsl.getL()) / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = (hsl.getL() / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.hslDarken(hsl, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(hsl.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.hslLighten(hsl, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'hsv':
            case 'hsva':
                var hsv = color.to('hsv', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (100 - hsv.getV() < hsv.getV()) {
                        distanceShade = ((100 - hsv.getV()) / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = (hsv.getV() / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.hsvDarken(hsv, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(hsv.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.hsvLighten(hsv, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'hsi':
            case 'hsia':
                var hsi = color.to('hsi', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (100 - hsi.getI() < hsi.getI()) {
                        distanceShade = ((100 - hsi.getI()) / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = (hsi.getI() / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.hsiDarken(hsi, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(hsi.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.hsiLighten(hsi, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'hsp':
            case 'hspa':
                var hsp = color.to('hsp', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (100 - hsp.getP() < hsp.getP()) {
                        distanceShade = ((100 - hsp.getP()) / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = (hsp.getP() / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.hspDarken(hsp, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(hsp.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.hspLighten(hsp, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'rgb2':
            case 'rgba2':
                var rgb2 = color.to('rgb', { round: false });
                if (typeof distanceShade === 'undefined') {
                    var avg = (rgb2.getR() + rgb2.getG() + rgb2.getB()) / 3;
                    if (rgb2.getMax() - avg < avg) {
                        distanceShade =
                            ((rgb2.getMax() -
                                Math.min(rgb2.getR(), rgb2.getG(), rgb2.getB())) /
                                rgb2.getMax() /
                                2) *
                                distance;
                    }
                    else {
                        distanceShade = distance;
                        distance =
                            (Math.max(rgb2.getR(), rgb2.getG(), rgb2.getB()) /
                                rgb2.getMax() /
                                2) *
                                distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.rgb2Darken(rgb2, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(rgb2.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.rgb2Lighten(rgb2, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'rgb':
            case 'rgba':
                var rgb = color.to('rgb', { round: false });
                if (typeof distanceShade === 'undefined') {
                    var avg = (rgb.getR() + rgb.getG() + rgb.getB()) / 3;
                    if (rgb.getMax() - avg < avg) {
                        distanceShade =
                            ((rgb.getMax() - Math.min(rgb.getR(), rgb.getG(), rgb.getB())) /
                                rgb.getMax() /
                                2) *
                                distance;
                    }
                    else {
                        distanceShade = distance;
                        distance =
                            (Math.max(rgb.getR(), rgb.getG(), rgb.getB()) /
                                rgb.getMax() /
                                2) *
                                distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.rgbDarken(rgb, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(rgb.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.rgbLighten(rgb, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'cmyk':
                var cmyk = color.to('cmyk', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (cmyk.getK() < 50) {
                        distanceShade = (cmyk.getK() / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = ((100 - cmyk.getK()) / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.cmykDarken(cmyk, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(cmyk.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.cmykLighten(cmyk, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'lab':
                var lab = color.to('lab', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (lab.getL() < 50) {
                        distanceShade = (lab.getL() / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = ((100 - lab.getL()) / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.labDarken(lab, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(lab.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.labLighten(lab, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            case 'luv':
                var luv = color.to('luv', { round: false });
                if (typeof distanceShade === 'undefined') {
                    if (luv.getL() < 50) {
                        distanceShade = (luv.getL() / 50) * distance;
                    }
                    else {
                        distanceShade = distance;
                        distance = ((100 - luv.getL()) / 50) * distanceShade;
                    }
                }
                for (var i = 0; i < colors; i++) {
                    scheme.push(Modify_1.default.luvDarken(luv, ((colors - i) / colors) * distanceShade).to(color.getType(), { round: round }));
                }
                scheme.push(luv.to(color.getType(), { round: round }));
                for (var i = 1; i <= colors; i++) {
                    scheme.push(Modify_1.default.luvLighten(luv, (i / colors) * distance).to(color.getType(), { round: round }));
                }
                break;
            default:
                throw new Error('Invalid method for generating color scheme');
        }
        return scheme;
    };
    /**
     * Return an array of colors blended from color1 to color2
     *
     * @param {T extends colorType} color1
     * @param {T extends colorType} color2
     * @param {number}              colors  number of colors in scheme (including color1 and color2)
     * @returns {T[]}
     */
    Harmony.gradient = function (type, color1, color2, colors, round) {
        if (round === void 0) { round = true; }
        if (colors < 2) {
            throw new Error('Unable to generate gradient with less than two colors');
        }
        type = type.toLowerCase();
        var reachesColor2 = ![
            'multiply',
            'screen',
            'overlay',
            'softlight',
            'colorburn',
            'colordodge',
            'vividlight',
            'linearburn',
            'lineardodge',
            'linearlight',
            'divide',
            'addition',
            'subtraction',
            'difference',
            'hue',
            'value',
            'lightness',
            'intensity',
            'perceivedbrightness',
            'perceived',
        ].includes(type);
        var inBetweenColors = reachesColor2 ? colors - 2 : colors - 1;
        var gradient = [];
        gradient.push(color1);
        for (var i = 0; i < inBetweenColors; i++) {
            var amount = (i + 1) / (inBetweenColors + 1);
            if ([
                'multiply',
                'screen',
                'overlay',
                'softlight',
                'colordodge',
                'colorburn',
                'vividlight',
                'lineardodge',
                'linearburn',
                'linearlight',
                'divide',
                'addition',
                'subtraction',
                'difference',
            ].includes(type)) {
                gradient.push(Blend_1.default.rgbBlendMode(color1.to('rgb', { round: false }), color2.to('rgb', { round: false }), amount, type).to(color1.getType(), { round: round }));
            }
            else {
                switch (type) {
                    case 'rgb':
                    case 'rgba':
                        gradient.push(Blend_1.default.rgbBlend(color1.to('rgb', { round: false }), color2.to('rgb', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'hue':
                        gradient.push(Blend_1.default.hueBlend(color1.to('hsv', { round: false }), color2.to('hsv', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'hsv':
                    case 'hsva':
                        gradient.push(Blend_1.default.hsvBlend(color1.to('hsv', { round: false }), color2.to('hsv', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'value':
                        gradient.push(Blend_1.default.valueBlend(color1.to('hsv', { round: false }), color2.to('hsv', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'hsl':
                    case 'hsla':
                        gradient.push(Blend_1.default.hslBlend(color1.to('hsl', { round: false }), color2.to('hsl', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'lightness':
                        gradient.push(Blend_1.default.lightnessBlend(color1.to('hsl', { round: false }), color2.to('hsl', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'hsi':
                    case 'hsia':
                        gradient.push(Blend_1.default.hsiBlend(color1.to('hsi', { round: false }), color2.to('hsi', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'intensity':
                        gradient.push(Blend_1.default.intensityBlend(color1.to('hsi', { round: false }), color2.to('hsi', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'hsp':
                    case 'hspa':
                        gradient.push(Blend_1.default.hspBlend(color1.to('hsp', { round: false }), color2.to('hsp', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'perceivedbrightness':
                    case 'perceived':
                        gradient.push(Blend_1.default.perceivedBrightnessBlend(color1.to('hsp', { round: false }), color2.to('hsp', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'cmyk':
                        gradient.push(Blend_1.default.cmykBlend(color1.to('cmyk', { round: false }), color2.to('cmyk', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'yiq':
                        gradient.push(Blend_1.default.yiqBlend(color1.to('yiq', { round: false }), color2.to('yiq', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'lab':
                        gradient.push(Blend_1.default.labBlend(color1.to('lab', { round: false }), color2.to('lab', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    case 'luv':
                        gradient.push(Blend_1.default.luvBlend(color1.to('luv', { round: false }), color2.to('luv', { round: false }), amount).to(color1.getType(), { round: round }));
                        break;
                    default:
                        throw new Error('Unrecognized gradient method');
                }
            }
        }
        if (reachesColor2)
            gradient.push(color2);
        return gradient;
    };
    return Harmony;
}());
module.exports = Harmony;


/***/ }),

/***/ 3315:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var Colors = __importStar(__webpack_require__(4269));
var Modify = /** @class */ (function () {
    function Modify() {
    }
    /**
     * Rotate $hue by $angle degrees
     * Degrees can be more than 360 or less than -360 and will loop around
     *
     * @param  {number} hue   degrees
     * @param  {number} angle degrees
     * @return {number}       rotated hue
     */
    Modify.hueShift = function (hue, angle) {
        hue += angle;
        while (hue >= 360)
            hue -= 360;
        while (hue < 0)
            hue += 360;
        return hue;
    };
    /**
     * Darken RGB color by amount
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.rgb}
     */
    Modify.rgbDarken = function (rgb, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var rd = rgb.getR() * realAmount;
        var gd = rgb.getG() * realAmount;
        var bd = rgb.getB() * realAmount;
        return new Colors.rgb(rd, gd, bd, rgb.getA());
    };
    /**
     * Lighten RGB color by amount
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.rgb}
     */
    Modify.rgbLighten = function (rgb, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var rl = rgb.getR() + (rgb.getMax() - rgb.getR()) * realAmount;
        var gl = rgb.getG() + (rgb.getMax() - rgb.getG()) * realAmount;
        var bl = rgb.getB() + (rgb.getMax() - rgb.getB()) * realAmount;
        return new Colors.rgb(rl, gl, bl, rgb.getA());
    };
    /**
     * Darken RGB color by amount (alt method)
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.rgb}
     */
    Modify.rgb2Darken = function (rgb, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var distanceLeft = Math.max(rgb.getR(), rgb.getG(), rgb.getB());
        var changeValue = distanceLeft * realAmount;
        var rd = Math.max(0, rgb.getR() - changeValue);
        var gd = Math.max(0, rgb.getG() - changeValue);
        var bd = Math.max(0, rgb.getB() - changeValue);
        return new Colors.rgb(rd, gd, bd, rgb.getA());
    };
    /**
     * Lighten RGB color by amount (alt method)
     *
     * @param  {Colors.rgb} rgb
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.rgb}
     */
    Modify.rgb2Lighten = function (rgb, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var distanceLeft = rgb.getMax() - Math.min(rgb.getR(), rgb.getG(), rgb.getB());
        var changeValue = distanceLeft * realAmount;
        var rl = Math.min(rgb.getR() + changeValue, rgb.getMax());
        var gl = Math.min(rgb.getG() + changeValue, rgb.getMax());
        var bl = Math.min(rgb.getB() + changeValue, rgb.getMax());
        return new Colors.rgb(rl, gl, bl, rgb.getA());
    };
    /**
     * Darken CMYK color by amount
     *
     * @param  {Colors.cmyk} cmyk
     * @param  {number}      [amount=0.5]  amount to darken, 0-1
     * @return {Colors.cmyk}
     */
    Modify.cmykDarken = function (cmyk, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var c2 = cmyk.getC() + (100 - cmyk.getC()) * realAmount;
        var m2 = cmyk.getM() + (100 - cmyk.getM()) * realAmount;
        var y2 = cmyk.getY() + (100 - cmyk.getY()) * realAmount;
        var k2 = cmyk.getK() + (100 - cmyk.getK()) * realAmount;
        return new Colors.cmyk(c2, m2, y2, k2);
    };
    /**
     * Lighten CMYK color by amount
     *
     * @param  {Colors.cmyk} cmyk
     * @param  {number}      [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.cmyk}
     */
    Modify.cmykLighten = function (cmyk, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var c2 = cmyk.getC() * realAmount;
        var m2 = cmyk.getM() * realAmount;
        var y2 = cmyk.getY() * realAmount;
        var k2 = cmyk.getK() * realAmount;
        return new Colors.cmyk(c2, m2, y2, k2);
    };
    /**
     * Darken CMYK color by amount (alt method)
     *
     * @param  {Colors.cmyk} cmyk
     * @param  {number}      [amount=0.5]  amount to darken, 0-1
     * @return {Colors.cmyk}
     */
    Modify.cmyk2Darken = function (cmyk, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var k2 = cmyk.getK() + (100 - cmyk.getK()) * realAmount;
        return new Colors.cmyk(cmyk.getC(), cmyk.getM(), cmyk.getY(), k2);
    };
    /**
     * Lighten CMYK color by amount (alt method)
     *
     * @param  {Colors.cmyk} cmyk
     * @param  {number}      [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.cmyk}
     */
    Modify.cmyk2Lighten = function (cmyk, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var k2 = cmyk.getK() * realAmount;
        return new Colors.cmyk(cmyk.getC(), cmyk.getM(), cmyk.getY(), k2);
    };
    /**
     * Darken HSL color by amount
     *
     * @param  {Colors.hsl} hsl
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.hsl}
     */
    Modify.hslDarken = function (hsl, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var vDarker = hsl.getL() * realAmount;
        return new Colors.hsl(hsl.getH(), hsl.getS(), vDarker, hsl.getA());
    };
    /**
     * Lighten HSL color by amount
     *
     * @param  {Colors.hsl} hsl
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsl}
     */
    Modify.hslLighten = function (hsl, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var vLighter = hsl.getL() + (100 - hsl.getL()) * realAmount;
        return new Colors.hsl(hsl.getH(), hsl.getS(), vLighter, hsl.getA());
    };
    /**
     * Darken HSV color by amount
     *
     * @param  {Colors.hsv} hsv
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.hsv}
     */
    Modify.hsvDarken = function (hsv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var vDarker = hsv.getV() * realAmount;
        return new Colors.hsv(hsv.getH(), hsv.getS(), vDarker, hsv.getA());
    };
    /**
     * Lighten HSV color by amount
     *
     * @param  {Colors.hsv} hsv
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsv}
     */
    Modify.hsvLighten = function (hsv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var vLighter = hsv.getV() + (100 - hsv.getV()) * realAmount;
        var sLighter = hsv.getS() - realAmount * hsv.getS();
        return new Colors.hsv(hsv.getH(), sLighter, vLighter, hsv.getA());
    };
    /**
     * Darken HSI color by amount
     *
     * @param  {Colors.hsi} hsi
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.hsi}
     */
    Modify.hsiDarken = function (hsi, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var vDarker = hsi.getI() * realAmount;
        return new Colors.hsi(hsi.getH(), hsi.getS(), vDarker, hsi.getA());
    };
    /**
     * Lighten HSI color by amount
     *
     * @param  {Colors.hsi} hsi
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsi}
     */
    Modify.hsiLighten = function (hsi, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var vLighter = hsi.getI() + (100 - hsi.getI()) * realAmount;
        var sLighter = hsi.getS() - realAmount * hsi.getS();
        return new Colors.hsi(hsi.getH(), sLighter, vLighter, hsi.getA());
    };
    /**
     * Darken HSP color by amount
     *
     * @param  {Colors.hsp} hsp
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.hsp}
     */
    Modify.hspDarken = function (hsp, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var pDarker = hsp.getP() * realAmount;
        return new Colors.hsp(hsp.getH(), hsp.getS(), pDarker, hsp.getA(), hsp.getPb(), hsp.getPr());
    };
    /**
     * Lighten HSP color by amount
     *
     * @param  {Colors.hsp} hsp
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsp}
     */
    Modify.hspLighten = function (hsp, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var pLighter = hsp.getP() + (100 - hsp.getP()) * realAmount;
        var sLighter = hsp.getS() - realAmount * hsp.getS();
        return new Colors.hsp(hsp.getH(), sLighter, pLighter, hsp.getA(), hsp.getPb(), hsp.getPr());
    };
    /**
     * Darken Lab color by amount
     *
     * @param  {Colors.lab} lab
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.lab}
     */
    Modify.labDarken = function (lab, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var lDarker = lab.getL() * realAmount;
        var aDarker = lab.getA() * realAmount;
        var bDarker = lab.getB() * realAmount;
        return new Colors.lab(lDarker, aDarker, bDarker);
    };
    /**
     * Lighten Lab color by amount
     *
     * @param  {Colors.lab} lab
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.lab}
     */
    Modify.labLighten = function (lab, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var realAmountAB = 1 - Math.min(Math.max(amount, 0), 1);
        var lLighter = lab.getL() + (100 - lab.getL()) * realAmount;
        var aLighter = lab.getA() * realAmountAB;
        var bLighter = lab.getB() * realAmountAB;
        return new Colors.lab(lLighter, aLighter, bLighter);
    };
    /**
     * Darken Lab color by amount (alt method)
     *
     * @param  {Colors.lab} lab
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.lab}
     */
    Modify.lab2Darken = function (lab, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var lDarker = lab.getL() * realAmount;
        return new Colors.lab(lDarker, lab.getA(), lab.getB());
    };
    /**
     * Lighten Lab color by amount (alt method)
     *
     * @param  {Colors.lab} lab
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.lab}
     */
    Modify.lab2Lighten = function (lab, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var lLighter = lab.getL() + (100 - lab.getL()) * realAmount;
        return new Colors.lab(lLighter, lab.getA(), lab.getB());
    };
    /**
     * Darken Luv color by amount
     *
     * @param  {Colors.luv} luv
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.luv}
     */
    Modify.luvDarken = function (luv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var lDarker = luv.getL() * realAmount;
        var uDarker = luv.getU() * realAmount;
        var vDarker = luv.getV() * realAmount;
        return new Colors.luv(lDarker, uDarker, vDarker);
    };
    /**
     * Lighten Luv color by amount
     *
     * @param  {Colors.luv} luv
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.luv}
     */
    Modify.luvLighten = function (luv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var realAmountAB = 1 - Math.min(Math.max(amount, 0), 1);
        var lLighter = luv.getL() + (100 - luv.getL()) * realAmount;
        var uLighter = luv.getU() * realAmountAB;
        var vLighter = luv.getV() * realAmountAB;
        return new Colors.luv(lLighter, uLighter, vLighter);
    };
    /**
     * Darken Luv color by amount (alt method)
     * Breaks as L* approaches 0
     *
     * @param  {Colors.luv} luv
     * @param  {number}     [amount=0.5]  amount to darken, 0-1
     * @return {Colors.luv}
     */
    Modify.luv2Darken = function (luv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var lDarker = luv.getL() * realAmount;
        return new Colors.luv(lDarker, luv.getU(), luv.getV());
    };
    /**
     * Lighten Luv color by amount (alt method)
     *
     * @param  {Colors.luv} luv
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.luv}
     */
    Modify.luv2Lighten = function (luv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var lLighter = luv.getL() + (100 - luv.getL()) * realAmount;
        return new Colors.luv(lLighter, luv.getU(), luv.getV());
    };
    /**
     * Desaturate HSL color by amount
     *
     * @param  {Colors.hsl} hsl
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsl}
     */
    Modify.hslDesaturate = function (hsl, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var sLess = hsl.getS() * realAmount;
        return new Colors.hsl(hsl.getH(), sLess, hsl.getL(), hsl.getA());
    };
    /**
     * Saturate HSL color by amount
     *
     * @param  {Colors.hsl} hsl
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsl}
     */
    Modify.hslSaturate = function (hsl, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var sMore = hsl.getS() + (100 - hsl.getS()) * realAmount;
        return new Colors.hsl(hsl.getH(), sMore, hsl.getL(), hsl.getA());
    };
    /**
     * Desaturate HSV color by amount
     *
     * @param  {Colors.hsv} hsv
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsv}
     */
    Modify.hsvDesaturate = function (hsv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var sLess = hsv.getS() * realAmount;
        return new Colors.hsv(hsv.getH(), sLess, hsv.getV(), hsv.getA());
    };
    /**
     * Saturate HSV color by amount
     *
     * @param  {Colors.hsv} hsv
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsv}
     */
    Modify.hsvSaturate = function (hsv, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var sMore = hsv.getS() + (100 - hsv.getS()) * realAmount;
        return new Colors.hsv(hsv.getH(), sMore, hsv.getV(), hsv.getA());
    };
    /**
     * Desaturate HSI color by amount
     *
     * @param  {Colors.hsi} hsi
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsi}
     */
    Modify.hsiDesaturate = function (hsi, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var sLess = hsi.getS() * realAmount;
        return new Colors.hsi(hsi.getH(), sLess, hsi.getI(), hsi.getA());
    };
    /**
     * Saturate HSI color by amount
     *
     * @param  {Colors.hsi} hsi
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsi}
     */
    Modify.hsiSaturate = function (hsi, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var sMore = hsi.getS() + (100 - hsi.getS()) * realAmount;
        return new Colors.hsi(hsi.getH(), sMore, hsi.getI(), hsi.getA());
    };
    /**
     * Desaturate HSP color by amount
     *
     * @param  {Colors.hsp} hsp
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsp}
     */
    Modify.hspDesaturate = function (hsp, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = 1 - Math.min(Math.max(amount, 0), 1);
        var sLess = hsp.getS() * realAmount;
        return new Colors.hsp(hsp.getH(), sLess, hsp.getP(), hsp.getA());
    };
    /**
     * Saturate HSP color by amount
     *
     * @param  {Colors.hsp} hsp
     * @param  {number}     [amount=0.5]  amount to lighten, 0-1
     * @return {Colors.hsp}
     */
    Modify.hspSaturate = function (hsp, amount) {
        if (amount === void 0) { amount = 0.5; }
        var realAmount = Math.min(Math.max(amount, 0), 1);
        var sMore = hsp.getS() + (100 - hsp.getS()) * realAmount;
        return new Colors.hsp(hsp.getH(), sMore, hsp.getP(), hsp.getA());
    };
    return Modify;
}());
module.exports = Modify;


/***/ }),

/***/ 6626:
/***/ (function(__unused_webpack_module, exports) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xyzWavelengths = exports.colorSpaces = exports.stdIlluminants = exports.cieK = exports.cieE = void 0;
/**
 * CIE Constants of L* Function
 *   ϵ = cieE
 *   κ = cieK
 *
 * Standard Illuminant White Points
 *   Reference Hue and RGB values
 *   Correlated Black Body Radiation Color Temperatures in deg K
 *   Chromaticity Coordinates (1931 2 deg & 1964 10 deg)
 *   Tristimulus Values for std 2 deg observer (incomplete)
 *
 * Color Spaces
 *   Gamma values
 *   XYZ to RGB and RGB to XYZ conversion matrices for various
 *   reference illuminants (generally d50 and d65, not comprehensive)
 */
// 0.008856  Initial CIE standard
// 216/24389 Intent of CIE standard, updated to standard in 2004
exports.cieE = 216 / 24389;
// 903.3     Initial CIE standard
// 24389/27  Intent of CIE standard, updated to standard in 2004
exports.cieK = 24389 / 27;
// Standard Illuminant White Points, including:
//   Reference Hue and RGB values
//   Correlated Black Body Radiation Color Temperatures in deg K
//   Chromaticity Coordinates (1931 2 deg & 1964 10 deg)
//   Tristimulus Values for std 2 deg observer (incomplete)
exports.stdIlluminants = {
    a: {
        ref: 'Incandescent / Tungsten',
        k: 2856,
        hue: 30,
        rgb: [255, 175, 95],
        chrom: {
            '2d': {
                x: 0.44757,
                y: 0.40745,
            },
            '10d': {
                x: 0.45117,
                y: 0.40594,
            },
        },
        vector: [1.0985, 1, 0.35585],
    },
    b: {
        ref: 'Direct Sunlight at Noon',
        k: 4874,
        hue: 27,
        rgb: [255, 226, 199],
        chrom: {
            '2d': {
                x: 0.34842,
                y: 0.35161,
            },
            '10d': {
                x: 0.3498,
                y: 0.3527,
            },
        },
        vector: [0.99072, 1, 0.85223],
    },
    c: {
        ref: 'Average / North Sky Daylight',
        k: 6774,
        hue: 276,
        rgb: [248, 245, 255],
        chrom: {
            '2d': {
                x: 0.31006,
                y: 0.31616,
            },
            '10d': {
                x: 0.31039,
                y: 0.31905,
            },
        },
        vector: [0.98074, 1, 1.18232],
    },
    d50: {
        ref: 'Horizon Light / ICC profile PCS',
        k: 5003,
        hue: 35,
        rgb: [255, 228, 205],
        chrom: {
            '2d': {
                x: 0.34567,
                y: 0.3585,
            },
            '10d': {
                x: 0.34773,
                y: 0.35952,
            },
        },
        // 0.82 or 1.82 ?? >_>
        vector: [0.96422, 1, 0.82521],
    },
    d55: {
        ref: 'Mid-morning / Mid-afternoon Daylight',
        k: 5503,
        hue: 36,
        rgb: [255, 236, 223],
        chrom: {
            '2d': {
                x: 0.33242,
                y: 0.34743,
            },
            '10d': {
                x: 0.33411,
                y: 0.34877,
            },
        },
        vector: [0.95682, 1, 0.92149],
    },
    d65: {
        ref: 'Noon Daylight / Television / sRGB',
        k: 6504,
        hue: false,
        rgb: [255, 249, 255],
        chrom: {
            '2d': {
                x: 0.31271,
                y: 0.32902,
            },
            '10d': {
                x: 0.31382,
                y: 0.331,
            },
        },
        vector: [0.95047, 1, 1.08883],
    },
    d75: {
        ref: 'North Sky Daylight',
        k: 7504,
        hue: 217,
        rgb: [232, 236, 255],
        chrom: {
            '2d': {
                x: 0.29902,
                y: 0.31485,
            },
            '10d': {
                x: 0.29968,
                y: 0.3174,
            },
        },
        vector: [0.94972, 1, 1.22638],
    },
    e: {
        ref: 'Equal Energy',
        k: 5454,
        hue: 10,
        rgb: [255, 235, 221],
        chrom: {
            '2d': {
                x: 1 / 3,
                y: 1 / 3,
            },
            '10d': {
                x: 1 / 3,
                y: 1 / 3,
            },
        },
        vector: [1, 1, 1],
    },
    f1: {
        ref: 'Daylight Fluorescent',
        k: 6430,
        hue: 111,
        rgb: [255, 248, 253],
        chrom: {
            '2d': {
                x: 0.3131,
                y: 0.33727,
            },
            '10d': {
                x: 0.31811,
                y: 0.33559,
            },
        },
    },
    f2: {
        ref: 'Cool White FLuorescent',
        k: 4230,
        hue: 33,
        rgb: [255, 213, 171],
        chrom: {
            '2d': {
                x: 0.37208,
                y: 0.37529,
            },
            '10d': {
                x: 0.37925,
                y: 0.36733,
            },
        },
        vector: [0.99186, 1, 1.67393],
    },
    f3: {
        ref: 'White Fluorescent',
        k: 3450,
        hue: 32,
        rgb: [255, 194, 131],
        chrom: {
            '2d': {
                x: 0.4091,
                y: 0.3943,
            },
            '10d': {
                x: 0.41761,
                y: 0.38324,
            },
        },
    },
    f4: {
        ref: 'Warm White FLuorescent',
        k: 2940,
        hue: 30,
        rgb: [255, 177, 101],
        chrom: {
            '2d': {
                x: 0.44018,
                y: 0.40329,
            },
            '10d': {
                x: 0.4492,
                y: 0.39074,
            },
        },
    },
    f5: {
        ref: 'Daylight FLuorescent',
        k: 6350,
        hue: 106,
        rgb: [255, 247, 250],
        chrom: {
            '2d': {
                x: 0.31379,
                y: 0.34531,
            },
            '10d': {
                x: 0.31975,
                y: 0.34246,
            },
        },
    },
    f6: {
        ref: 'Lite White Fluorescent',
        k: 4150,
        hue: 38,
        rgb: [255, 212, 168],
        chrom: {
            '2d': {
                x: 0.3779,
                y: 0.38835,
            },
            '10d': {
                x: 0.3866,
                y: 0.37847,
            },
        },
    },
    f7: {
        ref: 'D65 Simulator, Daylight Simulator',
        k: 6500,
        hue: false,
        rgb: [255, 249, 255],
        chrom: {
            '2d': {
                x: 0.31292,
                y: 0.32933,
            },
            '10d': {
                x: 0.31569,
                y: 0.3296,
            },
        },
        vector: [0.95041, 1, 1.08747],
    },
    f8: {
        ref: 'D50 Simulator, Sylvania F40 Design 50',
        k: 5000,
        hue: 35,
        rgb: [255, 228, 204],
        chrom: {
            '2d': {
                x: 0.34588,
                y: 0.35875,
            },
            '10d': {
                x: 0.34902,
                y: 0.35939,
            },
        },
    },
    f9: {
        ref: 'Cool White Deluxe Fluorescent',
        k: 4150,
        hue: 30,
        rgb: [255, 212, 168],
        chrom: {
            '2d': {
                x: 0.37417,
                y: 0.37281,
            },
            '10d': {
                x: 0.37829,
                y: 0.37045,
            },
        },
    },
    f10: {
        ref: 'Philips TL85, Ultralume 50',
        k: 5000,
        hue: 36,
        rgb: [255, 228, 204],
        chrom: {
            '2d': {
                x: 0.34609,
                y: 0.35986,
            },
            '10d': {
                x: 0.3509,
                y: 0.35444,
            },
        },
    },
    f11: {
        ref: 'Philips TL84, Ultralume 40',
        k: 4000,
        hue: 31,
        rgb: [255, 208, 160],
        chrom: {
            '2d': {
                x: 0.38052,
                y: 0.37713,
            },
            '10d': {
                x: 0.38541,
                y: 0.37123,
            },
        },
        vector: [1.00962, 1, 0.6435],
    },
    f12: {
        ref: 'Philips TL83, Ultralume 30',
        k: 3000,
        hue: 31,
        rgb: [255, 179, 105],
        chrom: {
            '2d': {
                x: 0.43695,
                y: 0.40441,
            },
            '10d': {
                x: 0.44256,
                y: 0.39717,
            },
        },
    },
    icc: [0.9642, 1, 0.8249],
};
exports.colorSpaces = {
    adobergb1998: {
        name: 'Adobe RGB (1998)',
        gamma: 2.2,
        rgb2xyz: {
            d65: [
                [0.5767309, 0.185554, 0.1881852],
                [0.2973769, 0.6273491, 0.0752741],
                [0.0270343, 0.0706872, 0.9911085],
            ],
            d50: [
                [0.6097559, 0.2052401, 0.149224],
                [0.3111242, 0.625656, 0.0632197],
                [0.0194811, 0.0608902, 0.7448387],
            ],
        },
        xyz2rgb: {
            d65: [
                [2.041369, -0.5649464, -0.3446944],
                [-0.969266, 1.8760108, 0.041556],
                [0.0134474, -0.1183897, 1.0154096],
            ],
            d50: [
                [1.9624274, -0.6105343, -0.3413404],
                [-0.9787684, 1.9161415, 0.033454],
                [0.0286869, -0.1406752, 1.3487655],
            ],
        },
    },
    applergb: {
        name: 'Apple RGB',
        gamma: 1.8,
        rgb2xyz: {
            d65: [
                [0.4497288, 0.3162486, 0.1844926],
                [0.2446525, 0.6720283, 0.0833192],
                [0.0251848, 0.1411824, 0.9224628],
            ],
            d50: [
                [0.4755678, 0.3396722, 0.14898],
                [0.2551812, 0.6725693, 0.0722496],
                [0.0184697, 0.1133771, 0.6933632],
            ],
        },
        xyz2rgb: {
            d65: [
                [2.9515373, -1.2894116, -0.4738445],
                [-1.0851093, 1.9908566, 0.0372026],
                [0.0854934, -0.2694964, 1.0912975],
            ],
            d50: [
                [2.8510695, -1.3605261, -0.4708281],
                [-1.092768, 2.0348871, 0.0227598],
                [0.1027403, -0.2964984, 1.4510659],
            ],
        },
    },
    bestrgb: {
        name: 'Best RGB',
        gamma: 2.2,
        rgb2xyz: {
            d50: [
                [0.6326696, 0.2045558, 0.1269946],
                [0.2284569, 0.7373523, 0.0341908],
                [0, 0.0095142, 0.8156958],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.7552599, -0.4836786, -0.253],
                [-0.5441336, 1.5068789, 0.0215528],
                [0.0063467, -0.0175761, 1.2256959],
            ],
        },
    },
    betargb: {
        name: 'Beta RGB',
        gamma: 2.2,
        rgb2xyz: {
            d50: [
                [0.6712537, 0.1745834, 0.1183829],
                [0.3032726, 0.6637861, 0.0329413],
                [0, 0.040701, 0.784509],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.683227, -0.4282363, -0.2360185],
                [-0.7710229, 1.7065571, 0.04469],
                [0.0400013, -0.0885376, 1.272364],
            ],
        },
    },
    brucergb: {
        name: 'Bruce RGB',
        gamma: 2.2,
        rgb2xyz: {
            d65: [
                [0.4674162, 0.2944512, 0.1886026],
                [0.2410115, 0.6835475, 0.075441],
                [0.0219101, 0.0736128, 0.9933071],
            ],
            d50: [
                [0.4941816, 0.3204834, 0.149555],
                [0.2521531, 0.6844869, 0.06336],
                [0.0157886, 0.0629304, 0.7464909],
            ],
        },
        xyz2rgb: {
            d65: [
                [2.7454669, -1.1358136, -0.4350269],
                [-0.969266, 1.8760108, 0.041556],
                [0.0112723, -0.1139754, 1.0132541],
            ],
            d50: [
                [2.6502856, -1.2014485, -0.4289936],
                [-0.9787684, 1.9161415, 0.033454],
                [0.026457, -0.1361227, 1.3458542],
            ],
        },
    },
    ciergb: {
        name: 'CIE RGB',
        gamma: 2.2,
        rgb2xyz: {
            e: [
                [0.488718, 0.3106803, 0.2006017],
                [0.1762044, 0.8129847, 0.0108109],
                [0, 0.0102048, 0.9897952],
            ],
            d50: [
                [0.486887, 0.3062984, 0.1710347],
                [0.1746583, 0.8247541, 0.0005877],
                [-0.0012563, 0.0169832, 0.8094831],
            ],
        },
        xyz2rgb: {
            e: [
                [2.3706743, -0.9000405, -0.4706338],
                [-0.513885, 1.4253036, 0.0885814],
                [0.0052982, -0.0146949, 1.0093968],
            ],
            d50: [
                [2.3638081, -0.867603, -0.4988161],
                [-0.500594, 1.3962369, 0.1047562],
                [0.0141712, -0.03064, 1.2323842],
            ],
        },
    },
    colormatchrgb: {
        name: 'ColorMatch RGB',
        gamma: 1.8,
        rgb2xyz: {
            d50: [
                [0.5093439, 0.3209071, 0.1339691],
                [0.274884, 0.6581315, 0.0669845],
                [0.0242545, 0.1087821, 0.6921735],
            ],
        },
        xyz2rgb: {
            d50: [
                [2.6422874, -1.223427, -0.3930143],
                [-1.1119763, 2.0590183, 0.0159614],
                [0.0821699, -0.2807254, 1.4559877],
            ],
        },
    },
    donrgb4: {
        name: 'Don RGB 4',
        gamma: 2.2,
        rgb2xyz: {
            d50: [
                [0.6457711, 0.1933511, 0.1250978],
                [0.2783496, 0.6879702, 0.0336802],
                [0.0037113, 0.0179861, 0.8035125],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.7603902, -0.4881198, -0.2536126],
                [-0.7126288, 1.6527432, 0.0416715],
                [0.0078207, -0.0347411, 1.2447743],
            ],
        },
    },
    ecirgb: {
        name: 'ECI RGB v2',
        // gamma = L*
        rgb2xyz: {
            d50: [
                [0.6502043, 0.1780774, 0.1359384],
                [0.3202499, 0.6020711, 0.0776791],
                [0, 0.067839, 0.757371],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.7827618, -0.4969847, -0.2690101],
                [-0.9593623, 1.9477962, -0.0275807],
                [0.0859317, -0.1744674, 1.3228273],
            ],
        },
    },
    ektaspaceps5: {
        name: 'Ekta Space PS5',
        gamma: 2.2,
        rgb2xyz: {
            d50: [
                [0.5938914, 0.2729801, 0.0973485],
                [0.2606286, 0.7349465, 0.0044249],
                [0, 0.0419969, 0.7832131],
            ],
        },
        xyz2rgb: {
            d50: [
                [2.0043819, -0.7304844, -0.2450052],
                [-0.7110285, 1.6202126, 0.0792227],
                [0.0381263, -0.086878, 1.2725438],
            ],
        },
    },
    ntscrgb: {
        name: 'NTSC RGB',
        gamma: 2.2,
        rgb2xyz: {
            c: [
                [0.6068909, 0.1735011, 0.200348],
                [0.2989164, 0.586599, 0.1144845],
                [0, 0.0660957, 1.1162243],
            ],
            d50: [
                [0.6343706, 0.1852204, 0.144629],
                [0.3109496, 0.5915984, 0.097452],
                [-0.0011817, 0.0555518, 0.7708399],
            ],
        },
        xyz2rgb: {
            c: [
                [1.9099961, -0.5324542, -0.2882091],
                [-0.9846663, 1.999171, -0.0283082],
                [0.0583056, -0.1183781, 0.8975535],
            ],
            d50: [
                [1.8464881, -0.5521299, -0.2766458],
                [-0.982663, 2.0044755, -0.0690396],
                [0.0736477, -0.145302, 1.3018376],
            ],
        },
    },
    palsecamrgb: {
        name: 'PAL/SECAM RGB',
        gamma: 2.2,
        rgb2xyz: {
            d65: [
                [0.430619, 0.3415419, 0.1783091],
                [0.2220379, 0.7066384, 0.0713236],
                [0.0201853, 0.1295504, 0.9390944],
            ],
            d50: [
                [0.4552773, 0.36755, 0.1413926],
                [0.2323025, 0.7077956, 0.0599019],
                [0.0145457, 0.1049154, 0.7057489],
            ],
        },
        xyz2rgb: {
            d65: [
                [3.0628971, -1.3931791, -0.4757517],
                [-0.969266, 1.8760108, 0.041556],
                [0.0678775, -0.2288548, 1.069349],
            ],
            d50: [
                [2.9603944, -1.4678519, -0.4685105],
                [-0.9787684, 1.9161415, 0.033454],
                [0.0844874, -0.2545973, 1.4216174],
            ],
        },
    },
    prophotorgb: {
        name: 'ProPhoto RGB',
        gamma: 1.8,
        rgb2xyz: {
            d50: [
                [0.7976749, 0.1351917, 0.0313534],
                [0.2880402, 0.7118741, 8.57e-5],
                [0, 0, 0.82521],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.3459433, -0.2556075, -0.0511118],
                [-0.5445989, 1.5081673, 0.0205351],
                [0, 0, 1.2118128],
            ],
        },
    },
    smptecrgb: {
        name: 'SMPTE-C RGB',
        gamma: 2.2,
        rgb2xyz: {
            d65: [
                [0.3935891, 0.3652497, 0.1916313],
                [0.2124132, 0.7010437, 0.0865432],
                [0.0187423, 0.1119313, 0.9581563],
            ],
            d50: [
                [0.416329, 0.3931464, 0.1547446],
                [0.2216999, 0.7032549, 0.0750452],
                [0.0136576, 0.0913604, 0.720192],
            ],
        },
        xyz2rgb: {
            d65: [
                [3.505396, -1.7394894, -0.543964],
                [-1.0690722, 1.9778245, 0.0351722],
                [0.05632, -0.1970226, 1.0502026],
            ],
            d50: [
                [3.392194, -1.8264027, -0.5385522],
                [-1.0770996, 2.0213975, 0.0207989],
                [0.0723073, -0.2217902, 1.3960932],
            ],
        },
    },
    srgb: {
        name: 'sRGB',
        // sRGB companding / ~=2.2
        rgb2xyz: {
            d65: [
                [0.4124564, 0.3575761, 0.1804375],
                [0.2126729, 0.7151522, 0.072175],
                [0.0193339, 0.119192, 0.9503041],
            ],
            d50: [
                [0.4360747, 0.3850649, 0.1430804],
                [0.2225045, 0.7168786, 0.0606169],
                [0.0139322, 0.0971045, 0.7141733],
            ],
        },
        xyz2rgb: {
            d65: [
                [3.2404542, -1.5371385, -0.4985314],
                [-0.969266, 1.8760108, 0.041556],
                [0.0556434, -0.2040259, 1.0572252],
            ],
            d50: [
                [3.1338561, -1.6168667, -0.4906146],
                [-0.9787684, 1.9161415, 0.033454],
                [0.0719453, -0.2289914, 1.4052427],
            ],
        },
    },
    widegamutrgb: {
        name: 'Wide Gamut RGB',
        gamma: 2.2,
        rgb2xyz: {
            d50: [
                [0.7161046, 0.1009296, 0.1471858],
                [0.2581874, 0.7249378, 0.0168748],
                [0, 0.0517813, 0.7734287],
            ],
        },
        xyz2rgb: {
            d50: [
                [1.4628067, -0.1840623, -0.2743606],
                [-0.5217933, 1.4472381, 0.0677227],
                [0.0349342, -0.096893, 1.2884099],
            ],
        },
    },
};
/**
 * William T. Bridgman, NASA; Dan Bruton, SFASU. "RGB Values for Hot Objects". (2000)
 * http://www.physics.sfasu.edu/astro/color/blackbodyc.txt
 *
 *  CIE Color Matching Vectors (x_bar,y_bar,z_bar)
 *  for wavelenghts in 5 nm increments from 380 nm to 780 nm.
 */
exports.xyzWavelengths = {
    gamma: 0.8,
    chromaticityCoordinates: {
        r: [0.64, 0.33],
        g: [0.29, 0.6],
        b: [0.15, 0.06],
        w: [0.3127, 0.3291],
    },
    vectors: [
        [0.0014, 0.0, 0.0065],
        [0.0022, 0.0001, 0.0105],
        [0.0042, 0.0001, 0.0201],
        [0.0076, 0.0002, 0.0362],
        [0.0143, 0.0004, 0.0679],
        [0.0232, 0.0006, 0.1102],
        [0.0435, 0.0012, 0.2074],
        [0.0776, 0.0022, 0.3713],
        [0.1344, 0.004, 0.6456],
        [0.2148, 0.0073, 1.0391],
        [0.2839, 0.0116, 1.3856],
        [0.3285, 0.0168, 1.623],
        [0.3483, 0.023, 1.7471],
        [0.3481, 0.0298, 1.7826],
        [0.3362, 0.038, 1.7721],
        [0.3187, 0.048, 1.7441],
        [0.2908, 0.06, 1.6692],
        [0.2511, 0.0739, 1.5281],
        [0.1954, 0.091, 1.2876],
        [0.1421, 0.1126, 1.0419],
        [0.0956, 0.139, 0.813],
        [0.058, 0.1693, 0.6162],
        [0.032, 0.208, 0.4652],
        [0.0147, 0.2586, 0.3533],
        [0.0049, 0.323, 0.272],
        [0.0024, 0.4073, 0.2123],
        [0.0093, 0.503, 0.1582],
        [0.0291, 0.6082, 0.1117],
        [0.0633, 0.71, 0.0782],
        [0.1096, 0.7932, 0.0573],
        [0.1655, 0.862, 0.0422],
        [0.2257, 0.9149, 0.0298],
        [0.2904, 0.954, 0.0203],
        [0.3597, 0.9803, 0.0134],
        [0.4334, 0.995, 0.0087],
        [0.5121, 1.0, 0.0057],
        [0.5945, 0.995, 0.0039],
        [0.6784, 0.9786, 0.0027],
        [0.7621, 0.952, 0.0021],
        [0.8425, 0.9154, 0.0018],
        [0.9163, 0.87, 0.0017],
        [0.9786, 0.8163, 0.0014],
        [1.0263, 0.757, 0.0011],
        [1.0567, 0.6949, 0.001],
        [1.0622, 0.631, 0.0008],
        [1.0456, 0.5668, 0.0006],
        [1.0026, 0.503, 0.0003],
        [0.9384, 0.4412, 0.0002],
        [0.8544, 0.381, 0.0002],
        [0.7514, 0.321, 0.0001],
        [0.6424, 0.265, 0.0],
        [0.5419, 0.217, 0.0],
        [0.4479, 0.175, 0.0],
        [0.3608, 0.1382, 0.0],
        [0.2835, 0.107, 0.0],
        [0.2187, 0.0816, 0.0],
        [0.1649, 0.061, 0.0],
        [0.1212, 0.0446, 0.0],
        [0.0874, 0.032, 0.0],
        [0.0636, 0.0232, 0.0],
        [0.0468, 0.017, 0.0],
        [0.0329, 0.0119, 0.0],
        [0.0227, 0.0082, 0.0],
        [0.0158, 0.0057, 0.0],
        [0.0114, 0.0041, 0.0],
        [0.0081, 0.0029, 0.0],
        [0.0058, 0.0021, 0.0],
        [0.0041, 0.0015, 0.0],
        [0.0029, 0.001, 0.0],
        [0.002, 0.0007, 0.0],
        [0.0014, 0.0005, 0.0],
        [0.001, 0.0004, 0.0],
        [0.0007, 0.0002, 0.0],
        [0.0005, 0.0002, 0.0],
        [0.0003, 0.0001, 0.0],
        [0.0002, 0.0001, 0.0],
        [0.0002, 0.0001, 0.0],
        [0.0001, 0.0, 0.0],
        [0.0001, 0.0, 0.0],
        [0.0001, 0.0, 0.0],
        [0.0, 0.0, 0.0],
    ],
};


/***/ }),

/***/ 7298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var Reference_1 = __webpack_require__(6626);
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * Scale a value to a different range of values
     * e.g. Scale value from 16-235 to 64-940
     *
     * @param  {number}       value
     * @param  {number}       minFrom      input lower range
     * @param  {number}       maxFrom      input upper range
     * @param  {number}       minTo        output lower range
     * @param  {number}       maxTo        output upper range
     * @param  {boolean}      [round=true]
     * @return {number}                    scaled value
     */
    Util.scaleValueRange = function (value, minFrom, maxFrom, minTo, maxTo, round) {
        if (round === void 0) { round = true; }
        var valueTo = (Math.min(maxFrom, Math.max(minFrom, value)) - minFrom) *
            ((maxTo - minTo) / (maxFrom - minFrom)) +
            minTo;
        if (round) {
            valueTo = Math.round(valueTo);
        }
        return valueTo;
    };
    /**
     * Generates the inverse of a 3x3 matrix
     * Utilized for XYZ matrix generation
     *
     * @param  {number[][]} matrix 3x3 matrix
     * @return {number[][]}        matrix^-1
     */
    Util.matrix3x3inverse = function (matrix) {
        // Calculate matrices of minors and cofactors
        var minors = [];
        var cofactors = [];
        var flip_sign = false;
        matrix.forEach(function (row, rowN) {
            row.forEach(function (val, colN) {
                var ax = colN == 0 ? 1 : 0;
                var ay = rowN == 0 ? 1 : 0;
                var dx = colN == 2 ? 1 : 2;
                var dy = rowN == 2 ? 1 : 2;
                var bx = colN == 2 ? 1 : 2;
                var by = rowN == 0 ? 1 : 0;
                var cx = colN == 0 ? 1 : 0;
                var cy = rowN == 2 ? 1 : 2;
                minors[rowN][colN] =
                    matrix[ax][ay] * matrix[dx][dy] - matrix[bx][by] * matrix[cx][cy];
                if (flip_sign) {
                    cofactors[rowN][colN] = minors[rowN][colN] * -1;
                    flip_sign = false;
                }
                else {
                    cofactors[rowN][colN] = minors[rowN][colN];
                    flip_sign = true;
                }
            });
        });
        // Calculate adjugate matrix
        var adjugate = [];
        adjugate[0][1] = cofactors[1][0];
        adjugate[1][0] = cofactors[0][1];
        adjugate[0][2] = cofactors[2][0];
        adjugate[2][0] = cofactors[0][2];
        adjugate[1][2] = cofactors[2][1];
        adjugate[2][1] = cofactors[1][2];
        // Calculate determinant of matrix
        var determinant = minors[0][0] * cofactors[0][0] +
            minors[0][1] * cofactors[0][1] +
            minors[0][2] * cofactors[0][2];
        // Calculate inverse matrix
        var inverse = [];
        adjugate.forEach(function (row, rowN) {
            row.forEach(function (val, colN) {
                inverse[rowN][colN] = val * (1 / determinant);
            });
        });
        return inverse;
    };
    /**
     * Generate RGB to XYZ matrix
     * ($xr, $yr), ($xg, $yg), and ($xb, $yb) are chromaticity coordinates of an RGB system (such as sRGB)
     * ($xw, $yw, $zw) are a reference white vector (such as D65)
     *
     * To utilize matrix, RGB values MUST be linear and in the nominal range [0, 1]
     *
     * Common Reference White Standards:
     * a   CIE standard illuminant A; 2856 K
     * c   CIE standard illuminant C; 6774 K; deprecated
     * e   Equal-energy radiator
     * d50 CIE standard illuminant D50; 5003 K
     * d55 CIE standard illuminant D55; 5500 K
     * d65 CIE standard illuminant D65; 6504 K
     * icc Profile Connection Space (PCS) illuminant used in ICC profiles
     *
     * @param  {number}  xr red   x chromaticity coordinate
     * @param  {number}  yr red   y chromaticity coordinate
     * @param  {number}  xg green x chromaticity coordinate
     * @param  {number}  yg green y chromaticity coordinate
     * @param  {number}  xb blue  x chromaticity coordinate
     * @param  {number}  yb blue  y chromaticity coordinate
     * @param  {number}  xw x reference white coordinate
     * @param  {number}  yw y reference white coordinate
     * @param  {number}  zw z reference white coordinate
     * @return {number[][]} 3x3 matrix for converting RGB to XYZ
     */
    Util.rgb2xyzMatrix = function (xr, yr, xg, yg, xb, yb, xw, yw, zw) {
        //       [Sr*Xr Sg*Xg Sb*Xb]
        // [M] = [Sr*Yr Sg*Yg Sb*Yb]
        //       [Sr*Zr Sg*Zg Sb*Zb]
        // [Sr]   [Xr Xg Xb]^-1  [Xw]
        // [Sg] = [Yr Yg Yb]   * [Yw]
        // [Sb]   [Zr Zg Zb]     [Zw]
        // Xn = xn / yn
        // Yn = 1
        // Zn = (1 - xn - yn) / yn
        // Calculate XYZrgb matrix
        var xyzrgb = [
            [xr / yr, xg / yg, xb / yb],
            [1, 1, 1],
            [(1 - xr - yr) / yr, (1 - xg - yg) / yg, (1 - xb - yb) / yb],
        ];
        var inverse = this.matrix3x3inverse(xyzrgb);
        // Calculate the Sn matrix (as individual values)
        var sr = inverse[0][0] * xw + inverse[0][1] * yw + inverse[0][2] * zw;
        var sg = inverse[1][0] * xw + inverse[1][1] * yw + inverse[1][2] * zw;
        var sb = inverse[2][0] * xw + inverse[2][1] * yw + inverse[2][2] * zw;
        // Calculate final matrix
        var m = [
            [sr * xyzrgb[0][0], sg * xyzrgb[0][1], sb * xyzrgb[0][2]],
            [sr * xyzrgb[1][0], sg * xyzrgb[1][1], sb * xyzrgb[1][2]],
            [sr * xyzrgb[2][0], sg * xyzrgb[2][1], sb * xyzrgb[2][2]],
        ];
        return m;
    };
    /**
     * Generate XYZ to RGB matrix
     * Generates inverse of matrix from self::rgb2xyz_matrix()
     * ($xr, $yr), ($xg, $yg), and ($xb, $yb) are chromaticity coordinates of an RGB system (such as sRGB)
     * ($xw, $yw, $zw) are a reference white vector (such as D65)
     *
     * To utilize matrix, RGB values MUST be linear and in the nominal range [0, 1]
     *
     * @param  {number}   xr red   x chromaticity coordinate
     * @param  {number}   yr red   y chromaticity coordinate
     * @param  {number}   xg green x chromaticity coordinate
     * @param  {number}   yg green y chromaticity coordinate
     * @param  {number}   xb blue  x chromaticity coordinate
     * @param  {number}   yb blue  y chromaticity coordinate
     * @param  {number}   xw x reference white coordinate
     * @param  {number}   yw y reference white coordinate
     * @param  {number}   zw z reference white coordinate
     * @return {number[][]}  3x3 matrix for converting XYZ to RGB
     */
    Util.xyz2rgbMatrix = function (xr, yr, xg, yg, xb, yb, xw, yx, zw) {
        var rgb2xyzM = this.rgb2xyzMatrix(xr, yr, xg, yg, xb, yb, xw, yx, zw);
        var xyz2rgbM = this.matrix3x3inverse(rgb2xyzM);
        return xyz2rgbM;
    };
    /**
     * Finds reference white or returns input number[][] as reference white
     *
     * @param  {string|number[][]} referenceWhite
     * @return {number[][]}
     */
    Util.validReferenceWhite = function (referenceWhite) {
        var w;
        if (typeof referenceWhite == 'string') {
            referenceWhite = referenceWhite.toLowerCase();
            if (typeof Reference_1.stdIlluminants[referenceWhite] == 'undefined' ||
                typeof Reference_1.stdIlluminants[referenceWhite]['vector'] ==
                    'undefined') {
                throw new Error('Invalid reference white');
            }
            var v = Reference_1.stdIlluminants[referenceWhite]['vector'];
            w = {
                x: v[0],
                y: v[1],
                z: v[2],
            };
        }
        else {
            w = referenceWhite;
        }
        return w;
    };
    /**
     * Validates color space from string and returns object with relevant data,
     * including name, gamma, xyz2rgb conversion matrices...
     *
     * @param   {string} colorSpace
     * @returns {object}
     */
    Util.validColorSpace = function (colorSpace) {
        // make lowercase, include common nomenclature differences, ignore spaces, etc
        colorSpace = colorSpace.toLowerCase().replace(/[^a-z0-9]/, '');
        var conform = {
            adobe: 'adobergb1998',
            adobergb: 'adobergb1998',
            ntsc: 'ntscrgb',
            palsecam: 'palsecamrgb',
            pal: 'palsecamrgb',
            palrgb: 'palsecamrgb',
            secam: 'palsecamrgb',
            secamrgb: 'palsecamrgb',
            prophoto: 'prophotorgb',
            smpte: 'smptecrgb',
            smptec: 'smptecrgb',
            widegamut: 'widegamutrgb',
            ecirgbv2: 'ecirgb',
            ektaspace: 'ektaspaceps5',
        };
        if (typeof conform[colorSpace] == 'string') {
            colorSpace = conform[colorSpace];
        }
        if (typeof Reference_1.colorSpaces[colorSpace] == 'undefined') {
            throw new Error('Unable to parse given color space');
        }
        var space = Reference_1.colorSpaces[colorSpace];
        return space;
    };
    /**
     * Floating point modulo function
     * Original from: https://locutus.io/php/fmod/
     *
     * @param  {number} x
     * @param  {number} y
     * @return {number}
     */
    Util.fmod = function (x, y) {
        return Number((x - Math.floor(x / y) * y).toPrecision(8));
    };
    return Util;
}());
module.exports = Util;


/***/ }),

/***/ 5310:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.colorTypes = void 0;
var Color_1 = __importDefault(__webpack_require__(5835));
exports["default"] = Color_1.default;
exports.colorTypes = __importStar(__webpack_require__(4269));


/***/ })

}]);