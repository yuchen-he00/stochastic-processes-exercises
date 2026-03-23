## 第一章 独立随机变量 (Independent Random Variables)

## 问题 (Problems) {: .prob-counter style="counter-reset: chapter 1 question 0;" }

### 双选之力 (Power of Two Choices)
=== "中文"
	在投球入箱模型中，将 $n$ 个球独立均匀随机地投入 $n$ 个箱子，最大负载高概率是 $O\left(\frac{\log n}{\log\log n}\right)$。现在改变规则：每次投球时，独立均匀随机挑选两个不同箱子，把球放入这两个箱子中当前球更少的那个（若一样多则任意选）。
    
    令 $\nu_k$ 表示投入全部 $n$ 个球后，负载至少为 $k$ 的箱子数量（$k\le n$）。
    
    1. 请证明：在已知 $\nu_k\le\beta_k$（其中 $\beta_k$ 为确定数）的条件下，以至少 $1-n^{-2}$ 的概率有
    	$$
    	\nu_{k+1}\le \frac{2\beta_k^2}{n}.
    	$$
    2. 定义序列 $\beta_k$：$\beta_6=n/4$，且
    	$$
    	\beta_{k+1}=\frac{2\beta_k^2}{n}.
    	$$
    	请解出 $\beta_{k+6}$ 的通项公式，并据此证明只需 $k^*=O(\log\log n)$ 次迭代，上界 $\beta_{k^*}$ 就会下降到 $O(\log n)$ 级别。
    
=== "English"
	In the balls-into-bins model, when $n$ balls are independently and uniformly thrown into $n$ bins, the maximum load is typically $O\left(\frac{\log n}{\log\log n}\right)$. Now change the rule: for each ball, pick two distinct bins independently and uniformly at random, and place the ball into the currently less loaded one (break ties arbitrarily).
    
    Let $\nu_k$ be the number of bins with load at least $k$ after all $n$ balls are placed ($k\le n$).
    
    1. Prove that under the condition $\nu_k\le\beta_k$ (where $\beta_k$ is deterministic), with probability at least $1-n^{-2}$,
    	$$
    	\nu_{k+1}\le \frac{2\beta_k^2}{n}.
    	$$
    2. Define $\beta_6=n/4$ and
    	$$
    	\beta_{k+1}=\frac{2\beta_k^2}{n}.
    	$$
    	Derive a closed form for $\beta_{k+6}$, and show that after only $k^*=O(\log\log n)$ iterations, $\beta_{k^*}$ drops to order $O(\log n)$.
    
--8<-- "solutions/chapter_01/problems/problem_two_choices.md"

### 乐观的馈赠 (Gift of Optimism)
=== "中文"
    在多臂老虎机中，设第 $t$ 次拉动前，第 $i$ 个臂已被拉动 $T_i(t-1)$ 次，其经验均值为 $\hat\mu_{i,T_i(t-1)}$。UCB 算法在前 $n$ 轮先各拉一次；对 $t\ge n+1$，选择最大化
    $$
    U_{i,t}=\hat\mu_{i,T_i(t-1)}+\sqrt{\frac{2\ln t}{T_i(t-1)}}
    $$
    的臂（并列随机）。设臂 $1$ 是最优臂，$\Delta_i=\mu_1-\mu_i$。
    
    1. 证明：若第 $t$ 步选择了次优臂 $i$（即 $U_{i,t}\ge U_{1,t}$），则至少发生以下三种情况之一：
    	- 事件 $A$：最优臂被严重低估：
    	  $$
    	  \hat\mu_{1,T_1(t-1)}\le \mu_1-\sqrt{\frac{2\ln t}{T_1(t-1)}}.
    	  $$
    	- 事件 $B$：次优臂被严重高估：
    	  $$
    	  \hat\mu_{i,T_i(t-1)}\ge \mu_i+\sqrt{\frac{2\ln t}{T_i(t-1)}}.
    	  $$
    	- 事件 $C$：该次优臂探索不足：
    	  $$
    	  \Delta_i\le 2\sqrt{\frac{2\ln t}{T_i(t-1)}}.
    	  $$
    2. 对固定 $t$ 和次优臂 $i$（$t\ge n+1, i\ne1$），证明事件 $A$ 与事件 $B$ 的概率都不超过 $t^{-4}$。
    3. 证明每个次优臂被拉动的期望次数
    	$$
	    \mathbb{E}[T_i(T)] = O\left(\frac{\ln T}{\Delta_i^2}\right),
    	$$
    	并据此证明 UCB 的期望懊悔上界为
    	$$
	    O\left(\sqrt{nT\ln T}\right).
    	$$
    4. 解释直观上为什么 UCB 往往优于 ETC。
    
