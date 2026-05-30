# 第三章 可数无限状态马尔可夫链 (Countable Markov Chains) 


## 问题 (Problems) {: .prob-counter style="counter-reset: chapter 3 question 0;" }


### 信息年龄 (Age of Information)
=== "中文"
    在现代互联网中，我们往往会关心数据的新鲜度，为了研究这个量，学者们提出了一个新的度量指标——*信息年龄（age of information, AoI）*。

    假设有一个传感器持续向基站发送状态更新。我们将基站成功接收更新的时刻视为重置点。定义离散时间的随机过程 $\left\lbrace Y_n\right\rbrace_{n \ge 0}$ 为时刻 $n$ 的“信息年龄”，即距离上一次成功接收更新已经过去了多少个时间步。

    - 如果时刻 $n$ 接收到了更新，则年龄归零：$Y_{n} = 0$。
    - 如果时刻 $n$ 没有接收到更新，则年龄增长：$Y_{n} = Y_{n-1} + 1$。
    
    假设连续两次成功更新之间的时间间隔为独立同分布的随机变量 $T$，且取值为正整数，期望周期 $\E{T} = \mu < \infty$。显然，$\left\lbrace Y_n\right\rbrace$ 构成了一个状态空间为 $\bb Z_{\ge 0}$ 的不可约马尔可夫链。
    
    1. 请写出该马尔可夫链的转移概率（可以用 $T$ 的分布表示），并证明该马尔可夫链是正常返的。
    2. 设该马尔可夫链的平稳分布为 $\pi = (\pi_0, \pi_1, \dots)$。请求出 $\pi_k$ 关于 $\pi_0$ 的表达式。
    3. 基于上一问的条件，请证明 $\pi_0 = \frac{1}{\mu}$。并由此得出信息年龄为 $k$ 的平稳概率为：
       $$
           \pi_k = \frac{\Pr{T > k}}{\E{T}}.
       $$
    4. 假设更新周期 $T$ 服从参数为 $p$ 的几何分布，请写出信息年龄 $Y_n$ 的平稳分布。

=== "English"
    In modern internet, we often care about the freshness of data. To study this quantity, scholars have proposed a new metric—*age of information (AoI)*.

    Suppose there is a sensor continuously sending state updates to a base station. We consider the moment the base station successfully receives an update as a reset point. Define a discrete-time stochastic process $\left\lbrace Y_n\right\rbrace_{n \ge 0}$ as the "age of information" at time $n$, which is the number of time steps elapsed since the last successful reception of an update.

    - If an update is received at time $n$, the age is reset to zero: $Y_{n} = 0$.
    - If no update is received at time $n$, the age increases: $Y_{n} = Y_{n-1} + 1$.
    
    Suppose the time interval between two consecutive successful updates is an independent and identically distributed random variable $T$, which takes positive integer values, with expected period $\E{T} = \mu < \infty$. Obviously, $\left\lbrace Y_n\right\rbrace$ constitutes an irreducible Markov chain with a state space of $\bb Z_{\ge 0}$.
    
    1. Please write down the transition probabilities of this Markov chain (which can be expressed using the distribution of $T$), and prove that this Markov chain is positive recurrent.
    2. Let the stationary distribution of this Markov chain be $\pi = (\pi_0, \pi_1, \dots)$. Please find the expression for $\pi_k$ in terms of $\pi_0$.
    3. Based on the condition of the previous question, please prove that $\pi_0 = \frac{1}{\mu}$. And from this, derive that the stationary probability of the age of information being $k$ is:
       $$
           \pi_k = \frac{\Pr{T > k}}{\E{T}}.
       $$
    4. Suppose the update period $T$ follows a geometric distribution with parameter $p$. Please write down the stationary distribution of the age of information $Y_n$.

--8<-- "solutions/chapter_03/problems/problem_age_of_information.md"

