<template><h1 id="注册组件" tabindex="-1"><a class="header-anchor" href="#注册组件" aria-hidden="true">#</a> 注册组件</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在v1.4.2版本中，你可以自己增加新的页面，通过url进行访问，使用方法如下</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在v1.4.2版本中，主题新增了一个全局组件，在这个组件中，默认只保留了导航栏，手机端侧边栏，样式菜单，背景图片，并且你可以通过传入<code>props</code>属性，不展示他们</p>
<p>默认的内容如下</p>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211021224708201.png?x-oss-process=style/pictureProcess1" alt="image-20211021224708201" style="zoom:50%;" />
<p>或者你什么都不要，完全按照你想要的进行布局</p>
<img src="https://ooszy.cco.vin/img/blog-note/image-20211021224804290.png?x-oss-process=style/pictureProcess1" alt="image-20211021224804290" style="zoom:50%;" />
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>使用步骤</p>
<ul>
<li>
<p>在<code>docs/.vuepress</code>文件夹内，任意位置，创建一个<code>.vue</code>文件，推荐创建一个单独文件夹，用来保存这些组件</p>
</li>
<li>
<p>在<code>docs/.vuepress</code>目录下，新建<code>clientAppEnhance.js</code>文件，文件的内容如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li><code>app</code> 是由 <a href="https://v3.cn.vuejs.org/api/application-api.html" target="_blank" rel="noopener noreferrer">createApp<ExternalLinkIcon/></a> 创建的 Vue 应用实例。</li>
<li><code>router</code> 是由 <a href="https://next.router.vuejs.org/zh/api/index.html#createrouter" target="_blank" rel="noopener noreferrer">createRouter<ExternalLinkIcon/></a> 创建的路由实例。</li>
<li><code>siteData</code> 是一个根据用户配置生成的对象，包含 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base<ExternalLinkIcon/></a>, <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#lang" target="_blank" rel="noopener noreferrer">lang<ExternalLinkIcon/></a>, <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#title" target="_blank" rel="noopener noreferrer">title<ExternalLinkIcon/></a>, <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description" target="_blank" rel="noopener noreferrer">description<ExternalLinkIcon/></a>, <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#head" target="_blank" rel="noopener noreferrer">head<ExternalLinkIcon/></a> 和 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#locales" target="_blank" rel="noopener noreferrer">locales<ExternalLinkIcon/></a>。</li>
</ul>
<p>Client App Enhance 会在客户端应用创建后被调用，它可以为 Vue 应用添加任意功能。</p>
<p>详细介绍，可以查看官方说明https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-app-enhance.html</p>
</div>
</li>
</ul>
<p>​		:::</p>
<ul>
<li>
<p>你现在就可以在此<code>clientAppEnhance.js</code>文件中，注册组件，或者是进行其他的操作，在此文件中，如果你在此文件中，注册了一个组件，那么这个组件是一个全局组件，你可以在<code>.md</code>文件中，直接使用该组件(<code>vuepress框架，会先将.md文件解析成.vue文件，然后再是.html</code>)</p>
</li>
<li>
<p>在<code>docs/</code>目录下，新建一个<code>.md</code>，在此文件中，写入下面frontmatter</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> Aurora <span class="token comment">#你刚才注册的组件 Aurora.vue</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>如果你在<code>.md</code>文件中，写入上面frontmatter，那么这个md文件，将使用<code>Aurora</code>作为布局，尽管此md文件中，还存在其他的内容，都会被清空</p>
</blockquote>
</li>
<li>
<p>然后现在你就可以在<code>Aurora.vue</code>中，进行任意的布局了</p>
</li>
</ul>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<p>下面是一个简单的案例</p>
<blockquote>
<p><code>创建组件</code></p>
</blockquote>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--docs/.vuepress/components/Aurora.vue--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aurora-global</span> <span class="token attr-name">:show-bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-style-menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-navbar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#top</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 0 auto</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>注册组件测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#center</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30rem<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 30rem<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> plum<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 0 auto</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#bottom</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aurora-footer</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aurora-global</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mycom"</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote>
<p>注册全局组件</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//clientAppEnhance.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Aurora <span class="token keyword">from</span> <span class="token string">'./components/Aurora'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"Aurora"</span><span class="token punctuation">,</span>Aurora<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote>
<p>新建<code>docs/register.md</code>文件，并指定<code>layout</code></p>
</blockquote>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> Aurora</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>因为<code>docs/</code>目录下的md文件，会自动解析成<code>.html</code>，你可以直接在浏览器中进行访问，<code>localhost:8080/register.html</code></p>
<p>结果</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021230635363" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021230635363.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>接下来，其他的事情，就交给你进行创造了</p>
</div>
<h2 id="auroraglobal-vue" tabindex="-1"><a class="header-anchor" href="#auroraglobal-vue" aria-hidden="true">#</a> AuroraGlobal.vue</h2>
<p>此组件是一个全局组件，组件的内容如下</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>common<span class="token punctuation">"</span></span>
       <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.state.borderRadiusStyle +
       $store.state.opacityStyle + $store.state.fontColorStyle +
       $store.state.fontFamilyStyle + $store.state.filterBlurStyle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navbar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar-single-enter-animate<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.state.opacityStyle<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showNavbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#before</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#after</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-after<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Navbar</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mobile-sidebar</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMobileSidebar<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>social-spin</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showStyleMenu<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style-menu</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showStyleMenu<span class="token punctuation">"</span></span>
        <span class="token attr-name">:theme-property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>themeProperty<span class="token punctuation">"</span></span>
        <span class="token attr-name">@setIsFitter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setIsFitter<span class="token punctuation">"</span></span>
        <span class="token attr-name">@setBodyStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getBodyStyle<span class="token punctuation">"</span></span>
        <span class="token attr-name">@setBodyWallpaper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setBodyWallpaper<span class="token punctuation">"</span></span>
        <span class="token attr-name">:is-show-ico</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">custom-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-about<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token style"><span class="token language-css">
    &lt;slot name=<span class="token string">"top"</span>>&lt;/slot>
    &lt;slot name=<span class="token string">"center"</span>>&lt;/slot>
    &lt;slot name=<span class="token string">"bottom"</span>>&lt;/slot>
    &lt;div id=<span class="token string">"set-bg"</span>
         v-if=<span class="token string">"showBg"</span>
         <span class="token punctuation">:</span>class=<span class="token string">"{'set-bg-fitter': $store.state.isFitter}"</span>
         <span class="token punctuation">:</span>style="<span class="token string">'--opacity: '</span> + $store.state.varOpacity +
         <span class="token string">'; --fitter-blue: '</span> + $store.state.varFilterBlur +
         <span class="token string">'px; --borderRadius: '</span> + $store.state.varBorderRadius +
         <span class="token string">'px; --backgroundImageUrl: url('</span> + $store.state.homeWps + <span class="token string">')'</span>"
    >&lt;/div>
  &lt;/div>

