# Git 常用命令

## 基础命令

### 初始化

- <badge type="tip" text="常用"/>在当前目录中初始化一个新的 Git 仓库。

   ```shell
   git init
   ```

- 在指定的目录中初始化一个新的 Git 仓库。

  ```shell
  git init <directory>
  ```

- 初始化一个空的 Git 仓库，用于远程仓库或者共享仓库。

  ```shell
  git init --bare
  ```

- 使用指定目录下的文件作为 Git 仓库的模板，例如自定义 Git 配置文件、Git 钩子（Git hooks）等。

  ```shell
  git init --template=<template-directory>
  ```

- 将 Git 仓库的对象库（object database）存储在指定的目录中，而不是在当前仓库目录下的 .git 子目录中。

  ```shell
  git init --separate-git-dir=<git-dir>
  ```

### 克隆

- <badge type="tip" text="常用"/>将指定的 Git 仓库复制到当前目录下的一个新目录中。

  ````shell
  git clone <repository>
  ````

- 将指定的 Git 仓库复制到指定的目录中。

  ```shell
  git clone <repository> <directory>
  ```

- 仅复制 Git 仓库的指定深度的历史记录，这可以减少克隆所需的时间和空间。

  ```shell
  git clone --depth=<depth> <repository>
  ```

  例如：

  ```shell
  # 只复制 Git 仓库的最新一次提交。
  git clone --depth=1 <repository>
  ```

- 克隆整个 Git 仓库，并将指定分支的代码检出到本地。

  这意味着除了指定分支的代码外，所有分支和提交历史都将被克隆到本地。

  ```shell
  git clone --branch -b <branch> <repository>
  ```

  例如：

  ```shell
  # 只复制 Git 仓库的 main 分支。
  git clone --branch -b main <repository> 
  ```

- <badge type="tip" text="常用"/>仅克隆指定分支的提交历史，而不包括其他分支和提交历史。这样可以减少克隆所需的时间和空间。

  ```shell
  git clone --single-branch -b <branch> <repository>
  ```

  例如：

  ```shell
  # 只克隆 Git 仓库 main 分支的提交历史。
  git clone --single-branch -b main <repository> 
  ```

- 递归克隆 Git 仓库中所有的子模块（submodule）。

  ```shell
  git clone --recursive <repository>
  ```

## 仓库管理

- <badge type="tip" text="常用"/>添加一个新的远程仓库

  ```shell
  # `remote_name` 表示远程仓库的名称，`remote_url` 表示远程仓库的 URL
  git remote add [remote_name] [remote_url]
  ```
  
- 查看远程仓库的详细信息，包括名称和 URL

  ```shell
  git remote -v
  ```

- 将一个远程仓库重命名为另一个名称

  ```shell
  git remote rename [old_name] [new_name]
  ```

- 删除一个远程仓库

  ```shell
  git remote remove [remote_name]
  ```

- 显示一个远程仓库的详细信息，包括分支的跟踪关系

  ```shell
  git remote show [remote_name]
  ```

- 从远程仓库中获取最新的提交信息，但不会自动合并到本地分支中

  ```shell
  git remote update
  ```

- 删除本地不存在的远程分支

  ```shell
  git remote prune [remote_name]
  ```

- 修改远程仓库的 URL

  ```shell
  git remote set-url [remote_name] [new_url]
  ```

### 查看文件状态

- <badge type="tip" text="常用"/>查看工作区和暂存区的文件状态。

  ```shell
  git status
  ```
  
- 以短格式显示文件状态。

  ```shell
  git status --short
  # 简写
  git status -s
  ```

- 以详细格式显示文件状态。

  ```shell
  git status --verbose
  # 简写
  git status -v
  ```

- 不显示未跟踪的文件。

  ```shell
  git status --untracked-files=no
  # 简写
  git status -uno
  ```

- 显示所有未跟踪的文件。

  ```shell
  git status --untracked-files=all
  # 简写
  git status -u
  ```

- 显示当前分支的状态。

  ```shell
  git status --branch
  # 简写
  git status -b
  ```
  
