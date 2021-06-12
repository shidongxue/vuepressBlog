# Node 学习笔记

## Node 基础知识

* 浏览器中的JavaScript是没有文件操做的能力的 但是在NodeJs中的JavaScript具有文件操作能力*


* fs是file-system的简写，就是文件系统的意思*

* 在Node中如果想要进行文件操作，就必须引入fs这个核心模块， 在fs这个核心模块中，就提供了所有的文件操作相关的API *

### 核心模块（fs）

```js

// 使用require方法加载fs核心模块
var fs  = require('fs')
// 读取文件
fs.readFile('./hello.txt',function(err,data){
	console.log(data.toString())
	// 文件中存储的其实都是二进制
	// 可以通过toString()方法转为我们能认识的字符
})
// 写文件
fs.writeFile('./hello.txt','你好好我给你显示文件写入操作',function(err,data){
	console.log('文件读写成功')
})
```

### 核心的模块(http) 
* http这个模快的职责就是帮你创建编写服务器的 *

```js
// 1、加载HTTP核心模块
 var http = require('http')

 // 使用一个http.cerateServer()方法创建一个web服务器
 // 返回一个server实例
 var server= http.createServer()

 // 服务器要干什么
 // 提供服务 对数据的服务
 // 发请求
 // 接收请求
 // 处理请求
 // 给个反馈（发送响应）
 // 注册request请求事件
 // 当客户端发送请求过来，就会自懂触发服务器端的request请求事件，然后执行第二个参数
 server.on('request',function(){
 	console.log('收到客户端请求了')
 })
 // 4、绑定端口号，启动服务器
 server.listen(3000,function(){
 	console.log('服务器启动成功了，可以通过http://172.0.0.1:3000,可以进行访问')
 })


```