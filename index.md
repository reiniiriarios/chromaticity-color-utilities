---
layout: home
title: About
permalink: /
nav_order: 1
---



# About

Color utilities for Node.js.

Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.

```ts
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')

let scheme1 = Color.from('hex',0x9A237F).modify('desaturate',{amount:0.2}).to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50'
}).scheme('gradient',{
  with: Color.from('hsl',[300,50,45]),
  colors: 5
})
```

[Getting Started &raquo;](/chromaticity-color-utilities/getting-started/){: .btn .btn-blue}

## Author

<div style="margin-top: 10px;">
<img style="float: left; margin-right: 10px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80431903?s=88&amp;v=4" width="64" height="64">
<strong>Emma Litwa-Vulcu</strong><br>
<a href="https://github.com/reiniiriarios" target="_blank">github.com/reiniiriarios</a>
</div>
