---
layout: page
title: Getting Started
nav_order: 2
---

# Getting Started

## Installation

```
npm i chromaticity-color-utilities
```

## Example Usage

##### Converting an RGB value to HSV

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 128, 0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }
```

##### Converting a HEX string to 10-bit Rec. 709 RGB at video levels

```js
const color2 = Color.from('hex', 'ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }
```

##### Converting a HEX string/integer to L\*a\*b\*

```js
const color6 = Color.from('hex', '#f0f').to('lab')
// defaulting to sRGB color space with a D65 standard illuminant reference white
// lab { l: 95, a: 142, b: -88 }

const color6 = Color.from('hex', 0xff00ff).to('lab', {
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50',
})
// lab { l: 100, a: 150, b: -49 }
```

##### Getting the Red value of a HSL color

```js
const red = Color.from('hsl', [280, 80, 90]).to('rgb').r
// 250
```

##### Converting an HSL color to a Y'PbPr analog video signal

```js
const color7 = Color.from('hsl', [300, 100, 50]).to('ypbpr', {
  kb: 0.0722,
  kr: 0.2126,
})
// ypbpr { y: 0.2848, pb: 0.3854278939426601, pr: 0.45415290830581667 }
```

##### Blending two colors together

```js
const color3 = Color.from('rgb', [255, 0, 0]).modify('blend', {
  with: Color.from('rgb', [0, 255, 0]),
})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

const color4 = Color.from('rgb', [255, 0, 0]).modify('blend', {
  with: Color.from('hex', '00ff00'),
  amount: 0.4,
})
// rgb { r: 153, g: 102, b: 0, a: 255, bitDepth: 8, max: 255 }

const color5 = Color.from('hex', 'ee5432')
  .modify('blend', {
    with: Color.from('rgb', [234, 100, 20, 64]),
    amount: 1 / 3,
  })
  .to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }
```

##### Generating color schemes

```js
const scheme1 = Color.from('rgb', [200, 180, 0]).scheme('splitComplement')
// [
//   rgb { r: 200, g: 180, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 120, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 80, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }
// ]

const scheme2 = Color.from('hsl', [180, 80, 48]).scheme('tetradic', {
  angle: 40,
})
// [
//   hsl { h: 180, s: 80, l: 48, a: 100 },
//   hsl { h: 220, s: 80, l: 48, a: 100 },
//   hsl { h: 40, s: 80, l: 48, a: 100 },
//   hsl { h: 0, s: 80, l: 48, a: 100 }
// ]
```

##### Converting an RGB color to HSV, darkening it 20%, and generating a tetradic color scheme

```js
const scheme1 = Color.from('rgb', [200, 100, 150])
  .to('hsl')
  .modify('darken', { amount: 0.2 })
  .scheme('tetradic')
// [
//   hsl { h: 330, s: 48, l: 47, a: 100 },
//   hsl { h: 15, s: 48, l: 47, a: 100 },
//   hsl { h: 195, s: 48, l: 47, a: 100 },
//   hsl { h: 150, s: 48, l: 47, a: 100 }
// ]
```

##### Desaturating a HEX color by 20%, converting to L\*a\*b\*, and generating a gradient to another color, converted from HSL

```js
const scheme1 = Color.from('hex', 0x9a237f)
  .modify('desaturate', { amount: 0.2 })
  .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50',
  })
  .scheme('gradient', {
    with: Color.from('hsl', [300, 50, 45]),
    colors: 5,
  })
// [
//   lab { l: 76, a: 85, b: 44 },
//   lab { l: 72, a: 85, b: 16 },
//   lab { l: 70, a: 85, b: -11 },
//   lab { l: 70, a: 85, b: -36 },
//   lab { l: 73, a: 85, b: -56 }
// ]
```

## TypeScript

Types are available for each color model, and are described throughout the documentation.

```ts
import Color, { colorTypes } from 'chromaticity-color-utilites'

colorTypes.rgb
colorTypes.hsi
colorTypes.cmyk
colorTypes.yiq
colorTypes.nm
colorTypes.kelvin
```

[Available Color Types &amp; Conversions &raquo;](/chromaticity-color-utilities/color-types/){: .btn .btn-blue}
