---
layout: page
title: "Desaturate"
parent: Modifying Colors
nav_order: 5
---

# Desaturate

Methods available are: `hsv`, `hsl`. The input color type does not matter.

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
let color2 = color1.modify('saturate', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'hsl'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[255,0,255,200]).modify('desaturate','hsl')
// rgb { r: 191, g: 64, b: 191, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[255,0,255,200]).modify('desaturate','hsl')
// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }
```
