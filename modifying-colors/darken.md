---
layout: page
title: 'Darken'
parent: Modifying Colors
nav_order: 2
---

# Darken

Methods available are: `hsl`/`lightness`, `hsp`/`perceived`

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
.modify('darken', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'lightness'
  round: boolean, // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color2 = Color.from('rgb', [255, 0, 255, 200]).modify('darken', {
  method: 'lightness',
})
// rgb { r: 128, g: 0, b: 128, a: 200, bitDepth: 8, max: 255 }
const color2 = Color.from('rgb', [100, 0, 100]).modify('darken', {
  method: 'hsp',
})
// rgb { r: 52, g: 0, b: 52, a: 255, bitDepth: 8, max: 255 }
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const color4: colorTypes.rgb[] = Color.from('rgb', [255, 0, 255, 200]).modify(
  'darken',
  { method: 'lightness' }
)
```
