<template><h1 id="所有配置" tabindex="-1"><a class="header-anchor" href="#所有配置" aria-hidden="true">#</a> 所有配置</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>主题从V1.3.2版本之后，就对页面进行重大改变，将主题配置移到<code>docs/.vuepress/config.js</code>内，并且加入了多种功能，如自动生成文章目录，侧边栏等效果...</p>
<p><code>以下配置，没有特殊说明都是在docs/.vuepress/config.js ---&gt; themeConfig内进行配置</code></p>
<ul>
<li>必读</li>
</ul>
<blockquote>
<p><RouterLink to="/issue/">主题问题解决</RouterLink></p>
<p><RouterLink to="/home/deploy.html">部署</RouterLink></p>
</blockquote>
<ul>
<li>推荐阅读</li>
</ul>
<blockquote>
<p><RouterLink to="/feature/registercom.html">主题增加新组件，新页面</RouterLink></p>
<p><RouterLink to="/style.html">修改主题默认样式</RouterLink></p>
<p><RouterLink to="/home/directory-structure.html">主题目录结构</RouterLink></p>
<p><RouterLink to="/learn/markdown.html">主题写作技巧</RouterLink></p>
<p><RouterLink to="/issue/bug.html">主题bug</RouterLink></p>
<p><RouterLink to="/issue/CHANGELOG.html">更新日志</RouterLink></p>
</blockquote>
<ul>
<li>环境安装</li>
</ul>
<blockquote>
<p><RouterLink to="/node.html">node安装教程</RouterLink></p>
</blockquote>
</div>
<h2 id="v1-8-xxx版本增加配置新版本" tabindex="-1"><a class="header-anchor" href="#v1-8-xxx版本增加配置新版本" aria-hidden="true">#</a> V1.8.xxx版本增加配置新版本<Badge type="tip" text="v1.8.xxx" vertical="top" /></h2>
<h3 id="showrecommend" tabindex="-1"><a class="header-anchor" href="#showrecommend" aria-hidden="true">#</a> showRecommend</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在文章页面展示文章推荐 默认展示</p>
</blockquote>
<h3 id="articlepagination" tabindex="-1"><a class="header-anchor" href="#articlepagination" aria-hidden="true">#</a> articlePagination</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在文章页面展示下一页，上一页，默认展示</p>
</blockquote>
<h3 id="excludetag" tabindex="-1"><a class="header-anchor" href="#excludetag" aria-hidden="true">#</a> excludeTag<Badge type="tip" text="v1.8.0已被移除" vertical="top" /></h3>
<blockquote>
<p>从v1.8.0之后，被移除，改用<code>excludePath</code></p>
</blockquote>
<h3 id="excludepath" tabindex="-1"><a class="header-anchor" href="#excludepath" aria-hidden="true">#</a> excludePath</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径</p>
<p>主题内置已经排除了以下path</p>
<p><code>['/','/about/','/mood/','/link/','/tag/','/archive/','/photo/','/aurora-coze/','/aurora-register/','/aurora-archive/','/aurora-music/','/404.html']</code>，所以你如果想要排除的path在上面有，那么就不需要加入</p>
</blockquote>
<details class="custom-container details"><summary>点击查看图片</summary>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211122080443328" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211122080443328.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</details>
<p>假如目前配置的为<code>excludePath: ['/footer.html','/v1.3.0/','/plugin/']</code>，文档的目录是上图那样，那么在根路径下(<code>根路径就是md文件直接放在docs目录下</code>)的<code>footer.md</code>会被直接排除，你不会在首页和tag页面看到该文章</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>因为该排出是通过准确匹配文章的<code>URI</code>进行排除的，只能排除通过<code>localhost:[8080]/xxxx.html</code>或者<code>localhost:[8080]/v1.3.0/</code>进行访问的md文件</p>
<blockquote>
<p>如果你有一个<code>README.md</code>文件，位置为<code>docs/v1.3.0/README.md</code>或者<code>docs/v1.3.0/readme.md</code>，那么这个<code>readme.md</code>文件可以直接<code>/v1.3.0/</code>或者<code>/v1.3.0/readme.html</code>(<code>会被重定向到/v1.3.0/</code>)或者<code>/v1.3.0/index.html</code>(<code>会被重定向到/v1.3.0/</code>)进行访问，所以该配置项只支持排除放在<code>docs</code>目录下或者在<code>docs</code>的子文件夹中的<code>readme.md</code>或者<code>README.md</code>文件</p>
</blockquote>
</div>
<p><span style="color: red">记住所有文件名为<code>readme.md</code>或者<code>README.md</code>的文件，都可以直接通过<code>XXX/</code>进行访问</span></p>
<blockquote>
<p>这里的<code>XXX/</code>并不是你在浏览器中输入<code>localhost:[8080]/XXX/</code>....</p>
</blockquote>
<h3 id="wave" tabindex="-1"><a class="header-anchor" href="#wave" aria-hidden="true">#</a> wave</h3>
<h3 id="showwave" tabindex="-1"><a class="header-anchor" href="#showwave" aria-hidden="true">#</a> showWave</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在首页展示波浪效果</p>
</blockquote>
<details class="custom-container details"><summary>code</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">wave</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">showWave</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211122081653795" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211122081653795.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</details>
<h3 id="bubble" tabindex="-1"><a class="header-anchor" href="#bubble" aria-hidden="true">#</a> bubble</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>主题气泡配置项，该项只会影响顶部图片那里的气泡</p>
</blockquote>
<details class="custom-container details"><summary>view picture</summary>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211122081842634" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211122081842634.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</details>
<h3 id="show" tabindex="-1"><a class="header-anchor" href="#show" aria-hidden="true">#</a> show<Badge type="tip" text="bubble下的配置项" vertical="top" /></h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在顶部图片中显示气泡效果</p>
</blockquote>
<h3 id="bubblenumber" tabindex="-1"><a class="header-anchor" href="#bubblenumber" aria-hidden="true">#</a> bubbleNumber<Badge type="tip" text="推荐0-1之间小数,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>气泡数量 推荐0(不包括)到1之前的小数，</p>
</blockquote>
<h3 id="bubblealpha" tabindex="-1"><a class="header-anchor" href="#bubblealpha" aria-hidden="true">#</a> bubbleAlpha<Badge type="tip" text="推荐0-1之间小数,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>气泡透明度 0到1之间的小数</p>
</blockquote>
<h3 id="alphachangespeed" tabindex="-1"><a class="header-anchor" href="#alphachangespeed" aria-hidden="true">#</a> alphaChangeSpeed<Badge type="tip" text="越接近于0越好,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>透明度变化速度，越接近于0越好</p>
</blockquote>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size<Badge type="tip" text="推荐0-1之间小数,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>气泡大小，推荐0到1之间的值</p>
</blockquote>
<h3 id="sizechangespeed" tabindex="-1"><a class="header-anchor" href="#sizechangespeed" aria-hidden="true">#</a> sizeChangeSpeed<Badge type="tip" text="越接近于0越好,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>气泡大小变化速度 越小越好</p>
</blockquote>
<h3 id="risespeed" tabindex="-1"><a class="header-anchor" href="#risespeed" aria-hidden="true">#</a> riseSpeed<Badge type="tip" text="推荐0-1之间小数,不能为0" vertical="top" /></h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>气泡上升速度</p>
</blockquote>
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>气泡颜色，如果你想要设置为白色<code>rgb(255,255,255)</code>，那么这里需要传入请传入<code>255,255,255</code></p>
</blockquote>
<h2 id="新版本" tabindex="-1"><a class="header-anchor" href="#新版本" aria-hidden="true">#</a> 新版本<Badge type="tip" text="v1.3.2-v1.6.2" vertical="top" /></h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这部分的配置是从v1.3.2到v1.6.2版本新增或者修改的配置项</p>
</div>
<h3 id="sidebaravatar" tabindex="-1"><a class="header-anchor" href="#sidebaravatar" aria-hidden="true">#</a> sidebarAvatar<badge text="v1.6.2"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>侧边栏头像，如果此项为undefine,那么将使用heroImg</p>
</blockquote>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar<badge text="配置项被修改过"/></h3>
<details class="custom-container details"><summary>原来</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'快速开始'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/readme/'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"所有配置"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/home/config.html'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<details class="custom-container details"><summary>现在</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'快速开始'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/readme/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">'aurora-0023pacman'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"所有配置"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/home/config.html'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token string">'aurora-link'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<blockquote>
<p>新增自定义顶部导航栏icon图标</p>
</blockquote>
<p>自定义导航栏的图标请查看<RouterLink to="/style/icon.html">自定义图标</RouterLink></p>
<h3 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> about<badge text="增加对html的支持"/></h3>
<p>关于页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">about</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"我?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"这是关于页面支持html&lt;a href='https://blog.cco.vin' target='_blank'>这是一个标签&lt;/a>"</span><span class="token punctuation">,</span>
            <span class="token string">"目前是一名大三学生,CS专业,坐标西南边陲"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>可以在describe中，写入html</p>
