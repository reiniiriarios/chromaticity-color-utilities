---
layout: page
title: 'Shade Scales'
parent: Color Schemes
nav_order: 5
---

# Shade Scales

```ts
.scheme('shade',{
  length: number,   // REQUIRED, number of colors in scheme
  distance: number, // optional, 0-1, defaults to 1, how close to black scheme should reach
  round: boolean    // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const scheme1 = Color.from('rgb', [255, 0, 255]).scheme('shade', {
  colors: 4,
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 0, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 85, g: 0, b: 85, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
const scheme2 = Color.from('rgb', [255, 0, 255]).scheme('shade', {
  colors: 4,
  distance: 0.5,
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 212, g: 0, b: 212, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 0, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 0, b: 128, a: 255, bitDepth: 8, max: 255 }
// ]
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const scheme1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255]).scheme(
  'shade',
  {
    colors: 4,
  }
)
```
