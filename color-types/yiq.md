---
layout: page
title: "YIQ"
parent: Color Types and Conversions
nav_order: 10
---

# YIQ
#### NTSC Color

* Y = luma
* I = in-phase
* Q = quadrature

When normalized:

* Y is between 0 and 255
* I and Q are between -128 and 128

When not normalized:

* Y is between 0 and 1
* I is between -0.5957 and 0.5957
* Q is between -0.5226 and 0.5226

```ts
Color.from('yiq', [y, i, q], {
  normalized: boolean // optional, default = true
})

.to('yiq',{
  normalize: boolean, // optional, default = true
  round: boolean      // optional, default = true (ignored/false if not normalized)
})

// e.g.
let color1 = Color.from('yiq',[105, 59, 128])
let color3 = color2.to('yiq')

let color4 = Color.from('yiq', [0.413, 0.2746, 0.5226], {normalized: false})
```


