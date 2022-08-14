<template><h1 id="友情链接页面" tabindex="-1"><a class="header-anchor" href="#友情链接页面" aria-hidden="true">#</a> 友情链接页面</h1>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127201823860" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127201823860.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<details class="custom-container details"><summary>点击查看所有配置代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">friendLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'我的朋友'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"XI溪"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://www.xiaoxuya.top"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://www.xiaoxuya.top/img/logo.png"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"人生若只是初见,何事秋风悲画扇"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"左眼会陪右眼哭の博客"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://qkongtao.cn/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"干嘛这么想不开，要在脸上贴个输字！"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"[ Blog We]"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/favicon.ico"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"博客大全-做最好的博客导航！"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"I Am I"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://5ime.cn"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100424035.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Davinci的红茶馆"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://davincievans.top/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"You are all stardust."</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"皮皮凛の小窝"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://owomoe.net/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生~"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"月月月子喵"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe/css/images/logo_christmas.png"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"可爱的月子酱"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"疫情在线捐款系统"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://yq.vipblogs.cn/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"基于echarts的疫情捐款系统"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">''</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"疫情在线捐款系统后台登录"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://admin.vipblogs.cn/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"该捐款系统后台登录"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">''</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'大佬'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"XI溪"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://www.xiaoxuya.top"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://www.xiaoxuya.top/img/logo.png"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"人生若只是初见,何事秋风悲画扇"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"左眼会陪右眼哭の博客"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://qkongtao.cn/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"干嘛这么想不开，要在脸上贴个输字！"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"皮皮凛の小窝"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://owomoe.net/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生~"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"月月月子喵"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://haozi.moe/css/images/logo_christmas.png"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"可爱的月子酱"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'小伙伴'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">//网站标题</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"XI溪"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点链接</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://www.xiaoxuya.top"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点logo</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://www.xiaoxuya.top/img/logo.png"</span><span class="token punctuation">,</span>

                        <span class="token comment">//站点描述</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"人生若只是初见,何事秋风悲画扇"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"[ Blog We]"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://blogwe.com/favicon.ico"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"博客大全-做最好的博客导航！"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Davinci的红茶馆"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://davincievans.top/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"You are all stardust."</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"皮皮凛の小窝"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://owomoe.net/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"永远相信美好的事情即将发生~"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"疫情在线捐款系统"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://yq.vipblogs.cn/"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/blog-public/avatar.jpg"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"基于echarts的疫情捐款系统"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">''</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//自己的站点信息 我自己的站点描述 会显示在友情链接的底部</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br></div></div></details>
<h2 id="friendlinks" tabindex="-1"><a class="header-anchor" href="#friendlinks" aria-hidden="true">#</a> friendLinks</h2>
<p>这是一个数组对象，里面的每一个对象，都是一个模块，</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202321519" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202321519.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<h2 id="配置单个模块" tabindex="-1"><a class="header-anchor" href="#配置单个模块" aria-hidden="true">#</a> 配置单个模块</h2>
<p>加入我们现在需要配置上图中的大佬这个模块，那么你可以像下面这样进行配置</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202706567" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202706567.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
    themeConfig: {
        friendLinks: [
        {
                title: '大佬',
                links: [
                    {
                        //网站标题
                        title: "XI溪",

                        //站点链接
                        url: "http://www.xiaoxuya.top",

                        //站点logo
                        logo: "https://www.xiaoxuya.top/img/logo.png",

                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "左眼会陪右眼哭の博客",
                        url: "http://qkongtao.cn/",
                        logo: "http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png",
                        describe: "干嘛这么想不开，要在脸上贴个输字！",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1'
                    },
                ]
            },
        ]
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="配置友联申请描述信息" tabindex="-1"><a class="header-anchor" href="#配置友联申请描述信息" aria-hidden="true">#</a> 配置友联申请描述信息</h2>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127202740908" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127202740908.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>方框中的代码块，是主题自动加上的，你需要在<code>siteInformation</code>中进行简单的配置，便可以了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>你配置之后效果会像下图这样</p>
<p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127203125111" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127203125111.png?x-oss-process=style/pictureProcess1" data="aurora"></p>
<p>并不像我上图中的那样，这是因为，上图那个是我自定义的样式，你们如果也需要这样的效果的话，可以看下面代码</p>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">siteInformation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//站点标题</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Aurora-theme"</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点链接</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://aurora.xcye.xyz"</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点logo</span>
            <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">"https://ooszy.cco.vin/img/ico/yuan.png"</span><span class="token punctuation">,</span>

            <span class="token comment">//自己站点描述</span>
            <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">"vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'</span><span class="token punctuation">,</span>

            <span class="token comment">//自己的头像</span>
            <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">"如果你已经添加我站点，我很长时间还未添加，请联系我QQ: 2291308094,或者在说说处告诉我(先注册用户http://localhost:8080/aurora-register/，在发布说说/mood)，别评论"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">otherDescribe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'申请友链请按照下面格式，在此页面评论或者先&lt;a href="/register">注册&lt;/a>，再到&lt;a href="/mood">说说&lt;/a>处留下你站点，我看到就会进行添加'</span><span class="token punctuation">,</span>
                <span class="token string">'&lt;label class="about-version friend-tag">博客名称&lt;/label>&lt;label class="about-version friend-tag">博客地址&lt;/label>&lt;label class="about-version friend-tag">博客描述&lt;/label>&lt;label class="about-version friend-tag">博客logo&lt;/label>&lt;label class="about-version friend-tag">博客封面&lt;/label>'</span><span class="token punctuation">,</span>
                <span class="token string">'友链申请要求'</span><span class="token punctuation">,</span>
                <span class="token string">'&lt;label class="about-version about-goal about-fail">拒绝涉政/涉黄/太多广告/盈利性站点&lt;/label>'</span><span class="token punctuation">,</span>
                <span class="token string">'&lt;label class="about-version">站点能正常访问&lt;/label>'</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*docs/.vuepress/styles/index.css */</span>

<span class="token selector">.about-version</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #00cfc8<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.friend-tag</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.about-fail</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ef233c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote>
<p><code>如果没有docs/.vuepress/styles/index.css这个文件的话，自己创建</code></p>
<p><code>docs/.vuepress/styles/index.css</code>内的样式会完全覆盖主题默认的样式，如果你需要高度自定义的话，请看<RouterLink to="/page/friendlink.html">这里</RouterLink></p>
</blockquote>
</details>
<h2 id="说说页面配置" tabindex="-1"><a class="header-anchor" href="#说说页面配置" aria-hidden="true">#</a> 说说页面配置</h2>
<p><RouterLink to="/page/tag.html">标签页面配置</RouterLink></p>
</template>
