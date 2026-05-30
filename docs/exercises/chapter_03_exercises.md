# 第三章 可数无限状态马尔可夫链 (Countable Markov Chains)

## 练习 (Exercises) {: .ex-counter style="counter-reset: chapter 3 question 0;" }

### 马尔可夫性的等价定义 (Equivalent Definition of Markov Property)
=== "中文"
    在正文中，我们用信息流定义了马尔可夫性，请证明该定义与我们第二章给出的离散马尔可夫性定义是等价的。

=== "English"
    In the text, we defined the Markov property using filtration. Please prove that this definition is equivalent to the discrete Markov property definition given in Chapter 2.

--8<-- "solutions/chapter_03/exercises/exercise_equivalent_definition_of_markov_property.md"

### 无穷状态马尔可夫链的查普曼-科尔莫戈罗夫方程 (Chapman-Kolmogorov Equation for Infinite-State Markov Chains)
=== "中文"
    请证明对于转移核为 $P$ 的无穷状态马尔可夫链，查普曼-科尔莫戈罗夫方程依然成立，即对于任意 $s, t \ge 0$ 和状态 $i, j \in \Omega$，
    $$
        P^{s+t}(i, j) = \sum_{k \in \Omega} P^s(i, k) P^t(k, j).
    $$

=== "English"
    Please prove that the Chapman-Kolmogorov equation still holds for infinite-state Markov chains with transition kernel $P$, that is, for any $s, t \ge 0$ and states $i, j \in \Omega$,
    $$
        P^{s+t}(i, j) = \sum_{k \in \Omega} P^s(i, k) P^t(k, j).
    $$

--8<-- "solutions/chapter_03/exercises/exercise_chapman_kolmogorov_equation_for_infinite_state_markov_chains.md"

### 正常返是类性质 (Positive Recurrence is a Class Property)
=== "中文"
    我们在正文中证明了，对于不可约的马尔可夫链，常返是一个类性质，请证明正常返也是一种类性质。

=== "English"
    We proved in the text that recurrence is a class property for irreducible Markov chains. Please prove that positive recurrence is also a class property.

--8<-- "solutions/chapter_03/exercises/exercise_positive_recurrence_is_a_class_property.md"

### 时间反演链的不可约性和常返性 (Irreducibility and Recurrence of Time-Reversed Chains)
=== "中文"
    考虑正文中定义的马尔可夫链 $P$ 关于平稳分布 $\pi$ 的时间反演链 $\hat P$，
    $$
        \forall i,j\in\Omega,\quad \hat P(i\to j) = \frac{\pi_j P(j\to i)}{\pi_i}.
    $$
    请证明，若马尔可夫链 $P$ 是不可约且常返的，那么时间反演链 $\hat P$ 也是不可约且常返的。

=== "English"
    Consider the time-reversed chain $\hat P$ of a Markov chain $P$ with respect to its stationary distribution $\pi$ defined in the text,
    $$
        \forall i,j\in\Omega,\quad \hat P(i\to j) = \frac{\pi_j P(j\to i)}{\pi_i}.
    $$
    Please prove that if the Markov chain $P$ is irreducible and recurrent, then the time-reversed chain $\hat P$ is also irreducible and recurrent.

--8<-- "solutions/chapter_03/exercises/exercise_irreducibility_and_recurrence_of_time_reversed_chains.md"

