---
layout: page
title: "Tint & Shade Scales"
parent: Color Schemes
nav_order: 6
---

# Tint & Shade Scales

The total number of colors in the scheme will be `colors * 2 + 1`, including the original color.

Either include `distance` OR `distanceToWhite` and `distanceToBlack`. If you only include distance it will calculate distance to the nearest bound (black or white) and use that as measure for the other direction.

```ts
.scheme('tintshade',{
  colors: number,          // REQUIRED, number of colors in each direction from source color
  distance: number,        // optional, 0-1, defaults to 1 OR
  distanceToWhite: number, // optional, 0-1, defaults to 1
  distanceToBlack: number, // optional, 0-1, defaults to 1
  round: boolean           // optional, defaults to true
})

// e.g.
let scheme1 = Color.from('rgb',[100,0,100]).scheme('tintshade', {colors: 3})
// [
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 33, g: 0, b: 33, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 67, g: 0, b: 67, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 133, g: 0, b: 133, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 167, g: 0, b: 167, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }
// ]
let scheme2 = Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3})
// [
//   rgb { r: 66, g: 24, b: 66, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 118, g: 42, b: 118, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 60, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 203, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
let scheme4 = Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3, distance: 0.5})
// [
//   rgb { r: 144, g: 51, b: 144, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 170, g: 60, b: 170, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 191, g: 74, b: 191, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 209, g: 126, b: 209, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 227, g: 178, b: 227, a: 255, bitDepth: 8, max: 255 } 
// ]
let scheme5 = Color.from('rgb',[200,100,200]).scheme('tintshade', {
  colors: 3,
  distanceToWhite: 1,
  distanceToBlack: 1
})
// [
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 74, g: 26, b: 74, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 148, g: 52, b: 148, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 203, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
```
