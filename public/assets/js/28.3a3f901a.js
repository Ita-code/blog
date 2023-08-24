(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{451:function(e,a,t){"use strict";t.r(a);var s=t(3),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"获取数组最后一位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数组最后一位"}},[e._v("#")]),e._v(" 获取数组最后一位")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("index取值")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("args[args.length - 1]\n")])])])]),e._v(" "),a("li",[a("p",[e._v("pop方法(改变元素组的值)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("args.pop()\n")])])])]),e._v(" "),a("li",[a("p",[e._v("ES6的方法（不改变原数组的值）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let [l] = [...args].reverse()\nlet result=l\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"看vue项目源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看vue项目源码"}},[e._v("#")]),e._v(" 看vue项目源码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 上线的打包需要注释掉否则泄露源码\n configureWebpack: {\n  devtool: 'source-map'\n }\n")])])]),a("h2",{attrs:{id:"清除网络缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除网络缓存"}},[e._v("#")]),e._v(" 清除网络缓存")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ipconfig /flushdns\n")])])]),a("h2",{attrs:{id:"loadsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loadsh"}},[e._v("#")]),e._v(" LOADSH")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("pull")]),e._v("(移除数组array中所有和给定值相等的元素)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//移除数组array中所有和给定值相等的元素\nvar array = [1, 2, 3, 1, 2, 3];\n_.pull(array, 2, 3);\nconsole.log(array);\n// => [1, 1]\n\n")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("cloneDeep")]),e._v("  深拷贝方法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var form={a\n    name:"askld",\n    age:null,\n    shole:undefined,\n    num:12\n}\nvar ff=_.cloneDeep(form)\n// var ff=JSON.parse(JSON.stringify(form))//无法拷贝undefined值\nconsole.log(ff);\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"查看全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看全局配置"}},[e._v("#")]),e._v(" 查看全局配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm list -g --depth 0//全局npm安装的东西\n")])])]),a("h2",{attrs:{id:"promise链式调用方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise链式调用方案"}},[e._v("#")]),e._v(" Promise链式调用方案")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('let someCondition=true\nvar promise = new Promise(function (resolve, reject) {\n    if (someCondition) {  // succeed\n        resolve(1);\n    } else {   // fails\n        reject("err");\n    }\n});\n\npromise.then(function (future) {\n    console.log(future);  // log 1 if someCondition = true\n    return 2;\n}, function (err) {\n    console.log(err);  // log err if someCondition = false\n}).then(function (future) {\n\t//链式调用会继承前.then的return值\n    console.log(future);  // log 2 if someCondition = true\n});\n')])])]),a("h2",{attrs:{id:"vue使用-refs-函数-传值-不建议使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue使用-refs-函数-传值-不建议使用"}},[e._v("#")]),e._v(" vue使用$refs（函数）传值（不建议使用）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("理论上$refs类似Jquery的Dom操作，不建议多使用，会影响数据流转，不方便排错，父子通信可以考虑prop、watch、$emit 等手段；如果层级较多还是放在store中集中管理比较好\n")])])]),a("h2",{attrs:{id:"空值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空值"}},[e._v("#")]),e._v(" 空值")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* 是否身份证号码*/\nexport function validateIdNo(rule, value, callback) {\n  const reg = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/\n  //为空判断\n  if (value === '' || value === undefined || value == null) {\n  \n    callback()\n  } else {\n    if ((!reg.test(value)) && value !== '') {\n      callback(new Error('请输入正确的身份证号码'))\n    } else {\n      callback()\n    }\n  }\n}\n")])])]),a("h2",{attrs:{id:"或等于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#或等于"}},[e._v("#")]),e._v(" 或等于")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("match |= treeData[i][pro].includes(searchValue);\n")])])]),a("h2",{attrs:{id:"在vue生命周期中的同步办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在vue生命周期中的同步办法"}},[e._v("#")]),e._v(" 在vue生命周期中的同步办法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  // 原理和普通同步方法差不多  async()=>await  然后自执行函数\n  (async () => {\n    await this.listDictsByCode();//await里面必须返回promise对象\n    this.getMenuList();\n  })();\n  listDictsByCode() {\n    return listDictsByCode({ code: 'ActionType' }).then((result) => {\n      this.dicList = {};\n      result.data.forEach(el => {\n        this.dicList[el.value] = { value: el.value, lable: el.text };\n      });\n    }).catch((err) => {\n      console.log(err, 'ActionType');\n    });\n  },\n\n")])])]),a("h2",{attrs:{id:"常用css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用css"}},[e._v("#")]),e._v(" 常用CSS")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//页面禁止选择文本\n-webkit-touch-callout: none;\n-moz-user-select: none; /*火狐*/\n-webkit-user-select: none; /*webkit浏览器*/\n-ms-user-select: none; /*IE10*/\n-khtml-user-select: none; /*早期浏览器*/\nuser-select: none;\n\n//文本不换行溢出...\nwhite-space: nowrap;\ntext-overflow: ellipsis;\noverflow: hidden;\n")])])]),a("h2",{attrs:{id:"滚动条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动条"}},[e._v("#")]),e._v(" 滚动条")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// /deep/到想去掉滚动条地地方\n  /deep/ .d2-container-full__body {\n    &::-webkit-scrollbar {\n      // 是否显示\n      // display: none;\n      width: 6px;\n      padding-right: 4px;\n      background-color: #fff;\n    }\n    &::-webkit-scrollbar-thumb {\n      -webkit-border-radius: 3px;\n      border-radius: 3px;\n      background-color: #c6c6c6;\n    }\n  }\n//element表格\n#goods:hover .el-table__body-wrapper::-webkit-scrollbar {\n  display: block !important;\n  width: 6px;     \n  height: 6px;\n}\n#goods:hover .el-table__body-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.2);\n}\n#goods:hover .el-table__body-wrapper::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n")])])]),a("h2",{attrs:{id:"判断对象的-proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断对象的-proto"}},[e._v("#")]),e._v(" 判断对象的__proto__")]),e._v(" "),a("p",[e._v("instanceof 左边可以是任意值，右边只能是函数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var res=new Blob\nres instanceof Blob//true\n")])])]),a("h2",{attrs:{id:"判读对象更严谨判断长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判读对象更严谨判断长度"}},[e._v("#")]),e._v(" 判读对象更严谨判断长度")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Object.keys(obj).length\nObject.getOwnPropertyNames(obj) .concat(Object.getOwnPropertySymbols(obj)).length\n")])])]),a("h2",{attrs:{id:"监听全屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听全屏"}},[e._v("#")]),e._v(" 监听全屏")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" /* 监听窗口大小改变 */\n module.exports = function changePageWH(flag = true) {\n\n      let pageDom = document.getElementById('page');\n\n      let width = window.innerWidth;\n\n      let height = window.innerHeight;\n\n      let xp = width / 1920;\n\n      let yp = height / 1080;\n\n      let px = 1920 / width;\n\n      let py = 1080 / height;\n\n      console.log('px,py ==>', px, py);\n\n      pageDom.style.transform = 'scale(' + xp + ',' + yp + ')';\n\n      pageDom.style.top = (1 / 2 - py / 2) * 100 + '%';\n\n      pageDom.style.left = (1 / 2 - px / 2) * 100 + '%';\n\n      if (flag) {\n\n        window.onresize = function () { changePageWH(false); }\n\n      }\n\n    }\n")])])]),a("h2",{attrs:{id:"深度作用选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度作用选择器"}},[e._v("#")]),e._v(" 深度作用选择器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('深度作用选择器 >>>（注意，只作用于css）\n.fuck >>> .weui-cells {\n    // ...\n}\n/deep/ 选择器  v3更推荐::v-deep\n<style lang="scss" scoped>\n.select {\n  width: 100px;\n\n  /deep/ .el-input__inner {\n    border: 0;\n    color: #000;\n  }\n}\n</style>\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);