=== "English"
    In multi-armed bandits, let $T_i(t-1)$ be the number of pulls of arm $i$ before round $t$, and let $\hat\mu_{i,T_i(t-1)}$ be its empirical mean. UCB pulls each arm once in the first $n$ rounds. For $t\ge n+1$, it chooses an arm maximizing
    $$
    U_{i,t}=\hat\mu_{i,T_i(t-1)}+\sqrt{\frac{2\ln t}{T_i(t-1)}}.
    $$
    Break ties randomly. Assume arm $1$ is optimal and define $\Delta_i=\mu_1-\mu_i$.
    
    1. Prove that if at round $t$ a suboptimal arm $i$ is selected (i.e., $U_{i,t}\ge U_{1,t}$), then at least one of the following holds:
    	- Event $A$: the optimal arm is severely underestimated:
    	  $$
    	  \hat\mu_{1,T_1(t-1)}\le \mu_1-\sqrt{\frac{2\ln t}{T_1(t-1)}};
    	  $$
    	- Event $B$: suboptimal arm $i$ is severely overestimated:
    	  $$
    	  \hat\mu_{i,T_i(t-1)}\ge \mu_i+\sqrt{\frac{2\ln t}{T_i(t-1)}};
    	  $$
    	- Event $C$: arm $i$ has not been explored enough:
    	  $$
    	  \Delta_i\le 2\sqrt{\frac{2\ln t}{T_i(t-1)}}.
    	  $$
    2. For fixed $t$ and suboptimal arm $i$ ($t\ge n+1, i\ne1$), prove that both $\Pr(A)$ and $\Pr(B)$ are at most $t^{-4}$.
    3. Prove
    	$$
	    \mathbb{E}[T_i(T)] = O\left(\frac{\ln T}{\Delta_i^2}\right)
    	$$
    	for each suboptimal arm, and deduce the UCB expected regret bound
    	$$
	    O\left(\sqrt{nT\ln T}\right).
    	$$
    4. Give an intuitive explanation for why UCB often outperforms ETC.
    
--8<-- "solutions/chapter_01/problems/problem_optimism.md"

### 纯粹的探索 (Pure Exploration)
=== "中文"
    考虑多臂老虎机的纯探索（pure exploration）变体：目标是在尽量少的拉动后停止，并以至少 $1-\delta$ 的概率输出均值最大的臂（$\delta\in(0,1)$）。
    
    1. 若已知所有次优臂与最优臂的均值差都至少为 $\Delta>0$（但不知道最优臂是谁），请基于霍夫丁不等式设计一个简单算法（如均匀探索），并给出总拉动次数上界以保证成功概率至少 $1-\delta$。
    2. 考虑连续淘汰（successive elimination）算法：维护活跃集 $S$，初始 $S=[n]$。第 $r$ 轮对活跃臂各拉一次，得到经验均值 $\hat\mu_{i,r}$，令
    	$$
    	C_r=\sqrt{\frac{\ln(4nr^2/\delta)}{2r}}.
    	$$
    	若某活跃臂 $i$ 满足
    	$$
    	\max_{j\in S}\hat\mu_{j,r}-\hat\mu_{i,r}\ge 2C_r,
    	$$
    	则淘汰 $i$。定义事件
    	$$
	    E=\{\forall i\in[n],\forall r\ge1:\ |\hat\mu_{i,r}-\mu_i|<C_r\}.
    	$$
    	请证明 $\Pr(E)\ge1-\delta$，并据此说明算法成功概率至少 $1-\delta$。
    3. 设最优臂编号为 $1$（玩家并不知道），证明：以至少 $1-\delta$ 的概率，该算法的拉动次数不超过
    	$$
	    O\left(\sum_{i\ne1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta\Delta_i}\right).
    	$$
    4. 讨论连续淘汰与均匀探索的优劣。
    
