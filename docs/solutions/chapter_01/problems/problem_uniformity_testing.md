??? success "来自陈志杰的解答"

    *Proof of Part 1.*

    $$
    \Pr{X=Y} = \Pr{\bigsqcup_{i=1}^n (X=i \land Y=i)} = \sum_{i=1}^{n}\Pr{X=i \land Y=i} = \sum_{i=1}^{n}\pi_i^2 = \|\pi\|^2.
    $$

    *Proof of Part 2.*

    $$
    \|\mu\|^2 = \sum_{i=1}^{n}\left(\frac{1}{n}\right)^2 = \frac{1}{n}.
    $$

    Let $x_i=\pi_i-1/n$. Then $\sum x_i=0$ and $\sum \left\lvert x_i \right\rvert = 2\dTV(\pi,\mu)\ge 2\eps$. By the Cauchy-Schwarz inequality,

    $$
    \sqrt{\sum x_i^2}\cdot \sqrt{n} \ge \sum (\left\lvert x_i \right\rvert \cdot 1) \ge 2\eps.
    $$

    Hence

    $$
    \|\pi\|^2 = \sum \left(x_i+\frac{1}{n}\right)^2 = \sum x_i^2+\frac{2}{n}\sum x_i+\frac{1}{n} \ge \frac{4\eps^2}{n}+\frac{1}{n}.
    $$

    This directly implies the desired result.

    *Proof of Part 3.*

    $$
    \E{Z} = \frac{1}{\binom m2}\sum_{1\le i<j\le m}\E{Y_{ij}} = \E{Y_{ij}} = \Pr{X_i=X_j} = \|\pi\|^2,
    $$

    where the last equality follows from part 1.

    $$
    \begin{align*}
        \mathrm{Var}(Z) & = \frac{1}{\binom m2^2}\left(\sum_{\substack{i<j,k<l \cr \left\lvert \left\lbrace i,j,k,l \right\rbrace \right\rvert =2}}+\sum_{\substack{i<j,k<l \cr \left\lvert \left\lbrace i,j,k,l \right\rbrace \right\rvert =3}}+\sum_{\substack{i<j,k<l \cr \left\lvert \left\lbrace i,j,k,l \right\rbrace \right\rvert =4}}\right)\mathrm{Cov}(Y_{ij},Y_{kl}) \cr
                       & = \frac{1}{\binom m2^2}\left(\binom m2\mathrm{Var}(Y_{ij})+\binom m3\cdot 3\cdot 2\cdot \mathrm{Cov}(Y_{ij},Y_{jk})+\binom m4\cdot \binom 42 \cdot \mathrm{Cov}(Y_{ij},Y_{kl})\right).
    \end{align*}
    $$

    Because $Y_{ij}\sim \Ber{\|\pi\|^2}$, $\mathrm{Var}(Y_{ij})=\|\pi\|^2(1-\|\pi\|^2)$. Because $\mathrm{Cov}(X,Y)=\E{XY}-\E{X}\E{Y}$,

    $$
    \mathrm{Cov}(Y_{ij},Y_{jk}) = \Pr{X_i=X_j=X_k}-\|\pi\|^4 = \sum \pi_i^3-\|\pi\|^4,
    $$

    $$
    \mathrm{Cov}(Y_{ij},Y_{kl}) = \Pr{X_i=X_j \land X_k=X_l}-\|\pi\|^4 = 0.
    $$

    Hence

    $$
    \begin{align*}
        \mathrm{Var}(Z) & \le \frac{2}{m(m-1)}\|\pi\|^2+\frac{4(m-2)}{m(m-1)}\sum \pi_i^3 \cr
                       & \le \frac{2}{m(m-1)}\|\pi\|^2+\frac{4(m-2)}{m(m-1)}\|\pi\|^3 \cr
                       & \le \frac{4}{m^2}\|\pi\|^2+\frac{4}{m}\|\pi\|^3,\quad m\ge 4.
    \end{align*}
    $$

    If $\pi=\mu$, then $\|\pi\|^2=1/n$; if $\dTV(\pi,\mu)\ge \eps$, then $\|\pi\|^2\ge \|\mu\|^2=1/n$ by part 2. By Chebyshev's inequality,

    $$
    \Pr{\left\lvert Z-\E{Z} \right\rvert \ge \eps^2 \E{Z}} \le \frac{\mathrm{Var}(Z)}{\eps^4\|\pi\|^4} \le \frac{4}{\eps^4m\|\pi\|}+\frac{4}{\eps^4m^2\|\pi\|^2} \le \frac{4\sqrt n}{\eps^4m}+\frac{4n}{\eps^4m^2}.
    $$

    *Proof of Part 4.*

    Suppose $\pi=\mu$. Then $\E{Z}=\|\pi\|^2=1/n$.

    $$
    \Pr{Z\ge \frac{1+2\eps^2}{n}} \le \Pr{\left\lvert Z-\E{Z} \right\rvert \ge 2\eps^2 \E{Z}} \le \frac{\sqrt n}{\eps^4 m}+\frac{n}{\eps^4m^2} = \frac{1}{100}+\frac{\eps^4}{10000}\le 0.1.
    $$

    Suppose $\dTV(\pi,\mu)\ge \eps$. Then $\E{Z}=\|\pi\|^2\ge (1+4\eps^2)/n$ by part 2.

    $$
    \begin{align*}
        \Pr{Z<\frac{1+2\eps^2}{n}} & \le \Pr{\frac{Z}{\E{Z}}<\frac{1+2\eps^2}{1+4\eps^2}} \le \Pr{\left\lvert Z-\E{Z} \right\rvert > \frac{2\eps^2}{1+4\eps^2}\E{Z}} \cr
                                   & \le \frac{(1+4\eps^2)^2}{100}+\frac{\eps^4(1+4\eps^2)^2}{10000}\le 0.1.
    \end{align*}
    $$
