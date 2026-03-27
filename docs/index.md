# 随机过程开源习题库

本习题库是《计算机科学中的随机过程》一书的配套习题。习题包含作者在往年随机过程课程中布置的部分作业题、从国内外经典概率论与随机过程教材中筛选并改编的题目，以及作者以理论计算机前沿研究课题为背景设计的题目。

每一章习题分为两部分：**练习**和**问题**。练习部分的题目相对基础，侧重考察读者对正文内容的理解，以及介绍从正文内容延伸出的知识点；问题部分更强调综合能力，鼓励读者运用已学知识与工具，在循序渐进的小题中自主分析经典算法的表现，或亲手证明随机过程中的经典结论。通过这些问题，读者不仅能巩固所学内容、学到新的知识，还能看到随机过程在不同问题中起到的关键作用，领略随机过程的妙处。

欢迎为本仓库补充解答、思路和勘误，希望各位读者学的开心！

## 如何贡献你的解答和想法 💡

### Fork 并同步仓库 🍴
- 仓库地址：`https://github.com/yuchen-he00/stochastic-process-exercises`
- 先点击 GitHub 页面右上角 **Fork**。
- 克隆你自己的仓库：`git clone <你的仓库地址>`
- 进入项目目录：`cd stochastic-process-exercises`
- 把原仓库设为 `upstream`（只需一次）：
    `git remote add upstream https://github.com/yuchen-he00/stochastic-process-exercises.git`
- 检查远程是否配置成功：`git remote -v`
- 开始做题前，先同步到最新主分支：
    `git fetch upstream`
    `git checkout main`
    `git rebase upstream/main`
    `git push origin main`

如果你更习惯网页操作，也可以在 GitHub 的 Fork 页面点击 **Sync fork**，再拉取本地更新：
`git checkout main && git pull origin main`

### 找到对应题目与解答文件 🔎
- 先在 `docs/exercises/` 里找到题目文件。
- 每道题下方都有一行 `--8<--`，这行会标出对应解答文件。

例如第一章练习“再探奖券收集问题”下方是：
`--8<-- "solutions/chapter_01/exercises/exercise_coupon_collector.md"`

对应文件就是：
`docs/solutions/chapter_01/exercises/exercise_coupon_collector.md`

### 追加你的内容 ✍️
把下面代码块直接复制到对应文件末尾（保留缩进），并在对应位置写上你的解答或者想法，中英文皆可，请使用符合 Markdown 语法的格式，请不要修改文件内已有的内容：

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

### 提交 Pull Request 🚀
1. 确保本地 `main` 已与上游同步（见上一步）。
2. 从最新 `main` 新建分支：`git checkout -b your-branch-name`
3. 仅添加你改动的文件（避免误提交无关内容）：
    `git add docs/solutions/...`
4. 提交修改：`git commit -m "add solution for xx, by xx"`
5. 推送到你的仓库：`git push -u origin your-branch-name`
6. 回到 GitHub，点击 **Compare & pull request**，确认：
    - base repository: `yuchen-he00/stochastic-process-exercises`
    - base branch: `main`
    - compare branch: `your-branch-name`
7. 在 PR 描述中简要写明：改了哪道题、补充了解答还是想法、是否修改了现有内容。

作者会在 1～3 天内审核你的 PR；通过后会合并并自动编译。
