---
layout: page
title: "Wavelengths of Light"
parent: Color Types and Conversions
nav_order: 17
---

# Wavelengths of light
#### Nanometers

This is a one-way approximation and is hugely perceptual. There is no `.to('nm')` method option.

```ts
Color.from('nm', wavelength)

// e.g.
let color1 = Color.from('nm',600).to('rgb')
// rgb { r: 255, g: 190, b: 0, a: 255, bitDepth: 8, max: 255 }
```


