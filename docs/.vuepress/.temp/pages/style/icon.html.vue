<template><h1 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标" aria-hidden="true">#</a> 自定义图标</h1>
<h2 id="自定义顶部导航栏图标" tabindex="-1"><a class="header-anchor" href="#自定义顶部导航栏图标" aria-hidden="true">#</a> 自定义顶部导航栏图标</h2>
<ol>
<li>
<p>进入<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont-阿里巴巴矢量图标库<ExternalLinkIcon/></a></p>
</li>
<li>
<p>挑选自己喜欢的图标</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111002835625" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111002835625.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
</ol>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111002919678" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111002919678.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111003008017" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111003008017.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111003037996" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111003037996.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111003109493" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111003109493.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127211933492" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127211933492.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>当你设置了<code>fontFamily</code>之后，先点击下载到本地看看</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111081548949" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111081548949.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127212253018" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127212253018.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111081748431" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111081748431.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>然后将此链接复制下来，进入到<code>config.js</code>文件中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"link"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'stylesheet'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text/css'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'这里替换成，你上一步在阿里矢量图标库中，复制的css链接'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>设置好之后，便可以更改<code>navbar</code>的图标了</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111082047409" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111082047409.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111082237278" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111082237278.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>然后启动，一定要注意，设置之后，一定需要重新启动，也就是重新运行<code>npm run dev</code>命令</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111082400666" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111082400666.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>我只对一级导航设置了图标，对于二级，三级，四级...导航，你设置了也没有用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//这里是一级导航</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'问题和bug'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">'aurora-si-glyph-global'</span><span class="token punctuation">,</span>
        
        <span class="token comment">//children中配置的是二级导航</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'CHANGELOG'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'/issue/CHANGELOG.md'</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'主题详细搭建教程'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'/readme/introduce.md'</span><span class="token punctuation">,</span>
                    <span class="token string">'/use/useTheme.md'</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'问题'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'/issue/'</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'bug'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'/issue/bug.md'</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>该主题不仅支持阿里矢量图标库，还支持其他的，只是我演示使用阿里矢量图标库，对于其他的，包括使用阿里矢量图标库，一定要保证图标的<code>font-family</code>是<code>aurora-font</code>，否则不会生效，因为阿里矢量图标库，他默认就会为每一个图标设置<code>class</code>，并且设置</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.custom-aurora-xxx:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\exxx"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>所以你可以直接复制这个图标得类名就可以了，对于其他的图标，你可以参照这个<a href="http://at.alicdn.com/t/font_2919721_uriegglr5q.css" target="_blank" rel="noopener noreferrer">css<ExternalLinkIcon/></a>样式进行设置</p>
</div>
<p>到这里就完成了导航栏自定义图标</p>
</template>
