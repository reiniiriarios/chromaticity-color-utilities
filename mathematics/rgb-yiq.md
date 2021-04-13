---
layout: page
title: "RGB and YIQ"
parent: Mathematics
nav_order: 7
use_math: true
---

# RGB and YIQ
#### Red, Green, Blue $\rightleftarrows$ Luma, In-Phase, Quadrature

## RGB to YIQ

$$
\begin{align*}
\begin{bmatrix}
Y \\
I \\
Q
\end{bmatrix} &=
\begin{bmatrix}
0.299  &  0.587  &  0.114 \\
0.5959 & -0.2746 & -0.3213 \\
0.2115 & -0.5227 &  0.3112
\end{bmatrix}
\begin{bmatrix}
R \\
G \\
B
\end{bmatrix} \\
\:\\
Y &\in [0,1]\\ 
I &\in [-0.5957,0.5957] \\ 
Q &\in [-0.5226,0.5226] \\
\:\\
\text{or}&,\text{ normalized} \\
\:\\
Y &\in [0,255]\\ 
I &\in [-128,128] \\ 
Q &\in [-128,128] \\
\end{align*}
$$

## YIQ to RGB

$$
\begin{align*}
Y &\in [0,1]\\ 
I &\in [-0.5957,0.5957] \\ 
Q &\in [-0.5226,0.5226] \\
\:\\
\begin{bmatrix}R\\G\\B\end{bmatrix} &=
\begin{bmatrix}
1 &  0.956 &  0.621 \\
1 & -0.272 & -0.647 \\
1 & -1.106 &  1.703
\end{bmatrix}
\begin{bmatrix}Y\\I\\Q\end{bmatrix}
\end{align*}
$$
