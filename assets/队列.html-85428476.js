const s=JSON.parse('{"key":"v-8a910b6e","path":"/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E9%98%9F%E5%88%97.html","title":"队列,链表,集合,字典，树","lang":"zh-CN","frontmatter":{"title":"队列,链表,集合,字典，树","date":"2022-11-01T00:00:00.000Z","icon":"blog","tag":["javascript"],"category":["记录"],"description":"用 JS 数组方法模拟队列 队列实例演示视频，可以看出是先进先出 JS 异步中的任务队列 JS 是单线程的，无法同时处理异步中的并发任务 使用任务队列先后处理异步任务 链表模拟 //链表 模拟 const a = { val: \\"a\\" }; const b = { val: \\"b\\" }; const c = { val: \\"c\\" }; const d = { val: \\"d\\" }; a.next = b; b.next = c; c.next = d; //遍历链表 let p = a; while (p) { console.log(p.val); p = p.next; } //插入 改变next指向 const e = { val: \\"e\\" }; c.next = e; e.next = d; while (p) { console.log(p.val); p = p.next; } //删除e c.next = d;","head":[["meta",{"property":"og:url","content":"https://oragekk.me/Zzh/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"ZiHao Blog"}],["meta",{"property":"og:title","content":"队列,链表,集合,字典，树"}],["meta",{"property":"og:description","content":"用 JS 数组方法模拟队列 队列实例演示视频，可以看出是先进先出 JS 异步中的任务队列 JS 是单线程的，无法同时处理异步中的并发任务 使用任务队列先后处理异步任务 链表模拟 //链表 模拟 const a = { val: \\"a\\" }; const b = { val: \\"b\\" }; const c = { val: \\"c\\" }; const d = { val: \\"d\\" }; a.next = b; b.next = c; c.next = d; //遍历链表 let p = a; while (p) { console.log(p.val); p = p.next; } //插入 改变next指向 const e = { val: \\"e\\" }; c.next = e; e.next = d; while (p) { console.log(p.val); p = p.next; } //删除e c.next = d;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T03:49:02.000Z"}],["meta",{"property":"article:author","content":"ZiHao"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2022-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T03:49:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"队列,链表,集合,字典，树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-23T03:49:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZiHao\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"用 JS 数组方法模拟队列","slug":"用-js-数组方法模拟队列","link":"#用-js-数组方法模拟队列","children":[]},{"level":2,"title":"JS 异步中的任务队列","slug":"js-异步中的任务队列","link":"#js-异步中的任务队列","children":[]},{"level":2,"title":"链表模拟","slug":"链表模拟","link":"#链表模拟","children":[]},{"level":2,"title":"集合","slug":"集合","link":"#集合","children":[]},{"level":2,"title":"字典","slug":"字典","link":"#字典","children":[]},{"level":2,"title":"树","slug":"树","link":"#树","children":[]},{"level":2,"title":"先序遍历","slug":"先序遍历","link":"#先序遍历","children":[]},{"level":2,"title":"中序遍历算法口诀","slug":"中序遍历算法口诀","link":"#中序遍历算法口诀","children":[]},{"level":2,"title":"后续遍历","slug":"后续遍历","link":"#后续遍历","children":[{"level":3,"title":"解压小视频","slug":"解压小视频","link":"#解压小视频","children":[]}]}],"git":{"createdTime":1690084142000,"updatedTime":1690084142000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.32,"words":995},"filePathRelative":"blog/学习笔记/队列.md","localizedDate":"2022年11月1日","excerpt":"<h2> 用 JS 数组方法模拟队列</h2>\\n<p>队列实例演示视频，可以看出是先进先出</p>\\n<iframe height=\\"419\\" width=\\"745\\" src=\\"https://player.youku.com/embed/XNTkwMjUzNjY2OA==\\" frameborder=\\"0\\" allowfullscreen=\\"true\\"></iframe>\\n<h2> JS 异步中的任务队列</h2>\\n<ul>\\n<li>JS 是单线程的，无法同时处理异步中的并发任务</li>\\n<li>使用任务队列先后处理异步任务</li>\\n</ul>\\n<h2> 链表模拟</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//链表  模拟</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">a</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"a\\"</span><span style=\\"color: #ABB2BF\\"> };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">b</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"b\\"</span><span style=\\"color: #ABB2BF\\"> };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">c</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"c\\"</span><span style=\\"color: #ABB2BF\\"> };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">d</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"d\\"</span><span style=\\"color: #ABB2BF\\"> };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">a</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">b</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">b</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">c</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">c</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">d</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//遍历链表</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">p</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">a</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">while</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">p</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">p</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E06C75\\">p</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">p</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//插入 改变next指向</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">e</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"e\\"</span><span style=\\"color: #ABB2BF\\"> };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">c</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">e</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">e</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">d</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">while</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">p</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">p</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">val</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E06C75\\">p</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">p</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//删除e</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">c</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">d</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"ZiHao","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{s as data};
