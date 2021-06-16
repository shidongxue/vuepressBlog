# Node 学习笔记

## Node 基础知识

* 浏览器中的JavaScript是没有文件操做的能力的 但是在NodeJs中的JavaScript具有文件操作能力

* fs是file-system的简写，就是文件系统的意思

* 在Node中如果想要进行文件操作，就必须引入fs这个核心模块， 在fs这个核心模块中，就提供了所有的文件操作相关的API 

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
* http这个模快的职责就是帮你创建编写服务器的 

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

 // request请求事件处理函数，需要接收两个参数：
 	// Request请求对象
 		// 请求对象可以用来获取看客户端的一些请求参数，例如请求路径
 	// Resonse响应对象
 		// 响应对象可以用来用给客户端发送响应消息
 server.on('request',function(request,response){
 	var url = req.url
    if(url === '/') {
        fs.readFile('C:/hainan/app/www/index.html',function(err,data) {
            if (err) {
                // return 有两个作用
                // 1、返回结果
                // 2、阻止代码继续往后执行
                return res.end('not font page')
            } 
            res.end(data)
        })
    } else {
        res.end(' not font page')
    }
 })
 // 4、绑定端口号，启动服务器
 server.listen(3000,function(){
 	console.log('服务器启动成功了，可以通过http://172.0.0.1:3000,可以进行访问')
 })


```
### art-template模板引擎
* art-template不仅可以在浏览器中使用，也可以在node中使用
#### NodeJs中使用art-template模板引擎
```js
// 安装

// npm install art-template
// 该命令在那执行就会把包下载到哪里，默认会下载到node_modules目录中、
// node_modules 不要改 也不支持

// 模板引擎 最早就是诞生于服务领域，后来才应用到前端

// 1、安装 npm install art-template
// 2、在需要使用的文件模板中加载 art-tempalte
// 只需要require方法加载就行了 require('art-template')
// 参数中的art-tempalte 就是你下载包的名字
// 也是就是你install的名字是什么,则你的require中的就是什么
// 3、查文档 使用模板引擎的api

var fs = require('fs')

var  template = require('art-template')

fs.readFile('./tpl.html',function(err,data) {
    if (err) {
        return console.log('读取失败')
    }

// 默认读取到的data是二进制
// 二而模板引擎render方法需要接收的是字符串
// 所以我们在这里需要把data 二进制数据转为字符串 才可以给模板字符串使用
    var ret = template.render(data.toString(),{
        name:'Jack',
        age: '18',
        province: '吉林',
        hobbies: ['羽毛球','乒乓球']
    })
    console.log(ret)
})

```
### 客户端渲染

* 1、收到服务端响应的字符串
* 2、从上倒下解析 ，在解析过程中,如果发现ajax请求,则再发起新的请求
* 3、发请求
* 4、拿到ajax响应的数据
* 5、模板引擎渲染


* 客户端到服务端正常会发送两次请求
*    第一次请求拿到的是页面
*    第二次拿到的是动数据

### 服务端渲染

* 页面加数据

* 服务端渲染 就是一步成功
* 客户端渲染不利于 SEO 搜索引擎优化
* 服务端渲染是可以被爬虫抓取到的,客户端异步渲染是很难被爬虫抓到的
* 所以你会发现 真正的网站既不会是纯异步也不是纯服务端渲染出来的
* 而是两者的结合
* 例如京东的商品列表就是采用服务端渲染,目的是为了ESO搜索引擎优化
* 而他的产品评价列表为了用户体验,而且不需要ESO优化吗,所以采用的是客户端渲染

### 模块原理

* 在Node中，每一个模块都有一个自己的module对象，该module对象中，有一个成员叫：exports 也是一个对象

* 我们发现，每次导出接口成员的时候都通过modules

```js
var module = {
  exports:{
        foo: 'bar',
        add:function(){}
  }
}
 // 2、也就是说该模块中还有这么一句代码
 // var exports = module.exports

 module.exports.foo = 'bar'
 module.exports.add = function () {
  return x + y
 }

// 1、两者一致，那就说明，我们可以使用任意一方来导出
// console.log(exports == module.exports)

exports.foo = 'bar'
exports.add = function () {
 return x + y
}

// 给exports赋值会断开，module、exports之间的引用
// 同理给module.exports 重新赋值也会断开
module.exports = 'hello'
exports.foo = 'foo' //没用  

