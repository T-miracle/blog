---
lastUpdated: 2023/9/17 02:12
---

# MySQL 8.0 以上版本忘记密码重置方式

## 关闭mysql服务

首先，请先关闭掉 MySQL 服务，以管理员身份打开命令行窗口，运行以下代码

```shell
net stop mysql
```

## 跳过权限验证登录 MySQL

```shell
mysqld --shared-memory --skip-grant-tables
```

输入以上命令后，此时命令提示符窗口处于锁定状态，我们**重新以管理员权限打开新的命令行窗口**

## 在新的窗口中登录 MySQL

使用命令：`mysql -uroot -p`，无需输入密码，直接回车即可

## 切换到 MySQL，将密码置空

```shell
use mysql;
update user set authentication_string='' where user='root';
```

将 `authentication_string` 置空

然后刷新权限：

```shell
flush privileges;
```

## 设置加密规则并更新新密码，授权

```shell
ALTER USER 'root'@'localhost' IDENTIFIED BY 'abc123456' PASSWORD EXPIRE NEVER; 
alter user 'root'@'localhost' identified by 'abc123456';
grant all privileges  on *.*  to "root"@'localhost';
flush privileges;
```

::: warning 注意

这里强调一下，授权的必要性，因为不是首次安装，所以重置密码之后原来的权限可能会失效了

比如我这里就是，在登陆之后，使用 `use mysql`，提示没有权限。

导致后面无法创建用户，和 Navicat 连接失败也无法修改

:::

## 设置成功后，重启 MySQL 服务，使用新密码登录

重启服务，也是需要管理员身份运行cmd，否则没权限

<vPageTips
  :links="[
    { text: 'MYSQL8.0以上版本忘记ROOT密码', link: 'https://blog.51cto.com/linmengmeng/5907648' }
  ]"
>本文章转载于</vPageTips>
