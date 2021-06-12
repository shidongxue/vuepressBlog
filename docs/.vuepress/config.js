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
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: {
      '/css/': [{
          title: 'CSS样式',
          collapsable: true, 
          children: [
            { title: '布局', path:'/css/布局'},
            { title: '相对定位与绝对定位', path:'/css/相对定位与绝对定位'},
          ]
      }],
      '/html/': [{
          title: 'HTML',
          collapsable: false, 
          children: [
            { title: 'form表单提交', path:'/html/form表单提交'},
          ]
      }],
      '/js/': [{
          title: 'javascript',
          collapsable: false, 
          children: [
            { title: 'items01', path:'/js/ECMA/作用域'},
          ]
      }],
    },
    sidebarDepth: 2, // 侧边栏显示2级
    displayAllHeaders: true,
  }
};