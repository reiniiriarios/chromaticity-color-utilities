# <img src="https://reiniiriarios.github.io/chromaticity-color-utilities/assets/images/chromaticity-icon-01.png" width="26" height="26"> chromaticity-color-utilities

![](https://img.shields.io/npm/dt/chromaticity-color-utilities) ![](https://img.shields.io/badge/types-Typescript-blue) ![](https://img.shields.io/badge/license-GPLv3-green)

Color utilities for Node.js.
 
Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.


```ts
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')

let scheme1 = Color.from('hex',0x9A237F).modify('desaturate',{amount:0.2}).to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50'
}).scheme('gradient',{
  with: Color.from('hsl',[300,50,45]),
  colors: 5
})
```

## Install

`npm install --save chromaticity-color-utilities`

## Status

Approaching complete-ish stage... Most conversion tests pass. Issues with XYZ. Writing tests for schemes, mods.

## Documentation

The full docs contain information on each method as well as the mathematics behind them.

[**Full Documentation >** https://reiniiriarios.github.io/chromaticity-color-utilities](https://reiniiriarios.github.io/chromaticity-color-utilities)

## Example Usage

See [documentation](https://reiniiriarios.github.io/chromaticity-color-utilities) for more details and usage examples.

Any color can be converted to any other, with only a few caveats. Construction `from()`, conversion `to()`, and modification `modify()` methods can be chained.

Object properties can be accessed directly, e.g. `color.r` for the red channel value.

Most colors will retain their arguments as a part of their object properties, such as bitDepth, colorSpace, etc.

```js
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }

let color2 = Color.from('hex','ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }

let color6 = Color.from('hex', '#ff00ff').to('lab')
// defaulting to sRGB color space with a D65 standard illuminant reference white
// lab { l: 95, a: 142, b: -88 }

let color6 = Color.from('hex', 0xFF00FF).to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50'
})
// lab { l: 100, a: 150, b: -49 }

let red = Color.from('hsl',[280,80,90]).to('rgb').r
// 250

let color7 = Color.from('hsl',[300,100,50]).to('ypbpr',{kb:0.0722, kr:0.2126})
// ypbpr { y: 0.2848, pb: 0.3854278939426601, pr: 0.45415290830581667 }

let color3 = Color.from('rgb',[255,0,0]).modify('blend', {with: Color.from('rgb',[0,255,0])})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00'),
  amount: 0.4
})
// rgb { r: 153, g: 102, b: 0, a: 255, bitDepth: 8, max: 255 }

let color5 = Color.from('hex','ee5432').modify('blend', {
  with: Color.from('rgb',[234, 100, 20, 64]),
  amount: 1/3
}).to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }

let scheme1 = Color.from('rgb',[200, 180, 0]).scheme('splitComplement')
// [
//   rgb { r: 200, g: 180, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 120, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 80, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }  
// ]

let scheme2 = Color.from('hsl',[180, 80, 48]).scheme('tetradic', { angle: 40 })
// [
//   hsl { h: 180, s: 80, l: 48, a: 100 },
//   hsl { h: 220, s: 80, l: 48, a: 100 },
//   hsl { h: 40, s: 80, l: 48, a: 100 },
//   hsl { h: 0, s: 80, l: 48, a: 100 }
// ]
```

## Compiling from Source

`git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git`

`cd chromaticity-color-utilities`

`npm install`

`tsc`

## To Do List

* YUV
* Gamma adjustment modification
* Auto-gamma adjustment and conversion for rec709, rec2020, and jpeg to/from ypbpr
  * note to self: rec709 does gamma conversion before while rec2020 does gamma conversion after when converting to ypbpr (I think)
* Write more documentation wrt mathematics.
* Integrate my references better. :)