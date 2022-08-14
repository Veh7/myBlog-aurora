export const data = {
  "key": "v-02171d7d",
  "path": "/home/directory-structure.html",
  "title": "主题目录结构",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "目录结构",
      "主题结构"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "结构",
      "slug": "结构",
      "children": []
    },
    {
      "level": 2,
      "title": "路由",
      "slug": "路由",
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
