# 异步API

* 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取

* 回调函数：获取异步操作的结果

```js
function f(callback){
	// calllback = function(data) {
		// console.log()
	// }
	setTimeout(function(){
		var data='123'
		callback(data)
	},1000)
}

f(function(data) {
	console.log(data)
} )

// 想要打印 data
```
# Promise


```js
var fs = require('fs')
// 在EcmaScript 6中新增了一个API Promise

//Promise是一个构造容器

// 创建一个Promise
// 1、给别人一个承诺
	// promise 容器一旦创建，就会执行里面的函数
var p1 = new Promise(function(resolve,reject){
	fs.readFile('../data/a.txt','utf8',function(err,data){
		if(err) {
			// 失败了 承诺容器中的任务失败了
			// console.log(err)
			// 把容器的pending状态改为失败reject
			// 调用reject方法实际上就是then方法的第二个参数
			reject(err)
		} else {
			// 承诺容器中的任务成功了
			// console.log(data)
			// 把容器的pending状态改为成功resolve
			// 也就是说这里调用的resolve方法实际上就是then方法传递的那个function
			resolve(data)
		}
	})
})
var p2 = new Promise(function(resolve,reject){
	fs.readFile('../data/b.txt','utf8',function(err,data){
		if(err) {
			// 失败了 承诺容器中的任务失败了
			// console.log(err)
			// 把容器的pending状态改为失败reject
			// 调用reject方法实际上就是then方法的第二个参数
			reject(err)
		} else {
			// 承诺容器中的任务成功了
			// console.log(data)
			// 把容器的pending状态改为成功resolve
			// 也就是说这里调用的resolve方法实际上就是then方法传递的那个function
			resolve(data)
		}
	})
})
var p3 = new Promise(function(resolve,reject){
	fs.readFile('../data/c.txt','utf8',function(err,data){
		if(err) {
			// 失败了 承诺容器中的任务失败了
			// console.log(err)
			// 把容器的pending状态改为失败reject
			// 调用reject方法实际上就是then方法的第二个参数
			reject(err)
		} else {
			// 承诺容器中的任务成功了
			// console.log(data)
			// 把容器的pending状态改为成功resolve
			// 也就是说这里调用的resolve方法实际上就是then方法传递的那个function
			resolve(data)
		}
	})
})

// p1就是那个承诺

// 当p1成功了 然后（then）做指定的操作
// then方法接收的function就是容器中的resolve函数

p1.
	then(function(data){
		console.log(data)
		// p1读取成功的时候
		// 当前函数中return的结果就可以在后面的then中function接收到
		// 当你return 啥 后面接收的就是什么
		// 上面那些return的数据没什么卵用
		// 真正有用的是：我们可以return一个promise对象
		// 当return一个promise对象的时候，后续then中的方法的第一个参数会作为p2的resolve
		return p2
	},function(err) {
		console.log('读取文件失败了！！！')
	})
	.then(function() {
		console.log(data)
		return p3
	})
	.then(function() {
		console.log(data)
	})

```