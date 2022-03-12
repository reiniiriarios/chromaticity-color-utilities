"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4846],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=o,g=m["".concat(l,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5599:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={title:"Analogous Schemes",sidebar_position:2},l="Analogous Schemes",s={unversionedId:"color-schemes/analogous",id:"color-schemes/analogous",title:"Analogous Schemes",description:"+ Triadic & Split Complement Schemes",source:"@site/docs/color-schemes/analogous.md",sourceDirName:"color-schemes",slug:"/color-schemes/analogous",permalink:"/chromaticity-color-utilities/docs/color-schemes/analogous",editUrl:"https://github.com/reiniiriarios/chromaticity-color-utilities/docs/docs/color-schemes/analogous.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Analogous Schemes",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Complementary Schemes",permalink:"/chromaticity-color-utilities/docs/color-schemes/complementary"},next:{title:"Tetradic Schemes",permalink:"/chromaticity-color-utilities/docs/color-schemes/tetradic"}},u={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],m={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analogous-schemes"},"Analogous Schemes"),(0,a.kt)("div",{class:"subheader"},"+ Triadic & Split Complement Schemes"),(0,a.kt)("p",null,"These three methods are synonyms with different default angles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".scheme('analogous', {\n  angle: number, // optional, default = 30\n  round: boolean // optional, defaults to true\n})\n.scheme('triadic', {\n  angle: number, // optional, default = 120\n  round: boolean // optional, defaults to true\n})\n.scheme('splitcomplement', {\n  angle: number, // optional, default = 150\n  round: boolean // optional, defaults to true\n})\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst scheme1 = Color.from('rgb', [255, 0, 255]).scheme('analogous')\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 128, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 128, a: 255, bitDepth: 8, max: 255 }\n// ]\nconst scheme2 = Color.from('rgb', [255, 0, 255]).scheme('triadic')\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }\n// ]\nconst scheme3 = Color.from('rgb', [255, 0, 255]).scheme('splitcomplement', {\n  angle: 160,\n})\n// [\n//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 85, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },\n//   rgb { r: 0, g: 255, b: 85, a: 255, bitDepth: 8, max: 255 }\n// ]\n")),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst scheme1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255]).scheme(\n  'analogous'\n)\n")))}b.isMDXComponent=!0}}]);