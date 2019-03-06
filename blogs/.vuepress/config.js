const sidebar = require('./sidebar')

console.info(sidebar)
module.exports = {
  base: "/blog/",
  title: "Mr.fan's blog",
  head: [['link', { rel: 'icon', href: '/log.png' }]],
  description: '我的个人博客页',
  themeConfig: {
    sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: 'vue', link: '/vue/' }, 
      { text: '算法', link: '/algorithm/' }, 
      { text: '程序之道', link: '/think/' }, 
      { text: '前端', link: '/javascript/' },
      { text:"typescrit",link:'/typescript/'}
    ],
    sidebar
    // sidebar: {
    //   '/vue/': ['', 'component', 'codeformatter'],
    //   '/algorithm/': ['', '1'],
    //   '/think/': ['', 'how-to-focus-on', 'get-to-kown-cros'],
    //   '/typescript/':['','dev-gulp-env']


    // }

    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    // date_format: 'yyyy-MM-dd'
  }
}
