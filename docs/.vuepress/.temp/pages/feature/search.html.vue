<template><h1 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h1>
<p>搜索功能请移步至<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html#issearchable">vuepress官网</a>，安装此<code>@vuepress/plugin-search</code>插件时，请确保插件版本为<code>2.0.0-beta.25</code>或以上</p>
<p>也可以直接运行下面命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @vuepress/plugin-search@2.0.0-beta.25
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当你安装完成之后，在<code>docs/config.js</code>内进行下面配置便可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"@vuepress/plugin-search"</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">"Search"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"/zh/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">"搜索"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="seo配置" tabindex="-1"><a class="header-anchor" href="#seo配置" aria-hidden="true">#</a> seo配置</h2>
<p><RouterLink to="/feature/seo.html">seo配置</RouterLink></p>
</template>
