# 第一章 独立随机变量 (Independent Random Variables)

## 练习 (Exercises) {: .ex-counter style="counter-reset: chapter 1 question 0;" }

### 再探奖券收集问题 (Coupon Collector Revisited)
=== "中文"
    在正文中，我们用切比雪夫不等式分析了奖券收集问题，得到了
    $$
    \Pr\left(Y \ge nH_n + t\right) \le \frac{2n^2}{t^2},
    $$
    其中 $n$ 是奖券类型总数，$Y$ 是收集齐全 $n$ 种奖券所需的抽奖次数。现在我们用另一种方法来计算这个问题的集中性。
    
    1. 请用联合界分析“存在一种奖券类型在前 $nH_n+t$ 次抽奖中都没有被抽到”的概率，并据此证明
    	$$
    	\Pr\left(Y \ge nH_n+t\right) \le e^{-t/n}.
    	$$
    2. 请根据上一问结论，计算在 $n=100$ 时，开多少包可以保证以至少 $99\%$ 的概率收集全一套？并把你的界与切比雪夫不等式得到的界进行比较。
    
=== "English"
    In the main text, we analyzed the coupon collector problem using Chebyshev's inequality and obtained
    $$
    \Pr\left(Y \ge nH_n + t\right) \le \frac{2n^2}{t^2},
    $$
    where $n$ is the total number of coupon types, and $Y$ is the number of draws needed to collect all $n$ types. Now use a different method to study concentration.
    
    1. Use the union bound to analyze the probability that at least one coupon type is never drawn in the first $nH_n+t$ draws, and deduce
    	$$
    	\Pr\left(Y \ge nH_n+t\right) \le e^{-t/n}.
    	$$
    2. Based on the bound above, when $n=100$, how many packs are needed to guarantee at least $99\%$ probability of collecting a full set? Compare your bound with the one from Chebyshev's inequality.
    
--8<-- "solutions/chapter_01/exercises/exercise_coupon_collector.md"

### 最大负载期望上界 (Upper Bound on Expected Maximum Load)
=== "中文"
    在正文中我们证明了，当 $n$ 个球随机投入 $n$ 个箱子时，最大负载
    $$
    X = \max_{i\in[n]} X_i
    $$
    满足
    $$
    \Pr\left(X \ge \frac{6\log n}{\log\log n}\right) \le \frac{1}{n}.
    $$
    请利用这一尾部概率结论，以及 $0\le X\le n$，证明
    $$
    \mathbb{E}[X] = O\left(\frac{\log n}{\log\log n}\right).
    $$
=== "English"
    In the main text we proved that when $n$ balls are thrown independently and uniformly into $n$ bins, the maximum load
    $$
    X = \max_{i\in[n]} X_i
    $$
    satisfies
    $$
    \Pr\left(X \ge \frac{6\log n}{\log\log n}\right) \le \frac{1}{n}.
    $$
    Use this tail bound together with $0\le X\le n$ to prove
    $$
    \mathbb{E}[X] = O\left(\frac{\log n}{\log\log n}\right).
    $$
--8<-- "solutions/chapter_01/exercises/exercise_max_load.md"

### 精确的代价 (Cost of Exactness)
=== "中文"
    在流模型计算流长度的问题中，我们提到：任何试图精确计算数据流长度 $m$ 的确定性算法，如果内存不足，则必然出错。
    
    1. 请使用鸽巢原理，严格证明：任何状态数少于 $N+1$ 的确定性算法，必定无法对所有长度不超过 $N$ 的数据流给出精确计数。这说明任何保证精确计数的确定性算法至少需要 $\lceil \log_2(N+1)\rceil$ 比特内存。
    2. 如果允许随机算法，但仍要求在任何输入下都必须零误差输出流长度 $m$，它能否比确定性算法消耗更少的峰值内存空间？请证明你的结论。
    
