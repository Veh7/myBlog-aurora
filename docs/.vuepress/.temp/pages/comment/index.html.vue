<template><h1 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> 评论</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Aurora主题加入了评论，使用<a href="https://waline.js.org/" target="_blank" rel="noopener noreferrer">Waline | Waline<ExternalLinkIcon/></a>集成评论，Valine是一款基于 Valine 衍生的简洁、安全的评论系统。</p>
</div>
<h2 id="获取serverurl" tabindex="-1"><a class="header-anchor" href="#获取serverurl" aria-hidden="true">#</a> 获取serverURL</h2>
<p>请移步到Waline官网，根据他们的教程，获取serverURL</p>
<p><a href="https://waline.js.org/guide/get-started.html#leancloud-%E8%AE%BE%E7%BD%AE-%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank" rel="noopener noreferrer">快速上手 | Waline<ExternalLinkIcon/></a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>在配置文件<code>config.js</code>文件中，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//是否显示评论</span>
            <span class="token literal-property property">showComment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">'上一步得到的serverURL地址'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>关于评论的详细配置项，请看<a href="https://waline.js.org/guide/get-started.html#leancloud-%E8%AE%BE%E7%BD%AE-%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank" rel="noopener noreferrer">快速上手 | Waline<ExternalLinkIcon/></a>，目前主题集成上述项配置，如需Waline其他的配置项，请自行克隆<a href="https://github.com/vuepress-aurora/vuepress-theme-aurora">主题源码</a>进行更改，评论组件位置<code>docs/.vuepress/theme/lib/client/components/global/Comment.vue</code>,所有的配置都是在<code>docs/readme.md</code>中进行配置</p>
<blockquote>
<p>所有评论配置项，必须放在<code>comment</code>对象中</p>
</blockquote>
<h2 id="组件使用" tabindex="-1"><a class="header-anchor" href="#组件使用" aria-hidden="true">#</a> 组件使用</h2>
<p><code>Comment</code>是一个全局组件，目前默认只在关于页面，文章页面以及友情链接页面进行使用，如果在其他页面使用，可以直接<code>&lt;Comment/&gt;</code></p>
</template>