=== "English"
    Consider the pure exploration version of multi-armed bandits: we only care about stopping as early as possible and outputting the arm with largest mean with probability at least $1-\delta$ ($\delta\in(0,1)$).
    
    1. Suppose all suboptimal arms have mean gap at least $\Delta>0$ from the best arm (but the best arm is unknown). Using Hoeffding's inequality, design a simple algorithm (e.g., uniform exploration) and derive the total number of pulls needed for success probability at least $1-\delta$.
    2. Consider successive elimination: maintain an active set $S$, initialized as $S=[n]$. In round $r$, pull each active arm once and compute empirical means $\hat\mu_{i,r}$. Let
    	$$
    	C_r=\sqrt{\frac{\ln(4nr^2/\delta)}{2r}}.
    	$$
    	Eliminate active arm $i$ if
    	$$
    	\max_{j\in S}\hat\mu_{j,r}-\hat\mu_{i,r}\ge 2C_r.
    	$$
    	Define
    	$$
	    E=\{\forall i\in[n],\forall r\ge1:\ |\hat\mu_{i,r}-\mu_i|<C_r\}.
    	$$
    	Prove $\Pr(E)\ge1-\delta$, and conclude that the algorithm succeeds with probability at least $1-\delta$.
    3. Assume the optimal arm is indexed by $1$ (unknown to the learner). Prove that with probability at least $1-\delta$, the number of pulls is at most
    	$$
	    O\left(\sum_{i\ne1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta\Delta_i}\right).
    	$$
    4. Discuss advantages and disadvantages of successive elimination versus uniform exploration.
    
--8<-- "solutions/chapter_01/problems/problem_pure_exploration.md"

### 区分的代价 (Cost of Distinguishing)
=== "中文"
    在公平硬币检验中，我们知道用
    $$
	T=O\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    $$
    个样本可区分 $\mathrm{Ber}(1/2)$ 与 $\mathrm{Ber}(1/2+\varepsilon)$，且正确率至少 $1-\delta$。本题要求证明该量级最优。
    
    设
    $$
    L=\frac{1}{100\varepsilon^2}\log\frac{1}{4\delta},\qquad
    \varepsilon\in(0,1/8),\ \delta\in(0,e^{-4}/4).
    $$
    先考虑确定性算法（随机性仅来自抛硬币），并反设存在满足要求且 $\mathbb{E}_0[T]\le L$ 的算法 $\mathcal{A}$。记 $\Pr_i,\mathbb{E}_i$ 分别表示输入为情形 $i$（$i=0$ 公平，$i=1$ 有偏）时的概率与期望。样本空间 $\Omega=\{0,1\}^*$。
    
    定义事件：
    - $A$: $T\le4L$；
    - $B$: 对任意 $1\le t\le4L$，
      $$
      \left|K_t-\frac{t}{2}\right|\le\sqrt{L\log\frac{1}{4\delta}},
      $$
      其中 $K_t$ 为前 $t$ 次抛掷中正面个数；
    - $C$: 算法输出 $0$（判断为公平硬币）。
    
    1. 使用如下定理（无需证明）证明：
    	$$
    	\Pr_0(A\cap B\cap C)\ge\frac14.
    	$$
    	定理：若 $X_1,\dots,X_N$ 是独立伯努利变量，
    	$$
    	S_k=\sum_{i=1}^k\left(X_i-\mathbb{E}[X_i]\right),
    	$$
    	则任意 $s>0$ 有
    	$$
    	\Pr\left(\max_{1\le k\le N}|S_k|\ge s\right)\le\frac{\mathrm{Var}(S_N)}{s^2}.
    	$$
    2. 证明：对任意 $\omega\in A\cap B\cap C$，
    	$$
    	\frac{\Pr_1(\omega)}{\Pr_0(\omega)}\ge4\delta.
    	$$
    3. 证明 $\Pr_1(C)>\delta$，并据此说明满足要求且保证 $\mathbb{E}_0[T]\le L$ 的确定性算法不存在。
    4. 若 $\mathcal{A}$ 是随机算法（可使用额外随机数），下界
    	$$
    	\mathbb{E}_0[T]=\Omega\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    	$$
    	是否仍成立？为什么？
    5. 若你了解 KL 散度，请计算单次抛掷下这两种伯努利分布的 KL 散度，并直观解释为什么需要与 $1/\varepsilon^2$ 同阶的信息量才能把两者区分开。
    
