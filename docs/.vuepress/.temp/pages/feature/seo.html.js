export const data = {
  "key": "v-41ed1ae4",
  "path": "/feature/seo.html",
  "title": "SEO",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "首页",
      "slug": "首页",
      "children": []
    },
    {
      "level": 2,
      "title": "文章页面",
      "slug": "文章页面",
      "children": []
    },
    {
      "level": 2,
      "title": "社交信息配置",
      "slug": "社交信息配置",
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
