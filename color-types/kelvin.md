---
layout: page
title: "Kelvin: Color Temperature"
parent: Color Types and Conversions
nav_order: 18
---

# Kelvin: Color Temperature

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


