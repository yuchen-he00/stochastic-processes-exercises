# 第一章 独立随机变量 (Independent Random Variables)

## 练习 (Exercises) {: .ex-counter style="counter-reset: chapter 1 question 0;" }

### 再探奖券收集问题 (Coupon Collector Revisited)
=== "中文"
    在正文中，我们用切比雪夫不等式分析了奖券收集问题，得到了 $\Pr{Y\ge n H_n+t}\le \frac{2n^2}{t^2}$，其中 $n$ 是奖券类型总数， $Y$ 是收集齐全 $n$ 种奖券所需的抽奖次数。现在我们用另一种方法来计算这个问题的集中性。
    
    1. 请用联合界分析存在一种奖券类型在前 $n H_n + t$ 次抽奖中都没有被抽到的概率。并据此证明
    	$$
    	\Pr{Y\ge n H_n+t}\le e^{-t/n}.
    	$$
    2. 请根据上一问结论，计算在 $n=100$时，开多少包可以保证以至少 $99\%$ 的概率收集全一套？把你的界和切比雪夫不等式得到的界进行比较。
    
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_coupon_collector.md"

### 最大负载期望上界 (Upper Bound on Expected Maximum Load)
=== "中文"
    在正文中我们证明了，当 $n$ 个球随机投入 $n$ 个箱子中时，最大负载 $X = \max_{i\in[n]} X_i$ 满足：
    $$
    \Pr{X \ge \frac{6 \log n}{\log \log n}} \le \frac{1}{n}.
    $$
    请利用这一尾部概率的结论，以及 $0\le X \le n$ 的事实，证明最大负载的期望满足 $\E{X} = O\tp{\frac{\log n}{\log\log n}}$。
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_max_load.md"

### 精确计数内存下界 (Memory Lower Bound for Exact Counting)
=== "中文"
    在流模型计算流长度的问题中，我们提到，任何试图精确计算数据流长度 $m$ 的确定性算法，如果内存不足，则必然会出错。
    
    1. 请使用鸽巢原理，严格证明：任何状态数少于 $N+1$ 的确定性算法，必定无法对所有长度不超过 $N$ 的数据流给出精确的计数。这说明，任何保证精确计数的确定性算法至少需要 $\lceil \log_2(N+1) \rceil$ 比特的内存。
    2. 如果不限制是确定性算法，而是允许使用随机算法，但依然要求算法在任何输入下都必须零误差输出流长度 $m$，它能否比确定性算法消耗更少的峰值内存空间？请证明你的结论。
    
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_exactness.md"

### 多数人的智慧 (Wisdom of the Majority)
=== "中文"
    假设你有一个预测股市明天涨跌的算法。该算法每次独立进行预测时，都会以 $\frac{3}{4}$ 的概率给出正确的建议。为了提升预测的准确率，你决定让该算法独立运行 $N$ 次，并采用多数表决（majority vote）的方式得出最终的投资决策。请证明：对于任意给定的允许出错的概率上限 $\delta \in (0, 1)$，只要运行次数满足
    $$
    N \ge 8 \ln\tp{\frac{1}{\delta}},
    $$
    这种多数表决策略就能以至少 $1 - \delta$ 的概率给出正确的投资决策。
    
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_majority_vote.md"

### 高斯分布的集中性 (Concentration of Gaussian Distribution)
=== "中文"
    设 $X \sim \+N(0, 1)$ 为标准高斯随机变量。我们来探究其尾部概率的精确上下界。

    1. 请证明对于任意 $x > 0$，有如下积分不等式成立：
    	$$
    	(x^{-1} - x^{-3})e^{-x^2/2} \le \int_x^{+\infty} e^{-y^2/2} \dd y \le x^{-1} e^{-x^2/2}.
    	$$
    2. 利用上述结论，证明标准高斯分布的尾部概率 $\Pr{\abs{X} \ge t}$ 的上下界（$t>0$），并说明当 $t$ 足够大时，该概率为 $\Theta\tp{t^{-1} \exp(-t^2/2)}$。进一步地，证明当 $t \to +\infty$ 时，有如下渐近等价关系：
    	$$
    	\Pr{\abs{X} \ge t} \sim \sqrt{\frac{2}{\pi}} t^{-1} \exp(-t^2/2).
    	$$
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_gaussian_concentration.md"

