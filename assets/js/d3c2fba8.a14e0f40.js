"use strict";(self.webpackChunkchromaticity_color_utilities_documentation=self.webpackChunkchromaticity_color_utilities_documentation||[]).push([[9223],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),d=o,f=b["".concat(a,".").concat(d)]||b[d]||s[d]||c;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=b;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6569:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),l=["components"],i={title:"YCbCr",sidebar_position:16},a="YCbCr",u={unversionedId:"color-types/ycbcr",id:"color-types/ycbcr",title:"YCbCr",description:"Digital video component signals",source:"@site/docs/color-types/ycbcr.md",sourceDirName:"color-types",slug:"/color-types/ycbcr",permalink:"/chromaticity-color-utilities/docs/color-types/ycbcr",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"YCbCr",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"YPbPr",permalink:"/chromaticity-color-utilities/docs/color-types/ypbpr"},next:{title:"Wavelengths of Light",permalink:"/chromaticity-color-utilities/docs/color-types/nm"}},p={},s=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],b={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"ycbcr"},"YCbCr"),(0,c.kt)("div",{class:"subheader"},"Digital video component signals"),(0,c.kt)("p",null,"Also written Y'CbCr, Y Pb/Cb Pr/Cr, YC",(0,c.kt)("sub",null,"B"),"C",(0,c.kt)("sub",null,"R"),", or Y'C",(0,c.kt)("sub",null,"B"),"C",(0,c.kt)("sub",null,"R"),"."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Y' = luma and sync (brightness/luminance and syncrhonization)"),(0,c.kt)("li",{parentName:"ul"},"Cb = difference between blue and luma (B - Y)"),(0,c.kt)("li",{parentName:"ul"},"Cr = difference between red and luma (R - Y)")),(0,c.kt)("p",null,"YCbCr conversions require Kb and Kr constants with the exception of converting to YPbPr. These values are not yet included in this package."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Kb = constant defined from target color space, such that Kb + Kr + Kg = 1"),(0,c.kt)("li",{parentName:"ul"},"Kr = constant defined from target color space, such that Kb + Kr + Kg = 1")),(0,c.kt)("p",null,"Upper and lower bounds vary with color space. It's recommended to always supply these values."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"Color.from('ycbcr', [y, cb, cr], {\n  yLower: number, // optional, default = 16,  lower bounds of Y'\n  yUpper: number, // optional, default = 235, upper bounds of Y'\n  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr\n  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr\n)\n\n.to('ycbcr',{\n  kb: number, // REQUIRED\n  kr: number  // REQUIRED\n})\n\n// YPbPr conversion\n.to('ypbpr',{\n  yLower: number, // optional, default = 16,  lower bounds of Y'\n  yUpper: number, // optional, default = 235, upper bounds of Y'\n  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr\n  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr\n})\n")),(0,c.kt)("h2",{id:"javascript"},"JavaScript"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('ycbcr', [73, 226, 243])\nconst color3 = color2.to('ycbcr',{\n  kb: 0.0722, // Rec709\n  kr: 0.2126  // Rec709\n})\nconst color4 = color1.to('ypbpr')\nconst color5 = color1.to('ypbpr',{\n  yLower: 0,\n  yUpper: 255,\n  cLower: 0,\n  cUpper: 255\n})\n")),(0,c.kt)("h2",{id:"typescript"},"TypeScript"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.ycbcr = Color.from('ycbcr', [73, 226, 243])\n")))}d.isMDXComponent=!0}}]);