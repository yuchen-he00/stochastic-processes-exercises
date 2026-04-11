??? success "来自 朱泽木 的解答"

    (1)

    算法：跑 $T = \frac 1 {2\eps^2} \log \frac 2 \delta$ 次，令 $\hat p_i = \frac 1 T \sum_{t=1}^T \1{X_t = i}$，即出现次数的频率。

    分析：$\hat p_1$ 是 $T$ 个独立的伯努利随机变量的平均值。由 Hoeffding 不等式有：

    $$
    \begin{aligned}
    & \Pr{\abs{\hat p_i - p_i} \ge \eps} = \Pr{\abs{T \hat p_i - T p_i} \ge T \eps} \cr
    & \le 2 \exp\left(- \frac {2 (T \eps)^2}{T}\right) = 2 \exp\left(- \log \frac 2 \delta\right) = \delta.
    \end{aligned}
    $$

    (2)

    设 $d_i = p_i - \hat p_i$，则 $d_1 + d_2 + \cdots + d_n = 0$。不妨设 $d_1 \dots d_m < 0, d_{m+1} \dots d_n \ge 0$

    $$
    \begin{aligned}
    & \dTV(p, \hat p) = \frac 1 2 \sum_{i=1}^n \abs{d_i} \cr
    & = \frac 1 2(-  \sum_{i=1}^m d_i + \sum_{i=m+1}^n d_i) = \sum_{i=m+1}^n d_i \cr
    & = \max_{S \subseteq [n]} \sum_{j \in S} d_j = \max_{S \subseteq [n]} \sum_{j \in S} (p_j - \hat p_j).
    \end{aligned}
    $$

    (3)

    $\hat p(S)$ 可以看成 $T$ 个独立的、均值为 $p(S)$ 的伯努利随机变量的平均值。由 Hoeffding 不等式有：

    $$
    \begin{aligned}
    & \Pr{p(S) - \hat p(S) \ge \eps} = \Pr{T p(S) - T \hat p(S) \ge T \eps} \cr
    & \le \exp\left(- \frac {2 (T \eps)^2}{T}\right) = \exp(-2 \eps^2 T).
    \end{aligned}
    $$

    即 $c = 2$。

    (4)

    $$
    \begin{aligned}
    & \Pr{\dTV(p, \hat p) \ge \eps} = \Pr{\max_{S \subseteq [n]} \sum_{j \in S} (p_j - \hat p_j) \ge \eps} \cr
    & \le \sum_{S \subseteq [n]} \Pr{p(S) - \hat p(S) \ge \eps} \le 2^n \exp(-2 \eps^2 T) = \exp(-2 \eps^2 T + \ln 2 \cdot n).
    \end{aligned}
    $$

    当 $T = O\left(\frac 1 {\eps^2} \left(n + \log \frac 1 \delta\right)\right)$ 时带入可得：$\Pr{\dTV(p, \hat p) \ge \eps} \le \delta$。即此时以 $1-\delta$ 的概率 $\dTV(p, \hat p) < \eps$。
