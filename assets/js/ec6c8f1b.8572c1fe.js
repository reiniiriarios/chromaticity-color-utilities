"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[2557],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 3323:
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
;// CONCATENATED MODULE: ./docs/color-types/_kelvin.tsx
var KelvinBlock=function KelvinBlock(_ref){var start=_ref.start,end=_ref.end;var k=[];for(var i=parseInt(start);i<=parseInt(end);i+=100){var c=main_default().from('kelvin',i);var h=c.to('hex');k.push({label:i+'°K',hex:h.hex,tip:c.to('rgb').toString(1,false)});}return/*#__PURE__*/react.createElement("div",{className:"colorScheme"},k.map(function(_ref2){var label=_ref2.label,hex=_ref2.hex,tip=_ref2.tip;return/*#__PURE__*/react.createElement(_colorblock/* ColorBlock */.G,{key:label+"-"+hex,hex:hex,label:label,tip:tip});}));};
;// CONCATENATED MODULE: ./docs/color-types/kelvin.mdx
var _excluded=["components"];var frontMatter={title:'Kelvin: Color Temperature',sidebar_position:18};var contentTitle='Kelvin';var metadata={"unversionedId":"color-types/kelvin","id":"color-types/kelvin","title":"Kelvin: Color Temperature","description":"Color Temperature","source":"@site/docs/color-types/kelvin.mdx","sourceDirName":"color-types","slug":"/color-types/kelvin","permalink":"/chromaticity-color-utilities/docs/color-types/kelvin","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Kelvin: Color Temperature","sidebar_position":18},"sidebar":"tutorialSidebar","previous":{"title":"Wavelengths of Light","permalink":"/chromaticity-color-utilities/docs/color-types/nm"},"next":{"title":"Color Schemes","permalink":"/chromaticity-color-utilities/docs/color-schemes/"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'New Color',id:'new-color',level:2},{value:'Get methods',id:'get-methods',level:2},{value:'Example Output',id:'example-output',level:2},{value:'JavaScript',id:'javascript',level:2},{value:'TypeScript',id:'typescript',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"kelvin"},"Kelvin"),(0,esm/* mdx */.kt)("div",{className:"subheader"},"Color Temperature"),(0,esm/* mdx */.kt)("p",null,"This is a one-way approximation. There is no ",(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},".to('kelvin')")," method option.\nThis method uses trapezoid integration to sum the wavelength distribution of energy through a black body tensor.\nWhile an approximation, it is a rather accurate one, and based on real-world black-body radiation measurements.\nTemperatures above 10,000","\xB0","K may be less accurate, but the method allows for temperatures up to 40,000","\xB0","K."),(0,esm/* mdx */.kt)("h2",{"id":"new-color"},"New Color"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"Color.from('kelvin', degrees: number)\nColor.from('temperature', degrees: number)\n")),(0,esm/* mdx */.kt)("h2",{"id":"get-methods"},"Get methods"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},".getK(): number\n.getKelvin(): number // alias\n")),(0,esm/* mdx */.kt)("h2",{"id":"example-output"},"Example Output"),(0,esm/* mdx */.kt)(_colorblock/* ColorBlocks */.S,{mdxType:"ColorBlocks"},(0,esm/* mdx */.kt)(KelvinBlock,{start:"1000",end:"2500",mdxType:"KelvinBlock"}),(0,esm/* mdx */.kt)(KelvinBlock,{start:"2500",end:"4000",mdxType:"KelvinBlock"}),(0,esm/* mdx */.kt)(KelvinBlock,{start:"4000",end:"5500",mdxType:"KelvinBlock"}),(0,esm/* mdx */.kt)(KelvinBlock,{start:"5500",end:"7000",mdxType:"KelvinBlock"}),(0,esm/* mdx */.kt)(KelvinBlock,{start:"7000",end:"8500",mdxType:"KelvinBlock"}),(0,esm/* mdx */.kt)(KelvinBlock,{start:"8500",end:"10000",mdxType:"KelvinBlock"})),(0,esm/* mdx */.kt)("h2",{"id":"javascript"},"JavaScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('kelvin',1000).to('rgb')\n//  rgb { r: 255, g: 13, b: 0, a: 255, bitDepth: 8, max: 255 }\nconst color1 = Color.from('kelvin',2000).to('rgb')\n//  rgb { r: 255, g: 169, b: 7, a: 255, bitDepth: 8, max: 255 }\nconst color1 = Color.from('kelvin',4000).to('rgb')\n//  rgb { r: 240, g: 255, b: 174, a: 255, bitDepth: 8, max: 255 }\nconst color1 = Color.from('kelvin',8000).to('rgb')\n//  rgb { r: 143, g: 232, b: 255, a: 255, bitDepth: 8, max: 255 }\nconst color1 = Color.from('kelvin',10000).to('rgb')\n//  rgb { r: 121, g: 210, b: 255, a: 255, bitDepth: 8, max: 255 }\n")),(0,esm/* mdx */.kt)("h2",{"id":"typescript"},"TypeScript"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.kelvin = Color.from('kelvin',1000)\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);