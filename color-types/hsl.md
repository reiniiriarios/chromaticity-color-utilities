---
layout: page
title: 'HSL'
parent: Color Types and Conversions
nav_order: 6
---

# HSL

#### Hue, Saturation, Lightness

Hue value is between 0 and 360. Saturation, lightness, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsl',[h, s, l, a?])

.to('hsl',{
  round: boolean // optional, default = true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('hsl',[300, 100, 50])
const color3 = color2.to('hsl')
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.hsl = Color.from('hsl', [300, 100, 50])
```
