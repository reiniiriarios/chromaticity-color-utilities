"use strict";(self.webpackChunkchromaticity_color_utilities_documentation=self.webpackChunkchromaticity_color_utilities_documentation||[]).push([[8774],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?o.createElement(f,c(c({ref:t},u),{},{components:r})):o.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7474:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),c=["components"],a={title:"Rec. 709 RGB",sidebar_position:3},l="Rec. 709 RGB",s={unversionedId:"color-types/rec709",id:"color-types/rec709",title:"Rec. 709 RGB",description:"HD video standard",source:"@site/docs/color-types/rec709.md",sourceDirName:"color-types",slug:"/color-types/rec709",permalink:"/chromaticity-color-utilities/docs/color-types/rec709",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rec. 709 RGB",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hexidecimal",permalink:"/chromaticity-color-utilities/docs/color-types/hex"},next:{title:"Rec. 2020 RGB",permalink:"/chromaticity-color-utilities/docs/color-types/rec2020"}},u={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rec-709-rgb"},"Rec. 709 RGB"),(0,i.kt)("div",{class:"subheader"},"HD video standard"),(0,i.kt)("p",null,"Limits RGB color to video levels (16 - 235 for 8-bit or 64 to 940 for 10-bit). Input bit depth must be 8 or 10. Conversion to Y'PbPr and Y'CbCr will fail as this module does not yet have gamma adjustment implemented."),(0,i.kt)("p",null,"This method does not currently support data levels."),(0,i.kt)("p",null,"RGB values ",(0,i.kt)("em",{parentName:"p"},"may fall outside limits"),"."),(0,i.kt)("p",null,"Alpha channel maintains data levels (0 - 255 / 0 - 1023)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Color.from('rec709rgb',[r, g, b, a?], {\n  round: boolean,  // optional, defaults to true\n  bitDepth: number // optional, defaults to 8, must be 8 or 10\n})\n\n.to('rec709rgb', {\n  round: boolean,  // optional, defaults to true\n  bitDepth: number // optional, defaults to 8, must be 8 or 10\n})\n")),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('rec709rgb', [235, 16, 235])\nconst color1 = Color.from('rec709rgb', [940, 64, 940], { bitDepth: 10 })\n\nconst color3 = color2.to('rec709rgb')\nconst color3 = color2.to('rec709rgb', { bitDepth: 10 })\n")),(0,i.kt)("h2",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.rec709rgb = Color.from('rec709rgb', [235, 16, 235])\n")))}d.isMDXComponent=!0}}]);