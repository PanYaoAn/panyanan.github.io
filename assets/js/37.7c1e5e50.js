(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{203:function(n,t,e){"use strict";e.r(t);var r=e(0),a=Object(r.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"_1、什么是html语义化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是html语义化？"}},[n._v("#")]),n._v(" 1、什么是HTML语义化？")]),n._v(" "),e("pre",[e("code",[n._v("<基本上都是围绕着几个主要的标签，像标题（H1~H6）、列表（li）、强调（strong em）等等>\n\n根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。\n")])]),n._v(" "),e("h2",{attrs:{id:"_2、语义化标签的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、语义化标签的特点"}},[n._v("#")]),n._v(" 2、语义化标签的特点")]),n._v(" "),e("pre",[e("code",[n._v("代码结构清晰，方便阅读，有利于团队合作开发。\n\n方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。\n\n有利于搜索引擎优化（SEO）。\n\n便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。\n")])]),n._v(" "),e("h2",{attrs:{id:"_3、写html代码时应注意什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、写html代码时应注意什么？"}},[n._v("#")]),n._v(" 3、写HTML代码时应注意什么？")]),n._v(" "),e("pre",[e("code",[n._v("尽可能少的使用无语义的标签div和span；\n在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；\n不要使用纯样式标签，如：b、font、u等，改用css设置。\n需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；\n使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；\n表单域要用fieldset标签包起来，并用legend标签说明表单的用途；\n每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。\n")])]),n._v(" "),e("h2",{attrs:{id:"_4、常见的语义化标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、常见的语义化标签"}},[n._v("#")]),n._v(" 4、常见的语义化标签")]),n._v(" "),e("pre",[e("code",[n._v("因此我们在写页面结构时，应尽量使用有 语义的HTML 标签\n\n<title>：页面主体内容。\n\n<hn>：h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。\n\n<ul>：无序列表。\n\n<ol>：有序列表。\n\n<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框。\n\n<nav>：标记导航，仅对文档中重要的链接群使用。\n\n<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。\n\n<article>：定义外部的内容，其中的内容独立于文档的其余部分。\n\n<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。\n\n<aside>：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。\n\n<footer>：页脚，只有当父级是body时，才是整个页面的页脚。\n\n<small>：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。\n\n<strong>：和 em 标签一样，用于强调文本，但它强调的程度更强一些。\n\n<em>：将其中的文本表示为强调的内容，表现为斜体。\n\n<mark>：使用黄色突出显示部分文本。\n\n<figure>：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。\n\n<figcaption>：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。\n\n<cite>：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。\n\n<blockquoto>：定义块引用，块引用拥有它们自己的空间。\n\n<q>：短的引述（跨浏览器问题，尽量避免使用）。\n\n<time>：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。\n\n<abbr>：简称或缩写。\n\n<dfn>：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。\n\n<del>：移除的内容。\n\n<ins>：添加的内容。\n\n<code>：标记代码。\n\n<meter>：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）\n\n<progress>：定义运行中的进度（进程）。\n")])])])}],!1,null,null,null);t.default=a.exports}}]);