<template><h1 id="更改图标以及覆盖主题样式" tabindex="-1"><a class="header-anchor" href="#更改图标以及覆盖主题样式" aria-hidden="true">#</a> 更改图标以及覆盖主题样式</h1>
<p>在v.1.3.7之后，你可以自定义图标</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果你想要修改的图标，在http://aurora-font.cco.vin/中可以找到，那么你可以直接修改，如果没有在http://aurora-font.cco.vin/中，那么你就需要想你平常使用图标那样，引入字体，样式，然后再使用</p>
</div>
<h2 id="使用预设图标" tabindex="-1"><a class="header-anchor" href="#使用预设图标" aria-hidden="true">#</a> 使用预设图标</h2>
<p>假设你想要修改置顶的图标</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021003525455" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021003525455.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>
<p>你需要<code>F12</code>查看此图标得类名，主题所有预设的图标类名都是开头<code>aurora-</code>，上图置顶的图标类名为<code>aurora-stick</code></p>
</li>
<li>
<p>在http://aurora-font.cco.vin/aurora.html站点中，找到你喜欢的图标，并记录下下面值</p>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211021003913582.png?x-oss-process=style/pictureProcess1" alt="image-20211021003913582" style="zoom:33%;" />
</li>
<li>
<p>进入到<code>docs/.vuepress/styles/index.css</code>文件中，使用下面的方式修改此图标</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.aurora-stick:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e60a"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021004102208" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021004102208.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>因为在<code>docs/.vuepress/styles/index.css</code>文件中的css样式，会添加到<code>head</code>元素的底部，所以此文件中的Css样式会覆盖默认主题提供的样式，所以你可以在此文件中，直接根据你的需要，把主题样式更改为你需要的样式，例如修改字体等等</p>
</div>
<h2 id="使用自己的图标" tabindex="-1"><a class="header-anchor" href="#使用自己的图标" aria-hidden="true">#</a> 使用自己的图标</h2>
<p>这里使用阿里巴巴图标库进行演示，只要是字体图标，都是一样的</p>
<ul>
<li>
<p>挑选自己喜欢的图标，然后选择添加到库</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021075125699" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021075125699.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
<li>
<p>点击下载代码</p>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211021075328055.png?x-oss-process=style/pictureProcess1" alt="image-20211021075328055" style="zoom:50%;" />
</li>
<li>
<p>解压之后，你会看到下面这些文件</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021075421251" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021075421251.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</li>
<li>
<p>将<code>iconfont.css</code>内的样式复制到<code>docs/.vuepress/styles/palette.css</code>文件中(<code>也可以复制到docs/.vuepress/styles/index.css</code>)中，<code>palette.css</code>中，主要是定义一些变量，你可以在<code>index.css</code>中，直接使用这些变量，然后修改字体的路径</p>
</li>
<li>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--test-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span><span class="token punctuation">;</span> <span class="token comment">/* Project id  */</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'iconfont.ttf?t=1634773948652'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.iconfont</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
    <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-zhiding:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e516"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-zhiding1:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e607"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li>
<li>
<p>在<code>index.css</code>样式内，便可以像使用预设图标那样使用了</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.aurora-stick:before</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
    <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e607"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这里需要注意，如果你使用自己的图标，那么在<code>aurora-xxx:before{}</code>样式内，你需要指定字体的名称，还有<code>content</code>值，原理就是<code>index.css</code>内的样式，会直接覆盖主题默认的样式</p>
</div>
</li>
<li>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211021080627557.png?x-oss-process=style/pictureProcess1" alt="image-20211021080627557" style="zoom:50%;" />
</li>
</ul>
<h2 id="覆盖主题默认样式" tabindex="-1"><a class="header-anchor" href="#覆盖主题默认样式" aria-hidden="true">#</a> 覆盖主题默认样式</h2>
<p>如果你需要对一些样式进行更改，你可以直接在<code>index.css</code>中，直接修改样式，如果你需要使用一些变量，那么你可以在<code>docs/.vuepress/styles/palette.css</code>文件内进行定义，然后在<code>index.css</code>内，直接使用这些变量就可以了</p>
<h2 id="主题特征配置" tabindex="-1"><a class="header-anchor" href="#主题特征配置" aria-hidden="true">#</a> 主题特征配置</h2>
<p><RouterLink to="/style/feature/feature-config.html">主题特征配置</RouterLink></p>
</template>