### 不变测度 (Invariant Measure)
=== "中文"
    我们知道对于零常返或瞬时的马尔可夫链，是不存在平稳分布的，但这并不意味着系统没有宏观规律可循。
    
    设 $\left\lbrace X_n\right\rbrace_{n \ge 0}$ 是一个不可约且常返的马尔可夫链，我们定义 *不变测度（invariant measure）* 为一个非负且不全为零的向量 $\nu = (\nu_i)_{i \in \Omega}$，满足全局平衡方程 $\nu P = \nu$，其中 $P$ 是转移核。此处我们不要求 $\nu$ 的逐项和为 $1$，甚至不要求它有限，因此 $\nu$ 不一定是一个概率分布。在这道题中，我们来证明对于不可约的常返马尔可夫链，不变测度一定存在且（在忽略常数倍的意义下）唯一，并且即使系统发散，不变测度也能在一定程度上刻画系统特性。

    我们考虑某个状态 $0 \in \Omega$，记 $T_0^+ = \inf\left\lbrace n \ge 1: X_n = 0\right\rbrace$ 为首次返回状态 $0$ 的时间。我们定义系统在两次访问状态 $0$ 的间隔内，访问另一个状态 $j$ 的期望次数为 $\nu_j$：
    $$
        \nu_j = \E[0]{ \sum_{n=0}^{T_0^+ - 1} \1{X_n = j} }.
    $$
    显然，当 $j = 0$ 时， $\nu_0 = 1$。
    
    1. 将 $\nu_i$ 写为概率求和 $\nu_i = \sum_{n=0}^\infty \Pr[0]{X_n = i, T_0^+ > n}$。请证明对于任意状态 $j$：
        $$
            \sum_{i \in \Omega} \nu_i P(i, j) = \sum_{n=0}^\infty \Pr[0]{X_{n+1} = j, T_0^+ > n}.
        $$
    2. 分别讨论当 $j \neq 0$ 和 $j = 0$ 时第一小问中的级数和，据此证明 $\nu$ 是马尔可夫链 $P$ 的一个不变测度。
    3. 请证明该马尔可夫链的不变测度在忽略常数倍的意义下是唯一的，即对于任意的 $\nu,\lambda$ 满足 $\nu P = \nu$ 和 $\lambda P = \lambda$，存在常数 $c > 0$ 使得对于任意的 $i\in\Omega$ 都有 $\nu_i = c \lambda_i$。

=== "English"
    We know that for a null recurrent or transient Markov chain, there is no stationary distribution, but this does not mean the system lacks macroscopic regularities.
    
    Let $\left\lbrace X_n\right\rbrace_{n \ge 0}$ be an irreducible and recurrent Markov chain. We define an *invariant measure* as a non-negative and not identically zero vector $\nu = (\nu_i)_{i \in \Omega}$ that satisfies the global balance equation $\nu P = \nu$, where $P$ is the transition kernel. Here we do not require the sum of the elements of $\nu$ to be $1$, nor do we even require it to be finite, so $\nu$ is not necessarily a probability distribution. In this exercise, we will prove that for an irreducible recurrent Markov chain, an invariant measure always exists and is unique (up to a constant multiplier), and even if the system diverges, the invariant measure can still characterize system properties to some extent.

    Consider a state $0 \in \Omega$. Let $T_0^+ = \inf\left\lbrace n \ge 1: X_n = 0\right\rbrace$ be the time of first return to state $0$. We define the expected number of visits to another state $j$ between two visits to state $0$ as $\nu_j$:
    $$
        \nu_j = \E[0]{ \sum_{n=0}^{T_0^+ - 1} \1{X_n = j} }.
    $$
    Obviously, when $j = 0$, $\nu_0 = 1$.

    1. Write $\nu_i$ as a probability sum $\nu_i = \sum_{n=0}^\infty \Pr[0]{X_n = i, T_0^+ > n}$. Please prove that for any state $j$:
       $$
           \sum_{i \in \Omega} \nu_i P(i, j) = \sum_{n=0}^\infty \Pr[0]{X_{n+1} = j, T_0^+ > n}.
       $$
    2. Discuss the series sum in the first question separately for $j \neq 0$ and $j = 0$, and use this to prove that $\nu$ is an invariant measure of the Markov chain $P$.
    3. Please prove that the invariant measure of this Markov chain is unique up to a constant multiplier, that is, for any $\nu, \lambda$ satisfying $\nu P = \nu$ and $\lambda P = \lambda$, there exists a constant $c > 0$ such that $\nu_i = c \lambda_i$ for any $i \in \Omega$.

--8<-- "solutions/chapter_03/exercises/exercise_invariant_measure.md"

