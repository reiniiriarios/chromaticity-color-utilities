---
layout: page
title: 'Lighten'
parent: Modifying Colors
nav_order: 3
---

# Lighten

Methods available are: `hsl`/`lightness`, `hsp`/`perceived`

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
.modify('lighten', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'lightness'
  round: boolean, // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 0, 255, 200]).modify('lighten', {
  method: 'lightness',
})
// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }
const color2 = Color.from('rgb', [100, 0, 100]).modify('lighten', {
  method: 'hsp',
})
// rgb { r: 250, g: 0, b: 250, a: 255, bitDepth: 8, max: 255 }
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const color1: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255, 200]).modify(
  'lighten',
  { method: 'lightness' }
)
```
