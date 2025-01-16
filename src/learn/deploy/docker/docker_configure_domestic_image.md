---
lastUpdated: 2025/1/13 23:32
---

# docker配置国内镜像（Linux版）

## 编辑 Docker 配置文件

编辑 Docker 配置文件 `/etc/docker/daemon.json`，如果文件不存在则创建该文件。

```shell
sudo mkdir -p /etc/docker
sudo nano /etc/docker/daemon.json
```

## 添加国内镜像地址

在 `daemon.json` 文件中添加国内镜像地址，如下所示：

```json
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://dockerproxy.com",
        "https://docker.nju.edu.cn",
        "https://docker.mirrors.ustc.edu.cn"
    ]
}
```

如果上面的镜像地址无法使用，可以尝试其他镜像地址。

## 重启 Docker 服务

编辑完成后，重启 Docker 服务使配置生效。

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 验证配置是否生效

运行以下命令验证配置是否生效：

```shell
docker pull hello-world
```
