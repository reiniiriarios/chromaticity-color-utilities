---
layout: page
title: "RGB and HSV"
parent: Mathematics
nav_order: 1
use_math: true
---

# RGB and HSV
#### Red, Green, Blue $\rightleftarrows$ Hue, Saturation, Value

## RGB to HSV

C references chroma.

$$
\begin{align*}
V &= max(R,G,B) \\
\:\\
C &= V - min(R,G,B) \\
\:\\
S &= \begin{cases}
0 & \text{ if } V = 0 \\
\frac{C}{V} & \text{ otherwise }
\end{cases} \\
\:\\
H &= \begin{cases}
0 & \text{ if } V = 0 \\
\frac{G - B}{C} & \text{ if } V = R \\
\frac{B - R}{C} & \text{ if } V = G \\
\frac{R - G}{C} & \text{ if } V = B \\
\end{cases}
\end{align*}
$$

## HSV to RGB

$$
\begin{align*}
p &= V \cdot (1 - S) \\
q &= V \cdot (1 - S \cdot H) \\
t &= V \cdot (1 - S \cdot (1 - H)) \\
\:\\
(R,G,B) &=
\begin{cases}
(V,V,V) & \text{ if } S = 0 \\
(V,t,p) & \text{ if } H < 1 \\
(q,V,p) & \text{ if } 1 < H \leq 2 \\
(p,V,t) & \text{ if } 2 < H \leq 3 \\
(p,q,V) & \text{ if } 3 < H \leq 4 \\
(t,p,V) & \text{ if } 4 < H \leq 5 \\
(V,p,q) & \text{ otherwise } \\
\end{cases}
\end{align*}
$$
