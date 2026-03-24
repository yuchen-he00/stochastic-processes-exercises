## 第一章 独立随机变量 (Independent Random Variables)

## 问题 (Problems) {: .prob-counter style="counter-reset: chapter 1 question 0;" }

### 双选之力 (Power of Two Choices)
=== "中文"
    在正文讲的投球入箱模型中，我们将 $n$ 个球独立均匀随机地投入 $n$ 个箱子，最大负载高概率是 $O\tp{\frac{\log n}{\log \log n}}$。这就是大自然的“不公平性”。现在假设我们改变投球规则：每次投球时，我们独立均匀随机地挑选 $2$ 个不同的箱子，然后看一眼，把球放入这两个箱子中当前球更少的那一个（如果一样多就随便挑一个）。
    1. 令 $\nu_k$ 表示在投入全部 $n$ 个球后，负载至少为 $k$ 的箱子数量（$k\le n$）。请证明：在已知 $\nu_k \le \beta_k$ 的条件下（其中 $\beta_k$ 是一个确定的数），以至少 $1 - n^{-2}$ 的概率，有
    	$$
    	\nu_{k+1} \le \frac{2\beta_k^2}{n}.
    	$$
    2. 定义序列 $\beta_k$ 如下：$\beta_6 = n/4$，且 $\beta_{k+1} = \frac{2\beta_k^2}{n}$。请解出 $\beta_{k+6}$ 的通项公式。并据此证明，只需要 $k^* = O(\log \log n)$ 次迭代，上界 $\beta_{k^*}$ 就会下降到 $O(\log n)$ 的级别。
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_two_choices.md"

### 乐观的馈赠 (Gift of Optimism)
=== "中文"
	在正文中讨论多臂老虎机时，我们提到，即使不知晓各个臂的期望收益率，通过置信区间构建的 UCB（Upper Confidence Bound）算法能够实现更优的次线性懊悔。假设我们在第 $t$ 次拉动前，第 $i$ 个臂已被拉动了 $T_i(t-1)$ 次，其前几次的经验均值为 $\hat{\mu}_{i, T_i(t-1)}$。UCB 算法在前 $n$ 轮会把每个臂拉一遍，以保证后续 $T_i(t-1)>0$，对于 $t\ge n+1$，算法在第 $t$ 次会选择最大化以下值的臂：
	$$
	U_{i,t} = \hat{\mu}_{i, T_i(t-1)} + \sqrt{\frac{2\ln t}{T_i(t-1)}}.
	$$
	如果取到最大值的有多个臂，则随机选择其中一个。不妨假设 $1$ 臂是最优臂（玩家并不知道这个信息），并令 $\Delta_i=\mu_1-\mu_i$。
	1. 请证明，如果 UCB 算法在第 $t$ 步（$t\ge n+1$）选择了次优臂 $i$（意味着 $U_{i,t} \geq U_{1,t}$），那么必然有以下三种情况之一发生了：
	- 事件 $A$：最优臂 $1$ 的经验均值被严重低估了，即 $\hat{\mu}_{1, T_1(t-1)} \le \mu_1 - \sqrt{\frac{2\ln t}{T_1(t-1)}}$；
	- 事件 $B$：次优臂 $i$ 的经验均值被严重高估了，即 $\hat{\mu}_{i, T_i(t-1)} \ge \mu_i + \sqrt{\frac{2\ln t}{T_i(t-1)}}$；
	- 事件 $C$：该次优臂 $i$ 被探索的次数还不够多，$T_i(t-1)$ 对于区分均值差 $\Delta_i$ 来说太小了，即 $\Delta_i \leq 2\sqrt{\frac{2\ln t}{T_i(t-1)}}$。
	2. 对于确定的 $t$ 和次优臂 $i$（其中 $t\ge n+1$, $i\neq 1$），请证明上一问中事件 $A$ 和事件 $B$ 发生的概率均不超过 $t^{-4}$。
	3. 证明每个次优臂被拉动的期望次数 $\E{T_i(T)} = O\tp{\frac{\ln T}{\Delta_i^2}}$，并据此进一步证明 UCB 算法的期望懊悔上界为 $O\tp{\sqrt{nT\ln T}}$。
	4. 请指出直观上 UCB 算法为什么比 ETC 算法的表现更好？
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_optimism.md"

