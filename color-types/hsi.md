---
layout: page
title: "HSI"
parent: Color Types and Conversions
nav_order: 7
---

# HSI
#### Hue, Saturation, Intensity

Hue value is between 0 and 360. Saturation, intensity, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsi',[h, s, v, a?])

.to('hsi',{
  round: boolean // optional, default = true
})

// e.g.
let color1 = Color.from('hsi',[300, 100, 67])
let color3 = color2.to('hsi')
```


