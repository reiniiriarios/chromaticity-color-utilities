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

let color3 = Color.from('rgb',[255,0,0]).modify('blend',{ with: Color.from('rgb',[0,255,0])})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

let color4 = Color.from('rgb',[255,0,0]).modify('blend',{
  with: Color.from('hex','00ff00'),
  amount: 0.4
})
// rgb { r: 153, g: 102, b: 0, a: 255, bitDepth: 8, max: 255 }

let color5 = Color.from('hex','ee5432').modify('blend', {
  with: Color.from('rgb',[234, 100, 20, 64]),
  amount: 1/3
}).to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }
```

BUGGY, WORK IN PROGRESS

## Compiling from Source

`git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git`

`cd chromaticity-color-utilities`

`npm install`

`tsc`