### 纯粹的探索 (Pure Exploration)
=== "中文"
    考虑多臂老虎机的纯探索（pure exploration）变体，我们不在乎累计懊悔，我们唯一的目的是：拉动尽可能少的次数之后结束探索，并且在结束时以至少 $1-\delta$ 的概率输出均值最大的那个臂（$\delta \in (0,1)$）。
    1. 如果我们已知所有次优臂与最优臂的均值差距都至少为 $\Delta > 0$（但不知道哪个是最优臂）。基于霍夫丁不等式，请设计一个简单的算法（例如，对所有臂进行相同次数的均匀探索），说明总共需要拉动多少次才能保证有至少 $1-\delta$ 的概率选出最优臂。
    2. 均匀探索算法存在的问题是会在明显极差的臂上浪费大量单次测试成本。我们可以考虑一个更聪明的连续淘汰（successive elimination）算法：维护一个活跃臂的集合 $S$，初始 $S=[n]$。在第 $r$ 轮对活跃集的每一个臂各拉动一次，获得活跃集中每个臂在前 $r$ 轮的经验均值 $\hat{\mu}_{i,r}$。取 $C_r = \sqrt{\frac{\ln(4n r^2 / \delta)}{2r}}$，若某一活跃臂 $i$ 的经验均值满足 $\max_{j\in S}\hat{\mu}_{j,r} - \hat{\mu}_{i,r}\geq 2C_r$，则将臂 $i$ 从活跃集中淘汰。定义事件
    	$$
	    \mathcal{E} = \left\lbrace \forall\, i \in [n],\; \forall\, r \ge 1 :\ \abs{\hat{\mu}_{i,r} - \mu_i} < C_r \right\rbrace
    	$$
    	请证明 $\Pr{\mathcal{E}}\geq 1-\delta$，并据此说明算法成功概率至少为 $1-\delta$。
    3. 不妨假设最优臂的标号为 $1$（玩家并不知道这个信息），请证明，以至少 $1-\delta$ 的概率，该算法的拉动次数不超过 $O\tp{\sum_{i\neq 1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta \Delta_i}}$。
    4. 探讨上述连续淘汰算法与均匀探索算法的优劣。
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_pure_exploration.md"

