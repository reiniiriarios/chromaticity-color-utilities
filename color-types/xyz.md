---
layout: page
title: "CIE XYZ"
parent: Color Types and Conversions
nav_order: 11
---

# CIE XYZ

All values are between 0 and 1. XYZ is only defined within the constraints of a color space and reference white point of a standard illuminant. If one is not given, sRGB and D65 are used as the color space and standard illuminant.

* X = mix of three CIE RGB curves chosen to be non-negative
* Y = luminance
* Z = quasi-equal to blue

It is not often useful to convert _to_ XYZ, as XYZ defines real-world light and is typically then converted to a digital representation (most commonly RGB), but the functionality is present nonetheless.

When converting to most color types, you must supply color space and standard illuminant reference white. See available [Color Spaces and Stardard Illuminants](/color-spaces-standard-illuminants/).

```ts
Color.from('xyz', [x, y, z])

.to('xyz',{
  colorSpace: string,    // optional, default = 'srgb' -- ignored if converting from xyy, lab, luv
  referenceWhite: string // optional, default = 'd65'  -- ignored if converting from xyy
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])
const color3 = color2.to('xyz')

const color4 = color1.to('rgb')
const color5 = color1.to('rgb', {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.xyz = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])
```