=== "English"
    In fair-coin testing, we know that
    $$
	T=O\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    $$
    samples suffice to distinguish $\mathrm{Ber}(1/2)$ from $\mathrm{Ber}(1/2+\varepsilon)$ with success probability at least $1-\delta$. This problem asks you to prove this rate is optimal up to constants.
    
    Let
    $$
    L=\frac{1}{100\varepsilon^2}\log\frac{1}{4\delta},\qquad
    \varepsilon\in(0,1/8),\ \delta\in(0,e^{-4}/4).
    $$
    First consider deterministic algorithms (all randomness comes from coin tosses). For contradiction, assume there exists an algorithm $\mathcal{A}$ meeting the guarantee with $\mathbb{E}_0[T]\le L$. Let $\Pr_i$ and $\mathbb{E}_i$ denote probability and expectation under hypothesis $i$ ($i=0$ fair, $i=1$ biased). The sample space is $\Omega=\{0,1\}^*$.
    
    Define events:
    - $A$: $T\le4L$;
    - $B$: for all $1\le t\le4L$,
      $$
      \left|K_t-\frac{t}{2}\right|\le\sqrt{L\log\frac{1}{4\delta}},
      $$
      where $K_t$ is the number of heads in the first $t$ tosses;
    - $C$: algorithm outputs $0$ (declares fair coin).
    
    1. Using the following theorem (no proof needed), show
    	$$
    	\Pr_0(A\cap B\cap C)\ge\frac14.
    	$$
    	Theorem: If $X_1,\dots,X_N$ are independent Bernoulli random variables and
    	$$
    	S_k=\sum_{i=1}^k\left(X_i-\mathbb{E}[X_i]\right),
    	$$
    	then for any $s>0$,
    	$$
    	\Pr\left(\max_{1\le k\le N}|S_k|\ge s\right)\le\frac{\mathrm{Var}(S_N)}{s^2}.
    	$$
    2. Prove that for every $\omega\in A\cap B\cap C$,
    	$$
    	\frac{\Pr_1(\omega)}{\Pr_0(\omega)}\ge4\delta.
    	$$
    3. Prove $\Pr_1(C)>\delta$, and conclude that no deterministic algorithm satisfying the required guarantee can have $\mathbb{E}_0[T]\le L$.
    4. If $\mathcal{A}$ is randomized (with extra internal randomness), does the lower bound
    	$$
    	\mathbb{E}_0[T]=\Omega\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    	$$
    	still hold? Why?
    5. If you know KL divergence, compute the KL divergence between the two Bernoulli distributions per toss, and explain intuitively why distinguishing them requires information of order $1/\varepsilon^2$.
    
--8<-- "solutions/chapter_01/problems/problem_distinguishing_cost.md"

### 必输之战 (An Unavoidable Loss)
=== "中文"
    在上一题基础上，推广到多臂老虎机（MAB）懊悔下界。
    
    考虑 $K=n+1$ 个臂，编号 $0,1,\dots,n$。构造实例集合
    $$
    \mathcal{I}=\{\nu_0,\nu_1,\dots,\nu_n\}:
    $$
    - 实例 $\nu_0$：臂 $0\sim\mathrm{Ber}(\tfrac12+\tfrac\varepsilon2)$，其余 $i\in[n]$ 满足 $\mathrm{Ber}(\tfrac12)$；
    - 实例 $\nu_j$（$j\in[n]$）：臂 $0\sim\mathrm{Ber}(\tfrac12+\tfrac\varepsilon2)$，臂 $j\sim\mathrm{Ber}(\tfrac12+\varepsilon)$（最优），其余臂 $\mathrm{Ber}(\tfrac12)$。
    
    称算法是 $(\varepsilon,\delta)$-PAC 的，若停止时以至少 $1-\delta$ 的概率输出一个 $\varepsilon$-最优臂。记 $T_j$ 为臂 $j$ 被拉动总次数，$\mathbb{E}_\nu[\cdot]$ 为实例 $\nu$ 下期望。
    
    1. 假设 $\mathcal{G}$ 是 $(\varepsilon/2,\delta)$-PAC 算法（$\delta<1/8$）。利用上一题结论论证：存在常数 $c>0$，使得任意 $j\in[n]$ 在实例 $\nu_0$ 下都有
    	$$
    	\mathbb{E}_{\nu_0}[T_j]\ge\frac{c}{\varepsilon^2}\log\frac{1}{\delta}.
    	$$
    2. 设总轮数为 $T$ 的 MAB 算法 $\mathcal{A}$ 在实例 $\nu$ 上的累积期望懊悔为 $R_T(\mathcal{A},\nu)$。证明：对任意 MAB 算法 $\mathcal{A}$，总存在某个实例 $\nu\in\mathcal{I}$ 使得
    	$$
    	R_T(\mathcal{A},\nu)=\Omega(\sqrt{nT}).
    	$$
    	提示：取 $\varepsilon=2\sqrt{n/T}$，若假设 $\mathcal{A}$ 在所有实例上懊悔都很小，可构造纯探索算法：运行 $\mathcal{A}$ 共 $T$ 轮后输出被拉动次数最多的臂，并与第 1 问矛盾。
    
