---
layout: page
title: "RGB and CMYK"
parent: Mathematics
nav_order: 6
use_math: true
---

# RGB and CMYK
#### Red, Green, Blue $\rightleftarrows$ Cyan, Magenta, Yellow, Black

This conversion is purely mathematical. Support for color spaces with regards to CMYK is a long-term goal.

## RGB to CMYK

$$
\begin{align*}
K &= 1 - max(R,G,B)\\ 
C &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - R - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
M &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - G - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
Y &=
\begin{cases}
0 & \text{ if } K=1 \\ 
\frac{1 - B - K}{1 - K} & \text{ otherwise } 
\end{cases}
\\ 
\end{align*}
$$

## CMYK to RGB

$$
\begin{align*}
R &= (1 - C) \cdot (1 - K) \\
G &= (1 - M) \cdot (1 - K) \\
B &= (1 - Y) \cdot (1 - K)
\end{align*}
$$