=== "English"
    In the streaming model for counting stream length, we mentioned that any deterministic algorithm attempting to compute the exact length $m$ must fail if memory is insufficient.
    
    1. Use the pigeonhole principle to rigorously prove: any deterministic algorithm with fewer than $N+1$ states cannot output exact counts for all streams of length at most $N$. Conclude that any deterministic algorithm guaranteeing exact counting needs at least $\lceil\log_2(N+1)\rceil$ bits of memory.
    2. If randomized algorithms are allowed, but we still require zero error on every input, can peak memory be smaller than for deterministic algorithms? Prove your conclusion.
    
--8<-- "solutions/chapter_01/exercises/exercise_exactness.md"

### 多数人的智慧 (Wisdom of the Majority)
=== "中文"
    假设你有一个预测股市涨跌的算法。该算法每次独立预测时，都以 $\tfrac34$ 的概率给出正确建议。为提升准确率，你决定让该算法独立运行 $N$ 次，并采用多数表决（majority vote）。
    
    请证明：对任意给定的允许出错概率上限 $\delta\in(0,1)$，只要
    $$
    N \ge 8\ln\left(\frac{1}{\delta}\right),
    $$
    这种多数表决策略就能以至少 $1-\delta$ 的概率给出正确投资决策。
    
=== "English"
    Suppose you have an algorithm that predicts whether the stock market goes up or down tomorrow. Each independent prediction is correct with probability $\tfrac34$. To improve accuracy, you run the algorithm independently $N$ times and use majority vote.
    
    Prove that for any target error level $\delta\in(0,1)$, if
    $$
    N \ge 8\ln\left(\frac{1}{\delta}\right),
    $$
    then majority vote outputs the correct decision with probability at least $1-\delta$.
    
--8<-- "solutions/chapter_01/exercises/exercise_majority_vote.md"

### 高斯分布的集中性 (Concentration of Gaussian Distribution)
=== "中文"
    设 $X\sim\mathcal{N}(0,1)$ 为标准高斯随机变量。
    
    1. 请证明：对任意 $x>0$，有
    	$$
    	\left(x^{-1}-x^{-3}\right)e^{-x^2/2}
    	\le \int_x^{+\infty} e^{-y^2/2}\,\mathrm{d}y
    	\le x^{-1}e^{-x^2/2}.
    	$$
    2. 利用上述结论，证明标准高斯尾部概率 $\Pr(|X|\ge t)$（$t>0$）的上下界，并说明当 $t$ 足够大时，
    	$$
    	\Pr(|X|\ge t)=\Theta\left(t^{-1}e^{-t^2/2}\right).
    	$$
    	进一步证明当 $t\to+\infty$ 时，
    	$$
    	\Pr(|X|\ge t)\sim \sqrt{\frac{2}{\pi}}\,t^{-1}e^{-t^2/2}.
    	$$
=== "English"
    Let $X\sim\mathcal{N}(0,1)$ be a standard Gaussian random variable.
    
    1. Prove that for any $x>0$,
    	$$
    	\left(x^{-1}-x^{-3}\right)e^{-x^2/2}
    	\le \int_x^{+\infty} e^{-y^2/2}\,\mathrm{d}y
    	\le x^{-1}e^{-x^2/2}.
    	$$
    2. Use the above to derive upper and lower bounds for $\Pr(|X|\ge t)$ ($t>0$), and explain why for large $t$,
    	$$
    	\Pr(|X|\ge t)=\Theta\left(t^{-1}e^{-t^2/2}\right).
    	$$
    	Further prove that as $t\to+\infty$,
    	$$
    	\Pr(|X|\ge t)\sim \sqrt{\frac{2}{\pi}}\,t^{-1}e^{-t^2/2}.
    	$$
--8<-- "solutions/chapter_01/exercises/exercise_gaussian_concentration.md"

### 纠缠的极值 (Entangled Extremes)
=== "中文"
    设 $X_1,\dots,X_n$ 为 $n$ 个标准高斯随机变量（不要求相互独立），即对所有 $i\in[n]$ 有 $X_i\sim\mathcal{N}(0,1)$。令
    $$
    Z=\max_{i\in[n]}X_i.
    $$
    请证明：
    $$
    \mathbb{E}[Z]\le \sqrt{2\log n}.
    $$
