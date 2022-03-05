---
layout: page
title: 'Desaturate'
parent: Modifying Colors
nav_order: 5
---

# Desaturate

Methods available are: `hsv`, `hsl`. The input color type does not matter.

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
.modify('saturate', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'hsl'
  round: boolean, // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 0, 255, 200]).modify('desaturate', 'hsl')
// rgb { r: 191, g: 64, b: 191, a: 200, bitDepth: 8, max: 255 }
const color2 = Color.from('rgb', [255, 0, 255, 200]).modify('desaturate', 'hsl')
// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const color1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255, 200]).modify(
  'desaturate',
  'hsl'
)
```