### 区分的代价 (Cost of Distinguishing)
=== "中文"
	在公平硬币检验中，我们讲过如何用 $T = O\tp{\frac{1}{\eps^2}\log\frac{1}{\delta}}$ 个样本来判断一个硬币是公平的（$\!{Ber}(1/2)$）还是有偏的（$\!{Ber}(1/2+\eps)$），且判断准确的概率至少为 $1-\delta$。在本题中，我们将证明（在忽略常数倍的意义下）这一算法是最优的。换言之，我们将证明任何满足该条件的算法在输入是公平硬币时必有 $\E{T} = \Omega\tp{\frac{1}{\eps^2}\log\frac{1}{\delta}}$。

	设 $L = \frac{1}{100\eps^2}\log\frac{1}{4\delta}$。假设 $\eps \in (0, 1/8), \delta \in (0, e^{-4}/4)$。我们先考虑确定性算法，即随机性的唯一来源是扔硬币的结果。令 $\Pr[0]{\cdot}$ 和 $\E[0]{\cdot}$ 表示输入硬币是情况 $0$ 时的概率和期望，令 $\Pr[1]{\cdot}$ 和 $\E[1]{\cdot}$ 表示输入硬币是情况 $1$ 时的概率和期望，其中 $0$ 表示公平硬币，$1$ 表示有偏硬币。使用反证法，假设存在一个满足要求的确定性算法 $\mathcal{A}$，满足 $\E[0]{T} \le L$。考虑样本空间 $\Omega = \left\{0, 1\right\}^{*}$。

	定义如下三个事件：
	- $A$: $T \le 4L$；
	- $B$: 对于任意 $1 \le t \le 4L$，$\abs{K_t - \frac{t}{2}} \le \sqrt{L \log \frac{1}{4\delta}}$，其中 $K_t$ 表示前 $t$ 次实验中正面的个数；
	- $C$: $\mathcal{A}$ 输出 $0$，即认为硬币是公平的。

	1. 下面这个定理是切比雪夫不等式的推广，请用这个定理证明 $\Pr[0]{A \cap B \cap C} \ge 1/4$（此定理本身无需证明，可以直接使用）。
		!!! theorem "定理（可直接使用）"
			假设 $X_1,\dots,X_N$ 是 $N$ 个定义在同一个概率空间上的独立伯努利随机变量，令 $S_k=\sum_{i=1}^k \tp{X_i - \E{X_i}}$，那么对于任意的 $s>0$,
			$$
			\Pr{\max_{1\le k\le N}\abs{S_k}\ge s} \le \frac{\Var{S_n}}{s^2}.
			$$
	2. 请证明，对于任意的 $\omega \in A \cap B \cap C$，有 $\frac{\Pr[1]{\omega}}{\Pr[0]{\omega}} \ge 4\delta$。
	3. 请证明 $\Pr[1]{C} > \delta$，并据此证明满足要求且保证 $\E[0]{T} \le L$ 的确定性算法是不存在的。
	4. 若 $\mathcal{A}$ 是一个随机算法，即 $\mathcal{A}$ 可以使用额外的随机数，那么 $\E[0]{T} = \Omega\tp{\frac{1}{\eps^2}\log\frac{1}{\delta}}$ 的下界是否仍然成立？为什么？
	5. 如果你了解相对熵（KL divergence），计算硬币每次独立抛掷中这两种伯努利分布的 KL 散度。你能否直观地解释，为了使两个分布产生的可观测序列在统计上变得“足够好区分”，我们需要积累与 $1/\eps^2$ 成正比的信息量？
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_distinguishing_cost.md"

### 必输的赌博 (A Losing Gamble)
=== "中文"
    在上一题中，我们证明了要区分公平硬币和偏差 $\eps$ 的硬币，至少需要 $\Omega(\eps^{-2}\log \delta^{-1})$ 的样本。本题我们将这一结论推广，来证明多臂老虎机（MAB）的懊悔下界。

	考虑 $K = n+1$ 个臂的老虎机，臂的编号为 $0, 1, \dots, n$。我们构造如下 $n+1$ 个实例集合 $\mathcal{I} = \left\{\nu_0, \nu_1, \dots, \nu_n\right\}$：
    - 实例 $\nu_0$：臂 $0$ 是最优臂，服从 $\!{Ber}\tp{\frac{1}{2} + \frac{\eps}{2}}$；其余臂 $i \in [n]$ 服从 $\!{Ber}\tp{\frac{1}{2}}$。
	- 实例 $\nu_j$（$j \in [n]$）：臂 $0$ 服从 $\!{Ber}\tp{\frac{1}{2} + \frac{\eps}{2}}$；臂 $j$ 是最优臂，服从 $\!{Ber}\tp{\frac{1}{2} + \eps}$；其余臂 $i \notin \left\{0, j\right\}$ 服从 $\!{Ber}\tp{\frac{1}{2}}$。

    在这个问题上，我们称一个算法是 $(\eps, \delta)$-PAC 的，如果它在停止时能以至少 $1-\delta$ 的概率输出一个 $\eps$-最优臂（即其与最优臂的期望受益之差小于 $\eps$）。令 $T_j$ 表示臂 $j$ 被拉动的总次数，$\E[\nu]{\cdot}$ 表示在实例 $\nu$ 下的期望，注意，此处的随机性来自算法本身的随机性以及臂的收益的随机性。

    1. 假设 $\mathcal{G}$ 是一个 $\tp{\frac{\eps}{2}, \delta}$-PAC 算法（其中 $\delta < 1/8$）。请利用上一题的结论论证：存在常数 $c>0$，使得对于任意 $j \in [n]$，在实例 $\nu_0$ 下，算法 $\mathcal{G}$ 拉动臂 $j$ 的期望次数 $\E[\nu_0]{T_j}$ 满足：
    	$$
    	\E[\nu_0]{T_j} \ge \frac{c}{\eps^2} \log \frac{1}{\delta} .
    	$$
    2. 考虑一个总轮数为 $T$ 的 MAB 算法 $\mathcal{A}$，设其在实例 $\nu$ 上的累积期望懊悔为 $R_T(\mathcal{A}, \nu)$。请证明：对于任意 MAB 算法 $\mathcal{A}$，总是存在某个实例 $\nu \in \mathcal{I}$，使得
    	$$
    	R_T(\mathcal{A}, \nu) = \Omega(\sqrt{nT}).
    	$$
		??? hint "提示"
			取 $\eps = 2\sqrt{\frac{n}{T}}$。假设 $\mathcal{A}$ 在所有实例上的懊悔都很小，可以构造一个纯探索算法 $\mathcal{G}$：运行 $\mathcal{A}$ 一共 $T$ 轮，然后输出被拉动次数最多的臂。证明 $\mathcal{G}$ 是一个 $\tp{\frac{\eps}{2}, \delta}$-PAC 算法，并利用第一问的结论导出矛盾。
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_unavoidable_loss.md"

