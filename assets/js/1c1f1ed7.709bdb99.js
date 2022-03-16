"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[4926],{

/***/ 5932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ ColorBlock; },
/* harmony export */   "S": function() { return /* binding */ ColorBlocks; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var ColorBlocks=function ColorBlocks(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ColorBlocks"},children);};var ColorBlock=function ColorBlock(_ref2){var hex=_ref2.hex,tip=_ref2.tip,label=_ref2.label,_ref2$highlight=_ref2.highlight,highlight=_ref2$highlight===void 0?false:_ref2$highlight;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"color",style:{backgroundColor:'#'+hex}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"tip"},tip)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:highlight?'highlight':''},label));};

/***/ }),

/***/ 9549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bt": function() { return /* binding */ DarkenBlock; },
/* harmony export */   "Pw": function() { return /* binding */ SatBlock; },
/* harmony export */   "Ww": function() { return /* binding */ BlendBlock; },
/* harmony export */   "a4": function() { return /* binding */ LightenBlock; },
/* harmony export */   "mC": function() { return /* binding */ DesatBlock; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5310);
/* harmony import */ var chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colorblock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5932);
var gradLength=10;var BlendBlock=function BlendBlock(_ref){var method=_ref.method,hexStart=_ref.hexStart,hexEnd=_ref.hexEnd;var realMethod=method.replace(/[0-9]/,'');var grad=[];var start=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexStart);var end=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexEnd);grad.push(start);// gradLength - 1 because we don't need to show a blend of 100%
for(var i=0;i<gradLength-1;i++){var color=start.modify('blend',{with:chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexEnd),method:method,amount:(i+1)/gradLength// first is 1 not 0
});grad.push(color);}grad.push(end);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorScheme"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"blend"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,method),grad.map(function(color,i){var highlight,label;if(!i||i==gradLength){highlight=true;label=color.getHex();}else{highlight=false;label=(i/gradLength).toString();// first is first color, not first blend
}var key="blend-"+method+"-"+hexStart+"-"+hexEnd+"-"+label;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_colorblock__WEBPACK_IMPORTED_MODULE_2__/* .ColorBlock */ .G,{key:key,hex:color.getHex(),label:label,tip:color.to(realMethod).toString(1,false),highlight:highlight});}));};var DarkenBlock=function DarkenBlock(_ref2){var method=_ref2.method,hexStart=_ref2.hexStart;var realMethod=method.replace(/[0-9]/,'');var grad=[];var start=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexStart);grad.push(start);// gradLength - 1 because we don't need to show a blend of 100%
for(var i=0;i<gradLength-1;i++){var color=start.modify('darken',{method:method,amount:(i+1)/gradLength// first is 1 not 0
});grad.push(color);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorScheme"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"darken"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,method),grad.map(function(color,i){var highlight,label;if(!i){highlight=true;label=color.getHex();}else{highlight=false;label=(i/gradLength).toString();// first is first color, not first blend
}var key="darken-"+method+"-"+hexStart+"-"+label;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_colorblock__WEBPACK_IMPORTED_MODULE_2__/* .ColorBlock */ .G,{key:key,hex:color.getHex(),label:label,tip:color.to(realMethod).toString(1,false),highlight:highlight});}));};var LightenBlock=function LightenBlock(_ref3){var method=_ref3.method,hexStart=_ref3.hexStart;var realMethod=method.replace(/[0-9]/,'');var grad=[];var start=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexStart);grad.push(start);// gradLength - 1 because we don't need to show a blend of 100%
for(var i=0;i<gradLength-1;i++){var color=start.modify('lighten',{method:method,amount:(i+1)/gradLength// first is 1 not 0
});grad.push(color);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorScheme"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"lighten"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,method),grad.map(function(color,i){var highlight,label;if(!i){highlight=true;label=color.getHex();}else{highlight=false;label=(i/gradLength).toString();// first is first color, not first blend
}var key="lighten-"+method+"-"+hexStart+"-"+label;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_colorblock__WEBPACK_IMPORTED_MODULE_2__/* .ColorBlock */ .G,{key:key,hex:color.getHex(),label:label,tip:color.to(realMethod).toString(1,false),highlight:highlight});}));};var SatBlock=function SatBlock(_ref4){var method=_ref4.method,hexStart=_ref4.hexStart;var realMethod=method.replace(/[0-9]/,'');var grad=[];var start=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexStart);grad.push(start);// gradLength - 1 because we don't need to show a blend of 100%
for(var i=0;i<gradLength;i++){var color=start.modify('saturate',{method:method,amount:(i+1)/gradLength// first is 1 not 0
});grad.push(color);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorScheme"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"saturate"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,method),grad.map(function(color,i){var highlight,label;if(!i){highlight=true;label=color.getHex();}else{highlight=false;label=(i/gradLength).toString();// first is first color, not first blend
}var key="saturate-"+method+"-"+hexStart+"-"+label;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_colorblock__WEBPACK_IMPORTED_MODULE_2__/* .ColorBlock */ .G,{key:key,hex:color.getHex(),label:label,tip:color.to(realMethod).toString(1,false),highlight:highlight});}));};var DesatBlock=function DesatBlock(_ref5){var method=_ref5.method,hexStart=_ref5.hexStart;var realMethod=method.replace(/[0-9]/,'');var grad=[];var start=chromaticity_color_utilities__WEBPACK_IMPORTED_MODULE_1___default().from('hex',hexStart);grad.push(start);// gradLength - 1 because we don't need to show a blend of 100%
for(var i=0;i<gradLength;i++){var color=start.modify('desaturate',{method:method,amount:(i+1)/gradLength// first is 1 not 0
});grad.push(color);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorScheme"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"desaturate"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,method),grad.map(function(color,i){var highlight,label;if(!i){highlight=true;label=color.getHex();}else{highlight=false;label=(i/gradLength).toString();// first is first color, not first blend
}var key="desaturate-"+method+"-"+hexStart+"-"+label;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_colorblock__WEBPACK_IMPORTED_MODULE_2__/* .ColorBlock */ .G,{key:key,hex:color.getHex(),label:label,tip:color.to(realMethod).toString(1,false),highlight:highlight});}));};

