module.exports = {
  title: '前端小白',
  description: '个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
     
      {text: '百度', link: 'https://baidu.com'}      
    ],
    // sidebar: {
    //   '/css/': [{
    //       title: 'CSS样式',
    //       collapsable: true, 
    //       children: [
    //         { title: '布局', path:'/css/布局'},
    //         { title: '相对定位与绝对定位', path:'/css/相对定位与绝对定位'},
    //       ]
    //   }],
    //   '/html/': [{
    //       title: 'HTML',
    //       collapsable: false, 
    //       children: [
    //         { title: 'form表单提交', path:'/html/form表单提交'},
    //       ]
    //   }],
    //   '/js/': [{
    //       title: 'javascript',
    //       collapsable: false, 
    //       children: [
    //         { title: 'items01', path:'/js/ECMA/作用域'},
    //       ]
    //   }],
    // },
    sidebar:[
      // CSS样式
      {
        title: 'CSS样式',
        collapsable: true, 
        children: [
          { title: '布局', path:'/css/布局'},
          { title: '相对定位与绝对定位', path:'/css/相对定位与绝对定位'},
        ]
      },
      // HTML
      {
        title: 'HTML',
        collapsable: true, 
         children: [
          { title: 'form表单提交', path:'/html/form表单提交'},
        ]
      },
      // javascript
      {
        title: 'javascript',
        collapsable: true, 
        sidebarDepth: 2,
        children: [
          {
            title: 'CEMA',
            collapsable: true,
            children: [
              { title: '作用域', path:'/js/ECMA/作用域'},
              { title: '原型与原型链', path:'/js/ECMA/原型与原型链'},
              { title: '数组方法', path:'/js/ECMA/数组方法'},
              { title: '深拷贝与浅拷贝', path:'/js/ECMA/深拷贝与浅拷贝'},
              { title: '闭包', path:'/js/ECMA/闭包'},
            ]
          },
          {
            title: 'ES6',
            collapsable: true,
            children: [
              { title: '扩展运算符', path:'/js/ES6/扩展运算符'},
              { title: '原型与原型链', path:'/js/ES6/数组方法'},
              { title: '结构赋值', path:'/js/ES6/结构赋值'},
            ]
          }
        ]
      },
      // NodeJs
      {
        title: 'NodeJs',
        collapsable: true,
        children: [
          {title:'NodeJs基本知识',path: '/NodeJs/NodeJs基本知识'}
        ]
      },
      // Vue
      {
        title: 'Vue',
        collapsable: true,
        children: [
          {title:'Router',path: '/Vue/Router'},
          {title:'Vuex',path: '/Vue/Vuex'},
          {title:'webpack',path: '/Vue/webpack'},
          {title:'生命周期',path: '/Vue/生命周期'},
        ]
      },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    displayAllHeaders: true,
  }
};