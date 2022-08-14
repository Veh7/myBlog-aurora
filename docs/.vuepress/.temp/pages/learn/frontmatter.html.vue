<template><h1 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> Front Matter</h1>
<p>在开始之前，你可以先读一读官方对于<a href="https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html" target="_blank" rel="noopener noreferrer">frontmatter<ExternalLinkIcon/></a>的介绍，更有助于你的理解及使用</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>FrontMatter</code>是写在md文件中，并且<code>在每篇md的最顶部，使用---包裹</code>起来的一种形式，使用的是<code>yaml</code>语法，你可以像下面这样</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">"2021/111/27"</span> <span class="token comment">#手动设置此篇文章发布时间</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tag1<span class="token punctuation">,</span>tag2<span class="token punctuation">]</span> <span class="token comment">#设置此篇文章的标签</span>
<span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cate1<span class="token punctuation">,</span>cate2<span class="token punctuation">,</span>cate3<span class="token punctuation">]</span> <span class="token comment">#设置此篇文章的类别</span>
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2 <span class="token comment">#设置此篇文章的关键词</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个描述 <span class="token comment">#设置此篇文章的描述</span>
<span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#是否置顶该篇文章</span>
<span class="token key atrule">coverUrl</span><span class="token punctuation">:</span> <span class="token string">"https://aurora.xcye.xyz/avatar.jpg"</span> <span class="token comment">#设置封面图</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 这是第一篇文章 <span class="token comment"># 设置标题</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div>
<p>上面这些是<code>aurora</code>主题自己加上的，你也可以加入官方的一些设置，下面这些都是官方的，并且在该主题中，基本上都支持</p>
<h2 id="官方预定义变量" tabindex="-1"><a class="header-anchor" href="#官方预定义变量" aria-hidden="true">#</a> 官方预定义变量</h2>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>h1_title || siteConfig.title</code></li>
</ul>
<p>当前页面的标题。</p>
<h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>en-US</code></li>
</ul>
<p>当前页面的语言。</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>siteConfig.description</code></li>
</ul>
<p>当前页面的描述。</p>
<h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>Layout</code></li>
</ul>
<p>设置当前页面的布局组件。</p>
<h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>siteConfig.permalink</code></li>
</ul>
<p>参考: <RouterLink to="/learn/permalinks.html">Permalinks</RouterLink>.</p>
<h3 id="metatitle" tabindex="-1"><a class="header-anchor" href="#metatitle" aria-hidden="true">#</a> metaTitle</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: <code>`${page.title} | ${siteConfig.title}`</code></li>
</ul>
<p>重写默认的 meta title。</p>
<h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3>
<ul>
<li>类型: <code>array</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>指定额外的要注入的 meta 标签：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">meta</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description
    <span class="token key atrule">content</span><span class="token punctuation">:</span> hello
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
    <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="默认主题的预定义变量" tabindex="-1"><a class="header-anchor" href="#默认主题的预定义变量" aria-hidden="true">#</a> 默认主题的预定义变量</h2>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>参考: <RouterLink to="/theme/default-theme-config.html#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F">默认主题配置 &gt; 禁用导航栏</RouterLink>。</p>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar<Badge type="tip" text="不支持" vertical="top" /></h3>
<ul>
<li>类型: <code>boolean|'auto'</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>参考: <RouterLink to="/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F">默认主题配置 &gt; 侧边栏</RouterLink>。</p>
<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev<Badge type="tip" text="不支持" vertical="top" /></h3>
<ul>
<li>类型: <code>boolean|string</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>参考: <RouterLink to="/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5">默认主题配置 &gt; 上 / 下一篇链接</RouterLink>。</p>
<h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next<Badge type="tip" text="不支持" vertical="top" /></h3>
<ul>
<li>类型: <code>boolean|string</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>参考: <RouterLink to="/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5">默认主题配置 &gt; 上 / 下一篇链接</RouterLink>。</p>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search</h3>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
<p>参考: <RouterLink to="/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2">默认主题配置 &gt; 内置搜索</RouterLink>。</p>
<h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h3>
<ul>
<li>类型: <code>array</code></li>
<li>默认值: <code>undefined</code></li>
</ul>
</template>
