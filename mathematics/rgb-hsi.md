---
layout: page
title: 'RGB and HSI'
parent: Mathematics
nav_order: 3
use_math: true
---

# RGB and HSI

#### Red, Green, Blue $\rightleftarrows$ Hue, Saturation, Intensity

## RGB to HSI

$$
\begin{align*}
I &= \frac{R + G + B}{3} \\
\\
S &= \begin{cases}
1 - \frac{min(R, G, B)}{I} & \text{ if } I > 0 \\
0 & \text{ otherwise } \\
\end{cases} \\
\\
H &= \begin{cases}
\mathrm{atan2}(\frac{\sqrt{3}}{2}(G - B), \frac{1}{2}(2R - G - B))
& \text{ if } I > 0 \\
0 & \text{ otherwise }
\end{cases}
\end{align*}
$$

$\mathrm{atan2}$ determines the counterclockwise angle in radians between the positive X axis and the point (x,y). The output range is $[-\pi,\pi]$.

$$
\mathrm{atan2}(y,x) = \begin{cases}
\mathrm{atan}(\frac{y}{x}) & \text{ if } x > 0 \\
\mathrm{atan}(\frac{y}{x}) + \pi & \text{ if } x < 0 \text{ and } y \geq 0 \\
\mathrm{atan}(\frac{y}{x}) - \pi & \text{ if } x < 0 \text{ and } y < 0 \\
\frac{\pi}{2} & \text{ if } x = 0 \text{ and } y > 0 \\
-\frac{\pi}{2} & \text{ if } x = 0 \text{ and } y < 0 \\
\text{undefined} & \text{ if } x = 0 \text{ and } y = 0 
\end{cases}
$$

## HSI to RGB

$$
\begin{align*}
f(a) &= \frac{\cos((H-a)\frac{\pi}{180})}{\cos(60 - (H - a))\frac{\pi}{180}} \\
\\
R &= \begin{cases}
I \cdot (1 + S \cdot f(0)) & \text{ if } 0 \leq H < 120 \\
I \cdot (1 - S) & \text{ if } 120 \leq H < 240 \\
3I - G - B & \text{ if } 240 \leq H < 360
\end{cases} \\
\\
G &= \begin{cases}
3I - R - B & \text{ if } 0 \leq H < 120 \\
I \cdot (1 + S \cdot f(120)) & \text{ if } 120 \leq H < 240 \\
I \cdot (1 - S) & \text{ if } 240 \leq H < 360
\end{cases} \\
\\
B &= \begin{cases}
I \cdot (1 - S) & \text{ if } 0 \leq H < 120 \\
3I - R - G & \text{ if } 120 \leq H < 240 \\
I \cdot (1 + S \cdot f(240)) & \text{ if } 240 \leq H < 360
\end{cases} \\
\\
\end{align*}
$$
