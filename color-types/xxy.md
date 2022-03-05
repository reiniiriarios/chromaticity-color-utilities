---
layout: page
title: "CIE xyY"
parent: Color Types and Conversions
nav_order: 12
---

# CIE xyY

Derived from XYZ, x and y are chromaticity values while Y is the tristimulous value of a color.

When converting to most color types, you must supply color space and standard illuminant reference white. See available [Color Spaces and Stardard Illuminants](/color-spaces-standard-illuminants/).

```ts
Color.from('xyy', [x, y, Y])

.to('xyy',{
  colorSpace: string,    // optional, defaults to 'srgb' -- ignored if converting from xyz
  referenceWhite: string // optional, defaults to 'd65'
})
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('xyy',[0.3209377411185291, 0.1541902211986945, 0.2848479])
const color3 = color2.to('xyy')
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.xyy = Color.from('xyy',[0.3209377411185291, 0.1541902211986945, 0.2848479])
```

