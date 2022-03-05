---
layout: home
title: About
permalink: /
nav_order: 1
---

# About

![downloads](https://img.shields.io/npm/dt/chromaticity-color-utilities)
![types: Typescript](https://img.shields.io/badge/types-Typescript-blue)
![license: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blueviolet)
[![npm version](https://img.shields.io/npm/v/chromaticity-color-utilities)](https://www.npmjs.com/package/chromaticity-color-utilities)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://github.com/prettier/prettier#readme)

Color utilities for Node.js.

Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.

### JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 128, 0]).to('hsv')

const scheme1 = Color.from('hex', 0x9a237f)
  .modify('desaturate', { amount: 0.2 })
  .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50',
  })
  .scheme('gradient', {
    with: Color.from('hsl', [300, 50, 45]),
    colors: 5,
  })
```

### TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const color1: colorTypes.hsv = Color.from('rgb', [255, 128, 0]).to('hsv')

const scheme1: colorTypes.lab[] = Color.from('hex', 0x9a237f)
  .modify('desaturate', { amount: 0.2 })
  .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50',
  })
  .scheme('gradient', {
    with: Color.from('hsl', [300, 50, 45]),
    colors: 5,
  })

const yourMethod = (rgb: colorTypes.rgb): colorTypes.hsv => {
  // do things
  let hsv: colorTypes.hsv = rgb.to('hsv')
  // do things
  return hsv
}
```

[Getting Started &raquo;](/chromaticity-color-utilities/getting-started/){: .btn .btn-blue}

## Author

<div style="margin-top: 10px;">
<img style="float: left; margin-right: 10px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80431903?s=88&amp;v=4" width="64" height="64">
<strong>Emma Litwa-Vulcu</strong><br>
<a href="https://github.com/reiniiriarios" target="_blank">github.com/reiniiriarios</a>
</div>