</div>
<h3 id="friendlinks" tabindex="-1"><a class="header-anchor" href="#friendlinks" aria-hidden="true">#</a> friendLinks<badge text="发生重大修改，影响运行"/></h3>
<details class="custom-container details"><summary>以前</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">friendLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//网站标题</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"XI溪"</span><span class="token punctuation">,</span>

        <span class="token comment">//站点链接</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://www.xiaoxuya.top"</span><span class="token punctuation">,</span>

        <span class="token comment">//站点logo</span>
        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://www.xiaoxuya.top/img/logo.png"</span><span class="token punctuation">,</span>

        <span class="token comment">//站点描述</span>
        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"人生若只是初见,何事秋风悲画扇"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"左眼会陪右眼哭の博客"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://qkongtao.cn/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"干嘛这么想不开，要在脸上贴个输字！"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></details>
<details class="custom-container details"><summary>现在</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">friendLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'我的朋友'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'xxx'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'大佬'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'xxx'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'小伙伴'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'xxx'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></details>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>以前友情链接页面，只能配置一个模块，也就是我的朋友，现在支持配置多个模块，<code>friendLinks</code>是一个数组对象，效果请查看配置之后的效果，友情链接地址<code>/link</code></p>
</div>
<h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> cover<badge text="v1.6.0"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>配置友情链接的封面，如果没有指定，那么默认是白色背景</p>
</blockquote>
<details class="custom-container details"><summary>view</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211111084654046.png?x-oss-process=style/pictureProcess1'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h3 id="siteinformation" tabindex="-1"><a class="header-anchor" href="#siteinformation" aria-hidden="true">#</a> siteInformation<badge text="v1.6.0 发生更改"/></h3>
<details class="custom-container details"><summary>以前</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//站点标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"qsyyke"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点链接</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.cco.vin"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点描述</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"I do not follow,i lives is always all you want"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己的头像</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"cqycco@gmail.com"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>
<details class="custom-container details"><summary>现在</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//站点标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Aurora-theme"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点链接</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://aurora.cco.vin"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/ico/yuan.png"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点描述</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span><span class="token punctuation">,</span>

    <span class="token comment">//自己的头像</span>
    <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">"email: cqycco@gmail.com, qq:2291308094"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'申请友链请按照下面格式，在此页面留言，我看到就会进行添加'</span><span class="token punctuation">,</span>
        <span class="token string">'博客名称    博客地址      博客描述      博客logo'</span><span class="token punctuation">,</span>
        <span class="token string">'友链申请要求'</span><span class="token punctuation">,</span>
        <span class="token string">'拒绝涉政/涉黄/太多广告/盈利性站点'</span><span class="token punctuation">,</span>
        <span class="token string">'站点能正常访问'</span><span class="token punctuation">,</span>
        <span class="token string">'这是一个html的测试&lt;a href="https://blog.cco.vin" target="_blank">这是一个a标签&lt;/a>'</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details>
<h3 id="contact" tabindex="-1"><a class="header-anchor" href="#contact" aria-hidden="true">#</a> contact<badge text="v1.6.0 新增"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>在自己的站点信息处，添加联系方式如</p>
<ul>
<li>
<p><code>contact: &quot;email: cqycco@gmail.com, qq:2291308094&quot;</code></p>
<blockquote>
<p>展示为<code>//email: cqycco@gmail.com, qq:2291308094</code></p>
</blockquote>
</li>
<li>
<p><code>contact: &quot;如果几天我还未添加你站点，请联系我qq2291308094&quot;</code></p>
<blockquote>
<p>展示为<code>//如果几天我还未添加你站点，请联系我qq2291308094</code></p>
</blockquote>
</li>
</ul>
</blockquote>
<details class="custom-container details"><summary>展示效果</summary>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111090308201" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111090308201.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</details>
<h3 id="otherdescribe" tabindex="-1"><a class="header-anchor" href="#otherdescribe" aria-hidden="true">#</a> otherDescribe<badge text="v1.6.0 新增"/></h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>自己站点的其他描述，主要是添加一些添加友联的要求，里面的每一个都支持html</p>
</blockquote>
<details class="custom-container details"><summary>view</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//站点标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Aurora-theme"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点链接</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://aurora.cco.vin"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/ico/yuan.png"</span><span class="token punctuation">,</span>

    <span class="token comment">//自己站点描述</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span><span class="token punctuation">,</span>

    <span class="token comment">//自己的头像</span>
    <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">"email: cqycco@gmail.com, qq:2291308094"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'申请友链请按照下面格式，在此页面留言，我看到就会进行添加'</span><span class="token punctuation">,</span>
        <span class="token string">'博客名称    博客地址      博客描述      博客logo'</span><span class="token punctuation">,</span>
        <span class="token string">'友链申请要求'</span><span class="token punctuation">,</span>
        <span class="token string">'拒绝涉政/涉黄/太多广告/盈利性站点'</span><span class="token punctuation">,</span>
        <span class="token string">'站点能正常访问'</span><span class="token punctuation">,</span>
        <span class="token string">'这是一个html的测试&lt;a href="https://blog.cco.vin" target="_blank">这是一个a标签&lt;/a>'</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details>
<h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message<badge text="v1.6.0 html支持"/></h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'该博客主题为Aurora,&lt;a href="https://github.com/qsyyke/vuepress-theme-aurora">vuepress-theme-Aurora&lt;/a>'</span><span class="token punctuation">,</span>
    <span class="token string">"主题交流群: 681602026，欢迎各位大佬进群交流"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="showmoodedit" tabindex="-1"><a class="header-anchor" href="#showmoodedit" aria-hidden="true">#</a> showMoodEdit<badge text="v1.6.0 被移除"/></h3>
