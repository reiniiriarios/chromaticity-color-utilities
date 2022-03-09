# <img src="https://reiniiriarios.github.io/chromaticity-color-utilities/assets/images/chromaticity-icon-01.png" width="26" height="26"> chromaticity-color-utilities

![downloads](https://img.shields.io/npm/dt/chromaticity-color-utilities)
![types: Typescript](https://img.shields.io/badge/types-Typescript-blue)
![license: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blueviolet)
[![npm version](https://img.shields.io/npm/v/chromaticity-color-utilities)](https://www.npmjs.com/package/chromaticity-color-utilities)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://github.com/prettier/prettier#readme)

Color utilities for Node.js.

Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.

### Example Usage - JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 128, 0]).to('hsv')

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
```

### Example Usage - TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const color1: colorTypes.hsv = Color.from('rgb', [255, 128, 0]).to('hsv')

const scheme1: colorTypes.lab[] = Color.from('hex', 0x9a237f)
  .modify('desaturate', { amount: 0.2 })
  .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50',
  })
  .scheme('gradient', {
    with: Color.from('hsl', [300, 50, 45]),
    colors: 5,
  })

const yourMethod = (rgb: colorTypes.rgb): colorTypes.hsv => {
  // do things
  let hsv: colorTypes.hsv = rgb.to('hsv')
  // do things
  return hsv
}
```

## Install

`npm i chromaticity-color-utilities`

## Status

Approaching complete-ish stage... Most tests pass.

### Known Issues

- L\*a\*b\* failing
- L\*u\*v\* failing
- HSP > RGB failing in one case

## Documentation

The full docs contain information on each method as well as the mathematics behind them.

[**Full Documentation >** https://reiniiriarios.github.io/chromaticity-color-utilities](https://reiniiriarios.github.io/chromaticity-color-utilities)

## More Example Usage

See [documentation](https://reiniiriarios.github.io/chromaticity-color-utilities) for more details and usage examples.

Any color can be converted to any other, with only a few caveats. Construction `from()`, conversion `to()`, and modification `modify()` methods can be chained.

Object properties can be accessed directly, e.g. `color.r` for the red channel value.

Most colors will retain their arguments as a part of their object properties, such as bitDepth, colorSpace, etc.

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('rgb', [255, 128, 0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }

const color2 = Color.from('hex', 'ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }

const color6 = Color.from('hex', '#ff00ff').to('lab')
// defaulting to sRGB color space with a D65 standard illuminant reference white
// lab { l: 95, a: 142, b: -88 }

const color6 = Color.from('hex', 0xff00ff).to('lab', {
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50',
})
// lab { l: 100, a: 150, b: -49 }

const red = Color.from('hsl', [280, 80, 90]).to('rgb').r
// 250

const color7 = Color.from('hsl', [300, 100, 50]).to('ypbpr', {
  kb: 0.0722,
  kr: 0.2126,
})
// ypbpr { y: 0.2848, pb: 0.3854278939426601, pr: 0.45415290830581667 }

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
    with: Color.from('rgb', [234, 100, 20, 64 /* alpha */]),
    amount: 1 / 3,
  })
  .to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }

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

## Compiling from Source

```
git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git
cd chromaticity-color-utilities
npm i
tsc
```

(Typescript not added as dependency, install with `npm i -g typescript`.)

## To Do List

- YUV
- Gamma adjustment modification
- Auto-gamma adjustment and conversion for rec709, rec2020, and jpeg to/from ypbpr
  - note to self: rec709 does gamma conversion before while rec2020 does gamma conversion after when converting to ypbpr (I think)
- Write more documentation wrt mathematics.
- Integrate my references better. :)
- Validate YIQ
- For RGBA to CMYK, mix alpha with white
