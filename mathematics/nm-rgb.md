---
layout: page
title: "NM and RGB"
parent: Mathematics
nav_order: 15
use_math: true
---

# NM and RGB
#### Wavelength $\rightarrow$ Red, Green, Blue

$$
\begin{align*}
R' &= \begin{cases}
-\frac{\lambda - 440}{440 - 380} & 380 \leq \lambda < 440 \\
\frac{\lambda - 510}{580 - 510} & 510 \leq \lambda < 580 \\
1 & 580 \leq \lambda < 781 \\
0 & \text{ otherwise }
\end{cases} \\
\:\\
G' &= \begin{cases}
\frac{\lambda - 440}{490 - 440} & 440 \leq \lambda < 490 \\
1 & 510 \leq \lambda < 580 \\
-\frac{\lambda - 645}{645 - 580} & 580 \leq \lambda < 645 \\
0 & \text{ otherwise }
\end{cases} \\
\:\\
B' &= \begin{cases}
1 & 380 \leq \lambda < 490 \\
0 & \text{ otherwise }
\end{cases} \\
\:\\
x &= \begin{cases}
0.3 + 0.7 \cdot \frac{\lambda - 380}{420 - 380} & 380 \leq \lambda < 420 \\
1 & 420 \leq \lambda < 701 \\
0.3 + 0.7 \cdot \frac{780 - \lambda}{780 - 700} & 701 \leq \lambda < 781 \\
0 & \text{ otherwise }
\end{cases} \\
\:\\
(R,G,B) &= (R'^x,G'^x,B'^x)
\end{align*}
$$