### Parrondo悖论 (Parrondo's Paradox)
=== "中文"
    直觉上，两个必输的方案复合得到的新方案，似乎依然是必输的。然而西班牙物理学家 Juan Parrondo 提出了一个令人吃惊的悖论：两个收益为负的游戏，按照简单的随机策略交替进行，其整体的收益会变成正的。这一反直觉的现象在博弈论、种群动力学和控制理论中有着深刻的应用。

    1. 考虑状态空间为 $\bb Z$ 的随机游走，每一步所处的位置代表玩家现有的资金，玩家每一步移动方向（资金变化）由抛掷硬币的结果确定。考虑如下三个游戏：
   
        - 游戏 A：每一时刻独立抛掷一枚有偏硬币，硬币为正面则移动 $+1$，否则移动 $-1$。该有偏硬币为正面的概率为 $p = 0.49$。
        - 游戏 B：若当前资金是 3 的倍数，则抛一枚正面概率为 $p_0 = 0.09$ 的硬币并根据结果移动；否则抛掷一枚正面概率为 $p_1 = 0.74$ 的硬币并根据结果移动。
        - 复合游戏 C：在每一步，玩家先独立抛掷一枚公平的硬币，若为正面则在该步根据游戏 A 规则游走，若为反面则根据游戏 B 规则游走。
        
        要判断随机游走最终发散到 $+\infty$（代表玩家会赢）还是 $-\infty$（代表玩家会输），我们可以考察其长期增长率 $J = \lim_{n \to \infty} \frac{X_n}{n}$，其中 $X_n$ 表示玩家走完第 $n$ 步时的资金。对于游戏 B，考虑序列 $Y_n = X_n \pmod 3$，$\left\lbrace Y_n\right\rbrace_{n\geq 0}$ 构成了一个状态空间为 $\left\lbrace 0,1,2\right\rbrace$ 的马尔可夫链。我们有以下结论，随机过程 $\left\lbrace Y_n\right\rbrace_{n\geq 0}$ 存在唯一的稳态分布 $\pi = (\pi_0, \pi_1, \pi_2)$，并且
        $$
            J = \lim_{n \to \infty} \frac{X_n}{n} = \pi_0(p_0 - q_0) + \pi_1(p_1 - q_1) + \pi_2(p_1 - q_1).
        $$
        该结论在下面的题目中可以直接使用，无需证明。

        1. 请证明，如果单独一直玩游戏 A 或单独一直玩游戏 B，玩家会输。
        2. 请证明，如果玩家玩的是复合游戏 C，那么玩家会赢。
    2. 现在我们对 Parrondo 悖论进行一个扩展，我们来说明，两个瞬时的马尔可夫链，按照简单的随机策略交替进行，会得到正常返的马尔可夫链。考虑非负整数集 $\bb Z_{\ge 0}$ 上的马尔可夫链，每一时刻状态的变化由掷硬币结果确定，掷出正面则向右移动一步，掷出反面则向左移动一步（如果当前状态是 $0$ 掷出反面则原地不动）。考虑如下三个马尔可夫链：
        - 链 A：每一步独立抛掷一枚正面概率为 $0.51$ 的硬币，并根据结果移动。
        - 链 B：若当前状态模 3 为 0，则抛掷一枚正面概率为 $p_0 = 0.91$ 的硬币，否则抛掷一枚正面概率为 $p_1 = 0.26$ 的硬币，并根据结果移动。
        - 复合链 C：每步先独立抛掷一枚公平的硬币，若为正面则在该步根据链 A 规则游走，若为反面则根据链 B 规则游走。
        
        <!-- -->

        1. 请证明，链 A 和链 B 都是瞬时的。
        2. 请证明，复合链 C 是正常返的。

=== "English"
    Intuitively, a new strategy compounded from two losing strategies seems like it would still be a losing strategy. However, the Spanish physicist Juan Parrondo proposed a surprising paradox: two games with negative payoffs, alternated according to a simple random strategy, can have an overall payoff that becomes positive. This counterintuitive phenomenon has profound applications in game theory, population dynamics, and control theory.

    1. Consider a random walk with state space $\bb Z$, where the position at each step represents the player's current capital, and the direction of movement (change in capital) at each step is determined by the result of flipping a coin. Consider the following three games:
   
        - Game A: At each moment, flip a biased coin independently. If the coin comes up heads, move $+1$; otherwise, move $-1$. The probability of heads for this biased coin is $p = 0.49$.
        - Game B: If the current capital is a multiple of 3, flip a coin with a heads probability of $p_0 = 0.09$ and move according to the result; otherwise, flip a coin with a heads probability of $p_1 = 0.74$ and move according to the result.
        - Composite Game C: At each step, the player first independently flips a fair coin. If heads, follow the rules of Game A for that step; if tails, follow the rules of Game B.
        
        <!-- -->
        To determine whether the random walk eventually diverges to $+\infty$ (meaning the player will win) or $-\infty$ (meaning the player will lose), we can examine its long-term growth rate $J = \lim_{n \to \infty} \frac{X_n}{n}$, where $X_n$ represents the player's capital after the $n$-th step. For Game B, consider the sequence $Y_n = X_n \pmod 3$, $\left\lbrace Y_n\right\rbrace_{n \ge 0}$ forms a Markov chain with state space $\left\lbrace 0,1,2\right\rbrace$. We have the following conclusion: the stochastic process $\left\lbrace Y_n\right\rbrace_{n \ge 0}$ has a unique stationary distribution $\pi = (\pi_0, \pi_1, \pi_2)$, and
        $$
            J = \lim_{n \to \infty} \frac{X_n}{n} = \pi_0(p_0 - q_0) + \pi_1(p_1 - q_1) + \pi_2(p_1 - q_1).
        $$
        This conclusion can be used directly in the following questions without proof.

        1. Prove that if the player constantly plays Game A alone or constantly plays Game B alone, the player will lose.
        2. Prove that if the player plays the composite Game C, the player will win.
    2. Now we extend Parrondo's paradox to show that alternating between two transient Markov chains using a simple random strategy can result in a positive recurrent Markov chain. Consider a Markov chain on the set of non-negative integers $\bb Z_{\ge 0}$, where the state change at each moment is determined by the result of a coin flip: move right one step on heads, move left one step on tails (stay in place if the current state is 0 and tails is flipped). Consider the following three Markov chains:
        - Chain A: At each step, independently flip a coin with a heads probability of $0.51$ and move accordingly.
        - Chain B: If the current state modulo 3 is 0, flip a coin with a heads probability of $p_0 = 0.91$, otherwise flip a coin with a heads probability of $p_1 = 0.26$, and move accordingly.
        - Composite Chain C: At each step, independently flip a fair coin first. If heads, move according to the rules of Chain A; if tails, move according to the rules of Chain B.
        
        <!-- -->

        1. Prove that both Chain A and Chain B are transient.
        2. Prove that composite Chain C is positive recurrent.

