<template><h1 id="vuepress-plugin-coze" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-coze" aria-hidden="true">#</a> Vuepress-plugin-coze</h1>
<h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> introduce</h2>
<p>这是Vuepress2的一个插件，该插件提供在线发布，修改说说，相册功能，支持文件上传，登录注册，点赞，评论等，使用简单，只需在<a href="https://console.leancloud.app/" target="_blank" rel="noopener noreferrer">leancloud<ExternalLinkIcon/></a>中获取到正确的<code>appId</code>,<code>appKey</code>便可以在任何地方使用</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<blockquote>
<p>因为该插件是基于Vuepress2的，所以在使用该插件之前，请确保你使用的版本为<code>Vuepress2</code></p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-coze
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">'vuepress-plugin-coze'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'leanCloud中得到的appId'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">'leanCloud中得到的appKey'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">masterKey</span><span class="token operator">:</span> <span class="token string">'leanCloud中得到的masterKey'</span><span class="token punctuation">,</span>
            <span class="token comment">//下面这些是可选的</span>
            <span class="token literal-property property">avatarPath</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/avatar-aurora.png'</span><span class="token punctuation">,</span><span class="token comment">//说说头像url</span>
            <span class="token literal-property property">registerPath</span><span class="token operator">:</span> <span class="token string">'/aurora-register'</span><span class="token punctuation">,</span> <span class="token comment">//自定义插件默认提供的注册页面路由，请在前面加上/</span>
            <span class="token literal-property property">onlyAdministrator</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//是否运行其他注册的用户发布说说，true表示只有管理员可以发布</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>运行你的vuepress应用，待启动完成之后，分别访问<code>/aurora-register</code>和<code>/aurora-coze</code>进行用户注册和说说展示</p>
</blockquote>
<h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2>
<ul>
<li>说说展示(<code>此效果在我主题中</code>)</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108190928615" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108190928615.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>发布说说界面</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108191227820" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108191227820.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>相册</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211110233924959" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211110233924959.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>
<p>提供的注册界面</p>
<blockquote>
<p>此界面是该插件自动提供的，并且插件也提供了一个没有任何样式的全局组件，你可以自己进行css编写</p>
</blockquote>
</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108191311008" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108191311008.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<ul>
<li>
<p>点赞，评论，编写</p>
<blockquote>
<p>因为时间问题，目前说说评论暂未实现</p>
</blockquote>
</li>
</ul>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108191613515" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108191613515.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>如果你在使用该插件及<a href="https://aurora.xcye.xyz" target="_blank" rel="noopener noreferrer">Aurora主题<ExternalLinkIcon/></a>的过程中，有任何的问题，都可以通过以下方式联系我</p>
<table>
<thead>
<tr>
<th>QQ</th>
<th>主题交流群</th>
<th>微信</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1" style="zoom:33%;" /></td>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1" alt="image-20211024233827133" style="zoom:33%;" /></td>
<td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1" alt="image-20211024233735110" style="zoom: 39%;" /></td>
</tr>
</tbody>
</table>
<h2 id="用户注册" tabindex="-1"><a class="header-anchor" href="#用户注册" aria-hidden="true">#</a> 用户注册</h2>
<h3 id="秘钥获取" tabindex="-1"><a class="header-anchor" href="#秘钥获取" aria-hidden="true">#</a> 秘钥获取</h3>
<p>该插件的说说存储于<code>leancloud</code>,进入<a href="https://console.leancloud.app/" target="_blank" rel="noopener noreferrer">leanCloud国际版<ExternalLinkIcon/></a>(<code>一定要使用国际版，国内版我没测试过</code>)，你如果没有<code>leanCloud</code>账户的话，需要先创建一个有效账户，</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192136530" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192136530.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192241757" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192241757.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192330231" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192330231.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192405575" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192405575.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192519797" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192519797.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108192639202" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108192639202.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h3>
<table>
<thead>
<tr>
<th>路由</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>/aurora-register</td>
<td>注册用户，登出操作</td>
</tr>
<tr>
<td>/aurora-coze</td>
<td>说说默认展示页面</td>
</tr>
</tbody>
</table>
<blockquote>
<p><code>/aurora-register</code>是默认注册用户，登出操作页面的路由，如果你在插件配置中设置了<code>registerPath</code>值，那么注册，登出的路由将是<code>registerPath</code>对应值</p>
</blockquote>
<p>现在访问<code>/aurora-register</code>路由，注册用户(<code>第一个注册的用户，默认为管理员</code>)，你将看到下面页面</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108193700352" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108193700352.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>输入正确信息点击注册</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108193812105" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108193812105.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>现在访问<code>/aurora-coze</code>页面</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211108193856216" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211108193856216.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>恭喜你，设置成功</p>
<h2 id="主题中展示说说" tabindex="-1"><a class="header-anchor" href="#主题中展示说说" aria-hidden="true">#</a> 主题中展示说说</h2>
<p>如果你设置成功，那么便可以将<code>CozeMood</code>组件放在你主题中的任何位置，这是插件注册的全局组件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CozeMood</span> <span class="token attr-name">@coze-success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cozeSuccess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="插件配置信息" tabindex="-1"><a class="header-anchor" href="#插件配置信息" aria-hidden="true">#</a> 插件配置信息</h2>
<p><a href="https://aurora.xcye.xyz/plugin/coze/config.html" target="_blank" rel="noopener noreferrer">插件配置信息<ExternalLinkIcon/></a></p>
</template>