/***/ }),

/***/ 6011:
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
/* harmony import */ var C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7462);
/* harmony import */ var C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _colorblocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9549);
/* harmony import */ var _colorblock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5932);
var _excluded=["components"];var frontMatter={title:'Saturate Examples',sidebar_position:4.5};var contentTitle='Saturate Examples';var metadata={"unversionedId":"modifying-colors/saturate-examples","id":"modifying-colors/saturate-examples","title":"Saturate Examples","description":"","source":"@site/docs/modifying-colors/saturate-examples.mdx","sourceDirName":"modifying-colors","slug":"/modifying-colors/saturate-examples","permalink":"/chromaticity-color-utilities/docs/modifying-colors/saturate-examples","tags":[],"version":"current","sidebarPosition":4.5,"frontMatter":{"title":"Saturate Examples","sidebar_position":4.5},"sidebar":"tutorialSidebar","previous":{"title":"Saturate","permalink":"/chromaticity-color-utilities/docs/modifying-colors/saturate"},"next":{"title":"Desaturate","permalink":"/chromaticity-color-utilities/docs/modifying-colors/desaturate"}};var assets={};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,C_code_chromaticity_color_utilities_docusaurus_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"saturate-examples"},"Saturate Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"let newColor: colorTypes.hex[] = Color.from('hex', 'ccaabb')\n  .modify('saturate', {\n    method: /* methods listed below */,\n    amount: /* amounts listed below */\n  })\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblock__WEBPACK_IMPORTED_MODULE_3__/* .ColorBlocks */ .S,{mdxType:"ColorBlocks"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsl",hexStart:"ccaabb",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsv",hexStart:"ccaabb",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsi",hexStart:"ccaabb",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsp",hexStart:"ccaabb",mdxType:"SatBlock"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"let newColor: colorTypes.hex[] = Color.from('hex', 'aabbcc')\n  .modify('saturate', {\n    method: /* methods listed below */,\n    amount: /* amounts listed below */\n  })\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblock__WEBPACK_IMPORTED_MODULE_3__/* .ColorBlocks */ .S,{mdxType:"ColorBlocks"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsl",hexStart:"aabbcc",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsv",hexStart:"aabbcc",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsi",hexStart:"aabbcc",mdxType:"SatBlock"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_colorblocks__WEBPACK_IMPORTED_MODULE_2__/* .SatBlock */ .Pw,{method:"hsp",hexStart:"aabbcc",mdxType:"SatBlock"})));};MDXContent.isMDXComponent=true;

/***/ })

}]);