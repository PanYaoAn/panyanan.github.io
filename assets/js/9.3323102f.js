(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(n,t,e){"use strict";e.r(t);var l=e(0),o=Object(l.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("p",[n._v("###1.call()、apply()、bind() 都是用来重定向 this")]),n._v(" "),e("pre",[e("code",[n._v("let obj={\n\tname:'刘枫',\n\tage:'25',\n\t_fun:function(){\n\t\tconsole.log(this.name+'年龄'+this.age);\n\t\t}\n\t}\nlet objx={\n\tname:'李杰',\n\tage:24\n}\n\nobj._fun.call(objx); //李杰年龄24\nobj._fun.apply(objx); //李杰年龄24\nobj._fun.bind(objx)(); //李杰年龄24\n总结 ： bind方法返回一个新函数必须执行它 ();\n")])]),n._v(" "),e("p",[n._v("##2.call 、bind 、 apply 传参比较")]),n._v(" "),e("pre",[e("code",[n._v("let obj={\n\tname:'刘枫',\n\tage:'25',\n\t_fun:function(likes,noLike){\n\t\tconsole.log(this.name+'年龄'+this.age+'喜欢'+likes+'不喜欢'+noLike);\n\t\t}\n\t}\nlet objx={\n\tname:'李杰',\n\tage:24\n}\n\nobj._fun.call(objx,'放屁','干活'); //李杰年龄24喜欢放屁不喜欢干活\nobj._fun.apply(objx,['放屁','干活']); //李杰年龄24喜欢放屁不喜欢干活\nobj._fun.bind(objx,'放屁','干活')(); //李杰年龄24喜欢放屁不喜欢干活\n总结：\ncall 和 bind 的传参方法一样\napply 的参数必须要放到数组里面穿过去\n")])]),n._v(" "),e("p",[n._v("###找出数组最小值的下标\nlet arr = [151, 511, 220, 515, 52]\nconsole.log(arr)\nfunction getMinidx(arr) {\nlet index = [].indexOf.call(arr, Math.min.apply(null, arr));\nconsole.log(index);//4\n}\nwindow.onload = function () {\ngetMinidx(arr)\n}")])])}],!1,null,null,null);t.default=o.exports}}]);