### 均匀性测试 (Uniformity Testing)
=== "中文"
	在公平硬币检验中，我们讲了如何区分公平硬币和有偏硬币。现在我们来推广这个问题。

	考虑样本空间 $\Omega = \left\{1, 2, \dots, n\right\}$。对于 $\Omega$ 上的任意一个分布 $q$，令 $q_i$ 表示从分布 $q$ 中采样一次得到样本为 $i$ 的概率（$i \in [n]$）。对于 $\Omega$ 上的两个分布 $p$ 和 $q$，定义其总变分距离（total variation distance）为 $\dTV(p, q) = \frac{1}{2} \sum_{i=1}^n \abs{p_i - q_i}$。

    令 $\mu$ 是 $\Omega$ 上的均匀分布，$\pi$ 是 $\Omega$ 上的一个未知分布。假设我们已经知道 $\pi$ 要么就是均匀分布（即 $\pi = \mu$），要么与均匀分布差别很大，即 $\dTV(\pi, \mu) \ge \eps$（其中 $\eps \in (0, 1/2)$ 是一个已知的常数）。均匀性测试问题指的是，通过从分布中采样，来判断它到底是均匀分布还是距离均匀分布很远。在这个问题里，我们来设计一个高效的均匀性测试算法，即使用尽量少的样本来保证至少 $1 - \delta$ 的判断准确概率。

	大家可以首先猜一下我们至少需要多少个样本才能达到这个目标。在正文里，我们讲了奖券收集问题，知道平均需要大约 $n \log n$ 个样本，才能够保证每一个样本都被采集到。这是否说明，判断目标分布是不是均匀分布，至少需要 $\Omega(n \log n)$ 个样本呢？

	实际上，我们可以用少得多的样本达到这个目标。我们一起来设计一个算法，只要用 $O(\sqrt{n})$ 的样本就可以了。假设 $n = 10000$，那么我们只要取几百个样本就能判断是不是均匀分布，我们并不需要获得绝大多数样本的信息。我们用到的工具就是正文提到的生日悖论，我们知道如果 $\pi$ 是均匀分布，那么实际上大约 $\Theta(\sqrt{n})$ 个样本就可以保证高概率出现两个同样的样本。我们接下来的讨论将说明，均匀分布是让这件事最难发生的分布，并利用这个事实来判断一个分布是不是均匀分布。

    1. 令 $\|\pi\| = \sqrt{\sum_{i=1}^n \pi_i^2}$。假设 $X$ 和 $Y$ 是独立地从 $\pi$ 中采的两个样本，请证明 $\Pr{X = Y} = \|\pi\|^2$。这里 $\|\pi\|^2$ 被称为碰撞概率。
    2. 请证明：
    	1) $\|\mu\|^2 = \frac{1}{n}$；
    	2) 若 $\dTV(\pi, \mu) \ge \eps$，则有 $\|\pi\|^2 - \|\mu\|^2 \ge \frac{4\eps^2}{n}$。
    3. 假设 $X_1, X_2, \dots, X_m$ 是 $m$ 个从 $\pi$ 中独立采出的样本点（$m \ge 4$），对于 $1 \le i < j \le m$，定义随机变量 $Y_{ij} = \1{X_i = X_j}$。令 $Z = \frac{1}{\binom{m}{2}} \sum_{1 \le i < j \le m} Y_{ij}$ 表示碰撞发生的频率，请证明：
    	1) $\E{Z} = \|\pi\|^2$；
    	2) $\Var{Z} \le \frac{4\|\pi\|^3}{m} + \frac{4\|\pi\|^2}{m^2}$；
    	3) 无论 $\pi = \mu$ 或 $\dTV(\pi, \mu) \ge \eps$，都有
    	$$
    	\Pr{\abs{Z - \E{Z}} \ge \eps^2 \E{Z}} \le \frac{4\sqrt{n}}{\eps^4 m} + \frac{4n}{\eps^4 m^2}.
    	$$
    4. 根据以上结论，我们知道当 $\dTV(\pi, \mu) \ge \eps$ 时碰撞发生概率明显大于均匀分布下碰撞发生概率，于是我们可以考虑根据碰撞发生频率 $Z$ 的大小来判断 $\pi$ 是否为均匀分布。我们考虑如下算法：
    - 从 $\pi$ 中独立地采 $m = \frac{100\sqrt{n}}{\eps^4}$ 个样本点，并计算 $Z$ 的值；
    - 若 $Z \ge \frac{1+2\eps^2}{n}$，则输出 $\dTV(\pi, \mu) \ge \eps$，反之输出 $\pi = \mu$。
    	请证明该算法出错概率不超过 $0.1$。
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_uniformity_testing.md"

