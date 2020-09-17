module.exports = {
  title: 'imgzoom-li',
  description: '一个测试vuepress的演示',
  base:'/VPDemo/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'imgzoom-li',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US',
      title: 'imgzoom-li',
      description: 'Vue-powered Static Site Generator'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '配置', link: '/reference/'}       
        ],
        sidebar:{
          '/guide/':[
            {
              title: '指南',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 侧边栏深度 默认值是 1
              initialOpenGroupIndex:-1,
              children: [
                ['/guide/','介绍'],
                ['/guide/page1','快速上手'],
              ]
            },
            {
              title: '深入',
              sidebarDepth: 1,
              collapsable: false,
              children: [
                {
                  title: '提示',
                  path: '/guide/page2'
                },
              ],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ],
          '/reference/':[
            {
              title: '配置',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
             // displayAllHeaders: true,// 展开所有菜单
              collapsable: false, //展开所有组
              initialOpenGroupIndex:-1,
              children: [
                ['/reference/','介绍'],
                ['/reference/page1','入门']
              ]
            },
          ]
        },
        lastUpdated: '最后更新时间',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/en/'},
          { text: 'Config Reference', link: '/en/reference/'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
      },
    }
  },
}