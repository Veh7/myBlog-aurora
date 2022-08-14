export const data = {
  "key": "v-2d4deab4",
  "path": "/page/tag.html",
  "title": "归档",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "标签",
      "slug": "标签",
      "children": []
    },
    {
      "level": 2,
      "title": "类别",
      "slug": "类别",
      "children": [
        {
          "level": 3,
          "title": "排除某个类别",
          "slug": "排除某个类别",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "分割符",
      "slug": "分割符",
      "children": []
    },
    {
      "level": 2,
      "title": "文章页面配置",
      "slug": "文章页面配置",
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
