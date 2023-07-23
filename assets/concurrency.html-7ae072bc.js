import{_ as o,r as t,o as r,c,a as s,b as n,d as e,e as l}from"./app-bebbc25d.js";const i={},p=l('<p>Dart 通过 async-await、isolate 以及一些异步类型概念（例如 <code>Future</code> 和 <code>Stream</code>）支持了并发代码编程。本篇文章会对 async-await、<code>Future</code> 和 <code>Stream</code> 进行简略的介绍，而侧重点放在 isolate 的讲解上。</p><p>在应用中，所有的 Dart 代码都在 <strong>isolate</strong> 中运行。每一个 Dart 的 isolate 都有独立的运行线程，它们无法与其他 isolate 共享可变对象。在需要进行通信的场景里，isolate 会使用消息机制。很多 Dart 应用都只使用一个 isolate，也就是 main isolate。你可以创建额外的 isolate 以便在多个处理器核心上执行并行代码。</p><p>尽管 Dart 的 isolate 模型设计是基于操作系统提供的进程和线程等更为底层的原语进行设计的， Dart 虚拟机对其的使用是一个具体的实现，在本篇文章中，我们不对其具体实现展开讨论。</p><h2 id="异步的类型和语法" tabindex="-1"><a class="header-anchor" href="#异步的类型和语法" aria-hidden="true">#</a> 异步的类型和语法</h2>',4),d=s("code",null,"Future",-1),B=s("code",null,"Stream",-1),u={href:"https://dart.cn/guides/language/concurrency#how-isolates-work",target:"_blank",rel:"noopener noreferrer"},y=l('<h3 id="future-和-stream-类型" tabindex="-1"><a class="header-anchor" href="#future-和-stream-类型" aria-hidden="true">#</a> Future 和 Stream 类型</h3><p>Dart 语言和库通过 <code>Future</code> 和 <code>Stream</code> 对象，来提供会在当前调用的未来返回某些值的功能。以 JavaScript 中的 Promise 为例，在 Dart 中一个最终会返回 <code>int</code> 类型值的 promise，应当声明为 <code>Future&lt;int&gt;</code>；一个会持续返回一系列 <code>int</code> 类型值的 promise，应当声明为 <code>Stream&lt;int&gt;</code>。</p>',2),h=s("code",null,"File",-1),_={href:"https://api.dart.cn/stable/dart-io/File/readAsStringSync.html",target:"_blank",rel:"noopener noreferrer"},F=s("code",null,"readAsStringSync()",-1),g=s("code",null,"String",-1),A={href:"https://api.dart.cn/stable/dart-io/File/readAsString.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"readAsString()",-1),f=s("code",null,"Future<String>",-1),b=s("code",null,"Future<String>",-1),v=l(`<h4 id="为什么异步的代码如此重要" tabindex="-1"><a class="header-anchor" href="#为什么异步的代码如此重要" aria-hidden="true">#</a> 为什么异步的代码如此重要？</h4><p>It matters whether a method is synchronous or asynchronous because most apps need to do more than one thing at a time.</p><p>大部分应用需要在同一时刻做很多件事。例如，应用可能会发起一个 HTTP 请求，同时在请求返回前对用户的操作做出不同的界面更新。异步的代码会有助于应用保持更高的可交互状态。</p><p>异步场景包括调用系统 API，例如非阻塞的 I/O 操作、HTTP 请求或与浏览器交互。还有一些场景是利用 Dart 的 isolate 进行计算，或等待一个计时器的触发。这些场景要么是在不同的线程运行，要么是被系统或 Dart 运行时处理，让 Dart 代码可以在计算时同步运行。</p><h3 id="async-await-语法" tabindex="-1"><a class="header-anchor" href="#async-await-语法" aria-hidden="true">#</a> async-await 语法</h3><p><code>async</code> 和 <code>await</code> 关键字是用声明来定义异步函数和获取它们的结果的方式。</p><p>下面是一段同步代码调用文件 I/O 时阻塞的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Read some data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> fileData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_readFileSync</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonDecode</span><span style="color:#ABB2BF;">(fileData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Use that data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Number of JSON keys: \${</span><span style="color:#E06C75;font-style:italic;">jsonData</span><span style="color:#98C379;">.</span><span style="color:#E06C75;font-style:italic;">length</span><span style="color:#98C379;">}&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_readFileSync</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> file </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">File</span><span style="color:#ABB2BF;">(filename);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> contents </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> file.</span><span style="color:#61AFEF;">readAsStringSync</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> contents.</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是类似的代码，但是变成了 <strong>异步调用</strong>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Read some data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> fileData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_readFileAsync</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonDecode</span><span style="color:#ABB2BF;">(fileData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Use that data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Number of JSON keys: \${</span><span style="color:#E06C75;font-style:italic;">jsonData</span><span style="color:#98C379;">.</span><span style="color:#E06C75;font-style:italic;">length</span><span style="color:#98C379;">}&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Future</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">_readFileAsync</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> file </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">File</span><span style="color:#ABB2BF;">(filename);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> contents </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> file.</span><span style="color:#61AFEF;">readAsString</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> contents.</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main()</code> 函数在调用 <code>_readFileAsync()</code> 前使用了 <code>await</code> 关键字，让原生代码（文件 I/O）执行的同时，其他的 Dart 代码（例如事件处理器）能继续执行。使用 <code>await</code> 后，<code>_readFileAsync()</code> 调用返回的 <code>Future&lt;String&gt;</code> 类型也转换为了 <code>String</code>。从而在将结果 <code>content</code> 赋予变量时，隐式转换为 <code>String</code> 类型。</p><p><strong>备注:</strong></p><p><code>await</code> 关键字仅在函数体前定义了 <code>async</code> 的函数中有效。</p><p>如下图所示，无论是在 Dart VM 还是在系统中， Dart 代码都会在 <code>readAsString()</code> 执行非 Dart 代码时暂停。在 <code>readAsString()</code> 返回值后，Dart 代码将继续执行。</p><figure><img src="https://dart.cn/guides/language/concurrency/images/basics-await.png" alt="类似于流程图的图形显示了应用程序代码从开始到退出的执行过程，在这之间等待本地I/O" tabindex="0" loading="lazy"><figcaption>类似于流程图的图形显示了应用程序代码从开始到退出的执行过程，在这之间等待本地I/O</figcaption></figure>`,15),D=s("code",null,"async",-1),C=s("code",null,"await",-1),k=s("code",null,"Future",-1),E={href:"https://dart.cn/codelabs/async-await",target:"_blank",rel:"noopener noreferrer"},w=s("h2",{id:"isolate-的工作原理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#isolate-的工作原理","aria-hidden":"true"},"#"),n(" Isolate 的工作原理")],-1),I={href:"https://baike.baidu.com/l/kex6qKvt",target:"_blank",rel:"noopener noreferrer"},S={href:"https://baike.baidu.com/l/My2bXiba",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,[n("在使用 isolate 时，你的 Dart 代码可以在同一时刻进行多个独立的任务，并且使用可用的处理器核心。 Isolate 与线程和进程近似，但是"),s("mark",null,"每个 isolate 都拥有独立的内存，以及运行事件循环的独立线程。")],-1),P=s("strong",null,"Platform note:",-1),j={href:"https://dart.cn/overview#platform",target:"_blank",rel:"noopener noreferrer"},N={href:"https://dart.cn/guides/language/concurrency#concurrency-on-the-web",target:"_blank",rel:"noopener noreferrer"},O={class:"hint-container info"},W=s("p",{class:"hint-container-title"},"平台说明",-1),J={href:"https://dart.cn/overview#platform",target:"_blank",rel:"noopener noreferrer"},U=s("a",{href:"#%E5%9C%A8web%E7%9A%84%E5%B9%B6%E5%8F%91"},"Web的并发性部分",-1),z=l('<h3 id="主-isolate" tabindex="-1"><a class="header-anchor" href="#主-isolate" aria-hidden="true">#</a> 主 isolate</h3><p>在一般场景下，你完全无需关心 isolate。通常一个 Dart 应用会在主 isolate 下执行所有代码，如下图所示：</p><figure><img src="https://dart.cn/guides/language/concurrency/images/basics-main-isolate.png" alt="图中显示了一个主隔离区，它运行，对事件作出反应，然后退出" tabindex="0" loading="lazy"><figcaption>图中显示了一个主隔离区，它运行<code>main()</code>，对事件作出反应，然后退出</figcaption></figure><p>就算是只有一个 isolate 的应用，只要通过使用 async-await 来处理异步操作，也完全可以流畅运行。一个拥有良好性能的应用，会在快速启动后尽快进入事件循环。这使得应用可以通过异步操作快速响应对应的事件。</p><h3 id="isolate-的生命周期" tabindex="-1"><a class="header-anchor" href="#isolate-的生命周期" aria-hidden="true">#</a> Isolate 的生命周期</h3><p>如下图所示，每个 isolate 都是从运行 Dart 代码开始的，比如 <code>main()</code> 函数。执行的 Dart 代码可能会注册一些事件监听，例如处理用户操作或文件读写。当 isolate 执行的 Dart 代码结束后，如果它还需要处理已监听的事件，那么它依旧会继续被保持。处理完所有事件后，isolate 会退出。</p><figure><img src="https://dart.cn/guides/language/concurrency/images/basics-isolate.png" alt="一个更一般的图显示，任何隔离体都会运行一些代码，选择性地对事件做出反应，然后退出" tabindex="0" loading="lazy"><figcaption>一个更一般的图显示，任何隔离体都会运行一些代码，选择性地对事件做出反应，然后退出</figcaption></figure><h3 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h3><p>在客户端应用中，主 isolate 的事件队列内，可能会包含重绘的请求、点击的通知或者其他界面事件。例如，下图展示了包含四个事件的事件队列，队列会按照先进先出的模式处理事件。</p><figure><img src="https://dart.cn/guides/language/concurrency/images/event-loop.png" alt="一个显示事件被逐一送入事件循环的图。" tabindex="0" loading="lazy"><figcaption>一个显示事件被逐一送入事件循环的图。</figcaption></figure><p>如下图所示，在 <code>main()</code> 方法执行完毕后，事件队列中的处理才开始，此时处理的是第一个重绘的事件。而后主 isolate 会处理点击事件，接着再处理另一个重绘事件。</p><figure><img src="https://dart.cn/guides/language/concurrency/images/event-handling.png" alt="显示主隔离区逐一执行事件处理程序的图" tabindex="0" loading="lazy"><figcaption>显示主隔离区逐一执行事件处理程序的图</figcaption></figure><p>如果某个同步执行的操作花费了很长的处理时间，应用看起来就像是失去了响应。在下图中，处理点击事件的代码比较耗时，导致紧随其后的事件并没有及时处理。这时应用可能会产生卡顿，所有的动画都无法流畅播放。</p><figure><img src="https://dart.cn/guides/language/concurrency/images/event-jank.png" alt="图中显示了一个执行时间过长的分接处理程序" tabindex="0" loading="lazy"><figcaption>图中显示了一个执行时间过长的分接处理程序</figcaption></figure>',14),R={href:"https://flutter.cn/docs/perf/rendering-performance",target:"_blank",rel:"noopener noreferrer"},T=s("h3",{id:"后台运行对象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#后台运行对象","aria-hidden":"true"},"#"),n(" 后台运行对象")],-1),M={href:"https://flutter.cn/docs/cookbook/networking/background-parsing",target:"_blank",rel:"noopener noreferrer"},V=s("strong",null,"后台运行对象",-1),$=s("figure",null,[s("img",{src:"https://dart.cn/guides/language/concurrency/images/isolate-bg-worker.png",alt:"A figure showing a main isolate and a simple worker isolate",tabindex:"0",loading:"lazy"}),s("figcaption",null,"A figure showing a main isolate and a simple worker isolate")],-1),L=s("p",null,[n("每个 isolate 都可以通过消息通信传递一个对象，这个对象的所有内容都需要满足可传递的条件。并非所有的对象都满足传递条件，在无法满足条件时，消息发送会失败。举个例子，如果你想发送一个 "),s("code",null,"List<Object>"),n("，你需要确保这个列表中所有元素都是可被传递的。假设这个列表中有一个 "),s("code",null,"Socket"),n("，由于它无法被传递，所以你无法发送整个列表。")],-1),H={href:"https://api.dart.cn/stable/dart-isolate/SendPort/send.html",target:"_blank",rel:"noopener noreferrer"},q=s("code",null,"send()",-1),K=s("p",null,"Isolate 工作对象可以进行 I/O 操作、设置定时器，以及其他各种行为。它会持有自己内存空间，与主 isolate 互相隔离。这个 isolate 在阻塞时也不会对其他 isolate 造成影响。",-1),X=s("h2",{id:"代码示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码示例","aria-hidden":"true"},"#"),n(" 代码示例")],-1),G=s("p",null,[n("本节将重点讨论使用 "),s("code",null,"Isolate"),n(" API 实现 isolate 的一些示例。")],-1),Q=s("h3",{id:"实现一个简单的-isolate-工作对象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实现一个简单的-isolate-工作对象","aria-hidden":"true"},"#"),n(" 实现一个简单的 isolate 工作对象")],-1),Y={href:"https://api.dart.cn/dev/dart-isolate/Isolate/run.html",target:"_blank",rel:"noopener noreferrer"},Z=s("code",null,"Isolate.run()",-1),ss=s("ol",null,[s("li",null,"生成（启动并创建）一个隔离器"),s("li",null,"在生成的隔离体上运行一个函数"),s("li",null,"捕获结果"),s("li",null,"将结果返回给主隔离区"),s("li",null,"工作完成后，终止隔离区的运行"),s("li",null,"检查、捕获并将异常和错误抛回给主隔离区")],-1),ns={class:"hint-container tip"},as=s("p",{class:"hint-container-title"},"备注",-1),es={href:"https://api.flutter-io.cn/flutter/foundation/compute-constant.html",target:"_blank",rel:"noopener noreferrer"},ls=s("code",null,"compute()",-1),os=s("code",null,"Isolate.run()",-1),ts=s("code",null,"compute",-1),rs={href:"https://dart.cn/overview#platform",target:"_blank",rel:"noopener noreferrer"},cs=s("code",null,"Isolate.run()",-1),is=l(`<h4 id="在一个新的隔离区中运行一个现有的方法" tabindex="-1"><a class="header-anchor" href="#在一个新的隔离区中运行一个现有的方法" aria-hidden="true">#</a> 在一个新的隔离区中运行一个现有的方法</h4><p>主 isolate 的代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Read some data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Isolate</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(_readAndParseJson);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Use that data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Number of JSON keys: \${</span><span style="color:#E06C75;font-style:italic;">jsonData</span><span style="color:#98C379;">.</span><span style="color:#E06C75;font-style:italic;">length</span><span style="color:#98C379;">}&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的隔离器会执行作为第一个参数传递的函数, <code>_readAndParseJson</code>:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Future</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">dynamic</span><span style="color:#ABB2BF;">&gt;&gt; </span><span style="color:#61AFEF;">_readAndParseJson</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> fileData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">File</span><span style="color:#ABB2BF;">(filename).</span><span style="color:#61AFEF;">readAsString</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonDecode</span><span style="color:#ABB2BF;">(fileData) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">dynamic</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> jsonData;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>Isolate.run()</code> 产生了一个隔离器，即后台工作者， 而 <code>main()</code> 则在等待结果</li><li>生成的隔离器会执行传递给 <code>run()</code>的参数: the function <code>_readAndParseJson()</code>.</li><li><code>Isolate.run()</code> 从返回中获取结果，并将该值送回主隔离区，从而关闭工作隔离区。</li><li>工作者隔离区会将保存结果的内存<em>转移</em>到主隔离区。它并<em>不复制</em>数据。工作者隔离区会执行一个验证通道，以确保对象被允许转移。</li></ol><p><code>_readAndParseJson()</code> 是一个现有的异步函数，可以很容易地直接在主隔离区中运行。使用 <code>Isolate.run()</code> 来运行它，从而实现了并发性。工作者隔离区完全抽象了<code>_readAndParseJson()</code>的计算过程。它可以在不阻塞主隔离区的情况下完成。</p><p><code>Isolate.run()</code> 的结果总是一个Future，因为主隔离区的代码仍在继续运行。工作者隔离区执行的计算是同步的还是异步的，并不影响主隔离区，因为无论如何，它都是在并发地运行。</p><h4 id="sending-closures-with-isolates" tabindex="-1"><a class="header-anchor" href="#sending-closures-with-isolates" aria-hidden="true">#</a> Sending closures with isolates</h4><p>您也可以在主隔离区中直接使用函数字面或闭包，用<code>run()</code> 创建一个简单的工作隔离区。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Read some data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Isolate</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> fileData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">File</span><span style="color:#ABB2BF;">(filename).</span><span style="color:#61AFEF;">readAsString</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">final</span><span style="color:#ABB2BF;"> jsonData </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonDecode</span><span style="color:#ABB2BF;">(fileData) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">dynamic</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> jsonData;</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Use that data.</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Number of JSON keys: \${</span><span style="color:#E06C75;font-style:italic;">jsonData</span><span style="color:#98C379;">.</span><span style="color:#E06C75;font-style:italic;">length</span><span style="color:#98C379;">}&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子的完成情况与前一个例子相同。一个新的隔离器产生了，计算了一些东西，并把结果送了回来。</p>`,12),ps={href:"https://dart.cn/guides/language/language-tour#anonymous-functions",target:"_blank",rel:"noopener noreferrer"},ds=s("code",null,"Isolate.run()",-1),Bs=s("code",null,"run()",-1),us={href:"https://dart.cn/guides/language/language-tour#control-flow-statements",target:"_blank",rel:"noopener noreferrer"},ys=s("h3",{id:"实现一个简单的-isolate-工作对象-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实现一个简单的-isolate-工作对象-1","aria-hidden":"true"},"#"),n(" 实现一个简单的 isolate 工作对象")],-1),hs=s("p",null,[s("code",null,"Isolate.run()"),n(" a抽取了一些较低级别的、与隔离物相关的API，以简化隔离物管理：")],-1),_s={href:"https://api.dart.cn/stable/dart-isolate/Isolate/spawn.html",target:"_blank",rel:"noopener noreferrer"},Fs=s("code",null,"Isolate.spawn()",-1),gs={href:"https://api.dart.cn/stable/dart-isolate/Isolate/exit.html",target:"_blank",rel:"noopener noreferrer"},As=s("code",null,"Isolate.exit()",-1),ms={href:"https://api.dart.cn/stable/dart-isolate/ReceivePort-class.html",target:"_blank",rel:"noopener noreferrer"},fs=s("code",null,"ReceivePort",-1),bs={href:"https://api.dart.cn/stable/dart-isolate/SendPort-class.html",target:"_blank",rel:"noopener noreferrer"},vs=s("code",null,"SendPort",-1),Ds=s("code",null,"run()",-1),Cs=s("code",null,"run()",-1),ks=s("code",null,"SendPort",-1),Es={href:"https://api.dart.cn/stable/dart-isolate/SendPort/send.html",target:"_blank",rel:"noopener noreferrer"},ws=s("code",null,"send()",-1),Is=s("code",null,"SendPort",-1),Ss={href:"https://api.dart.cn/stable/dart-isolate/SendPort/send.html",target:"_blank",rel:"noopener noreferrer"},xs=s("code",null,"send()",-1),Ps=s("figure",null,[s("img",{src:"https://dart.cn/guides/language/concurrency/images/isolate-custom-bg-worker.png",alt:"图中显示了主隔离器催生隔离器，然后发送请求消息，工作隔离器用回复消息进行响应；显示了两个请求-回复循环。",tabindex:"0",loading:"lazy"}),s("figcaption",null,"图中显示了主隔离器催生隔离器，然后发送请求消息，工作隔离器用回复消息进行响应；显示了两个请求-回复循环。")],-1),js={href:"https://github.com/dart-lang/samples/tree/master/isolates",target:"_blank",rel:"noopener noreferrer"},Ns={href:"https://github.com/dart-lang/samples/tree/master/isolates/bin/send_and_receive.dart",target:"_blank",rel:"noopener noreferrer"},Os=s("code",null,"run()",-1),Ws={href:"https://github.com/dart-lang/samples/tree/master/isolates/bin/long_running_isolate.dart",target:"_blank",rel:"noopener noreferrer"},Js=s("h2",{id:"性能和-isolate-组",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#性能和-isolate-组","aria-hidden":"true"},"#"),n(" 性能和 isolate 组")],-1),Us={href:"https://api.dart.cn/stable/dart-isolate/Isolate/spawn.html",target:"_blank",rel:"noopener noreferrer"},zs=s("code",null,"Isolate.spawn()",-1),Rs=s("strong",null,"isolate 组",-1),Ts=s("code",null,"Isolate.exit()",-1),Ms={href:"https://api.dart.cn/stable/dart-isolate/Isolate/spawnUri.html",target:"_blank",rel:"noopener noreferrer"},Vs=s("code",null,"Isolate.spawnUri()",-1),$s=s("code",null,"spawnUri()",-1),Ls=s("code",null,"spawn()",-1),Hs=l('<div class="hint-container tip"><p class="hint-container-title">备注</p><p><img src="https://dart.cn/assets/img/shared/flutter/icon/64.png" alt="Flutter logo" width="20" loading="lazy">Flutter 不支持 <code>Isolate.spawnUri()</code>。</p></div><h2 id="在web的并发" tabindex="-1"><a class="header-anchor" href="#在web的并发" aria-hidden="true">#</a> 在Web的并发</h2>',2),qs=s("code",null,"async-await",-1),Ks=s("code",null,"Future",-1),Xs=s("code",null,"Stream",-1),Gs=s("a",{href:"(https://dart.cn/overview#platform)"},"Dart web 平台",-1),Qs={href:"https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"},Ys=s("p",null,"例如，当Web工作者在线程之间发送数据时，他们会来回复制数据。不过，数据复制的速度可能非常慢，尤其是对于大的消息。隔离器也做同样的事情，但也提供了API，可以更有效地传输保存消息的内存。",-1),Zs=s("code",null,"Isolate.spoonUri",-1),sn=s("code",null,"Isolate.spown",-1),nn={href:"https://dart.cn/guides/language/concurrency#performance-and-isolate-groups",target:"_blank",rel:"noopener noreferrer"};function an(en,ln){const a=t("ExternalLinkIcon");return r(),c("div",null,[p,s("p",null,[n("如果你已经对 "),d,n("、"),B,n(" 和 async-await 比较熟悉了，可以直接跳到 "),s("a",u,[n("isolate 部分"),e(a)]),n(" 进行阅读。")]),y,s("p",null,[n("让我们用 dart:io 来举另外一个例子。"),h,n(" 的同步方法 "),s("a",_,[F,e(a)]),n(" 会以同步调用的方式读取文件，在读取完成或者抛出错误前保持阻塞。这个会返回 "),g,n(" 类型的对象，或者抛出异常。而与它等效的异步方法 "),s("a",A,[m,e(a)]),n("，会在调用时立刻返回 "),f,n(" 类型的对象。在未来的某一刻，"),b,n(" 会结束，并返回一个字符串或错误。")]),v,s("p",null,[n("如果你想了解更多关于 "),D,n("、"),C,n(" 和 "),k,n(" 的内容，可以访问 "),s("a",E,[n("异步编程 codelab"),e(a)]),n(" 进行学习。")]),w,s("p",null,[n("现代的设备通常会使用多核 CPU。开发者为了让程序在设备上有更好的表现，有时会使用共享内容的线程来并发运行代码。然而，状态的共享可能会 "),s("a",I,[n("产生竞态条件，从而造成错误"),e(a)]),n("，也可能会增加代码的复杂度。")]),s("p",null,[n("Dart 代码并不在多个线程上运行，取而代之的是它们会在 isolate 内运行。每一个 isolate 会有自己的堆内存，从而确保 isolate 之间互相隔离，无法互相访问状态。由于这样的实现并不会共享内存，所以你也不需要担心 "),s("a",S,[n("互斥锁和其他锁"),e(a)]),n("。")]),x,s("p",null,[P,n(" Only the "),s("a",j,[n("Dart Native platform"),e(a)]),n(" implements isolates. To learn more about the Dart Web platform, see the "),s("a",N,[n("Concurrency on the web"),e(a)]),n(" section.")]),s("div",O,[W,s("p",null,[n("只有"),s("a",J,[n("Dart Native"),e(a)]),n("平台实现了隔离器。要了解更多关于Dart网络平台的信息，请参见"),U,n("。")])]),z,s("p",null,[n("在一个客户端应用中，耗时过长的同步操作，通常会导致 "),s("a",R,[n("卡顿的动画"),e(a)]),n("。而最糟糕的是，应用界面可能完全失去响应。")]),T,s("p",null,[n("如果你的应用受到耗时计算的影响而出现卡顿，例如 "),s("a",M,[n("解析较大的 JSON 文件"),e(a)]),n("，你可以考虑将耗时计算转移到单独工作的 isolate，通常我们称这样的 isolate 为 "),V,n("。下图展示了一种常用场景，你可以生成一个 isolate，它将执行耗时计算的任务，并在结束后退出。这个 isolate 工作对象退出时会把结果返回。")]),$,L,s("p",null,[n("你可以查阅 "),s("a",H,[q,n(" 方法"),e(a)]),n(" 的文档来确定哪些类型可以进行传递。")]),K,X,G,Q,s("p",null,[n("这些例子实现了一个主隔离器，它生成了一个简单的工作隔离器。 "),s("a",Y,[Z,e(a)]),n(" 简化了设置和管理工作者隔离区的步骤:")]),ss,s("div",ns,[as,s("p",null,[n("如果你使用Flutter，考虑使用"),s("a",es,[n("Flutter的"),ls,n("函数"),e(a)]),n("而不是"),os,n("。"),ts,n("函数允许你的代码在"),s("a",rs,[n("本地和非本地平台"),e(a)]),n("上工作。当只针对原生平台时，使用"),cs,n("以获得更符合人类工程学的的API。")])]),is,s("p",null,[n("不过，现在这个隔离体发送的是一个"),s("a",ps,[n("闭包"),e(a)]),n("。与典型的命名函数相比，闭包的限制较少，无论是在功能上还是在代码中的编写方式上。在这个例子中，"),ds,n("执行的是看起来像本地代码的东西，同时进行。在这个意义上，你可以把"),Bs,n('想象成一个 "并行运行 "的'),s("a",us,[n("控制流操作符"),e(a)]),n("。")]),ys,hs,s("ul",null,[s("li",null,[s("a",_s,[Fs,e(a)]),n(" and "),s("a",gs,[As,e(a)])]),s("li",null,[s("a",ms,[fs,e(a)]),n(" and "),s("a",bs,[vs,e(a)])])]),s("p",null,[n("您可以直接使用这些基元来对隔离区的功能进行更精细的控制。例如，"),Ds,n("在返回一条消息后就会关闭其隔离区。如果您想允许多个消息在隔离区之间传递，该怎么办呢？您可以用与"),Cs,n("的实现方式大致相同的方式来设置自己的隔离区，只是以稍微不同的方式利用"),ks,n("的"),s("a",Es,[ws,n("方法"),e(a)]),n("。")]),s("p",null,[n("如果你想在 isolate 之间建立更多的通信，那么你需要使用 "),Is,n(" 的 "),s("a",Ss,[xs,n(" 方法"),e(a)]),n("。下图展示了一种常见的场景，主 isolate 会发送请求消息至 isolate 工作对象，然后它们之间会继续进行多次通信，进行请求和回复。")]),Ps,s("p",null,[n("下方列举的 "),s("a",js,[n("isolate 示例"),e(a)]),n(" 包含了发送多次消息的使用方法：")]),s("ul",null,[s("li",null,[s("a",Ns,[n("send_and_receive.dart"),e(a)]),n(" 展示了如何从主 isolate 发送消息至生成的 isolate，与前面的示例较为接近，不过没有使用 "),Os,n(" 方法；")]),s("li",null,[s("a",Ws,[n("long_running_isolate.dart"),e(a)]),n(" 展示了如何生成一个长期运行、且多次发送和接收消息的 isolate。")])]),Js,s("p",null,[n("当一个 isolate 调用了 "),s("a",Us,[zs,e(a)]),n("，两个 isolate 将拥有同样的执行代码，并归入同一个 "),Rs,n(" 中。 Isolate 组会带来性能优化，例如新的 isolate 会运行由 isolate 组持有的代码，即共享代码调用。同时，"),Ts,n(" 仅在对应的 isolate 属于同一组时有效。")]),s("p",null,[n("某些场景下，你可能需要使用 "),s("a",Ms,[Vs,e(a)]),n("，使用执行的 URI 生成新的 isolate，并且包含代码的副本。然而，"),$s,n(" 会比 "),Ls,n(" 慢很多，并且新生成的 isolate 会位于新的 isolate 组。另外，当 isolate 在不同的组中，它们之间的消息传递会变得更慢。")]),Hs,s("p",null,[n("所有的Dart应用程序都可以使用"),qs,n("、"),Ks,n("和"),Xs,n("进行非阻塞、交错的计算。然而，"),Gs,n("并不支持隔离器。Dart网络应用程序可以使用网络工作者在后台线程中运行脚本，这与隔离程序类似。不过，"),s("a",Qs,[n("web workers"),e(a)]),n("的功能和能力与隔离器有些不同。")]),Ys,s("p",null,[n("创建Web Worker和Isolates也有不同。你只能通过声明一个单独的程序入口并单独编译来创建网络工作者。启动Web Worker类似于使用"),Zs,n("来启动一个隔离器。您也可以使用"),sn,n("来启动一个隔离器，这需要的资源较少，因为它"),s("a",nn,[n("重用了一些与催生隔离器相同的代码和数据"),e(a)]),n("。Web Worker没有一个同等的API。")])])}const tn=o(i,[["render",an],["__file","concurrency.html.vue"]]);export{tn as default};
