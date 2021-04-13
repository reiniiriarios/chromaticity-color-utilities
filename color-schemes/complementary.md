---
layout: page
title: "Complementary Schemes"
parent: Color Schemes
nav_order: 1
---

# Complementary Schemes

Complementary color scheme generation has a fixed angle of 180&deg;.

```ts
.scheme('complement', { // angle = 180
  round: boolean // optional, defaults to true
})

// e.g.
let color1 = Color.from('rgb',[255,0,255]).scheme('complement')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```