--8<-- "solutions/chapter_03/problems/problem_parrundos_paradox.md"

### 无尽试炼 (Endless Trial)
=== "中文"
    在一个游戏中，勇者需要打怪升级。一只怪物初始血量为 10 点，且血量没有上限。勇者每次攻击的效果如下：
    
    - 以 $\frac{1}{5}$ 的概率产生暴击，造成 2 点伤害；
    - 以 $p$ 的概率攻击失误，不造成伤害反而让怪物恢复 1 点血量（$0 < p < \frac{4}{5}$）；
    - 以 $\frac{4}{5} - p$ 的概率产生普通攻击，造成 1 点伤害。
    
    我们想知道，杀死怪物（使怪物血量 $\le 0$ ）需要的攻击次数期望是多少？

    我们通过定义一个状态空间为 $\bb N$ 的马尔可夫链来解决这个问题。假设有无数个 10 血的怪物等着我们砍，砍完一个砍下一个，一旦当前怪物的血量 $\le 0$，它会瞬间死亡，而勇者的下一次攻击将直接落在一只新的、初始有10血的怪物身上。用状态表示当前怪物的血量，也就是说，到达状态 $0$ 时下一步可能会直接转移到 $8,9$ 或者 $11$，表示即将开始砍下一个怪物。每步状态转移对应一次攻击。

    1. 描述该马尔可夫链的状态转移概率，并说明杀死怪物需要的攻击次数期望为 $\E[0]{T_0}$ 。
    2. 证明该马尔可夫链是不可约的、非周期的。
    3. 若 $p\in(\frac 35,\frac 45)$ 时，证明该马尔可夫链是瞬时的。
    4. 若 $p\in (0,\frac 35)$ 时，证明该马尔可夫链是正常返的，且存在唯一平稳分布 $\pi$ 。
    5. 若 $p\in (0,\frac 35)$ 时，请证明对任意 $x\ge 11$ ，有 $\pi(x+1)=\frac{5p-5+\sqrt{25p^2-30p+25}}2\cdot \pi(x)$ 。
       
        ??? hint "提示"
            若数列 $\left\lbrace a_n\right\rbrace_{n\ge 0}$ 满足递推公式 $a_{n+3}=ba_{n+2}+ca_{n+1}+da_n$ ，且方程 $x^3-bx^2-cx-d=0$ 有三个两两不同的根 $\lambda_1,\lambda_2,\lambda_3$ ，则 $a_n$ 的通项公式为 $a_n=A\lambda_1^n+B\lambda_2^n+C\lambda_3^n$ 。

    6. 当 $p=\frac 12$ 时，通过数值方法解得 $\pi(0)$ ，并计算杀死怪物需要的攻击次数期望。

