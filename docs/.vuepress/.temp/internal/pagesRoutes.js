import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-31071e3e","/config.html",{},["/config","/config.md"]],
  ["v-245bbacd","/how-to-write-article.html",{},["/how-to-write-article","/how-to-write-article.md"]],
  ["v-548f4cfe","/style.html",{},["/style","/style.md"]],
  ["v-79dc7caa","/use.html",{},["/use","/use.md"]],
  ["v-9a7e70ae","/comment/",{},["/comment/index.html","/comment/README.md"]],
  ["v-59338a98","/feature/donate.html",{},["/feature/donate","/feature/donate.md"]],
  ["v-3662fb4e","/feature/feature-config.html",{},["/feature/feature-config","/feature/feature-config.md"]],
  ["v-69b3bfd0","/feature/image.html",{},["/feature/image","/feature/image.md"]],
  ["v-28ac1b0c","/feature/poster.html",{},["/feature/poster","/feature/poster.md"]],
  ["v-9c1c77e2","/feature/recommend.html",{},["/feature/recommend","/feature/recommend.md"]],
  ["v-ec9be4e6","/feature/registercom.html",{},["/feature/registercom","/feature/registercom.md"]],
  ["v-680a8aff","/feature/search.html",{},["/feature/search","/feature/search.md"]],
  ["v-41ed1ae4","/feature/seo.html",{},["/feature/seo","/feature/seo.md"]],
  ["v-118e2c5a","/feature/social.html",{},["/feature/social","/feature/social.md"]],
  ["v-74b652a0","/home/config.html",{},["/home/config","/home/config.md"]],
  ["v-72a9241b","/home/deploy.html",{},["/home/deploy","/home/deploy.md"]],
  ["v-02171d7d","/home/directory-structure.html",{},["/home/directory-structure","/home/directory-structure.md"]],
  ["v-7fc1dad8","/issue/bug.html",{},["/issue/bug","/issue/bug.md"]],
  ["v-4735f054","/issue/CHANGELOG.html",{},["/issue/CHANGELOG","/issue/CHANGELOG.md"]],
  ["v-065bd6dc","/issue/cli-issue.html",{},["/issue/cli-issue","/issue/cli-issue.md"]],
  ["v-f956f2a2","/issue/",{},["/issue/index.html","/issue/README.md"]],
  ["v-29bb5793","/learn/frontmatter.html",{},["/learn/frontmatter","/learn/frontmatter.md"]],
  ["v-a04945b4","/learn/markdown.html",{},["/learn/markdown","/learn/markdown.md"]],
  ["v-659378d3","/page/about.html",{},["/page/about","/page/about.md"]],
  ["v-3350613a","/page/friendlink.html",{},["/page/friendlink","/page/friendlink.md"]],
  ["v-4b5a6b63","/page/page.html",{},["/page/page","/page/page.md"]],
  ["v-1be58564","/page/photo.html",{},["/page/photo","/page/photo.md"]],
  ["v-151af027","/page/",{},["/page/index.html","/page/README.md"]],
  ["v-2d4deab4","/page/tag.html",{},["/page/tag","/page/tag.md"]],
  ["v-2b37b07e","/page/write.html",{},["/page/write","/page/write.md"]],
  ["v-ab2961b0","/readme/",{},["/readme/index.html","/readme/README.md"]],
  ["v-697c85ee","/style/icon.html",{},["/style/icon","/style/icon.md"]],
  ["v-0002d5df","/style/style.html",{},["/style/style","/style/style.md"]],
  ["v-67be2ef0","/plugin/archive/",{},["/plugin/archive/index.html","/plugin/archive/README.md"]],
  ["v-1c447180","/plugin/bubble/",{},["/plugin/bubble/index.html","/plugin/bubble/README.md"]],
  ["v-1d07546a","/plugin/player/",{},["/plugin/player/index.html","/plugin/player/README.md"]],
  ["v-dd480090","/plugin/player/serverUrl.html",{},["/plugin/player/serverUrl","/plugin/player/serverUrl.md"]],
  ["v-53a65b51","/plugin/coze/component.html",{},["/plugin/coze/component","/plugin/coze/component.md"]],
  ["v-4fed5da2","/plugin/coze/config.html",{},["/plugin/coze/config","/plugin/coze/config.md"]],
  ["v-4b326a15","/plugin/coze/",{},["/plugin/coze/index.html","/plugin/coze/README.md"]],
  ["v-631a9d9d","/plugin/coze/style.html",{},["/plugin/coze/style","/plugin/coze/style.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
  ["v-8daa1a0e","/",{},["/index.html"]],
  ["v-74bc627b","/about/",{},["/about/index.html"]],
  ["v-14f724bf","/mood/",{},["/mood/index.html"]],
  ["v-14e6501c","/link/",{},["/link/index.html"]],
  ["v-744d024e","/tag/",{},["/tag/index.html"]],
  ["v-705c21a6","/archive/",{},["/archive/index.html"]],
  ["v-6629f178","/aurora-coze/",{},["/aurora-coze/index.html"]],
  ["v-031dfb13","/register/",{},["/register/index.html"]],
  ["v-e2acc714","/photo/",{},["/photo/index.html"]],
  ["v-4382d077","/next-mood/",{},["/next-mood/index.html"]],
  ["v-3279cf61","/aurora-archive/",{},["/aurora-archive/index.html"]],
  ["v-3c506944","/aurora-music/",{},["/aurora-music/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