=== "English"
    Building on the previous problem, derive a lower bound on regret for multi-armed bandits (MAB).
    
    Consider a bandit with $K=n+1$ arms indexed by $0,1,\dots,n$. Construct the instance family
    $$
    \mathcal{I}=\{\nu_0,\nu_1,\dots,\nu_n\}:
    $$
    - Instance $\nu_0$: arm $0\sim\mathrm{Ber}(\tfrac12+\tfrac\varepsilon2)$, and each other arm $i\in[n]$ has $\mathrm{Ber}(\tfrac12)$;
    - Instance $\nu_j$ ($j\in[n]$): arm $0\sim\mathrm{Ber}(\tfrac12+\tfrac\varepsilon2)$, arm $j\sim\mathrm{Ber}(\tfrac12+\varepsilon)$ (optimal), and all other arms are $\mathrm{Ber}(\tfrac12)$.
    
    An algorithm is $(\varepsilon,\delta)$-PAC if it outputs an $\varepsilon$-optimal arm with probability at least $1-\delta$ upon stopping. Let $T_j$ be the total number of pulls of arm $j$, and $\mathbb{E}_\nu[\cdot]$ denote expectation under instance $\nu$.
    
    1. Assume $\mathcal{G}$ is $(\varepsilon/2,\delta)$-PAC with $\delta<1/8$. Using the previous problem, show there exists a constant $c>0$ such that for every $j\in[n]$, under $\nu_0$,
    	$$
    	\mathbb{E}_{\nu_0}[T_j]\ge\frac{c}{\varepsilon^2}\log\frac{1}{\delta}.
    	$$
    2. Let $\mathcal{A}$ be any MAB algorithm run for $T$ rounds, and let its cumulative expected regret on instance $\nu$ be $R_T(\mathcal{A},\nu)$. Prove that for any such algorithm, there exists some $\nu\in\mathcal{I}$ such that
    	$$
    	R_T(\mathcal{A},\nu)=\Omega(\sqrt{nT}).
    	$$
    	Hint: set $\varepsilon=2\sqrt{n/T}$. If $\mathcal{A}$ had small regret on all instances, construct a pure-exploration algorithm by running $\mathcal{A}$ for $T$ rounds and outputting the most-pulled arm; then derive a contradiction with part 1.
    
--8<-- "solutions/chapter_01/problems/problem_unavoidable_loss.md"