<h3 id="addmood" tabindex="-1"><a class="header-anchor" href="#addmood" aria-hidden="true">#</a> addMood<badge text="v1.6.0 被移除"/></h3>
<h3 id="showonlinemood" tabindex="-1"><a class="header-anchor" href="#showonlinemood" aria-hidden="true">#</a> showOnlineMood<badge text="v1.6.0 被移除"/></h3>
<h3 id="articleh2icon" tabindex="-1"><a class="header-anchor" href="#articleh2icon" aria-hidden="true">#</a> articleH2Icon<badge text="v1.6.0 新增"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>二级标签的前面图标，默认<code>🌸</code>,请从<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet<ExternalLinkIcon/></a>直接复制</p>
</blockquote>
<h3 id="articleh3icon" tabindex="-1"><a class="header-anchor" href="#articleh3icon" aria-hidden="true">#</a> articleH3Icon<badge text="v1.6.0 新增"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>三级标签的前面图标，默认<code>🐳</code>,请从<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet<ExternalLinkIcon/></a>直接复制</p>
</blockquote>
<h3 id="articleh4icon" tabindex="-1"><a class="header-anchor" href="#articleh4icon" aria-hidden="true">#</a> articleH4Icon<badge text="v1.6.0 新增"/></h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>四级标签以四级标签之后的前面图标，默认<code>⛄</code>,请从<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet<ExternalLinkIcon/></a>直接复制</p>
</blockquote>
<details class="custom-container details"><summary>展示效果</summary>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211111090023642" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211111090023642.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
</details>
<h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2>
<p><a href="https://aurora.xcye.xyz/config/">点击查看配置</a></p>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>true为首页，false反之</p>
<p><code>此项在docs/readme.md</code>内配置，用于设置首页位置</p>
</blockquote>
<h3 id="logocolor" tabindex="-1"><a class="header-anchor" href="#logocolor" aria-hidden="true">#</a> logoColor</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页左上角Logo图旁文字颜色</p>
</blockquote>
<h3 id="logotitle" tabindex="-1"><a class="header-anchor" href="#logotitle" aria-hidden="true">#</a> logoTitle</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>左上角，logo旁标题文字</p>
</blockquote>
<h3 id="defaultborderradius" tabindex="-1"><a class="header-anchor" href="#defaultborderradius" aria-hidden="true">#</a> defaultBorderRadius</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>默认的圆角，传入数字</p>
</blockquote>
<h3 id="defaultopacity" tabindex="-1"><a class="header-anchor" href="#defaultopacity" aria-hidden="true">#</a> defaultOpacity</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>默认的透明度，传入0到1之间的小数，0表示全透明</p>
</blockquote>
<h3 id="ishomepagefollow" tabindex="-1"><a class="header-anchor" href="#ishomepagefollow" aria-hidden="true">#</a> isHomePageFollow</h3>
<ul>
<li>boolean</li>
</ul>
<blockquote>
<p>首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随</p>
</blockquote>
<h3 id="defaultblur" tabindex="-1"><a class="header-anchor" href="#defaultblur" aria-hidden="true">#</a> defaultBlur</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>默认模糊度(<code>0 到 1之间</code>)</p>
</blockquote>
<h3 id="showfont" tabindex="-1"><a class="header-anchor" href="#showfont" aria-hidden="true">#</a> showFont</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>圆角等控制面板，字体切换的占位符文字，推荐一个字</p>
</blockquote>
<h3 id="faviconico" tabindex="-1"><a class="header-anchor" href="#faviconico" aria-hidden="true">#</a> faviconIco</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>网站顶部favicon图片链接，如https://ooszy.cco.vin/img/blog-public/ccds_64.ico</p>
<p><code>v1.3.2移除，改在config.js的head内配置</code></p>
</blockquote>
<details class="custom-container details"><summary>实例</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"link"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/ico/yuan.png"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">"icon"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
<h3 id="customrandomsay" tabindex="-1"><a class="header-anchor" href="#customrandomsay" aria-hidden="true">#</a> customRandomSay</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否自定义随机一言，true表示不会使用随机一言接口</p>
<p>默认使用的接口为:https://international.v1.hitokoto.cn/?c=b&amp;max_length=45，感谢大佬提供的一言接口</p>
</blockquote>
<h3 id="customrandomvalue" tabindex="-1"><a class="header-anchor" href="#customrandomvalue" aria-hidden="true">#</a> customRandomValue</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>自定义一言文字，只有customRandomSay为true时有效</p>
</blockquote>
<h3 id="showhomemood" tabindex="-1"><a class="header-anchor" href="#showhomemood" aria-hidden="true">#</a> showHomeMood</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在首页显示心情，true开启，需要设置文字</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="mood" tabindex="-1"><a class="header-anchor" href="#mood" aria-hidden="true">#</a> mood</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页中间，心情文字</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="herologo" tabindex="-1"><a class="header-anchor" href="#herologo" aria-hidden="true">#</a> heroLogo</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页中间图片链接</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="heroimg" tabindex="-1"><a class="header-anchor" href="#heroimg" aria-hidden="true">#</a> heroImg</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页中间图片链接，默认https://ooszy.cco.vin/img/blog-public/avatar.jpg</p>
</blockquote>
<h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>左上角logo图片</p>
</blockquote>
<h3 id="cancelicohref" tabindex="-1"><a class="header-anchor" href="#cancelicohref" aria-hidden="true">#</a> cancelIcoHref</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>圆角字体控制面板，取消按钮图片链接</p>
<p><code>v1.3.2已移除，改用阿里字体图标，如果修改，请f12，修改对应值</code>，组件位置为docs/.vuepress/theme/lib/client/components/child/home/StyleMenu.vue</p>
</blockquote>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页和非文章页面的description描述文字</p>
</blockquote>
<h3 id="keyword" tabindex="-1"><a class="header-anchor" href="#keyword" aria-hidden="true">#</a> keyword</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页和非文章页面的keyword，请使用<code>,</code>分割开</p>
</blockquote>
<h3 id="slidetime" tabindex="-1"><a class="header-anchor" href="#slidetime" aria-hidden="true">#</a> slideTime</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>圆角控制面板，隐藏时间，单位毫秒</p>
</blockquote>
<h3 id="randomsaw" tabindex="-1"><a class="header-anchor" href="#randomsaw" aria-hidden="true">#</a> randomSaw</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>随机一言接口 https://international.v1.hitokoto.cn/?c=b&amp;max_length=45</p>
</blockquote>
<h3 id="randomsawquery" tabindex="-1"><a class="header-anchor" href="#randomsawquery" aria-hidden="true">#</a> randomSawQuery</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>从随机一言接口中，如何获取值，如上面<code>randomSaw</code>接口，输入hitokoto(<code>后续版本会优化此项</code>)</p>
</blockquote>
<h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> method</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>随机一言请求接口方法</p>
</blockquote>
<p>animeOption: {
baseURL: https://api.vvhan.com/api/acgimg?type=json,
method: get,
timeout: 5000,
query: imgurl
}</p>
<h3 id="isfitter" tabindex="-1"><a class="header-anchor" href="#isfitter" aria-hidden="true">#</a> isFitter</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>默认是否启用毛玻璃效果，true表示开启</p>
</blockquote>
<h3 id="homepagelazyloadingimg" tabindex="-1"><a class="header-anchor" href="#homepagelazyloadingimg" aria-hidden="true">#</a> homePageLazyLoadingImg</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页文章列表懒加载图片地址</p>
</blockquote>
<h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2>
<p><a href="https://aurora.xcye.xyz/config/page/page.html#%E9%A1%B6%E9%83%A8%E5%9B%BE%E7%89%87">点击查看文章配置</a></p>
<h3 id="lazyloadingimg" tabindex="-1"><a class="header-anchor" href="#lazyloadingimg" aria-hidden="true">#</a> lazyLoadingImg</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>文章懒加载占位符图片链接，如https://ooszy.cco.vin/img/blog-public/ljz.gif</p>
</blockquote>
<h3 id="defaulttitlecolor" tabindex="-1"><a class="header-anchor" href="#defaulttitlecolor" aria-hidden="true">#</a> defaultTitleColor</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>文章顶部标题颜色，如#8093f1</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="coverurl" tabindex="-1"><a class="header-anchor" href="#coverurl" aria-hidden="true">#</a> coverUrl</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页文章列表图片地址,详细配置说明，请点击此处<a href="">click me</a></p>
</blockquote>
<h2 id="社交" tabindex="-1"><a class="header-anchor" href="#社交" aria-hidden="true">#</a> 社交</h2>
<p><a herf="https://aurora.xcye.xyz/config/page/about.html#%E7%A4%BE%E4%BA%A4">点击查看社交配置</a></p>
<h3 id="socials" tabindex="-1"><a class="header-anchor" href="#socials" aria-hidden="true">#</a> socials</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>数组对象</p>
</blockquote>
<details class="custom-container details"><summary>点击查看实例</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   	<span class="token operator">...</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">socials</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//社交链接</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"tencent://message/?uin=2291308094"</span><span class="token punctuation">,</span>
                <span class="token comment">// imgSrc: "https://ooszy.cco.vin/img/ico/qq.svg", 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置</span>

                <span class="token comment">//true为在首页显示，反之</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//是否在侧边栏显示</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-qq'</span><span class="token punctuation">,</span>

                <span class="token comment">//鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友</span>
                <span class="token comment">// showImgSrc: "https://ooszy.cco.vin/img/blog-public/wechat.jpg",</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"javascript:;"</span><span class="token punctuation">,</span>
                <span class="token comment">//imgSrc: /assets/img/ico/wechat.svg,</span>
                <span class="token literal-property property">showImgSrc</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/wechat.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-weixin'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"https://github.com/qsyyke/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-github-fill'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"https://stackoverflow.com/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-stackoverflow'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"https://space.bilibili.com/483962286"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-bilibili-1'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"https://music.163.com/#/user/home?id=1411050784"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-wangyiyunyinle'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">"mailto:2291308094@qq.com"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'#icon-email'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div></details>
