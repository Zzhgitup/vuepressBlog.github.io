const s=JSON.parse('{"key":"v-675a9981","path":"/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95.html","title":"回溯算法题","lang":"zh-CN","frontmatter":{"title":"回溯算法题","date":"2022-10-29T20:34:21.000Z","icon":"blog","tag":["算法"],"category":["记录"],"description":"输入一个字符串，打印出该字符串中字符的所有排列。 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 输入：s = \\"abc\\" 输出：[\\"abc\\",\\"acb\\",\\"bac\\",\\"bca\\",\\"cab\\",\\"cba\\"] /** * @param {string} s * @return {string[]} * 全排列算法: * 固定位置依次递归交换位置穷举出所有的可能性。 */ var permutation = function (s) { const char = s.split(\\"\\"); const res = []; const dsf = function (n) { // 递归的出口,如果是遍历到最后一个位置此方法就解了 if (n === char.length) { res.push(char.join(\\"\\")); return; } const catSet = new Set(); for (let i = n; i &lt; char.length; i++) { //如果有相同的交换，则不需要处理枝减。 if (catSet.has(char[i])) continue; catSet.add(char[i]); // 被固定的位置和其他位置依次交换位置 { const t = char[n]; char[n] = char[i]; char[i] = t; } // 递归下一个位置 dsf(n + 1); // 被交换的位置需要回溯归位。 { const t = char[n]; char[n] = char[i]; char[i] = t; } } }; dsf(0); return res.sort(); };","head":[["meta",{"property":"og:url","content":"https://oragekk.me/Zzh/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"ZiHao Blog"}],["meta",{"property":"og:title","content":"回溯算法题"}],["meta",{"property":"og:description","content":"输入一个字符串，打印出该字符串中字符的所有排列。 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 输入：s = \\"abc\\" 输出：[\\"abc\\",\\"acb\\",\\"bac\\",\\"bca\\",\\"cab\\",\\"cba\\"] /** * @param {string} s * @return {string[]} * 全排列算法: * 固定位置依次递归交换位置穷举出所有的可能性。 */ var permutation = function (s) { const char = s.split(\\"\\"); const res = []; const dsf = function (n) { // 递归的出口,如果是遍历到最后一个位置此方法就解了 if (n === char.length) { res.push(char.join(\\"\\")); return; } const catSet = new Set(); for (let i = n; i &lt; char.length; i++) { //如果有相同的交换，则不需要处理枝减。 if (catSet.has(char[i])) continue; catSet.add(char[i]); // 被固定的位置和其他位置依次交换位置 { const t = char[n]; char[n] = char[i]; char[i] = t; } // 递归下一个位置 dsf(n + 1); // 被交换的位置需要回溯归位。 { const t = char[n]; char[n] = char[i]; char[i] = t; } } }; dsf(0); return res.sort(); };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-23T03:49:02.000Z"}],["meta",{"property":"article:author","content":"ZiHao"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2022-10-29T20:34:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-23T03:49:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"回溯算法题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-29T20:34:21.000Z\\",\\"dateModified\\":\\"2023-07-23T03:49:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZiHao\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[],"git":{"createdTime":1690084142000,"updatedTime":1690084142000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"blog/学习笔记/回溯算法.md","localizedDate":"2022年10月30日","excerpt":"<p>输入一个字符串，打印出该字符串中字符的所有排列。<br>\\n你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。<br>\\n<code>输入：s = \\"abc\\" 输出：[\\"abc\\",\\"acb\\",\\"bac\\",\\"bca\\",\\"cab\\",\\"cba\\"]</code></p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * </span><span style=\\"color: #C678DD; font-style: italic\\">@param</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E5C07B; font-style: italic\\">{string}</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">s</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * </span><span style=\\"color: #C678DD; font-style: italic\\">@return</span><span style=\\"color: #7F848E; font-style: italic\\"> </span><span style=\\"color: #E5C07B; font-style: italic\\">{string[]}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * 全排列算法:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *   固定位置依次递归交换位置穷举出所有的可能性。</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">permutation</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">function</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75; font-style: italic\\">s</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">char</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">s</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">split</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">\\"\\"</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">res</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> [];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">dsf</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">function</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75; font-style: italic\\">n</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #7F848E; font-style: italic\\">// 递归的出口,如果是遍历到最后一个位置此方法就解了</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">===</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">char</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">res</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">char</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">join</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">\\"\\"</span><span style=\\"color: #ABB2BF\\">));</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">catSet</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">Set</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">for</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">let</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">char</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">length</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #56B6C2\\">++</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #7F848E; font-style: italic\\">//如果有相同的交换，则不需要处理枝减。</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E5C07B\\">catSet</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">has</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">])) </span><span style=\\"color: #C678DD\\">continue</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #E5C07B\\">catSet</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">add</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">]);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #7F848E; font-style: italic\\">// 被固定的位置和其他位置依次交换位置</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">t</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #7F848E; font-style: italic\\">// 递归下一个位置</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #61AFEF\\">dsf</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #7F848E; font-style: italic\\">// 被交换的位置需要回溯归位。</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">n</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #E06C75\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #E06C75\\">i</span><span style=\\"color: #ABB2BF\\">] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">t</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #61AFEF\\">dsf</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">res</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">sort</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"ZiHao","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{s as data};
