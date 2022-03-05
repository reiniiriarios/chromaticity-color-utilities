---
layout: page
title: 'Tetradic Schemes'
parent: Color Schemes
nav_order: 3
---

# Tetradic Schemes

#### + Square Schemes

These two methods are synonyms, but that the square method has a fixed angle of 90&deg;.

```ts
.scheme('tetradic', {
  angle: number, // optional, default = 45
  round: boolean // optional, defaults to true
})
.scheme('square', {
  round: boolean // optional, defaults to true
}) // angle = 90
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const scheme1 = Color.from('rgb', [255, 0, 255]).scheme('tetradic', {
  angle: 42,
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 0, b: 76, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 179, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
const scheme2 = Color.from('rgb', [255, 0, 255]).scheme('square')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const scheme1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255]).scheme(
  'tetradic',
  { angle: 42 }
)
```
