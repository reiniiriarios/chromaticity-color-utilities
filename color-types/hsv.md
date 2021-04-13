---
layout: page
title: "HSV"
parent: Color Types and Conversions
nav_order: 5
---

# HSV
#### Hue, Saturation, Value

Hue value is between 0 and 360. Saturation, value, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsv',[h, s, v, a?])

.to('hsv',{
  round: boolean // optional, default = true
})

// e.g.
let color1 = Color.from('hsv',[300, 100, 100])
let color3 = color2.to('hsv')
```