<h3 id="ahref" tabindex="-1"><a class="header-anchor" href="#ahref" aria-hidden="true">#</a> aHref</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>社交链接地址</p>
</blockquote>
<h3 id="imgsrc" tabindex="-1"><a class="header-anchor" href="#imgsrc" aria-hidden="true">#</a> imgSrc</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>社交图片地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="ishome" tabindex="-1"><a class="header-anchor" href="#ishome" aria-hidden="true">#</a> isHome</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在首页显示，true表示会在首页显示，其他页面也会显示，为false，首页不会显示，其他页面会显示</p>
</blockquote>
<h3 id="show-1" tabindex="-1"><a class="header-anchor" href="#show-1" aria-hidden="true">#</a> show</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示此社交，控制全局</p>
</blockquote>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否在侧边栏展示，手机侧边栏无效</p>
</blockquote>
<h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> symbol</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>社交图标使用的是阿里图标库，目前只添加一些常用彩色图标，后期会添加，图标地址http://aurora-font.cco.vin/</p>
</blockquote>
<details class="custom-container details"><summary>点击查看配置</summary>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211011103250195.png?x-oss-process=style/pictureProcess1" alt="image-20211011103250195" style="zoom:50%;" />
<img src="https://ooszy.cco.vin/img/blog-note/image-20211011103342575.png?x-oss-process=style/pictureProcess1" alt="image-20211011103342575" style="zoom:50%;" />
<blockquote>
<p><code>symbol</code>值就填上面的#aurora-Email，那么社交图标便会使用此图标进行显示</p>
</blockquote>
</details>
<h3 id="socialmaxlength" tabindex="-1"><a class="header-anchor" href="#socialmaxlength" aria-hidden="true">#</a> socialMaxLength</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>社交展示的最大个数</p>
</blockquote>
<h3 id="showimgsrc" tabindex="-1"><a class="header-anchor" href="#showimgsrc" aria-hidden="true">#</a> showImgSrc</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>鼠标移动到图标上面，需要显示的图片链接，适用于微信二维码这种</p>
</blockquote>
<h2 id="关于页面" tabindex="-1"><a class="header-anchor" href="#关于页面" aria-hidden="true">#</a> 关于页面</h2>
<p><a href="https://aurora.xcye.xyz/config/page/about.html#%E7%A4%BE%E4%BA%A4">点击查看关于页面</a></p>
<h3 id="about-1" tabindex="-1"><a class="header-anchor" href="#about-1" aria-hidden="true">#</a> about</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>关于页面数组对象</p>
</blockquote>
<details class="custom-container details"><summary>点击查看实例</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">about</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"我?"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"目前是一名大三学生,CS专业,坐标西南边陲"</span><span class="token punctuation">,</span>
                    <span class="token string">"喜欢安静,不喜社交"</span><span class="token punctuation">,</span>
                    <span class="token string">"喜欢听音乐,什么类型都可"</span><span class="token punctuation">,</span>
                    <span class="token string">"喜欢技术,coding"</span><span class="token punctuation">,</span>
                    <span class="token string">"目前正在学习java后端"</span><span class="token punctuation">,</span>
                    <span class="token string">'最喜欢的电影是"忠犬八公的故事",梦想以后独居也能有一只"Hachi"'</span><span class="token punctuation">,</span>
                    <span class="token string">"主题是我自己开发的，前端太菜了，如果有bug，希望大家多多包涵`Σ(￣□￣||)` "</span><span class="token punctuation">,</span>
                    <span class="token string">"有点懒"</span><span class="token punctuation">,</span>
                    <span class="token string">"目前除了编程没有什么兴趣爱好"</span><span class="token punctuation">,</span>
                    <span class="token string">"正在追的番有《百妖谱》,《致不灭的你》,《少年歌行》,《鬼灭之刃》,《关于我转生变成史莱姆这档事》..."</span><span class="token punctuation">,</span>
                    <span class="token string">"喜欢小说，喜欢的作者是--十月流年，最喜欢的小说《至尊修罗》,《一念永恒》,《星辰变》"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"coding"</span><span class="token punctuation">,</span>
                    <span class="token string">"社恐"</span><span class="token punctuation">,</span>
                    <span class="token string">"番剧"</span><span class="token punctuation">,</span>
                    <span class="token string">"电影"</span><span class="token punctuation">,</span>
                    <span class="token string">"安静"</span><span class="token punctuation">,</span>
                    <span class="token string">"音乐"</span><span class="token punctuation">,</span>
                    <span class="token string">"小说"</span><span class="token punctuation">,</span>
                    <span class="token string">"宅"</span><span class="token punctuation">,</span>
                    <span class="token string">"懒"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"大三规划"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"做项目"</span><span class="token punctuation">,</span>
                    <span class="token string">"软考二级"</span><span class="token punctuation">,</span>
                    <span class="token string">"英语四级"</span><span class="token punctuation">,</span>
                    <span class="token string">"想找实习"</span><span class="token punctuation">,</span>
                    <span class="token string">"复习数据结构"</span><span class="token punctuation">,</span>
                    <span class="token string">"驾照"</span><span class="token punctuation">,</span>
                    <span class="token string">"做点什么有意义的事"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"大家加油呀`Σ(￣□￣||)` ..."</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"未来规划"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"后端工程师"</span><span class="token punctuation">,</span> <span class="token string">"赚money"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"忘记过去，展望未来"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"技  能"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"java"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"HTML5"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"javascript"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"python"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"redis"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"mysql"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"spring"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"springMVC"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"springBoot"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">{</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"掌握框架"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"spring"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">79</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"springMVC"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">81</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"springBoot"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"mybatis"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"dubbo"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"掌握技能"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"jetbrains"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"linux"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">68</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"git"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Ctrl C V"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"关于主题"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"theme-ccds主题是我自己独立开发，是一款基于vuepress，对默认主题进行了大量修改，我以前使用的是wordpress的博客主题，但是我对PHP不了解，想改成自己想要的主题，太难了，最近在学vue，正好看到可以使用vuepress来搭建 博客，就将默认主题改成现在这个样，并且喜欢vuepress的最主要原因是，它可以 直接将本地的markdown文档进行编译部署，我原来博客，我记了几个月的笔记，不太想再慢慢从本地复制到WordPress进行发布，以至于博客几个月没有发布文章了，虽然有技术可以解决，但还是喜欢vuepress，简直是懒癌福音，如果你喜欢的话，可以在我的GitHub进行下载，使用文档可以查看https://theme-ccds.cco.vin，该主题已将所有的配置进行抽离，你现在看到的所有信息，都抽离在了一个配置文件中，但是目前还并不能做到开箱即用，如果使用的人多了，我可以进行修改，并且我自己也写了几个组件，包括文章页面看到的顶部图片，友情链接，海报分享功能等等 ，可以在你想使用的地方，直接使用这些组件就可以，该主题我加入了vuex，对前端不太了解，有很多css不对的地方，请大家多多包涵，Thanks♪(･ω･)ﾉ"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"更新日志"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"开发永不止步......"</span><span class="token punctuation">,</span>
                    <span class="token string">"2021.9.12 增加相册功能，解决已知bug"</span><span class="token punctuation">,</span>
                    <span class="token string">"2021.9.9 增加海报分享功能"</span><span class="token punctuation">,</span>
                    <span class="token string">"2021.9.5 重新修改文章SEO自动配置，使用新规则，解决从tag页面进入文章页面，懒加载失效问题"</span><span class="token punctuation">,</span>
                    <span class="token string">"2021.9.4 重新初始化仓库"</span><span class="token punctuation">,</span>
                    <span class="token string">"2.21.8.10 -- 2021.9 主题开发"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'想求个star`(⌒▽⌒)`'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"主题后续计划及闲话"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"为说说页面增加随时发布，随时修改功能"</span><span class="token punctuation">,</span>
                    <span class="token string">"增加每日计划打卡功能"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br></div></div></details>
