# chromaticity-color-utilities
 Color utilities for Node.js.
 
 Conversion, modification, and color schemes of: RGB (at any bit depth), HSV, HSL, HSI, HSP, CYMK, YIQ, XYZ, xyY, L\*a\*b\*, L\*u\*v\*, Y'PbPr, Y'CbCr, and more.

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Color Types and Conversions](#color-types-and-conversions)
  * [RGB: Red, Green, Blue](#rgb--red-green-blue)
  * [HEX: Hexidecimal](#hex--hexidecimal)
  * [Rec. 709 RGB: HD video standard](#rec-709-rgb--hd-video-standard)
  * [Rec. 2020 RGB: UHD video standard](#rec-2020-rgb--uhd-video-standard)
  * [HSV: Hue, Saturation, Value](#hsv--hue-saturation-value)
  * [HSL: Hue, Saturation, Lightness](#hsl--hue-saturation-lightness)
  * [HSI: Hue, Saturation, Intensity](#hsi--hue-saturation-intensity)
  * [HSP: Hue, Saturation, Perceived Brightness](#hsp--hue-saturation-perceived-brightness)
  * [CMYK: Cyan, Magenta, Yellow, Black](#cmyk--cyan-magenta-yellow-black)
  * [YIQ: NTSC Color](#yiq--ntsc-color)
  * [XYZ: CIE XYZ](#xyz--cie-xyz)
  * [xyY: CIE xyY](#xyy--cie-xyy)
  * [Lab: CIELAB / L\*a\*b\*](#lab--cielab--lab)
  * [Luv: CIELUV / L\*u\*v\*](#luv--cieluv--luv)
  * [YPbPr: Analog video component signals](#ypbpr--analog-video-component-signals)
  * [YCbCr: Digital video component signals](#ycbcr--digital-video-component-signals)
  * [NM: Wavelengths of Light](#nm--wavelengths-of-light)
  * [Kelvin: Color Temperature Approximation](#kelvin--color-temperature-approximation)
* [Color Spaces and Standard Illuminants](#color-spaces-and-standard-illuminants)
* [Modifying Colors](#modifying-colors)
  * [Blending Two Colors](#blending-two-colors)
  * [Darken](#darken)
  * [Lighten](#lighten)
  * [Saturate](#saturate)
  * [Desaturate](#desaturate)
* [Color Scheme Generation](#color-scheme-generation)
  * [Complementary Schemes](#complementary-schemes)
  * [Analogous, Triadic, & Split Complement Schemes](#analogous-triadic--split-complement-schemes)
  * [Tetradic & Square Schemes](#tetradic--square-schemes)
  * [Tint Scale](#tint-scale)
  * [Shade Scale](#shade-scale)
  * [Tint & Shade Scale](#tint--shade-scale)
  * [Gradients](#gradients)
* [Mathematics](#mathematics)
  * [Normalizing RGB](#normalizing-rgb)
  * [RGB to HSV](#rgb-to-hsv)
  * [HSV to RGB](#hsv-to-rgb)
  * [RGB to HSL](#rgb-to-hsl)
  * [HSL to RGB](#hsl-to-rgb)
  * [RGB to HSI](#rgb-to-hsi)
  * [HSI to RGB](#hsi-to-rgb)
  * [RGB to HSP](#rgb-to-hsp)
  * [HSP to RGB](#hsp-to-rgb)
  * [HSV to HSL](#hsv-to-hsl)
  * [HSL to HSV](#hsl-to-hsv)
  * [RGB to CMYK](#rgb-to-cmyk)
  * [CMYK to RGB](#cmyk-to-rgb)
  * [RGB to YIQ](#rgb-to-yiq)
  * [YIQ to RGB](#yiq-to-rgb)
  * [RGB to XYZ](#rgb-to-xyz)
    * [sRGB](#srgb)
    * [L*](#l)
    * [Other color spaces](#other-color-spaces)
  * [XYZ to RGB](#xyz-to-rgb)
    * [sRGB](#srgb-1)
    * [L*](#l-1)
    * [Other color spaces](#other-color-spaces-1)
  * [XYZ to xyY](#xyz-to-xyy)
  * [xyY to XYZ](#xyy-to-xyz)
  * [XYZ to L\*a\*b\*](#xyz-to-lab)
  * [L\*a\*b\* to XYZ](#lab-to-xyz)
  * [XYZ to L\*u\*v\*](#xyz-to-luv)
  * [L\*u\*v\* to XYZ](#luv-to-xyz)
  * [RGB to YPbPr](#rgb-to-ypbpr)
  * [YPbPr to YCbCr](#ypbpr-to-ycbcr)
  * [YCbCr to YPbPr](#ycbcr-to-ypbpr)
  * [Temperature (Kelvin) to RGB](#temperature-kelvin-to-rgb)
* [Compiling from Source](#compiling-from-source)
* [To Do List](#to-do-list)
* [References](#references)

## Install

`npm install --save chromaticity-color-utilities`

## Usage

Any color can be converted to any other, with only a few caveats. Construction `from()`, conversion `to()`, and modification `modify()` methods can be chained.

Object properties can be accessed directly, e.g. `color.r` for the red channel value.

Most colors will retain their arguments as a part of their object properties, such as bitDepth, colorSpace, etc.

```js
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }

let color2 = Color.from('hex','ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }

let color6 = Color.from('hex', 'ff00ff').to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'd50'
})
// lab {
//  l: 67.60166164169028,
//  a: 101.30709261827131,
//  b: -50.813827160707525,
//  colorSpace: 'adobergb1998',
//  referenceWhite: 'd50'
// }

let red = Color.from('hsl',[280,80,90]).to('rgb').r
// 250

let color7 = Color.from('hsl',[300,100,50]).to('ypbpr',{kb:0.0722, kr:0.2126})
// ypbpr { y: 0.2848, pb: 0.3854278939426601, pr: 0.45415290830581667 }

let color3 = Color.from('rgb',[255,0,0]).modify('blend', {with: Color.from('rgb',[0,255,0])})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00'),
  amount: 0.4
})
// rgb { r: 153, g: 102, b: 0, a: 255, bitDepth: 8, max: 255 }

let color5 = Color.from('hex','ee5432').modify('blend', {
  with: Color.from('rgb',[234, 100, 20, 64]),
  amount: 1/3
}).to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }

let scheme1 = Color.from('rgb',[200, 180, 0]).scheme('splitComplement')
// [
//   rgb { r: 200, g: 180, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 120, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 80, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }  
// ]

let scheme2 = Color.from('hsl',[180, 80, 48]).scheme('tetradic', { angle: 40 })
// [
//   hsl { h: 180, s: 80, l: 48, a: 100 },
//   hsl { h: 220, s: 80, l: 48, a: 100 },
//   hsl { h: 40, s: 80, l: 48, a: 100 },
//   hsl { h: 0, s: 80, l: 48, a: 100 }
// ]
```

## Color Types and Conversions

For all of the following examples, the same color is used (magenta / 0xFF00FF) to create the color.

Alpha is optional when available. If not defined, it will default to the maximum value for the given bit depth. When converting to a space that does not support alpha, it is ignored. If converting back, alpha will be set to full opacity.

### RGB : Red, Green, Blue

All values are between 0 and `(2 ** bitDepth) - 1`. With a default bit depth of 8, values are within 0-255. A color with a bit depth of 16 will have values ranging from 0-65535.

** 8-bit color is sometimes referred to as 24-bit or 32-bit (8 bits per channel, with 32-bit including an alpha channel). This package uses the more correct implementation of 32-bit meaning 32 bits per channel, and so generally most use cases would fall between 8 and 16 bit color depth.

** A special note: Adobe uses 15+1 bit depth for 16-bit color, where the last bit is simply added to the first 15 bits.

```ts
Color.from('rgb',[r, g, b, a?],{
  bitDepth: number // optional, default = 8
})

.to('rgb',{
  bitDepth: number, // optional, default = 8
  round: boolean    // optional, default = true
})

// e.g.
let color1 = Color.from('rgb',[255, 0, 255])
let color3 = color2.to('rgb')

let color4 = Color.from('rgb',[1023, 0, 1023], { bitDepth: 10 })
```

### HEX : Hexidecimal

May use string or numerical value. Strings are case-insensitive. Short form or long form may be used. # ignored if present.

```ts
Color.from('hex',hex)

.to('hex')

// e.g.
let color1 = Color.from('hex', 'ff00ff')
let color1 = Color.from('hex', '#FF00FF')
let color1 = Color.from('hex', 0xFF00FF)

let color3 = color2.to('hex')
```

### Rec. 709 RGB : HD video standard

Limits RGB color to video levels (16 - 235 for 8-bit or 64 to 940 for 10-bit). Input bit depth must be 8 or 10. Conversion to Y'PbPr and Y'CbCr will fail as this module does not yet have gamma adjustment implemented.

This method does not currently support data levels.

RGB values _may fall outside limits_.

Alpha channel maintains data levels (0 - 255 / 0 - 1023).

```ts
Color.from('rec709rgb',[r, g, b, a?], {
  round: boolean,  // optional, defaults to true
  bitDepth: number // optional, defaults to 8, must be 8 or 10
})

.to('rec709rgb', {
  round: boolean,  // optional, defaults to true
  bitDepth: number // optional, defaults to 8, must be 8 or 10
})

// e.g.
let color1 = Color.from('rec709rgb', [235, 16, 235])
let color1 = Color.from('rec709rgb', [940, 64, 940], { bitDepth: 10 })

let color3 = color2.to('rec709rgb')
let color3 = color2.to('rec709rgb', { bitDepth: 10 })
```

### Rec. 2020 RGB : UHD video standard

Limits RGB color to video levels (64 to 940 for 10-bit or 256 to 3760 for 12-bit). Input bit depth must be 10 or 12. Conversion to Y'PbPr and Y'CbCr will fail as this module does not yet have gamma adjustment implemented.

This method does not currently support data levels.

RGB values _may fall outside limits_.

Alpha channel maintains data levels (0 - 1023 / 0 - 4096).

```ts
Color.from('rec2020rgb',[r, g, b, a?], {
  round: boolean,  // optional, defaults to true
  bitDepth: number // optional, defaults to 10, must be 10 or 12
})

.to('rec2020rgb', {
  round: boolean,  // optional, defaults to true
  bitDepth: number // optional, defaults to 10, must be 10 or 12
})

// e.g.
let color1 = Color.from('rec2020rgb', [940, 64, 940])
let color1 = Color.from('rec2020rgb', [3760, 256, 3760], { bitDepth: 12 })

let color3 = color2.to('rec2020rgb')
let color3 = color2.to('rec2020rgb', { bitDepth: 10 })
```

### HSV : Hue, Saturation, Value

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

### HSL : Hue, Saturation, Lightness

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

### HSI : Hue, Saturation, Intensity

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

### HSP : Hue, Saturation, Perceived Brightness

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

### CMYK : Cyan, Magenta, Yellow, Black

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

### YIQ : NTSC Color

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

### XYZ : CIE XYZ

All values are between 0 and 1. XYZ is only defined within the constraints of a color space and reference white point of a standard illuminant. If one is not given, sRGB and D65 are used as the color space and standard illuminant.

* X = mix of three CIE RGB curves chosen to be non-negative
* Y = luminance
* Z = quasi-equal to blue

It is not often useful to convert _to_ XYZ, as XYZ defines real-world light and is typically then converted to a digital representation (most commonly RGB), but the functionality is present nonetheless.

When converting to most color types, you must supply color space and standard illuminant reference white. Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('xyz', [x, y, z])

.to('xyz',{
  colorSpace: string,    // optional, default = 'srgb' -- ignored if converting from xyy, lab, luv
  referenceWhite: string // optional, default = 'd65'  -- ignored if converting from xyy
})

// e.g.
let color1 = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])
let color3 = color2.to('xyz')

let color4 = color1.to('rgb')
let color5 = color1.to('rgb', {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

### xyY : CIE xyY

Derived from XYZ, x and y are chromaticity values while Y is the tristimulous value of a color.

When converting to most color types, you must supply color space and standard illuminant reference white. Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('xyy', [x, y, Y])

.to('xyy',{
  colorSpace: string,    // optional, defaults to 'srgb' -- ignored if converting from xyz
  referenceWhite: string // optional, defaults to 'd65'
})

// e.g.
let color1 = Color.from('xyy',[0.3209377411185291, 0.1541902211986945, 0.2848479])
let color3 = color2.to('xyy')
```

### Lab : CIELAB / L\*a\*b\*

Derived from XYZ.

* L* = lightness
* a* = position between red and green (negative indicates green, positive red)
* b* = position between blue and yellow (negative indicates blue, positive yellow)

When converting to most color types, you must supply color space and standard illuminant reference white. Available Color Spaces and Stardard Illuminants below.

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

### Luv : CIELUV / L\*u\*v\*

Derived from XYZ. L\*, luma, is identical to L\* in L\*a\*b\*

When converting to most color types, you must supply color space and standard illuminant reference white. Available Color Spaces and Stardard Illuminants below.

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

### YPbPr : Analog video component signals

Also written Y'PbPr or YP<sub>B</sub>P<sub>R</sub>.

* Y' = luma and sync (brightness/luminance and syncrhonization)
* Pb = difference between blue and luma (B - Y)
* Pr = difference between red and luma (R - Y)

* Kb = constant defined from target color space, such that Kb + Kr + Kg = 1
* Kr = constant defined from target color space, such that Kb + Kr + Kg = 1

Kb and Kr constants are not yet included in this package.

```ts
Color.from('ypbpr', [y, pb, pr], {
  kb: number, // REQUIRED
  kr: number  // REQUIRED
})

.to('ypbpr',{
  kb: number, // REQUIRED
  kr: number  // REQUIRED
})

// YCbCr conversion
.to('ycbcr',{
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr
})

// e.g.
let color1 = Color.from('ypbpr',[
  0.2848,
  0.3854278939426601,
  0.45415290830581667
])
let color3 = color2.to('ypbpr',{
  kb: 0.0722, // Rec709
  kr: 0.2126  // Rec709
})
let color4 = color1.to('ycbcr')
let color5 = color1.to('ycbcr',{
  yLower: 0,
  yUpper: 255,
  cLower: 0,
  cUpper: 255
})
```

### YCbCr : Digital video component signals

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

### NM : Wavelengths of light

This is a one-way approximation and is hugely perceptual. There is no `.to('nm')` method option.

```ts
Color.from('nm', wavelength)

// e.g.
let color1 = Color.from('nm',600).to('rgb')
// rgb { r: 255, g: 190, b: 0, a: 255, bitDepth: 8, max: 255 }
```

### Kelvin : Color Temperature Approximation

This is a one-way approximation. There is no `.to('kelvin')` method option. This method uses trapezoid integration to sum the wavelength distribution of energy through a black body tensor. While an approximation, it is a rather accurate one. Temperatures above 10k&deg;K may be less accurate, but the method allows for temperatures up to 40k&deg;K

```ts
Color.from('kelvin', degrees)

// e.g.
let color1 = Color.from('kelvin',1000).to('rgb')
//  rgb { r: 255, g: 13, b: 0, a: 255, bitDepth: 8, max: 255 }
let color1 = Color.from('kelvin',2000).to('rgb')
//  rgb { r: 255, g: 169, b: 7, a: 255, bitDepth: 8, max: 255 }
let color1 = Color.from('kelvin',4000).to('rgb')
//  rgb { r: 240, g: 255, b: 174, a: 255, bitDepth: 8, max: 255 }
let color1 = Color.from('kelvin',8000).to('rgb')
//  rgb { r: 143, g: 232, b: 255, a: 255, bitDepth: 8, max: 255 }
let color1 = Color.from('kelvin',10000).to('rgb')
//  rgb { r: 121, g: 210, b: 255, a: 255, bitDepth: 8, max: 255 }
```

## Color Spaces and Standard Illuminants

For conversion to and from XYZ, xyY, L\*a\*b\*, and L\*u\*v\*, the following color spaces and standard illuminants have XYZ transformation matrices and reference white point vectors available:

|Color Space|Standard Illuminants|
|---|---|
|sRGB|D65, D50|
|CIE RGB|E, D50|
|Adobe RGB|D65, D50|
|Apple RGB|D65, D50|
|Best RGB|D50|
|Bruce RGB|D65, D50|
|ColorMatch RGB|D50|
|Don RGB 4|D50|
|ECI RGB v2|D50|
|Ekta Space PS5|D50|
|NTSC RGB|C, D50|
|PAL / SECAM RGB|D65, D50|
|ProPhoto RGB|D50|
|SMPTE-C RGB|D65, D50|
|Wide Gamut RGB|D50|

Color spaces and standard illuminant arguments are case-insensitive. Color space argument ignores any character not alphanumeric. Some common misspellings / words left out are also taken into account. (`PAL / SECAM` is equivalent to `palsecamrgb`.)

## Modifying Colors

### Blending Two Colors

When blending two colors, the amount ∈ [0,1] refers to the percentage the second color is blended with the first. In other words, 0 means 0% of the second color and 100% of the first while 1 means 100% of the second color and 0% of the first.

Blending methods include: `rgb`, `hsv`

```ts
let color3 = color1.modify('blend', {
  with: color2,   // REQUIRED, can be any color of any type
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'rgb'
  round: boolean  // optional, defaults to true
})

// e.g.
let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00')
})
// rgb { r: 128, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 }

let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00'),
  method: 'hsv'
})
// rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }

let color5 = Color.from('hex','ee5432').modify('blend', {
  with: Color.from('rgb',[234, 100, 20, 64]),
  amount: 1/3
}).to('hsv')
// hsv { h: 15, s: 83, v: 93, a: 75 }
```

### Darken

Methods available are: `hsl`/`lightness`, `hsp`/`perceived`

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
let color2 = color1.modify('darken', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'lightness'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[255,0,255,200]).modify('darken',{method:'lightness'})
// rgb { r: 128, g: 0, b: 128, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[100,0,100]).modify('darken',{method:'hsp'})
// rgb { r: 52, g: 0, b: 52, a: 255, bitDepth: 8, max: 255 }
```

### Lighten

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

### Saturate

Methods available are: `hsv`, `hsl`. The input color type does not matter.

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.

```ts
let color2 = color1.modify('saturate', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'hsl'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[128,64,128,200]).modify('saturate','hsl')
// rgb { r: 160, g: 32, b: 160, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[128,64,128,200]).modify('saturate','hsv')
// rgb { r: 128, g: 32, b: 128, a: 200, bitDepth: 8, max: 255 }
```

### Desaturate

Methods available are: `hsv`, `hsl`. The input color type does not matter.

These methods are intended to provide alternative ways of modifying a color versus changing the values directly, which can make more sense.


```ts
let color2 = color1.modify('saturate', {
  amount: number, // optional, 0 - 1, defaults to 0.5
  method: string, // optional, defaults to 'hsl'
  round: boolean  // optional, defaults to true
})

// e.g.
let color2 = Color.from('rgb',[255,0,255,200]).modify('desaturate','hsl')
// rgb { r: 191, g: 64, b: 191, a: 200, bitDepth: 8, max: 255 }
let color2 = Color.from('rgb',[255,0,255,200]).modify('desaturate','hsl')
// rgb { r: 255, g: 128, b: 255, a: 200, bitDepth: 8, max: 255 }
```

## Color Scheme Generation

Schemes can be generated from any color type. All methods return an array of colors, each the same as the input type. (If calling method on a color of type `hsl`, all values of the returned array will be of type `hsl`.)

```ts
.scheme(type: string, args?: {})
```

### Complementary Schemes

Complementary color scheme generation has a fixed angle of 180&deg;.

```ts
.scheme('complement', { // angle = 180
  round: boolean // optional, defaults to true
})

// e.g.
let color1 = Color.from('rgb',[255,0,255]).scheme('complement')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Analogous, Triadic, & Split Complement Schemes

These three methods are synonyms with different default angles.

```ts
.scheme('analogous', {
  angle: number, // optional, default = 30
  round: boolean // optional, defaults to true
})
.scheme('triadic', {
  angle: number, // optional, default = 120
  round: boolean // optional, defaults to true
})
.scheme('splitcomplement', {
  angle: number, // optional, default = 150
  round: boolean // optional, defaults to true
})

// e.g.
let color1 = Color.from('rgb',[255,0,255]).scheme('analogous')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 128, a: 255, bitDepth: 8, max: 255 }
// ]
let color2 = Color.from('rgb',[255,0,255]).scheme('triadic')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
let color3 = Color.from('rgb',[255,0,255]).scheme('splitcomplement',{angle: 160})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 85, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 85, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Tetradic & Square Schemes

These two methods are synonyms, but that the square method has a fixed angle of 90&deg;.

```ts
.scheme('tetradic', {
  angle: number, // optional, default = 45
  round: boolean // optional, defaults to true
})
.scheme('square', {
  round: boolean // optional, defaults to true
}) // angle = 90

// e.g.
let color1 = Color.from('rgb',[255,0,255]).scheme('tetradic',{angle: 42})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 0, b: 76, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 179, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
let color2 = Color.from('rgb',[255,0,255]).scheme('square')
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 128, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Tint Scale

```ts
.scheme('tint',{
  colors: number,   // REQUIRED, number of colors in scheme
  distance: number, // optional, 0-1, defaults to 1, how close to white scheme should reach
  round: boolean    // optional, defaults to true
})

// e.g.
let tintScheme1 = Color.from('rgb',[100,0,100]).scheme('tint', {colors: 4})
// [
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 0, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 118, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]

let tintScheme2 = Color.from('rgb',[100,0,100]).scheme('tint', {colors: 4, distance: 0.5})
// [
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 168, g: 0, b: 168, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 0, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 50, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Shade Scale

```ts
.scheme('shade',{
  length: number,   // REQUIRED, number of colors in scheme
  distance: number, // optional, 0-1, defaults to 1, how close to black scheme should reach
  round: boolean    // optional, defaults to true
})

// e.g.
let shadeScheme1 = Color.from('rgb',[255,0,255]).scheme('shade', {colors: 4})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 0, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 85, g: 0, b: 85, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
let shadeScheme2 = Color.from('rgb',[255,0,255]).scheme('shade', {colors: 4, distance: 0.5})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 212, g: 0, b: 212, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 0, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 0, b: 128, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Tint & Shade Scale

The total number of colors in the scheme will be `colors * 2 + 1`, including the original color.

Either include `distance` OR `distanceToWhite` and `distanceToBlack`. If you only include distance it will calculate distance to the nearest bound (black or white) and use that as measure for the other direction.

```ts
.scheme('tintshade',{
  colors: number,          // REQUIRED, number of colors in each direction from source color
  distance: number,        // optional, 0-1, defaults to 1 OR
  distanceToWhite: number, // optional, 0-1, defaults to 1
  distanceToBlack: number, // optional, 0-1, defaults to 1
  round: boolean           // optional, defaults to true
})

// e.g.
let scheme1 = Color.from('rgb',[100,0,100]).scheme('tintshade', {colors: 3})
// [
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 33, g: 0, b: 33, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 67, g: 0, b: 67, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 100, g: 0, b: 100, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 133, g: 0, b: 133, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 167, g: 0, b: 167, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 0, b: 200, a: 255, bitDepth: 8, max: 255 }
// ]
let scheme2 = Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3})
// [
//   rgb { r: 66, g: 24, b: 66, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 118, g: 42, b: 118, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 170, g: 60, b: 170, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 203, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
let scheme4 = Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3, distance: 0.5})
// [
//   rgb { r: 144, g: 51, b: 144, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 170, g: 60, b: 170, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 191, g: 74, b: 191, a: 255, bitDepth: 8, max: 255 }, 
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 209, g: 126, b: 209, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 227, g: 178, b: 227, a: 255, bitDepth: 8, max: 255 } 
// ]
let scheme5 = Color.from('rgb',[200,100,200]).scheme('tintshade', {
  colors: 3,
  distanceToWhite: 1,
  distanceToBlack: 1
})
// [
//   rgb { r: 0, g: 0, b: 0, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 74, g: 26, b: 74, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 148, g: 52, b: 148, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 200, g: 100, b: 200, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 218, g: 152, b: 218, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 237, g: 203, b: 237, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 255, g: 255, b: 255, a: 255, bitDepth: 8, max: 255 }
// ]
```

### Gradients

Generate an array of colors from color1 to color2. Methods available are `rgb` and `hsv`.

```ts
.scheme('gradient',{
  color2: colorType,  // REQUIRED, second color, of any type, to blend with
  colors: number,     // REQUIRED, number of colors to be returned, must be > 2
  method: string,     // optional, defaults to 'rgb'
  round: boolean      // optional, defaults to true
})

// e.g.
let gradient1 = Color.from('rgb',[255,0,255]).scheme('gradient',{
  with: Color.from('hex',0x00FF00),
  colors: 5
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 191, g: 64, b: 191, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 128, g: 128, b: 128, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 64, g: 191, b: 64, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]

let gradient1 = Color.from('rgb',[255,0,255]).scheme('gradient',{
  with: Color.from('hex','00ff00'),
  colors: 5,
  method: 'hsv'
})
// [
//   rgb { r: 255, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 64, g: 0, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 128, b: 255, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 191, a: 255, bitDepth: 8, max: 255 },
//   rgb { r: 0, g: 255, b: 0, a: 255, bitDepth: 8, max: 255 }
// ]
```

## Mathematics

The following are the formulae used in the conversion algorithms. For succinctness, consider all values normalized ∈ [0, 1] unless stated otherwise.

### Normalizing RGB

to achieve R,G,B ∈ [0, 1]

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/normalizing-xp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/normalizing-x.png)

### RGB to HSV

C references chroma

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-v.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-c.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-s.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-h.png)

### HSV to RGB

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-rgb-p.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-rgb-q.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-rgb-t.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-rgb-rgb.png)

<!--
(R,G,B) =
\begin{cases}
(V,V,V) & \text{ if } S = 0 \\ 
(V,t,p) & \text{ if } H < 1 \\
(q,V,p) & \text{ if } 1 < H \leq 2 \\
(p,V,t) & \text{ if } 2 < H \leq 3 \\
(p,q,V) & \text{ if } 3 < H \leq 4 \\
(t,p,V) & \text{ if } 4 < H \leq 5 \\
(V,p,q) & \text{ otherwise } \\
\end{cases}
-->

### RGB to HSL

C references chroma

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-v.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-c.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsl-l.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsl-s.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsl-h.png)

<!--
H=\begin{cases}
0 & \text{ if } C=0 \\ 
\frac{G - B}{C} & \text{ if } V=R \\ 
\frac{B - R}{C} + 2 & \text{ if } V=G \\ 
\frac{R - G}{C} + 4 & \text{ if } V=B \\ 
\end{cases}
-->

### HSL to RGB

C references chroma

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-c.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-x.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-r1g1b1.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-m.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-rgb.png)

<!--
(R_{1},G_{1},B_{1}) =
\begin{cases}
(0,0,0) & \text{ if } H \: \mathrm{undefined} \\ 
(C,x,0) & \text{ if } 0 < H \leq 1 \\
(x,C,0) & \text{ if } 1 < H \leq 2 \\
(0,C,x) & \text{ if } 2 < H \leq 3 \\
(0,x,C) & \text{ if } 3 < H \leq 4 \\
(x,0,C) & \text{ if } 4 < H \leq 5 \\
(C,0,x) & \text{ if } 5 < H \leq 6 \\
\end{cases}
-->

### RGB to HSI

C references chroma

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-v.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsv-c.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsi-h.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsi-i.png)

<!--
H=\begin{cases}
0 & \text{ if } C=0 \\ 
\frac{G - B}{C} \: \mathrm{ mod } \: 6 & \text{ if } V=R \\ 
\frac{B - R}{C} + 2 & \text{ if } V=G \\ 
\frac{R - G}{C} + 4 & \text{ if } V=B \\ 
\end{cases}

I=\begin{cases}
0 & \text{ if } C=0 \\ 
(R + G + B) \cdot \frac{1}{3} & \text{ otherwise }
\end{cases}
-->

### HSI to RGB

C references chroma

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsi-rgb-z.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsi-rgb-c.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsi-rgb-x.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-r1g1b1.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsi-rgb-m.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-rgb-rgb.png)

### RGB to HSP

Where P is perceived brightness. This algorithm is similar to the one Photoshop uses when converting images to greyscale.

If no values are passed, the default weight for P is as follows:

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-p.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-hsp.png)

<!--
\begin{align*}
P_{R} &= 0.299 \\ 
P_{G} &= 0.587 \\ 
P_{B} &= 0.114
\end{align*}

\begin{align*}
V &= max(R,G,B) \\ 
C &= V - min(R,G,B) \\
\:\\
H&=\begin{cases}
0 & \text{ if } C=0 \\ 
\frac{G - B}{C} & \text{ if } V=R \\ 
\frac{B - R}{C} + 2 & \text{ if } V=G \\ 
\frac{R - G}{C} + 4 & \text{ if } V=B \\
\end{cases} \\
\:\\
S &= \begin{cases}
0 & \text{ if } V=0 \\ 
\frac{V}{C} & \text{ otherwise }
\end{cases} \\
\:\\
P &= \sqrt{R^2 \cdot P_{R} + G^2 \cdot P_{G} + B^2 \cdot P_{B}} \\  
\end{align*}
-->

### HSP to RGB

Where P is perceived brightness. This algorithm is similar to the one Photoshop uses when converting images to greyscale.

If no values are passed, the default weight for P is as follows:

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-p.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-rgb-v.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-rgb-f.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-rgb-r.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-rgb-g.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsp-rgb-b.png)

<!--
\begin{align*}
H' &= \frac{H}{60} \\ 
S_{0} &= 1 - S \\
H_{0} &= \begin{cases}
H' & \text{ if } H' < 1 \\ 
-H'+2 & \text{ if } 1 \leq H' < 2 \\
H'-2 & \text{ if } 2 \leq H' < 3 \\
-H'+4 & \text{ if } 3 \leq H' < 4 \\
H'-4 & \text{ if } 4 \leq H' < 5 \\
-H'+6 & \text{ if } 5 \leq H' < 6 \\
\end{cases}
\end{align*}

\begin{align*}
f_{a}(x) &= \frac{x}{S_{0}} \\
f_{b}(x) &= x \cdot S_{0} \\
f_{c}(x,y) &= y + H_{0} \cdot (x - y) \\
f_{d}(x,y,z) &= \frac
{P}
{\sqrt{\frac{P_{x}}{S_{0}^2}}}
+ P_{y} \cdot
(1 + H_{0} + \frac{1}{S_{0}-1})^2
+ P_{z}\\
f_{e}(x,y) &= \sqrt{
\frac{P^2}
{P_{x} + P_{y} \cdot H_{0}^2}
}
\end{align*}


R = \begin{cases}
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{c}(G,B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{d}(R,B,G) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{a}(B,R,G) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{c}(B,G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{a}(G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
f_{e}(R,G) &
    \text{ if } S_{0} = 0 \text{ and } H' < 1 \\ 
f_{b}(G) &
    \text{ if } S_{0} = 0 \text{ and } 1 \leq H' < 2 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 4 \\
f_{b}(B) &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 5 \\
f_{e}(R,B) &
    \text{ if } S_{0} = 0 \text{ and } 5 \leq H' < 6 \\
\end{cases}

G = \begin{cases}
f_{c}(R,B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{a}(R) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{c}(B,R) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{d}(B,R,G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{d}(R,B,G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
f_{b}(R) &
    \text{ if } S_{0} = 0 \text{ and } H' < 1 \\ 
f_{e}(G,R) &
    \text{ if } S_{0} = 0 \text{ and } 1 \leq H' < 2 \\
f_{e}(R,G) &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 3 \\
f_{b}(B) &
    \text{ if } S_{0} = 0 \text{ and } 3 \leq H' < 4 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 6 \\
\end{cases}

B = \begin{cases}
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{d}(G,R,B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{c}(G,R) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{a}(R) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{a}(G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{b}(R,G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } H' < 2 \\ 
f_{b}(G) &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 3 \\
f_{e}(B,G) &
    \text{ if } S_{0} = 0 \text{ and } 3 \leq H' < 4 \\
f_{e}(B,R) &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 5 \\
f_{b}(R) &
    \text{ if } S_{0} = 0 \text{ and } 5 \leq H' < 6 \\
\end{cases}
-->

### HSV to HSL

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-hsl-l.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsv-hsl-s.png)

### HSL to HSV

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-hsv-v.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/hsl-hsv-s.png)

### RGB to CMYK

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-cmyk-kcmy.png)

<!--
\begin{align*}
K &= 1 - max(R,G,B)\\ 
C &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - R - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
M &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - G - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
Y &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - B - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
\end{align*}
-->

### CMYK to RGB

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cmyk-rgb-rgb.png)

### RGB to YIQ

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-yiq-yiq.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-yiq-in.png)

<!--
\begin{bmatrix}
Y\\ 
I\\ 
Q
\end{bmatrix} =
\begin{bmatrix}
0.299  &  0.587  &  0.114 \\
0.5959 & -0.2746 & -0.3213 \\
0.2115 & -0.5227 &  0.3112
\end{bmatrix}
\begin{bmatrix}
R\\ 
G\\ 
B
\end{bmatrix}

\begin{align*}
Y &\in [0,1]\\ 
I &\in [-0.5957,0.5957] \\ 
Q &\in [-0.5226,0.5226] \\
\text{or}&,\text{normalized} \\
Y &\in [0,255]\\ 
I &\in [-128,128] \\ 
Q &\in [-128,128] \\
\end{align}
-->

### YIQ to RGB

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/yiq-rgb-in.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/yiq-rgb-rgb.png)

<!--
\begin{bmatrix}
R\\ 
G\\ 
B
\end{bmatrix} =
\begin{bmatrix}
1 &  0.956 &  0.621 \\
1 & -0.272 & -0.647 \\
1 & -1.106 &  1.703
\end{bmatrix}
\begin{bmatrix}
Y\\ 
I\\ 
Q
\end{bmatrix}
-->

### RGB to XYZ

M = 3x3 RGB to XYZ transformation matrix based on color space and standard illuminant reference white. This transformation matrix is an inverse of the XYZ to RGB transformation matrix.

#### sRGB

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-srgb-xp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-xyz.png)

#### L*

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-ls.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-xyz.png)

<!--
\begin{align*}
\text{for } X &= (R,G,B) \\
X' &=
\begin{cases}
100 \cdot \frac{X}{\kappa} & \text{ if } X \leq 0.08 \\ 
(\frac{R + 0.16}{1.16})^3 & \text{ otherwise }
\end{cases}
\end{align*}
-->

#### Other color spaces

gamma (γ) based on target color space

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-gamma.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-xyz-xyz.png)

### XYZ to RGB

M = 3x3 XYZ to RGB transformation matrix based on color space and standard illuminant reference white.

#### sRGB

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-rpgpbp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-srgb.png)

#### L*

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-rpgpbp.png)


![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-ls.png)

<!--
\begin{align*}
\text{for } X &= (R,G,B) \\
X &=
\begin{cases}
X' \cdot \frac{\kappa}{100} & \text{ if } X' \leq \epsilon \\ 
1.16 \cdot {X'}^\frac{1}{3} - 0.16 & \text{ otherwise }
\end{cases}
\end{align*}
-->

#### Other color spaces

gamma (γ) based on target color space

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-rpgpbp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-rgb-gamma.png)

<!--
\begin{align*}
\text{for } X &= (R,G,B) \\
X &=
{X'}^\frac{1}{\gamma}
\end{align*}
-->

### XYZ to xyY

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-xyy.png)

If X = Y = Z = 0, x and y are set to the chromaticity coordinates of the reference white.

<!--
\begin{align*}
x &=
\begin{cases}
W_X & \text{ if } X = Y = Z = 0 \\ 
\frac{X}{X + Y + Z} & \text{ otherwise }
\end{cases}
 \\
y &=
\begin{cases}
W_Y & \text{ if } X = Y = Z = 0 \\ 
\frac{Y}{X + Y + Z} & \text{ otherwise }
\end{cases}
 \\
Y &= Y
\end{align*}
-->

### xyY to XYZ

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyy-xyz.png)

<!--
\begin{align*}
X &= \frac{x \cdot Y}{y} \\
Y &= Y \\
Z &= \frac{(1 - x - y) \cdot Y}{y}
\end{align*}
-->

### XYZ to L\*a\*b\*

W is a 1x3 reference white vector based on standard illuminant.

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-lab-p.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-lab-fn.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-lab-lab.png)

<!--
\begin{align*}
X' &= \frac{X}{W_{R}} \\
Y' &= \frac{Y}{W_{G}} \\
Z' &= \frac{Z}{W_{B}}
\end{align*}

f(n) = \begin{cases}
{n'}^\frac{1}{3} & \text{ if } n > \epsilon \\ 
\frac{\kappa \cdot n' + 16}{116} & \text{ otherwise }
\end{cases}

\begin{align*}
L^* &= 116 \cdot f(Y) - 16\\ 
a^* &= 500 \cdot (f(X) - f(Y))\\ 
b^* &= 200 \cdot (f(Y) - f(Z))
\end{align*}
-->

### L\*a\*b\* to XYZ

W is a 1x3 reference white vector based on standard illuminant.

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/lab-xyz-labp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/lab-xyz-xyzp.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/lab-xyz-xyz.png)

<!--
\begin{align*}
X' &=
\begin{cases}
a'^3 & \text{ if } a'^3 > \epsilon \\ 
\frac{116 \cdot a' - 16}{\kappa} & \text{ otherwise }
\end{cases}
\\ 
Y' &=
\begin{cases}
L'^3 & \text{ if } L^* > \kappa \cdot \epsilon \\ 
L^* \cdot \kappa & \text{ otherwise }
\end{cases}
\\ 
Z' &= 
\begin{cases}
b'^3 & \text{ if } b'^3 > \epsilon \\ 
\frac{116 \cdot b' - 16}{\kappa} & \text{ otherwise }
\end{cases}
\end{align*}

\begin{align*}
X &= X' \cdot W_{R} \\
Y &= Y' \cdot W_{G} \\
Z &= Z' \cdot W_{B}
\end{align*}
-->

### XYZ to L\*u\*v\*

W is a 1x3 reference white vector based on standard illuminant

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/xyz-luv.png)

<!--
\begin{align*}
Y' &= \frac{Y}{W_{G}} \\ 
\:\\
d &= X + 15Y + 3Z \\
\:\\
u' &= 
\begin{cases}
0 & \text{ if } d=0 \\ 
\frac{4X}{d} & \text{ otherwise }
\end{cases} \\
v' &= 
\begin{cases}
0 & \text{ if } d=0 \\ 
\frac{9Y}{d} & \text{ otherwise }
\end{cases} \\
\:\\
L^* &= 
\begin{cases}
116 \cdot {Y'}^\frac{1}{3} & \text{ if } Y' > \epsilon \\ 
Y' \cdot \kappa & \text{ otherwise }
\end{cases} \\
\:\\
u'_{r} &= \frac{4 \cdot W_{G}}{W_{R} + 15 \cdot W_{G} + 3 \cdot W_{B}} \\
v'_{r} &= \frac{9 \cdot W_{G}}{W_{R} + 15 \cdot W_{G} + 3 \cdot W_{B}} \\
\:\\
u^* &= L^* \cdot (u' - u'_{r}) \\
v^* &= L^* \cdot (v' - v'_{r})
\end{align*}
-->

### L\*u\*v\* to XYZ

W is a 1x3 reference white vector based on standard illuminant

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/cie-ek.png)

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/luv-xyz.png)

<!--
\begin{align*}
Y &=
\begin{cases}
(\frac{L^* + 16}{116})^{1/3} & \text{ if } L^* > \kappa \cdot \epsilon \\ 
\frac{L^*}{\kappa} & \text{ otherwise }
\end{cases}
\\ 
\:\\
u_{0} &= \frac{4 \cdot W_{R}}{W_{R} + 15 \cdot W_{G} + 3 \cdot W_{B}} \\
v_{0} &= \frac{9 \cdot W_{R}}{W_{R} + 15 \cdot W_{G} + 3 \cdot W_{B}} \\
\:\\
a &= \frac{1}{3} \cdot \frac{52 \cdot L^*}{u^* + 13 \cdot L^* \cdot u_{0}} - 1 \\
b &= -5Y \\
c &= -\frac{1}{3} \\
d &= Y \cdot \frac{39 \cdot L^*}{v^* + 13 \cdot L^* \cdot v_{0}} - 5 \\
\:\\
X &= \frac{d - b}{a - c} \\
Z &= X \cdot a + b
\end{align*}
-->

### RGB to YPbPr

Kb and Kr constants defined from target color space

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/rgb-ypbpr.png)

<!--
\begin{align*}
Kg &= 1 - Kb - Kr \\
\:\\
Y &= Kr \cdot R + Kg \cdot G + Kb \cdot B\\ 
Pb &= 0.5 \cdot \frac{B - Y}{1 - Kb}\\ 
Pr &= 0.5 \cdot \frac{R - Y}{1 - Kr}\\ 
\end{align*}
-->

### YPbPr to YCbCr

Scaling bounds given by conversion method / target space. Typical bounds might be 0-255 for all values for JPEG target or 16-235 for Y and 16-245 for Cb and Cr for Rec. 709 target.

### YCbCr to YPbPr

Y is scaled to 0-1, Cb and Cr are scaled such that Pb and Pr are between -0.5 and 0.5.

### YPbPr to RGB

Kb and Kr constants defined from target color space

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/ypbpr-rgb.png)

<!--
\begin{align*}
Kg &= 1 - Kb - Kr \\
\:\\
Pb_{0} &= (-1 \cdot \frac{Kb}{Kg} \cdot (2 - 2Kb)) \cdot Pb \\
Pr_{0} &= (-1 \cdot \frac{Kr}{Kg} \cdot (2 - 2Kr)) \cdot Pr \\
\:\\
R &= Y + (2 - 2Kr) \cdot Pr \\
G &= Y + Pb_{0} + Pr_{0} 
\\
B &= Y + (2 - 2Kb) \cdot Pb
\end{align*}
-->

### Temperature (Kelvin) to RGB

Where v is a tensor of XYZ color matching vectors for wavelengths in 5nm increments from 380nm to 780nm and T is the given temperature in Kelvin. Trapezoid integration is used to sum the XYZ values from a black body spectrum generated from the tensor v based on temperature. <sup>[[9]](#references)</sup>

In other words, a black body emission spectrum is generated for a given temperature, from which a summation of each XYZ set of values in the spectrum, normalized, gives an average XYZ, the mish-mash of wavelengths that we perceive as a single color. Then that XYZ color is simply converted to RGB.

I'm not 100% positive on my notation—f(v<sub>ki</sub>) is a function of each index of each vector in the tensor v.

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/kelvin-to-xyz.png)

C is the set of chromaticity coordinates for NTSC standard primaries. The associated coordinates given for white align with a D65 standard illuminant. <sup>[[9]](#references)</sup> <sup>[[10]](#references)</sup>

![](https://raw.githubusercontent.com/reiniiriarios/chromaticity-color-utilities/master/math/kelvin-xyz-to-rgb.png)

<!--
KELVIN TO XYZ

\begin{align*}
v &= \begin{bmatrix}\bar{X}_1\\\bar{Y}_1\\\bar{Z}_1\end{bmatrix}_1,
\begin{bmatrix}\bar{X}_2\\\bar{Y}_2\\\bar{Z}_2\end{bmatrix}_2
\cdots 
\begin{bmatrix}\bar{X}_n\\\bar{Y}_n\\\bar{Z}_n\end{bmatrix}_n
\\

\:\\
c &= \frac{1240}{8.617e^{-5}} \\

\:\\
\lambda &= 380 + 5k \\

f(v_k_i) &=
(3.74183e^{-16} \cdot \frac{\frac{1}{\lambda^5}}{e^{(c * T)} - 1})
 \cdot v_k_i \\

\begin{bmatrix}X'\\Y'\\Z'\end{bmatrix} &=
\sum^N_{k=1}
\frac{f(\vec{v_{k-1}}) + f(\vec{v_{k}})}{2}
\Delta \vec{v_k} \\

\begin{bmatrix}X\\Y\\Z\end{bmatrix} &=
\begin{bmatrix}X'\\Y'\\Z'\end{bmatrix} \cdot \frac{1}{max(X',Y',Z')}
\end{align*}

XYZ TO RGB

\begin{align*}
C &=
\begin{bmatrix}
X_R & X_G & X_B \\
Y_R & Y_G & Y_B \\
Z_R & Z_G & Z_B
\end{bmatrix}
=
\begin{bmatrix}
0.64 & 0.29 & 0.15 \\
0.33 & 0.60 & 0.06 \\
0.03 & 0.11 & 0.79
\end{bmatrix}

\\
\vec{p} &=
\begin{bmatrix}
R''\\G''\\B''
\end{bmatrix}
=
C
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix} \\

\vec{q} &=
\begin{bmatrix}
R'\\G'\\B'
\end{bmatrix}
=
min(max(p_i,0),1)\\
\gamma &= 0.8 \\
m &= max(1.0e^{-10},R',G',B') \\

\begin{bmatrix}
R\\G\\B
\end{bmatrix} &=
min(\frac{q_i}{m}^\gamma,1)
\:\\
\end{align*}

-->

## Compiling from Source

`git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git`

`cd chromaticity-color-utilities`

`npm install`

`tsc`

## To Do List

* Gamma adjustment modification
* Auto-gamma adjustment and conversion for rec709, rec2020, and jpeg to/from ypbpr
  * note to self: rec709 does gamma conversion before while rec2020 does gamma conversion after when converting to ypbpr (I think)
* Write more documentation wrt mathematics.
* Integrate my references better. :)
* Turn readme into a documentation mini-site, it's too loooooooong

## References

1. International Telecommunications Union. *Recommendation  ITU-R  BT.2020-2*.
"Parameter values for ultra-high definition television systems for productionand international programme exchange". (2015)
https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.2020-2-201510-I!!PDF-E.pdf

2. International Telecommunications Union. *Recommendation  ITU-R  BT.709-6*.
"Parameter values for the HDTV standards for production and international programme exchange". (2015)
https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.709-6-201506-I!!PDF-E.pdf

3. International Telecommunications Union. *Recommendation  ITU-R  BT.601-7*.
"Studio encoding parameters of digital television for standard 4:3and wide-screen 16:9 aspect ratios". (2011)
https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.601-7-201103-I!!PDF-E.pdf

4. International Commission on Illumination. *CIE 15: Technical Report: Colorimetry, 3rd edition*. (2004)
https://archive.org/details/gov.law.cie.15.2004

5. Bruce Lindbloom. "Computing RGB-to-XYZ and XYZ-to-RGB matrices".
http://www.brucelindbloom.com

6. Dan Bruton. "Approximate RGB values for Visible Wavelengths". (1996)
http://www.physics.sfasu.edu/astro/color/spectra.html

7. Darel Rex Finley. "HSP Color Model — Alternative to HSV (HSB) and HSL". (2006)
https://alienryderflex.com/hsp.html

8. Michael Stokes (Hewlett-Packard), Matthew Anderson (Microsoft), Srinivasan Chandrasekar (Microsoft), Ricardo Motta (Hewlett-Packard).
"A Standard Default Color Space for the Internet - sRGB". (1996)
https://www.w3.org/Graphics/Color/sRGB.html

9. William T. Bridgman, NASA; Dan Bruton, SFASU. "RGB Values for Hot Objects". (2000)
http://www.physics.sfasu.edu/astro/color/blackbodyc.txt

10. C. A. Bouman. "Digital Image Processing". (2021)
https://engineering.purdue.edu/~bouman/ece637/notes/pdf/ColorSpaces.pdf