=== "English"
    Let $X_1,\dots,X_n$ be $n$ standard Gaussian random variables (not necessarily independent), i.e., $X_i\sim\mathcal{N}(0,1)$ for all $i\in[n]$. Define
    $$
    Z=\max_{i\in[n]}X_i.
    $$
    Prove that
    $$
    \mathbb{E}[Z]\le \sqrt{2\log n}.
    $$
--8<-- "solutions/chapter_01/exercises/exercise_entangled_extremes.md"

### 次高斯分布初探 (Introduction to Sub-Gaussian Distributions)
=== "中文"
    如果均值为 $0$ 的随机变量 $X$ 满足：对任意 $\lambda\in\mathbb{R}$，
    $$
    \mathbb{E}\big[e^{\lambda X}\big]\le \exp\left(\frac{\lambda^2\sigma^2}{2}\right),
    $$
    则称 $X$ 是参数为 $\sigma^2$ 的次高斯随机变量。
    
    1. （集中性）请模仿正文中切尔诺夫界的证明，证明对任意 $t>0$，
    	$$
    	\Pr(X\ge t)\le \exp\left(-\frac{t^2}{2\sigma^2}\right).
    	$$
    2. （可加性）若 $X_1,X_2$ 相互独立、均值为 $0$，参数分别为 $\sigma_1^2,\sigma_2^2$，证明 $X_1+X_2$ 也是次高斯，且参数为 $\sigma_1^2+\sigma_2^2$。
    3. （有界变量即次高斯）结合霍夫丁引理，说明若 $\mathbb{E}[X]=0$ 且 $X\in[a,b]$，那么 $X$ 是参数
    	$$
    	\sigma^2=\frac{(b-a)^2}{4}
    	$$
    	的次高斯随机变量。
    
=== "English"
    If a zero-mean random variable $X$ satisfies, for all $\lambda\in\mathbb{R}$,
    $$
    \mathbb{E}\big[e^{\lambda X}\big]\le \exp\left(\frac{\lambda^2\sigma^2}{2}\right),
    $$
    then $X$ is called sub-Gaussian with parameter $\sigma^2$.
    
    1. (Concentration) Following the Chernoff-bound proof in the text, prove that for any $t>0$,
    	$$
    	\Pr(X\ge t)\le \exp\left(-\frac{t^2}{2\sigma^2}\right).
    	$$
    2. (Additivity) If $X_1$ and $X_2$ are independent sub-Gaussian random variables with mean $0$ and parameters $\sigma_1^2$ and $\sigma_2^2$, prove that $X_1+X_2$ is sub-Gaussian with parameter $\sigma_1^2+\sigma_2^2$.
    3. (Bounded implies sub-Gaussian) Using Hoeffding's lemma, show that if $\mathbb{E}[X]=0$ and $X\in[a,b]$, then $X$ is sub-Gaussian with parameter
    	$$
    	\sigma^2=\frac{(b-a)^2}{4}.
    	$$
--8<-- "solutions/chapter_01/exercises/exercise_sub_gaussian_intro.md"

