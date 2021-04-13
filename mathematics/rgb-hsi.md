---
layout: page
title: "RGB and HSI"
parent: Mathematics
nav_order: 3
use_math: true
---

# RGB and HSI
#### Red, Green, Blue $\rightleftarrows$ Hue, Saturation, Intensity

## RGB to HSI

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
0 & \text{ if } C=0 \\ 
\frac{G - B}{C} \: \text{ mod } \: 6 & \text{ if } V=R \\ 
\frac{B - R}{C} + 2 & \text{ if } V=G \\ 
\frac{R - G}{C} + 4 & \text{ if } V=B \\ 
\end{cases}\\
\:\\
I &= \begin{cases}
0 & \text{ if } C=0 \\ 
(R + G + B) \cdot \frac{1}{3} & \text{ otherwise }
\end{cases}
\end{align*}
$$

## HSI to RGB

$$
\begin{align*}
z &= 1 - |H \text{ mod } 2 - 1| \\
\:\\
C &= \frac{(3 \cdot I \cdot S}{1 + z} \\
\:\\
x &= C \cdot z \\
\:\\
(R_{1},G_{1},B_{1}) &=
\begin{cases}
(0,0,0) & \text{ if } H \: \mathrm{undefined} \\ 
(C,x,0) & \text{ if } 0 < H \leq 1 \\
(x,C,0) & \text{ if } 1 < H \leq 2 \\
(0,C,x) & \text{ if } 2 < H \leq 3 \\
(0,x,C) & \text{ if } 3 < H \leq 4 \\
(x,0,C) & \text{ if } 4 < H \leq 5 \\
(C,0,x) & \text{ if } 5 < H \leq 6 \\
\end{cases} \\
\:\\
m &= I \cdot (1 - S) \\
\:\\
(R,G,B) &= (R_1 + m, G_1 + m, B_1 + m)
\end{align*}
$$
