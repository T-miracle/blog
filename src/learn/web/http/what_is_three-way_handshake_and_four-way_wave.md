# 什么是三次握手四次挥手？

## 概念

三次握手和四次挥手是TCP协议中用于建立和断开连接的过程。

## 三次握手

三次握手（`Three-way Handshake`）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包

主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备

三次握手的过程如下：

1. 第一次握手：客户端给服务端发一个 `SYN` 报文，并指明客户端的初始化序列号 `ISN(c)`，此时客户端处于 `SYN_SENT` 状态
2. 第二次握手：服务器收到客户端的 `SYN` 报文之后，会以自己的 `SYN` 报文作为应答，为了确认客户端的 `SYN`，将客户端的 `ISN+1`作为`ACK`的值，此时服务器处于 `SYN_RCVD` 的状态
3. 第三次握手：客户端收到 `SYN` 报文之后，会发送一个 `ACK` 报文，值为服务器的`ISN+1`。此时客户端处于 `ESTABLISHED` 状态。服务器收到 `ACK` 报文之后，也处于 `ESTABLISHED` 状态，此时，双方已建立起了连接

![](/images/Three-way_Handshake.png)

上述每一次握手的作用如下：

1. 第一次握手：客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。
2. 第二次握手：服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务器并不能确认客户端的接收能力是否正常
3. 第三次握手：客户端发包，服务端收到了。 这样服务端就能得出结论：客户端的接收、发送能力正常，服务器自己的发送、接收能力也正常

通过三次握手，就能确定双方的接收和发送能力是正常的。之后就可以正常通信了

### 为什么不是两次握手?

如果是两次握手，发送端可以确定自己发送的信息能对方能收到，也能确定对方发的包自己能收到，但接收端只能确定对方发的包自己能收到 无法确定自己发的包对方能收到

并且两次握手的话, 客户端有可能因为网络阻塞等原因会发送多个请求报文，延时到达的请求又会与服务器建立连接，浪费掉许多服务器的资源

## 四次挥手

`tcp`终止一个连接，需要经过四次挥手

四次挥手的过程如下：

1. 第一次挥手：客户端发送一个 `FIN` 报文，报文中会指定一个序列号。此时客户端处于 `FIN_WAIT1` 状态，停止发送数据，等待服务端的确认
2. 第二次挥手：服务端收到 `FIN` 之后，会发送 `ACK` 报文，且把客户端的序列号值 `+1` 作为 `ACK` 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 `CLOSE_WAIT` 状态
3. 第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 `FIN` 报文，且指定一个序列号。此时服务端处于 `LAST_ACK` 的状态
4. 第四次挥手：客户端收到 `FIN` 之后，一样发送一个 `ACK` 报文作为应答，且把服务端的序列号值 `+1` 作为自己 `ACK` 报文的序列号值，此时客户端处于 `TIME_WAIT` 状态。需要过一阵子以确保服务端收到自己的 `ACK` 报文之后才会进入 `CLOSED` 状态，服务端收到 `ACK` 报文之后，就处于关闭连接了，处于 `CLOSED` 状态

![](/images/four-way_wave.png)

上述每一次挥手的作用如下：

1. 第一次挥手：表示客户端不再发送数据
2. 第二次挥手：表示已经收到了客户端的请求，并准备关闭连接
3. 第三次挥手：表示服务器端不再发送数据
4. 第四次挥手：表示已经收到了服务器端的请求，并准备关闭连接

通过四次挥手，客户端和服务器端结束了数据传输，并且释放了连接。

需要注意的是，断开连接是一个非常重要的过程，如果不正确地实现，可能会导致资源泄露或者服务不可用的情况。

因此，在编写网络应用时，必须正确地实现三次握手和四次挥手过程。

## `SYN`和`ACK`报文

`SYN` 和 `ACK` 是TCP协议中用于建立连接的标志。

`SYN` 是 `Synchronize` 的缩写，表示同步序列号。
在TCP连接建立的过程中，客户端向服务器端发送`SYN`标志的数据包，告诉服务器端自己准备好发送数据了。
`SYN`包中包含一个序列号，用于标识客户端即将发送的数据包的起始位置。

`ACK` 是 `Acknowledge` 的缩写，表示确认。
当服务器端收到客户端发送的SYN包时，会回复一个`SYN+ACK`包，其中`ACK`标志表示确认收到了客户端的请求，同时`SYN`标志表示服务器端也准备好发送数据了。
`SYN+ACK`包中也包含一个序列号，用于标识服务器端即将发送的数据包的起始位置。

通过`SYN`和`ACK`标志，客户端和服务器端可以互相确认对方的存在，并准备好进行数据传输。
需要注意的是，在TCP连接建立的过程中，客户端和服务器端都会向对方发送SYN包，因此这个过程中会有两个`SYN`包和一个`SYN+ACK`包。
这也是为什么TCP连接建立的过程被称为“三次握手”的原因。

## `FIN`报文是什么

`FIN` 报文是TCP协议中用于关闭连接的标志。
当一方想要关闭连接时，会向对方发送一个`FIN`报文，表示自己不再发送数据了。

在TCP连接中，一般是通过四次挥手来关闭连接。
当一方想要关闭连接时，会向对方发送一个`FIN`报文，表示自己已经发送完了所有数据，不再发送数据了。
对方收到这个`FIN`报文后，会回复一个`ACK`报文，表示已经收到了关闭请求，但是自己还可能有数据要发送。
当对方发送完所有数据后，会向发起关闭请求的一方再发送一个`FIN`报文，表示自己也不再发送数据了。
发起关闭请求的一方收到这个`FIN`报文后，也会回复一个`ACK`报文，表示已经收到了对方的关闭请求，连接就彻底关闭了。

需要注意的是，在TCP连接关闭的过程中，一方发送的`FIN`报文可能会包含一些未确认的数据。
这些数据可能会在对方回复`ACK`报文之前发送出去，因此对方也需要在收到`FIN`报文后继续发送数据，直到自己发送的所有数据都得到了确认。
这也是为什么TCP连接关闭需要经过四次挥手的原因。

<vPageTips :links="[
        {text: '面试官：说说TCP为什么需要三次握手和四次挥手？', link: 'https://vue3js.cn/interview/http/handshakes_waves.html'}
    ]"
/>