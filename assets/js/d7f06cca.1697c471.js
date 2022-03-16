"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[6770],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 8707:
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
;// CONCATENATED MODULE: ./docs/color-schemes/_tetradic.tsx
var TetBlock=function TetBlock(_ref){var angle=_ref.angle,hexStart=_ref.hexStart,name=_ref.name;var actualName=name.replace(/[^a-z]/,'');var grad=main_default().from('hex',hexStart).scheme(actualName,{angle:parseInt(angle)});return/*#__PURE__*/react.createElement("div",{className:"colorScheme"},/*#__PURE__*/react.createElement("h2",null,name),/*#__PURE__*/react.createElement("h3",null,angle,"\xB0"),grad.map(function(color){return/*#__PURE__*/react.createElement(_colorblock/* ColorBlock */.G,{key:actualName+"-"+angle+"-"+hexStart+"-"+color.getHex(),hex:color.getHex(),label:color.getHex(),tip:color.to('hsv').toString(1,false),highlight:color.getHex()==hexStart});}));};
;// CONCATENATED MODULE: ./docs/color-schemes/tetradic.mdx
var _excluded=["components"];var frontMatter={title:'Tetradic Schemes',sidebar_position:3};var contentTitle='Tetradic Schemes';var metadata={"unversionedId":"color-schemes/tetradic","id":"color-schemes/tetradic","title":"Tetradic Schemes","description":"+ Square Schemes","source":"@site/docs/color-schemes/tetradic.mdx","sourceDirName":"color-schemes","slug":"/color-schemes/tetradic","permalink":"/chromaticity-color-utilities/docs/color-schemes/tetradic","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Tetradic Schemes","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Analogous Schemes","permalink":"/chromaticity-color-utilities/docs/color-schemes/analogous"},"next":{"title":"Tint Scales","permalink":"/chromaticity-color-utilities/docs/color-schemes/tint"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Examples',id:'examples',level:2},{value:'JavaScript',id:'javascript',level:2},{value:'TypeScript',id:'typescript',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"tetradic-schemes"},"Tetradic Schemes"),(0,esm/* mdx */.kt)("div",{className:"subheader"},"+ Square Schemes"),(0,esm/* mdx */.kt)("p",null,"The ",(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},"square")," method is synonymous with ",(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},"tetradic")," with a 90\xB0 angle."),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},".scheme('tetradic', {\n  angle: number, // optional, default = 45\n  round: boolean // optional, defaults to true\n})\n.scheme('square', {\n  round: boolean // optional, defaults to true\n}) // angle = 90\n")),(0,esm/* mdx */.kt)("h2",{"id":"examples"},"Examples"),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(TetBlock,{hexStart:"ff0044",angle:"45",name:"tetradic",mdxType:"TetBlock"}),(0,esm/* mdx */.kt)(TetBlock,{hexStart:"ff0044",angle:"90",name:"tetradic",mdxType:"TetBlock"}),(0,esm/* mdx */.kt)(TetBlock,{hexStart:"ff0044",angle:"160",name:"tetradic",mdxType:"TetBlock"}),(0,esm/* mdx */.kt)(TetBlock,{hexStart:"ff0044",angle:"90",name:"square",mdxType:"TetBlock"})),(0,esm/* mdx */.kt)("h2",{"id":"javascript"},"JavaScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst scheme1 = Color.from('rgb', [255, 0, 255]).scheme('tetradic', {\n  angle: 42,\n})\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 255, g: 0, b: 76, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 179, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }\n// ]\nconst scheme2 = Color.from('rgb', [255, 0, 255]).scheme('square')\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 255, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }\n// ]\n")),(0,esm/* mdx */.kt)("h2",{"id":"typescript"},"TypeScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst scheme1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255]).scheme(\n  'tetradic',\n  { angle: 42 }\n)\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);