### 截断可逆链的平稳分布 (Stationary Distribution of Truncated Reversible Chains)
=== "中文"
    想象一个基站，如果数据包的到达率大于处理率，那么系统会是瞬时的，队列长度会趋于无穷大，不存在平稳分布。但是，现实中的路由器内存不是无限的，假设缓冲池最多只能存 $K$ 个包，满了就会把新来的包丢弃，也就是说我们会强行把这个系统截断到有限状态空间 $\left\lbrace 0, 1, \dots, K\right\rbrace$ 上。在这一题里，我们就来研究无限状态空间的马尔可夫链截断到有限状态空间后的表现。

    考虑一个在可数状态空间 $\Omega$ 上的不可约马尔可夫链，其转移概率为 $P(i, j)$。我们将其截断到有限子集 $S\subset \Omega$ 中，构造一个新的截断链 $\tilde{P}$，在集合 $S$ 内部的转移概率保持不变；如果原本要跳出 $S$，则强制让其留在原地。即对于任意 $i, j \in S$：
    $$
    \tilde{P}(i, j) = 
    \begin{cases} 
        P(i, j), & \text{若 } i \neq j \cr
        P(i, i) + \sum_{k \notin S} P(i, k), & \text{若 } i = j
    \end{cases}
    $$
    假设截断后的链 $\tilde{P}$ 在集合 $S$ 上依然是不可约的。

    1. 假设原链 $P$ 是正常返的，其平稳分布为 $\pi$ 且满足细致平衡条件 $\pi_i P(i, j) = \pi_j P(j, i)$。请证明：截断链 $\tilde{P}$ 的平稳分布 $\tilde{\pi}$ 正是原分布限制在子集 $S$ 上的条件概率分布，并且 $\tilde{P}$ 关于 $\tilde{\pi}$ 是时间可逆的。
    2. 如果原链 $P$ 是零常返或瞬时的，它不存在平稳分布。但假设它有一个严格为正且（在忽略常数倍的意义下）唯一的不变测度（定义见上一道练习题）$\nu = (\nu_1, \nu_2, \dots)$，且满足 $\nu_i P(i, j) = \nu_j P(j, i)$。请证明：虽然原系统不存在平稳分布，但截断链 $\tilde{P}$ 存在平稳分布，并基于不变测度 $\nu$ 给出平稳分布 $\tilde{\pi}$ 的表达式。

=== "English"
    Imagine a base station where if the packet arrival rate is greater than the processing rate, the system will be transient, the queue length will tend to infinity, and no stationary distribution will exist. However, the memory of routers in reality is not infinite. Suppose the buffer pool can store at most $K$ packets, and newly arriving packets will be discarded when it is full. This means we forcefully truncate this system to a finite state space $\left\lbrace 0, 1, \dots, K\right\rbrace$. In this exercise, we will study the behavior of an infinite-state Markov chain after being truncated to a finite state space.

    Consider an irreducible Markov chain on a countable state space $\Omega$ with transition probabilities $P(i, j)$. We truncate it to a finite subset $S \subset \Omega$ to construct a new truncated chain $\tilde{P}$, where the transition probabilities within $S$ remain unchanged; if it originally transitions out of $S$, it is forced to stay in its current state. That is, for any $i, j \in S$:
    $$
    \tilde{P}(i, j) = 
    \begin{cases} 
        P(i, j), & \text{if } i \neq j \cr
        P(i, i) + \sum_{k \notin S} P(i, k), & \text{if } i = j
    \end{cases}
    $$
    Suppose the truncated chain $\tilde{P}$ is still irreducible on the set $S$.

    1. Assume the original chain $P$ is positive recurrent, its stationary distribution is $\pi$, and it satisfies the detailed balance condition $\pi_i P(i, j) = \pi_j P(j, i)$. Please prove that the stationary distribution $\tilde{\pi}$ of the truncated chain $\tilde{P}$ is exactly the conditional probability distribution of the original distribution restricted to the subset $S$, and that $\tilde{P}$ is time-reversible with respect to $\tilde{\pi}$.
    2. If the original chain $P$ is null recurrent or transient, it does not have a stationary distribution. But suppose it has a strictly positive and (up to a constant multiplier) unique invariant measure (see definition in the previous exercise) $\nu = (\nu_1, \nu_2, \dots)$, which satisfies $\nu_i P(i, j) = \nu_j P(j, i)$. Please prove that although the original system does not have a stationary distribution, the truncated chain $\tilde{P}$ has a stationary distribution, and give the expression of the stationary distribution $\tilde{\pi}$ based on the invariant measure $\nu$.

