---
layout: page
title: 'RGB'
parent: Color Types and Conversions
nav_order: 1
---

# RGB

#### Red, Green, Blue

All values are between 0 and `(2 ** bitDepth) - 1`. With a default bit depth of 8, values are within 0-255. A color with a bit depth of 16 will have values ranging from 0-65535.

8-bit color is sometimes referred to as 24-bit or 32-bit (8 bits per channel, with 32-bit including an alpha channel). This package uses the more correct implementation of 32-bit meaning 32 bits per channel, and so generally most use cases would fall between 8 and 16 bit color depth.

`rgb`, `RGB`, `rgba`, and `RGBA` are synonymous.

```ts
Color.from('rgb',[r, g, b, a?],{
  bitDepth: number // optional, default = 8
})

.to('rgb',{
  bitDepth: number, // optional, default = 8
  round: boolean    // optional, default = true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb',[255, 0, 255])
const color3 = color2.to('rgb')

const color4 = Color.from('rgb',[1023, 0, 1023], { bitDepth: 10 })
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.rgb = Color.from('rgb',[255, 0, 255])
```
