"use strict";(self.webpackChunkchromaticity_color_utilities_documentation=self.webpackChunkchromaticity_color_utilities_documentation||[]).push([[2462],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=r,m=f["".concat(a,".").concat(p)]||f[p]||u[p]||i;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],c={layout:"page",title:"Blending",parent:"Modifying Colors",nav_order:1},a="Blending",s={unversionedId:"modifying-colors/blending",id:"modifying-colors/blending",title:"Blending",description:"When blending two colors, the amount \u2208 [0,1] refers to the percentage the second color is blended with the first. In other words, 0 means 0% of the second color and 100% of the first while 1 means 100% of the second color and 0% of the first.",source:"@site/docs/modifying-colors/blending.md",sourceDirName:"modifying-colors",slug:"/modifying-colors/blending",permalink:"/chromaticity-color-utilities/docs/modifying-colors/blending",editUrl:"https://github.com/reiniiriarios/chromaticity-color-utilities/docs/docs/modifying-colors/blending.md",tags:[],version:"current",frontMatter:{layout:"page",title:"Blending",parent:"Modifying Colors",nav_order:1},sidebar:"tutorialSidebar",previous:{title:"Modifying Colors",permalink:"/chromaticity-color-utilities/docs/modifying-colors/"},next:{title:"Darken",permalink:"/chromaticity-color-utilities/docs/modifying-colors/darken"}},d={},u=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],f={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blending"},"Blending"),(0,i.kt)("p",null,"When blending two colors, the amount \u2208 ","[0,1]"," refers to the percentage the second color is blended with the first. In other words, 0 means 0% of the second color and 100% of the first while 1 means 100% of the second color and 0% of the first."),(0,i.kt)("p",null,"Blending methods include: ",(0,i.kt)("inlineCode",{parentName:"p"},"rgb"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hsv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},".modify('blend', {\n  with: color2,   // REQUIRED, can be any color of any type\n  amount: number, // optional, 0 - 1, defaults to 0.5\n  method: string, // optional, defaults to 'rgb'\n  round: boolean, // optional, defaults to true\n})\n")),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('rgb', [255, 0, 0]).modify('blend', {\n  with: Color.from('hex', '00ff00'),\n})\n// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }\n\nconst color2 = Color.from('rgb', [255, 0, 0]).modify('blend', {\n  with: Color.from('hex', '00ff00'),\n  method: 'hsv',\n})\n// rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }\n\nconst color3 = Color.from('hex', 'ee5432')\n  .modify('blend', {\n    with: Color.from('rgb', [234, 100, 20, 64]),\n    amount: 1 / 3,\n  })\n  .to('hsv')\n// hsv { h: 15, s: 83, v: 93, a: 75 }\n")),(0,i.kt)("h2",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst color1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 0]).modify('blend', {\n  with: Color.from('hex', '00ff00'),\n})\n")))}p.isMDXComponent=!0}}]);