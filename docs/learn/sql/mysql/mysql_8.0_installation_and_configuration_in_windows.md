# Windows 下 MySQL 8.0 安装与配置

## 下载安装包

> 有 ZIP 和 MSI 两种下载方式，但是推荐下载 MSI，可以直接点击安装比较方便。
> 
> 如果你还是喜欢 ZIP 解压即用，可以查看[ZIP 方式安装的配置方法](mysql_8.0_zip_configuration.md)

MYSQL 官网地址：[点击进入](https://dev.mysql.com/downloads/mysql/)

---

![](/images/mysql_8.0_download.png)

## 安装

点击下载的文件，进行安装

![](/images/mysql_8.0_install_1.png)

使用默认即可，一直点击`Next`到下面页面

![](/images/mysql_8.0_install_3.png)

点击`Execute`，开始安装，需等待片刻

![](/images/mysql_8.0_install_4.png)

当全部显示绿勾时，表示安装完毕，一直点击`Next`到下面页面

![](/images/mysql_8.0_install_6.png)

因为我们是本地开发环境，所以默认选择`Development Computer`，其他保持不变，一直点击`Next`到下面页面

![](/images/mysql_8.0_install_8.png)

设置密码，确认密码，一直点击`Next`到下面页面

![](/images/mysql_8.0_install_11.png)

点击`Execute`

![](/images/mysql_8.0_install_12.png)

全部显示绿勾，点击`Finish`，然后一直点击`Next`到下面页面

![](/images/mysql_8.0_install_16.png)

输入之前填写的密码，点击`Check`进行检查，绿勾表示连接成功，继续点击`Next`

![](/images/mysql_8.0_install_17.png)

点击`Execute`

![](/images/mysql_8.0_install_18.png)

全部显示绿勾，点击`Finish`，然后一直点击`Next`直到结束

## 配置系统环境变量

查看安装路径，默认路径为`C:\Program Files\MySQL\`

其中`MySQL Server 8.0`就是 MySQL 服务器本体

![](/images/mysql_8.0_url.png)

打开系统环境变量配置，在 `设置 -> 系统 -> 系统信息 -> 高级系统设置 -> 环境变量 -> 系统变量` 的 `Path` 值中新增 `C:\Program Files\MySQL\MySQL Server 8.0\bin` 

![](/images/mysql_8.0_path_set.png)

点击保存

## 运行

打开 CMD 命令行窗口，输入以下命令：

![](/images/mysql_8.0_cmd.png)

成功运行

## 如果没有运行，如何检查？

![](/images/mysql_8.0_manager.png)

打开`计算机管理 - 服务`检查`MySQL80`服务是否运行

如果没有运行，点击启动服务即可