=== "English"
    In a game, a brave hero needs to fight monsters to level up. A monster has an initial health of 10 points, and there is no upper limit to its health. The effect of the hero's each attack is as follows:
    
    - With probability $\frac{1}{5}$, a critical hit is triggered, causing 2 points of damage;
    - With probability $p$, the attack misses, causing no damage but instead allowing the monster to recover 1 health point ($0 < p < \frac{4}{5}$);
    - With probability $\frac{4}{5} - p$, a normal attack occurs, causing 1 point of damage.
    
    We want to know: what is the expected number of attacks required to kill a monster (making the monster's health $\le 0$)?

    We solve this problem by defining a Markov chain with state space $\bb N$. Suppose there are infinitely many monsters with 10 health waiting for us to slay, one after another. As soon as the current monster's health is $\le 0$, it dies instantly, and the hero's next attack will directly land on a new monster with an initial health of 10. We use the state to represent the current monster's health. This means that upon reaching state $0$, the next step might transition directly to $8, 9$, or $11$, indicating the start of fighting the next monster. Each state transition corresponds to one attack.

    1. Describe the state transition probabilities of this Markov chain, and explain that the expected number of attacks required to kill a monster is $\E[0]{T_0}$.
    2. Prove that this Markov chain is irreducible and aperiodic.
    3. If $p \in (\frac{3}{5}, \frac{4}{5})$, prove that this Markov chain is transient.
    4. If $p \in (0, \frac{3}{5})$, prove that this Markov chain is positive recurrent, and there exists a unique stationary distribution $\pi$.
    5. If $p \in (0, \frac{3}{5})$, please prove that for any $x \ge 11$, $\pi(x+1) = \frac{5p-5+\sqrt{25p^2-30p+25}}{2} \cdot \pi(x)$.
       
        ??? hint "Hint"
            If a sequence $\left\lbrace a_n\right\rbrace_{n\ge 0}$ satisfies the recurrence formula $a_{n+3} = b a_{n+2} + c a_{n+1} + d a_n$, and the equation $x^3 - bx^2 - cx - d = 0$ has three distinct roots $\lambda_1, \lambda_2, \lambda_3$, then the general term formula for $a_n$ is $a_n = A\lambda_1^n + B\lambda_2^n + C\lambda_3^n$.

    6. When $p = \frac{1}{2}$, solve for $\pi(0)$ using numerical methods, and calculate the expected number of attacks required to kill the monster.

--8<-- "solutions/chapter_03/problems/problem_endless_trial.md"

### 更新过程与生成函数 (Renewal Process and Generating Function)
=== "中文"
    在状态空间无穷大的马尔可夫链中，直接分析概率可能会很复杂。我们可以引入*概率母函数（probability generating function, PGF）*来帮助分析。
    对于任意离散时间马尔可夫链和任意给定状态 $j$，我们定义两个序列：
    
    - $p_{jj}^{(n)} = \Pr{X_n = j \mid X_0 = j}$：从 $j$ 出发，第 $n$ 步处于状态 $j$ 的概率，约定 $p_{jj}^{(0)} = 1$。
    - $f_{jj}^{(n)} = \Pr{X_n = j, X_k \neq j \text{ for } 1 \le k < n \mid X_0 = j}$：从 $j$ 出发，恰好在第 $n$ 步首次返回状态 $j$ 的概率，约定 $f_{jj}^{(0)} = 0$。
    
    为这两个序列分别定义母函数 $P(s)$ 和 $F(s)$，对于满足 $|s| < 1$ 的复数 $s$，
    $$
        P(s) = \sum_{n=0}^\infty p_{jj}^{(n)} s^n, \quad F(s) = \sum_{n=1}^\infty f_{jj}^{(n)} s^n
    $$
    在后面题目中，我们定义函数 $P(s)$ 和 $F(s)$ 在 $s=1$ 处的值或导数为 $s \to 1^-$ 时的函数或导数的左极限。

    1. 请证明对于任意 $n \ge 1$，有
       $$
           p_{jj}^{(n)} = \sum_{k=1}^n f_{jj}^{(k)} p_{jj}^{(n-k)}.
       $$
       并据此证明，对于任意的 $|s| < 1$，
       $$
           P(s) = \frac{1}{1 - F(s)}.
       $$
    2. 下面我们来说明函数 $P(s)$ 和 $F(s)$ 在某些点处的值或其导数可以直接刻画马尔可夫链的常返性。
        1. 请证明状态 $j$ 是常返的，当且仅当 $P(1)=\lim_{s \to 1^-} P(s) = \infty$。
        2. 假设状态 $j$ 是常返的。请证明，状态 $j$ 是正常返的，当且仅当 $F'(1) = \lim_{s \to 1^-} F'(s) < \infty$。并据此进一步证明，当状态 $j$ 是正常返时，平稳分布 $\pi_j = \frac{1}{F'(1)}$。
    3. 现在我们来看一个具体的例子。在一维整数集 $\bb Z$ 上的对称简单随机游走（每一步以相等的概率往左或往右走）中，计算首次返回原点的概率 $f_{00}^{(n)}$ 是一个很复杂的任务，但 $p_{00}^{(n)}$ 的计算相对简单。
        1. 已知该游走在奇数步不可能回到原点，而在偶数步 $2n$ 回到原点的概率为 $p_{00}^{(2n)} = \binom{2n}{n} (1/2)^{2n}$。请利用广义二项式展开 $(1-x)^{-1/2} = \sum_{n=0}^\infty \binom{2n}{n} (x/4)^n$，算出 $P(s)$ 的闭式解。
        2. 请利用你算出的 $P(s)$ 和前面小问的结论，直接得出母函数 $F(s)$ 的表达式。并据此计算 $F'(1)$，从而证明一维对称简单随机游走是零常返的。

=== "English"
    In Markov chains with infinite state spaces, directly analyzing probabilities can be quite complex. We can introduce the *probability generating function (PGF)* to help with the analysis.
    For any discrete-time Markov chain and any given state $j$, we define two sequences:
    
    - $p_{jj}^{(n)} = \Pr{X_n = j \mid X_0 = j}$: the probability of being in state $j$ at step $n$, starting from $j$, with the convention $p_{jj}^{(0)} = 1$.
    - $f_{jj}^{(n)} = \Pr{X_n = j, X_k \neq j \text{ for } 1 \le k < n \mid X_0 = j}$: the probability of returning to state $j$ for the first time exactly at step $n$, starting from $j$, with the convention $f_{jj}^{(0)} = 0$.
    
    Define their generating functions $P(s)$ and $F(s)$ respectively, for complex numbers $s$ satisfying $|s| < 1$:
    $$
        P(s) = \sum_{n=0}^\infty p_{jj}^{(n)} s^n, \quad F(s) = \sum_{n=1}^\infty f_{jj}^{(n)} s^n
    $$
    In subsequent questions, we define the value or derivative of the functions $P(s)$ and $F(s)$ at $s=1$ as their left limit as $s \to 1^-$.

    1. Prove that for any $n \ge 1$, we have
       $$
           p_{jj}^{(n)} = \sum_{k=1}^n f_{jj}^{(k)} p_{jj}^{(n-k)}.
       $$
       And based on this, prove that for any $|s| < 1$,
       $$
           P(s) = \frac{1}{1 - F(s)}.
       $$
    2. Next, we will show that the values of the functions $P(s)$ and $F(s)$ at certain points or their derivatives can directly characterize the recurrence of a Markov chain.
        1. Prove that state $j$ is recurrent if and only if $P(1) = \lim_{s \to 1^-} P(s) = \infty$.
        2. Suppose state $j$ is recurrent. Prove that state $j$ is positive recurrent if and only if $F'(1) = \lim_{s \to 1^-} F'(s) < \infty$. And further prove that when state $j$ is positive recurrent, the stationary distribution is $\pi_j = \frac{1}{F'(1)}$.
    3. Now let's look at a concrete example. In a symmetric simple random walk on the one-dimensional integer set $\bb Z$ (moving left or right with equal probability at each step), calculating the probability $f_{00}^{(n)}$ of returning to the origin for the first time is a very complex task, but calculating $p_{00}^{(n)}$ is relatively simple.
        1. It is known that the walk cannot return to the origin in an odd number of steps, and the probability of returning to the origin in an even number of steps $2n$ is $p_{00}^{(2n)} = \binom{2n}{n} (1/2)^{2n}$. Using the generalized binomial expansion $(1-x)^{-1/2} = \sum_{n=0}^\infty \binom{2n}{n} (x/4)^n$, calculate the closed-form solution of $P(s)$.
        2. Based on the calculated $P(s)$ and the conclusions of the previous sub-questions, directly derive the expression for the generating function $F(s)$. And accordingly calculate $F'(1)$, thereby proving that the one-dimensional symmetric simple random walk is null recurrent.

--8<-- "solutions/chapter_03/problems/problem_renewal_process_and_generating_function.md"

### Foster定理 (Foster's Theorem)
=== "中文"
    对于一个无穷状态的马尔可夫链，有时证明其正常返性并不容易，在本题中，我们将介绍 Foster 定理，这个定理允许我们通过构造一个李雅普诺夫函数（Lyapunov function）来引入物理学中势能的思想，帮助判别一个马尔可夫链的正常返性。

    设 $\left\lbrace X_n\right\rbrace_{n \ge 0}$ 是一个在可数状态空间 $S$ 上的不可约的马尔可夫链。假设存在一个非负函数 $V: S \to \bb R_{\ge 0}$，一个有限子集 $F \subset S$，以及一个常数 $\epsilon > 0$，使得以下两个条件成立：
    
    - 在有限集 $F$ 内部，对于任意 $i \in F$，有 $\E{V(X_{n+1}) \mid X_n = i} < \infty$。
    - 在有限集 $F$ 外部，对于任意 $i \notin F$，有 $\E{V(X_{n+1}) - V(X_n) \mid X_n = i} \le -\epsilon$。
    
    该函数通常被称为李雅普诺夫函数，直观上，李雅普诺夫函数描述了系统的势能，当系统处于有限集 $F$ 外部，条件二保证了走一步后势能的期望是降低的，这意味着系统不会倾向于向无穷远处逃逸，而当系统处于有限集 $F$ 内部，条件一保证了势能不会在一步之内变得无穷大。

    1. 定义停时 $\tau_F = \inf\left\lbrace n \ge 0: X_n \in F\right\rbrace$，我们先来证明，在上述条件下，从任意状态 $i \notin F$ 出发，到达 $F$ 的期望时间 $\E[i]{\tau_F}$ 是有限的。
        1. 考察截断过程 $X_{k \wedge \tau_F}$，其中 $k \wedge \tau_F = \min\left\lbrace k, \tau_F\right\rbrace$，请证明
           $$
               \E[i]{V(X_{(k+1) \wedge \tau_F})} \leq \E[i]{V(X_{k \wedge \tau_F})} - \epsilon \Pr[i]{\tau_F > k}.
           $$
        2. 请证明对于任意的 $i\notin F$，以及任意整数 $n> 0$，有
           $$
               \E[i]{V(X_{n \wedge \tau_F})} \le V(i) - \epsilon \sum_{k=0}^{n-1} \Pr[i]{\tau_F > k},
           $$
           并在此基础上证明 $\E[i]{\tau_F}<\infty$。
    2. 请证明 Foster 定理，即假设存在满足上述条件的函数 $V$ 和有限集 $F\subset S$，那么该马尔可夫链是正常返的。
    3. 我们再来看正文讲的 $\bb N$ 上的有偏随机游走，请构造出一个李雅普诺夫函数和对应的有限集合 $F$，应用 Foster 定理，证明在 $p<1/2$ 时，该马尔可夫链是正常返的。

=== "English"
    For a Markov chain with an infinite state space, it is sometimes not easy to prove its positive recurrence. In this problem, we will introduce Foster's Theorem. This theorem allows us to introduce the idea of potential energy in physics by constructing a Lyapunov function to help determine the positive recurrence of a Markov chain.

    Let $\left\lbrace X_n\right\rbrace_{n \ge 0}$ be an irreducible Markov chain on a countable state space $S$. Suppose there exists a non-negative function $V: S \to \bb R_{\ge 0}$, a finite subset $F \subset S$, and a constant $\epsilon > 0$ such that the following two conditions hold:
    
    - Inside the finite set $F$, for any $i \in F$, $\E{V(X_{n+1}) \mid X_n = i} < \infty$.
    - Outside the finite set $F$, for any $i \notin F$, $\E{V(X_{n+1}) - V(X_n) \mid X_n = i} \le -\epsilon$.
    
    This function is usually called a Lyapunov function. Intuitively, a Lyapunov function describes the potential energy of the system. When the system is outside the finite set $F$, the second condition guarantees that the expected potential energy decreases after one step, which means the system will not tend to escape to infinity. When the system is inside the finite set $F$, the first condition guarantees that the potential energy will not become infinite in a single step.

    1. Define the stopping time $\tau_F = \inf\left\lbrace n \ge 0: X_n \in F\right\rbrace$. We first prove that under the above conditions, starting from any state $i \notin F$, the expected time to reach $F$, $\E[i]{\tau_F}$, is finite.
        1. Consider the truncated process $X_{k \wedge \tau_F}$, where $k \wedge \tau_F = \min\left\lbrace k, \tau_F\right\rbrace$. Please prove
           $$
               \E[i]{V(X_{(k+1) \wedge \tau_F})} \leq \E[i]{V(X_{k \wedge \tau_F})} - \epsilon \Pr[i]{\tau_F > k}.
           $$
        2. Prove that for any $i \notin F$ and any integer $n > 0$, we have
           $$
               \E[i]{V(X_{n \wedge \tau_F})} \le V(i) - \epsilon \sum_{k=0}^{n-1} \Pr[i]{\tau_F > k},
           $$
           and based on this, prove that $\E[i]{\tau_F} < \infty$.
    2. Prove Foster's Theorem, that is, suppose there exists a function $V$ and a finite set $F \subset S$ satisfying the above conditions, then the Markov chain is positive recurrent.
    3. Let's look again at the biased random walk on $\bb N$ discussed in the text. Please construct a Lyapunov function and a corresponding finite set $F$, and apply Foster's Theorem to prove that when $p < 1/2$, the Markov chain is positive recurrent.

--8<-- "solutions/chapter_03/problems/problem_fosters_theorem.md"

### 生命之树 (Tree of Life)
=== "中文"
    19 世纪，为了研究某些欧洲贵族姓氏为何会逐渐消亡，数学家 Galton 和 Watson 提出了一种简化的数学模型——*分支过程（Branching process）*。
    
    假设一个种群的繁衍遵循以下规则：第 $0$ 代只有 $1$ 个祖先，即 $Z_0 = 1$。第 $n$ 代的每一个个体 $i$ 都会独立地产生 $X_{i,n}$ 个后代，$X_{i,n}$ 为独立同分布的非负整数随机变量，且独立于之前各代的人数，假设每个个体产生 $k$ 个后代的概率均为 $p_k$。第 $n+1$ 代的总人数可以表示为
    $$
        Z_{n+1} = \sum_{i=1}^{Z_n} X_{i,n}
    $$
    
    我们用概率母函数来研究这个量。记单个个体的后代数量为随机变量 $X$，其母函数为 $G(s) = \E{s^X} = \sum_{k=0}^\infty p_k s^k$，并记第 $n$ 代总人数 $Z_n$ 的母函数为 $G_n(s) = \E{s^{Z_n}}$。显然有 $G_1(s) = G(s)$。

    1. 证明第 $n$ 代人数的母函数满足
       $$
           G_{n+1}(s) = G_{n}(G(s)) = G(G_n(s)).
       $$
    2. 我们定义“种族最终灭绝”的概率为 $p = \lim_{n \to \infty} \Pr{Z_n = 0}$。请利用上一问的结论证明，灭绝概率 $p$ 必定是方程 $s = G(s)$ 在区间 $[0, 1]$ 上的一个实根。
    3. 设每个个体的期望后代数为 $\mu = \E{X} = G'(1)$。为了排除“永远单传”这种平凡情况，我们假设 $p_1 < 1$ 且 $p_0 > 0$。请分类讨论当 $\mu \le 1$ 和 $\mu > 1$ 时，方程 $s = G(s)$ 在 $[0, 1]$ 上根的分布情况。并据此说明：在这两种情况下，种族是否会以概率 1 灭绝？
       
        ??? hint "提示"
            可以利用母函数 $G(s)$ 在区间 $(0,1)$ 上的单调性和严格下凸性（即 $G''(s) > 0$）来分析。

    4. 我们知道，分支过程 $\left\lbrace Z_n\right\rbrace_{n \ge 0}$ 可以看成是一个状态空间为 $\bb Z_{\ge 0}$ 的马尔可夫链。当 $\mu < 1$ 时，请证明这个马尔可夫链不是正常返的。
    
		如果取李雅普诺夫函数 $V(x) = x$ 以及有限集 $F = \left\lbrace 0\right\rbrace$。请证明函数 $V$ 和集合 $S$ 满足上一题给出的 Foster 定理的条件。这个例子说明了，如果在 Foster 定理中没有不可约性的假设，那么定理的结论就不再成立了。

=== "English"
    In the 19th century, to study why certain European aristocratic surnames would gradually die out, mathematicians Galton and Watson proposed a simplified mathematical model—the *branching process*.
    
    Suppose the reproduction of a population follows the following rules: The $0$-th generation has only $1$ ancestor, i.e., $Z_0 = 1$. Each individual $i$ in the $n$-th generation will independently produce $X_{i,n}$ offspring, where $X_{i,n}$ are independent and identically distributed non-negative integer random variables, and are independent of the population sizes of previous generations. Suppose the probability that each individual produces $k$ offspring is $p_k$. The total population size of the $(n+1)$-th generation can be expressed as
    $$
        Z_{n+1} = \sum_{i=1}^{Z_n} X_{i,n}
    $$
    
    We use probability generating functions to study this quantity. Let the number of offspring of a single individual be the random variable $X$, with generating function $G(s) = \E{s^X} = \sum_{k=0}^\infty p_k s^k$, and let the generating function of the total population size $Z_n$ of the $n$-th generation be $G_n(s) = \E{s^{Z_n}}$. Obviously, $G_1(s) = G(s)$.

    1. Prove that the generating function of the $n$-th generation population size satisfies
       $$
           G_{n+1}(s) = G_{n}(G(s)) = G(G_n(s)).
       $$
    2. We define the probability of "ultimate extinction of the population" as $p = \lim_{n \to \infty} \Pr{Z_n = 0}$. Using the conclusion from the previous question, prove that the extinction probability $p$ must be a real root of the equation $s = G(s)$ in the interval $[0, 1]$.
    3. Let the expected number of offspring for each individual be $\mu = \E{X} = G'(1)$. To exclude the trivial case of "always passing to a single descendant", we assume $p_1 < 1$ and $p_0 > 0$. Please discuss by case the distribution of the roots of the equation $s = G(s)$ in $[0, 1]$ when $\mu \le 1$ and $\mu > 1$. And based on this, explain: under these two cases, will the population go extinct with probability 1?
       
        ??? hint "Hint"
            You can use the monotonicity and strict convexity ($G''(s) > 0$) of the generating function $G(s)$ on the interval $(0,1)$ to analyze.

    4. We know that the branching process $\left\lbrace Z_n\right\rbrace_{n \ge 0}$ can be viewed as a Markov chain with state space $\bb Z_{\ge 0}$. When $\mu < 1$, prove that this Markov chain is not positive recurrent.
    
		If we choose the Lyapunov function $V(x) = x$ and the finite set $F = \left\lbrace 0\right\rbrace$, please prove that the function $V$ and the set $S$ satisfy the conditions of Foster's Theorem given in the previous problem. This example shows that if the assumption of irreducibility is removed from Foster's Theorem, the conclusion of the theorem will no longer hold.

--8<-- "solutions/chapter_03/problems/problem_tree_of_life.md"

### 林德利过程与系统稳定性 (Lindley Process and System Stability)
=== "中文"
    在概率论中，*林德利过程（Lindley process）*是一类定义在非负整数上的随机过程，在排队论、风险理论等领域都有着广泛的应用，其第 $n$ 步的状态 $X_n$ 可以由前一步状态 $X_{n-1}$ 和一个随机增量 $\xi_n$ 刻画：
    $$
        X_n = \max\left\lbrace X_{n-1} + \xi_n, 0\right\rbrace.
    $$

    现在我们来考虑一个具体的林德利过程，假设初始状态 $X_0 = 0$，$\left\lbrace \xi_n\right\rbrace_{n>0}$ 是一列独立同分布的整数取值随机变量，代表系统在每一步不考虑边界 $0$ 的情况下试图移动的距离，并且假设 $\xi_n$ 的分布保证了该马尔可夫链是不可约且无周期的。假设 $\Var{\xi_n}>0$，并记其期望为 $\E{\xi_n} = \lambda$。

    1. 我们先来分析上述条件下林德利过程的常返性，请证明：
        1. 考虑过程 $Y_n = \sum_{i=1}^n \xi_i$，请证明在 $n\to \infty$ 时，$\frac{Y_n}{n}$ 以概率 $1$ 收敛到 $\lambda$。
        2. 当 $\lambda < 0$ 时，该马尔可夫链是正常返的。
        3. 当 $\lambda = 0$ 时，该马尔可夫链是零常返的。
        4. 当 $\lambda > 0$ 时，该马尔可夫链是瞬时的。
    2. 我们来学习一个林德利过程在调度算法中的具体应用。在无线通信网络中，基站通常需要使用有限的无线电频谱资源来并发服务多个用户的下行数据流。如何根据实时的队列拥塞情况以及不同用户的信道质量，动态调度传输资源以防止网络崩溃，是网络控制领域的核心问题之一。
    
		考虑一个包含两个队列 $Q1$ 和 $Q2$ 的基站下行链路。在每个时刻，队列 $Q1$ 和队列 $Q2$ 分别有 $A_1(t)$和 $A_2(t)$ 个新数据包到达，其到达包数的期望分别为 $\E{A_1(t)} = \lambda_1<\infty$ 和 $\E{A_2(t)} = \lambda_2<\infty$，且有 $0<\Var{A_1(t)}, \Var{A_2(t)}<\infty$。假设 $\left\lbrace A_i(t)\right\rbrace_{t\ge 0}$ 是独立同分布的随机变量序列，并且$A_i(t)$ 之间相互独立。
		
		由于队列 $Q1$ 距离基站较近，队列 $Q2$ 距离较远，基站在每个时间步只能在以下两种服务模式中选择其一：
		
		- 模式 1：只服务队列 $Q1$。可从 $Q1$ 处理至多 3 个数据包。
		- 模式 2：只服务队列 $Q2$。可从 $Q2$ 处理至多 2 个数据包。
  		
		令 $S_1(t), S_2(t)$ 为时刻 $t$ 基站试图处理的两条队列的包数，$S_1(t)\in \left\lbrace 0,3\right\rbrace$ 且 $S_2(t)\in \left\lbrace 0,2\right\rbrace$，记两条队列 $t$ 时刻的长度分别为 $Q_1(t)$ 和 $Q_2(t)$，队列演化遵循 $Q_i(t+1) = \max \left( 0, Q_i(t) - S_i(t) \right) + A_i(t)$。
		
		1. 请证明，无论基站采用何种调度算法，当 $\lambda_1/3 + \lambda_2/2 \ge 1$ 时，该系统的状态序列 $\left\lbrace (Q_1(t), Q_2(t))\right\rbrace_{t \ge 0}$ 构成的马尔可夫链不可能是正常返的，特别地，当 $\lambda_1/3 + \lambda_2/2 >1$ 时，请证明该马尔可夫链一定是瞬时的。
		2. 请构造一个调度算法，使得当 $\lambda_1/3 + \lambda_2/2 < 1$ 时，该马尔可夫链是正常返的，并且证明你的算法满足这一性质。
        
			??? hint "提示"
				可以考虑用 Foster 定理来证明你的结论。

=== "English"
    In probability theory, the *Lindley process* is a class of stochastic processes defined on non-negative integers, which has broad applications in fields such as queueing theory and risk theory. Its state $X_n$ at step $n$ can be characterized by the state at the previous step $X_{n-1}$ and a random increment $\xi_n$:
    $$
        X_n = \max\left\lbrace X_{n-1} + \xi_n, 0\right\rbrace.
    $$

    Now let's consider a specific Lindley process. Suppose the initial state is $X_0 = 0$, and $\left\lbrace \xi_n\right\rbrace_{n>0}$ is a sequence of independent and identically distributed integer-valued random variables, representing the distance the system attempts to move at step without considering the boundary $0$. Further assume that the distribution of $\xi_n$ guarantees that this Markov chain is irreducible and aperiodic. Assume $\Var{\xi_n} > 0$, and denote its expectation as $\E{\xi_n} = \lambda$.

    1. Let's first analyze the recurrence of the Lindley process under the above conditions. Please prove:
        1. Consider the process $Y_n = \sum_{i=1}^n \xi_i$. Prove that as $n \to \infty$, $\frac{Y_n}{n}$ converges to $\lambda$ with probability $1$.
        2. When $\lambda < 0$, the Markov chain is positive recurrent.
        3. When $\lambda = 0$, the Markov chain is null recurrent.
        4. When $\lambda > 0$, the Markov chain is transient.
    2. Let's study a specific application of the Lindley process in scheduling algorithms. In wireless communication networks, base stations usually need to use limited radio spectrum resources to concurrently serve the downlink data streams of multiple users. How to dynamically schedule transmission resources to prevent network collapse based on real-time queue congestion and different users' channel quality is one of the core problems in the field of network control.
   		
		Consider a base station downlink containing two queues $Q1$ and $Q2$. At each moment, queue $Q1$ and queue $Q2$ have $A_1(t)$ and $A_2(t)$ new data packets arriving, respectively, and the expectations of their arrival packet numbers are $\E{A_1(t)} = \lambda_1 < \infty$ and $\E{A_2(t)} = \lambda_2 < \infty$, with $0 < \Var{A_1(t)}, \Var{A_2(t)} < \infty$. Suppose $\left\lbrace A_i(t)\right\rbrace_{t \ge 0}$ is a sequence of independent and identically distributed random variables, and $A_i(t)$ are mutually independent.
		
		Since queue $Q1$ is closer to the base station and queue $Q2$ is farther away, the base station can only choose one of the following two service modes at each time step:
		
		- Mode 1: Serve queue $Q1$ only. Up to 3 data packets can be processed from $Q1$.
		- Mode 2: Serve queue $Q2$ only. Up to 2 data packets can be processed from $Q2$.
		
		Let $S_1(t)$ and $S_2(t)$ be the numbers of packets the base station attempts to process from the two queues at time $t$, with $S_1(t) \in \left\lbrace 0, 3\right\rbrace$ and $S_2(t) \in \left\lbrace 0, 2\right\rbrace$. Let the lengths of the two queues at time $t$ be $Q_1(t)$ and $Q_2(t)$, respectively. The queues evolve according to $Q_i(t+1) = \max \left( 0, Q_i(t) - S_i(t) \right) + A_i(t)$.
		
		1. Prove that regardless of the scheduling algorithm used by the base station, when $\lambda_1/3 + \lambda_2/2 \ge 1$, the Markov chain formed by the state sequence $\left\lbrace (Q_1(t), Q_2(t))\right\rbrace_{t \ge 0}$ of this system cannot be positive recurrent. In particular, when $\lambda_1/3 + \lambda_2/2 > 1$, prove that this Markov chain must be transient.
		2. Construct a scheduling algorithm such that when $\lambda_1/3 + \lambda_2/2 < 1$, this Markov chain is positive recurrent, and prove that your algorithm satisfies this property.
   		
		??? hint "Hint"
			You can use Foster theorem to prove your conclusion.

--8<-- "solutions/chapter_03/problems/problem_lindley_process_and_system_stability.md"

