??? success "来自张煊的解答"

    (1) 我们只需要说明如果事件 $A$ 和 事件 $B$ 均不发生，则事件 $C$ 必然发生。

    即已知
    
    \[U_{i,t} \geq U_{1,t}\]

    \[\hat{\mu}_{1, T_1(t-1)} > \mu_1 - \sqrt{\frac{2\ln t}{T_1(t-1)}}\]
    
    \[\hat{\mu}_{i, T_i(t-1)} < \mu_i + \sqrt{\frac{2\ln t}{T_i(t-1)}}\]

    证明

    \[\Delta_i \leq 2\sqrt{\frac{2\ln t}{T_i(t-1)}}\]

    证明：

    由条件可知

    \[\mu_1 < \hat{\mu}_{1, T_1(t-1)} + \sqrt{\frac{2\ln t}{T_1(t-1)}} = U_{1,t} \leq U_{i,t} = \hat{\mu}_{i, T_i(t-1)} + \sqrt{\frac{2\ln t}{T_i(t-1)}} < \mu_i + 2\sqrt{\frac{2\ln t}{T_i(t-1)}}\]

    故有

    \[\Delta_i \leq 2\sqrt{\frac{2\ln t}{T_i(t-1)}}\]

    (2) 我们只证明事件 $A$，对于事件 $B$ 的证明类似；  
    
    记 $k = T_1(t-1)$，$X = k\hat{\mu}_1$，则有 $E(X) = k\mu_1$；

    代入霍夫丁不等式，有

    \[\mathbb{P}[\hat{\mu}_1 - \mu_1 \leq -\sqrt{\frac{2\ln t}{k}}] = \mathbb{P}[X - E(X) < -\sqrt{2k\ln t}] \leq e ^ {-\frac{4k\ln t}{k}} = t ^ {-4}\]

    故事件 $A$ 发生的概率不超过 $t^{-4}$。

    (3) 对于次优臂 $i$，定义随机变量 $X_t$，如果第 $t$ 次选中了这个臂则 $X_t = 1$，否则 $X_t = 0$；

    由期望的线性性，可得 
    
    \[E(T_i(T)) = \sum\limits_{t = n + 1} ^ T E(X_t) + 1\]

    考虑到 $E(X_t) = \mathbb{P}[X_t = 1]$，所以只需要分析第 $t$ 次选中次优臂 $i$ 的概率即可。

    \[\mathbb{P}[X_t = 1] = \mathbb{P}[X_t = 1 \cap T_i(t-1) \le \frac{8\ln t}{\Delta_i ^ 2}] + \mathbb{P}[X_t = 1 \cap T_i(t-1) > \frac{8\ln t}{\Delta_i ^ 2}]\]

    其中，$X_t = 1 \cap T_i(t-1) > \frac{8\ln t}{\Delta_i ^ 2}$ 代表选中了次优臂 $i$ 但是事件 $C$ 不发生，此时事件 $A$ 和事件 $B$ 中必有一个发生，从而可得概率上界

    \[\mathbb{P}[X_t = 1 \cap T_i(t-1) > \frac{8\ln t}{\Delta_i ^ 2}] \leq \mathbb{P}[A] + \mathbb{P}[B] \leq 2t^{-4}\]

    故有

    \[E(T_i(T)) \leq \sum\limits_{t = n + 1} ^ T \mathbb{P}[X_t = 1 \cap T_i(t-1) \le \frac{8\ln t}{\Delta_i ^ 2}] + \sum\limits_{t = n+1} ^ T \frac{2}{t^4} + 1 \leq \frac{8\ln T}{\Delta_i ^ 2} + 3 = O(\frac{\ln T}{\Delta_i ^ 2})\]

    然后估计懊悔上界 $R(T)$；

    我们将所有臂分成两个部分 $S = \left\lbrace i | \Delta_i \leq \delta \right\rbrace$ 和 $T = \left\lbrace i | \Delta_i > \delta \right\rbrace$，然后用两种方式去估计这两部分产生懊悔的上界；

    \[R(T) = \sum\limits_{i \in S} T_i(T)\Delta_i + \sum\limits_{i \in T} T_i(T)\Delta_i \leq T\delta + nO(\frac{\ln T}{\delta})\]

    取 $\delta = \sqrt{\frac{n\ln T}{T}}$，有

    \[R(T) = O(nT\ln T)\]

    (4) 直观而言，UCB 算法从第 $n+1$ 次开始，一直是根据预测的最优解在进行操作。而 ETC 算法的前 $nL$ 次尝试是将每个臂都尝试 $L$ 次，这里产生了巨大的懊悔值；

    与此同时，ETC 算法之后的决策完全基于前 $nL$ 次的结果，可能产生比较大的偏差；而 UCB 算法的决策基于前面所有的尝试，随着 $T$ 增大，这个偏差会不断变小；

    因此 UCB 算法会比 ETC 算法更优。