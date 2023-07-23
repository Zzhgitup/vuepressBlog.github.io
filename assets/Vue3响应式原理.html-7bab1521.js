import{_ as s,o as n,c as a,e as l}from"./app-bebbc25d.js";const p={},e=l(`<h3 id="vue2-和-vue3-响应式的区别" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-响应式的区别" aria-hidden="true">#</a> Vue2 和 Vue3 响应式的区别</h3><p>Vue2 的响应式，利用了 ES5 的一个 API，object.defineProperty,它的基本用法是这样的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;kw&quot;</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">defineProperty</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">val</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，就能拦截到对象属性的基本操作，比如访问属性和给属性设置新值。当拦截到访问属性时，可以做依赖收集；当监听到属性更改时，可以做派发更新，从而实现响应式。</p><p>它存在几个缺点：</p><ol><li><p>重写了对象的属性，性能较差；</p></li><li><p>只能拦截到对象属性的操作，不能处理数组。所以 Vue2 需要单独对数组数据进行处理。</p></li><li><p>对于属性的新增和删除，无法拦截到。所以额外提供了 $set 和 $delete 方法，整体不和谐。</p></li></ol><p><code>Vue3</code> 采用了 ES6 的 API <code>Proxy</code> 来实现响应式。由于该 API 不兼容 IE 浏览器，所以在使用 Vue3 开发时要考虑项目是否需要兼容 IE 系列。</p><h3 id="proxy-和-reflect" tabindex="-1"><a class="header-anchor" href="#proxy-和-reflect" aria-hidden="true">#</a> Proxy 和 Reflect</h3><p>先来看看 Proxy 的基本用法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">handler</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>target</code>：用 <code>Proxy</code> 包装的被代理对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。</p><p><code>handler</code>：是一个对象，其声明了代理 target 的一些操作，其属性是当执行一个操作时定义代理的行为的函数。</p><p>简单示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;未来软件工作室&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">18</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">handler</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">receiver</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">value</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">receiver</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">value</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">handler</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// &quot;未来软件工作室&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;未来大神&#39;</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// &quot;未来大神&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>Proxy</code> 的使用其实和 <code>Object.defineProperty</code>是差不多的，也是能拦截到对象属性的一些操作。但它的特点是：</p><ol><li><p>不仅可以代理普通的对象，还可以代理数组，函数</p></li><li><p>不仅能拦截到 <code>get</code> 和 <code>set</code> 操作，还支持 <code>apply、delete</code> 等一共 13 种操作</p></li><li><p>不需要重写 <code>target</code>，性能更高</p></li></ol><p>再来看一下 <code>Reflect</code> 对象<br><code>Proxy</code> 和 <code>Reflect</code> 是一对好兄弟，形影不离。</p><p>按照 MDN 文档的说明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers的方法相同。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Reflect不是一个函数对象，因此它是不可构造的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，我们在使用 <code>Proxy</code> 时传入的 <code>handler</code> 参数，它所有的属性，在 Reflect 中都有一一对应的。比如上面我们说了 <code>Proxy</code> 对象的 handler 可以支持 <code>get</code> ，<code>get</code> ，<code>apply</code>，<code>delete</code> 操作，那么 <code>Reflect</code> 对象就提供了对应的静态方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">person</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;未来软件工作室&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">sayHello</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`Hello! 我是</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 返回 name 属性的值</span></span>
<span class="line"><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">person</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// &#39;未来软件工作室&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 执行 sayHello 方法</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// param1：要执行的函数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// param2：指定 this</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// param3：函数执行需要的参数</span></span>
<span class="line"><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">person</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">sayHello</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">person</span><span style="color:#ABB2BF;">, []); </span><span style="color:#7F848E;font-style:italic;">// Hello! 我是未来软件工作室</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 更新 age 属性。属性设置成功，返回 true</span></span>
<span class="line"><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">person</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;age&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">person</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;age&#39;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 20</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初看起来，Reflect 的使用很繁琐，远不如传统的点语法来的方便简洁。确实如此，但是在这些 API 的设计上，它和 Proxy 拥有一致的属性和方法，所以搭配起来更加合适。再者，有些场景下，比如需要用到 receiver 参数时，此时就只有 Reflect 能堪大任了。</p><h3 id="reactive-的基本使用" tabindex="-1"><a class="header-anchor" href="#reactive-的基本使用" aria-hidden="true">#</a> reactive 的基本使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">reactive</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;kw&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">skill</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;JS&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Vue&#39;</span><span style="color:#ABB2BF;">]}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 返回对象的响应式代理对象，并且是深层次的代理，所有嵌套的属性包括数组，都能被代理到</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reactive</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 修改响应式对象，组件可以自动更新</span></span>
<span class="line"><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;zk&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span></span>
<span class="line"><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">skill</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Node&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>reactive</code> 时需要注意的地方：</p><ol><li>只能实现对象数据的响应式</li><li>同一个对象，只会被代理一次</li><li>被代理过的对象，不会被再次代理</li><li>支持嵌套属性的响应式</li></ol><h3 id="实现-reactive" tabindex="-1"><a class="header-anchor" href="#实现-reactive" aria-hidden="true">#</a> 实现 reactive</h3><p>这是 Vue3 中一个最基础的响应式 API，它内部采用了 Proxy 来实现对象属性的拦截操作。</p><p>如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// reactivity/src/reactive.ts</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// reactivity/src/reactive.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">isObject</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@my-vue/shared&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reactive</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 只能代理对象</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#61AFEF;">isObject</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">handler</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 监听属性访问操作</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">receiver</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">key</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">属性被访问，依赖收集\`</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 监听设置属性操作</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">value</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">receiver</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">key</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">属性变化了，派发更新\`</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 当属性的新值和旧值不同时，再进行设置</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Reflect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">receiver</span><span style="color:#ABB2BF;">);;</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">result</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 实例化代理对象</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">handler</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">​</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">proxy</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无需多次代理" tabindex="-1"><a class="header-anchor" href="#无需多次代理" aria-hidden="true">#</a> 无需多次代理</h3><p>前面我们提到，如果一个对象被代理过了，就无需再被代理。实现的思路就是利用缓存，将代理过的对象进行缓存，每当调用 reactive 方法时，先判断缓存中是否存在 target ；每次 target 被代理后，都将 target 和 proxy 放到缓存中： 利用 weakmap</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">reactiveMap</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">WeakMap</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">readonlyMap</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">WeakMap</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#61AFEF;">isObject</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">//如果不是一个对象就直接返回出去</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//优化问题 如果已经代理过，则直接返回出去</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxymap</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isReader</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">reactiveMap</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">readonlyMap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxyes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxymap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">proxyes</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//核心如果是第一次添加 则添加代理，并且把target存进weakmap中,进行标记</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">proxy</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Proxy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">baseHeader</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">proxymap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">proxy</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">proxy</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套代理" tabindex="-1"><a class="header-anchor" href="#嵌套代理" aria-hidden="true">#</a> 嵌套代理</h3><p>Vue3 实现响应式采用的原则是懒代理，并不像 Vue2 那样在初始化时，就递归所有的属性进行属性重写。<br> 只有在访问到某个属性，且该属性是对象类型时，才会再进行一层响应式包装：<br> 到此，我们实现的 reactive 方法，就能监听到对象属性的访问和设置操作，从而在此时机做一些处理，从而实现响应式系统。同时也做了一些优化处理。</p>`,35),o=[e];function c(r,t){return n(),a("div",null,o)}const i=s(p,[["render",c],["__file","Vue3响应式原理.html.vue"]]);export{i as default};
