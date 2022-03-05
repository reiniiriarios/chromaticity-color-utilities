---
layout: page
title: 'HSI'
parent: Color Types and Conversions
nav_order: 7
---

# HSI

#### Hue, Saturation, Intensity

Hue value is between 0 and 360. Saturation, intensity, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsi',[h, s, v, a?])

.to('hsi',{
  round: boolean // optional, default = true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('hsi',[300, 100, 67])
const color3 = color2.to('hsi')
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.hsi = Color.from('hsi', [300, 100, 67])
```
