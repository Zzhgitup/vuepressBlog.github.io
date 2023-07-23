import{_ as u,r as p,o as h,c as y,a as s,b as n,d as a,w as e,f as B,e as t}from"./app-bebbc25d.js";const m={},b={class:"hint-container tip"},v=s("p",{class:"hint-container-title"},"提示",-1),g=s("p",null,"之前介绍了ZSH的安装和使用，这次把最终成果介绍一下，就是ZSH + iTerm2 + Pure",-1),f=s("h2",{id:"目录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),_={class:"table-of-contents"},F=t('<h2 id="先看效果图" tabindex="-1"><a class="header-anchor" href="#先看效果图" aria-hidden="true">#</a> 先看效果图</h2><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/140a5562a8b9e334.png" alt="界面" tabindex="0" loading="lazy"><figcaption>界面</figcaption></figure><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/810d0c1d2a4d7069.png" alt="命令提示" tabindex="0" loading="lazy"><figcaption>命令提示</figcaption></figure><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/052c26b51ecde528.png" alt="流输出" tabindex="0" loading="lazy"><figcaption>流输出</figcaption></figure><h2 id="安装pure" tabindex="-1"><a class="header-anchor" href="#安装pure" aria-hidden="true">#</a> 安装pure</h2>',5),A={href:"https://github.com/sindresorhus/pure",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,"可以使用 npm 或手动安装。需要 Git 2.15.2+ 和 ZSH 5.2+。已知旧版本的 ZSH 可以工作，但不推荐使用。",-1),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"install"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"--global"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"pure-prompt")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"brew"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"install"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"pure")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 在某处克隆此 repo。在这里我们将使用 $HOME/.zsh/pure")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"mkdir"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-p"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"'),s("span",{style:{color:"#E06C75"}},"$HOME"),s("span",{style:{color:"#98C379"}},'/.zsh"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"git"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"clone"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"https://github.com/sindresorhus/pure.git"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"'),s("span",{style:{color:"#E06C75"}},"$HOME"),s("span",{style:{color:"#98C379"}},'/.zsh/pure"')]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),z=t(`<p>如果是手动安装的，将克隆的 repo 的路径添加到 $HOME/.zshrc 中的 $fpath 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># .zshrc</span></span>
<span class="line"><span style="color:#E06C75;">fpath</span><span style="color:#C678DD;">+=</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$HOME</span><span style="color:#98C379;">/.zsh/pure</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将以下内容复制到 <code>.zshrc</code>文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">autoload</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-U</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">promptinit</span><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">promptinit</span></span>
<span class="line"><span style="color:#61AFEF;">prompt</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pure</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 .zshrc 中设置 ZSH_THEME=&quot;&quot; 以禁用 oh-my-zsh 主题。</p><p>到这里就基本完成了，如果要基于pure做详细定制，请参考文档</p><h2 id="iterm2" tabindex="-1"><a class="header-anchor" href="#iterm2" aria-hidden="true">#</a> iTerm2</h2>`,7),S={href:"https://iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://pan.baidu.com/s/1cG-gSwoPouYXeZ-P2pjmAg",target:"_blank",rel:"noopener noreferrer"},D=s("h3",{id:"_1-主题配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-主题配置","aria-hidden":"true"},"#"),n(" 1.主题配置")],-1),H={href:"https://github.com/mbadolato/iTerm2-Color-Schemes",target:"_blank",rel:"noopener noreferrer"},P=t(`<p>可以下载zip包并解压到本地，进入解压缩的文件目录，找到schemes文件夹，里边全是主题配置，可以对照github上的效果图来选择</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/2eee92812c17fc48.png" alt="导入" tabindex="0" loading="lazy"><figcaption>导入</figcaption></figure><h3 id="_2-标签页配色" tabindex="-1"><a class="header-anchor" href="#_2-标签页配色" aria-hidden="true">#</a> 2. 标签页配色</h3><p>标签配色默认为黑色，不能与操作页面保持统一</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/9995b0382a76bba8.png" alt="默认" tabindex="0" loading="lazy"><figcaption>默认</figcaption></figure><p>打开iTerm2，打开Preferences配置界面，Appearence -&gt; General，将 Theme 改为 Minimal</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/411e917c7fb3d2b9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-设置-status-bar" tabindex="-1"><a class="header-anchor" href="#_3-设置-status-bar" aria-hidden="true">#</a> 3. 设置 Status bar</h3><p>iTerm2 提供了不少的 Status bar，开启后我们可以在终端的最上方非常方便的实时查看本机的一些信息。</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/d93a133dcd5fe00c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开iTerm2，打开Preferences配置界面，Profiles -&gt; session-&gt; 勾选 Status bar enable-&gt; configure Status bar，选择自己想要的展示内容即可。向下托动放入Active Components 中即可,我这里只选了CPU、内存、网络</p><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/918522902136668f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-光标选择" tabindex="-1"><a class="header-anchor" href="#_4-光标选择" aria-hidden="true">#</a> 4. 光标选择</h3><p>iterm提供了三种光标可供选择：_、|、[]。</p><p>打开iTerm2，打开Preferences配置界面，Profiles -&gt; text-&gt; cursor，选择自己想要的光标即可。</p><h3 id="_5-配置ssh快速连接" tabindex="-1"><a class="header-anchor" href="#_5-配置ssh快速连接" aria-hidden="true">#</a> 5.配置SSH快速连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#首先在/Users目录下按照如下命令创建sh脚本</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/Users/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#创建iterm文件夹</span></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">iterm</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#进入iterm文件夹</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">iterm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#创建myserver.sh文件</span></span>
<span class="line"><span style="color:#61AFEF;">touch</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">myserver.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#编辑myserver.sh文件</span></span>
<span class="line"><span style="color:#61AFEF;">vi</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">myserver.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现没有权限，就命令前面加上sudo</p><p>键盘输入i编辑文件，插入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/usr/bin/expect</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">timeout</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">30</span></span>
<span class="line"><span style="color:#61AFEF;">spawn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ssh</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span><span style="color:#ABB2BF;"> [lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#98C379;">]</span><span style="color:#ABB2BF;"> [lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#98C379;">]@[lindex</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#98C379;">]</span></span>
<span class="line"><span style="color:#61AFEF;">expect</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">&quot;(yes/no)?&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;yes\\n&quot;</span><span style="color:#ABB2BF;">;</span><span style="color:#61AFEF;">exp_continue}</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">&quot;password:&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;[lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#98C379;"> 3]\\n&quot;}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">interact</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>myserver.sh文件中变量解释：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">]：端口号</span></span>
<span class="line"><span style="color:#ABB2BF;">[lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]：服务器用户名</span></span>
<span class="line"><span style="color:#ABB2BF;">[lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">]：服务器IP地址</span></span>
<span class="line"><span style="color:#ABB2BF;">[lindex </span><span style="color:#E06C75;">$argv</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">]：服务器密码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入完成后键盘esc 然后输入:wq退出，接下来给文件赋权</p>`,23),$={href:"http://myserver.sh",target:"_blank",rel:"noopener noreferrer"},q=s("br",null,null,-1),w=t('<figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/349fdd06e7bc428d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Name:根据需求输入，通常选择标识性较强的内容便于区分，例如服务器的IP地址</p><p>Command：这里选择login Shell</p><p>Send text at start ：填写格式形如A B C D E这样，每一个部分之间用空格隔开，根据自己实际情况填写,下面是对每一部分内容的解释</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>A 代表咱们上面写的本机保存sh脚本的路径：/Users/iterm/myserver.sh</p><p>B 代表服务器端口号一般远程连接端口为：22</p><p>C 代表服务器用户名一般为：root</p><p>D 代表服务器IP：公网IP填写</p><p>E 代表服务器密码：根据自己实际的服务器密码填写<br> 设置好之后打开iTerm2，点击profiles，点击前面自己新增的连接远程服务器的profile的名字</p><p>首次连接需要输入一次服务器密码，之后再连接就免密码登陆了</p></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2><p>当然这里只介绍一部分，还有很多高级玩法，需要用到的时候自己去研究一下了</p>',7);function M(Z,I){const c=p("RouterLink"),l=p("router-link"),o=p("ExternalLinkIcon"),d=p("CodeTabs");return h(),y("div",null,[s("div",b,[v,g,s("p",null,[n("前置工作：安装ZSH，请参照之前的文章👉"),a(c,{to:"/posts/Linux/zsh.html"},{default:e(()=>[n("zsh安装")]),_:1})])]),B(" more "),f,s("nav",_,[s("ul",null,[s("li",null,[a(l,{to:"#目录"},{default:e(()=>[n("目录")]),_:1})]),s("li",null,[a(l,{to:"#先看效果图"},{default:e(()=>[n("先看效果图")]),_:1})]),s("li",null,[a(l,{to:"#安装pure"},{default:e(()=>[n("安装pure")]),_:1})]),s("li",null,[a(l,{to:"#iterm2"},{default:e(()=>[n("iTerm2")]),_:1}),s("ul",null,[s("li",null,[a(l,{to:"#_1-主题配置"},{default:e(()=>[n("1.主题配置")]),_:1})]),s("li",null,[a(l,{to:"#_2-标签页配色"},{default:e(()=>[n("2. 标签页配色")]),_:1})]),s("li",null,[a(l,{to:"#_3-设置-status-bar"},{default:e(()=>[n("3. 设置 Status bar")]),_:1})]),s("li",null,[a(l,{to:"#_4-光标选择"},{default:e(()=>[n("4. 光标选择")]),_:1})]),s("li",null,[a(l,{to:"#_5-配置ssh快速连接"},{default:e(()=>[n("5.配置SSH快速连接")]),_:1})])])]),s("li",null,[a(l,{to:"#结语"},{default:e(()=>[n("结语")]),_:1})])])]),F,s("p",null,[n("👉"),s("a",A,[n("官方文档"),a(o)])]),x,a(d,{id:"36",data:[{id:"npm"},{id:"Homebrew"},{id:"手动"}]},{title0:e(({value:i,isActive:r})=>[n("npm")]),title1:e(({value:i,isActive:r})=>[n("Homebrew")]),title2:e(({value:i,isActive:r})=>[n("手动")]),tab0:e(({value:i,isActive:r})=>[C]),tab1:e(({value:i,isActive:r})=>[E]),tab2:e(({value:i,isActive:r})=>[k]),_:1}),z,s("p",null,[n("👉戳这里下载 "),s("a",S,[n("官方下载地址"),a(o)])]),s("p",null,[n("效果图我自用的配置文件在这里 👉 "),s("a",T,[n("链接"),a(o)]),n(" 密码:74aq")]),D,s("p",null,[n("访问iTerm2主题网站👉"),s("a",H,[n("iTerm2-Color-Schemes"),a(o)])]),P,s("p",null,[n("chmod 777 "),s("a",$,[n("myserver.sh"),a(o)]),q,n(" 打开iTerm2，打开Preferences配置界面，Profiles -> general，左下角点击+号，新建profile，参考下面图片在对应位置输入内容即可。")]),w])}const L=u(m,[["render",M],["__file","iterm2-pure.html.vue"]]);export{L as default};
