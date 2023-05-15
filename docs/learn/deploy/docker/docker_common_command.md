# Docker 常用命令

## 帮助启动类命令

### 启动 docker

```shell
systemctl start docker
```

### 停止 docker

```shell
systemctl stop docker
```

### 重启 docker

```shell
systemctl restart docker
```

### 查看 docker 状态

```shell
systemctl status docker
```

### 开机启动 docker

```shell
systemctl enable docker
```

----

::: details 其他
- <h3>查看 docker 概要信息</h3>

```shell
docker info
```
 
- <h3>查看 docker 帮助文档</h3>

```shell
docker --help
# 或 查看某个具体命令的帮助文档
docker [命令] --help
```
:::

## 镜像命令

### 罗列本地镜像

```shell
docker images
```

::: details 选项参数说明
- `-a`：列出本地所有的镜像（含历史镜像）
- `-q`：仅列出本地镜像的 id
:::

该命令等同于：

```shell
docker image ls
```

### 运行镜像创建容器

```shell
docker run [image]
```

如果本地没有找到相应镜像，则自动从镜像源下载。

### 罗列容器

```shell
# 列出当前运行中的容器
docker ps
```

### 拉取远程仓库的镜像

```shell
docker pull [镜像名称]
```

默认拉取最新版本，如果想要拉取具体某个版本，可以在镜像名后加上 `:[版本号]` 来限制，例如：

```shell
# 表示拉取 redis 6.0.8 版本
docker pull redis:6.0.8
```

### 上传镜像

```shell
docker push
```

### 在远程仓库中搜索镜像

```shell
docker search
```

查询默认列出25个数据。如果不想列出太多数据，可以使用 `--limit` 限制查询条数

```shell
docker search --limit 5 [镜像模糊名称]
```

