"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7506],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(l,".").concat(y)]||f[y]||p[y]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9277:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={title:"HSV",sidebar_position:5},l="HSV",s={unversionedId:"color-types/hsv",id:"color-types/hsv",title:"HSV",description:"Hue, Saturation, Value",source:"@site/docs/color-types/hsv.md",sourceDirName:"color-types",slug:"/color-types/hsv",permalink:"/chromaticity-color-utilities/docs/color-types/hsv",editUrl:"https://github.com/reiniiriarios/chromaticity-color-utilities/docs/docs/color-types/hsv.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"HSV",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Rec. 2020 RGB",permalink:"/chromaticity-color-utilities/docs/color-types/rec2020"},next:{title:"HSL",permalink:"/chromaticity-color-utilities/docs/color-types/hsl"}},u={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],f={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hsv"},"HSV"),(0,i.kt)("div",{class:"subheader"},"Hue, Saturation, Value"),(0,i.kt)("p",null,"Hue value is between 0 and 360. Saturation, value, and alpha are between 0 and 100 (as in, percent)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Color.from('hsv',[h, s, v, a?])\n\n.to('hsv',{\n  round: boolean // optional, default = true\n})\n")),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('hsv', [300, 100, 100])\nconst color3 = color2.to('hsv')\n")),(0,i.kt)("h2",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.hsv = Color.from('hsv', [300, 100, 100])\n")))}y.isMDXComponent=!0}}]);