<template><h1 id="feature" tabindex="-1"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> Feature</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#seo">SEO</RouterLink><ul><li><RouterLink to="#首页">首页</RouterLink></li><li><RouterLink to="#文章页面">文章页面</RouterLink></li><li><RouterLink to="#自定义">自定义</RouterLink></li></ul></li><li><RouterLink to="#自定义面板">自定义面板</RouterLink><ul><li><RouterLink to="#功能介绍">功能介绍</RouterLink></li><li><RouterLink to="#配置修改">配置修改</RouterLink></li><li><RouterLink to="#自定义-1">自定义</RouterLink></li></ul></li><li><RouterLink to="#赞赏配置">赞赏配置</RouterLink></li></ul></nav>
<h2 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h2>
<p>主题已对搜索引擎进行初步优化，主要就是自动设置关键词和描述，如果想要更深入的SEO优化，请自行解决</p>
<h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h3>
<p>首页的<code>description</code>和<code>keyword</code>通过以下修改，在<code>config.js</code>文件中进行修改</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//站点描述</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"qsyyke的个人博客，记录生活琐事，学习笔记"</span><span class="token punctuation">,</span>

        <span class="token comment">//站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开</span>
        <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">"vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="文章页面" tabindex="-1"><a class="header-anchor" href="#文章页面" aria-hidden="true">#</a> 文章页面</h3>
