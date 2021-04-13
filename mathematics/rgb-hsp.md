---
layout: page
title: "RGB and HSP"
parent: Mathematics
nav_order: 4
use_math: true
---

# RGB and HSP
#### Red, Green, Blue $\rightleftarrows$ Hue, Saturation, Perceived Brightness

## RGB to HSP

Where P is perceived brightness. P<sub>R</sub>, P<sub>G</sub>, and P<sub>B</sub> are weights that can be adjusted as you will, such that P<sub>R</sub> + P<sub>G</sub> + P<sub>B</sub>= 1

If no P<sub>i</sub> values are passed to the method, the default weight for P is as follows:

$$
\begin{align*}
P_{R} &= 0.299 \\ 
P_{G} &= 0.587 \\ 
P_{B} &= 0.114
\end{align*}
$$

This algorithm is similar to the one Photoshop uses when converting images to greyscale.

$$
\begin{align*}
V &= max(R,G,B) \\ 
C &= V - min(R,G,B) \\
\:\\
H&=\begin{cases}
0 & \text{ if } C=0 \\ 
\frac{G - B}{C} & \text{ if } V=R \\ 
\frac{B - R}{C} + 2 & \text{ if } V=G \\ 
\frac{R - G}{C} + 4 & \text{ if } V=B \\
\end{cases} \\
\:\\
S &= \begin{cases}
0 & \text{ if } V=0 \\ 
\frac{V}{C} & \text{ otherwise }
\end{cases} \\
\:\\
P &= \sqrt{R^2 \cdot P_{R} + G^2 \cdot P_{G} + B^2 \cdot P_{B}} \\  
\end{align*}
$$

## HSP to RGB

$$
\begin{align*}
H' &= \frac{H}{60} \\ 
S_{0} &= 1 - S \\
H_{0} &= \begin{cases}
H' & \text{ if } H' < 1 \\ 
-H'+2 & \text{ if } 1 \leq H' < 2 \\
H'-2 & \text{ if } 2 \leq H' < 3 \\
-H'+4 & \text{ if } 3 \leq H' < 4 \\
H'-4 & \text{ if } 4 \leq H' < 5 \\
-H'+6 & \text{ if } 5 \leq H' < 6 \\
\end{cases} \\
\:\\
f_{a}(x) &= \frac{x}{S_{0}} \\
f_{b}(x) &= x \cdot S_{0} \\
f_{c}(x,y) &= y + H_{0} \cdot (x - y) \\
f_{d}(x,y,z) &= \frac
{P}
{\sqrt{\frac{P_{x}}{S_{0}^2}}}
+ P_{y} \cdot
(1 + H_{0} + \frac{1}{S_{0}-1})^2
+ P_{z}\\
f_{e}(x,y) &= \sqrt{
\frac{P^2}
{P_{x} + P_{y} \cdot H_{0}^2}
} \\
\:\\
R &= \begin{cases}
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{c}(G,B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{d}(R,B,G) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{a}(B,R,G) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{c}(B,G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{a}(G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
f_{e}(R,G) &
    \text{ if } S_{0} = 0 \text{ and } H' < 1 \\ 
f_{b}(G) &
    \text{ if } S_{0} = 0 \text{ and } 1 \leq H' < 2 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 4 \\
f_{b}(B) &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 5 \\
f_{e}(R,B) &
    \text{ if } S_{0} = 0 \text{ and } 5 \leq H' < 6 \\
\end{cases} \\
\:\\
G &= \begin{cases}
f_{c}(R,B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{a}(R) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{c}(B,R) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{d}(B,R,G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{d}(R,B,G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
f_{b}(R) &
    \text{ if } S_{0} = 0 \text{ and } H' < 1 \\ 
f_{e}(G,R) &
    \text{ if } S_{0} = 0 \text{ and } 1 \leq H' < 2 \\
f_{e}(R,G) &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 3 \\
f_{b}(B) &
    \text{ if } S_{0} = 0 \text{ and } 3 \leq H' < 4 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 6 \\
\end{cases} \\
\:\\
B &= \begin{cases}
f_{a}(B) &
    \text{ if } S_{0} > 0 \text{ and } H' < 1 \\ 
f_{d}(G,R,B) &
    \text{ if } S_{0} > 0 \text{ and } 1 \leq H' < 2 \\
f_{c}(G,R) &
    \text{ if } S_{0} > 0 \text{ and } 2 \leq H' < 3 \\
f_{a}(R) &
    \text{ if } S_{0} > 0 \text{ and } 3 \leq H' < 4 \\
f_{a}(G) &
    \text{ if } S_{0} > 0 \text{ and } 4 \leq H' < 5 \\
f_{b}(R,G) &
    \text{ if } S_{0} > 0 \text{ and } 5 \leq H' < 6 \\
0 &
    \text{ if } S_{0} = 0 \text{ and } H' < 2 \\ 
f_{b}(G) &
    \text{ if } S_{0} = 0 \text{ and } 2 \leq H' < 3 \\
f_{e}(B,G) &
    \text{ if } S_{0} = 0 \text{ and } 3 \leq H' < 4 \\
f_{e}(B,R) &
    \text{ if } S_{0} = 0 \text{ and } 4 \leq H' < 5 \\
f_{b}(R) &
    \text{ if } S_{0} = 0 \text{ and } 5 \leq H' < 6 \\
\end{cases}
\end{align*}
$$
