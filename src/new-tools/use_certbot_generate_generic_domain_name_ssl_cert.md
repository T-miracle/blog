---
lastUpdated: 2025/08/07 09:43
---

# 使用 Certbot 生成泛域名 SSL 证书

## 为什么要用 Certbot 注册，而不是用国内云服务器厂商申请的证书

因为我已经受够了国内这些云服务器厂商无耻的骚操作了！！！

就拿华为云为例：

1. 非免费证书售价高得离谱！一个正常的SSL证书居然2000块钱起步！
2. 免费证书是有，也是三个月时效（👉谷歌缺大德），但是只能申请20次！（不是哥们，免费证书你也限制次数！）
3. 第三点是最重要的，居然不能申请泛域名证书！这意味着，你有一个主域名和三个子域名，那么你得申请4个免费测试证书！（逆天）

所以，certbot 这时候的重要性就突出来了：他免费，快速，而且能申请泛域名，这代表你一个证书就能完成一个域名的所有使命了！（真香）

## 如何使用 Certbot 注册证书

很简单！你只需要很轻松的几个步骤就能搞定！

### 安装 Certbot

首先你得安装 Certbot，使用以下命令：

- Ubuntu / Debian：

  ```sheel
  sudo apt update
  sudo apt install certbot python3-certbot-nginx
  ```

- CentOS / RHEL：

  ```sheel
  sudo apt update
  sudo apt install certbot python3-certbot-nginx
  ```

- macOS（通过 Homebrew）：

  ```sheel
  sudo apt update
  sudo apt install certbot python3-certbot-nginx
  ```

### 申请证书

是的，安装完成后，你就可以直接申请证书了

因为我没有用自动续签，这里我只示范如何手动申请流程：

#### 执行申请命令

使用以下命令：

```shell
sudo certbot certonly --manual --preferred-challenges dns -d "*.example.com" -d example.com
```

> `example.com` 替换成你的域名地址

#### 设置邮箱

如果是第一次，它可能需要你提供一个邮箱地址，你只需要输入正确的邮箱地址即可

#### 添加 DNS 解析

接着，它会提示你，需要去域名DNS解析里添加一条名为 `_acme-challenge.example.com` (注意替换称自己的域名) 的 TXT 记录

这条记录仅用于鉴定你对该域名是否具有所有权

它会给你一串随机字符码，你只需要将该值填入 `_acme-challenge.example.com` 记录中即可

添加后稍等生效，然后继续 Certbot 流程

::: tip 注意
有可能会有两次提示你添加随机字符码到该记录里，你只需要重新删除记录里的值，重新设置即可
:::

#### 生成证书

到目前，所有步骤已走完，只需等待它返回证书文件

一般它会将生成的证书放置到 `/etc/letsencrypt/live/example.com/` 目录下：

- 证书本体：fullchain.pem
- 证书密钥：privkey.pem

### 配置证书

以 nginx 为例：

```nim
server {
    listen 443 ssl;
    server_name namichong.com *.namichong.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    ...
}
```

然后，使用 `nginx -s reload` 重启即可
