---
layout: page
title: "XYZ and L*u*v*"
parent: Mathematics
nav_order: 10
use_math: true
---

# XYZ and CIE L\*u\*v\*
#### Tristimulous Values $\rightleftarrows$ Perceptual Lightness, u\*, v\*

W is a 1x3 reference white vector of a [standard illuminant](/color-spaces-standard-illuminants/). The κ and ϵ constants are given by CIE standards used to calculate values above or below the junction point of the companding functions below. Before 2004, approximations were used such that κ = 903.3 and ϵ = 0.008856.

$$
\begin{align*}
\epsilon &= \frac{24}{116}^3 \\
\kappa &= \frac{116}{12}^3
\end{align*}
$$

## XYZ to L\*u\*v\*

$$
\begin{align*}
Y' &= \frac{Y}{W_{Y}} \\ 
\:\\
d &= X + 15Y + 3Z \\
\:\\
u' &= 
\begin{cases}
0 & \text{ if } d=0 \\ 
\frac{4X}{d} & \text{ otherwise }
\end{cases} \\
v' &= 
\begin{cases}
0 & \text{ if } d=0 \\ 
\frac{9Y}{d} & \text{ otherwise }
\end{cases} \\
\:\\
L^* &= 
\begin{cases}
116 \cdot {Y'}^\frac{1}{3} & \text{ if } Y' > \epsilon \\ 
Y' \cdot \kappa & \text{ otherwise }
\end{cases} \\
\:\\
u'_{r} &= \frac{4 \cdot W_{Y}}{W_{X} + 15 \cdot W_{Y} + 3 \cdot W_{Z}} \\
v'_{r} &= \frac{9 \cdot W_{Y}}{W_{X} + 15 \cdot W_{Y} + 3 \cdot W_{Z}} \\
\:\\
u^* &= L^* \cdot (u' - u'_{r}) \\
v^* &= L^* \cdot (v' - v'_{r}) \\
\:\\
L^* &= min(max(L^*,0)1)
\end{align*}
$$

## L\*a\*b\* to XYZ

$$
\begin{align*}
Y &=
\begin{cases}
(\frac{L^* + 16}{116})^{1/3} & \text{ if } L^* > \kappa \cdot \epsilon \\ 
\frac{L^*}{\kappa} & \text{ otherwise }
\end{cases}
\\ 
\:\\
u_{0} &= \frac{4 \cdot W_{X}}{W_{X} + 15 \cdot W_{Y} + 3 \cdot W_{Z}} \\
v_{0} &= \frac{9 \cdot W_{X}}{W_{X} + 15 \cdot W_{Y} + 3 \cdot W_{Z}} \\
\:\\
a &= \frac{1}{3} \cdot \frac{52 \cdot L^*}{u^* + 13 \cdot L^* \cdot u_{0}} - 1 \\
b &= -5Y \\
c &= -\frac{1}{3} \\
d &= Y \cdot \frac{39 \cdot L^*}{v^* + 13 \cdot L^* \cdot v_{0}} - 5 \\
\:\\
X &= \frac{d - b}{a - c} \\
Z &= X \cdot a + b
\end{align*}
$$
