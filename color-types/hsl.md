---
layout: page
title: "HSL"
parent: Color Types and Conversions
nav_order: 6
---

# HSL
#### Hue, Saturation, Lightness

Hue value is between 0 and 360. Saturation, lightness, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsl',[h, s, l, a?])

.to('hsl',{
  round: boolean // optional, default = true
})

// e.g.
let color1 = Color.from('hsl',[300, 100, 50])
let color3 = color2.to('hsl')
```


