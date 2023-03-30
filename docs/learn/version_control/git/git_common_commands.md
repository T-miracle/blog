# Git 常用命令

## 初始化

```shell {1,2}
# 在当前目录中初始化一个新的 Git 仓库。
git init
# 在指定的目录中初始化一个新的 Git 仓库。
git init <directory>
# 初始化一个空的 Git 仓库，用于远程仓库或者共享仓库。
git init --bare
# 使用指定目录下的文件作为 Git 仓库的模板，例如自定义 Git 配置文件、Git 钩子（Git hooks）等。
git init --template=<template-directory>
# 将 Git 仓库的对象库（object database）存储在指定的目录中，而不是在当前仓库目录下的 .git 子目录中。
git init --separate-git-dir=<git-dir>
```

## 克隆

```shell {1-2,12-15}
# 将指定的 Git 仓库复制到当前目录下的一个新目录中。
git clone <repository>
# 将指定的 Git 仓库复制到指定的目录中。
git clone <repository> <directory>
# 仅复制 Git 仓库的指定深度的历史记录，这可以减少克隆所需的时间和空间。
# 例如：git clone --depth=1 <repository> 将只复制 Git 仓库的最新一次提交。
git clone --depth=<depth> <repository>
# 克隆整个 Git 仓库，并将指定分支的代码检出到本地。
# 这意味着除了指定分支的代码外，所有分支和提交历史都将被克隆到本地。
# 例如：git clone --branch -b main <repository> 将只复制 Git 仓库的 main 分支。
git clone --branch -b <branch> <repository>
# 仅克隆指定分支的提交历史，而不包括其他分支和提交历史。这样可以减少克隆所需的时间和空间。
# 例如：git clone --single-branch -b main <repository> 将只克隆 Git 仓库 main 分支的提交历史。
git clone --single-branch -b <branch> <repository>
# 递归克隆 Git 仓库中所有的子模块（submodule）。
git clone --recursive <repository>
```

## 添加暂存

```shell {3-5}
# 将指定文件添加到暂存区，例如：git add index.html。
git add <file>
# 将所有修改过或新增的文件添加到 Git 暂存区，包括被删除的文件。
# 这个命令会递归地扫描当前目录及其所有子目录中的文件，将它们全部添加到暂存区。
git add .
# 将所有修改过、新增或删除的文件添加到暂存区。
git add -A
git add -all
# 将所有修改过或被删除的文件添加到暂存区，不包括新增的文件。
git add -u
git add --update
# 交互式地添加文件或者修改，可以选择要添加或者不添加的部分，或者可以选择将其加入下一个提交中。
git add -p
git add --patch
```

## 提交

```shell {3,4}
# 打开默认编辑器来输入本次提交的信息。
git commit
# 在提交时添加提交信息，而不需要打开默认编辑器。
git commit -m "<message>"
# 将所有已经跟踪的文件的变更提交到本地仓库中，跳过使用`git add`添加文件到暂存区的步骤。
git commit -a
# 将本次提交的修改合并到上一次提交中。这可以用于修改提交信息、添加和删除文件等。
git commit --amend
# 在提交信息中包含变更的详细信息，例如修改的文件和行号等。
git commit -v
# 在提交时跳过 Git 钩子（Git hook）的执行。Git 钩子是一些脚本，它们在 Git 操作时自动执行，例如代码格式检查、单元测试等。
git commit --no-verify
# 允许提交信息为空。
git commit --allow-empty-message
# 在提交信息末尾添加 "Signed-off-by" 行，用于记录提交者的身份信息。
git commit --signoff
# 重置提交者信息为 Git 配置文件中的默认值。
git commit --reset-author
```

## 拉取

```shell {1,2,5,6}
# 默认情况下，会从与当前分支相对应的远程分支中拉取最新的代码，并将其合并到本地分支中
git pull
# 指定要从哪个远程仓库拉取最新的代码
git pull <remote>
# 指定要从哪个远程分支拉取最新的代码
git pull <remote> <branch>
# 拉取最新的代码时使用`rebase`而不是`merge`。`rebase`会将本地的提交“重新应用”到远程分支之上，从而使提交历史更加线性。
git pull --rebase
# 拉取最新的代码时不使用`rebase`，而是使用`merge`。这是默认行为。
git pull --no-rebase
# 拉取最新的代码时只允许`fast-forward`合并。如果远程分支有新的提交，而本地分支有提交尚未合并，那么会拉取失败。
git pull --ff-only
# 拉取最新的代码并自动合并到本地分支中，但是不创建新的提交。
git pull --no-commit
# 拉取最新的代码并将所有提交合并成一个新的提交。
git pull --squash
```

## 推送

```shell {6,7}
# 推送当前分支的所有本地提交到远程仓库。
# 如果当前分支还不存在于远程仓库中，Git 会自动创建一个同名的分支。
git push
# 推送当前分支的所有本地提交到指定的远程仓库。
git push <remote>
# 推送指定分支的所有本地提交到指定的远程仓库，例如：git push origin master。
git push <remote> <branch>
# 将本地分支和远程分支关联，并将当前分支的所有本地提交推送到远程仓库。
# 这个命令通常在第一次将本地分支推送到远程仓库时使用。
git push -u <remote> <branch>
# 推送所有本地分支到指定的远程仓库。
git push --all <remote>
# 推送所有标签到指定的远程仓库。
git push --tags <remote>
# 强制推送指定分支的所有本地提交到远程仓库。 // [!code error]
# 注意，强制推送会覆盖远程分支上的所有提交，（同事背刺命令）慎用。 // [!code error]
git push --force <remote> <branch> // [!code error]
```