### 均匀性测试 (Uniformity Testing)
=== "中文"
    考虑样本空间 $\Omega=\{1,2,\dots,n\}$。对分布 $q$，记 $q_i=\Pr(X=i)$。对分布 $p,q$，总变分距离定义为
    $$
    d_{\mathrm{TV}}(p,q)=\frac12\sum_{i=1}^n|p_i-q_i|.
    $$
    令 $\mu$ 为均匀分布，$\pi$ 为未知分布。已知 $\pi$ 要么等于 $\mu$，要么满足 $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$（$\varepsilon\in(0,1/2)$）。目标是用尽量少样本做判别。
    
    1. 令
    	$$
    	\|\pi\|=\sqrt{\sum_{i=1}^n\pi_i^2}.
    	$$
    	若 $X,Y$ 独立采自 $\pi$，证明
    	$$
    	\Pr(X=Y)=\|\pi\|^2.
    	$$
    2. 证明：
    	1) $\|\mu\|^2=1/n$；
    	2) 若 $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$，则
    	$$
    	\|\pi\|^2-\|\mu\|^2\ge\frac{4\varepsilon^2}{n}.
    	$$
    3. 设 $X_1,\dots,X_m$（$m\ge4$）独立采自 $\pi$。对 $1\le i<j\le m$，定义
    	$$
    	Y_{ij}=\mathbf{1}\{X_i=X_j\},\qquad
    	Z=\frac{1}{\binom m2}\sum_{1\le i<j\le m}Y_{ij}.
    	$$
    	证明：
    	1) $\mathbb{E}[Z]=\|\pi\|^2$；
    	2)
    	$$
    	\mathrm{Var}(Z)\le\frac{4\|\pi\|^3}{m}+\frac{4\|\pi\|^2}{m^2};
    	$$
    	3) 无论 $\pi=\mu$ 或 $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$，都有
    	$$
    	\Pr\left(|Z-\mathbb{E}[Z]|\ge\varepsilon^2\mathbb{E}[Z]\right)
    	\le \frac{4\sqrt n}{\varepsilon^4m}+\frac{4n}{\varepsilon^4m^2}.
    	$$
    4. 考虑算法：采样
    	$$
    	m=\frac{100\sqrt n}{\varepsilon^4}
    	$$
    	个样本并计算 $Z$。若
    	$$
    	Z\ge\frac{1+2\varepsilon^2}{n}
    	$$
    	输出“$d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$”，否则输出“$\pi=\mu$”。请证明该算法出错概率不超过 $0.1$。
    
=== "English"
    Let the sample space be $\Omega=\{1,2,\dots,n\}$. For a distribution $q$, write $q_i=\Pr(X=i)$. For distributions $p,q$, define total variation distance by
    $$
    d_{\mathrm{TV}}(p,q)=\frac12\sum_{i=1}^n|p_i-q_i|.
    $$
    Let $\mu$ be uniform on $\Omega$, and $\pi$ be an unknown distribution. Assume either $\pi=\mu$, or $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$ where $\varepsilon\in(0,1/2)$. The goal is to decide which case holds using as few samples as possible.
    
    1. Define
    	$$
    	\|\pi\|=\sqrt{\sum_{i=1}^n\pi_i^2}.
    	$$
    	If $X,Y$ are i.i.d. from $\pi$, prove
    	$$
    	\Pr(X=Y)=\|\pi\|^2.
    	$$
    2. Prove:
    	1) $\|\mu\|^2=1/n$;
    	2) if $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$, then
    	$$
    	\|\pi\|^2-\|\mu\|^2\ge\frac{4\varepsilon^2}{n}.
    	$$
    3. Let $X_1,\dots,X_m$ ($m\ge4$) be i.i.d. from $\pi$. For $1\le i<j\le m$, define
    	$$
    	Y_{ij}=\mathbf{1}\{X_i=X_j\},\qquad
    	Z=\frac{1}{\binom m2}\sum_{1\le i<j\le m}Y_{ij}.
    	$$
    	Prove:
    	1) $\mathbb{E}[Z]=\|\pi\|^2$;
    	2)
    	$$
    	\mathrm{Var}(Z)\le\frac{4\|\pi\|^3}{m}+\frac{4\|\pi\|^2}{m^2};
    	$$
    	3) regardless of whether $\pi=\mu$ or $d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$,
    	$$
    	\Pr\left(|Z-\mathbb{E}[Z]|\ge\varepsilon^2\mathbb{E}[Z]\right)
    	\le \frac{4\sqrt n}{\varepsilon^4m}+\frac{4n}{\varepsilon^4m^2}.
    	$$
    4. Consider this tester: sample
    	$$
    	m=\frac{100\sqrt n}{\varepsilon^4}
    	$$
    	points from $\pi$ and compute $Z$. If
    	$$
    	Z\ge\frac{1+2\varepsilon^2}{n},
    	$$
    	output "$d_{\mathrm{TV}}(\pi,\mu)\ge\varepsilon$"; otherwise output "$\pi=\mu$". Prove the error probability is at most $0.1$.
    