<h3 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>此项是否展示为条状 如果为true，请正确设置</p>
</blockquote>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>标题</p>
</blockquote>
<h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字符串数组，此项的标签</p>
</blockquote>
<h3 id="showtag" tabindex="-1"><a class="header-anchor" href="#showtag" aria-hidden="true">#</a> showTag</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示标签，true表示显示</p>
</blockquote>
<h3 id="describe" tabindex="-1"><a class="header-anchor" href="#describe" aria-hidden="true">#</a> describe</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字符串数组或者对象数组，如果length为1，不会显示编号，一行展示</p>
<p>如果为对象数组，会以条状展示，属性有<code>name</code>,<code>score</code></p>
</blockquote>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>条状描述文字</p>
</blockquote>
<h3 id="score" tabindex="-1"><a class="header-anchor" href="#score" aria-hidden="true">#</a> score</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>条状展示值，最终会将其转化为百分数，表示条状长短</p>
</blockquote>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<h3 id="randomwallpaper" tabindex="-1"><a class="header-anchor" href="#randomwallpaper" aria-hidden="true">#</a> randomWallpaper</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>PC端，随机背景地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="randomwallpapermb" tabindex="-1"><a class="header-anchor" href="#randomwallpapermb" aria-hidden="true">#</a> randomWallpaperMb</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>手机端随机背景地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="homepageimgapi" tabindex="-1"><a class="header-anchor" href="#homepageimgapi" aria-hidden="true">#</a> homePageImgApi</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>首页文章列表封面图及文章页面，标签页面，说说页面，友情链接页面顶部图片(<code>顶部图片仅在customTopImg没有配置以及customTopImg ---&gt; custom: false情况下生效，否则顶部图片将使用自己设置的图片</code>)api接口</p>
<p>默认https://api.ixiaowai.cn/api/api.php</p>
</blockquote>
<h3 id="homewps" tabindex="-1"><a class="header-anchor" href="#homewps" aria-hidden="true">#</a> homeWps</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>PC端网站背景图片数组，从v1.3.2开始，移除使用随机图片接口作为背景图片，改用自己设置</p>
</blockquote>
<details class="custom-container details"><summary>配置</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token literal-property property">homeWps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'https://ooszy.cco.vin/img/blog-note/illust_74502138_20211008_183343.png'</span><span class="token punctuation">,</span>
                    <span class="token string">"https://picoss.cco.vin/animate/wall/404901.png"</span><span class="token punctuation">,</span>
                    <span class="token string">"https://picoss.cco.vin/animate/wall/734386.png"</span><span class="token punctuation">,</span>
                    <span class="token string">"https://picoss.cco.vin/animate/wall/5332.png"</span><span class="token punctuation">,</span>
                    <span class="token string">"https://picoss.cco.vin/animate/wall/6202.png"</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
<h3 id="homewpsmobile" tabindex="-1"><a class="header-anchor" href="#homewpsmobile" aria-hidden="true">#</a> homeWpsMobile</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>手机端网站背景图片</p>
</blockquote>
<details class="custom-container details"><summary>配置</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">homeWpsMobile</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"https://ooszy.cco.vin/img/blog-note/881770.jpg"</span><span class="token punctuation">,</span>
            <span class="token string">"https://ooszy.cco.vin/img/blog-note/109136.jpg"</span><span class="token punctuation">,</span>
            <span class="token string">"https://ooszy.cco.vin/img/blog-note/929842.jpg"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<h3 id="customtopimg" tabindex="-1"><a class="header-anchor" href="#customtopimg" aria-hidden="true">#</a> customTopImg</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>定制顶部图片,为null，将使用随机图片接口，默认为https://api.ixiaowai.cn/api/api.php</p>
</blockquote>
<details class="custom-container details"><summary>配置</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></details>
<h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> custom</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否定制顶部图片，为FALSE，将使用默认随机图片接口</p>
</blockquote>
<h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>文章顶部图片链接数组</p>
</blockquote>
<h3 id="friend" tabindex="-1"><a class="header-anchor" href="#friend" aria-hidden="true">#</a> friend</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>友情链接页面顶部图片数组</p>
</blockquote>
<h3 id="tag-1" tabindex="-1"><a class="header-anchor" href="#tag-1" aria-hidden="true">#</a> tag</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>标签页面顶部图片数组</p>
</blockquote>
<h3 id="mood-1" tabindex="-1"><a class="header-anchor" href="#mood-1" aria-hidden="true">#</a> mood</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>说说页面顶部图片数组</p>
</blockquote>
<h2 id="字体和颜色" tabindex="-1"><a class="header-anchor" href="#字体和颜色" aria-hidden="true">#</a> 字体和颜色</h2>
<h3 id="randomcolor" tabindex="-1"><a class="header-anchor" href="#randomcolor" aria-hidden="true">#</a> randomColor</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>随机颜色字符串数组，文章推荐，tag页面，关于页面条状背景色...，并不会控制字体颜色</p>
</blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">randomColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"#ffcad4"</span><span class="token punctuation">,</span> <span class="token string">"#d8e2dc"</span><span class="token punctuation">,</span> <span class="token string">"#8d99ae"</span><span class="token punctuation">,</span> <span class="token string">"#b8f2e6"</span><span class="token punctuation">,</span> <span class="token string">"#84c7d0"</span><span class="token punctuation">,</span> <span class="token string">"#aed9e0"</span><span class="token punctuation">,</span> <span class="token string">"#00b4d8"</span><span class="token punctuation">,</span>
            <span class="token string">"#caf0f8"</span><span class="token punctuation">,</span> <span class="token string">"#fbc4ab"</span><span class="token punctuation">,</span> <span class="token string">"#fdc5f5"</span><span class="token punctuation">,</span> <span class="token string">"#84dcc6"</span><span class="token punctuation">,</span> <span class="token string">"#a9def9"</span><span class="token punctuation">,</span> <span class="token string">"#fcf6bd"</span><span class="token punctuation">,</span> <span class="token string">"#f0a6ca"</span><span class="token punctuation">,</span>
            <span class="token string">"#b9faf8"</span><span class="token punctuation">,</span> <span class="token string">"#42a5f5"</span><span class="token punctuation">,</span> <span class="token string">"#ff9800"</span><span class="token punctuation">,</span> <span class="token string">"#b39ddb"</span><span class="token punctuation">,</span> <span class="token string">"#6d45bb"</span><span class="token punctuation">,</span> <span class="token string">"#b388ff"</span><span class="token punctuation">,</span> <span class="token string">"#1565c0"</span><span class="token punctuation">,</span>
            <span class="token string">"#26c6da"</span><span class="token punctuation">,</span> <span class="token string">"#5e548e"</span><span class="token punctuation">,</span> <span class="token string">"#90f1ef"</span><span class="token punctuation">,</span> <span class="token string">"#5b5f97"</span><span class="token punctuation">,</span> <span class="token string">"#bbe6e4"</span><span class="token punctuation">,</span> <span class="token string">"#42bfdd"</span><span class="token punctuation">,</span> <span class="token string">"#72ddf7"</span><span class="token punctuation">,</span>
            <span class="token string">"#8093f1"</span><span class="token punctuation">,</span> <span class="token string">"#9ed8d8"</span><span class="token punctuation">,</span> <span class="token string">"#7ea8be"</span><span class="token punctuation">,</span> <span class="token string">"#ef90b3"</span><span class="token punctuation">,</span> <span class="token string">"#b892ef"</span><span class="token punctuation">,</span> <span class="token string">"#c0b9dd"</span><span class="token punctuation">,</span> <span class="token string">"#c0d9dd"</span><span class="token punctuation">,</span>
            <span class="token string">"#75c9c8"</span><span class="token punctuation">,</span> <span class="token string">"#ded9e2"</span><span class="token punctuation">,</span> <span class="token string">"#b5e2fa"</span><span class="token punctuation">,</span> <span class="token string">"#62b6cb"</span><span class="token punctuation">,</span> <span class="token string">"#5fa8d3"</span><span class="token punctuation">,</span> <span class="token string">"#0fa3b1"</span><span class="token punctuation">,</span> <span class="token string">"#b5e2fa"</span><span class="token punctuation">,</span>
            <span class="token string">"#5fa8d3"</span><span class="token punctuation">,</span> <span class="token string">"#62b6cb"</span><span class="token punctuation">,</span> <span class="token string">"#b892ff"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
