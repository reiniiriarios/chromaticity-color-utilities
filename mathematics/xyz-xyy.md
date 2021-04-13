---
layout: page
title: "XYZ and xyY"
parent: Mathematics
nav_order: 12
use_math: true
---

# XYZ and xyY
#### Tristimulous Values $\rightleftarrows$ Chromaticity

## XYZ to xyY

If X = Y = Z = 0, x and y are set to the chromaticity coordinates of the reference white.

$$
\begin{align*}
x &=
\begin{cases}
W_X & \text{ if } X = Y = Z = 0 \\ 
\frac{X}{X + Y + Z} & \text{ otherwise }
\end{cases}
 \\
y &=
\begin{cases}
W_Y & \text{ if } X = Y = Z = 0 \\ 
\frac{Y}{X + Y + Z} & \text{ otherwise }
\end{cases}
 \\
Y &= Y
\end{align*}
$$

## xyZ to XYZ

$$
\begin{align*}
X &= \begin{cases}
0 & \text{ if } y=0 \\
\frac{x \cdot Y}{y} & \text{ otherwise }
\end{cases}\\

Y &= Y \\

Z &= \begin{cases}
0 & \text{ if } y=0 \\
\frac{(1 - x - y) \cdot Y}{y} & \text{ otherwise }
\end{cases}
\end{align*}
$$