--8<-- "solutions/chapter_03/exercises/exercise_stationary_distribution_of_truncated_reversible_chains.md"

### 破镜难重圆 (Broken Mirrors Can Not Be Rejoined)
=== "中文"
    在宏观世界中，热力学第二定律告诉我们，孤立系统会自发地朝着熵增加的方向演化。例如，将所有的气体分子用隔板隔在一个盒子的左半边，撤去隔板后，分子会均匀地散布到整个盒子中。然而，如果在微观层面用马尔可夫链来描述这个过程，如果这个马尔可夫链是正常返的，经过足够长的时间，系统会以概率 $1$ 回到初始状态，这难道和热力学第二定律矛盾吗？

    为了解答这个问题，我们考虑一个包含 $N$ 个粒子的简化模型， *埃伦费斯特瓮模型（Ehrenfest model）* 。假设有两个盒子 A 和 B，里面共有 $N$ 个粒子（$N\geq 2$）。在每一个离散的时间步，我们随机均匀地从这 $N$ 个粒子中挑出一个，把它移到另一个盒子里。
    令 $X_n$ 表示第 $n$ 步时盒子 A 中的粒子数，显然 $\left\lbrace X_n\right\rbrace$ 是一个状态空间为 $\left\lbrace 0, 1, \dots, N\right\rbrace$ 的马尔可夫链。

    1. 证明该马尔可夫链不可约并且是正常返的，并求出它的唯一平稳分布 $\pi$。
    2. 假设初始状态 $X_0=N$，即所有粒子都在盒子 A 中。证明系统以概率 $1$ 会在有限步内回到状态 $N$，并计算首次返回状态 $N$ 的期望时间。
    3. 假设每秒钟可以发生 100 亿次转移，计算当 $N=100$ 时，系统从 $X_0=N$ 出发，首次返回状态 $N$ 的期望时间。把这个期望时间与宇宙的年龄（约 $1.38 \times 10^{10}$ 年）进行对比，并解释为什么我们在现实中永远观察不到“破镜重圆”或“气体倒流”的宏观现象。

=== "English"
    In the macroscopic world, the second law of thermodynamics tells us that isolated systems will spontaneously evolve in the direction of increasing entropy. For example, if all gas molecules are separated into the left half of a box by a partition, after removing the partition, the molecules will evenly spread throughout the entire box. However, if this process is described by a Markov chain at the microscopic level, and if this Markov chain is positive recurrent, the system will return to its initial state with probability $1$ after a sufficiently long time. Does this contradict the second law of thermodynamics?

    To answer this question, we consider a simplified model containing $N$ particles, the *Ehrenfest model*. Suppose there are two boxes A and B containing a total of $N$ particles ($N \geq 2$). At each discrete time step, we pick one of these $N$ particles uniformly at random and move it to the other box.
    Let $X_n$ denote the number of particles in box A at step $n$. Obviously, $\left\lbrace X_n\right\rbrace$ is a Markov chain with a state space of $\left\lbrace 0, 1, \dots, N\right\rbrace$.

    1. Prove that this Markov chain is irreducible and positive recurrent, and find its unique stationary distribution $\pi$.
    2. Assume the initial state is $X_0=N$, that is, all particles are in box A. Prove that the system will return to state $N$ in a finite number of steps with probability $1$, and calculate the expected time of the first return to state $N$.
    3. Assume that 10 billion transitions can occur per second. Calculate the expected time of the first return to state $N$ when the system starts from $X_0=N$ with $N=100$. Compare this expected time with the age of the universe (about $1.38 \times 10^{10}$ years), and explain why we will never observe macroscopic phenomena like "broken mirrors being rejoined" or "gas flowing backward" in reality.

--8<-- "solutions/chapter_03/exercises/exercise_broken_mirrors_can_not_be_rejoined.md"
