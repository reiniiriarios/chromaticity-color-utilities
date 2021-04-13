---
layout: page
title: "Lighten"
parent: Modifying Colors
nav_order: 3
---

# Lighten

Methods available are: `hsl`/`lightness`, `hsp`/`perceived`

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
let color2 = color1.modify('lighten', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'lightness'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[255,0,255,200]).modify('lighten',{method:'lightness'})
// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[100,0,100]).modify('lighten',{method:'hsp'})
// rgb { r: 250, g: 0, b: 250, a: 255, bitDepth: 8, max: 255 }
```

