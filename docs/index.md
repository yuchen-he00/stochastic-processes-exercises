# 随机过程开源习题库

本习题库是《计算机科学中的随机过程》一书的配套习题。习题包含作者在往年随机过程课程中布置的部分作业题、从国内外经典概率论与随机过程教材中筛选并改编的题目，以及作者以理论计算机前沿研究课题为背景设计的题目。

每一章习题分为两部分：**练习**和**问题**。练习部分的题目相对基础，侧重考察读者对正文内容的理解，以及介绍从正文内容延伸出的知识点；问题部分更强调综合能力，鼓励读者运用已学知识与工具，在循序渐进的小题中自主分析经典算法的表现，或亲手证明随机过程中的经典结论。通过这些问题，读者不仅能巩固所学内容、学到新的知识，还能看到随机过程在不同问题中起到的关键作用，领略随机过程的妙处。

欢迎为本仓库补充解答、思路和勘误，希望各位读者学的开心！

## 书籍草稿 📖

本书各章节的最新草稿可以在此下载（持续更新中）：

| 章节 | 标题 | 下载 |
|:----:|------|:----:|
| 第一章 | 独立随机变量与集中不等式 | [:material-file-pdf-box: PDF](book/ch01.pdf) |
| 第二章 | 有限状态马尔可夫链 | [:material-file-pdf-box: PDF](book/ch02.pdf) |

!!! warning "注意"
    本草稿为未定稿版本，内容可能随时更新，仅供学习参考。

## 如何贡献你的解答和想法 💡

### 初次设置（只需一次）🍴

1. 打开仓库页面：`https://github.com/yuchen-he00/stochastic-process-exercises`
2. 点击页面右上角 **Fork**，将仓库复制到你自己的 GitHub 账号下。
3. 在终端中执行以下命令完成本地配置：

```bash
# 把你 fork 的仓库克隆到本地（替换为你自己的仓库地址）
git clone <你的仓库地址>

# 进入项目目录
cd stochastic-process-exercises

# 把原仓库添加为 upstream 远程源（方便后续同步更新）
git remote add upstream https://github.com/yuchen-he00/stochastic-process-exercises.git

# 检查远程配置是否正确，你应该看到 origin（你的 fork）和 upstream（原仓库）两个地址
git remote -v
```

### 开始做题 📝

每次开始新一轮解答前，请执行以下步骤：

1. **同步到最新版本**。在 GitHub 的 Fork 页面点击 **Sync fork** 按钮，然后在本地执行：

    ```bash
    git checkout main   # 切换到主分支
    git pull origin main  # 拉取最新内容
    ```

    如果你更习惯纯命令行操作，也可以用以下命令代替（无需在网页操作）：

    ```bash
    git fetch upstream        # 从原仓库获取最新代码
    git checkout main         # 切换到主分支
    git rebase upstream/main  # 将原仓库的更新同步到你的 main
    git push origin main      # 推送到你的 GitHub fork
    ```

2. **新建答题分支**（每次贡献对应一个分支）：

    ```bash
    git checkout -b your-branch-name  # 创建并切换到新分支
    ```

3. **找到对应的解答文件**。在 `docs/exercises/` 里找到题目文件，每道题下方都有一行 `--8<--`，标出了对应的解答文件路径。例如第一章练习"再探奖券收集问题"下方是：
    `--8<-- "solutions/chapter_01/exercises/exercise_coupon_collector.md"`
    对应文件就是：`docs/solutions/chapter_01/exercises/exercise_coupon_collector.md`

4. **追加你的内容**。把下面的模板复制到对应解答文件末尾（保留缩进），填入你的解答或想法。中英文皆可，请使用符合 Markdown 语法的格式，请不要修改文件内已有的内容：

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

确认内容修改无误后，执行以下步骤：

在终端中执行：

```bash
# 仅添加你改动的解答文件（避免误提交无关内容）
git add docs/solutions/...

# 提交修改（替换为你的实际描述）
git commit -m "add solution for xx, by xx"

# 推送到你的 GitHub fork
git push -u origin your-branch-name
```

推送完成后：
1. 回到 GitHub，进入你 Fork 的仓库主页，点击 **Compare & pull request**，确认合并路径无误：
    - base repository: `yuchen-he00/stochastic-process-exercises`
    - base branch: `main`
    - compare branch: `your-branch-name`
2. 在 PR 描述中简要写明做了哪些修改，然后点击 **Create pull request** 按钮完成提交。

作者会在 1～3 天内审核你的 PR，通过后会合并并自动编译。

### 清理分支 🧹

PR 被合并后，你的答题分支就完成了使命，建议清理掉：

1. 在 GitHub 的 PR 页面点击 **Delete branch** 删除远程分支。
2. 在本地执行：

```bash
git checkout main        # 切回主分支
git pull origin main     # 同步合并后的最新内容
git branch -d your-branch-name  # 删除已完成的本地分支
```

## 意见与勘误 💬

如果你对教材本身有任何意见、建议，或者发现了 typo，欢迎前往 [GitHub 仓库](https://github.com/yuchen-he00/stochastic-process-exercises/issues) 提交 Issue，我们会及时处理。
