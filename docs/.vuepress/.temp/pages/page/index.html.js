export const data = {
  "key": "v-151af027",
  "path": "/page/",
  "title": "页面配置",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "页面配置",
      "关于页面",
      "广告",
      "友情链接",
      "文章",
      "标签",
      "归档",
      "相册"
    ]
  },
  "excerpt": "",
  "headers": [],
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
