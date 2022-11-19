import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/DevAbout/Projects/blogGitClone/myBlog-aurora/node_modules/vuepress-theme-aurora/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/DevAbout/Projects/blogGitClone/myBlog-aurora/node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue")),
}
