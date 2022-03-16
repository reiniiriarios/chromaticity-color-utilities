"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[6273],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 7346:
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
;// CONCATENATED MODULE: ./docs/color-types/_nm.tsx
var WavelengthBlock=function WavelengthBlock(_ref){var start=_ref.start,end=_ref.end;var k=[];for(var i=parseInt(start);i<=parseInt(end);i+=5){var c=main_default().from('nm',i);var h=c.to('hex');k.push({label:i+'nm',hex:h.getHex(),tip:c.to('rgb').toString(1,false)});}return/*#__PURE__*/react.createElement("div",{className:"colorScheme"},k.map(function(_ref2){var label=_ref2.label,hex=_ref2.hex,tip=_ref2.tip;return/*#__PURE__*/react.createElement(_colorblock/* ColorBlock */.G,{key:label+"-"+hex,hex:hex,label:label,tip:tip});}));};
;// CONCATENATED MODULE: ./docs/color-types/nm.mdx
var _excluded=["components"];var frontMatter={title:'Wavelengths of Light',sidebar_position:17};var contentTitle='Wavelengths of Light';var metadata={"unversionedId":"color-types/nm","id":"color-types/nm","title":"Wavelengths of Light","description":"Nanometers","source":"@site/docs/color-types/nm.mdx","sourceDirName":"color-types","slug":"/color-types/nm","permalink":"/chromaticity-color-utilities/docs/color-types/nm","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"Wavelengths of Light","sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"YCbCr","permalink":"/chromaticity-color-utilities/docs/color-types/ycbcr"},"next":{"title":"Kelvin: Color Temperature","permalink":"/chromaticity-color-utilities/docs/color-types/kelvin"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'New Color',id:'new-color',level:2},{value:'Get methods',id:'get-methods',level:2},{value:'Example Output',id:'example-output',level:2},{value:'JavaScript',id:'javascript',level:2},{value:'TypeScript',id:'typescript',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"wavelengths-of-light"},"Wavelengths of Light"),(0,esm/* mdx */.kt)("div",{className:"subheader"},"Nanometers"),(0,esm/* mdx */.kt)("p",null,"This is a one-way approximation and is hugely perceptual. There is no ",(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},".to('nm')")," method option. Wavelength \u2208 ","[380, 800]"," nm."),(0,esm/* mdx */.kt)("h2",{"id":"new-color"},"New Color"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"Color.from('nm', wavelength: number)\nColor.from('wavelength', wavelength: number)\nColor.from('nanometers', wavelength: number)\n")),(0,esm/* mdx */.kt)("h2",{"id":"get-methods"},"Get methods"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},".getWavelength(): number\n.getNm(): number // alias\n")),(0,esm/* mdx */.kt)("h2",{"id":"example-output"},"Example Output"),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(WavelengthBlock,{start:"380",end:"450",mdxType:"WavelengthBlock"}),(0,esm/* mdx */.kt)(WavelengthBlock,{start:"450",end:"520",mdxType:"WavelengthBlock"}),(0,esm/* mdx */.kt)(WavelengthBlock,{start:"520",end:"590",mdxType:"WavelengthBlock"}),(0,esm/* mdx */.kt)(WavelengthBlock,{start:"590",end:"660",mdxType:"WavelengthBlock"}),(0,esm/* mdx */.kt)(WavelengthBlock,{start:"660",end:"730",mdxType:"WavelengthBlock"}),(0,esm/* mdx */.kt)(WavelengthBlock,{start:"730",end:"800",mdxType:"WavelengthBlock"})),(0,esm/* mdx */.kt)("h2",{"id":"javascript"},"JavaScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('nm', 600).to('rgb')\n// rgb { r: 255, g: 190, b: 0, a: 255, bitDepth: 8, max: 255 }\n")),(0,esm/* mdx */.kt)("h2",{"id":"typescript"},"TypeScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.nm = Color.from('nm', 600)\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);