### 次指数分布初探 (Introduction to Sub-Exponential Distributions)
=== "中文"
    称随机变量 $X$ 为参数 $(\nu,\alpha)$ 的次指数（sub-exponential）随机变量（$\nu,\alpha>0$），如果其中心化后的矩生成函数满足：对任意 $|\lambda|\le 1/\alpha$，
    $$
    \mathbb{E}\big[e^{\lambda(X-\mathbb{E}[X])}\big]\le \exp\left(\frac{\lambda^2\nu}{2}\right).
    $$
    1. （集中性）请证明：对任意 $t\ge0$，
    	$$
    	\Pr\big(X-\mathbb{E}[X]\ge t\big)\le
    	\begin{cases}
        \exp\left(-\dfrac{t^2}{2\nu}\right), & t\in\left[0,\dfrac{\nu}{\alpha}\right],\cr
        \exp\left(-\dfrac{t}{2\alpha}\right), & t\in\left(\dfrac{\nu}{\alpha},\infty\right).
    	\end{cases}
    	$$
    2. （可加性）设 $X_1,\dots,X_N$ 相互独立，且每个 $X_i$ 都是参数 $(\nu_i,\alpha_i)$ 的次指数随机变量。证明：对任意常数 $w_1,\dots,w_N\in\mathbb{R}$，加权和 $\sum_{i=1}^N w_iX_i$ 也是次指数随机变量，参数为
    	$$
    	\left(\sum_{i=1}^N w_i^2\nu_i,\;\max_{i\in[N]}|w_i|\alpha_i\right).
    	$$
    3. （广义伯恩斯坦不等式）结合前两问，证明对
    	$$
    	S_N=\sum_{i=1}^N w_iX_i,
    	$$
    	任意 $t\ge0$，有
    	$$
    	\Pr\big(S_N-\mathbb{E}[S_N]\ge t\big)\le
    	\begin{cases}
        \exp\left(-\dfrac{t^2}{2\sum_{i=1}^N w_i^2\nu_i}\right), & t\in\left[0,\dfrac{\sum_{i=1}^N w_i^2\nu_i}{\max_{i\in[N]}|w_i|\alpha_i}\right],\cr
        \exp\left(-\dfrac{t}{2\max_{i\in[N]}|w_i|\alpha_i}\right), & \text{其他情况}.
    	\end{cases}
    	$$
=== "English"
    A random variable $X$ is called sub-exponential with parameters $(\nu,\alpha)$ (where $\nu,\alpha>0$) if its centered moment generating function satisfies, for all $|\lambda|\le 1/\alpha$,
    $$
    \mathbb{E}\big[e^{\lambda(X-\mathbb{E}[X])}\big]\le \exp\left(\frac{\lambda^2\nu}{2}\right).
    $$
    1. (Concentration) Prove that for any $t\ge0$,
    	$$
    	\Pr\big(X-\mathbb{E}[X]\ge t\big)\le
    	\begin{cases}
        \exp\left(-\dfrac{t^2}{2\nu}\right), & t\in\left[0,\dfrac{\nu}{\alpha}\right],\cr
        \exp\left(-\dfrac{t}{2\alpha}\right), & t\in\left(\dfrac{\nu}{\alpha},\infty\right).
    	\end{cases}
    	$$
    2. (Additivity) Suppose $X_1,\dots,X_N$ are independent and each $X_i$ is sub-exponential with parameters $(\nu_i,\alpha_i)$. Prove that for any constants $w_1,\dots,w_N\in\mathbb{R}$, the weighted sum $\sum_{i=1}^N w_iX_i$ is sub-exponential with parameters
    	$$
    	\left(\sum_{i=1}^N w_i^2\nu_i,\;\max_{i\in[N]}|w_i|\alpha_i\right).
    	$$
    3. (Generalized Bernstein inequality) Using the first two parts, prove that for
    	$$
    	S_N=\sum_{i=1}^N w_iX_i,
    	$$
    	any $t\ge0$ satisfies
    	$$
    	\Pr\big(S_N-\mathbb{E}[S_N]\ge t\big)\le
    	\begin{cases}
        \exp\left(-\dfrac{t^2}{2\sum_{i=1}^N w_i^2\nu_i}\right), & t\in\left[0,\dfrac{\sum_{i=1}^N w_i^2\nu_i}{\max_{i\in[N]}|w_i|\alpha_i}\right],\cr
        \exp\left(-\dfrac{t}{2\max_{i\in[N]}|w_i|\alpha_i}\right), & \text{otherwise}.
    	\end{cases}
    	$$
--8<-- "solutions/chapter_01/exercises/exercise_sub_exponential_intro.md"

