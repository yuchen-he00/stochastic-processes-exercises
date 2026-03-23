# 随机过程开源习题库

欢迎为本仓库补充解答、思路和勘误。

## 如何贡献你的解答

### Fork 并同步仓库
- 仓库地址：https://github.com/yuchen-he00/stochastic-process-exercises
- 先点击 GitHub 页面右上角 **Fork**。
- 克隆你自己的仓库：`git clone <你的仓库地址>`
- 进入项目目录后执行：`git pull`

### 找到对应题目与解答文件
- 先在 `docs/exercises/` 里找到题目文件。
- 每道题下方都有一行 `--8<--`，这行会标出对应解答文件。

例如第一章练习“再探奖券收集问题”下方是：
`--8<-- "solutions/chapter_01/exercises/exercise_coupon_collector.md"`

对应文件就是：
`docs/solutions/chapter_01/exercises/exercise_coupon_collector.md`

### 追加你的内容
把下面代码块直接复制到对应文件末尾（保留缩进），并在对应位置写上你的解答或者想法，中英文皆可：

```markdown
??? success "来自[Your Name]的解答"

    你的解答写在这里。

??? note "来自[Your Name]的想法"

    你的补充思路或者评论写在这里。
```

渲染效果如下：

??? success "来自[Your Name]的解答"

    你的解答写在这里。

??? note "来自[Your Name]的想法"

    你的补充思路或者评论写在这里。

### 提交 Pull Request
1. 新建分支：`git checkout -b your-branch-name`
2. 提交修改：`git add .`，再执行 `git commit -m "add solution for xx"`
3. 推送到你的仓库：`git push origin your-branch-name`
4. 回到 GitHub，点击 **Compare & pull request**

作者会在 1～3 天内审核你的 PR；通过后会合并并自动编译。
