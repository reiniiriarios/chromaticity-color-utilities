---
layout: page
title: "CMYK"
parent: Color Types and Conversions
nav_order: 9
---

# CMYK
#### Cyan, Magenta, Yellow, Black

All values are between 0 and 100 (as in, percent).

** Calculations do not take pigment conversion into account and should not be used to reference printed colors.

```ts
Color.from('cmyk',[c, m, y, k])

.to('cmyk',{
  round: boolean // optional, default = true
})

// e.g.
let color1 = Color.from('cmyk',[0, 100, 0, 0])
let color3 = color2.to('cmyk')
```

