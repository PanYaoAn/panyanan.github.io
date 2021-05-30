(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(t,a,r){"use strict";r.r(a);var e=r(0),n=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("pre",[r("code",[t._v("//用户名正则，4到16位（字母，数字，下划线，减号）\nvar uPattern = /^[a-zA-Z0-9_-]{4,16}$/;\n")])]),t._v(" "),r("h1",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符\nvar pPattern = /^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//正整数正则\nvar posPattern = /^\\d+$/;\n//负整数正则\nvar negPattern = /^-\\d+$/;\n//整数正则\nvar intPattern = /^-?\\d+$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//正数正则\nvar posPattern = /^\\d*\\.?\\d+$/;\n//负数正则\nvar negPattern = /^-\\d*\\.?\\d+$/;\n//数字正则\nvar numPattern = /^-?\\d*\\.?\\d+$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//Email正则\nvar ePattern = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//手机号正则\nvar mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;\t\n")])]),t._v(" "),r("h1",{attrs:{id:"-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//身份证号（18位）正则\nvar cP = /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-7"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("((http|ftp|https)://)(([a-zA-Z0-9\\._-]+\\.[a-zA-Z]{2,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,4})*(/[a-zA-Z0-9\\&%_\\./-~-]*)?\n赤：协议\n橙：字母host，前半部分（+号及以前）host、二级域名，后半部分表示一定有类似.cn、.com、.net的跟在后面\n黄：域名\n绿：IP host，可以进一步简化([0-9]{1,3}(\\.[0-9]{1,3}){3})\n橙、绿组合成hostname\n青：端口\n蓝：/path及后面内容，第一个/匹配host后紧跟的斜杠，host后可能有 / ，/ 后可能还有n多字符，当然，也可能没有了。最后四个字符/-~-有些问题，/的ASCII码为47，~的为126，（ASCII码表）这之间包括了数字、大小写字母（与前面的重复），还有些如<>=?{}，这些在正常的url中也会被编码的，不会出现在url中，中括号中的 - 如果不成组就表示 - 字符（一般放在中括号两边或加转义）\n容易理解，可以满足大部分需求，不能匹配url+锚点、ftp有user:pass@host的情况\n")])]),t._v(" "),r("h1",{attrs:{id:"-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-8"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//ipv4地址正则\nvar ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-9"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v("//QQ号正则，5至11位\nvar qqPattern = /^[1-9][0-9]{4,10}$/;\n")])]),t._v(" "),r("h1",{attrs:{id:"-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-10"}},[t._v("#")])]),t._v(" "),r("pre",[r("code",[t._v('//日期正则，简单判定,未做月份及日期的判定\nvar dP1 = /^\\d{4}(\\-)\\d{1,2}\\1\\d{1,2}$/;\n//输出 true\nconsole.log(dP1.test("2017-05-11"));\n//输出 true\nconsole.log(dP1.test("2017-15-11"));\n//日期正则，复杂判定\nvar dP2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;\n//输出 true\nconsole.log(dP2.test("2017-02-11"));\n//输出 false\nconsole.log(dP2.test("2017-15-11"));\n//输出 false\nconsole.log(dP2.test("2017-02-29"));\n')])])])}],!1,null,null,null);a.default=n.exports}}]);