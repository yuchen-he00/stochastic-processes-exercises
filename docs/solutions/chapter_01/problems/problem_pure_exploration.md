??? success "来自张煊的解答"

    (1) 假设这是一个 $n$ 臂老虎机，每个臂去拉动 $L$ 次；
    
    我们尝试去 bound 出来选错臂概率的上界；

    如果我们选择了次优臂 $i$ 而不是最优臂 1，此时下面两个事件中至少有一个发生

    \[A: \hat{\mu}_1 - \mu_1 \leq -\frac{\Delta}{2}\]

    \[B_i: \hat{\mu}_i - \mu_i \geq \frac{\Delta}{2}\]

    由霍夫丁不等式

    \[P(A) = P[L\hat{\mu}_1 - L\mu_1 \leq -\frac{L\Delta}{2}] \leq e ^ {-\frac{L\Delta^2}{2}}\]

    \[P(B_i) = P[L\hat{\mu}_i - L\mu_i \geq \frac{L\Delta}{2}] \leq e ^ {-\frac{L\Delta^2}{2}}\]

    故 
    
    \[\mathbb{P}[选择次优臂 i] \leq P(A) + P(B_i) \leq 2e ^ {-\frac{L\Delta^2}{2}}\]

    从而选错概率

    \[\mathbb{P}[选错臂] \leq \sum\limits_{i = 2} ^ n \mathbb{P}[选择次优臂 i] \leq 2(n - 1)e ^ {-\frac{L\Delta^2}{2}}\]

    由题目条件

    \[2(n - 1)e ^ {-\frac{L\Delta^2}{2}} \leq \delta\]

    得到 $L \geq \frac{2}{\Delta^2}\ln\frac{2(n-1)}{\delta}$

    进而拉动总次数 $N \geq \frac{2n}{\Delta^2}\ln\frac{2(n-1)}{\delta}$。

    (2) 考虑问题的反面，我们尝试去 bound $\mathcal{E}$ 不发生概率的上界，记其不发生为 $\mathcal{E} ^ \prime = \left\lbrace \exists i \in [n], \exists r \geq 1 :\ \abs{\hat{\mu}_{i,r} - \mu_i} \geq C_r \right\rbrace$；

    利用霍夫丁不等式，对于给定的 $i$ 号臂，其在第 $r$ 轮满足 $\abs{\hat{\mu}_{i,r} - \mu_i} \geq C_r$ 的概率

    \[\mathbb{P}[\abs{\hat{\mu}_{i,r} - \mu_i} \geq C_r] \leq 2e^{-\frac{2(rC_r) ^ 2}{r}} = 2e^{-\ln\frac{4nr^2}{\delta}} = \frac{\delta}{2nr^2}\]

    故 

    \[\mathbb{P}[\mathcal{E}^\prime] \leq \sum\limits_{i = 1} ^ n{\sum\limits_{r = 1} ^ {\infty} \frac{\delta}{2nr^2}} \leq \delta\]

    从而有 $\mathbb{P}[\mathcal{E}] \geq 1 - \delta$。

    (3) 由于 $\mathbb{P}[\mathcal{E}] \geq 1 - \delta$，只需证明当 $\epsilon$ 发生时拉动次数不超过 $O\tp{\sum_{i\neq 1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta \Delta_i}}$ 即可；

    根据淘汰的规则，对于第 $i$ 个臂，当 $C_r < \frac{\Delta_i}{4}$ 时，其必然会被淘汰；

    故 $r$ 需满足

    \[\sqrt{\frac{\ln{4nr^2/\delta}}{2r}} \leq \frac{\Delta_i}{4}\]

    化简后有

    \[r \leq \frac{8}{\Delta_i^2}\ln{\frac{4nr^2}{\delta}}\]

    根据 $x leq A\ln(Bx)$ 可得 $x = O(A\ln(AB))$ 可知

    \[r = O(\frac{1}{\Delta_i^2}\ln(\frac{n}{\delta\Delta_i^4})) = O(\frac{1}{\Delta_i^2}\ln(\frac{n}{\delta\Delta_i}))\]

    其中，对数中的次数拿到对数外会变成线性的常数；

    故次优臂拉动的总次数不会超过 $O\tp{\sum_{i\neq 1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta \Delta_i}}$ 次；

    对于最优臂，其拉动次数不会超过次优臂拉动次数的最大值，进而拉动次数也是 $O\tp{\sum_{i\neq 1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta \Delta_i}}$ 次；

    综上所述，总次数为 $O\tp{\sum_{i\neq 1}\frac{1}{\Delta_i^2}\log\frac{n}{\delta \Delta_i}}$ 次。

    (4) 对于均匀探索算法，其优点在于其计算复杂度较低，而且对高并行有着天然的支持。因为在已知 $\Delta$ 的时候，我们可以事先计算出需要的轮数。其缺点在于时间复杂度一般较高，尤其是当其中某一个次优臂的概率和最优臂相当接近，而其它次优臂与最优臂的概率相差较大时会比连续淘汰算法多引入因子 $n$；

    对于连续淘汰算法，其优点在于时间复杂度一般较低，但在其它次优臂概率差异不大时有退化的风险。其缺点在于计算复杂度高，每进行一轮之后都需要重新计算阈值和经验值，对于并行的支持度不如均匀探索算法。