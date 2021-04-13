---
layout: page
title: "Gradient Scales"
parent: Color Schemes
nav_order: 7
---

# Gradient Scales

Generate an array of colors from color1 to color2. Methods available are `rgb` and `hsv`.

```ts
.scheme('gradient',{
  color2: colorType,  // REQUIRED, second color, of any type, to blend with
  colors: number,     // REQUIRED, number of colors to be returned, must be > 2
  method: string,     // optional, defaults to 'rgb'
  round: boolean      // optional, defaults to true
})

// e.g.
let gradient1 = Color.from('rgb',[255,0,255]).scheme('gradient',{
  with: Color.from('hex',0x00FF00),
  colors: 5
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 191, g: 64, b: 191, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 128, b: 128, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 64, g: 191, b: 64, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]

let gradient1 = Color.from('rgb',[255,0,255]).scheme('gradient',{
  with: Color.from('hex','00ff00'),
  colors: 5,
  method: 'hsv'
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 64, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 191, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```
