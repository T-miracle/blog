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

### `images` 罗列本地镜像

```shell
docker images [选项] [镜像名称[:版本标签]]
```

::: info 选项参数说明

- <badge text="常用" type="tip"/>列出本地所有的镜像

  ```shell
  docker images
  ```
  
  该命令等同于：
  
  ```shell
  docker image ls
  ```

- <badge text="常用" type="tip"/>`-a`：列出本地所有的镜像（含历史镜像），包括中间层镜像

  ```shell
  docker images -a
  ```

  等同于：

  ```shell
  docker images --all
  ```

- <badge text="常用" type="tip"/>`-q`：仅列出本地镜像的 id

  ```shell
  docker images -q
  ```

  等同于：

  ```shell
  docker images --quiet
  ```
  
- `--digests` 列出镜像的摘要信息

  ```shell
  docker images --digests
  ```
 
- `--no-trunc` 列出所有镜像的完整信息

  ```shell
  docker images --no-trunc
  ```

:::

### `run` 运行镜像创建容器

```shell
docker run [镜像名称]
```

如果本地没有找到相应镜像，则自动从镜像源下载。

::: info 选项参数说明

- <badge text="常用" type="tip"/>`-it`：运行一个容器并启动一个交互式会话

  ```shell
  docker run -it [镜像名称] [命令]
  ```
  
  例如：

  ```shell
  docker run -it ubuntu bash
  ```

- <badge text="常用" type="tip"/>`-p`：运行一个容器并将宿主机的端口映射到容器内的端口

  ```shell
  docker run -p [宿主机端口]:[容器端口] [镜像名称]
  ```

  例如：

  ```shell
  docker run -p 80:8080 nginx
  ```
  
- <badge text="常用" type="tip"/>`-d`：后台运行一个容器

  ```shell
  docker run -d [镜像名称]
  ```

  例如：

  ```shell
  docker run -d redis
  ```
  
- <badge text="常用" type="tip"/>`-v`：挂载一个本地目录到容器内

  ```shell
  docker run -v [宿主机目录/文件]:[容器目录/文件] [镜像名称]
  ```

  例如：

  ```shell
  docker run -v /path/to/dist/dir:/path/to/container/dir nginx
  ```
  
- <badge text="常用" type="tip"/>`--name`：指定容器名称

  ```shell
  docker run --name [自定义容器名称] [镜像名称]
  ```

  例如：

  ```shell
  docker run --name my_nginx_container nginx
  ```
  
- `-e`：设置环境变量

  ```shell
  docker run -e [变量名]=[变量值] [镜像名称]
  ```

  例如：

  ```shell
  docker run -e MYSQL_ROOT_PASSWORD=pass123 mysql
  ```

:::

### `ps` 罗列容器

```shell
# 列出当前运行中的容器
docker ps
```

::: info 选项参数说明

- <badge text="常用" type="tip"/>`-a`：列出包括已停止的容器在内的所有容器
- <badge text="常用" type="tip"/>`-l`：以详细格式列出容器信息，包括端口映射、容器创建时间等
- <badge text="常用" type="tip"/>`-q`：只显示容器 ID
- `--format`：自定义输出格式

  ```shell
  docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Status}}"
  ```

- `-n`：显示最近 n 个容器

  ```shell
  # 显示最近5个容器
  docker ps -n 5
  ```

- `--sort`：按照指定列排序容器
- `--size`：显示容器的的大小

:::

### `start` 启动容器

```shell
docker start [容器id]
```

等同于：

```shell
docker container start [容器id]
```

可以同时启动多个容器

```shell
docker start [容器1 id] [容器2 id]
```

### `stop` 停止容器

```shell
docker stop [容器id]
```

### `pull` 拉取远程仓库的镜像

```shell
docker pull [镜像名称[:版本号]]
```

不附加版本号默认拉取最新版本。如果想要拉取具体某个版本，可以在镜像名后加上 `[:版本号]` 来限制，例如：

```shell
# 表示拉取 redis 6.0.8 版本
docker pull redis:6.0.8
```

### `push` 上传镜像

```shell
docker push
```

### `search` 在远程仓库中搜索镜像

```shell
docker search
```

查询默认列出25个数据。如果不想列出太多数据，可以使用 `--limit` 限制查询条数

```shell
docker search --limit 5 [镜像模糊名称]
```

### `export` 导出镜像

```shell
docker export
```

### `import` 导入镜像

```shell
docker import
```

### `commit` 提交镜像

```shell
docker commit [选项参数] [容器] [仓库[:版本号]]
```

::: info 选项参数说明

- `-a`（`--author`的简写）：指定新镜像的作者信息。
- `-c`（`--change`的简写）：在提交过程中执行额外的 Dockerfile 指令。
- `-m`（`--message`的简写）：提交的描述信息。
- `-p`（`--pause`的简写）：在提交之前暂停容器的运行。

:::
