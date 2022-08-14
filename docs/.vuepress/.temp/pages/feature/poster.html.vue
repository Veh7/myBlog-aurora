<template><h1 id="海报分享配置" tabindex="-1"><a class="header-anchor" href="#海报分享配置" aria-hidden="true">#</a> 海报分享配置</h1>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911105738192" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911105738192.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911105852609" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911105852609.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<blockquote>
<p>主题默认在文章页面和心情页面加入了海报分享功能，你也可以在你想要的地方使用该组件，以注册为全局组件<code>&lt;Poster&gt;</code></p>
</blockquote>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<ul>
<li>
<p>作者头像</p>
<p>考虑到该海报分享，大家可能想要自定义，所以默认并没有使用站点的logo，如果没有在<code>docs/readme.md</code>中进行配置，并且请确保此头像连接允许跨域请求，如果出现跨域，在进行生成图片的时候，就会出问题，推荐将此图片放置在<code>docs/.vuepress/public</code>文件夹中，没有默认值</p>
<p>如果你运行出现下面错误，那很有可能就是你设置的头像连接不支持跨域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Access to image at <span class="token string">'...'</span> from origin <span class="token string">'http://localhost:8080'</span> has been blocked by <span class="token constant">CORS</span> <span class="token literal-property property">policy</span><span class="token operator">:</span> No <span class="token string">'Access-Control-Allow-Origin'</span> header is present on the requested resource<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>作者</p>
<p>默认值<code>qsyyke</code></p>
</li>
<li>
<p>博客描述</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911115155380" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911115155380.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>此项需要配置两个值，一个前缀，一个后缀</p>
</li>
<li>
<p>博客描述</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911115301740" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911115301740.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
<li>
<p>海报顶部背景</p>
<p>默认使用的是bing首页的图片，暂时不支持自定义</p>
</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">poster</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
	<span class="token comment">#博客描述</span>
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 初尘博客呀<span class="token punctuation">,</span>
    <span class="token comment">#作者</span>
    <span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">'qsyyke'</span><span class="token punctuation">,</span>
    <span class="token comment">#博客前缀</span>
    <span class="token key atrule">preBlog</span><span class="token punctuation">:</span> <span class="token string">'chuchen'</span><span class="token punctuation">,</span>
    <span class="token comment">#博客后缀</span>
    <span class="token key atrule">suffixBlog</span><span class="token punctuation">:</span> <span class="token string">'blog'</span><span class="token punctuation">,</span>
    <span class="token comment">#头像</span>
    <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /avatar.jpg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>如果使用<code>Poster</code>组件，需要传入一些值</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>String</td>
<td>海报标题</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>海报分享内容</td>
</tr>
</tbody>
</table>
<h2 id="文章推荐配置" tabindex="-1"><a class="header-anchor" href="#文章推荐配置" aria-hidden="true">#</a> 文章推荐配置</h2>
<p><RouterLink to="/feature/recommend.html">文章推荐配置</RouterLink></p>
</template>