### 纠缠的极值 (Entangled Extremes)
=== "中文"
    设 $X_1, X_2, \dots, X_n$ 为 $n$ 个标准高斯分布的随机变量，即对所有 $i \in [n]$ 有 $X_i \sim \+N(0, 1)$。这里我们不要求它们是相互独立的。令 $Z = \max_{i \in [n]} X_i$ 表示它们的最大值。请证明：
    $$
    \E{Z} \le \sqrt{2 \log n}.
    $$
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_entangled_extremes.md"

### 次高斯分布初探 (Introduction to Sub-Gaussian Distributions)
=== "中文"
    如果一个均值为 $0$ 的随机变量 $X$，其矩生成函数满足，对于任意 $\lambda \in \bb R$，有 $\E{e^{\lambda X}} \le \exp\tp{\frac{\lambda^2 \sigma^2}{2}}$，我们称 $X$ 是参数为 $\sigma^2$ 的次高斯随机变量。

    1. **（集中性）**请模仿正文中切尔诺夫界的证明，证明如果 $X$ 是均值为 $0$、参数为 $\sigma^2$ 的次高斯随机变量，则对于任意 $t>0$，有 $\Pr{X \ge t} \le \exp\tp{-\frac{t^2}{2\sigma^2}}$。
    2. **（可加性）**证明：若 $X_1$ 和 $X_2$ 是相互独立的次高斯随机变量，均值为 $0$ 且参数分别为 $\sigma_1^2$ 和 $\sigma_2^2$，那么它们的和 $X_1 + X_2$ 也是次高斯随机变量，并且其参数为 $\sigma_1^2 + \sigma_2^2$。
    3. **（有界变量即次高斯）**请结合正文中证明过的霍夫丁引理，说明：如果随机变量 $X$ 满足 $\E{X} = 0$ 且 $X\in[a, b]$，那么 $X$ 是一个参数为 $\sigma^2 = \frac{(b-a)^2}{4}$ 的次高斯随机变量。
    
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_sub_gaussian_intro.md"

### 次指数分布初探 (Introduction to Sub-Exponential Distributions)
=== "中文"
    在前面的练习中我们探讨了次高斯分布。然而，许多常见的随机变量（例如高斯随机变量的平方，即卡方分布）的尾部比高斯分布更厚，它们并不满足次高斯分布的条件。为此，我们引入次指数分布的概念。

    我们称一个随机变量 $X$ 为参数为 $(\nu, \alpha)$ 的次指数（sub-exponential）随机变量（其中 $\nu, \alpha > 0$），如果其中心化后的矩生成函数满足：对于任意 $\abs{\lambda} \le \frac{1}{\alpha}$，有
    $$
    \E{e^{\lambda (X - \E{X})}} \le \exp\tp{\frac{\lambda^2 \nu}{2}}.
    $$
    1. **（集中性）**请证明：如果 $X$ 是参数为 $(\nu, \alpha)$ 的次指数随机变量，那么对于任意 $t \ge 0$，有
    	$$
    	\Pr{X - \E{X} \ge t} \le
        \left\lbrace\begin{aligned}
    &\exp\tp{-\frac{t^2}{2\nu}}, && \text{若 } t \in \stp{0, \frac{\nu}{\alpha}}; \\
    &\exp\tp{-\frac{t}{2\alpha}}, && \text{若 } t \in \tp{\frac{\nu}{\alpha}, \infty}.
    \end{aligned}\right.
    	$$
    2. **（可加性）**假设 $X_1, \dots, X_N$ 是相互独立的随机变量，且每个 $X_i$ 都是参数为 $(\nu_i, \alpha_i)$ 的次指数随机变量。证明：对于任意常数 $w_1, \dots, w_N \in \bb R$，加权和 $\sum_{i=1}^N w_i X_i$ 也是次指数随机变量，且其参数为 $\tp{\sum_{i=1}^N w_i^2 \nu_i, \max_{i \in [N]} \abs{w_i} \alpha_i}$。
    3. **（广义伯恩斯坦不等式）**结合前两问的结论，证明广义伯恩斯坦不等式（generalized Bernstein inequality）：在上一问的条件下，记 $S_N = \sum_{i=1}^N w_i X_i$，对于任意 $t \ge 0$，有
    	$$
    	\Pr{S_N - \E{S_N} \ge t} \le
        \left\lbrace\begin{aligned}
    &\exp\tp{-\frac{t^2}{2\sum_{i=1}^N w_i^2 \nu_i}}, && \text{若 } t \in \stp{0, \frac{\sum_{i=1}^N w_i^2 \nu_i}{\max_{i \in [N]} \abs{w_i} \alpha_i}}; \\
    &\exp\tp{-\frac{t}{2\max_{i \in [N]} \abs{w_i} \alpha_i}}, && \text{其他情况.}
    \end{aligned}\right.
    	$$
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_sub_exponential_intro.md"

