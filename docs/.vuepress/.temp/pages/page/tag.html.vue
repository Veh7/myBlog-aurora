<template><h1 id="归档" tabindex="-1"><a class="header-anchor" href="#归档" aria-hidden="true">#</a> 归档</h1>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831201338288" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831201338288.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>通过在每篇md文件上，添加<code>frontMatter</code>进行设置文章标签和类别，格式为</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>vue<span class="token punctuation">,</span>前端<span class="token punctuation">,</span>分类<span class="token punctuation">]</span> <span class="token comment"># 设置类别</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tag1<span class="token punctuation">,</span>tag2<span class="token punctuation">,</span>tag3<span class="token punctuation">]</span> <span class="token comment">#设置标签</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>categories,tag</code>是一个数组，设置之后，请重新启动，否则不会生效</p>
<h2 id="类别" tabindex="-1"><a class="header-anchor" href="#类别" aria-hidden="true">#</a> 类别</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831201350855" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831201350855.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>类别是通过对文章path路径，进行分割选取的，如果一个path路径为</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/spring/springmvc/springmvc重定向和请求转发操作.html#请求转发
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>那么此篇文章的类别就有<code>spring,springmvc</code>，同时，你也可以禁用将此篇文章的文件夹包含在类别中，禁用下面这个配置，便可以了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//config.js</span>
<span class="token comment">//类别项是否包含文件夹名，默认包含</span>
<span class="token literal-property property">categoriesIncludeFolderName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="排除某个类别" tabindex="-1"><a class="header-anchor" href="#排除某个类别" aria-hidden="true">#</a> 排除某个类别</h3>
<p>你也可以配置<code>excludePath</code>值，那个在excludePath数组中的路径的文件夹，就不会被包含在类别中，同时该路径所对应的文章，你在首页也将看不到，但是你可以通过<code>/xxx.md</code>进行访问</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，</span>
<span class="token literal-property property">excludePath</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/footer.html'</span><span class="token punctuation">,</span><span class="token string">'/v1.3.0/'</span><span class="token punctuation">,</span><span class="token string">'/plugin/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>只支持排除在<code>docs</code>根目录下的md文件以及在<code>docs</code>子目录中，可以直接通过<code>/xxx/xxx/xxx/</code>进行访问的路径，其他的不支持</p>
<h2 id="分割符" tabindex="-1"><a class="header-anchor" href="#分割符" aria-hidden="true">#</a> 分割符</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831202338204" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831202338204.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>此分割符可以通过<code>split</code>项进行设置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token string">"~"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="文章页面配置" tabindex="-1"><a class="header-anchor" href="#文章页面配置" aria-hidden="true">#</a> 文章页面配置</h2>
<p><RouterLink to="/page/page.html">文章页面配置</RouterLink></p>
</template>
