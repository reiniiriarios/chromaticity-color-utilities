---
layout: page
title: 'Hexidecimal'
parent: Color Types and Conversions
nav_order: 2
---

# Hexidecimal

May use string or numerical value. Strings are case-insensitive. Short form or long form may be used. # ignored if present.

```ts
Color.from('hex', hex: string | number)

.to('hex')
```

## JavaScript

```js
const Color = require('chromaticity-color-utilities')

const color1 = Color.from('hex', 'ff00ff')
const color2 = Color.from('hex', '#FF00FF')
const color3 = Color.from('hex', 0xff00ff)

const color4 = color2.to('hex')
```

## TypeScript

```ts
import Color, { colorTypes } from 'chromaticity-color-utilities'

const c: colorTypes.hex = Color.from('hex', 'ff00ff')
```