--8<-- "solutions/chapter_01/problems/problem_uniformity_testing.md"

### 学习离散分布 (Learning a Discrete Distribution)
=== "中文"
    令未知分布 $p$ 定义在 $\Omega=\{1,2,\dots,n\}$ 上。给定 $T$ 个独立样本
    $$
    X_1,X_2,\dots,X_T\sim p,
    $$
    希望输出经验分布 $\hat p$，使得以至少 $1-\delta$ 的概率满足
    $$
    d_{\mathrm{TV}}(p,\hat p)=\frac12\sum_{i=1}^n|p_i-\hat p_i|\le\varepsilon.
    $$
    1. 先考虑 $n=2$。请设计一个算法，使用
    	$$
	    T=O\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    	$$
    	个样本，以至少 $1-\delta$ 概率找到满足 $d_{\mathrm{TV}}(p,\hat p)\le\varepsilon$ 的 $\hat p$，并给出分析。
    2. 对一般 $n\ge2$，证明
    	$$
    	d_{\mathrm{TV}}(p,\hat p)=\max_{S\subseteq[n]}\sum_{j\in S}(p_j-\hat p_j).
    	$$
    3. 对每个 $i\in[n]$，令
    	$$
    	\hat p_i=\frac1T\sum_{t=1}^T\mathbf{1}\{X_t=i\}.
    	$$
    	对任意子集 $S\subseteq[n]$，记
    	$$
    	p(S)=\sum_{j\in S}p_j,\qquad \hat p(S)=\sum_{j\in S}\hat p_j.
    	$$
    	请证明存在常数 $c>0$，使得任意 $S$、任意 $\varepsilon>0$，都有
    	$$
    	\Pr\big(p(S)-\hat p(S)\ge\varepsilon\big)\le \exp(-c\varepsilon^2T).
    	$$
    4. 证明：使用上述经验分布构造，只需
    	$$
	    T=O\left(\frac{1}{\varepsilon^2}\left(n+\log\frac1\delta\right)\right)
    	$$
    	个样本，就能以至少 $1-\delta$ 概率满足 $d_{\mathrm{TV}}(p,\hat p)\le\varepsilon$。
    
=== "English"
    Let an unknown distribution $p$ be defined on $\Omega=\{1,2,\dots,n\}$. Given $T$ i.i.d. samples
    $$
    X_1,X_2,\dots,X_T\sim p,
    $$
    we want to output an empirical distribution $\hat p$ such that with probability at least $1-\delta$,
    $$
    d_{\mathrm{TV}}(p,\hat p)=\frac12\sum_{i=1}^n|p_i-\hat p_i|\le\varepsilon.
    $$
    1. First consider $n=2$. Design an algorithm using
    	$$
	    T=O\left(\frac{1}{\varepsilon^2}\log\frac{1}{\delta}\right)
    	$$
    	samples, which outputs $\hat p$ satisfying $d_{\mathrm{TV}}(p,\hat p)\le\varepsilon$ with probability at least $1-\delta$, and analyze it.
    2. For general $n\ge2$, prove
    	$$
    	d_{\mathrm{TV}}(p,\hat p)=\max_{S\subseteq[n]}\sum_{j\in S}(p_j-\hat p_j).
    	$$
    3. For each $i\in[n]$, define
    	$$
    	\hat p_i=\frac1T\sum_{t=1}^T\mathbf{1}\{X_t=i\}.
    	$$
    	For any subset $S\subseteq[n]$, let
    	$$
    	p(S)=\sum_{j\in S}p_j,\qquad \hat p(S)=\sum_{j\in S}\hat p_j.
    	$$
    	Prove there exists a constant $c>0$ such that for any $S$ and any $\varepsilon>0$,
    	$$
    	\Pr\big(p(S)-\hat p(S)\ge\varepsilon\big)\le \exp(-c\varepsilon^2T).
    	$$
    4. Prove that with the above empirical estimator, it is enough to take
    	$$
	    T=O\left(\frac{1}{\varepsilon^2}\left(n+\log\frac1\delta\right)\right)
    	$$
    	samples to guarantee $d_{\mathrm{TV}}(p,\hat p)\le\varepsilon$ with probability at least $1-\delta$.
    
