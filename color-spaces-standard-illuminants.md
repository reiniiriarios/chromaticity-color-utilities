---
layout: page
title: Spaces and Std Illuminants
nav_order: 9
---

# Color Spaces and Standard Illuminants

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