- 以机器可读的格式显示文件状态。
  
  ```shell
  git status --porcelain
  ```

- 显示被忽略的文件状态。

  ```shell
  git status --ignored
  ```

----

> 这些用法可以根据实际需求进行组合使用，以满足不同的需求。
> 例如，如果想要查看当前分支的状态并且只显示短格式的文件状态，可以使用 `git status -sb` 命令。

### 添加暂存

- 将指定文件添加到暂存区。

  ```shell
  git add <file>
  ```

  例如：

  ```shell
  # 将 index.html 添加到暂存区
  git add index.html
  ```

- <badge type="tip" text="常用"/>将所有修改过或新增的文件添加到 Git 暂存区，包括被删除的文件。

  这个命令会递归地扫描当前目录及其所有子目录中的文件，将它们全部添加到暂存区。

  ```shell
  git add .
  ```

- 将所有修改过、新增或删除的文件添加到暂存区。

  ```shell
  git add -all              
  # 简写
  git add -A
  ```

- 将所有修改过或被删除的文件添加到暂存区，不包括新增的文件。

  ```shell
  git add --update                  
  # 简写
  git add -u
  ```

- 交互式地添加文件或者修改，可以选择要添加或者不添加的部分，或者可以选择将其加入下一个提交中。

  ```shell
  git add --patch                 
  # 简写
  git add -p
  ```

### 配置用户名与邮箱

::: warning <badge type="warning" text="注意"/>
> 如果没有配置用户名和邮箱，当进行提交时，Git会提示用户配置用户名和邮箱信息，如果仍然提交，提交记录中将不会显示作者的名字和电子邮件地址，而是显示一个默认的值。
> 这可能会导致其他开发人员难以追踪提交记录，并使项目历史记录不易于管理。
> 因此，为了维护清晰的项目历史记录，建议在第一次使用Git时设置用户名和邮箱信息。
:::

- 全局配置

  ```shell
  # 配置全局用户名
  git config --global user.name "Your Name"
  # 配置全局邮箱
  git config --global user.email "your_email@example.com"
  ```

- 局部配置

  ```shell
  # 配置局部用户名
  git config user.name "Your Name"
  # 配置局部邮箱
  git config user.email "your_email@example.com"
  ```

  > <badge type="warning" text="注意"/> 项目提交时，用户名与邮箱会以局部配置优先

### 提交

- 打开默认编辑器来输入本次提交的信息。

  ```shell
  git commit
  ```

- <badge type="tip" text="常用"/>在提交时添加提交信息，而不需要打开默认编辑器。

  ```shell
  git commit -m "<message>"
  ```

- 将所有已经跟踪的文件的变更提交到本地仓库中，跳过使用`git add`添加文件到暂存区的步骤。

  ```shell
  git commit -a
  ```

- 将本次提交的修改合并到上一次提交中。这可以用于修改提交信息、添加和删除文件等。

  ```shell
  git commit --amend
  ```

- 在提交信息中包含变更的详细信息，例如修改的文件和行号等。

  ```shell
  git commit -v
  ```

- 在提交时跳过 Git 钩子（Git hook）的执行。Git 钩子是一些脚本，它们在 Git 操作时自动执行，例如代码格式检查、单元测试等。

  ```shell
  git commit --no-verify
  ```

- 允许提交信息为空。

  ```shell
  git commit --allow-empty-message
  ```

- 在提交信息末尾添加 "Signed-off-by" 行，用于记录提交者的身份信息。

  ```shell
  git commit --signoff
  ```

- 重置提交者信息为 Git 配置文件中的默认值。

  ```shell
  git commit --reset-author
  ```

### 拉取

- <badge type="tip" text="常用"/>默认情况下，会从与当前分支相对应的远程分支中拉取最新的代码，并将其合并到本地分支中

  ```shell
  git pull
  ```

- 指定要从哪个远程仓库拉取最新的代码

  ```shell
  git pull <remote>
  ```

- <badge type="tip" text="常用"/>指定要从哪个远程分支拉取最新的代码

  ```shell
  git pull <remote> <branch>
  ```

