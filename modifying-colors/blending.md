---
layout: page
title: "Blending"
parent: Modifying Colors
nav_order: 1
---

# Blending

When blending two colors, the amount ∈ [0,1] refers to the percentage the second color is blended with the first. In other words, 0 means 0% of the second color and 100% of the first while 1 means 100% of the second color and 0% of the first.

Blending methods include: `rgb`, `hsv`

```ts
let color3 = color1.modify('blend', {
  with: color2,   // REQUIRED, can be any color of any type
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'rgb'
  round: boolean  // optional, defaults to true
})

// e.g.
let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00')
})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00'),
  method: 'hsv'
})
// rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }

let color5 = Color.from('hex','ee5432').modify('blend', {
  with: Color.from('rgb',[234, 100, 20, 64]),
  amount: 1/3
}).to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }
```

