---
layout: page
title: "XYZ and L*a*b*"
parent: Mathematics
nav_order: 9
use_math: true
---

# XYZ and CIE L\*a\*b\*
#### Tristimulous Values $\rightleftarrows$ Perceptual Lightness, Red/Green Variance, Blue/Yellow Variance

W is a 1x3 reference white vector of a [standard illuminant](/color-spaces-standard-illuminants/). The κ and ϵ constants are given by CIE standards used to calculate values above or below the junction point of the companding functions below. Before 2004, approximations were used such that κ = 903.3 and ϵ = 0.008856.

$$
\begin{align*}
\epsilon &= \frac{24}{116}^3 \\
\kappa &= \frac{116}{12}^3
\end{align*}
$$

## XYZ to L\*a\*b\*

$$
\begin{align*}
X' &= \frac{X}{W_X} \\
Y' &= \frac{Y}{W_Y} \\
Z' &= \frac{Z}{W_Z} \\
\:\\
f(n) &= \begin{cases}
n'^\frac{1}{3} & \text{ if } n > \epsilon \\
\frac{\kappa \cdot n' + 16}{116} & \text{ otherwise }
\end{cases} \\
\:\\
L^* &= 116 \cdot f(Y) - 16 \\
a^* &= 500 \cdot (f(X) - f(Y)) \\
b^* &= 200 \cdot (f(Y) - f(Z)) \\
\:\\
L^* &= min(max(L^*,0)1)
\end{align*}
$$

## L\*a\*b\* to XYZ

$$
\begin{align*}
L' &= \frac{L^* + 16}{116} \\
a' &= \frac{a^*}{500} + L' \\
b' &= L' - \frac{b^*}{200} \\
\:\\
X' &= \begin{cases}
a'^3 & \text{ if } a'^3 > \epsilon \\
\frac{116 \cdot a' - 16}{\kappa} & \text{ otherwise }
\end{cases}\\
Y' &= \begin{cases}
L'^3 & \text{ if } L^* > \kappa \cdot \epsilon \\
L^* \cdot \kappa & \text{ otherwise }
\end{cases}\\
Z' &= \begin{cases}
b'^3 & \text{ if } b'^3 > \epsilon \\
\frac{116 \cdot b' - 16}{\kappa} & \text{ otherwise }
\end{cases} \\
\:\\
X &= X' \cdot W_X \\
Y &= Y' \cdot W_Y \\
Z &= Z' \cdot W_Z
\end{align*}
$$
