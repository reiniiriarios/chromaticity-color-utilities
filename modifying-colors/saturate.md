---
layout: page
title: "Saturate"
parent: Modifying Colors
nav_order: 4
---

# Saturate

Methods available are: `hsv`, `hsl`. The input color type does not matter.

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
let color2 = color1.modify('saturate', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'hsl'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[128,64,128,200]).modify('saturate','hsl')
// rgb { r: 160, g: 32, b: 160, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[128,64,128,200]).modify('saturate','hsv')
// rgb { r: 128, g: 32, b: 128, a: 200, bitDepth: 8, max: 255 }
```
