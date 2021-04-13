---
layout: page
title: "RGB and YPbPr"
parent: Mathematics
nav_order: 13
use_math: true
---

# RGB and YPbPr
#### Red, Green, Blue $\rightleftarrows$ Luma and Sync, Blue/Luma Variance, Red/Luma Variance

Kb and Kr constants defined from target color space. This module does not currently have reference values for these.

$$
Kg = 1 - Kb - Kr
$$

## RGB to YPbPr

$$
\begin{align*}
Y &= Kr \cdot R + Kg \cdot G + Kb \cdot B\\ 
Pb &= 0.5 \cdot \frac{B - Y}{1 - Kb}\\ 
Pr &= 0.5 \cdot \frac{R - Y}{1 - Kr}\\ 
\end{align*}
$$

## YPbPr to RGB

$$
\begin{align*}
Pb_{0} &= (-\frac{Kb}{Kg} \cdot (2 - 2Kb)) \cdot Pb \\
Pr_{0} &= (-\frac{Kr}{Kg} \cdot (2 - 2Kr)) \cdot Pr \\
\:\\
R &= Y + (2 - 2Kr) \cdot Pr \\
G &= Y + Pb_{0} + Pr_{0} 
\\
B &= Y + (2 - 2Kb) \cdot Pb
\end{align*}
$$
