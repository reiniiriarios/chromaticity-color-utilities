---
layout: page
title: "YCbCr"
parent: Color Types and Conversions
nav_order: 16
---

# YCbCr
#### Digital video component signals

Also written Y'CbCr, Y Pb/Cb Pr/Cr, YC<sub>B</sub>C<sub>R</sub>, or Y'C<sub>B</sub>C<sub>R</sub>.

* Y' = luma and sync (brightness/luminance and syncrhonization)
* Cb = difference between blue and luma (B - Y)
* Cr = difference between red and luma (R - Y)

YCbCr conversions require Kb and Kr constants with the exception of converting to YPbPr. These values are not yet included in this package.

* Kb = constant defined from target color space, such that Kb + Kr + Kg = 1
* Kr = constant defined from target color space, such that Kb + Kr + Kg = 1

Upper and lower bounds vary with color space. It's recommended to always supply these values.

```ts
Color.from('ycbcr', [y, cb, cr], {
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr
)

.to('ycbcr',{
  kb: number, // REQUIRED
  kr: number  // REQUIRED
})

// YPbPr conversion
.to('ypbpr',{
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr
})

// e.g.
let color1 = Color.from('ycbcr', [73, 226, 243])
let color3 = color2.to('ycbcr',{
  kb: 0.0722, // Rec709
  kr: 0.2126  // Rec709
})
let color4 = color1.to('ypbpr')
let color5 = color1.to('ypbpr',{
  yLower: 0,
  yUpper: 255,
  cLower: 0,
  cUpper: 255
})
```


