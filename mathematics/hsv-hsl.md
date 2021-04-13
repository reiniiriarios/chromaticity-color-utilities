---
layout: page
title: "HSV and HSL"
parent: Mathematics
nav_order: 5
use_math: true
---

# HSV and HSL
#### Hue, Saturation, Value $\rightleftarrows$ Hue, Saturation, Lightness

## HSV to HSL

$$
\begin{align*}
L &= V \cdot \frac{1 - S}{2}
\:\\
S &= \begin{cases}
0 & \text{ if } L = 0 \text{ or } L = 1 \\
\frac{V-L}{min(L,1-L)} & \text{ otherwise }
\end{cases} \\
\end{align*}
$$

## HSL to HSV

$$
\begin{align*}
V &= L \cdot S \cdot min(L, 1-L) \\
\:\\
S &= \begin{cases}
0 & \text{ if } V=0 \\
2 \cdot (1 - \frac{L}{V}) & \text{ otherwise }
\end{cases} \\
\end{align*}
$$
