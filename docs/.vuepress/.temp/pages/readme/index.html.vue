<template><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> Introduce</h2>
<p><a href="http://aurora.xcye.xyz/" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a>A vuepress-based animation blog theme, simple, beautiful, multi-color, multiple custom functions, providing article poster sharing, talk, photo album, comment and other features</p>
<blockquote>
<p>一款基于vuepress的动漫类博客主题，简洁，漂亮，多色彩，多种自定义功能，提供文章海报分享，说说，相册，评论，侧边栏，自动生成文章侧边栏等特色功能</p>
</blockquote>
<p><a href="https://www.npmjs.com/package/vuepress-theme-aurora"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-theme-aurora"></a><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="npm" originSrc="https://img.shields.io/npm/dw/vuepress-theme-aurora" data="aurora"><a href="https://github.com/qsyyke/vuepress-theme-aurora"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/qsyyke/vuepress-theme-aurora?style=social"></a></p>
<h2 id="feature" tabindex="-1"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> Feature</h2>
<ul>
<li><strong>简洁美观</strong> 细节精致，界面简约漂亮，毛玻璃效果</li>
<li><strong>开箱即用</strong> 下载便可直接使用</li>
<li><strong><code>自动生成文章侧边栏</code></strong> 自动为文章所在目录下的所有md文件生成侧边栏文章目录 ，不用在为文章侧边栏而烦恼</li>
<li><strong>图片懒加载</strong> 为文章所有图片，首页文章列表加入懒加载效果，支持自定义占位符，大大提升页面加载速度</li>
<li><strong>海报分享</strong> 自动为文章生成海报分享功能，支持自定义海报样式</li>
<li><strong>SEO</strong> 自定义keyword，description或者主题自动生成keyword，description，提升搜索引擎收录</li>
<li><strong>多种功能</strong> 文章海报分享，赞赏，文章分类，友情链接，心情说说，相册，评论，图片懒加载，自动生成文章目录...</li>
<li><strong>高度自定义</strong> 提供多个组件和主题配置文件进行自定义，除了部分页面布局文字之外，页面都是可定制的</li>
<li><code>自定义页脚</code> 支持自定义页脚</li>
<li><strong>文章置顶</strong> 首页文章置顶功能</li>
<li><strong>移除默认主题的侧边栏</strong> 移除默认主题侧边栏，新侧边栏更加美观，并且在侧边栏上加入多个模块，如文章信息，最新文章，友情链接等等</li>
<li><strong>社交图标</strong> 全部采用阿里图标，所有图标都是经过精心挑选，并且图标修改非常简单</li>
<li><strong>阅读体验</strong> 切换背景，修改字体，颜色，毛玻璃效果，圆角，透明度控制</li>
<li><strong>动漫背景</strong> 所有页面背景都使用动漫图片，同样也可以使用自己的背景图</li>
<li><strong>说说</strong> 每天一个感悟，随时发布，美好的一天从发布说说开始...</li>
<li><strong>图片</strong> 支持图片动画展示，每日拍一张照，记录生活的美好</li>
<li><strong>搜索</strong> 文章搜索功能</li>
<li><strong>打赏</strong> 不一样的打赏功能，扫码，在线支付...</li>
<li><strong>随机一言打字机</strong> 首页或者其他位置，通过打字机效果展示随机一言或者自定义语句</li>
<li><strong>评论</strong> 使用Waline无后端评论框架，让你在使用vuepress的同时，也能为博客加入评论功能</li>
<li><strong>自适应</strong> 为手机端和PC端都做了适配</li>
<li><strong>vuepress</strong> 依赖于vuepress，一个静态博客框架，支持几乎所有的vuepress特性</li>
</ul>
<p><strong>....</strong></p>
<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2>
<h3 id="node安装" tabindex="-1"><a class="header-anchor" href="#node安装" aria-hidden="true">#</a> Node安装</h3>
<p>运行环境需要依赖<code>node</code>，如果你未安装<code>node</code>，请先安装node，我安装的版本为<code>v14.17.3</code></p>
<blockquote>
<p>安装node可查看<a href="https://aurora.xcye.xyz/node.html" target="_blank" rel="noopener noreferrer">Node 安装<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="安装cli" tabindex="-1"><a class="header-anchor" href="#安装cli" aria-hidden="true">#</a> 安装CLI</h3>
<ul>
<li>
<p>npm</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vuepress-theme-cli -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>yarn</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global vuepress-theme-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="创建博客" tabindex="-1"><a class="header-anchor" href="#创建博客" aria-hidden="true">#</a> 创建博客</h3>
<p>待脚手架cli安装成功之后，进入cmd中</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127104249135" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127104249135.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>在命令行处输入下面命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>aurora blog-demo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p><code>blog-demo</code>是你的博客文件件名称，会自动创建以此名字命名的文件夹</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果提示</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">'aurora'</span> 不是内部或外部命令，也不是可运行的程序
或批处理文件。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>请看<a href="https://aurora.xcye.xyz/issue/cli-issue.md" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></p>
</div>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127104417748" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127104417748.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<blockquote>
<p>这个过程大概几秒，取决于你的网速，待安装成功之后，你会发现在当前目录下，多了一个目录</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127104750379" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127104750379.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<blockquote>
<p>然后进入此<code>demo-blog</code>目录中，使用命令<code>npm install</code>或者<code>yarn install</code>安装所需的依赖，待依赖安装成功之后，使用<code>npm run dev</code>或者<code>yarn dev</code>启动博客</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127104833140" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127104833140.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<blockquote>
<p>运行成功之后，会出现一个地址，你只需要在浏览器中，输入这个地址，就可以看到下面的页面</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211010232918219" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211010232918219.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>恭喜你，到这里，你已经安装成功了，接下来便可以尽情书写博客和修改配置(<code>上图展示出来的效果是默认配置，你可以更改</code>)</p>
<p>为了更好的对主题进行配置，你可以直接复制我GitHub中的<a href="https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/docs/.vuepress/config-copy.js" target="_blank">config.js</a>文件</p>
<p>推荐阅读</p>
<ul>
<li><a href="https://aurora.xcye.xyz/home/config.md" target="_blank" rel="noopener noreferrer">主题所有配置<ExternalLinkIcon/></a></li>
<li><a href="https://aurora.xcye.xyz/issue/" target="_blank" rel="noopener noreferrer">使用必读<ExternalLinkIcon/></a></li>
<li><a href="https://aurora.xcye.xyz/issue/CHANGELOG.md" target="_blank" rel="noopener noreferrer">主题更新日志<ExternalLinkIcon/></a></li>
</ul>
</div>
<h2 id="联系我" tabindex="-1"><a class="header-anchor" href="#联系我" aria-hidden="true">#</a> 联系我</h2>
<p>如果你在使用该主题的过程中，有任何的问题，都可以通过以下方式联系我</p>
<table>
<thead>
<tr>
<th>QQ</th>
<th>主题交流群</th>
<th>微信</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1" style="zoom:33%;" /></td>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1" alt="image-20211024233827133" style="zoom:33%;" /></td>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1" alt="image-20211024233735110" style="zoom: 39%;" /></td>
</tr>
</tbody>
</table>
<h2 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h2>
<p>更多的体验效果，可以查看<a href="https://aurora.xcye.xyz/">演示站点</a></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211010162940583" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211010162940583.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111090833031" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111090833031.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211010163133623" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211010163133623.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211010163256145" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211010163256145.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/article.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/about.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/comment-theme.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/link.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/mood.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/phoone.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/photo-theme.jpg" data="aurora">
<img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://ooszy.cco.vin/img/theme/tag.jpg" data="aurora"></p>
<p>或者我的<a target="_blank" href="https://blog.xcye.xyz">博客站点</a></p>
<h2 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h2>
<p><a href="https://aurora.xcye.xyz/homeconfig.html" target="_blank" rel="noopener noreferrer">首页<ExternalLinkIcon/></a></p>
</template>