&lt;/template>
&lt;script lang=<span class="token string">"ts"</span>>

//组件导入
import StyleMenu from <span class="token string">'../child/home/StyleMenu.vue'</span>
import Navbar from <span class="token string">'../../components/Navbar.vue'</span>
import Home from <span class="token string">'../Home'</span>
import MobileSidebar from <span class="token string">"../child/side/MobileSidebar.vue"</span><span class="token punctuation">;</span>
<span class="token selector">import SocialSpin from '../SocialSpin'

//配置导入
import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> Transition<span class="token punctuation">,</span><span class="token punctuation">}</span> <span class="token selector">from 'vue'
import</span> <span class="token punctuation">{</span>usePageData<span class="token punctuation">,</span> usePageFrontmatter<span class="token punctuation">}</span> from <span class="token string">'@vuepress/client'</span>
<span class="token selector">import type</span> <span class="token punctuation">{</span>DefaultThemePageFrontmatter<span class="token punctuation">}</span> <span class="token selector">from '../../../shared'
import</span> <span class="token punctuation">{</span>useThemeData<span class="token punctuation">,</span> useThemeLocaleData<span class="token punctuation">}</span> from <span class="token string">'../../composables'</span>
import EasyTyper from <span class="token string">"easy-typer-js"</span><span class="token punctuation">;</span>
<span class="token selector">import $ from 'jquery'

