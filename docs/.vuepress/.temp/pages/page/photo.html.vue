<template><h1 id="相册功能" tabindex="-1"><a class="header-anchor" href="#相册功能" aria-hidden="true">#</a> 相册功能</h1>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911121146092" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911121146092.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<blockquote>
<p>此页面手机端默认是两列，PC端为5列，主题会自动计算宽度</p>
</blockquote>
<p>主题会寻找在<code>docs/photos/readme.md</code>中的所有图片，在此页面中展示，所以一定要在<code>docs/photos/readme.md</code>中，加入自己的图片，可以是本地，或者图片url连接，如果不存在此文件，那么会使用默认的图片进行展示</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>//docs/photos/reasdme.md
<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160320304</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160320304.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160335602</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160335602.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160455739</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160455739.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160510785</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160510785.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160523968</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160523968.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160541591</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160541591.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160601558</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160601558.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160650553</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160650553.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160702449</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160702449.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160713886</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160713886.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160725684</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160725684.png?x-oss-process=style/pictureProcess1</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="标签页面配置" tabindex="-1"><a class="header-anchor" href="#标签页面配置" aria-hidden="true">#</a> 标签页面配置</h2>
<p><RouterLink to="/page/tag.html">标签页面配置</RouterLink></p>
</template>