<h3 id="maxfontcolorarr" tabindex="-1"><a class="header-anchor" href="#maxfontcolorarr" aria-hidden="true">#</a> maxFontColorArr</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>圆角控制面板，切换颜色最大个数，也控制这字体最大个数</p>
</blockquote>
<h3 id="fontcolor" tabindex="-1"><a class="header-anchor" href="#fontcolor" aria-hidden="true">#</a> fontColor</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字体随机颜色字符串数组，请传入颜色值</p>
</blockquote>
<h3 id="fontfamily" tabindex="-1"><a class="header-anchor" href="#fontfamily" aria-hidden="true">#</a> fontFamily</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字体字符串数组</p>
</blockquote>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果想要使用自己新引入的字体，请在<code>docs/.vuepress/config.js ---&gt;head内引入自己的css样式 </code></p>
<p>然后在<code>fontFamily</code>数组中，加入引入的字体名称，如果字体文件太大的话，网站加载速度会受到影响</p>
</div>
<h2 id="友情链接" tabindex="-1"><a class="header-anchor" href="#友情链接" aria-hidden="true">#</a> 友情链接</h2>
<p><a href="https://aurora.xcye.xyz/config/page/friendlink.html#%E9%A1%B6%E9%83%A8%E5%9B%BE%E7%89%87">点击查看友情链接页面</a></p>
<h3 id="friendlinks-1" tabindex="-1"><a class="header-anchor" href="#friendlinks-1" aria-hidden="true">#</a> friendLinks</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>数组对象，所有友情链接在此处进行配置</p>
</blockquote>
<h3 id="title-1" tabindex="-1"><a class="header-anchor" href="#title-1" aria-hidden="true">#</a> title</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>标题</p>
</blockquote>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>朋友站点地址</p>
</blockquote>
<h3 id="logo-1" tabindex="-1"><a class="header-anchor" href="#logo-1" aria-hidden="true">#</a> logo</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>朋友站点logo图</p>
</blockquote>
<h3 id="describe-1" tabindex="-1"><a class="header-anchor" href="#describe-1" aria-hidden="true">#</a> describe</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>朋友站点描述</p>
</blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">friendLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//网站标题</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"XI溪"</span><span class="token punctuation">,</span>

                <span class="token comment">//站点链接</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://www.xiaoxuya.top"</span><span class="token punctuation">,</span>

                <span class="token comment">//站点logo</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://www.xiaoxuya.top/img/logo.png"</span><span class="token punctuation">,</span>

                <span class="token comment">//站点描述</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"人生若只是初见,何事秋风悲画扇"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"左眼会陪右眼哭の博客"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://qkongtao.cn/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"干嘛这么想不开，要在脸上贴个输字！"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"[ Blog We]"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/favicon.ico"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"博客大全-做最好的博客导航！"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"I Am I"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://5ime.cn"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Davinci的红茶馆"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://davincievans.top/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"You are all stardust."</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"皮皮凛の小窝"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://owomoe.net/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生~"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"月月月子喵"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe/css/images/logo_christmas.png"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"可爱的月子酱"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"疫情在线捐款系统"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://yq.vipblogs.cn/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"基于echarts的疫情捐款系统"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"疫情在线捐款系统后台登录"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://admin.vipblogs.cn/"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"该捐款系统后台登录"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div></details>
<h3 id="siteinformation-1" tabindex="-1"><a class="header-anchor" href="#siteinformation-1" aria-hidden="true">#</a> siteInformation</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>自己站点描述信息</p>
</blockquote>
<h4 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> url</h4>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>自己站点url</p>
</blockquote>
<h4 id="logo-2" tabindex="-1"><a class="header-anchor" href="#logo-2" aria-hidden="true">#</a> logo</h4>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>自己站点logo图片地址</p>
</blockquote>
<h4 id="describe-2" tabindex="-1"><a class="header-anchor" href="#describe-2" aria-hidden="true">#</a> describe</h4>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>自己站点描述信息</p>
</blockquote>
<h2 id="ico图标-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#ico图标-v1-3-2已移除" aria-hidden="true">#</a> ico图标(v1.3.2已移除)</h2>
<h3 id="ico" tabindex="-1"><a class="header-anchor" href="#ico" aria-hidden="true">#</a> ico</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>友情链接，关于页面，还有圆角控制面板ico图标地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="linkico" tabindex="-1"><a class="header-anchor" href="#linkico" aria-hidden="true">#</a> linkIco</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>友情链接图标地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<p>也就是这一坨</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210912210416750" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210912210416750.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="aboutico" tabindex="-1"><a class="header-anchor" href="#aboutico" aria-hidden="true">#</a> aboutIco</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>关于页面，图标地址</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="homewelcome-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#homewelcome-v1-3-2已移除" aria-hidden="true">#</a> homeWelcome(v1.3.2已移除)</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字符串数组，圆角，字体控制面板，背景切换和开启毛玻璃效果图标，源码中，是通过数组顺序进行使用的，传入时，请注意顺序</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210912210648219" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210912210648219.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2>
<p><a herf="https://aurora.xcye.xyz/config/page/tag.html#%E6%A0%87%E7%AD%BE">点击查看标签页面配置</a></p>
<h3 id="excludetag-1" tabindex="-1"><a class="header-anchor" href="#excludetag-1" aria-hidden="true">#</a> excludeTag</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字符串数组，标签中，需要排除的链接分割文字，如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

       <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">excludeTag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"note"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果有有一个文章url为<code>https://blog.cco.vin/note/spring/springboot.html</code>，那么在标签列表中，不会显示<code>note</code>，但会显示<code>spring</code></p>
</blockquote>
<h3 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h3>
<ul>
<li>String 如<code>~</code></li>
</ul>
<blockquote>
<p>tag页分割符</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210912212058062" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210912212058062.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h2>
<p><a href="https://aurora.xcye.xyz/config/#%E9%A1%B5%E8%84%9A">点击查看页脚配置</a></p>
<h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>字符串数组，页脚显示的HTML，支持传入HTML，对于首页，会选择数组中的第一个和第二个显示</p>
</blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"Copyright © by qsyyke All Rights Reserved."</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'>&lt;img src='' style='float:left;'/>&lt;p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>滇公网安备 53060202000142号&lt;/p>&lt;/a>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;a href='https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral'>本网站由&lt;img style='height: 24.1px;width: 55.3px;' src='https://ooszy.cco.vin/img/blog-note/%E5%8F%88%E6%8B%8D%E4%BA%91_logo5.png?x-oss-process=style/pictureProcess1'>提供CDN加速服务&lt;/a>"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<h3 id="isshowfooter" tabindex="-1"><a class="header-anchor" href="#isshowfooter" aria-hidden="true">#</a> isShowFooter</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示页脚，控制全局</p>
</blockquote>
<h3 id="isshowruntime" tabindex="-1"><a class="header-anchor" href="#isshowruntime" aria-hidden="true">#</a> isShowRunTime</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示运行时间</p>
</blockquote>
<h3 id="startruntime" tabindex="-1"><a class="header-anchor" href="#startruntime" aria-hidden="true">#</a> startRunTime</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>网站开始时间，请注意格式，如<code>8/7/2021 12:22:00</code></p>
</blockquote>
<h3 id="prefixruntime" tabindex="-1"><a class="header-anchor" href="#prefixruntime" aria-hidden="true">#</a> prefixRuntime</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>运行时间描述，如小破站已运行</p>
</blockquote>
<h3 id="keyrule" tabindex="-1"><a class="header-anchor" href="#keyrule" aria-hidden="true">#</a> keyRule</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>如果没有设置key值，那么就截取描述作为key，keyRule就是截取多少个字</p>
<p><code>v1.3.2已移除</code></p>
</blockquote>
<h3 id="isshowthemecopyright" tabindex="-1"><a class="header-anchor" href="#isshowthemecopyright" aria-hidden="true">#</a> isShowThemeCopyright</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示主题版权信息，默认显示，你可以设为false关闭(<code>小小心愿，此项能否保留(｀・ω・´)</code>)</p>
</blockquote>
<h2 id="广告-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#广告-v1-3-2已移除" aria-hidden="true">#</a> 广告(v1.3.2已移除)</h2>
<h3 id="message-1" tabindex="-1"><a class="header-anchor" href="#message-1" aria-hidden="true">#</a> message</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>广告文字描述，如目前博客还没开发评论，支持html</p>
</blockquote>
<h3 id="isshowmessage" tabindex="-1"><a class="header-anchor" href="#isshowmessage" aria-hidden="true">#</a> isShowMessage</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示广告，控制全局</p>
</blockquote>
<h2 id="广告-v1-3-2已移除-1" tabindex="-1"><a class="header-anchor" href="#广告-v1-3-2已移除-1" aria-hidden="true">#</a> 广告(v1.3.2已移除)</h2>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">adsenseArr</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token key atrule">position</span><span class="token punctuation">:</span> center<span class="token punctuation">,</span>
    <span class="token key atrule">adsenseMessage</span><span class="token punctuation">:</span> 官网用户专享3<span class="token punctuation">,</span>
    <span class="token key atrule">script</span><span class="token punctuation">:</span> &lt;a href="https<span class="token punctuation">:</span>//baidu.com"<span class="token punctuation">></span>这是中间3&lt;/a<span class="token punctuation">></span><span class="token punctuation">,</span>
    <span class="token key atrule">adsenseBackgroundImg</span><span class="token punctuation">:</span> /img/33.jpg<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token key atrule">insertAdsenseRule</span><span class="token punctuation">:</span> <span class="token number">17</span>
