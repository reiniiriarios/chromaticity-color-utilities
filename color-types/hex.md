---
layout: page
title: "Hexidecimal"
parent: Color Types and Conversions
nav_order: 2
---

# Hexidecimal

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