### 不相关变量集中不等式 (Concentration Inequality for Uncorrelated Variables)
=== "中文"
    在正文中，我们探讨了独立随机变量之和的集中不等式。现在我们放宽条件，看看如果随机变量仅仅是不相关的，能得到怎样的集中性。设 $X_1, X_2, \dots$ 是一系列中心化（即 $\E{X_i} = 0$）且两两不相关的随机变量，即对于任意 $i \neq j$，有 $\E{X_i X_j} = \E{X_i}\E{X_j}$。
    1. 假设存在常数 $C < +\infty$ 使得对所有 $i$ 都有 $\Var{X_i} \le C$。请证明对于任意 $t > 0$，有：
    	$$
    	\Pr{\abs{\frac{1}{n} \sum_{i=1}^n X_i} \ge t} \le \frac{C}{n t^2}.
    	$$
    2. 利用上述结论，证明 $L^2$ 弱大数定律：若 $X_1, X_2, \dots$ 是期望均为 $\mu$、方差一致有界（$\sup_i \Var{X_i} < +\infty$）且两两不相关的随机变量，则其经验均值依概率收敛到 $\mu$，即 $\frac{1}{n} \sum_{i=1}^n X_i \xrightarrow{p} \mu$。
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_weaker_concentration.md"

### 两两独立下的集中性反例 (Counterexample to Concentration under Pairwise Independence)
=== "中文"
    上一题表明，仅仅是不相关的条件，就足以让我们得到多项式级别的集中不等式。那么，两两独立且有界的随机变量能否像完全独立那样，带来指数级的集中性呢？本题将给出一个反例。

    设 $U = (U_1, \dots, U_\ell)$ 是均匀分布在 $\left\{0, 1\right\}^\ell$ 上的随机向量。令 $n = 2^\ell - 1$。对于任意非零向量 $v \in \left\{0, 1\right\}^\ell \setminus \left\{\*0\right\}$，定义随机变量 $X_v = \inner{U}{v} \pmod 2$。
    1. 请证明：这 $n$ 个随机变量 $X_v$ 均服从 $\left\{0, 1\right\}$ 上的均匀分布，且它们是两两独立的。
    2. 请证明：对于任何由这 $n$ 个随机变量 $\left\{X_v\right\}_{v \neq \*0}$ 生成的事件 $A$（即 $A \in \sigma\tp{\left\{X_v\right\}_{v \neq \*0}}$），其发生的概率 $\Pr{A}$ 要么是 $0$，要么至少是 $\frac{1}{n+1}$。

    注：这说明，由两两独立随机变量构成的系统，不能保证指数尾部概率的衰减。
    
=== "English"

--8<-- "solutions/chapter_01/exercises/exercise_so_close_yet_far.md"

---
