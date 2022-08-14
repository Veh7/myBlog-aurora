<template><h1 id="顶部图片" tabindex="-1"><a class="header-anchor" href="#顶部图片" aria-hidden="true">#</a> 顶部图片</h1>
<p>顶部图片是一个全局组件，可以直接使用，位置<code>docs/.vuepress/theme/lib/client/components/global/TopImage.vue</code></p>
<h2 id="设置图片地址" tabindex="-1"><a class="header-anchor" href="#设置图片地址" aria-hidden="true">#</a> 设置图片地址</h2>
<p>从v1.3.2版本开始，便加入了定制顶部图片的选项，你可以使用随机图片接口，也可以使用自己的图片地址</p>
<h3 id="使用随机图片接口" tabindex="-1"><a class="header-anchor" href="#使用随机图片接口" aria-hidden="true">#</a> 使用随机图片接口</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//首页文章列表封面图api接口</span>
        <span class="token literal-property property">homePageImgApi</span><span class="token operator">:</span> <span class="token string">"https://api.ixiaowai.cn/api/api.php"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>首页文章列表图片和文章，标签等顶部图片共同使用一个图片api接口</p>
</div>
<h3 id="使用自己的图片" tabindex="-1"><a class="header-anchor" href="#使用自己的图片" aria-hidden="true">#</a> 使用自己的图片</h3>
<blockquote>
<p><code>主题默认使用的是随机图片，如果你想改成自己的图片的话，那么需要开启此功能</code></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//自定义顶部图片</span>
        <span class="token literal-property property">customTopImg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置</span>
            <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

            <span class="token comment">//文章顶部图片，数组，每次从数组中随机选择一张</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"https://picoss.cco.vin/animate/wall/555260.png"</span><span class="token punctuation">,</span>
                <span class="token string">'https://picoss.cco.vin/animate/wall/404901.png'</span><span class="token punctuation">,</span>
                <span class="token string">'https://picoss.cco.vin/animate/wall/734386.png'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">//友情链接页面</span>
            <span class="token literal-property property">friend</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"https://picoss.cco.vin/animate/wall/669.png"</span><span class="token punctuation">,</span>
                <span class="token string">'https://picoss.cco.vin/animate/wall/5332.png'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">//标签页面</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"https://picoss.cco.vin/animate/wall/763311.png"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">//心情页面</span>
            <span class="token literal-property property">mood</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"https://picoss.cco.vin/animate/wall/5849.png"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShowTopImg<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setBackgroundUrl<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShowHeadLine<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{headLine}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isShowTopImg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isShowHeadLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><table>
<thead>
<tr>
<th>props</th>
<th style="text-align:center">des</th>
</tr>
</thead>
<tbody>
<tr>
<td>isShowTopImg</td>
<td style="text-align:center">是否展示顶部图片</td>
</tr>
<tr>
<td>isShowHeadLine</td>
<td style="text-align:center">是否展示标题，针对于文章页面</td>
</tr>
<tr>
<td>headLine</td>
<td style="text-align:center">标题名称</td>
</tr>
</tbody>
</table>
<h2 id="额外使用组件" tabindex="-1"><a class="header-anchor" href="#额外使用组件" aria-hidden="true">#</a> 额外使用组件</h2>
<p>如需在自己需要的地方使用，可以通过下面方式，传入对应值就行</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>top-image</span> <span class="token attr-name">:is-show-top-img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span>
           <span class="token attr-name">:is-show-head-line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span>
           <span class="token attr-name">:head-line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="海报功能配置" tabindex="-1"><a class="header-anchor" href="#海报功能配置" aria-hidden="true">#</a> 海报功能配置</h2>
<p><RouterLink to="/feature/poster.html">海报功能配置</RouterLink></p>
</template>