- 拉取最新的代码时使用`rebase`而不是`merge`。

  `rebase`会将本地的提交“重新应用”到远程分支之上，从而使提交历史更加线性。

  ```shell
  git pull --rebase
  ```

- 拉取最新的代码时不使用`rebase`，而是使用`merge`。这是默认行为。

  ```shell
  git pull --no-rebase
  ```

- 拉取最新的代码时只允许`fast-forward`合并。如果远程分支有新的提交，而本地分支有提交尚未合并，那么会拉取失败。

  ```shell
  git pull --ff-only
  ```

- 拉取最新的代码并自动合并到本地分支中，但是不创建新的提交。

  ```shell
  git pull --no-commit
  ```

- 拉取最新的代码并将所有提交合并成一个新的提交。

  ```shell
  git pull --squash
  ```

### 推送

- 推送当前分支的所有本地提交到远程仓库。

  如果当前分支还不存在于远程仓库中，Git 会自动创建一个同名的分支。

  ```shell
  git push
  ```

- 推送当前分支的所有本地提交到指定的远程仓库。

  ```shell
  git push <remote>
  ```

- 推送指定分支的所有本地提交到指定的远程仓库，例如：git push origin master。

  ```shell
  git push <remote> <branch>
  ```

- 将本地分支和远程分支关联，并将当前分支的所有本地提交推送到远程仓库。

  这个命令通常在第一次将本地分支推送到远程仓库时使用。

  ```shell
  git push -u <remote> <branch>
  ```

- 推送所有本地分支到指定的远程仓库。

  ```shell
  git push --all <remote>
  ```

- 推送所有标签到指定的远程仓库。

  ```shell
  git push --tags <remote>
  ```

- <badge type="danger" text="慎用"/>强制推送指定分支的所有本地提交到远程仓库。

  注意，强制推送会覆盖远程分支上的所有提交，<span style="color: red">（同事背刺命令）慎用</span>。

  ```shell
  git push --force <remote> <branch> // [!code error]
  # 简写 // [!code error]
  git push -f <remote> <branch> // [!code error]
  ```

### 分支

- <badge type="tip" text="常用"/>查看当前所在分支

  ```shell
  git branch
  ```

- 创建新分支

  ```shell
  git branch <branch_name>
  ```

- 删除指定分支

  ```shell
  git branch -d <branch_name>
  ```

- 强制删除指定分支

  ```shell
  git branch -D <branch_name>
  ```

- 重命名分支

  ```shell
  git branch -m <old_branch_name> <new_branch_name>
  ```

### 检出（切换分支）

- <badge type="tip" text="常用"/>切换到指定的分支

  ```shell
  git checkout <branch_name>
  ```

- <badge type="tip" text="常用"/>创建并切换到一个新的分支

  ```shell
  git checkout -b <new_branch_name>
  ```

### 分支的修改与合并

- 将当前分支的更改在 `<branch>` 分支上进行重演

  ```shell
  git rebase <branch>
  ```

- <badge type="tip" text="常用"/>以交互模式进行变基，可以对 commit 进行合并、编辑、删除等操作。

  ```shell
  git rebase -i <commit>
  ```
  
- 处理完冲突之后，继续进行 rebase。

  ```shell
  git rebase --continue
  ```

- 取消一个正在进行的 rebase 操作。

  ```shell
  git rebase --abort
  ```

## 一些常用操作方式

### 删除某个提交信息

1. 首先，使用 `git log` 命令找到要删除的提交的哈希值。
2. 然后，使用 `git rebase -i` 命令进入交互式 rebase 界面。
3. 在交互式 rebase 界面中，找到要删除的提交所在的行，`:i` 进入编辑模式，将其前面的命令从 pick 改为 drop。
4. 按 `Ctrl + c` 退出编辑模式，使用 `:wq` 保存并退出交互式 rebase 界面。
5. 执行 `git push --force` 命令将更改强制推送到远程仓库。

::: warning 注意
使用 `git rebase` 命令修改历史记录会改变提交的哈希值，这可能会对其他人的代码产生影响。
因此，在对公共分支进行重写操作之前，需要与团队成员讨论和协商。
:::
