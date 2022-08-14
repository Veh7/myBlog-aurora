export const data = {
  "key": "v-9c1c77e2",
  "path": "/feature/recommend.html",
  "title": "文章推荐",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": []
    },
    {
      "level": 2,
      "title": "组件代码",
      "slug": "组件代码",
      "children": [
        {
          "level": 3,
          "title": "props",
          "slug": "props",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "搜索功能配置",
      "slug": "搜索功能配置",
      "children": []
    }
  ],
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
