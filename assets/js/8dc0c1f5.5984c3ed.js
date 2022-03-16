"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[8988],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 5869:
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
;// CONCATENATED MODULE: ./docs/color-schemes/_gradients.tsx
var GradBlock=function GradBlock(_ref){var method=_ref.method,hexStart=_ref.hexStart,hexEnd=_ref.hexEnd;var grad=main_default().from('hex',hexStart).scheme('gradient',{with:main_default().from('hex',hexEnd),colors:10,method:method});return/*#__PURE__*/react.createElement("div",{className:"colorScheme"},/*#__PURE__*/react.createElement("h2",null,"gradient"),/*#__PURE__*/react.createElement("h3",null,method),grad.map(function(color){return/*#__PURE__*/react.createElement(_colorblock/* ColorBlock */.G,{key:"gradient-"+method+"-"+hexStart+"-"+hexEnd+"-"+color.getHex(),hex:color.getHex(),label:color.getHex(),tip:color.to(method).toString(),highlight:color.getHex()==hexStart||color.getHex()==hexEnd});}));};
;// CONCATENATED MODULE: ./docs/color-schemes/gradient-examples.mdx
var _excluded=["components"];var frontMatter={title:'Gradient Examples',sidebar_position:8};var contentTitle='Gradient Examples';var metadata={"unversionedId":"color-schemes/gradient-examples","id":"color-schemes/gradient-examples","title":"Gradient Examples","description":"These examples are equivalent to building an array of blended colors.","source":"@site/docs/color-schemes/gradient-examples.mdx","sourceDirName":"color-schemes","slug":"/color-schemes/gradient-examples","permalink":"/chromaticity-color-utilities/docs/color-schemes/gradient-examples","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Gradient Examples","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Gradient Scales","permalink":"/chromaticity-color-utilities/docs/color-schemes/gradients"},"next":{"title":"Modifying Colors","permalink":"/chromaticity-color-utilities/docs/modifying-colors/"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"gradient-examples"},"Gradient Examples"),(0,esm/* mdx */.kt)("p",null,"These examples are equivalent to building an array of ",(0,esm/* mdx */.kt)("a",{parentName:"p","href":"/docs/modifying-colors/blending-examples"},"blended colors"),"."),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: colorTypes.hex[] = Color.from('hex', 'cc1111')\n  .scheme('gradient', {\n    with: Color.from('11aaaa'),\n    method: /* methods listed below */,\n    colors: 10\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"hsl",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsv",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsi",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsp",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"rgb",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"cmyk",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"lab",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"luv",hexStart:"cc1111",hexEnd:"11aaaa",mdxType:"GradBlock"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: colorTypes.hex[] = Color.from('hex', 'aa22bb')\n  .scheme('gradient', {\n    with: Color.from('55aa00'),\n    method: /* methods listed below */,\n    colors: 10\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"hsl",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsv",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsi",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsp",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"rgb",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"cmyk",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"lab",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"luv",hexStart:"aa22bb",hexEnd:"55aa00",mdxType:"GradBlock"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"let scheme: colorTypes.hex[] = Color.from('hex', '445566')\n  .scheme('gradient', {\n    with: Color.from('ff2255'),\n    method: /* methods listed below */,\n    colors: 10\n  })\n")),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"hsl",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsv",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsi",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"hsp",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"})),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(GradBlock,{method:"rgb",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"cmyk",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"lab",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"}),(0,esm/* mdx */.kt)(GradBlock,{method:"luv",hexStart:"445566",hexEnd:"ff2255",mdxType:"GradBlock"})));};MDXContent.isMDXComponent=true;

/***/ })

}]);