??? success "来自陈志杰的解答"

    *Proof of Part 1.*

    By Markov's inequality,

    $$
    \Pr[0]{A^c} = \Pr[0]{T>4L} \le \frac{\E[0]{T}}{4L}\le \frac{1}{4}.
    $$

    By the given theorem,

    $$
    \Pr[0]{B^c} = \Pr[0]{\max_{1\le t\le 4L}\left\lvert K_t-\frac{t}{2} \right\rvert > \sqrt{L\log{\frac{1}{4\delta}}}} \le \frac{\Var[0]{K_{4L}-2L}}{L\log{\frac{1}{4\delta}}} = \frac{1}{\log{\frac{1}{4\delta}}}\le \frac{1}{4}.
    $$

    By the correctness of $\mathcal{A}$,

    $$
    \Pr[0]{C^c}\le \delta \le \frac{1}{4}.
    $$

    Now the union bound implies

    $$
    \Pr[0]{A\cap B\cap C} = 1-\Pr[0]{A^c\cup B^c\cup C^c} \ge 1-\Pr[0]{A^c}-\Pr[0]{B^c}-\Pr[0]{C^c}\ge \frac{1}{4}.
    $$

    *Proof of Part 2.*

    Let $t=T(\omega)$ and $k=K_t(\omega)=K_{T(\omega)}(\omega)$. Then

    $$
    \Pr[0]{\omega} = \left(\frac{1}{2}\right)^t,\quad \Pr[1]{\omega} = \left(\frac{1+2\eps}{2}\right)^k\left(\frac{1-2\eps}{2}\right)^{t-k}\implies \frac{\Pr[1]{\omega}}{\Pr[0]{\omega}}=(1+2\eps)^k(1-2\eps)^{t-k}.
    $$

    It suffices to prove that

    $$
    k\log(1+2\eps)+(t-k)\log(1-2\eps)\ge -\log\frac{1}{4\delta}.
    $$

    $\omega\in A$ implies $t\le \frac{1}{25\eps^2}\log\frac{1}{4\delta}$. $\omega\in B$ implies $k-\frac{t}{2}\ge -\sqrt{L\log\frac{1}{4\delta}}=-\frac{1}{10\eps}\log\frac{1}{4\delta}$. Hence

    $$
    \begin{align*}
        \text{LHS} & = \left(k-\frac{t}{2}\right)\log\frac{1+2\eps}{1-2\eps}+\frac{t}{2}\log(1-4\eps^2) \cr
                   & \ge -\frac{1}{10\eps}\log\frac{1}{4\delta}\log\frac{1+2\eps}{1-2\eps}+\frac{1}{50\eps^2}\log\frac{1}{4\delta}\log(1-4\eps^2).
    \end{align*}
    $$

    Thus it suffices to prove that

    $$
    -\frac{1}{10\eps}\log\frac{1+2\eps}{1-2\eps}+\frac{1}{50\eps^2}\log(1-4\eps^2)\ge -1.
    $$

    This follows from

    $$
    \log\frac{1+2\eps}{1-2\eps}\le 5\eps,\quad \log(1-4\eps^2)\ge -8\eps^2,\quad 0<\eps<\frac{1}{8},
    $$

    whose validity can be verified by brute force.

    *Proof of Part 3.*

    Observe that the $\ge$ in the inequality above can be replaced by a strict $>$. Because $\Omega$ is countable, by countable additivity,

    $$
    \Pr[1]{C}\ge \Pr[1]{A\cap B\cap C} = \sum_{\omega\in A\cap B\cap C}\Pr[1]{\omega} > \sum_{\omega\in A\cap B\cap C}(4\delta\cdot \Pr[0]{\omega}) = 4\delta\cdot \Pr[0]{A\cap B\cap C}\ge \delta.
    $$

    Hence $\Pr[1]{C}>\delta$, contradicting the correctness of $\mathcal{A}$. This implies that such a deterministic algorithm does not exist.

    *Proof of Part 4.*

    We view the randomized algorithm as a deterministic algorithm after picking a random seed. For any random seed, the argument above for deterministic algorithms still holds, which implies that the lower bound still applies. Hence the lower bound also applies to randomized algorithms.

    *Proof of Part 5.*

    Let $p=\Ber{1/2}$ and $q=\Ber{1/2+\eps}$.

    $$
    D_{\mathrm{KL}}(p\parallel q) = \sum_{x=0,1}p(x)\log\frac{p(x)}{q(x)} = -\frac{1}{2}\log(1-4\eps^2).
    $$

    Let $P=B(n,1/2)$ and $Q=B(n,1/2+\eps)$.

    $$
    \begin{align*}
        D_{\mathrm{KL}}(P\parallel Q) & = \sum_{k=0}^{n}P(k)\log\frac{P(k)}{Q(k)} \cr
                                      & = -n\log(1-2\eps)-\log\frac{1+2\eps}{1-2\eps}\cdot \frac{1}{2^n}\sum_{k=1}^{n}k\binom nk \cr
                                      & = -\frac{1}{2}\log(1-4\eps^2)n=\Theta(\eps^2)n.
    \end{align*}
    $$

    Here $\sum_{k=1}^{n}k\binom nk=n2^{n-1}$ is calculated via power series. Therefore, to gather constant KL divergence, i.e., make the two distributions sufficiently distinguishable, we need $n=\Theta(1/\eps^2)$.
