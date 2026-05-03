??? success "来自陈志杰的解答"

    *Proof of Part 1.*
    $$
    Q_{ij}=\sqrt{\frac{\pi_i}{\pi_j}}P_{ij}=\frac{\pi_iP_{ij}}{\sqrt{\pi_i\pi_j}}=\frac{\pi_jP_{ji}}{\sqrt{\pi_i\pi_j}}=Q_{ji}.
    $$
    Let $Q=U\Lambda U^\mathsf{T}$ be a spectral decomposition of the real symmetric matrix $Q$.
    $$
    Qu_i=\sqrt\Pi P\sqrt\Pi^{-1}u_i=\lambda_iu_i\implies P(\sqrt\Pi^{-1}u_i)=\lambda_i(\sqrt\Pi^{-1}u_i).
    $$

    *Proof of Part 2.*

    (a) $\left\langle v_i,v_j\right\rangle_\pi=u_i^\mathsf{T}u_j=\1{i=j}$. Hence $v_1,\dots,v_n$ is a $\pi$-orthonormal basis. Suppose $\left\lVert x\right\rVert_\pi=1$ and $\left\langle x,v_i\right\rangle_\pi=0,\,\forall i<k$. Then $x=\sum_{i=k}^{n}a_iv_i$ for some $\sum_{i=k}^{n}a_i^2=1$. Then $\sqrt\Pi x=\sum_{i=k}^{n}a_iu_i$.
    $$
    \left\langle x,Px\right\rangle_\pi=(\sqrt\Pi x)^\mathsf{T} Q(\sqrt\Pi x)=\sum_{i,j=k}^{n}a_ia_ju_i^\mathsf{T} Qu_j=\sum_{i=k}^{n}\lambda_ia_i^2.
    $$
    Hence
    $$
    \max_{\substack{x \neq 0 \cr \langle x, v_i \rangle_\pi = 0,\, \forall i < k}} \frac{\langle x, Px \rangle_\pi}{\langle x, x \rangle_\pi}
        =\max_{\substack{\left\lVert x\right\rVert_\pi=1 \cr \langle x, v_i \rangle_\pi = 0,\, \forall i < k}} \langle x, Px \rangle_\pi
        =\max_{\sum_{i=k}^{n}a_i^2=1}\sum_{i=k}^{n}\lambda_ia_i^2=\lambda_k.
    $$

    (b) The infinity norm
    $$
    \begin{align*}
    \left\lVert P\right\rVert_\infty & =\max_{\left\lVert x\right\rVert_\infty\le1}\left\lVert Px\right\rVert_\infty=\max_{\left|x_k\right|\le1,\,\forall k}\max_i\left|\sum_jP_{ij}x_j\right| \cr
                                     & \le\max_{\left|x_k\right|\le1,\,\forall k}\max_i\sum_jP_{ij}\left|x_j\right|=\max_i\sum_jP_{ij}=1.
    \end{align*}
    $$
    If $\left|\lambda_i\right|>1$ then $\left\lVert Pv_i\right\rVert_\infty>\left\lVert v_i\right\rVert_\infty$, a contradiction. Hence $\max_{i\in[n]} |\lambda_i| \le 1$. $\lambda_1=1$ follows from $P\mathbf1=\mathbf1$.

    Suppose $P$ is irreducible. Let $v\in E(1,P)$ (see Remark 1). Let $i\in[n]$ be such that $0\ne\left|v_i\right|\ge\left|v_j\right|,\,\forall j\in[n]$. WLOG., suppose $v_i=1$.
    $$
    v_i=\sum_jP_{ij}v_i\ge\sum_jP_{ij}v_j=(Pv)_i=v_i.
    $$
    Hence the inequality must be an equality, i.e., for all $j$ with $P_{ij}>0$, $v_i=v_j=1$. Now we can repeat the above argument on $v_j$. Because $P$ is irreducible, every $j\in[n]$ is reachable from $i$. Therefore, repeating the above argument, we eventually obtain $v_i=v_j=1,\,\forall j\in[n]$, i.e., $v=\mathbf1$. This implies that $\dim E(1,P)=1$, as desired.

    (c) Suppose $\lambda_n=-1$. We assume the transition graph $G$ is connected (see Remark 2) and prove that it is bipartite. Let $v\in E(-1,P)$. Let $i\in[n]$ be such that $0\ne\left|v_i\right|\ge\left|v_j\right|,\,\forall j\in[n]$. WLOG., suppose $v_i>0$.
    $$
    -(-v_i)=-\sum_jP_{ij}v_j\le\sum_jP_{ij}v_i=v_i.
    $$
    Hence the inequality must be an equality, i.e., for all $j$ with $P_{ij}>0$, $v_j=-v_i$. Now we can repeat the above argument on $v_j$. Because $G$ is connected, repeating the above argument, we eventually obtain that for each $j\in[n]$, either $v_j=v_i$ or $v_j=-v_i$. The signs of all $v_j$ induce a 2-coloring of $G$, which implies that $G$ is bipartite.

    *Proof of Part 3.*
    Let $\left\lbrace e_i\right\rbrace_{i=1}^n$ denote the standard basis of $\bb R^n$.
    $$
    \begin{align*}
    P^t(x,y) & =e_x^\mathsf{T} P^te_y=e_x^\mathsf{T}\sqrt\Pi^{-1}Q^t\sqrt\Pi e_y=\sqrt{\frac{\pi_y}{\pi_x}}\,\left\langle\sum_j\left\langle e_x,u_j\right\rangle u_j,Q^t\sum_i\left\langle e_y,u_i\right\rangle u_i\right\rangle \cr
             & =\sqrt{\frac{\pi_y}{\pi_x}}\,\sum_i\lambda_i^t\,\left\langle e_x,u_i\right\rangle\left\langle e_y,u_i\right\rangle=\sqrt{\frac{\pi_y}{\pi_x}}\,\sum_i\lambda_i^t\,u_i(x)u_i(y)=\sum_i\lambda_i^t\,v_i(x)\pi_yv_i(y).
    \end{align*}
    $$
    Suppose $P$ is irreducible and aperiodic. Then $\lambda_1=1$ and $\left|\lambda_i\right|<1,\,\forall i>1$. If $v_1=\mathbf1$, then $u_1=\sqrt\Pi v_1=(\sqrt{\pi_1},\dots,\sqrt{\pi_n})$ has Euclidean norm $1$, as expected. Because $P$'s eigenvalue $1$ has geometric multiplicity $1$, indeed $v_1=\mathbf1$. Hence
    $$
    \lim_{t\to\infty}P^t(x,y)=\lim_{t\to\infty}\lambda_1^t\,v_1(x)\pi_yv_1(y)=v_1(x)v_1(y)\pi_y=\pi_y.
    $$
    The proof is completed.

    *Remark 1.* We use $E(\lambda,A)$ to denote the eigenspace of matrix $A$ w.r.t. eigenvalue $\lambda$.

    *Remark 2.* If it is disconnected, then each connected component $C_k$ corresponds to an invariant subspace $V_k$ under $P$. At least one $\left.P\right|_{V_k}$ has eigenvalue $\lambda_n=-1$. Our proof shows that $C_k$ is bipartite, which implies that $P$ is periodic.
