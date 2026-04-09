??? success "来自 朱泽木 的解答"

    (1)

    在考虑一个固定的样本集 $S_m = \left\lbrace i_1, \dots, i_m \right\rbrace$，以及在该样本集下函数 $C$ 的取值已经确定（即 $C_{i_1} = j_1, \dots, C_{i_m} = j_m$）的情况下，此时训练出来的 $h$ 是一个固定的函数。

    此时有：
    $$
    \begin{aligned}
    & \E{R(h) \mid S_m = \left\lbrace i_1, \dots, i_m \right\rbrace, C_{i_1} = j_1, \dots, C_{i_m} = j_m} \cr
    & = \Pr{h(X) \neq C(X) \mid S_m = \left\lbrace i_1, \dots, i_m \right\rbrace, C_{i_1} = j_1, \dots, C_{i_m} = j_m} \cr
    & \ge \Pr{h(X) \neq C(X), X \notin S_m \mid S_m = \left\lbrace i_1, \dots, i_m \right\rbrace, C_{i_1} = j_1, \dots, C_{i_m} = j_m} \cr
    & \ge \frac 1 {2m} \times m \times \frac 1 2 = \frac 1 4
    \end{aligned}
    $$

    因此，根据全概率公式有：$\E{R(\mathcal{A}(\cdot, S_m))} \ge \frac 1 4$。
    
    此外，根据全概率公式有：$\E{R(\mathcal{A}(\cdot, S_m))} = \sum_c \Pr{C = c} \E{R(\mathcal{A}(\cdot, S_m)) \mid C = c} \ge \frac 1 4$，故至少存在一个确定的 $c$ 使得 $\E{R(\mathcal{A}(\cdot, S_m)) \mid C = c} \ge \frac 1 4$，即在该函数下 $\E{R(\mathcal{A}(\cdot, S_m))} \ge \frac 1 4$。

    (2)

    由 (1) 可知：存在函数 $C$ 使得 $\E{R(\mathcal{A}(\cdot, S_m))} \ge \frac 1 4$。

    已知 $R(\mathcal{A}(\cdot, S_m)) \le 1$。有：
    
    $$
    \begin{aligned}
    & \frac 1 4 \le \E{R(\mathcal{A}(\cdot, S_m))} \cr
    & \le \Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 8} + \frac 1 8 \Pr{R(\mathcal{A}(\cdot, S_m)) < \frac 1 8} \cr
    & = \frac 1 8 + \frac 7 8 \Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 8}
    \end{aligned}
    $$

    故 $\Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 8} \ge \frac 1 7 \ge \frac 1 8$。

??? note "来自 朱泽木 的想法"

    第二问直接这么放缩放的太松了：只用到了期望的值，等号取到当且仅当取值只有 $1$ 和 $\frac 1 8$，忽略了在一个随机的 $C$ 的情况下，未知的 $m$ 个样本点预测的结果（可以认为）完全就是随机的。所以我觉得可以有更好的方法：

    直接用第一问的思路：计算在 $C$ 为随机函数的情况下的 $\E{\Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 4}}$（这里的期望是对样本 $C$ 取）。
    
    那么用前面的方法可以得到 $\E{\Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 4}} \ge \frac 1 2$（同样考虑先固定 $S_m$ 以及对应的函数，没见过的服从二项分布）。根据全概率公式可知存在一个确定的 $C$ 使得 $\Pr{R(\mathcal{A}(\cdot, S_m)) \ge \frac 1 4} \ge \frac 1 2$。
