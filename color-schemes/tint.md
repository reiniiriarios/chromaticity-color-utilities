---
layout: page
title: 'Tint Scales'
parent: Color Schemes
nav_order: 4
---

# Tint Scales

```ts
.scheme('tint',{
  colors: number,   // REQUIRED, number of colors in scheme
  distance: number, // optional, 0-1, defaults to 1, how close to white scheme should reach
  round: boolean    // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const scheme1 = Color.from('rgb', [100, 0, 100]).scheme('tint', { colors: 4 })
// [
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 0, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 118, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]

const scheme2 = Color.from('rgb', [100, 0, 100]).scheme('tint', {
  colors: 4,
  distance: 0.5,
})
// [
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 168, g: 0, b: 168, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 0, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 50, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const scheme1: colorTypes.rgb[] = Color.from('rgb', [100, 0, 100]).scheme(
  'tint',
  { colors: 4 }
)
```
