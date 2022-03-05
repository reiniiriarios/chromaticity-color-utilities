---
layout: page
title: "CIE L*a*b*"
parent: Color Types and Conversions
nav_order: 13
---

# CIE L\*a\*b\*

Derived from XYZ.

* L* = lightness
* a* = position between red and green (negative indicates green, positive red)
* b* = position between blue and yellow (negative indicates blue, positive yellow)

When converting to most color types, you must supply color space and standard illuminant reference white. See available [Color Spaces and Stardard Illuminants](/color-spaces-standard-illuminants/).

```ts
Color.from('lab', [l, a, b])

.to('lab',{
  colorSpace: string,     // optional, defaults to 'srgb' -- ignored if converting from xyz, luv
  referenceWhite: string, // optional, defaults to 'd65'
  round: boolean          // optional, defaults to true
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('lab',[95, 142, -88])
const color3 = color2.to('lab')

const color4 = color1.to('rgb')
const color5 = color1.to('rgb', {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.lab = Color.from('lab',[95, 142, -88])
```