### 学习离散分布 (Learning a Discrete Distribution)
=== "中文"
	假设你计划在校园里开一家咖啡店，想了解学生们最喜欢的咖啡口味。菜单上有 $n$ 种选择。你决定进行一次问卷调查，随机询问学生他们最喜欢的咖啡。问题是：如何利用这些数据来推断学生们的口味偏好？你需要询问多少名学生？

	我们将这个问题转化为一个数学模型。令 $p$ 为样本空间 $\Omega = \left\{1, 2, \dots, n\right\}$ 上的一个未知分布。现在我们有 $T$ 个独立同分布的样本 $X_1, X_2, \dots, X_T \sim p$。我们希望利用这些样本计算出一个经验分布 $\hat{p}$，使得 $\hat{p}$ 尽可能接近 $p$。具体而言，给定两个参数 $\eps, \delta \in (0, 1)$，你的任务是设计算法，使得算法能以至少 $1 - \delta$ 的概率输出一个满足总变分距离 $\dTV(p, \hat{p}) = \frac{1}{2} \sum_{i=1}^n \abs{p_i - \hat{p}_i} \le \eps$ 的分布 $\hat{p}$，并且使用的样本数 $T$ 尽可能少。

    在下文中，我们可以将 $p = (p_1, \dots, p_n)$ 和 $\hat{p} = (\hat{p}_1, \dots, \hat{p}_n)$ 视为两个 $n$ 维向量，满足 $\sum_{i=1}^n p_i = \sum_{i=1}^n \hat{p}_i = 1$ 且对于任意 $i \in [n]$ 都有 $p_i, \hat{p}_i \ge 0$。

    1. 首先考虑 $n = 2$ 的情况。对于两个分布 $p = (p_1, p_2)$ 和 $\hat{p} = (\hat{p}_1, \hat{p}_2)$，请设计一个算法，使用 $T = O\tp{\frac{1}{\eps^2} \log \frac{1}{\delta}}$ 个样本，以至少 $1 - \delta$ 的概率找到满足 $\dTV(p, \hat{p}) \le \eps$ 的 $\hat{p}$，并给出你的算法分析。
    2. 对于一般的 $n \ge 2$，请证明：
    	$$
    	\dTV(p, \hat{p}) = \max_{S \subseteq [n]} \sum_{j \in S} (p_j - \hat{p}_j).
    	$$
    3. 考虑如下算法：对于每个 $i \in [n]$，令 $\hat{p}_i = \frac{1}{T} \sum_{t=1}^T \1{X_t = i}$，即第 $i$ 种选择出现的频率。对于任意子集 $S \subseteq [n]$，我们用 $p(S)$ 和 $\hat{p}(S)$ 分别表示 $\sum_{j \in S} p_j$ 和 $\sum_{j \in S} \hat{p}_j$。请证明，存在一个常数 $c > 0$，使得对于任意的子集 $S$ 和任意 $\eps > 0$，都有
    	$$
    	\Pr{p(S) - \hat{p}(S) \ge \eps} \le \exp(-c \cdot \eps^2 T).
    	$$
    4. 证明：使用上述算法构造的 $\hat{p}$，只需要 $T = O\tp{\frac{1}{\eps^2}\tp{n + \log \frac{1}{\delta}}}$ 个样本，就能以至少 $1 - \delta$ 的概率满足 $\dTV(p, \hat{p}) \le \eps$。
    
