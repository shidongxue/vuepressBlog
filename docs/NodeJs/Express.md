# Express学习 [Express学习 ](https://www.expressjs.com.cn/)


```js
var express = require('express')
// 1、创建 app
var app = express()
// express静态服务

// 当以 /public/ 开头的时候 ，去 ./public/目录中查找对应的资源
// app.use('/public/',express.static('./public/'))


// 当省略第一个参数的时候，则可以通过省略 /public的方式 
//来访问  直接写 文件就行
// app.use(express.static('./public/'))

//  /a/ 替换  /public/  起别名  必须是/public/目录里的文件
app.use('/a/',express.static('./public/'))

app.get('/',function(req,res){
	res.send('hello express,哈哈哈n你好呀！ nodemon')
})


app.listen(4000,function(){
	console.log('express app is running.....')
})


```
