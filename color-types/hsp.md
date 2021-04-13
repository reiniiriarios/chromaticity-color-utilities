---
layout: page
title: "HSP"
parent: Color Types and Conversions
nav_order: 8
---

# HSP
#### Hue, Saturation, Perceived Brightness

The formula used to generate HSP is similar to the one Photoshop uses when converting images to greyscale.

Hue value is between 0 and 360. Saturation, perceived brightness, and alpha are between 0 and 100 (as in, percent).

When passing P<sub>R</sub> and P<sub>B</sub> values, P<sub>R</sub> + P<sub>G</sub> + P<sub>B</sub> must = 1.

By default,

* P<sub>R</sub> = 0.299
* P<sub>G</sub> = 0.587
* P<sub>B</sub> = 0.114

** This formula is not as accurate as most others, but does offer another way of adjusting brightness in an image.

```ts
Color.from('hsp',[h, s, p, a?],{
  pb: number, // optional, default = 0.114
  pr: number  // optional, default = 0.299
})

.to('hsp',{
  round: boolean, // optional, default = true
  pb: number,     // optional, default = 0.114
  pr: number      // optional, default = 0.299
})

// e.g.
let color1 = Color.from('hsp',[300, 100, 65]).to('rgb')
// rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 }
let color3 = Color.from('rgb',[255, 0, 255]).to('hsp')
// hsp { h: 300, s: 100, p: 64, a: 100, pr: 0.299, pg: 0.587, pb: 0.114 }
```


