const e=JSON.parse('{"key":"v-38cc2c64","path":"/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/12%E4%B8%AA%E5%AE%9E%E7%94%A8%E7%9A%84JS%E5%87%BD%E6%95%B0.html","title":"12个实用的JS函数","lang":"zh-CN","frontmatter":{"title":"12个实用的JS函数","date":"2022-10-07T15:34:00.000Z","icon":"blog","tag":["javascript"],"category":["记录"],"description":"前言 本文收集了 12 个在日常开发中非常常用的函数，有些可能很复杂，有些可能很简单，但我相信或多或少会对大家都会有所帮助。 生成随机颜色 你的网站是否需要生成随机颜色？下面一行代码就可以实现。 const generateRandomHexColor = () =&gt; `#${Math.floor(Math.random() * 0xffffff).toString(16)}`; console.log(generateRandomHexColor());","head":[["meta",{"property":"og:url","content":"https://oragekk.me/Zzh/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/12%E4%B8%AA%E5%AE%9E%E7%94%A8%E7%9A%84JS%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"ZiHao Blog"}],["meta",{"property":"og:title","content":"12个实用的JS函数"}],["meta",{"property":"og:description","content":"前言 本文收集了 12 个在日常开发中非常常用的函数，有些可能很复杂，有些可能很简单，但我相信或多或少会对大家都会有所帮助。 生成随机颜色 你的网站是否需要生成随机颜色？下面一行代码就可以实现。 const generateRandomHexColor = () =&gt; `#${Math.floor(Math.random() * 0xffffff).toString(16)}`; console.log(generateRandomHexColor());"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T03:49:02.000Z"}],["meta",{"property":"article:author","content":"ZiHao"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2022-10-07T15:34:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T03:49:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12个实用的JS函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-07T15:34:00.000Z\\",\\"dateModified\\":\\"2023-07-23T03:49:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZiHao\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"生成随机颜色","slug":"生成随机颜色","link":"#生成随机颜色","children":[]},{"level":3,"title":"数组重排序","slug":"数组重排序","link":"#数组重排序","children":[]},{"level":3,"title":"复制到剪切板","slug":"复制到剪切板","link":"#复制到剪切板","children":[]},{"level":3,"title":"检测暗色主题","slug":"检测暗色主题","link":"#检测暗色主题","children":[]},{"level":3,"title":"滚动到顶部","slug":"滚动到顶部","link":"#滚动到顶部","children":[]},{"level":3,"title":"检测元素是否在屏幕中","slug":"检测元素是否在屏幕中","link":"#检测元素是否在屏幕中","children":[]},{"level":3,"title":"检测设备","slug":"检测设备","link":"#检测设备","children":[]},{"level":3,"title":"隐藏元素","slug":"隐藏元素","link":"#隐藏元素","children":[]},{"level":3,"title":"从 URL 中获取参数","slug":"从-url-中获取参数","link":"#从-url-中获取参数","children":[]},{"level":3,"title":"深拷贝对象","slug":"深拷贝对象","link":"#深拷贝对象","children":[]},{"level":3,"title":"等待函数","slug":"等待函数","link":"#等待函数","children":[]}]}],"git":{"createdTime":1690084142000,"updatedTime":1690084142000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.47,"words":740},"filePathRelative":"blog/学习笔记/12个实用的JS函数.md","localizedDate":"2022年10月7日","excerpt":"<h2> 前言</h2>\\n<p>本文收集了 12 个在日常开发中非常常用的函数，有些可能很复杂，有些可能很简单，但我相信或多或少会对大家都会有所帮助。</p>\\n<h3> 生成随机颜色</h3>\\n<p>你的网站是否需要生成随机颜色？下面一行代码就可以实现。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">generateRandomHexColor</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> () </span><span style=\\"color: #C678DD\\">=&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #98C379\\">`#</span><span style=\\"color: #C678DD\\">${</span><span style=\\"color: #E5C07B\\">Math</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">floor</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">Math</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">random</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0xffffff</span><span style=\\"color: #ABB2BF\\">).</span><span style=\\"color: #61AFEF\\">toString</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">16</span><span style=\\"color: #ABB2BF\\">)</span><span style=\\"color: #C678DD\\">}</span><span style=\\"color: #98C379\\">`</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #61AFEF\\">generateRandomHexColor</span><span style=\\"color: #ABB2BF\\">());</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"ZiHao","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};