export default defineComponent(</span><span class="token punctuation">{</span>
  <span class="token selector">name: 'Common',
  components:</span> <span class="token punctuation">{</span>
    SocialSpin<span class="token punctuation">,</span>
    Navbar<span class="token punctuation">,</span>
    Transition<span class="token punctuation">,</span>
    StyleMenu<span class="token punctuation">,</span>
    Home<span class="token punctuation">,</span>
    MobileSidebar<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token selector">,
  props:</span> <span class="token punctuation">{</span>
    <span class="token selector">showBg:</span> <span class="token punctuation">{</span>
      <span class="token selector">type: Boolean,
      default()</span> <span class="token punctuation">{</span>
        return true
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">,
    showStyleMenu:</span> <span class="token punctuation">{</span>
      <span class="token selector">type: Boolean,
      default()</span> <span class="token punctuation">{</span>
        return true
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">,
    showNavbar:</span> <span class="token punctuation">{</span>
      <span class="token selector">type: Boolean,
      default()</span> <span class="token punctuation">{</span>
        return true
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">,
    showMobileSidebar:</span> <span class="token punctuation">{</span>
      <span class="token selector">type: Boolean,
      default()</span> <span class="token punctuation">{</span>
        return true
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token selector">,
  data()</span> <span class="token punctuation">{</span>
    <span class="token selector">return</span> <span class="token punctuation">{</span>
      <span class="token property">sidebarRowVar</span><span class="token punctuation">:</span> 5<span class="token punctuation">,</span>
      <span class="token property">colorStyle</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token property">fontStyle</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token property">isShowFooter</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token property">colorFontStyle</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token property">isFitter</span><span class="token punctuation">:</span> false<span class="token punctuation">,</span>
      <span class="token property">themeProperty</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      //首页壁纸数组
      <span class="token property">homeWps</span><span class="token punctuation">:</span> []<span class="token punctuation">,</span>
      <span class="token property">mobilePageSidebar</span><span class="token punctuation">:</span> true
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token selector">,
  computed:</span> <span class="token punctuation">{</span>
    <span class="token selector">setBodyStyle()</span> <span class="token punctuation">{</span>
      <span class="token selector">if (this.fontStyle === "")</span> <span class="token punctuation">{</span>
        return <span class="token string">""</span>
      <span class="token punctuation">}</span>
      return this.$store.state.fontColorStyle + <span class="token string">";"</span>+ this.$store.state.fontFamilyStyle
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token selector">,
  methods:</span> <span class="token punctuation">{</span>
    <span class="token selector">getBodyStyle()</span> <span class="token punctuation">{</span>
      <span class="token selector">let fontColorStyle = this.$store.state.fontColorStyle
      let fontFamilyStyle = this.$store.state.fontFamilyStyle

      if (fontColorStyle === undefined)</span> <span class="token punctuation">{</span>
        this.colorStyle = <span class="token string">'--fontColor: ""'</span>
      <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
        this.colorStyle = fontColorStyle
      <span class="token punctuation">}</span>
      <span class="token selector">if (fontFamilyStyle === undefined)</span> <span class="token punctuation">{</span>
        this.fontStyle = <span class="token string">'--fontFamily: ""'</span>
      <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
        this.fontStyle = fontFamilyStyle
      <span class="token punctuation">}</span>

      this.colorFontStyle = this.colorStyle + <span class="token string">" "</span>+ this.fontStyle
    <span class="token punctuation">}</span><span class="token selector">,
    setBodyWallpaper()</span> <span class="token punctuation">{</span>
      <span class="token selector">//切换首页壁纸
      if (this.homeWps.length === 1)</span> <span class="token punctuation">{</span>
        <span class="token selector">this.$store.commit("setHomeWps",</span><span class="token punctuation">{</span>
          <span class="token property">homeWps</span><span class="token punctuation">:</span> this.homeWps[0]
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        return
      <span class="token punctuation">}</span>

      for <span class="token punctuation">(</span>let i = 0<span class="token punctuation">;</span> i &lt; this.homeWps.length<span class="token punctuation">;</span> <span class="token selector">i++)</span> <span class="token punctuation">{</span>
        <span class="token selector">if (this.$store.state.homeWps.search(this.homeWps[i]) !== -1)</span> <span class="token punctuation">{</span>
          <span class="token selector">if (i === this.homeWps.length -1)</span> <span class="token punctuation">{</span>
            <span class="token selector">this.$store.commit("setHomeWps",</span><span class="token punctuation">{</span>
              <span class="token property">homeWps</span><span class="token punctuation">:</span> this.homeWps[0]
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            return<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
            <span class="token selector">this.$store.commit("setHomeWps",</span><span class="token punctuation">{</span>
              <span class="token property">homeWps</span><span class="token punctuation">:</span> this.homeWps[i + 1]
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            return<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">,
    setIsFitter(isFitter)</span> <span class="token punctuation">{</span>
      this.isFitter = isFitter
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token selector">,
  setup()</span> <span class="token punctuation">{</span>
    <span class="token selector">const page = usePageData()
    const frontmatter = usePageFrontmatter&lt;DefaultThemePageFrontmatter>()
    const themeLocale = useThemeLocaleData()

    // navbar
    const shouldShowNavbar = computed(
        () =>
            frontmatter.value.navbar !== false &amp;&amp; themeLocale.value.navbar !== false
    )

    return</span> <span class="token punctuation">{</span>
      themeLocale<span class="token punctuation">,</span>
      frontmatter<span class="token punctuation">,</span>
      page<span class="token punctuation">,</span>
      shouldShowNavbar<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token selector">,
  created()</span> <span class="token punctuation">{</span>
    <span class="token selector">if (this.$store.state.printRightIndex === 0)</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"%c vuepress-theme-Aurora %c by qsyyke"</span><span class="token punctuation">,</span><span class="token string">"font-weight: bold;color: white;display: inline-block;text-align: center;height: 1.5rem;line-height: 1.5rem;background-color: rgba(255,202,212,.8);padding: 10px;border-bottom-left-radius: 13px;border-top-left-radius: 13px;"</span><span class="token punctuation">,</span><span class="token string">"font-weight: bold;color: white;display: inline-block;text-align: center;height: 1.5rem;line-height: 1.5rem;background-color: rgba(178,247,239,.85);padding: 10px;border-bottom-right-radius: 13px;border-top-right-radius: 13px;"</span><span class="token punctuation">)</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"%c Version %c "</span>+ this.$store.state.latestVersion + <span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"font-weight: bold;color: white;display: inline-block;text-align: center;height: 1.5rem;line-height: 1.5rem;background-color: rgba(255,202,212,.8);padding: 10px;border-bottom-left-radius: 13px;border-top-left-radius: 13px;"</span><span class="token punctuation">,</span><span class="token string">"font-weight: bold;color: white;display: inline-block;text-align: center;height: 1.5rem;line-height: 1.5rem;background-color: rgba(178,247,239,.85);padding: 10px;border-bottom-right-radius: 13px;border-top-right-radius: 13px;"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token selector">this.$store.state.printRightIndex = 1
    this.themeProperty = useThemeData().value

    //从配置文件中，获取首页壁纸
    let homeWps = []
    if (this.themeProperty.homeWps === undefined || this.themeProperty.homeWps == null)</span> <span class="token punctuation">{</span>
      homeWps.<span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"https://picoss.cco.vin/animate/wall/404901.png"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
      homeWps = this.themeProperty.homeWps
    <span class="token punctuation">}</span>

    <span class="token selector">if (homeWps.length === 0)</span> <span class="token punctuation">{</span>
      homeWps.<span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"https://picoss.cco.vin/animate/wall/404901.png"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token selector">this.homeWps = homeWps

    if (this.aboutOption !== undefined || this.aboutOption != null)</span> <span class="token punctuation">{</span>
      this.aboutOption = this.themeProperty.about
    <span class="token punctuation">}</span>

    <span class="token selector">this.$store.commit("setIsFitter",</span><span class="token punctuation">{</span>
      <span class="token property">isFitter</span><span class="token punctuation">:</span> this.themeProperty.isFitter
    <span class="token punctuation">}</span><span class="token selector">)
    this.isShowFooter = this.themeProperty.isShowFooter

    let fontColorStyle = this.$store.state.fontColorStyle
    let fontFamilyStyle = this.$store.state.fontFamilyStyle
    if (fontColorStyle === undefined)</span> <span class="token punctuation">{</span>
      this.colorStyle = <span class="token string">'--fontColor: ""'</span>
    <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
      this.colorStyle = fontColorStyle
    <span class="token punctuation">}</span>
    <span class="token selector">if (fontFamilyStyle === undefined)</span> <span class="token punctuation">{</span>
      this.fontStyle = <span class="token string">'-fontFamily: ""'</span>
    <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
      this.fontStyle = fontFamilyStyle
    <span class="token punctuation">}</span>

    this.colorFontStyle = this.colorStyle + <span class="token string">" "</span>+ this.fontStyle
  <span class="token punctuation">}</span><span class="token selector">,
  mounted()</span> <span class="token punctuation">{</span>
    <span class="token selector">if (document.documentElement.clientWidth &lt; 719)</span> <span class="token punctuation">{</span>
      this.sidebarRowVar = 6
    <span class="token punctuation">}</span>

    <span class="token selector">//手机端壁纸
    let screen = document.body.clientWidth
    if (screen &lt; 500)</span> <span class="token punctuation">{</span>
      <span class="token selector">if (this.themeProperty.homeWpsMobile !== undefined &amp;&amp;
          this.themeProperty.homeWpsMobile != null)</span> <span class="token punctuation">{</span>
        <span class="token selector">try</span> <span class="token punctuation">{</span>
          <span class="token selector">if (this.themeProperty.homeWpsMobile.length !== 0)</span> <span class="token punctuation">{</span>
            this.homeWps = this.themeProperty.homeWpsMobile
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token selector">catch (e)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">let backgroundUrl = ''
    if (this.$store.state.homeWps === "")</span> <span class="token punctuation">{</span>
      //将首页壁纸设置为配置文件数组中的第一张图片
      backgroundUrl = this.homeWps[0]
    <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
      //将首页壁纸设置为配置文件数组中的第一张图片
      backgroundUrl = this.$store.state.homeWps
    <span class="token punctuation">}</span>
    <span class="token selector">this.$store.commit("setHomeWps",</span><span class="token punctuation">{</span>
      <span class="token property">homeWps</span><span class="token punctuation">:</span> backgroundUrl
    <span class="token punctuation">}</span><span class="token selector">)


    const frontmatter = usePageFrontmatter&lt;DefaultThemePageFrontmatter>()
    let keywordValue = this.themeProperty.keyword
    let descriptionValue = this.themeProperty.description

    if (keywordValue === undefined)</span> <span class="token punctuation">{</span>
      keywordValue = <span class="token string">"vuepress,vuepress-theme-aurora,blog-theme"</span>
    <span class="token punctuation">}</span>

    <span class="token selector">if (descriptionValue === undefined)</span> <span class="token punctuation">{</span>
      descriptionValue = <span class="token string">"个人博客"</span>
    <span class="token punctuation">}</span>

    <span class="token selector">if (frontmatter.value.home)</span> <span class="token punctuation">{</span>
      <span class="token selector">//如果是首页的话，就将key和description设置为配置中的
      let descriptionDom = document.querySelectorAll('meta[name="description"]')
      let keywordDom= document.querySelector('meta[name="keyword"]')

      //设置关键词
      if (keywordDom === null)</span> <span class="token punctuation">{</span>
        //head中没有keyword 添加一个
        let keywordMeta = $<span class="token punctuation">(</span><span class="token string">'&lt;meta name="keyword" content="'</span>+ keywordValue +<span class="token string">'">'</span><span class="token punctuation">)</span>.<span class="token function">get</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
        document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span>.<span class="token function">appendChild</span><span class="token punctuation">(</span>keywordMeta<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
        //已经存在keyword属性的dom 设置其content
        keywordDom.<span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"content"</span><span class="token punctuation">,</span>keywordValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token selector">if (descriptionDom.length !== 0)</span> <span class="token punctuation">{</span>
        <span class="token selector">new Promise((resolve,reject) =></span> <span class="token punctuation">{</span>
          for <span class="token punctuation">(</span>let i = 0<span class="token punctuation">;</span> i &lt; descriptionDom.length<span class="token punctuation">;</span> <span class="token selector">i++)</span> <span class="token punctuation">{</span>
            document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span>.<span class="token function">removeChild</span><span class="token punctuation">(</span>descriptionDom[i]<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token selector">).then(() =></span> <span class="token punctuation">{</span>
          let descriptionMeta = $<span class="token punctuation">(</span><span class="token string">'&lt;meta name="description" content="'</span>+ descriptionValue +<span class="token string">'">'</span><span class="token punctuation">)</span>.<span class="token function">get</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
          document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span>.<span class="token function">appendChild</span><span class="token punctuation">(</span>descriptionMeta<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token selector">else</span> <span class="token punctuation">{</span>
        let descriptionMeta = $<span class="token punctuation">(</span><span class="token string">'&lt;meta name="description" content="'</span>+ descriptionValue +<span class="token string">'">'</span><span class="token punctuation">)</span>.<span class="token function">get</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
        document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span>.<span class="token function">appendChild</span><span class="token punctuation">(</span>descriptionMeta<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">if (document.body.clientWidth &lt; 550 &amp;&amp; this.themeProperty.mobilePageSidebar !== undefined)</span> <span class="token punctuation">{</span>
      this.mobilePageSidebar = this.themeProperty.mobilePageSidebar
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
&lt;/script>

&lt;style lang=<span class="token string">"css"</span>>
<span class="token comment">/* 从调色板中引入变量 */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@vuepress/plugin-palette/palette'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@vuepress/plugin-palette/style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>
<p>该组件的<code>props</code>有</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code> props<span class="token operator">:</span> <span class="token punctuation">{</span>
    showBg<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    showStyleMenu<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    showNavbar<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    showMobileSidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul>
<li>
<p>showBg</p>
<blockquote>
<p>是否显示背景图片</p>
</blockquote>
</li>
<li>
<p>showStyleMenu</p>
<blockquote>
<p>是否显示样式菜单</p>
</blockquote>
</li>
<li>
<p>showNavbar</p>
<blockquote>
<p>是否显示导航</p>
</blockquote>
</li>
<li>
<p>showMobileSidebar</p>
<blockquote>
<p>是否显示手机端侧边栏</p>
</blockquote>
</li>
</ul>
</template>
