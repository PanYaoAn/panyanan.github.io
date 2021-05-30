(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{216:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"对象的拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的拓展"}},[e._v("#")]),e._v(" 对象的拓展")]),e._v(" "),a("h4",{attrs:{id:"json对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json对象"}},[e._v("#")]),e._v(" Json对象")]),e._v(" "),a("h5",{attrs:{id:"_1-js对象-数组-json对象-数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-js对象-数组-json对象-数组"}},[e._v("#")]),e._v(" 1.js对象(数组) --\x3e json对象(数组)")]),e._v(" "),a("pre",[a("code",[e._v("JSON.stringify(obj/arr)\n")])]),e._v(" "),a("h5",{attrs:{id:"_2-json对象-数组-js对象-数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-json对象-数组-js对象-数组"}},[e._v("#")]),e._v(" 2.json对象(数组) --\x3e js对象(数组)")]),e._v(" "),a("pre",[a("code",[e._v("JSON.parse(json)\n")])]),e._v(" "),a("p",[e._v("以上两个方法是ES5提供的.Json字符串就只有两种: "),a("strong",[e._v("Json对象")]),e._v(","),a("strong",[e._v("json数组")])]),e._v(" "),a("h4",{attrs:{id:"object的拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object的拓展"}},[e._v("#")]),e._v(" Object的拓展")]),e._v(" "),a("h4",{attrs:{id:"一-对象属性的简洁写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-对象属性的简洁写法"}},[e._v("#")]),e._v(" 一.对象属性的简洁写法")]),e._v(" "),a("h5",{attrs:{id:"_1-属性简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-属性简写"}},[e._v("#")]),e._v(" 1.属性简写")]),e._v(" "),a("pre",[a("code",[e._v('var foo = "bar";\nvar baz = { foo };\nbaz; // { foo: "baz" }\n// 等价于\nvar baz = { foo: foo };\n\nES6允许在对象中只写属性名，不写属性值。这是，属性值等于属性名所代表的变量。\n\nfunction f(x, y) {\n\treturn { x, y };\n// 等价于： return { x: x, y: y };\n}\nf(1, 2); // {x: 1, y: 2}\n')])]),e._v(" "),a("h5",{attrs:{id:"_2-方法简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法简写"}},[e._v("#")]),e._v(" 2.方法简写")]),e._v(" "),a("pre",[a("code",[e._v('var obj = {\n  method() {\n    return "yuan is an animal";\n  }\n}\n// 等价于\nvar obj = {\n  method: function() {\n    return "yuan is an animal";\n  }\n}\n')])]),e._v(" "),a("h4",{attrs:{id:"二、属性名表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、属性名表达式"}},[e._v("#")]),e._v(" 二、属性名表达式")]),e._v(" "),a("h5",{attrs:{id:"_1-属性名定义方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-属性名定义方法："}},[e._v("#")]),e._v(" 1.属性名定义方法：")]),e._v(" "),a("pre",[a("code",[e._v('let monkey = {\n  [\'yuan\']() {\n    return "yuan is a monkey";\n  }\n}\nmonkey.yuan(); // yuan is a monkey"\n')])]),e._v(" "),a("h4",{attrs:{id:"三、object-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、object-is"}},[e._v("#")]),e._v(" 三、Object.is()")]),e._v(" "),a("pre",[a("code",[e._v("因在ES5中，并不能处理比较两个值是否严格相等，对于NaN，+0，-0等并不能做出严格相等来判断。\nObject.is() 这个方法就是来弥补上述的缺陷的：\n\n+0 === -0; // true\nNaN === NaN; // false\n\nObject.is(+0, -0); // false\nObject.is(NaN, NaN); // true\n")])]),e._v(" "),a("h4",{attrs:{id:"三、object-assign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、object-assign"}},[e._v("#")]),e._v(" 三、Object.assign()")]),e._v(" "),a("h5",{attrs:{id:"_1-基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本用法"}},[e._v("#")]),e._v(" 1.基本用法")]),e._v(" "),a("p",[e._v("定义：将源对象（sourceN，不知一个源对象）的所有可枚举属性复制到目标对象上（target）。\n使用方式：Object.assign(target, source1, source2, ..., sourceN)\n使用方式：Object.assign(target, source1, source2, ..., sourceN)")]),e._v(" "),a("pre",[a("code",[e._v("let target = { x: 1};\nlet s1 = { y: 2 };\nlet s2 = { z: 3 };\nObject.assign(target, s1, s2); // {x: 1, y: 2, z: 3}\n")])]),e._v(" "),a("h5",{attrs:{id:"_2、注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、注意点"}},[e._v("#")]),e._v(" 2、注意点")]),e._v(" "),a("p",[e._v("（1）、如果目标对象与源对象用同名属性，或多个源对象具有同名属性，则后面的属性会覆盖前面的属性：")]),e._v(" "),a("pre",[a("code",[e._v("let target2 = { x: 1};\nlet s3 = { x: 3, y: 2 };\nlet s4 = { y: 4,  z: 3 };\nObject.assign(target2, s3, s4); // {x: 3, y: 4, z: 3}\n")])]),e._v(" "),a("p",[e._v("（2）如果参数不是对象，则会先转成对象，在返回：")]),e._v(" "),a("pre",[a("code",[e._v('typeof Object.assign(3); // "object"\n')])]),e._v(" "),a("p",[e._v("（3）、若参数中有undefined 或者 null，这两个参数不能放在目标对象的位置，否则会报错：")]),e._v(" "),a("pre",[a("code",[e._v("Object.assign(undefined); // Cannot convert undefined or null to object at Function.assign (<anonymous>)\nObject.assign(null); // Cannot convert undefined or null to object at Function.assign (<anonymous>)\n")])]),e._v(" "),a("p",[e._v("（4）、除了字符串会以数组的形式复制到目标对象上，其他值都不会产生效果：")]),e._v(" "),a("pre",[a("code",[e._v('let a1 = \'yuan\';\nlet a2 = true;\nlet a3 = 11;\nlet a4 = NaN;\nObject.assign({}, a1, a2, a3, a4); // {0: "y", 1: "u", 2: "a", 3: "n"}\n')])]),e._v(" "),a("p",[e._v("（5）、Object.assign()这个方法是对对象引用的复制，即是浅复制，而不是深复制。这里需要规避同名属性替换带来的问题：")]),e._v(" "),a("pre",[a("code",[e._v('var obj1 = { a: { b: 3, c: 4 } };\nvar obj2 = { a: { b: "yuan" } } ;\nObject.assign(obj1, obj2); // { a: { b: "yuan" } }\nobj1.a.b; // "yuan"\n')])]),e._v(" "),a("p",[e._v("####3、基本用途\n（1）、给对象添加属性")]),e._v(" "),a("pre",[a("code",[e._v("class Geo {\n  constructor(x, y) {\n   Object.assign(this, x, y); \n  }\n}\n")])]),e._v(" "),a("p",[e._v("（2）、给对象添加方法")]),e._v(" "),a("pre",[a("code",[e._v("Object.assig(SomeClass.prototype, {\n  someMethod(arg1, arg2) { ... },\n  anotherMethod() { ... }\n})\n")])]),e._v(" "),a("p",[e._v("（3）、克隆对象")]),e._v(" "),a("pre",[a("code",[e._v("function clone(originObj) {\n  return Object.assign({}, originObj); // 将原始对象复制给空对象\n}\n")])]),e._v(" "),a("p",[e._v("（4）、合并多个对象")]),e._v(" "),a("pre",[a("code",[e._v("const mergeObjs = {\n  (target, ...sources) => Object.assign(target, ...sources);\n}\n")])]),e._v(" "),a("p",[e._v("（5）、为属性指定默认值")]),e._v(" "),a("pre",[a("code",[e._v("const DEFAULTS = {\n  logleve: 0,\n  outputFormat: 'html'\n};\nfunction processContent(options) {\n retrun Object.assign({}, DEFAULTS, options);\n}\n")])]),e._v(" "),a("h4",{attrs:{id:"四-object-keys-，object-values-，object-entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-object-keys-，object-values-，object-entries"}},[e._v("#")]),e._v(" 四 Object.keys()，Object.values()，Object.entries()")]),e._v(" "),a("p",[e._v("#####1.Object.keys(obj)")]),e._v(" "),a("p",[e._v("返回一个数组，是由参数对象自身的（不含继承）所有可遍历属性的键名：")]),e._v(" "),a("h6",{attrs:{id:"_1-array对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-array对象"}},[e._v("#")]),e._v(" 1.Array对象")]),e._v(" "),a("pre",[a("code",[e._v("/* Array 对象 */ \nlet arr = [\"a\", \"b\", \"c\"];\nconsole.log(Object.keys(arr)); \n// ['0', '1', '2']\n")])]),e._v(" "),a("h6",{attrs:{id:"_2-object-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-object-对象"}},[e._v("#")]),e._v(" 2.Object 对象")]),e._v(" "),a("pre",[a("code",[e._v('let obj = { foo: "bar", baz: 42 }, \n    keys = Object.keys(obj);\n// CCAC: Chrome Console Auto Copy\ncopy(keys); \n// ["foo","baz"]\n')])]),e._v(" "),a("h6",{attrs:{id:"_3-类数组-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-类数组-对象"}},[e._v("#")]),e._v(" 3. 类数组 对象")]),e._v(" "),a("pre",[a("code",[e._v("let obj = { 0 : \"a\", 1 : \"b\", 2 : \"c\"};\nconsole.log(Object.keys(obj)); \n// ['0', '1', '2']\n")])]),e._v(" "),a("h6",{attrs:{id:"_4-类数组-对象-随机-key-排序-（遵循上述的属性的遍历顺序）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-类数组-对象-随机-key-排序-（遵循上述的属性的遍历顺序）"}},[e._v("#")]),e._v(" 4.类数组 对象, 随机 key 排序 （遵循上述的属性的遍历顺序）")]),e._v(" "),a("pre",[a("code",[e._v("let anObj = { 100: 'a', 2: 'b', 7: 'c' }; \nconsole.log(Object.keys(anObj)); \n// ['2', '7', '100']\n")])]),e._v(" "),a("h5",{attrs:{id:"_2、object-values-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、object-values-obj"}},[e._v("#")]),e._v(" 2、Object.values(obj)")]),e._v(" "),a("p",[e._v("返回一个数组，是由参数对象自身的（不含继承）所有可遍历属性的键值：")]),e._v(" "),a("h6",{attrs:{id:"普通对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通对象"}},[e._v("#")]),e._v(" 普通对象")]),e._v(" "),a("pre",[a("code",[e._v("var obj = { foo: \"bar\", baz: 42 };\nconsole.log(Object.values(obj)); // ['bar', 42]\n")])]),e._v(" "),a("h6",{attrs:{id:"类数组对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类数组对象"}},[e._v("#")]),e._v(" 类数组对象")]),e._v(" "),a("pre",[a("code",[e._v("var obj = { 0: 'a', 1: 'b', 2: 'c' };\nconsole.log(Object.values(obj)); // ['a', 'b', 'c']\n")])]),e._v(" "),a("h6",{attrs:{id:"随机键值的类数组对象-（遵循上述的属性的遍历顺序）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机键值的类数组对象-（遵循上述的属性的遍历顺序）"}},[e._v("#")]),e._v(" 随机键值的类数组对象 （遵循上述的属性的遍历顺序）")]),e._v(" "),a("pre",[a("code",[e._v("var an_obj = { 100: 'a', 2: 'b', 7: 'c' };\nconsole.log(Object.values(an_obj)); // ['b', 'c', 'a']\n")])]),e._v(" "),a("h6",{attrs:{id:"参数是非对象会转变成对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数是非对象会转变成对象"}},[e._v("#")]),e._v(" 参数是非对象会转变成对象")]),e._v(" "),a("pre",[a("code",[e._v("console.log(Object.values(\"foo\")); // ['f', 'o', 'o']\n")])]),e._v(" "),a("p",[e._v("#####3.Object.entries(obj)\n返回一个数组，是由参数对象自身的（不含继承）所有可遍历属性的键值对数组：")]),e._v(" "),a("h6",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[e._v("#")]),e._v(" 对象")]),e._v(" "),a("pre",[a("code",[e._v("const obj = { foo: 'bar', baz: 42 };\nconsole.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]\n")])]),e._v(" "),a("h6",{attrs:{id:"类数组对象-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类数组对象-2"}},[e._v("#")]),e._v(" 类数组对象")]),e._v(" "),a("pre",[a("code",[e._v("const obj = { 0: 'a', 1: 'b', 2: 'c' };\nconsole.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]\n")])]),e._v(" "),a("h6",{attrs:{id:"随机键值的类数组对象-（遵循上述的属性的遍历顺序）-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机键值的类数组对象-（遵循上述的属性的遍历顺序）-2"}},[e._v("#")]),e._v(" 随机键值的类数组对象 （遵循上述的属性的遍历顺序）")]),e._v(" "),a("pre",[a("code",[e._v("const anObj = { 100: 'a', 2: 'b', 7: 'c' };\nconsole.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]\n")])]),e._v(" "),a("h6",{attrs:{id:"getfoo-是不可枚举属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getfoo-是不可枚举属性"}},[e._v("#")]),e._v(" getFoo 是不可枚举属性")]),e._v(" "),a("pre",[a("code",[e._v("const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });\nmyObj.foo = 'bar';\nconsole.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]\n")])]),e._v(" "),a("h6",{attrs:{id:"参数是非对象会转变成对象-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数是非对象会转变成对象-2"}},[e._v("#")]),e._v(" 参数是非对象会转变成对象")]),e._v(" "),a("pre",[a("code",[e._v("console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]\n")])]),e._v(" "),a("h6",{attrs:{id:"优雅地遍历键值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优雅地遍历键值"}},[e._v("#")]),e._v(" 优雅地遍历键值")]),e._v(" "),a("pre",[a("code",[e._v('const obj = { a: 5, b: 7, c: 9 };\nfor (const [key, value] of Object.entries(obj)) {\n  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"\n}\n')])]),e._v(" "),a("p",[e._v("Object.entries() 的另一个用处：将对象转为真正的Map 数据结构：")]),e._v(" "),a("pre",[a("code",[e._v('var obj = { foo: "bar", baz: 42 }; \nvar map = new Map(Object.entries(obj));\nconsole.log(map); // Map { foo: "bar", baz: 42 }\n')])]),e._v(" "),a("h5",{attrs:{id:"五、属性的遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、属性的遍历"}},[e._v("#")]),e._v(" 五、属性的遍历")]),e._v(" "),a("p",[e._v("在ES6 中有五种方法来遍历对象的属性：")]),e._v(" "),a("h6",{attrs:{id:"_1、for-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、for-in"}},[e._v("#")]),e._v(" 1、for...in")]),e._v(" "),a("pre",[a("code",[e._v("返回对象自身的和继承的可枚举属性（不含 Symbol 属性）。\n")])]),e._v(" "),a("h6",{attrs:{id:"_2、object-keys-ob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、object-keys-ob"}},[e._v("#")]),e._v(" 2、Object.keys(ob)")]),e._v(" "),a("pre",[a("code",[e._v("返回一个数组，包括对象自身的（不含继承）所有可枚举属性（不含 Symbol 属性）。\n")])]),e._v(" "),a("h6",{attrs:{id:"_3、object-getownpropertynames-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、object-getownpropertynames-obj"}},[e._v("#")]),e._v(" 3、Object.getOwnPropertyNames(obj)")]),e._v(" "),a("pre",[a("code",[e._v("返回一个数组，包括自身的所有属性（不含Symbol属性，但包括不可枚举属性）。\n")])]),e._v(" "),a("h6",{attrs:{id:"_4、object-getownpropertysymbols-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、object-getownpropertysymbols-obj"}},[e._v("#")]),e._v(" 4、Object.getOwnPropertySymbols(obj)")]),e._v(" "),a("pre",[a("code",[e._v("返回一个数组。包含对象自身的所有 Symbol 属性。\n")])]),e._v(" "),a("h6",{attrs:{id:"_5、object-ownkeys-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、object-ownkeys-obj"}},[e._v("#")]),e._v(" 5、Object.ownKeys(obj)")]),e._v(" "),a("pre",[a("code",[e._v("返回一个数组，包含对象所有的属性.。\n")])]),e._v(" "),a("h6",{attrs:{id:"以上五种方法都遵循同样的遍历顺序："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以上五种方法都遵循同样的遍历顺序："}},[e._v("#")]),e._v(" 以上五种方法都遵循同样的遍历顺序：")]),e._v(" "),a("pre",[a("code",[e._v("（1）、首先遍历所有属性名为数值的属性，按数字排序；\n（2）、其次遍历所有属性名为字符串的属性，按照生成时间排序；\n（3）、最后遍历所有属性名为 Symbol 的属性，按照生成时间排序。\n")])])])}],!1,null,null,null);t.default=r.exports}}]);