<p>文章页如果你没有在<code>Frontmatter</code>中单独配置的话，那么将会获取文章内容220个字符作为作为<code>description</code>，获取90个字符作为<code>keyword</code>值</p>
<h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3>
<h5 id="description-keyword" tabindex="-1"><a class="header-anchor" href="#description-keyword" aria-hidden="true">#</a> description，keyword</h5>
<p>如需自定义，请在该<code>.md</code>文件中，加上下面容器，会自动获取第一个tip的值，作为description</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个描述
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> 关键词<span class="token punctuation">,</span>关键词<span class="token punctuation">...</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="自定义面板" tabindex="-1"><a class="header-anchor" href="#自定义面板" aria-hidden="true">#</a> 自定义面板</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901135152962" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901135152962.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h3>
<p>此自定义面板的功能有：</p>
<ol>
<li>切换背景图片</li>
<li>开启毛玻璃模糊效果</li>
<li>全局颜色控制</li>
<li>全局字体控制</li>
<li>全局圆角控制</li>
<li>全局模糊度控制</li>
<li>全局透明度控制</li>
</ol>
<h4 id="切换背景" tabindex="-1"><a class="header-anchor" href="#切换背景" aria-hidden="true">#</a> 切换背景</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901135603882" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901135603882.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h4 id="毛玻璃" tabindex="-1"><a class="header-anchor" href="#毛玻璃" aria-hidden="true">#</a> 毛玻璃</h4>
<ul>
<li>
<p>开启(默认是开启的)</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901135749484" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901135749484.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
<li>
<p>关闭</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901135846975" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901135846975.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
</ul>
<p>为了获得更佳的体验效果，开启毛玻璃效果之后，请设置透明度，模糊度(<code>模糊度仅在毛玻璃效果开启之后，才生效</code>)，以达到最佳视觉效果</p>
<h4 id="全局颜色" tabindex="-1"><a class="header-anchor" href="#全局颜色" aria-hidden="true">#</a> 全局颜色</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140141856" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140141856.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140158487" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140158487.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h4 id="全局字体" tabindex="-1"><a class="header-anchor" href="#全局字体" aria-hidden="true">#</a> 全局字体</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140240329" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140240329.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140257315" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140257315.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h4 id="设置显示文字" tabindex="-1"><a class="header-anchor" href="#设置显示文字" aria-hidden="true">#</a> 设置显示文字</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210902181737898" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210902181737898.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">showFont</span><span class="token operator">:</span> 程
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="全局圆角" tabindex="-1"><a class="header-anchor" href="#全局圆角" aria-hidden="true">#</a> 全局圆角</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140433200" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140433200.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140509942" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140509942.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>圆角控制，对绝大多数的边框都进行控制，但像文章内图片，代码块等并没有进行控制，如需加上，请自行解决</p>
<h4 id="模糊度" tabindex="-1"><a class="header-anchor" href="#模糊度" aria-hidden="true">#</a> 模糊度</h4>
<p><code>模糊度仅在毛玻璃效果开启之后有效</code></p>
<ul>
<li>模糊度为0时</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140748473" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140748473.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>变化之后</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901140842940" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901140842940.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h4 id="透明度" tabindex="-1"><a class="header-anchor" href="#透明度" aria-hidden="true">#</a> 透明度</h4>
<ul>
<li>0时</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901141006270" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901141006270.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>变化后</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901141047340" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901141047340.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="配置修改" tabindex="-1"><a class="header-anchor" href="#配置修改" aria-hidden="true">#</a> 配置修改</h3>
<h4 id="设置背景切换-开启毛玻璃图标" tabindex="-1"><a class="header-anchor" href="#设置背景切换-开启毛玻璃图标" aria-hidden="true">#</a> 设置背景切换，开启毛玻璃图标</h4>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211011145416914.png?x-oss-process=style/pictureProcess1" alt="image-20211011145416914" style="zoom: 33%;" />
<blockquote>
<p>组件位置</p>
<p>docs/.vuepress/theme/lib/client/components/child/home/StyleMenu.vue</p>
<p>图标地址</p>
<p><a href="http://aurora-font.cco.vin/" target="_blank" rel="noopener noreferrer">iconfont Demo (cco.vin)<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="字体颜色-字体" tabindex="-1"><a class="header-anchor" href="#字体颜色-字体" aria-hidden="true">#</a> 字体颜色，字体</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">maxFontColorArr</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'#2c3e50'</span><span class="token punctuation">,</span><span class="token string">'#42a5f5'</span><span class="token punctuation">,</span><span class="token string">'#8093f1'</span><span class="token punctuation">,</span><span class="token string">'#FF6EC7'</span><span class="token punctuation">,</span><span class="token string">'#FF7F00'</span><span class="token punctuation">,</span>
            <span class="token string">'#8FBC8F'</span><span class="token punctuation">,</span><span class="token string">'#EAADEA'</span><span class="token punctuation">,</span><span class="token string">'#3299CC'</span><span class="token punctuation">,</span><span class="token string">'#CDCDCD'</span><span class="token punctuation">,</span><span class="token string">'#CC3299'</span><span class="token punctuation">,</span>
            <span class="token string">'#FF7F00'</span><span class="token punctuation">,</span><span class="token string">'#2F4F4F'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"hlt"</span><span class="token punctuation">,</span>
            <span class="token string">"tzt"</span><span class="token punctuation">,</span>
            <span class="token string">"sst"</span><span class="token punctuation">,</span>
            <span class="token string">"lf"</span><span class="token punctuation">,</span>
            <span class="token string">"xsf"</span><span class="token punctuation">,</span>
            <span class="token string">"lsf"</span><span class="token punctuation">,</span>
            <span class="token string">"cgt"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>maxFontColorArr</code>是控制颜色和字体显示多少个，字体和颜色排列个数都会受此值影响，不推荐添加多个，控制在8个或者7个以内</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901144515893" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901144515893.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h4 id="默认开启毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#默认开启毛玻璃效果" aria-hidden="true">#</a> 默认开启毛玻璃效果</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//毛玻璃效果默认值，true表示开启，false表示关闭，只是默认值</span>
        <span class="token literal-property property">isFitter</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="滚轮" tabindex="-1"><a class="header-anchor" href="#滚轮" aria-hidden="true">#</a> 滚轮</h4>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210901144745455" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210901144745455.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>滚轮样式请自行修改，组件位置<code>docs/.vuepress/theme/lib/client/components/child/StyleMenu.vue</code>，对于其他浏览器，滚轮样式可能不美观，请自行解决</p>
<h3 id="自定义-1" tabindex="-1"><a class="header-anchor" href="#自定义-1" aria-hidden="true">#</a> 自定义</h3>
<h2 id="赞赏配置" tabindex="-1"><a class="header-anchor" href="#赞赏配置" aria-hidden="true">#</a> 赞赏配置</h2>
<p><RouterLink to="/feature/donate.html">文章赞赏</RouterLink></p>
</template>
