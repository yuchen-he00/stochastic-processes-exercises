??? success "来自陈志杰的解答"

    *Proof of Part 1.*
    Let $P$ be the chain and $\mathfrak{S}_n$ be the state space, which is the symmetric group of degree $n$ with identity element $e$. Because $P$ is the simple random walk on an $\left(\binom n2+1\right)$-regular graph, it is reversible w.r.t. the uniform distribution $\pi$ on $\mathfrak{S}_n$.

    Let $G$ be the (undirected) transition graph. For any $f\in\mathfrak{S}_n$, by a bubble-sort-like algorithm, we can show that $f$ can be transformed into $e$ via transpositions, i.e., $f$ and $e$ are connected in $G$. Hence $G$ is connected, i.e., $P$ is irreducible.

    Because every state has a self-loop, $P$ is aperiodic. By the fundamental theorem of Markov chains, $\pi$ is the unique stationary distribution of $P$.

    *Proof of Part 2.*
    If we randomly pick a card $c$, every position $j$ has equal probability of being the position of $c$, i.e., has equal probability of being chosen. Hence the two shuffling methods are equivalent.

    *Proof of Part 3.*
    We construct a coupling of two Markov chains $(X_t)$ and $(Y_t)$, each evolving according to $P$, with $X_0=a_0\in\mathfrak{S}_n$ and $Y_0=b_0\in\mathfrak{S}_n$. The coupling is given by:

    At each step, chain $(X_t)$ randomly picks $(i,c)$, and chain $(Y_t)$ picks the same $(i,c)$.

    After a step with pick $(i,c)$, the two decks have the same card at position $i$, and card $c$ is at the same position in both decks. The problem is in some sense a variant of the coupon collector problem.

    Let $Z_t=\#\left\lbrace i:X_t(i)=Y_t(i)\right\rbrace$. Let $Y_k$ be the number of steps taken to increase $Z_t$ by at least $1$ when $Z_t$ first reaches $k-1$, $1\le k\le n$. Let $Y=\sum_{k=1}^{n}Y_k$. Suppose card $c_1,\dots,c_{k-1}$ are at position $i_1,\dots,i_{k-1}$ respectively in both decks. If the next step picks $(i,c)$ with $i\in\left\lbrace i_1,\dots,i_{k-1}\right\rbrace$ or $c\in\left\lbrace c_1,\dots,c_{k-1}\right\rbrace$, then $Z_t$ remains unchanged; otherwise $Z_t$ increases by least $1$. Hence we can take, as an upper bound,
    $$
    Y_k\sim\mathrm{Geom}\left(\left(1-\frac{k-1}{n}\right)^2\right).
    $$
    $$
    \E{Y}=\sum_{k=1}^{n}\frac{n^2}{(n-k+1)^2}=n^2\sum_{k=1}^{n}\frac1{k^2}\le2n^2.
    $$
    Because $Y_1,\dots,Y_n$ are mutually independent,
    $$
    \Var{Y}=\sum_{k=1}^{n}n^2\frac{(2n-k+1)(k-1)}{(n-k+1)^4}\le2n^4\sum_{k=1}^{n}\frac1{k^4}\le4n^4.
    $$
    By Chebyshev's inequality,
    $$
    \Pr{Y\ge2n^2+t}\le\Pr{\left|Y-\E{Y}\right|\ge t}\le\frac{\Var{Y}}{t^2}\le\frac{4n^4}{t^2}.
    $$
    To ensure $\Pr{Y\ge2n^2+t}\le1/4$, it suffices to have $t\ge4n^2$. Hence $\tau_{\text{mix}}\le2n^2+t$, which implies that $\tau_{\text{mix}}=O(n^2)$.
