---
lastUpdated: 2023/9/17 02:12
---

# Vue打包部署Nginx后页面路径刷新404的问题

## 404的原因

浏览器访问的路径`URL`在`Vue`打包的项目资源路径中是不存在的，因为`Vue`的路由存在于`vue-router`的`js`中，并不是真实的`URL`

## 解决方式

`Nginx`中添加以下代码

```shell{8,11-13}
server {
    listen 80;
    server_name localhost;
    ...

    #vue-router配置
    location / {
        try_files $uri $uri/ @router;
        index index.html;
    }
    location @router {
        rewrite ^.*$ /index.html last;
    }
}
```

<Badge type="danger" text="谨记"/> **修改配置后请重载`Nginx`**

```shell
nginx -s reload
```
