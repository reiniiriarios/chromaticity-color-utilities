# <img src="https://reiniiriarios.github.io/chromaticity-color-utilities/img/chromaticity-icon-01.png" width="26" height="26"> chromaticity-color-utilities

![downloads](https://img.shields.io/npm/dt/chromaticity-color-utilities)
![types: Typescript](https://img.shields.io/badge/types-Typescript-blue)
![license: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blueviolet)
[![npm version](https://img.shields.io/npm/v/chromaticity-color-utilities)](https://www.npmjs.com/package/chromaticity-color-utilities)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://github.com/prettier/prettier#readme)

Color utilities for Node.js.

Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.

[**📖 Read Full Documentation**](https://reiniiriarios.github.io/chromaticity-color-utilities)

## Example Usage

### JavaScript

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

### TypeScript

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

## Documentation

Please [read the full documentation](https://reiniiriarios.github.io/chromaticity-color-utilities) for details on each method as well as numerous usage examples.

## Known Issues

- YCbCr validates only with a high tolerance. Not sure if floating point issue.

## Compiling from Source

```
git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git
cd chromaticity-color-utilities
npm ci
tsc
```

(Typescript not added as dependency, install with `npm i -g typescript`.)

## To Do List

- LCHab
- LCHuv
- HSLuv
- HPLuv
- YUV
- Gamma adjustment modification
- Auto-gamma adjustment and conversion for rec709, rec2020, and jpeg to/from ypbpr
  - note to self: rec709 does gamma conversion before while rec2020 does gamma conversion after when converting to ypbpr (I think)
- Need way more comments and better variable names
- Write more documentation wrt mathematics.
- Integrate my references better. :)
- For RGBA to CMYK, mix alpha with white
- Support for 8-digit hex values (RRGGBBAA)
- Diagrams in docs
