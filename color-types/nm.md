---
layout: page
title: "Wavelengths of Light"
parent: Color Types and Conversions
nav_order: 17
---

# Wavelengths of light
#### Nanometers

This is a one-way approximation and is hugely perceptual. There is no `.to('nm')` method option.

```ts
Color.from('nm', wavelength: number)
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('nm',600).to('rgb')
// rgb { r: 255, g: 190, b: 0, a: 255, bitDepth: 8, max: 255 }
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.nm = Color.from('nm',600)
```