### 退而求其次 (A Weaker Concentration Alternative)
=== "中文"
    设 $X_1,X_2,\dots$ 是一列中心化（$\mathbb{E}[X_i]=0$）且两两不相关的随机变量，即对任意 $i\ne j$，
    $$
    \mathbb{E}[X_iX_j]=\mathbb{E}[X_i]\mathbb{E}[X_j].
    $$
    1. 假设存在常数 $C<+\infty$ 使得对所有 $i$ 都有 $\mathrm{Var}(X_i)\le C$。请证明对任意 $t>0$，
    	$$
    	\Pr\left(\left|\frac{1}{n}\sum_{i=1}^n X_i\right|\ge t\right)\le \frac{C}{nt^2}.
    	$$
    2. 利用上述结论，证明 $L^2$ 弱大数定律：若 $X_1,X_2,\dots$ 的期望均为 $\mu$、方差一致有界（$\sup_i\mathrm{Var}(X_i)<+\infty$）且两两不相关，则
    	$$
    	\frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{p} \mu.
    	$$
=== "English"
    Let $X_1,X_2,\dots$ be centered random variables ($\mathbb{E}[X_i]=0$) that are pairwise uncorrelated, i.e., for any $i\ne j$,
    $$
    \mathbb{E}[X_iX_j]=\mathbb{E}[X_i]\mathbb{E}[X_j].
    $$
    1. Assume there exists a constant $C<+\infty$ such that $\mathrm{Var}(X_i)\le C$ for all $i$. Prove that for any $t>0$,
    	$$
    	\Pr\left(\left|\frac{1}{n}\sum_{i=1}^n X_i\right|\ge t\right)\le \frac{C}{nt^2}.
    	$$
    2. Use the above to prove the $L^2$ weak law of large numbers: if $X_1,X_2,\dots$ all have mean $\mu$, uniformly bounded variance ($\sup_i\mathrm{Var}(X_i)<+\infty$), and are pairwise uncorrelated, then
    	$$
    	\frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{p} \mu.
    	$$
--8<-- "solutions/chapter_01/exercises/exercise_weaker_concentration.md"

### 咫尺天涯 (So Close, Yet So Far)
=== "中文"
    上一题表明，仅有“不相关”可得到多项式级别集中不等式。那么“两两独立且有界”是否能像完全独立那样带来指数级集中？本题给出一个反例。
    
    设 $U=(U_1,\dots,U_\ell)$ 均匀分布在 $\{0,1\}^\ell$ 上，令 $n=2^\ell-1$。对任意非零向量 $v\in\{0,1\}^\ell\setminus\{\mathbf{0}\}$，定义
    $$
    X_v=\langle U,v\rangle \pmod 2.
    $$
    1. 请证明这 $n$ 个随机变量 $X_v$ 都服从 $\{0,1\}$ 上的均匀分布，且它们两两独立。
    2. 请证明：对任何由 $\{X_v\}_{v\ne\mathbf{0}}$ 生成的事件 $A$（即 $A\in\sigma(\{X_v\}_{v\ne\mathbf{0}})$），其概率 $\Pr(A)$ 要么为 $0$，要么至少为 $\dfrac{1}{n+1}$。
    
=== "English"
    The previous exercise shows that uncorrelatedness gives only polynomial concentration. Can pairwise independence plus boundedness yield exponential concentration like full independence? This problem provides a counterexample.
    
    Let $U=(U_1,\dots,U_\ell)$ be uniform on $\{0,1\}^\ell$, and let $n=2^\ell-1$. For each nonzero vector $v\in\{0,1\}^\ell\setminus\{\mathbf{0}\}$, define
    $$
    X_v=\langle U,v\rangle \pmod 2.
    $$
    1. Prove that these $n$ random variables $X_v$ are each uniform on $\{0,1\}$ and are pairwise independent.
    2. Prove that for any event $A$ generated by $\{X_v\}_{v\ne\mathbf{0}}$ (i.e., $A\in\sigma(\{X_v\}_{v\ne\mathbf{0}})$), the probability $\Pr(A)$ is either $0$ or at least $\dfrac{1}{n+1}$.
    
--8<-- "solutions/chapter_01/exercises/exercise_so_close_yet_far.md"

---