// 谁来require我谁就得到module.exports
// 默认在代码的最后一句：
// 一定记住，最后return的是 module.exports
// 暴露的不是exports
// 所以你给 exports 重新重新赋值不管用
// return module.exports 

```
#### exports和module.exports的区别？

*每个模块中都有一个module对象
module对象中都有一个exports对象
我们可以把需要的导出的成员都挂再到module.exports接口对象中
也就是：'module.exports.xxx =xxx'
但是每次都‘module.exports.xxx = xxx' 很麻烦，点太多了
所以Node为了你方便，同时在某一个模块中都提供了一个成员叫 ’exports‘
'expports == module.exports' 结果为true
所以对于:'module.exports.xxx= xxx' 的方式完全可以 'exports=xxx' 
当一个模块需要打导出单个成员的时候，这个时候必须使用：'module.exports = xxxx' 的方式
不要使用 ’exports ='xxx'不管用
因为每一个模块最终向外 'return' 的是 'module.exports'
而 'export' 只是 ’module.exports的一个引用
所以即使你为 ‘exports= 'xxxx' 重新赋值，也不会影响'module.exports'
但是有一种赋值方式比较特殊：exports = module.exports 这个用来重新建立引用关系的*
### 标识分析

// 如果是非路径形式的模块标识

#### 路径形式的模块

*  ./ 当前目录不可以省略
* ../ 上一级目录不可以省略
*  /xxx 几乎不用
* d:/a/foo.js  几乎不用
* 首位的 / 在这里表示的是当前文件模块所属磁盘根路径
* .js文件
* require('./foo.js')


#### 核心模块（本质也是文件）
* 核心模块文件已经被编译到二进制文件中了，我们只需要按照名字来加载就可以了
* require('fs')
* require('http')

#### 第三方模块

* 凡是第三方你模块都必须通过npm 来下载
* 使用的时候可以通过 require（'包名'）的方式来进行加载才可以使用
* 不可能有任何一个第三方包和核心模块的名字是一样的
* 既不是核心模块，也不是路径形式的模块
* 先找到当前文件所处目录中的node_modules目录
* node_modules/art-template
* node_modules/art-template/package.json文件
* node_modules/art-template/package.json文件中的main属性
* main属性中就记录了art-tamplate的入口文件
* 然后加载使用这个第三方文件
* 实际上最终加载的还是文件

* 如果package.json文件不存在或者mian指定的人口模块也是没有
* 则node会自动找到该目录下的index.js
* 也就是说index.js会作为一个默认的备选项

* 如果以上所有的任意一个条件都不成立，则会进入上一级目录中的node_modules目录
* 如果上一级目录，上级目录.....直到根目录，就会报错

* 注意我们的一个项目有且只有一个node_modules,放在项目根目录中，这样的话项目中就会所有的子目录中的代码都可以加载到第三包
var template = require('art-template')
require('a')

#### 模块查找机制
* 优先冲缓存加载
* 核心模块
* 路径形式的文件模块
* 第三方模块

* 推荐书籍《深入浅出Node.js》中的模块系统章节

### 第三方命令行工具 nodemon

* nodemon 是一个基于NodeJs 开发的已发个第三方命令行工具，哦我们使用需要独立安装、

npm install --global nodemon

node app.js

nodemon app.js

只要是通过nodemon启动的服务则会监视你的文件变化，当文件变化的时候，会自动帮你启动服务器 
### 知识点
* 301永久重定向 浏览器会记住
*  直接去跳到 b 了
*  302临时重定向
*   a.com b.com
*   a.com 还会请求a
*   a 告诉浏览器你去b


* 所有的文件操作api都是异步的
* 文件操作中的路径可以省略 
```js
fs.readFile('data/a.txt',function(err,data) {
    if(err) {
        console.log('读取失败哦')
    }
    else {
        console.log(data)
    }
})

```

* 在模快加载中，相对路径中的 ./不能省略
* require('data/foo.js')  报错
* require('./data/foo.js')  
* 在文件操作的相对路径中、
*  ./data/a.txt 相当于当前目录
* data/a.txt 先对于当前目录
* /data/a.txt 绝对路径 当前文件模块所处磁盘根目录
* c:/xx/xx 绝对路径