<span class="token comment">#每一页文章中，最大广告数</span>
<span class="token key atrule">adsenseLength</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="文章推荐" tabindex="-1"><a class="header-anchor" href="#文章推荐" aria-hidden="true">#</a> 文章推荐</h2>
<p><a href="https://aurora.xcye.xyz/config/feature/recommend.html#%E9%85%8D%E7%BD%AE">点击查看文章推荐配置</a></p>
<h3 id="recommendpagelength" tabindex="-1"><a class="header-anchor" href="#recommendpagelength" aria-hidden="true">#</a> recommendPageLength</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>文章推荐的最大个数，默认为30</p>
</blockquote>
<h3 id="recommendnotitle" tabindex="-1"><a class="header-anchor" href="#recommendnotitle" aria-hidden="true">#</a> recommendNoTitle</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>推荐列表标题为空时，就会使用这个进行代替，默认是<code>╮(￣▽￣)╭</code></p>
</blockquote>
<h3 id="tagnotitle" tabindex="-1"><a class="header-anchor" href="#tagnotitle" aria-hidden="true">#</a> tagNoTitle</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>tag页，没有标题时，代替文字 默认: <code>暂时还没有标题哟</code></p>
</blockquote>
<h2 id="打赏" tabindex="-1"><a class="header-anchor" href="#打赏" aria-hidden="true">#</a> 打赏</h2>
<p><a href="https://aurora.xcye.xyz/config/feature/donate.html#%E9%85%8D%E7%BD%AE">赞赏配置</a></p>
<h3 id="donate" tabindex="-1"><a class="header-anchor" href="#donate" aria-hidden="true">#</a> donate</h3>
<ul>
<li>Object</li>
</ul>
<blockquote></blockquote>
<h3 id="donateimg" tabindex="-1"><a class="header-anchor" href="#donateimg" aria-hidden="true">#</a> donateImg</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>赞赏付款二维码地址，推荐放置两张</p>
</blockquote>
<h3 id="articlepage" tabindex="-1"><a class="header-anchor" href="#articlepage" aria-hidden="true">#</a> articlePage</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>文章页面是否显示打赏</p>
</blockquote>
<h3 id="aboutpage" tabindex="-1"><a class="header-anchor" href="#aboutpage" aria-hidden="true">#</a> aboutPage</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>关于页面是否显示打赏</p>
</blockquote>
<h3 id="donateproduct" tabindex="-1"><a class="header-anchor" href="#donateproduct" aria-hidden="true">#</a> donateProduct</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>产品列表</p>
</blockquote>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210912212759510" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210912212759510.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1" aria-hidden="true">#</a> name</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>产品名</p>
</blockquote>
<h3 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> img</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>产品图片地址</p>
</blockquote>
<h3 id="price" tabindex="-1"><a class="header-anchor" href="#price" aria-hidden="true">#</a> price</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>价格</p>
</blockquote>
<h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>价格前缀，如<code>$,￥</code></p>
</blockquote>
<h3 id="onlinelist" tabindex="-1"><a class="header-anchor" href="#onlinelist" aria-hidden="true">#</a> onlineList</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示在线支付</p>
</blockquote>
<h3 id="donatelist" tabindex="-1"><a class="header-anchor" href="#donatelist" aria-hidden="true">#</a> donateList</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>对象数组，用户打赏列表</p>
</blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">donate</span><span class="token operator">:</span> <span class="token punctuation">{</span>

            <span class="token comment">//赞赏页面，支付二维码，推荐放置两张图片链接</span>
            <span class="token literal-property property">donateImg</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"https://ooszy.cco.vin/img/blog-public/wxpay.png"</span><span class="token punctuation">,</span>
                <span class="token string">"https://ooszy.cco.vin/img/blog-public/zfbpay.jpg"</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token comment">//是否在文章页面显示赞赏 默认显示</span>
            <span class="token literal-property property">articlePage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

            <span class="token comment">//是否在关于页面显示 默认显示</span>
            <span class="token literal-property property">aboutPage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

            <span class="token comment">//显示在赞赏页面的信息</span>
            <span class="token literal-property property">donateProduct</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//名字</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"奶茶"</span><span class="token punctuation">,</span>

                    <span class="token comment">//图片地址</span>
                    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/nc.jpeg"</span><span class="token punctuation">,</span>

                    <span class="token comment">//价格</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>

                    <span class="token comment">//前缀</span>
                    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"$"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"全味奶茶"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"￥"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token comment">//是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭</span>
            <span class="token literal-property property">onlineList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

            <span class="token comment">//用户赞赏列表数组</span>
            <span class="token literal-property property">donateList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//用户名</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"qsyyke"</span><span class="token punctuation">,</span>

                    <span class="token comment">//赞赏信息</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"文章写的非常好"</span><span class="token punctuation">,</span>

                    <span class="token comment">//用户头像</span>
                    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/nc.jpeg"</span><span class="token punctuation">,</span>

                    <span class="token comment">//打赏金额</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>

                    <span class="token comment">//金额前缀</span>
                    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"￥"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"初尘"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"主题太棒了"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/nc.jpeg"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"￥"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div></details>
