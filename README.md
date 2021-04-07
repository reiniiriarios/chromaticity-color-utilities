# chromaticity-color-utilities
 Color utilities for Node.js

## Install

NOT YET PUBLISHED

`npm install --save chromaticity-color-utilities`

## Usage

```js
const Color = require('chromaticity-color-utilities')

let color1 = Color.from('rgb',[255,128,0]).to('hsv')
// hsv { h: 34, s: 100, v: 88, a: 100 }

let color2 = Color.from('hex','ff3201').to('rec709rgb', { bitRate: 10 })
// rec709rgb { r: 940, g: 298, b: 67, a: 940, bitDepth: 10, max: 1023 }

let color3 = Color.from('rgb',[255,0,0]).modify('blend', { with: Color.from('rgb',[0,255,0])})
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

### RGB : Red, Green, Blue

All values are between 0 and `((2 ** bitDepth) - 1)`. With a default bit depth of 8, values are within 0-255. A color with a bit depth of 16 will have values ranging from 0-65535.

** 8-bit color is sometimes referred to as 24-bit or 32-bit (8 bits per channel, with 32-bit including an alpha channel). This package uses the more correct implementation of 32-bit meaning 32 bits per channel, and so generally most use cases would fall between 8 and 16 bit color depth.

** A special note: Adobe uses 15+1 bit depth for 16-bit color, where the last bit is simply added to the first 15 bits, hence the scale being 

```ts
Color.from('rgb',[r, g, b, a?],{
  bitDepth: number // optional, default = 8
})

.to('rgb',{
  bitDepth: number // optional, default = 8
  round: boolean   // optional, default = true
})

//e.g.
let color1 = Color.from('rgb',[255, 0, 255])
let color3 = color2.to('rgb')

let color4 = Color.from('rgb',[1023, 0, 1023], { bitDepth: 10 })
```

### HSV : Hue, Saturation, Value

Hue value is between 0 and 360. Saturation, value, and alpha are between 0 and 100 (as in, percent).

```ts
Color.from('hsv',[h, s, v, a?])

.to('hsv',{
  round: boolean // optional, default = true
})

//e.g.
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

//e.g.
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

//e.g.
let color1 = Color.from('hsi',[300, 100, 67])
let color3 = color2.to('hsi')
```

### CMYK : Cyan, Magenta, Yellow, Black

All values are between 0 and 100 (as in, percent).

** Calculations do not take pigment conversion into account and should not be used to reference printed colors.

```ts
Color.from('cmyk',[c, m, y, k])

.to('cmyk',{
  round: boolean // optional, default = true
})

