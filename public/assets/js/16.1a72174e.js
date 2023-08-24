(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{457:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前端的npm命令大全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端的npm命令大全"}},[s._v("#")]),s._v(" 前端的npm命令大全")]),s._v(" "),t("blockquote",[t("p",[s._v("npm（Node Package Manager）是一个用于管理和共享JavaScript代码包的工具。主要作用是提供一种简单的方式来安装、更新、卸载和发布JavaScript包。它允许开发者从npm仓库中获取其他开发者已经创建的代码包，并将这些包集成到自己的项目中。通过使用npm，开发者可以快速、高效地构建复杂的前端应用程序，同时避免重复造轮子。")])]),s._v(" "),t("h3",{attrs:{id:"npm-安装cnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装cnpm"}},[s._v("#")]),s._v(" npm 安装cnpm")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看 npm 版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装cnpm  -g 全局安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" cnpm "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npmmirror.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用cnpm 淘宝镜像    模块名<Module Name>")]),s._v("\ncnpm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Module Name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-设置-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-设置-配置"}},[s._v("#")]),s._v(" npm 设置/配置")]),s._v(" "),t("p",[t("code",[s._v("[]可选命令")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看npm配置信息 --Json ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置npm配置信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除npm配置信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看npm当前镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某些配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置全局的npm淘宝镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以切换回默认全局镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单次使用设置淘宝镜像下载依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])])]),t("h3",{attrs:{id:"npm-常用命令简写说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用命令简写说明"}},[s._v("#")]),s._v(" npm 常用命令简写说明")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("-g： 为 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" 的缩写，表示安装到全局目录里\n-S： 为 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--save")]),s._v(" 的缩写，表示安装的包将写入package.json里面的dependencies\n-D： 为 --save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies\n i： 为install的缩写，表示安装\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令使用")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Module Name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@版本   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vue@2.6.3\n")])])]),t("h3",{attrs:{id:"npm-安装模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装模块"}},[s._v("#")]),s._v(" npm 安装模块")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm 初始化当前目录，生成package.json文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装package.json里面所有依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i express  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装模块到默认dependencies")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会安装到配置的全局目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包信息将加入到dependencies生产依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包信息将加入到devDependencies开发依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i jquery@1.8.3  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装jquery指定的1.8.3版本")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-卸载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-卸载模块"}},[s._v("#")]),s._v(" npm 卸载模块")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，但不卸载模块留在package.json中的对应信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载全局模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--save")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，同时卸载留在package.json中dependencies下的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express --save-dev  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，同时卸载留在package.json中devDependencies下的信息")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-卸载模块-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-卸载模块-2"}},[s._v("#")]),s._v(" npm 卸载模块")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，但不卸载模块留在package.json中的对应信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载全局模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--save")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，同时卸载留在package.json中dependencies下的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall express --save-dev  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载模块，同时卸载留在package.json中devDependencies下的信息")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-查看命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-查看命令"}},[s._v("#")]),s._v(" npm 查看命令")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" root  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看项目中模块所在的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全局安装的模块所在目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list 或者 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地已安装模块的清单列表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view jquery dependencies  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个包对于各种包的依赖关系")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view jquery version  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看jquery最新的版本号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view jquery versions  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有jquery历史版本号（很实用）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最新的jquery版本的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" info jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看jquery的详细信息，等同于上面的npm view jquery")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list jquery 或 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地已安装的jquery的详细信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view jquery repository.url  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看jquery包的来源地址")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-其他命令"}},[s._v("#")]),s._v(" npm 其他命令")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除npm的缓存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" prune  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除项目中没有被使用的包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" outdated  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查模块是否已经过时")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" repo jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会打开默认浏览器跳转到github中jquery的页面")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" docs jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会打开默认浏览器跳转到github中jquery的README.MD文件信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" home jquery  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会打开默认浏览器跳转到github中jquery的主页")]),s._v("\n")])])]),t("h3",{attrs:{id:"npm-init-生成的package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-init-生成的package-json"}},[s._v("#")]),s._v(" npm init 生成的package.json")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包的名称")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sg-utils"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包的版本号")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.4.6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包的描述")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript通用工具类"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包的入口文件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上传npm的白名单，即被允许上传的文件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定了运行脚本命令的npm命令行缩写")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node server.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 远程代码仓库")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/shiguang0116/sg-utils"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关键字")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"util"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 作者")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guang.shi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 许可证数组")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 提交bug的地址")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bugs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/shiguang0116/sg-utils/issues"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包的主页")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/shiguang0116/sg-utils#readme"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行引擎，指明node.js运行所需要的版本")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"engines"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">= 6.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npm"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">= 3.0.0"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发环境的依赖包列表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.16.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslint-config-vui"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^0.2.7"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslint-plugin-html"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.0.5"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产环境的依赖包列表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 依赖包列表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"peerDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"package-json版本详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json版本详解"}},[s._v("#")]),s._v(" package.json版本详解")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0 - 2.9999.9999"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   \n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">=1.0.2 <2.1.2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        必须大于等于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("版本且小于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("版本\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"baz"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">1.0.2 <=2.3.4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        必须大于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("版本且小于等于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("版本\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"boo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.3.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 必须匹配这个版本\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"boo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~2.3.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                约等于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，只更新最小版本，相当于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v(".X，即>="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" <"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"thr"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.3.x"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"boo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.3.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                与"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("版本兼容，相当于"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".X.X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 即>="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" < "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不改变大版本号。\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"qux"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"asd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://asdf.com/asdf.tar.gz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   在版本上指定一个压缩包的url，当执行npm install 时这个压缩包会被下载并安装到本地。\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"til"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~1.2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   \n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"elf"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~1.2.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"two"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.x"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lat"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("             安装最新版本\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dyl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:../dyl"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         使用本地路径\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"adf"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git://github.com/user/project.git#commit-ish"')]),s._v("    使用git URL加commit-ish\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);