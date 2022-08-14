<template><h1 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h1>
<p>主题已对搜索引擎进行初步优化，主要就是自动设置关键词和描述，如果想要更深入的SEO优化，请自行解决</p>
<h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2>
<p>首页的<code>description</code>和<code>keyword</code>通过以下修改，在<code>readme.md</code>文件中，不推荐在<code>config.js</code>中进行修改</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'qsyyke的个人博客，记录生活琐事，学习笔记'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">'vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="文章页面" tabindex="-1"><a class="header-anchor" href="#文章页面" aria-hidden="true">#</a> 文章页面</h2>
<p>对于文章页面，你可以通过<code>frontmatter</code>语法在每个<code>.md</code>文件上进行修改，可以参照官方<a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description">description</a></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个测试description项
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2<span class="token punctuation">,</span>key3<span class="token punctuation">,</span>key4<span class="token punctuation">,</span>key5
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>description: String</li>
<li>keyword: 数组</li>
</ul>
<p>如果你没有在该<code>.md</code>文件中，没有对description或者keyword进行修改，那么默认通过获取当前文章的部分h2标签和部分p标签内容进行组合</p>
<p>description字符默认为<code>1220</code>，暂未在<code>config.js</code>中提供修改</p>
<p>keyword字符默认为90</p>
<h2 id="社交信息配置" tabindex="-1"><a class="header-anchor" href="#社交信息配置" aria-hidden="true">#</a> 社交信息配置</h2>
<p><RouterLink to="/feature/social.html">社交信息配置</RouterLink></p>
</template>
