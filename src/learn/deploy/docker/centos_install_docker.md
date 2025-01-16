---
lastUpdated: 2023/9/17 02:12
---

# CentOS 安装 Docker

## CentOS 环境

```shell
cat /etc/redhat-release
```

查看 CentOS 版本，确保 CentOS 的版本 > 7

## 卸载旧版本

旧版本的 Docker 被称为 `Docker` 或 `Docker-engine`。在尝试安装新版本以及相关依赖项之前，请卸载任何此类旧版本。

```shell
yum remove docker \
           docker-client \
           docker-client-latest \
           docker-common \
           docker-latest \
           docker-latest-logrotate \
           docker-logrotate \
           docker-engine
```

`yum` 可能会报告您没有安装这些软件包。

当卸载 Docker 时，存储在 `/var/lib/docker/` 中的映像、容器、卷和网络不会自动删除。

## 安装 Docker

### 自动安装

```shell
# 使用官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 手动安装

- **`yum` 安装 gcc 相关**

  1. 确保 CentOS 能上外网
  2. 以此运行以下命令

    ```shell
    yum -y install gcc
    yum -y install gcc-c++
    ```

- **安装相关软件包**

  在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

  1. 安装 `yum-utils`

     安装 `yum-utils` 包(它提供 `yum-config-manager` 实用程序)并设置存储库。

     ```shell
     yum install -y yum-utils
     ```

  2. 设置 stable 仓库

     鉴于国内网络问题，请使用阿里云仓库源，因为使用官网的源会出错

     ```shell
     yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
     ```

  3. 更新 `yum` 软件包索引

     ```shell
     yum makecache fast
     ```

  4. 安装 `Docker-ce`

     ```shell
     yum -y install docker-ce docker-ce-cli containerd.io
     ```

## 启动 Docker

```shell
# 启动
systemctl start docker
```
