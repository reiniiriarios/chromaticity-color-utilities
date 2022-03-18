"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[7162],{

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

/***/ 9390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={sidebar_position:1,title:'Getting Started'};var contentTitle='Getting Started';var metadata={"unversionedId":"getting-started","id":"getting-started","title":"Getting Started","description":"Color utilities for Node.js.","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/chromaticity-color-utilities/docs/getting-started","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Getting Started"},"sidebar":"tutorialSidebar","next":{"title":"Color Types and Conversions","permalink":"/chromaticity-color-utilities/docs/color-types/"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Installation',id:'installation',level:2},{value:'Basic Usage',id:'basic-usage',level:2},{value:'Javascript',id:'javascript',level:3},{value:'TypeScript',id:'typescript',level:3},{value:'Immutability',id:'immutability',level:2},{value:'Further Example Usage',id:'further-example-usage',level:2},{value:'Converting a HEX string to 10-bit Rec. 709 RGB at video levels',id:'converting-a-hex-string-to-10-bit-rec-709-rgb-at-video-levels',level:4},{value:'Converting a HEX string/integer to L*a*b*',id:'converting-a-hex-stringinteger-to-lab',level:4},{value:'Converting an HSL color to a Y&#39;PbPr analog video signal',id:'converting-an-hsl-color-to-a-ypbpr-analog-video-signal',level:4},{value:'Blending two colors together',id:'blending-two-colors-together',level:4},{value:'Generating color schemes',id:'generating-color-schemes',level:4},{value:'Converting an RGB color to HSV, darkening it 20%, and generating a tetradic color scheme',id:'converting-an-rgb-color-to-hsv-darkening-it-20-and-generating-a-tetradic-color-scheme',level:4}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"getting-started"},"Getting Started"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Color utilities for Node.js."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The purpose of this library is to:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Simplify conversion between multiple color spaces, including RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L","*","a","*","b","*",", L","*","u","*","v","*",", Y'PbPr, Y'CbCr, and more."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Allow basic color modifications (e.g. lighten, darken, saturate) on any color type."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Allow for easy generation of color schemes and gradients based on a variety of methods.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"npm i chromaticity-color-utilities\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"basic-usage"},"Basic Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"javascript"},"Javascript"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('rgb', [255, 128, 0]).to('hsv')\n// color1 = hsv: { h: 34, s: 100, v: 88, a: 100 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"typescript"},"TypeScript"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilites'\n\nconst color1: colorTypes.hsv = Color.from('rgb', [255, 128, 0]).to('hsv')\n// color1 = hsv: { h: 34, s: 100, v: 88, a: 100 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"immutability"},"Immutability"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This library follows the rule of immutability. That is, each conversion or modification returns a new object rather than modifying the existing object. Properties can be accessed via get?() methods."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const color1: colorTypes.rgb = Color.from('rgb', [255, 128, 0])\nconst color2: colorTypes.hsv = color1.to('hsv')\nconst red: number = color1.getR()\nconst hue: number = color2.getH()\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"further-example-usage"},"Further Example Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"converting-a-hex-string-to-10-bit-rec-709-rgb-at-video-levels"},"Converting a HEX string to 10-bit Rec. 709 RGB at video levels"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const color2 = Color.from('hex', 'ff3201').to('rec709rgb', { bitRate: 10 })\n// rec709rgb { r: 940, g: 298, b: 67, a: 1023, bitDepth: 10, max: 1023 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"converting-a-hex-stringinteger-to-lab"},"Converting a HEX string/integer to L","*","a","*","b","*"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const color6 = Color.from('hex', '#f0f').to('lab')\n// defaulting to sRGB color space with a D65 standard illuminant reference white\n// lab { l: 60, a: 98, b: -61 }\n\nconst color6 = Color.from('hex', 0xff00ff).to('lab', {\n  colorSpace: 'AdobeRGB',\n  referenceWhite: 'D50',\n})\n// lab { l: 68, a: 101, b: -51 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"converting-an-hsl-color-to-a-ypbpr-analog-video-signal"},"Converting an HSL color to a Y'PbPr analog video signal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const color7 = Color.from('hsl', [300, 100, 50]).to('ypbpr', {\n  kb: 0.0722,\n  kr: 0.2126,\n})\n// ypbpr { y: 0.2848, pb: 0.3854278939426601, pr: 0.45415290830581667 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"blending-two-colors-together"},"Blending two colors together"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const blend1 = Color.from('rgb', [255, 0, 0]).modify('blend', {\n  with: Color.from('rgb', [0, 255, 0]),\n})\n// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }\n\nconst blend2 = Color.from('hex', 'ee5432')\n  .modify('blend', {\n    with: Color.from('rgb', [234, 100, 20, 64]),\n    amount: 1 / 3,\n  })\n  .to('hsv')\n// hsv { h: 15, s: 83, v: 93, a: 75 }\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"generating-color-schemes"},"Generating color schemes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const scheme1 = Color.from('rgb', [200, 180, 0]).scheme('splitComplement')\n// [\n//   rgb { r: 200, g: 180, b: 0, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 120, b: 200, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 80, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }\n// ]\n\nconst scheme2 = Color.from('hsl', [180, 80, 48]).scheme('tetradic', {\n  angle: 40,\n})\n// [\n//   hsl { h: 180, s: 80, l: 48, a: 100 },\n//   hsl { h: 220, s: 80, l: 48, a: 100 },\n//   hsl { h: 40, s: 80, l: 48, a: 100 },\n//   hsl { h: 0, s: 80, l: 48, a: 100 }\n// ]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"converting-an-rgb-color-to-hsv-darkening-it-20-and-generating-a-tetradic-color-scheme"},"Converting an RGB color to HSV, darkening it 20%, and generating a tetradic color scheme"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const scheme1 = Color.from('rgb', [200, 100, 150])\n  .to('hsl')\n  .modify('darken', { amount: 0.2 })\n  .scheme('tetradic')\n// [\n//   hsl { h: 330, s: 48, l: 47, a: 100 },\n//   hsl { h: 15, s: 48, l: 47, a: 100 },\n//   hsl { h: 195, s: 48, l: 47, a: 100 },\n//   hsl { h: 150, s: 48, l: 47, a: 100 }\n// ]\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);