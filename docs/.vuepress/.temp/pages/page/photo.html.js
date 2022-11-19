export const data = {
  "key": "v-1be58564",
  "path": "/page/photo.html",
  "title": "相册功能",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "相册",
      "photo"
    ]
  },
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
      "title": "标签页面配置",
      "slug": "标签页面配置",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1660451769000,
    "contributors": [
      {
        "name": "‘Veh7’",
        "email": "‘925779572@qq.com’",
        "commits": 1
      }
    ]
  }
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
