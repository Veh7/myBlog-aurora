export const data = {
  "key": "v-72a9241b",
  "path": "/home/deploy.html",
  "title": "部署",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "部署",
      "deploy",
      "Github Page",
      "自定义域名"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "部署到自己的服务器",
      "slug": "部署到自己的服务器",
      "children": []
    },
    {
      "level": 2,
      "title": "GitHub Pages",
      "slug": "github-pages",
      "children": [
        {
          "level": 3,
          "title": "deploy.sh",
          "slug": "deploy-sh",
          "children": []
        },
        {
          "level": 3,
          "title": "部署到自定义域名",
          "slug": "部署到自定义域名",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Github Actions完成自动部署",
      "slug": "github-actions完成自动部署",
      "children": [
        {
          "level": 3,
          "title": "获取token",
          "slug": "获取token",
          "children": []
        },
        {
          "level": 3,
          "title": "上传到github",
          "slug": "上传到github",
          "children": []
        },
        {
          "level": 3,
          "title": "设置Actions secrets",
          "slug": "设置actions-secrets",
          "children": []
        }
      ]
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
