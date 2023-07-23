const s=JSON.parse('{"key":"v-7cb80340","path":"/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%89%91%E6%8C%87%20Offer%2029.%20%E9%A1%BA%E6%97%B6%E9%92%88%E6%89%93%E5%8D%B0%E7%9F%A9%E9%98%B5(JS%E7%89%88).html","title":"顺时针打印矩阵JS版","lang":"zh-CN","frontmatter":{"title":"顺时针打印矩阵JS版","icon":"blog","date":"2022-05-01T00:00:00.000Z","tag":["算法"],"category":["记录"],"description":"输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。 /** * @param {number[][]} matrix * @return {number[]} */ var spiralOrder = function (matrix) { if (matrix.length == 0) { return []; } if (matrix[0].length == 0) { return []; } //向右 获取长和宽 let height = matrix.length; let width = matrix[0].length; let result = []; //向右打印 for (let i = 0; i &lt; width; i++) { result.push(matrix[0][i]); } //如果有向下的，则向下 不能则返回结果 if (height &gt; 1) { for (let k = 1; k &lt; height; k++) { result.push(matrix[k][width - 1]); } } else { return result; } //如果能向左就向左 不能则返回结果 if (width &gt; 1) { for (let i = width - 2; i &gt;= 0; i--) { result.push(matrix[height - 1][i]); } } else { return result; } //如果能向上 则向上，不能则返回结果 if (height &gt; 2) { for (let i = height - 2; i &gt;= 1; i--) { result.push(matrix[i][0]); } } else { return result; } //剥除里面的矩阵 (循环一次减掉两层高度) let inner = new Array(height - 2); for (let i = 0; i &lt; height - 2; i++) { inner[i] = matrix[i + 1].slice(1, width - 1); } //递归 result = result.concat(spiralOrder(inner)); return result; };","head":[["meta",{"property":"og:url","content":"https://oragekk.me/Zzh/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%89%91%E6%8C%87%20Offer%2029.%20%E9%A1%BA%E6%97%B6%E9%92%88%E6%89%93%E5%8D%B0%E7%9F%A9%E9%98%B5(JS%E7%89%88).html"}],["meta",{"property":"og:site_name","content":"ZiHao Blog"}],["meta",{"property":"og:title","content":"顺时针打印矩阵JS版"}],["meta",{"property":"og:description","content":"输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。 /** * @param {number[][]} matrix * @return {number[]} */ var spiralOrder = function (matrix) { if (matrix.length == 0) { return []; } if (matrix[0].length == 0) { return []; } //向右 获取长和宽 let height = matrix.length; let width = matrix[0].length; let result = []; //向右打印 for (let i = 0; i &lt; width; i++) { result.push(matrix[0][i]); } //如果有向下的，则向下 不能则返回结果 if (height &gt; 1) { for (let k = 1; k &lt; height; k++) { result.push(matrix[k][width - 1]); } } else { return result; } //如果能向左就向左 不能则返回结果 if (width &gt; 1) { for (let i = width - 2; i &gt;= 0; i--) { result.push(matrix[height - 1][i]); } } else { return result; } //如果能向上 则向上，不能则返回结果 if (height &gt; 2) { for (let i = height - 2; i &gt;= 1; i--) { result.push(matrix[i][0]); } } else { return result; } //剥除里面的矩阵 (循环一次减掉两层高度) let inner = new Array(height - 2); for (let i = 0; i &lt; height - 2; i++) { inner[i] = matrix[i + 1].slice(1, width - 1); } //递归 result = result.concat(spiralOrder(inner)); return result; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T03:49:02.000Z"}],["meta",{"property":"article:author","content":"ZiHao"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2022-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T03:49:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"顺时针打印矩阵JS版\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-23T03:49:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZiHao\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[],"git":{"createdTime":1690084142000,"updatedTime":1690084142000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"blog/学习笔记/剑指 Offer 29. 顺时针打印矩阵(JS版).md","localizedDate":"2022年5月1日","excerpt":"<p>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * </span><span style=\\"color: #C678DD; font-style: italic\\">@param</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E5C07B; font-style: italic\\">{number[][]}</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">matrix</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * </span><span style=\\"color: #C678DD; font-style: italic\\">@return</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E5C07B; font-style: italic\\">{number[]}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">spiralOrder</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">function</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75; font-style: italic\\">matrix</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E5C07B\\">matrix</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> [];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">].</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> [];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//向右  获取长和宽</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">matrix</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">].</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> [];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//向右打印</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #56B6C2\\">++</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E5C07B\\">result</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">][</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">]);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//如果有向下的，则向下 不能则返回结果</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">k</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">k</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">k</span><span style=\\"color: #56B6C2\\">++</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">result</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">k</span><span style=\\"color: #ABB2BF\\">][</span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">]);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  } </span><span style=\\"color: #C678DD\\">else</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//如果能向左就向左 不能则返回结果</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #56B6C2\\">--</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">result</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">][</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">]);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  } </span><span style=\\"color: #C678DD\\">else</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//如果能向上 则向上，不能则返回结果</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&gt;=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #56B6C2\\">--</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">result</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">][</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">]);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  } </span><span style=\\"color: #C678DD\\">else</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//剥除里面的矩阵  (循环一次减掉两层高度)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">inner</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">Array</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">height</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #56B6C2\\">++</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">inner</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">matrix</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">].</span><span style=\\"color: #61AFEF\\">slice</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E06C75\\">width</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//递归</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">result</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">concat</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #61AFEF\\">spiralOrder</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">inner</span><span style=\\"color: #ABB2BF\\">));</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">result</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"ZiHao","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{s as data};
