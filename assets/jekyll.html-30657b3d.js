import{_ as r,r as s,o as a,c as i,a as e,b as l,d as o,e as n}from"./app-bebbc25d.js";const h={},c=n('<blockquote><p>“Yeah It&#39;s on. ”</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Oragekk 的 Blog 就这么开通了。</p><p><a href="#build">跳过废话，直接看技术实现 </a></p><p>2016 年，11 月 总算有个地方可以好好写点东西了。</p><p>作为一个程序员， 看多了别人的 Blog 这种轮子都是酷炫的不要不要的，自己其实一种想搞一个，前两天发现了 GitHub Pages +Jekyll 的技术方案，一下子就上瘾了。</p><p>终于可以有自己的自留地了，之前一直在简书上写一些技术类的文章，这次可以有个自己的地盘，想怎么写就怎么写。😝 哈哈。不过这些前端的东西对我也是一种挑战，似懂非懂的看着模板，和一堆 js+css+html 的代码。。一顿头大。。对照着效果，一步步自己改。改好了之后也是蛮有成就感的嘛</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <p id="build"></p></h2><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2><p>接下来说说搭建这个博客的技术细节。</p>',10),u={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"},d=n("<p>其优点非常明显：</p><ul><li><strong>Markdown</strong> 带来的优雅写作体验</li><li>非常熟悉的 Git workflow ，<strong>Git Commit 即 Blog Post</strong></li><li>利用 GitHub Pages 的域名和免费无限空间，不用自己折腾主机 <ul><li>如果需要自定义域名，也只需要简单改改 DNS 加个 CNAME 就好了</li></ul></li><li>Jekyll 的自定制非常容易，基本就是个模版引擎</li><li>Jekyll 的安装倒是不难，难的是安装它之前的一堆安装</li></ul><hr><p>配置的过程中也没遇到什么坑，基本就是 Git 的流程，相当顺手</p>",4),p=e("br",null,null,-1),g=e("code",null,"gem install jekyll",-1),k={href:"http://gems.ruby-china.org/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"之后看到域名还是 github 提供的固定域名，心里觉得不够高大上，果断万网去买了一个。还很便宜咯。。不过价格就不告诉你们了 😜",-1),f=e("hr",null,null,-1),m=e("p",null,"以下引用自 Theme 作者",-1),y=e("blockquote",null,[e("p",null,"Theme 的 CSS 是基于 Bootstrap 定制的，看得不爽的地方直接在 Less 里改就好了（平时更习惯 SCSS 些），**不过其实我一直觉得 Bootstrap 在移动端的体验做得相当一般，比我在淘宝参与的团队 CSS 框架差多了……**所以为了体验，也补了不少 CSS 进去")],-1),S=e("blockquote",null,[e("p",null,[l("最后就进入了耗时反而最长的"),e("strong",null,"做图、写字"),l("阶段，也算是进入了"),e("strong",null,"写博客"),l("的正轨，因为是类似 Hack Day 的方式去搭这个站的，所以折腾折腾着大半夜就过去了。")])],-1),B={href:"http://www.typeisbeautiful.com/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"font",-1),C=e("hr",null,null,-1),j=e("h2",{id:"后记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#后记","aria-hidden":"true"},"#"),l(" 后记")],-1),w=e("p",null,"回顾这个博客的诞生，纯粹是出于个人兴趣。为了有个块自留地，可以无聊了写写，不开心了写写。",-1),G=e("p",null,"如果你恰好逛到了这里，希望你也能喜欢这个博客",-1),N=e("p",null,"—— 黄坤 后记于 2016.11",-1);function q(H,J){const t=s("ExternalLinkIcon");return a(),i("div",null,[c,e("p",null,[l("正好之前就有关注过 "),e("a",u,[l("GitHub Pages"),o(t)]),l(" + "),e("a",_,[l("Jekyll"),o(t)]),l(" 快速 Building Blog 的技术方案，非常轻松时尚。")]),d,e("p",null,[l("大的 Jekyll 主题直接 fork 了 Hux Blog"),p,l(" 本地调试环境需要 "),g,l("，结果 rubygem 的源居然被墙了……后来手动改成了我大淘宝的镜像源才成功，现在淘宝的镜像地址也重定向了到"),e("a",k,[l("gems.ruby-china.org"),o(t)]),l(" 公司的新电脑，正好连带配环境，装 rvm，ruby，gems，jekyll。搞定。不过最后的本地预览还是没搞好。索性我就改了 commit，去站点看效果。")]),b,f,m,y,S,e("blockquote",null,[e("p",null,[l("第二天考虑中文字体的渲染，fork 了 "),e("a",B,[l("Type is Beautiful"),o(t)]),l(" 的 "),x,l(" CSS，调整了字号，适配了 Win 的渣渲染，中英文混排效果好多了。")])]),C,j,w,G,N])}const E=r(h,[["render",q],["__file","jekyll.html.vue"]]);export{E as default};