--8<-- "solutions/chapter_01/problems/problem_discrete_distribution.md"

### 没有免费的午餐 (No Free Lunch)
=== "中文"
    在二分类问题中，给定样本集
    $$
    S_m=\{(X_i,C(X_i))\}_{i=1}^m,
    $$
    其中 $X_i\in\mathbb{R}^d$ 独立同分布采样自未知分布 $\mu$，标签由布尔函数 $C:\mathbb{R}^d\to\{0,1\}$ 给出。学习算法 $\mathcal{A}$ 输出分类器
    $$
    h=\mathcal{A}(\cdot,S_m),
    $$
    误差为
    $$
    R(h)=\Pr(h(X)\ne C(X)),\quad X\sim\mu.
    $$
    给定任意学习算法 $\mathcal{A}$ 和任意偶数大小有限特征空间 $\mathcal{X}\subseteq\mathbb{R}^d$，其中 $|\mathcal{X}|=2m>4$。请证明存在函数 $C:\mathcal{X}\to\{0,1\}$ 和分布 $\mu$，使得
    $$
    \Pr\big(R(\mathcal{A}(\cdot,S_m))\ge1/8\big)\ge1/8.
    $$
    证明中可采用如下随机构造：令 $\mu$ 为 $\mathcal{X}$ 上均匀分布；对每个 $x\in\mathcal{X}$，独立均匀随机取 $Y_x\in\{0,1\}$，并定义随机函数 $C(x)=Y_x$。
    
    1. 先在随机标签 $\{Y_x\}_{x\in\mathcal{X}}$ 与随机样本 $S_m$ 上证明
    	$$
    	\mathbb{E}[R(\mathcal{A}(\cdot,S_m))]\ge\frac14,
    	$$
    	并由此说明存在一个确定的函数 $C$ 使得（仅对样本 $S_m$ 取期望）
    	$$
    	\mathbb{E}[R(\mathcal{A}(\cdot,S_m))]\ge\frac14.
    	$$
    2. 基于上一问，证明存在确定性函数 $C$ 使得
    	$$
    	\Pr\big(R(\mathcal{A}(\cdot,S_m))\ge1/8\big)\ge1/8.
    	$$
=== "English"
    In binary classification, given a sample set
    $$
    S_m=\{(X_i,C(X_i))\}_{i=1}^m,
    $$
    where $X_i\in\mathbb{R}^d$ are i.i.d. from an unknown distribution $\mu$, and labels are given by a Boolean function $C:\mathbb{R}^d\to\{0,1\}$, a learning algorithm $\mathcal{A}$ outputs a classifier
    $$
    h=\mathcal{A}(\cdot,S_m),
    $$
    with error
    $$
    R(h)=\Pr(h(X)\ne C(X)),\quad X\sim\mu.
    $$
    Given any learning algorithm $\mathcal{A}$ and any finite feature space $\mathcal{X}\subseteq\mathbb{R}^d$ with even size $|\mathcal{X}|=2m>4$, prove that there exist a target function $C:\mathcal{X}\to\{0,1\}$ and a distribution $\mu$ such that
    $$
    \Pr\big(R(\mathcal{A}(\cdot,S_m))\ge1/8\big)\ge1/8.
    $$
    You may use the following random construction: let $\mu$ be uniform on $\mathcal{X}$; for each $x\in\mathcal{X}$, independently sample $Y_x\in\{0,1\}$ uniformly and define $C(x)=Y_x$.
    
    1. First prove over random labels $\{Y_x\}_{x\in\mathcal{X}}$ and random sample $S_m$ that
    	$$
    	\mathbb{E}[R(\mathcal{A}(\cdot,S_m))]\ge\frac14,
    	$$
    	and conclude there exists a fixed function $C$ such that (expectation only over $S_m$)
    	$$
    	\mathbb{E}[R(\mathcal{A}(\cdot,S_m))]\ge\frac14.
    	$$
    2. Based on part 1, prove there exists a deterministic $C$ such that
    	$$
    	\Pr\big(R(\mathcal{A}(\cdot,S_m))\ge1/8\big)\ge1/8.
    	$$
--8<-- "solutions/chapter_01/problems/problem_no_free_lunch.md"
