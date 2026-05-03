??? success "来自陈志杰的解答"

    *Proof of Part 1.*
    WLOG., suppose $V=[n]$ and the state space is $S=\left\lbrace\pm1\right\rbrace^n$. If $\alpha=0$, then both $\pi_1(a)=\1{a=(-1,\dots,-1)}$ and $\pi_2(a)=\1{a=(1,\dots,1)}$ are stationary distributions of $(X_t)$, as one can verify.

    Now suppose $\alpha\in(0,1)$. Let $a=(a_1,\dots,a_n)$ and $b=(b_1,\dots,b_n)$ be two states. Suppose $X_0=a$. At step $t$ ($1\le t\le n$), pick user $t$, let it exhibit independent will, and let it pick new opinion $b_t$. Then $X_n=b$. Hence $(X_t)$ is irreducible. For any state, we can pick user $1$, let it exhibit independent will, and let it pick his original idea. Therefore, each vertex of the transition graph has a self-loop. Hence $(X_t)$ is aperiodic.

    *Proof of Part 2.*
    By the law of total probability,
    $$
    \begin{align*}
    P(k,k+1) & =\frac{n-k}{n}\,\left(\alpha\cdot\frac12+(1-\alpha)\cdot\frac k{n-1}\right),\quad k<n. \cr
    P(k,k-1) & =\frac kn\,\left(\alpha\cdot\frac12+(1-\alpha)\cdot\frac{n-k}{n-1}\right),\quad k>0.
    \end{align*}
    $$
    The transition graph is shown below. We see that the chain $P$ is irreducible and aperiodic, and thus has a unique stationary distribution $\pi$.
    $$
    1 \rightleftarrows 2 \rightleftarrows \cdots \rightleftarrows n,
    \quad \text{with a self-loop at each state.}
    $$

    Hence it suffices to solve the detailed balance conditions, which are equivalent to
    $$
    \frac{\pi(k+1)}{\pi(k)}=\frac{P(k,k+1)}{P(k+1,k)}=\frac{(n-k)(\beta+k)}{(k+1)(\beta+n-k-1)}=\frac{\binom n{k+1}\cdot\Gamma(\beta+k+1)\cdot\Gamma(\beta+n-k-1)}{\binom nk\cdot\Gamma(\beta+k)\cdot\Gamma(\beta+n-k)}.
    $$
    This proves that the unique stationary distribution $\pi$ satisfies
    $$
    \pi(k) \propto \binom{n}{k} \cdot \Gamma(\beta+k)\cdot \Gamma(\beta+n-k).
    $$

    Observe that
    $$
    \pi(k+1)>\pi(k)\iff\frac{\pi(k+1)}{\pi(k)}>1\iff(n-2k-1)\left(\alpha-\frac2{n+1}\right)>0.
    $$

    - Suppose $\alpha > \frac{2}{n+1}$. Then $\pi(k)$ increases monotonically with $k$ for $k\le\frac{n-1}2$, and decreases monotonically with $k$ for $k\ge\frac{n-1}2$. This shows that the system, when stationary, tends to form a disordered state with half of the users supporting $+1$ and half supporting $-1$.
    - Suppose $\alpha < \frac{2}{n+1}$. Then $\pi(k)$ decreases monotonically with $k$ for $k\le\frac{n-1}2$, and increases monotonically with $k$ for $k\ge\frac{n-1}2$. This shows that the system, when stationary, tends to form an echo-chamber state in which most users support the same opinion.

    *Proof of Part 3a.*
    Let $H_t=H(X_t,Y_t)$. Fix $t$. We say that a user $v\in V$ is good if $X_t(v)=Y_t(v)$, and bad otherwise. Let $v$ be the user picked by both chains, and let $w$ be the neighbor of $v$ picked by both chains if $v$ exhibits conformity. Let
    $$
    p_1=\Pr{\text{$w$ is good}\mid X_t,Y_t,\text{$v$ is bad}},\quad p_2=\Pr{\text{$w$ is bad}\mid X_t,Y_t,\text{$v$ is good}}.
    $$
    Let $H=H(X_t,Y_t)$. Then
    $$
    \begin{align*}
    p_1 & =\Pr{\text{$w$ is good}\mid\text{$H$ bad users},\text{$v$ is bad}}=\frac{\Pr{\text{$w$ is good},\text{$v$ is bad}\mid\text{$H$ bad users}}}{\Pr{\text{$v$ is bad}\mid\text{$H$ bad users}}}, \cr
    p_2 & =\Pr{\text{$w$ is bad}\mid\text{$H$ bad users},\text{$v$ is good}}=\frac{\Pr{\text{$w$ is bad},\text{$v$ is good}\mid\text{$H$ bad users}}}{\Pr{\text{$v$ is good}\mid\text{$H$ bad users}}}.
    \end{align*}
    $$
    Here ``$H$ bad users'' means ``there are $H$ bad users in $(X_t,Y_t)$''. By the $d$-regularity of $G$, the numerators of $p_1$ and $p_2$ are equal. Thus
    $$
    \frac{p_1}{p_2}=\frac{\Pr{\text{$v$ is good}\mid\text{$H$ bad users}}}{\Pr{\text{$v$ is bad}\mid\text{$H$ bad users}}}=\frac{n-H}{H}.
    $$
    Now we have
    $$
    \E{H_{t+1}-H_t \mid X_t, Y_t} = \underbrace{-\frac Hn(\alpha+(1-\alpha)p_1)}_{\text{$v$ is bad}} + \underbrace{\left(1-\frac Hn\right)(1-\alpha)p_2}_{\text{$v$ is good}} = -\frac{\alpha}{n} H_t.
    $$

    *Proof of Part 3b.*
    Fix $X_0,Y_0$.
    $$
    \E{H_{t+1}}=\E{\E{H_{t+1}\mid X_t,Y_t}}=\E{\E{H_{t+1}-H_t\mid X_t,Y_t}+H_t}=\left(1-\frac\alpha n\right)\E{H_t}.
    $$
    Hence
    $$
    \E{H_t}=\left(1-\frac\alpha n\right)^tH_0\le n\left(1-\frac\alpha n\right)^t\le n\exp\left(-\frac{\alpha}{n}t\right).
    $$
    Now we have
    $$
    \dTV(X_t,Y_t)\le\Pr{X_t\ne Y_t}=\Pr{H_t\ge1}\le\E{H_t}\le n\exp\left(-\frac{\alpha}{n}t\right),
    $$
    where the second last inequality follows from Markov's inequality. To ensure $\dTV(X_t,Y_t)\le\varepsilon$, it suffices to have $t\ge\frac n\alpha\log\frac n\varepsilon$. Therefore,
    $$
    \tau_{\text{mix}}(\varepsilon)=O\left(\frac n\alpha\log\frac n\varepsilon\right).
    $$
