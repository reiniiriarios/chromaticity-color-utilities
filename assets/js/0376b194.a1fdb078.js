"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[6312],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 6628:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/chromaticity-color-utilities/dist/main.js
var main = __webpack_require__(5310);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./docs/_colorblock.tsx
var _colorblock = __webpack_require__(5932);
;// CONCATENATED MODULE: ./docs/color-schemes/_tints.tsx
var TintBlock=function TintBlock(_ref){var method=_ref.method,hexStart=_ref.hexStart,_ref$distance=_ref.distance,distance=_ref$distance===void 0?1:_ref$distance;var realMethod=method.replace(/[0-9]/,'');var grad=main_default().from('hex',hexStart).scheme('tint',{colors:10,method:method,distance:distance});return/*#__PURE__*/react.createElement("div",{className:"colorScheme"},/*#__PURE__*/react.createElement("h2",null,"tint"),/*#__PURE__*/react.createElement("h3",null,method),grad.map(function(color){return/*#__PURE__*/react.createElement(_colorblock/* ColorBlock */.G,{key:"tint-"+method+"-"+hexStart+"-"+color.getHex(),hex:color.getHex(),label:color.getHex(),tip:color.to(realMethod).toString(),highlight:color.getHex()==hexStart});}));};
;// CONCATENATED MODULE: ./docs/color-schemes/tint-examples.mdx
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Tint Examples',sidebar_position:4.5};var contentTitle='Tint Examples';var metadata={"unversionedId":"color-schemes/tint-examples","id":"color-schemes/tint-examples","title":"Tint Examples","description":"","source":"@site/docs/color-schemes/tint-examples.mdx","sourceDirName":"color-schemes","slug":"/color-schemes/tint-examples","permalink":"/chromaticity-color-utilities/docs/color-schemes/tint-examples","draft":false,"tags":[],"version":"current","sidebarPosition":4.5,"frontMatter":{"title":"Tint Examples","sidebar_position":4.5},"sidebar":"tutorialSidebar","previous":{"title":"Tint Scales","permalink":"/chromaticity-color-utilities/docs/color-schemes/tint"},"next":{"title":"Shade Scales","permalink":"/chromaticity-color-utilities/docs/color-schemes/shade"}};var assets={};var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"tint-examples"},"Tint Examples"),(0,esm/* mdx */.kt)("p",null,"These examples are equivalent to building an array of ",(0,esm/* mdx */.kt)("a",{parentName:"p","href":"/docs/modifying-colors/lighten-examples"},"lightened colors"),"."),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: Color.hex[] = Color.from('hex', '881155')\n  .scheme('tint', {\n    method: /* methods listed below */,\n    colors: 10\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"hsl",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsv",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsi",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsp",hexStart:"881155",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"rgb",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"rgb2",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"cmyk",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"lab",hexStart:"881155",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"luv",hexStart:"881155",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: Color.hex[] = Color.from('hex', '22aaee')\n  .scheme('tint', {\n    method: /* methods listed below */,\n    colors: 10\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"hsl",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsv",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsi",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsp",hexStart:"22aaee",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"rgb",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"rgb2",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"cmyk",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"lab",hexStart:"22aaee",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"luv",hexStart:"22aaee",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: Color.hex[] = Color.from('hex', '881155')\n  .scheme('tint', {\n    method: /* methods listed below */,\n    colors: 10,\n    distance: 0.5\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"hsl",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsv",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsi",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsp",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"rgb",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"rgb2",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"cmyk",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"lab",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"luv",hexStart:"881155",distance:"0.5",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: Color.hex[] = Color.from('hex', '22aaee')\n  .scheme('tint', {\n    method: /* methods listed below */,\n    colors: 10,\n    distance: 0.5\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"hsl",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsv",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsi",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"hsp",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TintBlock,{method:"rgb",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"rgb2",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"cmyk",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"lab",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"}),(0,esm/* mdx */.kt)(TintBlock,{method:"luv",hexStart:"22aaee",distance:"0.5",mdxType:"TintBlock"})));};MDXContent.isMDXComponent=true;

/***/ })

}]);