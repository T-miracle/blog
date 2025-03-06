---
lastUpdated: 2025/1/15 23:24
---

# artalk 评论系统安装与配置教程（docker版）

::: tip 关联问题
使用 docker nginx 反向代理 artalk 评论系统
:::

官方的安装教程写的太简约了，按照官方的教程安装后，虽然 docker 容器是成功启动了，但是网页后台无法访问。

最后折腾了整整一天，终于搞定了，现在把安装过程记录下来，希望对大家有所帮助。

## 第一步：拉取镜像

docker 安装教程这里不用多说了吧？如果不会，可以参考
[这里](../learn/deploy/docker/centos_install_docker){target=_blank}。

```bash
docker pull artalk/artalk-go
docker pull nginx
```

如果超时，可以先配置一下国内镜像，这里有教程
[点击查看](../learn/deploy/docker/docker_configure_domestic_image){target=_blank}

## 第二步：docker 创建共同网络

```bash
docker network create my-network
```

这一步是为了让 artalk 和 nginx 在同一个网络中，方便通信。

## 第三步：启动 artalk 容器

```bash
docker run -d \
    --name artalk \
    -p 8080:23366 \
    -v $(pwd)/data:/data \
    -e "TZ=Asia/Shanghai" \
    -e "ATK_LOCALE=zh-CN" \
    -e "ATK_SITE_DEFAULT=[你的站点名称]" \
    -e "ATK_SITE_URL=[你的站点地址]" \
    --network my-network \
    artalk/artalk-go
```

`[你的站点名称]` 和 `[你的站点地址]` 请替换成你自己的，格式如下：

- `[你的站点名称]`：站点名称，比如 `我的博客`
- `[你的站点地址]`：站点地址，比如 `http://www.example.com`

查看 artalk 容器是否启动成功：

```bash
docker logs artalk
```

如果看到如下信息，说明启动成功：

![启动成功](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/artalk_start_success.png)

::: warning 注意
你还需要创建一个管理员账户，方便后续登陆后台管理页面。

```bash
docker exec -it artalk artalk admin
```
:::

## 第四步：配置 nginx

```nginx
docker run -d \
    --name nginx \
    -p 80:80 \
    -p 443:443 \
    -v /root/nginx/nginx.conf:/etc/nginx/nginx.conf \
    -v /var/www/:/var/www/ \
    --network my-network \
    nginx
```

`-v` 参数后面的路径请根据自己的实际情况修改，这里的路径仅供参考。

修改 `nginx.conf` 配置文件，添加如下配置：

```nginx
server
{
  listen 80;
  listen [::]:80;
  server_name artalk.example.com;

  location / {
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://artalk:23366/; # 这里的 artalk 是 artalk 容器的名称，这点和官方教程不一样
  }
}
```

然后重启 nginx 容器：

```bash
# docker 进入交互式 nginx 容器
docker exec -it nginx bash
# 查看 nginx 配置是否正确
nginx -t
# 重启 nginx
nginx -s reload
```

::: warning 注意
请记得在服务器上开放 80 端口，否则无法访问。
:::

## 第五步：访问后台

现在可以通过浏览器访问 `http://artalk.example.com:80`，进入 artalk 的后台管理页面。

## 第六步：前端集成

这一步不多赘述，按[官方教程](https://artalk.js.org/zh/guide/deploy.html#%E5%AE%A2%E6%88%B7%E7%AB%AF)来就行。

## 其他问题

### HTTPS 无法使用 HTTP 的资源

如果你的网站是 HTTPS 的，而 artalk 是 HTTP 的，那么可能会出现无法加载资源的问题，

一般报错如下：

```text
Mixed Content: The page at 'https://www.example.com/xxx.html' was loaded over HTTPS, but requested an insecure resource
'http://artalk.example.com/api/v2/conf'. This request has been blocked; the content must be served over HTTPS.
```

解决方法：**需要给 artalk 配置证书**

### 跨域无法加载评论框

一般报错如下：

```text
No 'Access-Control-Allow-Origin' header is present on the requested resource.
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

解决方法：**登录 artalk 后台管理页面，在 `设置 -> 可信域名` 中，配置你的实际网址与测试网址**
