---
layout: page
title: "Kelvin and RGB"
parent: Mathematics
nav_order: 16
use_math: true
---

# Kelvin and RGB
#### Color Temperature $\rightarrow$ Red, Green, Blue

Where v is a tensor of XYZ color matching vectors for wavelengths in 5nm increments from 380nm to 780nm and T is the given temperature in Kelvin. Trapezoid integration is used to sum the XYZ values from a black body spectrum generated from the tensor v based on temperature. <sup>[[9]](/chromaticity-color-utilities/references/)</sup>

In other words, a black body emission spectrum is generated for a given temperature, from which a summation of each XYZ set of values in the spectrum, normalized, gives an average XYZ, the mish-mash of wavelengths that we perceive as a single color. Then that XYZ color is simply converted to RGB.

I'm not 100% positive on my notation—f(v<sub>ki</sub>) is a function of each index of each vector in the tensor v.

$$
\begin{align*}
v &= \begin{bmatrix}\bar{X}_1\\\bar{Y}_1\\\bar{Z}_1\end{bmatrix}_1,
\begin{bmatrix}\bar{X}_2\\\bar{Y}_2\\\bar{Z}_2\end{bmatrix}_2
\cdots 
\begin{bmatrix}\bar{X}_n\\\bar{Y}_n\\\bar{Z}_n\end{bmatrix}_n
\\

\:\\
c &= \frac{1240}{8.617e^{-5}} \\

\:\\
\lambda &= 380 + 5k \\

f({v_k}_i) &=
(3.74183e^{-16} \cdot \frac{\frac{1}{\lambda^5}}{e^{(c * T)} - 1})
 \cdot {v_k}_i \\
\:\\
\begin{bmatrix}X'\\Y'\\Z'\end{bmatrix} &=
\sum^N_{k=1}
\frac{f(\vec{v_{k-1}}) + f(\vec{v_{k}})}{2}
\Delta \vec{v_k} \\
\:\\
\begin{bmatrix}X\\Y\\Z\end{bmatrix} &=
\begin{bmatrix}X'\\Y'\\Z'\end{bmatrix} \cdot \frac{1}{max(X',Y',Z')}
\end{align*}
$$

C is the set of chromaticity coordinates for NTSC standard primaries. The associated coordinates given for white align with a D65 standard illuminant. <sup>[[9]](/chromaticity-color-utilities/references/)</sup> <sup>[[10]](/chromaticity-color-utilities/references/)</sup>

$$
\begin{align*}
C &=
\begin{bmatrix}
X_R & X_G & X_B \\
Y_R & Y_G & Y_B \\
Z_R & Z_G & Z_B
\end{bmatrix}
=
\begin{bmatrix}
0.64 & 0.29 & 0.15 \\
0.33 & 0.60 & 0.06 \\
0.03 & 0.11 & 0.79
\end{bmatrix}\\
\:\\

\vec{p} &=
\begin{bmatrix}
R''\\G''\\B''
\end{bmatrix}
=
C
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix} \\
\:\\

\vec{q} &=
\begin{bmatrix}
R'\\G'\\B'
\end{bmatrix}
=
min(max(p_i,0),1)\\
\:\\
\gamma &= 0.8 \\
\:\\
m &= max(1.0e^{-10},R',G',B') \\
\:\\
\begin{bmatrix}
R\\G\\B
\end{bmatrix} &=
min(\frac{q_i}{m}^\gamma,1)
\end{align*}
$$