<h2 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> 评论</h2>
<p><a herf="https://aurora.xcye.xyz/config/comment/">评论配置</a></p>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>评论相关配置</p>
</blockquote>
<h3 id="showcomment" tabindex="-1"><a class="header-anchor" href="#showcomment" aria-hidden="true">#</a> showComment</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示评论</p>
<p><code>控制全局</code></p>
</blockquote>
<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>评论区占位符 如在这里留下你的脚印吧...</p>
<p><code>v1.3.2使用Waline作为评论，已移除该项，后续版本会添加</code></p>
</blockquote>
<h3 id="appid-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#appid-v1-3-2已移除" aria-hidden="true">#</a> appId(v1.3.2已移除)</h3>
<ul>
<li>String</li>
</ul>
<h3 id="appkey-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#appkey-v1-3-2已移除" aria-hidden="true">#</a> appKey(v1.3.2已移除)</h3>
<ul>
<li>String</li>
</ul>
<h3 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar" aria-hidden="true">#</a> avatar</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>头像显示默认，请看相关配置<a href="https://waline.js.org/guide/client/avatar.html" target="_blank" rel="noopener noreferrer">头像配置 | Waline<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="pagesize-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#pagesize-v1-3-2已移除" aria-hidden="true">#</a> pageSize(v1.3.2已移除)</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>每页评论展示数目</p>
<p><code>后续版本会再次添加</code></p>
</blockquote>
<h3 id="visitor-v1-3-2已移除" tabindex="-1"><a class="header-anchor" href="#visitor-v1-3-2已移除" aria-hidden="true">#</a> visitor(v1.3.2已移除)</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否开启文章统计</p>
<p><code>v1.3.2已移除，后续版本会再次添加</code></p>
</blockquote>
<h3 id="recordip" tabindex="-1"><a class="header-anchor" href="#recordip" aria-hidden="true">#</a> recordIP</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否记录用户IP地址</p>
<p><code>v1.3.2已移除，后续版本会再次添加</code></p>
</blockquote>
<h3 id="adminusername" tabindex="-1"><a class="header-anchor" href="#adminusername" aria-hidden="true">#</a> adminUsername</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>管理员用户名</p>
<p><code>v1.3.2已移除，后续版本会再次添加</code></p>
</blockquote>
<p>设置之后，如果评论区的用户名中，存在此值，那么就会在用户名后面加上<code>UP</code>标识，但是这样也会存在一个问题，如果用户使用这个用户名评论或者恢复，那么也就相当于管理员回复，无后端不好控制</p>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">#评论配置</span>
<span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token key atrule">showComment</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
  <span class="token comment">#占位符</span>
  <span class="token key atrule">placeholder</span><span class="token punctuation">:</span> 在这里留下你的脚印吧<span class="token punctuation">...</span><span class="token punctuation">,</span>
  <span class="token key atrule">appId</span><span class="token punctuation">:</span> LwdW7EDeTGFUjTfUToF9WjEh<span class="token punctuation">-</span>gzGzoHsz<span class="token punctuation">,</span>
  <span class="token key atrule">appKey</span><span class="token punctuation">:</span> yGiWpb4TbwSz5ihpfloV1gDX<span class="token punctuation">,</span>
  <span class="token comment">#头像显示</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> robohash<span class="token punctuation">,</span>
  <span class="token comment"># 每页评论数量</span>
  <span class="token key atrule">pageSize</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token comment">#是否开启访问量</span>
  <span class="token key atrule">visitor</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
  <span class="token comment"># 是否记录评论者ip</span>
  <span class="token key atrule">recordIP</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
  <span class="token comment"># 是否自动获取用户qq头像，需根据qq号码</span>
  <span class="token key atrule">adminUsername</span><span class="token punctuation">:</span> qsyyke
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details>
<h3 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>serverURL地址，请点击进行评论相关配置</p>
<p><a href="https://waline.js.org/guide/get-started.html#html-%E5%BC%95%E5%85%A5-%E5%AE%A2%E6%88%B7%E7%AB%AF" target="_blank" rel="noopener noreferrer">快速上手 | Waline<ExternalLinkIcon/></a></p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>当在Waline官网配置完成之后，请将<code>serverURL</code>添加至此</p>
</div>
<h3 id="emojis" tabindex="-1"><a class="header-anchor" href="#emojis" aria-hidden="true">#</a> emojis</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p><a href="https://waline.js.org/guide/client/emoji.html#%E9%A2%84%E8%AE%BE" target="_blank" rel="noopener noreferrer">自定义表情 | Waline<ExternalLinkIcon/></a></p>
<p>主题默认加入哔哩哔哩表情，不推荐设置太多，<code>v1.3.2在此处存在一个bug，设置表情太多，选择表情的时候，会将表情做放大处理</code></p>
</blockquote>
<h2 id="海报" tabindex="-1"><a class="header-anchor" href="#海报" aria-hidden="true">#</a> 海报</h2>
<h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>海报相关配置</p>
</blockquote>
<h3 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1" aria-hidden="true">#</a> description</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>海报底部博客描述</p>
</blockquote>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>作者</p>
</blockquote>
<h3 id="preblog" tabindex="-1"><a class="header-anchor" href="#preblog" aria-hidden="true">#</a> preBlog</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>博客前缀</p>
</blockquote>
<h3 id="suffixblog" tabindex="-1"><a class="header-anchor" href="#suffixblog" aria-hidden="true">#</a> suffixBlog</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>博客后缀</p>
</blockquote>
<h3 id="avatar-1" tabindex="-1"><a class="header-anchor" href="#avatar-1" aria-hidden="true">#</a> avatar</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>头像，推荐奖此头像放入<code>docs/.vuepress/public</code>下，否则可能会出现跨域问题</p>
</blockquote>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//博客描述</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"I do not follow,i lives is always all you want"</span><span class="token punctuation">,</span>

            <span class="token comment">//作者</span>
            <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">"qsyyke"</span><span class="token punctuation">,</span>

            <span class="token comment">//博客前缀</span>
            <span class="token literal-property property">preBlog</span><span class="token operator">:</span> <span class="token string">"qsyyke"</span><span class="token punctuation">,</span>

            <span class="token comment">//海报博客名称后缀</span>
            <span class="token literal-property property">suffixBlog</span><span class="token operator">:</span> <span class="token string">"のblog'"</span><span class="token punctuation">,</span>

            <span class="token comment">//头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示</span>
            <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">"/avatar.png"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210912214810565" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210912214810565.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="postimgapi" tabindex="-1"><a class="header-anchor" href="#postimgapi" aria-hidden="true">#</a> postImgApi</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域</p>
</blockquote>
<h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2>
<h3 id="sidebartag" tabindex="-1"><a class="header-anchor" href="#sidebartag" aria-hidden="true">#</a> sidebarTag</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>侧边栏标签部分是显示分类，还是标签，默认是显示分类</p>
</blockquote>
<p><code>sidebarTag: &quot;tag&quot;</code> 显示分类</p>
<p><code>sidebarTag: &quot;categories&quot;</code> 显示标签</p>
<h3 id="mobilecuttext" tabindex="-1"><a class="header-anchor" href="#mobilecuttext" aria-hidden="true">#</a> mobileCutText</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>手机端侧边栏文字</p>
</blockquote>
<details class="custom-container details"><summary>点击查看详情</summary>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211011134928958.png?x-oss-process=style/pictureProcess1" alt="image-20211011134928958" style="zoom:50%;" />
</details>
<h3 id="sidebarcataloglevel" tabindex="-1"><a class="header-anchor" href="#sidebarcataloglevel" aria-hidden="true">#</a> sidebarCatalogLevel</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>自动生成文章侧边栏等级</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>假如一文件夹如<code>docs/home/config/note.md</code></p>
<p>此<code>sidebarCatalogLevel: 1</code>，那么在浏览器中打开<code>localhost:8080/home/config/note.html</code>时，将只会为<code>config</code>文件夹内的md文件生成侧边栏，</p>
<p>如果<code>sidebarCatalogLevel: 2</code>，那么会为<code>home</code>和<code>config</code>文件夹内的md文件，自动生成侧边栏</p>
<p>不推荐此值太大，不然文章侧边栏数量太多，不美观</p>
</div>
<h3 id="latestpagesize" tabindex="-1"><a class="header-anchor" href="#latestpagesize" aria-hidden="true">#</a> latestPageSize</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>首页侧边栏最新文章的数量，推荐值为6</p>
</blockquote>
<h3 id="githuburl" tabindex="-1"><a class="header-anchor" href="#githuburl" aria-hidden="true">#</a> githubUrl</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>侧边栏Github链接</p>
</blockquote>
<h3 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h3>
<ul>
<li>Number</li>
</ul>
<blockquote>
<p>首页文章列表数目，默认为4</p>
</blockquote>
<h3 id="showmoodedit-1" tabindex="-1"><a class="header-anchor" href="#showmoodedit-1" aria-hidden="true">#</a> showMoodEdit</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue</p>
</blockquote>
<h3 id="showonlinemood-1" tabindex="-1"><a class="header-anchor" href="#showonlinemood-1" aria-hidden="true">#</a> showOnlineMood</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue</p>
</blockquote>
<h3 id="mobilepagesidebar" tabindex="-1"><a class="header-anchor" href="#mobilepagesidebar" aria-hidden="true">#</a> mobilePageSidebar</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE</p>
</blockquote>
<h2 id="额外功能" tabindex="-1"><a class="header-anchor" href="#额外功能" aria-hidden="true">#</a> 额外功能</h2>
<h3 id="showaddmood" tabindex="-1"><a class="header-anchor" href="#showaddmood" aria-hidden="true">#</a> showAddMood</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否显示在线增加说说功能，目前只能我自己使用，在后续版本中，会进行更改</p>
</blockquote>
</template>
