import{_ as s,o as n,c as a,e as l}from"./app-bebbc25d.js";const e={},o=l(`<h1 id="react-脚手架配置代理总结" tabindex="-1"><a class="header-anchor" href="#react-脚手架配置代理总结" aria-hidden="true">#</a> react 脚手架配置代理总结</h1><h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><blockquote><p>在 package.json 中追加如下配置</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;proxy&quot;</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">&quot;http://localhost:5000&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：</p><ol><li>优点：配置简单，前端请求资源时可以不加任何前缀。</li><li>缺点：不能配置多个代理。</li><li>工作方式：上述方式配置代理，当请求了 3000 不存在的资源时，那么该请求会转发给 5000 （优先匹配前端资源）</li></ol><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h2><ol><li><p>第一步：创建代理配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">在src下创建配置文件：src/setupProxy.js</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编写 setupProxy.js 配置具体代理规则：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;http-proxy-middleware&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/api1&quot;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">//api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;http://localhost:5000&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//配置转发目标地址(能返回数据的服务器地址)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">changeOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//控制服务器接收到的请求头中host字段的值</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      */</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">pathRewrite</span><span style="color:#ABB2BF;">: { </span><span style="color:#98C379;">&quot;^/api1&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> }, </span><span style="color:#7F848E;font-style:italic;">//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/api2&quot;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;http://localhost:5001&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">changeOrigin</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">pathRewrite</span><span style="color:#ABB2BF;">: { </span><span style="color:#98C379;">&quot;^/api2&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>说明：</p><ol><li>优点：可以配置多个代理，可以灵活的控制请求是否走代理。</li><li>缺点：配置繁琐，前端请求资源时必须加前缀。</li></ol>`,10),p=[o];function t(c,i){return n(),a("div",null,p)}const B=s(e,[["render",t],["__file","React脚手架配置代理.html.vue"]]);export{B as default};
