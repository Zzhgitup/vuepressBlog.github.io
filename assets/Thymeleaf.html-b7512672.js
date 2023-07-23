import{_ as s,o as a,c as n,f as l,e}from"./app-bebbc25d.js";const o={},p=e(`<ol><li>Thymeleaf 概述</li></ol><p>Thymeleaf 是一个 Java 模板引擎，支持 html、xml、text、javascript、css、raw 这几种模型。</p><p>使用 Thymeleaf 首先需要引入命名空间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">xmlns</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;font-style:italic;">th</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;http://www.thymeleaf.org&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.  基本使用方法</p><p>1⃣️ 引用 web 静态资源</p><p>Thymeleaf 通过”@{}”来引用 web 静态资源，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">th</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;font-style:italic;">src</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;@{bootstrap/js/boostrap.min.js}&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2⃣️ 访问 model 模型中的数据，例如访问一个 user 对象的 name 属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">th</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;font-style:italic;">text</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;\${user.name}&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3⃣️ 在 Javascript 中访问 model 模型数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">th</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;font-style:italic;">inline</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;javascript&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      var user = [[$</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">user</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">]]     console.log(user.name + &quot;\\t&quot; + user.age);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一段时间，感觉自己学习的还是太少，不会的很多，学无止境，各种模版都需要学习，现在开始了前后端交互，怎么合作，怎么合作好是现在我面临的问题，第一次交互，我觉得能后收获很多东西，希望能够顺利完成这次的任务。</p><p>之后会继续写静态页面，等后端接口能用了，在进行下一步</p>`,14);function t(c,r){return a(),n("div",null,[l("more"),p])}const d=s(o,[["render",t],["__file","Thymeleaf.html.vue"]]);export{d as default};
