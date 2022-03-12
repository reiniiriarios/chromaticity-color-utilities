"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1666],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9183:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={layout:"page",title:"Desaturate",parent:"Modifying Colors",nav_order:5},l="Desaturate",s={unversionedId:"modifying-colors/desaturate",id:"modifying-colors/desaturate",title:"Desaturate",description:"Methods available are: hsv, hsl. The input color type does not matter.",source:"@site/docs/modifying-colors/desaturate.md",sourceDirName:"modifying-colors",slug:"/modifying-colors/desaturate",permalink:"/chromaticity-color-utilities/docs/modifying-colors/desaturate",editUrl:"https://github.com/reiniiriarios/chromaticity-color-utilities/docs/docs/modifying-colors/desaturate.md",tags:[],version:"current",frontMatter:{layout:"page",title:"Desaturate",parent:"Modifying Colors",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"Darken",permalink:"/chromaticity-color-utilities/docs/modifying-colors/darken"},next:{title:"Lighten",permalink:"/chromaticity-color-utilities/docs/modifying-colors/lighten"}},u={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"desaturate"},"Desaturate"),(0,a.kt)("p",null,"Methods available are: ",(0,a.kt)("inlineCode",{parentName:"p"},"hsv"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hsl"),". The input color type does not matter."),(0,a.kt)("p",null,"These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".modify('saturate', {\n  amount: number, // optional, 0 - 1, defaults to 0.5\n  method: string, // optional, defaults to 'hsl'\n  round: boolean, // optional, defaults to true\n})\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('rgb', [255, 0, 255, 200]).modify('desaturate', 'hsl')\n// rgb { r: 191, g: 64, b: 191, a: 200, bitDepth: 8, max: 255 }\nconst color2 = Color.from('rgb', [255, 0, 255, 200]).modify('desaturate', 'hsl')\n// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }\n")),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst color1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255, 200]).modify(\n  'desaturate',\n  'hsl'\n)\n")))}m.isMDXComponent=!0}}]);