//e.g.
let color1 = Color.from('cmyk',[0, 100, 0, 0])
let color3 = color2.to('cmyk')
```

### YIQ : NTSC Color, Y = luma, I = in-phase, Q = quadrature

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
  normalize: boolean // optional, default = true
  round: boolean     // optional, default = true (ignored/false if not normalized)
})

//e.g.
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

Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('xyz', [x, y, z], {
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

.to('xyz',{
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

//e.g.
let color1 = Color.from('xyz',[0.5928939, 0.2848479, 0.969638])
let color3 = color2.to('xyz')

let color4 = Color.from('xyz', [0.7589799, 0.3743439, 0.7643198], {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

### xyY : CIE xyY

Derived from XYZ, x and y are chromaticity values while Y is the tristimulous value of a color.

Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('xyy', [x, y, Y], {
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

.to('xyy',{
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

//e.g.
let color1 = Color.from('xyy',[0.3209377411185291, 0.1541902211986945, 0.2848479])
let color3 = color2.to('xyy')

let color4 = Color.from('xyz', [
  0.39995913879719036,
  0.1972677588141419,
  0.3743439
], {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

### Lab : CIELAB / L\*a\*b\*

Derived from XYZ.

* L* = lightness
* a* = position between red and green (negative indicates green, positive red)
* b* = position between blue and yellow (negative indicates blue, positive yellow)

Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('lab', [l, a, b], {
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

.to('lab',{
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

//e.g.
let color1 = Color.from('lab',[
  60.32421212836874,
  98.23431188800397,
  -60.82489220885006
])
let color3 = color2.to('lab')

let color4 = Color.from('lab', [
  67.60166164169028,
  101.30709261827131,
  -5.488771094285516
], {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

### Luv : CIELUV / L\*u\*v\*

Derived from XYZ. L\* is identical to L\* in L\*a\*b\*

Available Color Spaces and Stardard Illuminants below.

```ts
Color.from('luv', [l, u, v], {
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

.to('luv',{
  colorSpace: string     // optional, default = 'srgb'
  referenceWhite: string // optional, default = 'd65'
})

//e.g.
let color1 = Color.from('luv',[
  60.32421212836874,
  84.07139572483507,
  -108.68333851910185
])
let color3 = color2.to('luv')

let color4 = Color.from('luv', [
  67.60166164169028,
  124.0201282170453,
  -87.3117870588082
], {
  colorSpace: 'adobergb',
  referenceWhite: 'd50'
})
```

### YPbPr : Analog video component signals

Also written Y'PbPr or YP<sub>B</sub>P<sub>R</sub>.

* Y' = luma and sync (brightness/luminance and syncrhonization)
* Pb = difference between blue and luma (B - Y)
* Pr = difference between red and luma (R - Y)

YPbPr conversions require Kb and Kr constants with the exception of converting to YCbCr. These values are not yet included in this package.

* Kb = constant defined from target color space, such that Kb + Kr + Kg = 1
* Kr = constant defined from target color space, such that Kb + Kr + Kg = 1

```ts
Color.from('ypbpr', [y, pb, pr])

.to('ypbpr',{
  kb: number // REQUIRED
  kr: number // REQUIRED
})

// YCbCr conversion
.to('ycbcr',{
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr
})

//e.g.
let color1 = Color.from('ypbpr',[
  0.2848,
  0.3854278939426601,
  0.45415290830581667
])
let color3 = color2.to('ypbpr',{
  kb: 0.0722 // Rec709
  kr: 0.2126 // Rec709
})
let color4 = color1.to('ycbcr')
let color5 = color1.to('ycbcr',{
  yLower: 0,
  yUpper: 255,
  cLower: 0,
  cUpper, 255
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

```ts
Color.from('ycbcr', [y, cb, cr])

.to('ycbcr',{
  kb: number // REQUIRED
  kr: number // REQUIRED
})

// YPbPr conversion
.to('ypbpr',{
  yLower: number, // optional, default = 16,  lower bounds of Y'
  yUpper: number, // optional, default = 235, upper bounds of Y'
  cLower: number, // optional, default = 16,  lower bounds of Cb and Cr
  cUpper: number  // optional, default = 240, upper bounds of Cb and Cr
})

//e.g.
let color1 = Color.from('ycbcr', [73, 226, 243])
let color3 = color2.to('ycbcr',{
  kb: 0.0722 // Rec709
  kr: 0.2126 // Rec709
})
let color4 = color1.to('ypbpr')
let color5 = color1.to('ypbpr',{
  yLower: 0,
  yUpper: 255,
  cLower: 0,
  cUpper, 255
})
```

## Color Spaces and Standard Illuminants

For conversion to and from XYZ, xyY, L\*a\*b\*, and L\*u\*v\*, the following color spaces and standard illuminants have XYZ transformation matrices available:

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

Color spaces and standard illuminant arguments are case-insensitive. Color space argument ignores any character not alphanumeric. Some common misspellings / words left out are also taken into account. (`'PAL / SECAM'` is equivalent to `'palsecamrgb'`.)

## Mathematics

todo

## Compiling from Source

`git clone https://github.com/reiniiriarios/chromaticity-color-utilities.git`

`cd chromaticity-color-utilities`

`npm install`

`tsc`