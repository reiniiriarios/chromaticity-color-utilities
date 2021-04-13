---
layout: page
title: "RGB and XYZ"
parent: Mathematics
nav_order: 8
use_math: true
---

# RGB and CIE XYZ
#### Red, Green, Blue $\rightleftarrows$ Tristimulous Values

sRGB and L* companding (inverse companding to XYZ) are such that values below a certain value are at a different curve than those above. This prevents lower values coming too close to zero. sRGB is, more-or-less, at a gamma of ≈2.2, but you'll notice 2.4 is actually used for the upper portion of the curve.

The κ and ϵ constants are given by CIE standards used to calculate values above or below the junction point of the two sets of L\* companding functions below. Before 2004, approximations were used such that κ = 903.3 and ϵ = 0.008856.

$$
\begin{align*}
\epsilon &= \frac{24}{116}^3 \\
\kappa &= \frac{116}{12}^3
\end{align*}
$$

## RGB to XYZ

### Inverse sRGB Companding

$$
f(n) = \begin{cases}
\frac{n}{12.92} & \text{ if } n \leq 0.04045 \\
(\frac{n+0.055}{1.055})^{2.4} & \text{ otherwise }
\end{cases} 
$$

### Inverse L\* Companding

$$
f(n) = \begin{cases}
100 \cdot \frac{n}{\kappa} & \text{ if } n \leq 0.08 \\
(\frac{n+0.16}{1.16})^3 & \text{ otherwise }
\end{cases} \\
$$

### Inverse Gamma Companding

$$
f(x) = V^\gamma
$$

### Linear RGB to XYZ

M = 3x3 RGB to XYZ transformation matrix based on color space and standard illuminant reference white. This transformation matrix is an inverse of the XYZ to RGB transformation matrix.

$$
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix} = M \cdot
\begin{bmatrix}
f(R)\\f(G)\\f(B)
\end{bmatrix}
$$

## XYZ to RGB

### XYZ to Linear RGB

M = 3x3 XYZ to RGB transformation matrix based on color space and standard illuminant reference white.

$$
\begin{bmatrix}
R'\\G'\\B'
\end{bmatrix} = M \cdot
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

### sRGB Companding

$$
\begin{align*}
f(n) &= \begin{cases}
12.92 \cdot n' & \text{ if } n' \leq 0.0031308 \\
(1.055 \cdot n')^\frac{1}{2.4} - 0.055 & \text{ otherwise }
\end{cases} \\
\:\\
(R,G,B) &= (f(R),f(G),f(B))
\end{align*}
$$

### L* Companding

$$
\begin{align*}
f(n) &= \begin{cases}
n' \cdot \frac{\kappa}{100} & \text{ if } n \leq \epsilon \\
1.16 \cdot n'^{\frac{1}{3}}-0.16 & \text{ otherwise }
\end{cases} \\
\:\\
(R,G,B) &= (f(R),f(G),f(B))
\end{align*}
$$

### Gamma Companding

$$
\begin{align*}
n &= n'^{\frac{1}{\gamma}} \\
\:\\
(R,G,B) &= (f(R),f(G),f(B))
\end{align*}
$$
