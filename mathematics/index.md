---
layout: page
title: Mathematics
nav_order: 10
has_children: true
use_math: true
---

# Mathematics

The following are the formulae used in the conversion algorithms. For succinctness, consider primary values normalized ∈ [0, 1] (and hue ∈ [0, 360]) unless stated otherwise.

## Normalizing RGB

to achieve R,G,B ∈ [0, 1]

$$
X' = \frac{X}{2^{\:bit\: depth} - 1}
\\ \: \\
X = X' \cdot 2^{\:bit\: depth} - 1
$$
