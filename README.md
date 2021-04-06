# chromaticity-color-utilities
 Color utilities for Node.js

## Install

NOT YET PUBLISHED

`npm install --save chromaticity-color-utilities`

## Usage

```js
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }

let color2 = Color.from('hex','ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }

let color3 = Color.from('rgb',[255,0,0]).modify('blend', { with: Color.from('rgb',[0,255,0])})
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

let scheme2 = Color.from('hsl',[180, 80, 48]).scheme('tetradic', 40)
// [
//   hsl { h: 180, s: 80, l: 48, a: 100 },
//   hsl { h: 225, s: 80, l: 48, a: 100 },
//   hsl { h: 45, s: 80, l: 48, a: 100 },
//   hsl { h: 0, s: 80, l: 48, a: 100 }
// ]
```

BUGGY, WORK IN PROGRESS

## Compiling from Source

`git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git`

`cd chromaticity-color-utilities`

`npm install`

`tsc`