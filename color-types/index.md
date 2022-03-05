---
layout: page
title: Color Types and Conversions
permalink: /color-types/
nav_order: 3
has_children: true
---

# Color Types and Conversions

For most of the examples, the same color is used (magenta / 0xFF00FF) to create the color.

Alpha is optional when available. If not defined, it will default to the maximum value for the given bit depth. When converting to a space that does not support alpha, it is ignored. If converting back, alpha will be set to full opacity.

Types (that is, the type argument) are case-insensitive and including a (for alpha) is synonymous with not including it. i.e. `rgb`, `RGB`, `rgba`, and `RGBA` are all synonymous.

