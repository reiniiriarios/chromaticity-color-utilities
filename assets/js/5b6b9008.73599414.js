"use strict";(self.webpackChunkchromaticity_color_utilities_documentation=self.webpackChunkchromaticity_color_utilities_documentation||[]).push([[8647],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3839:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Gradient Scales",sidebar_position:7},l="Gradient Scales",s={unversionedId:"color-schemes/gradients",id:"color-schemes/gradients",title:"Gradient Scales",description:"Generate an array of colors from color1 to color2. Methods available are rgb, hsv, hsl, hsi, hsp, and cmyk.",source:"@site/docs/color-schemes/gradients.md",sourceDirName:"color-schemes",slug:"/color-schemes/gradients",permalink:"/chromaticity-color-utilities/docs/color-schemes/gradients",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Gradient Scales",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tint & Shade Examples",permalink:"/chromaticity-color-utilities/docs/color-schemes/tint-shade-examples"},next:{title:"Gradient Examples",permalink:"/chromaticity-color-utilities/docs/color-schemes/gradient-examples"}},p={},m=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradient-scales"},"Gradient Scales"),(0,a.kt)("p",null,"Generate an array of colors from color1 to color2. Methods available are ",(0,a.kt)("inlineCode",{parentName:"p"},"rgb"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hsv"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hsl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hsi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hsp"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"cmyk"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".scheme('gradient',{\n  color2: colorType,  // REQUIRED, second color, of any type, to blend with\n  colors: number,     // REQUIRED, number of colors to be returned, must be > 2\n  method: string,     // optional, defaults to 'rgb'\n  round: boolean      // optional, defaults to true\n})\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst gradient1 = Color.from('rgb', [255, 0, 255]).scheme('gradient', {\n  with: Color.from('hex', 0x00ff00),\n  colors: 5,\n})\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 191, g: 64, b: 191, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 128, g: 128, b: 128, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 64, g: 191, b: 64, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }\n// ]\n\nconst gradient1 = Color.from('rgb', [255, 0, 255]).scheme('gradient', {\n  with: Color.from('hex', '00ff00'),\n  colors: 5,\n  method: 'hsv',\n})\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 64, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 191, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }\n// ]\n")),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst gradient1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255]).scheme(\n  'gradient',\n  {\n    with: Color.from('hex', 0x00ff00),\n    colors: 5,\n  }\n)\n")))}d.isMDXComponent=!0}}]);