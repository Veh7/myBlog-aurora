<template><h1 id="vuepress-plugin-archive" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-archive" aria-hidden="true">#</a> vuepress-plugin-archive</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是vuepress2的一个文章归档时间轴的一个插件</p>
</div>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211122003904803" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211122003904803.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-archive
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vuepress/utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//在这里配置插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">'archive'</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//需要排除的页面url，在该数组里面的路径，都不会被统计</span>
                <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/footer.html'</span><span class="token punctuation">,</span><span class="token string">'/404.html'</span><span class="token punctuation">,</span><span class="token string">'/about/'</span><span class="token punctuation">,</span><span class="token string">'/mood/'</span><span class="token punctuation">,</span><span class="token string">'/link/'</span><span class="token punctuation">,</span><span class="token string">'/tag/'</span><span class="token punctuation">,</span><span class="token string">'/photo/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">//当某篇文章没有标题时，将使用下面值进行替换</span>
                <span class="token literal-property property">noTitle</span><span class="token operator">:</span> <span class="token string">'暂时没有标题配置'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>当你配置好之后，该插件会注册一个全局组件<code>&lt;AuroraArchive&gt;&lt;/AuroraArchive&gt;</code>，你可以在任何地方使用该组件，从而在你网站中，开启文章归档功能，同时该插件会默认注册一个路由，你可以直接在浏览器中，打开该路由，查看归档页面<code>/aurora-archive</code></p>
<p>如果你使用的不是<code>vuepress-theme-aurora</code>主题，那么你可以像下面这样为你网站添加归档功能</p>
<ol>
<li>
<p>创建<code>archive.md</code>文件,在<code>docs</code>目录下，创建一个<code>archive.md</code>文件</p>
</li>
<li>
<p>在该md文件中，加入下面内容就可以了</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> AuroraArchive</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>打开浏览器，输入<code>localhost:[8080]/archive.html</code>，你就可以看到该归档页面了</p>
</li>
</ol>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="notitle" tabindex="-1"><a class="header-anchor" href="#notitle" aria-hidden="true">#</a> noTitle</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>暂时没有标题配置</p>
</blockquote>
<h3 id="excludes" tabindex="-1"><a class="header-anchor" href="#excludes" aria-hidden="true">#</a> excludes</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>需要排除的页面url，在该数组里面的路径，都不会被统计</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/footer.html'</span><span class="token punctuation">,</span><span class="token string">'message.html'</span><span class="token punctuation">,</span><span class="token string">'/v1.3.0/'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211122004613835" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211122004613835.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="css样式" tabindex="-1"><a class="header-anchor" href="#css样式" aria-hidden="true">#</a> css样式</h2>
<p>你可以在<code>docs/.vuepress/styles/index.css</code>文件中，设置下面样式变量</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果你使用的不是<code>vuepress-theme-aurora</code>主题，那么请先看<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/palette.html#palette" target="_blank" rel="noopener noreferrer">vuepress官方关于palette的介绍<ExternalLinkIcon/></a>，官方默认使用的就是<code>SASS </code>，对应的你需要在<code>docs/.vuepress/styles/index.sass</code>中，覆盖下面的样式变量</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 时间线颜色 */</span>
    <span class="token property">--archive-timeline</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>144<span class="token punctuation">,</span> 241<span class="token punctuation">,</span> 239<span class="token punctuation">,</span> 0.35<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 鼠标移动到某个标题上，时间线上的圆点颜色 */</span>
    <span class="token property">--archive-timeline-active</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>

    <span class="token comment">/* 鼠标移动到某个标题上，标题颜色 */</span>
    <span class="token property">--archive-timeline-active-title</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>

    <span class="token comment">/* 归档页面的宽度 */</span>
    <span class="token property">--archive-box-width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如果你想设置背景颜色，请自行f12查看对应类名，然后在<code>docs/.vuepress/styles/index.css</code>文件中，设置对应类名的css样式</p>
</template>
