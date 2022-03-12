"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"CIE XYZ",sidebar_position:11},l="CIE XYZ",s={unversionedId:"color-types/xyz",id:"color-types/xyz",title:"CIE XYZ",description:"All values are between 0 and 1. XYZ is only defined within the constraints of a color space and reference white point of a standard illuminant. If one is not given, sRGB and D65 are used as the color space and standard illuminant.",source:"@site/docs/color-types/xyz.md",sourceDirName:"color-types",slug:"/color-types/xyz",permalink:"/chromaticity-color-utilities/docs/color-types/xyz",editUrl:"https://github.com/reiniiriarios/chromaticity-color-utilities/docs/docs/color-types/xyz.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"CIE XYZ",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"YIQ",permalink:"/chromaticity-color-utilities/docs/color-types/yiq"},next:{title:"CIE xyY",permalink:"/chromaticity-color-utilities/docs/color-types/xxy"}},p={},u=[{value:"JavaScript",id:"javascript",level:2},{value:"TypeScript",id:"typescript",level:2}],d={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cie-xyz"},"CIE XYZ"),(0,i.kt)("p",null,"All values are between 0 and 1. XYZ is only defined within the constraints of a color space and reference white point of a standard illuminant. If one is not given, sRGB and D65 are used as the color space and standard illuminant."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"X = mix of three CIE RGB curves chosen to be non-negative"),(0,i.kt)("li",{parentName:"ul"},"Y = luminance"),(0,i.kt)("li",{parentName:"ul"},"Z = quasi-equal to blue")),(0,i.kt)("p",null,"It is not often useful to convert ",(0,i.kt)("em",{parentName:"p"},"to")," XYZ, as XYZ defines real-world light and is typically then converted to a digital representation (most commonly RGB), but the functionality is present nonetheless."),(0,i.kt)("p",null,"When converting to most color types, you must supply color space and standard illuminant reference white. See available ",(0,i.kt)("a",{parentName:"p",href:"/docs/color-spaces-standard-illuminants/"},"Color Spaces and Stardard Illuminants"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Color.from('xyz', [x, y, z])\n\n.to('xyz',{\n  colorSpace: string,    // optional, default = 'srgb' -- ignored if converting from xyy, lab, luv\n  referenceWhite: string // optional, default = 'd65'  -- ignored if converting from xyy\n})\n")),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Color = require('chromaticity-color-utilities')\n\nconst color1 = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])\nconst color3 = color2.to('xyz')\n\nconst color4 = color1.to('rgb')\nconst color5 = color1.to('rgb', {\n  colorSpace: 'adobergb',\n  referenceWhite: 'd50'\n})\n")),(0,i.kt)("h2",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Color, { colorTypes } from 'chromaticity-color-utilities'\n\nconst c: colorTypes.xyz = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])\n")))}y.isMDXComponent=!0}}]);