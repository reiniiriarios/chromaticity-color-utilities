---
layout: page
title: Color Schemes
nav_order: 6
has_children: true
---

# Color Scheme Generation

Schemes can be generated from any color type. All methods return an array of colors, each the same as the input type. (If calling method on a color of type `hsl`, all values of the returned array will be of type `hsl`.)

```ts
.scheme(type: string, args?: {})
```
