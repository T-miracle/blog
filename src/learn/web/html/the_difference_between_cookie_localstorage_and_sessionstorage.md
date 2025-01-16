---
lastUpdated: 2023/9/17 02:12
---

# cookie、localStorage、sessionStorage的区别

`Cookie`、`localStorage`和`sessionStorage`都是用于在浏览器中存储数据的Web存储方案，但它们在实现机制、数据存储范围、数据有效期等方面存在一些不同，下面是它们的具体区别：

## 实现机制

`Cookie`是在服务器端设置的，浏览器会将 `Cookie` 保存在客户端，每次请求时会将 `Cookie` 发送给服务器端；
`localStorage` 和 `sessionStorage` 则是HTML 5引入的`Web Storage API`，是通过 `JavaScript` 在客户端直接操作的。

## 数据存储范围

`Cookie`、`localStorage` 和 `sessionStorage` 的数据存储范围不同。

`Cookie` 的数据存储在客户端浏览器的 `Cookie` 文件中，大小有限制，每个域名下 Cookie 的大小一般不能超过4KB；

`localStorage` 和 `sessionStorage` 的数据则保存在浏览器本地缓存中，可以存储更大的数据量。

## 数据有效期

`Cookie` 可以设置过期时间，当超过该时间后，浏览器会自动删除该 `Cookie`；

`localStorage` 存储的数据是永久性的，除非手动清除；

而 `sessionStorage` 存储的数据只在当前会话期间有效，当用户关闭浏览器标签页或浏览器时，`sessionStorage` 中的数据会被自动清除。

## 数据与服务器的通信

`Cookie` 会随着每次HTTP请求自动发送到服务器端，因此可以在服务器端获取到 `Cookie` 的内容；

`localStorage` 和 `sessionStorage` 的数据不会自动发送到服务器端，只能在客户端使用JavaScript读取和操作。

## 总结

总之，`Cookie`、`localStorage` 和 `sessionStorage` 都有自己的特点和适用场景，开发者需要根据实际需求选择适合的存储方案。

例如：

- 如果需要在不同的页面之间共享数据，并且数据不需要超过4KB，那么可以使用 `Cookie`；
- 如果需要在客户端保存一些永久性数据，那么可以使用 `localStorage`；
- 如果需要在会话期间保存一些临时数据，可以使用 `sessionStorage`。
