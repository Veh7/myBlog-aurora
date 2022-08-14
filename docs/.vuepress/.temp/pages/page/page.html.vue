<template><h1 id="文章配置" tabindex="-1"><a class="header-anchor" href="#文章配置" aria-hidden="true">#</a> 文章配置</h1>
<h2 id="侧标栏" tabindex="-1"><a class="header-anchor" href="#侧标栏" aria-hidden="true">#</a> 侧标栏</h2>
<p>侧边栏是自动生成的，你可以更改自动生成的规则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件</span>
<span class="token literal-property property">sidebarCatalogLevel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2>
<p>图片懒加载有默认值，但是你也可以自己指定</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//文章懒加载图片 仅限文章，首页文章占位图片并不是这个</span>
        <span class="token literal-property property">lazyLoadingImg</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/ljz.gif"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="文章推荐" tabindex="-1"><a class="header-anchor" href="#文章推荐" aria-hidden="true">#</a> 文章推荐</h2>
<p>文章推荐设置可以查看</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//文章底部最大推荐文章数 默认值为30</span>
<span class="token literal-property property">recommendPageLength</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>

<span class="token comment">//推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`</span>
<span class="token literal-property property">recommendNoTitle</span><span class="token operator">:</span> <span class="token string">"`╮(￣▽￣)╭`"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="edit" tabindex="-1"><a class="header-anchor" href="#edit" aria-hidden="true">#</a> edit</h2>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#editlink">点击</a>查看vuepress的editlink设置</p>
<h2 id="最后更新时间" tabindex="-1"><a class="header-anchor" href="#最后更新时间" aria-hidden="true">#</a> 最后更新时间</h2>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#lastupdated">点击</a>查看vuepress的lastupdated设置</p>
<h2 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h2>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#contributors">点击</a>查看vuepress的contributors设置</p>
<h2 id="上一页-下一页" tabindex="-1"><a class="header-anchor" href="#上一页-下一页" aria-hidden="true">#</a> 上一页，下一页</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021085208081" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021085208081.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>上一页，下一页会自动获取，并不能在<code>frontmatter</code>中，指定下一页，上一页，往后版本会增加</p>
<h2 id="赞赏功能" tabindex="-1"><a class="header-anchor" href="#赞赏功能" aria-hidden="true">#</a> 赞赏功能</h2>
<p><RouterLink to="/feature/donate.html">赞赏配置</RouterLink></p>
<h2 id="seo配置" tabindex="-1"><a class="header-anchor" href="#seo配置" aria-hidden="true">#</a> SEO配置</h2>
<p><RouterLink to="/feature/seo.html">seo</RouterLink></p>
<h2 id="文章推荐-1" tabindex="-1"><a class="header-anchor" href="#文章推荐-1" aria-hidden="true">#</a> 文章推荐</h2>
<p><RouterLink to="/feature/recommend.html">文章推荐</RouterLink></p>
<h2 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> 评论</h2>
<p><RouterLink to="/comment/">评论</RouterLink></p>
<h2 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h2>
<p><RouterLink to="/footer.html">页脚</RouterLink></p>
</template>
