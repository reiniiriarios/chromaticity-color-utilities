---
layout: page
title: "CIE L*a*b*"
parent: Color Types and Conversions
nav_order: 13
---

# CIE L\*a\*b\*

Derived from XYZ.

* L* = lightness
* a* = position between red and green (negative indicates green, positive red)
* b* = position between blue and yellow (negative indicates blue, positive yellow)

When converting to most color types, you must supply color space and standard illuminant reference white. See available [Color Spaces and Stardard Illuminants](/color-spaces-standard-illuminants/).

```ts
Color.from('lab', [l, a, b])

.to('lab',{
  colorSpace: string,     // optional, defaults to 'srgb' -- ignored if converting from xyz, luv
  referenceWhite: string, // optional, defaults to 'd65'
  round: boolean          // optional, defaults to true
})

// e.g.
let color1 = Color.from('lab',[95, 142, -88])
let color3 = color2.to('lab')

let color4 = color1.to('rgb')
let color5 = color1.to('rgb', {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```


