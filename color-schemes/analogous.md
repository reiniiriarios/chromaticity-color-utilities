---
layout: page
title: "Analogous Schemes"
parent: Color Schemes
nav_order: 2
---

# Analogous Schemes
#### + Triadic & Split Complement Schemes

These three methods are synonyms with different default angles.

```ts
.scheme('analogous', {
  angle: number, // optional, default = 30
  round: boolean // optional, defaults to true
})
.scheme('triadic', {
  angle: number, // optional, default = 120
  round: boolean // optional, defaults to true
})
.scheme('splitcomplement', {
  angle: number, // optional, default = 150
  round: boolean // optional, defaults to true
})

// e.g.
let color1 = Color.from('rgb',[255,0,255]).scheme('analogous')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 128, a: 255, bitDepth: 8, max: 255 }
// ]
let color2 = Color.from('rgb',[255,0,255]).scheme('triadic')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
let color3 = Color.from('rgb',[255,0,255]).scheme('splitcomplement',{angle: 160})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 85, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 85, a: 255, bitDepth: 8, max: 255 }
// ]
```
