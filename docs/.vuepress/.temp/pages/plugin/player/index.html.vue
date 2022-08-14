<template><h1 id="vuepress-plugin-player" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-player" aria-hidden="true">#</a> vuepress-plugin-player</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这个vuepress2的一个播放器插件，能够在你网站中播放音乐，目前除了支持本地音乐之外，还支持网易云平台的音乐，你可以播放网易云平台中的歌单，或者是某一首或者几首单曲</p>
<blockquote>
<p>如果你需要播放网易云平台的歌曲，因为有些歌曲是需要会员才能够播放的，所以你如果需要播放某一个歌单(<code>假设此歌单含有100首音乐</code>)或者某几首歌，那么最终可能只能播放20,30,40...首?，因为所有歌曲的链接都是通过请求官方api获取的，所以对于那些需要会员或者付费的歌曲，并不能获取到此歌曲的mp3地址，也就播放不了(<code>但是你可以将这首歌下载到本地，然后使用本地歌曲就可以了</code>)</p>
</blockquote>
<blockquote>
<p>如果你需要播放网易云歌单中的歌曲，需要登录才能够播放</p>
</blockquote>
</div>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-player
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vuepress/utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//在这里配置插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">'player'</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//网易云单个歌单id</span>
                <span class="token literal-property property">songIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'29723011'</span><span class="token punctuation">,</span><span class="token string">'1887893189'</span><span class="token punctuation">,</span><span class="token string">'1421069053'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">//网易云歌单</span>
                <span class="token literal-property property">playlist</span><span class="token operator">:</span> <span class="token string">'2410215112'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showPlaylist</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">//是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接</span>
                <span class="token literal-property property">disabledNetEaseMusic</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//请求接口的baseURL</span>
                <span class="token literal-property property">serverUrl</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>

                <span class="token comment">//本地歌曲</span>
                <span class="token literal-property property">localSongs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">coverUrl</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-public/avatar.jpg'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">songs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/song/1.mp3'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">songName</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/Rg1x9LeUacIDqtvUzL35Cw==/109951163688517312.jpg'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'http://m7.music.126.net/20211120155029/f99e2fe5f557455fd37b7bfd0c0d6c3e/ymusic/545a/005e/025f/c03ab3077e74b9d50e07557d82ca472b.flac'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">songName</span><span class="token operator">:</span> <span class="token string">'23'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/song/3.mp3'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">songName</span><span class="token operator">:</span> <span class="token string">'34'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<h3 id="songids" tabindex="-1"><a class="header-anchor" href="#songids" aria-hidden="true">#</a> songIds</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>网易云歌曲的id，如</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>songIds: ['29723011','1887893189','1421069053']
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<h3 id="playlist" tabindex="-1"><a class="header-anchor" href="#playlist" aria-hidden="true">#</a> playlist</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>网易云歌单id，只有开启播放歌单才有效<code>showPlaylist: true</code></p>
<p>如<code>playlist: '2410215112'</code></p>
</blockquote>
<h3 id="showplaylist" tabindex="-1"><a class="header-anchor" href="#showplaylist" aria-hidden="true">#</a> showPlaylist</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否开启播放的歌曲来源于网易云歌单，使用歌单中的歌曲和<code>songIds</code>配置的单曲，只能二选一，在<a href="#disabledNetEaseMusic">disabledNetEaseMusic</a>开启情况下</p>
<p>如<code>showPlaylist: true</code></p>
</blockquote>
<h3 id="disabledneteasemusic" tabindex="-1"><a class="header-anchor" href="#disabledneteasemusic" aria-hidden="true">#</a> disabledNetEaseMusic</h3>
<ul>
<li>Boolean</li>
</ul>
<blockquote>
<p>是否禁用网易云</p>
<p>如果你禁用，那么就会播放配置的本地歌曲，而不会使用网易云平台的歌曲，推荐使用这个选项，默认是关闭的，也就是使用网易云</p>
<p>如<code>disabledNetEaseMusic: true</code></p>
</blockquote>
<h3 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverUrl</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>向网易云请求数据时的接口，默认使用我的，你也可以自己传入你的，详细使用，请看<RouterLink to="/plugin/player/serverUrl.html">serverUrl配置</RouterLink></p>
<p>如<code>serverUrl: 'https://netease-cloud-music-api-teal-psi.vercel.app/'</code></p>
</blockquote>
<h3 id="localsongs" tabindex="-1"><a class="header-anchor" href="#localsongs" aria-hidden="true">#</a> localSongs</h3>
<ul>
<li>Object</li>
</ul>
<blockquote>
<p>本地歌曲配置</p>
</blockquote>
<details class="custom-container details"><summary>点击查看配置</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>localSongs<span class="token operator">:</span> <span class="token punctuation">{</span>
    coverUrl<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//ooszy.cco.vin/img/blog-public/avatar.jpg',</span>
    songs<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> '/song/<span class="token number">1</span>.mp3'<span class="token punctuation">,</span>
            songName<span class="token operator">:</span> '<span class="token number">12</span>'<span class="token punctuation">,</span>
            cover<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//p1.music.126.net/Rg1x9LeUacIDqtvUzL35Cw==/109951163688517312.jpg'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> 'http<span class="token operator">:</span><span class="token comment">//m7.music.126.net/20211120155029/f99e2fe5f557455fd37b7bfd0c0d6c3e/ymusic/545a/005e/025f/c03ab3077e74b9d50e07557d82ca472b.flac',</span>
            songName<span class="token operator">:</span> '<span class="token number">23</span>'<span class="token punctuation">,</span>
            cover<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> '/song/<span class="token number">3</span>.mp3'<span class="token punctuation">,</span>
            songName<span class="token operator">:</span> '<span class="token number">34</span>'
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details>
<h3 id="coverurl" tabindex="-1"><a class="header-anchor" href="#coverurl" aria-hidden="true">#</a> coverUrl</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>所有的歌曲封面，如果你使用本地歌曲，对于一些歌曲或者你需要配置的本地歌曲很多，你不想单独的为每一首歌曲指定封面图，那么你可以配置此项，当那首歌没有配置封面的时候，就会使用该项配置的图片url作为封面图</p>
</blockquote>
<details class="custom-container details"><summary>点击查看总封面配置</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>localSongs<span class="token operator">:</span> <span class="token punctuation">{</span>
    coverUrl<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//ooszy.cco.vin/img/blog-public/avatar.jpg',</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h3 id="songs" tabindex="-1"><a class="header-anchor" href="#songs" aria-hidden="true">#</a> songs</h3>
<ul>
<li>Array</li>
</ul>
<blockquote>
<p>本地歌曲集合</p>
</blockquote>
<details class="custom-container details"><summary>点击查看本地歌曲配置</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">songs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//放在docs/.vuepress/public/song目录里下的1.mp3文件</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/song/1.mp3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">songName</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/Rg1x9LeUacIDqtvUzL35Cw==/109951163688517312.jpg'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//使用网络上的mp3url</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'http://m7.music.126.net/20211120155029/f99e2fe5f557455fd37b7bfd0c0d6c3e/ymusic/545a/005e/025f/c03ab3077e74b9d50e07557d82ca472b.flac'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">songName</span><span class="token operator">:</span> <span class="token string">'23'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>本地歌曲的路径url，<code>你也可以传入网络中某个mp3的url地址</code>，如果此歌曲你已经下载下来了，那么请放在<code>docs/.vuepress/public</code>静态目录中</p>
</blockquote>
<h3 id="songname" tabindex="-1"><a class="header-anchor" href="#songname" aria-hidden="true">#</a> songName</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>歌曲名称</p>
</blockquote>
<h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> cover</h3>
<ul>
<li>String</li>
</ul>
<blockquote>
<p>单独为这首歌配置封面图</p>
</blockquote>
<p><RouterLink to="/plugin/player/serverUrl.html">点击查看serverUrl配置</RouterLink></p>
</template>
