---
layout: page
title: "CIE L*u*v*"
parent: Color Types and Conversions
nav_order: 14
---

# CIE L\*u\*v\*

Derived from XYZ. L\*, luma, is identical to L\* in L\*a\*b\*

When converting to most color types, you must supply color space and standard illuminant reference white. See available [Color Spaces and Stardard Illuminants](/color-spaces-standard-illuminants/).

```ts
Color.from('luv', [l, u, v])

.to('luv',{
  colorSpace: string,     // optional, default = 'srgb' -- ignored if converting from xyz, lab
  referenceWhite: string, // optional, default = 'd65'
  round: boolean          // optional, defaults to true
})

// e.g.
let color1 = Color.from('luv',[95, 132, -170])
let color3 = color2.to('luv')

let color4 = color1.to('rgb')
let color5 = color1.to('rgb', {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```


