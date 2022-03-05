---
layout: page
title: 'YPbPr'
parent: Color Types and Conversions
nav_order: 15
---

# YPbPr

#### Analog video component signals

Also written Y'PbPr or YP<sub>B</sub>P<sub>R</sub>.

- Y' = luma and sync (brightness/luminance and syncrhonization)
- Pb = difference between blue and luma (B - Y)
- Pr = difference between red and luma (R - Y)

- Kb = constant defined from target color space, such that Kb + Kr + Kg = 1
- Kr = constant defined from target color space, such that Kb + Kr + Kg = 1

Kb and Kr constants are not yet included in this package.

```ts
Color.from('ypbpr', [y, pb, pr], {
  kb: number, // REQUIRED
  kr: number, // REQUIRED
})

.to('ypbpr', {
  kb: number, // REQUIRED
  kr: number, // REQUIRED
})

// YCbCr conversion
.to('ycbcr', {
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number, // optional, default = 240, upper bounds of Cb and Cr
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from(
  'ypbpr',
  [0.2848, 0.3854278939426601, 0.45415290830581667]
)
const color3 = color2.to('ypbpr', {
  kb: 0.0722, // Rec709
  kr: 0.2126, // Rec709
})
const color4 = color1.to('ycbcr')
const color5 = color1.to('ycbcr', {
  yLower: 0,
  yUpper: 255,
  cLower: 0,
  cUpper: 255,
})
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.ypbpr = Color.from(
  'ypbpr',
  [0.2848, 0.3854278939426601, 0.45415290830581667]
)
```