=== "English"

--8<-- "solutions/chapter_01/problems/problem_discrete_distribution.md"

### 没有免费的午餐 (No Free Lunch)
=== "中文"
	在二分类问题中，给定样本集 $S_m = \left\{(X_i, C(X_i))\right\}_{i=1}^m$，其中 $X_i \in \bb R^d$ 独立同分布地采样自未知概率测度 $\mu$，标签由布尔函数 $C: \bb R^d \to \left\{0, 1\right\}$ 给出。我们的目标是通过学习算法 $\mathcal{A}$，基于样本 $S_m$ 构造一个函数 $h = \mathcal{A}(\cdot, S_m): \bb R^d \to \left\{0, 1\right\}$，使得其误差 $R(h) = \Pr{h(X) \neq C(X)}$ 尽可能小，其中 $X \sim \mu$。

	本题旨在证明机器学习中的经典结论，没有免费的午餐定理（no free lunch theorem）。给定任意学习算法 $\mathcal{A}$ 和任意大小为偶数的有限特征空间 $\mathcal{X} \subseteq \bb R^d$，记 $\abs{\mathcal{X}} = 2m > 4$。我们将证明：存在一个函数 $C: \mathcal{X} \to \left\{0, 1\right\}$ 和 $\mathcal{X}$ 上的分布 $\mu$，使得
	$$
	\Pr{R(\mathcal{A}(\cdot, S_m)) \ge 1/8} \ge 1/8.
	$$
	为了证明这一结论，我们采用概率方法。假设 $\mu$ 是 $\mathcal{X}$ 上的均匀分布。对于每个 $x \in \mathcal{X}$，我们独立且均匀地从 $\left\{0, 1\right\}$ 中随机选取 $Y_x$，并定义随机函数 $C(x) := Y_x$。

	1. 首先，考虑在随机标签 $\left\{Y_x\right\}_{x \in \mathcal{X}}$ 和随机样本 $S_m$ 上的期望风险 $\E{R(\mathcal{A}(\cdot, S_m))}$。请证明：
		$$
		\E{R(\mathcal{A}(\cdot, S_m))} \ge \frac{1}{4},
		$$
		并由此说明，存在一个确定的函数 $C$，使得在该函数下 $\E{R(\mathcal{A}(S_m))} \ge 1/4$（此处的期望仅对样本 $S_m$ 取）。
	2. 基于上一问的结论，证明存在一个确定性的函数 $C$，使得：
		$$
		\Pr{R(\mathcal{A}(\cdot, S_m)) \ge 1/8} \ge 1/8.
		$$

	注：这一结论直观上说明了，如果目标函数是完全任意的，且我们只观察到了空间中一半的样本，那么对于剩下未见的一半样本，我们实际上没有获得任何信息，因此无法期望得到较低的泛化误差。这并非通常意义上的欠拟合（underfitting），而是强调了归纳偏置（inductive bias）的必要性：即没有任何算法能在不依赖先验假设的情况下对所有问题都表现良好。
=== "English"

--8<-- "solutions/chapter_01/problems/problem_no_free_lunch.md"
