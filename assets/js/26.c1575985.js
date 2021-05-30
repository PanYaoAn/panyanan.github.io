(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(r,e,s){"use strict";s.r(e);var n=s(0),t=Object(n.a)({},(function(){var r=this.$createElement;this._self._c;return this._m(0)}),[function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"axios拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios拦截器"}},[r._v("#")]),r._v(" axios拦截器")]),r._v(" "),s("pre",[s("code",[r._v("什么是axios拦截器\n拦截每一次你的请求和响应，然后进行相应的处理。比如一些网站过了一定的时间不进行操作，就会退出登录让你重新登陆页面，\n当然这不用拦截器你或许也可以完成这功能，但是会很麻烦而且代码会产生大量重复，所以我们需要用到拦截器\n")])]),r._v(" "),s("h2",{attrs:{id:"在main-js引入axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在main-js引入axios"}},[r._v("#")]),r._v(" 在main.js引入axios")]),r._v(" "),s("pre",[s("code",[r._v("import axios from 'axios'\n//写到main.js里,每一个aixos都会请求都会触发拦截器,你也可以写到需要触发拦截器的axios请求\n")])]),r._v(" "),s("h2",{attrs:{id:"请求拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求拦截器"}},[r._v("#")]),r._v(" 请求拦截器")]),r._v(" "),s("pre",[s("code",[r._v("axios.interceptors.requset.use(\n  config => {\n    //在发起请求做一些业务处理\n    return config;\n  },\n  error => {\n    // 对请求失败做处理\n    return Promise.reject(error);\n  })\n")])]),r._v(" "),s("h2",{attrs:{id:"响应拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应拦截"}},[r._v("#")]),r._v(" 响应拦截")]),r._v(" "),s("pre",[s("code",[r._v("axios.interceptors.response.use(\n  response => {\n    //对响应数据做处理\n    return config\n  },\n  error => {\n    // 对响应错误做处理\n    return Promise.reject(error);\n  })\n")])])])}],!1,null,null,null);e.default=t.exports}}]);