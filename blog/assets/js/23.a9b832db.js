(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{203:function(e,t,s){"use strict";s.r(t);var r=s(6),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"搭建一个在浏览器使用typescript的环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建一个在浏览器使用typescript的环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 搭建一个在浏览器使用typescript的环境")]),e._v(" "),s("p",[s("a",{attrs:{href:"github.com/fanyoufu/learnty.git"}},[e._v("github地址")])]),e._v(" "),s("p",[e._v("目录\n")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#建立目录结构"}},[e._v("建立目录结构")])]),s("li",[s("a",{attrs:{href:"#安装gulp-和-typescript"}},[e._v("安装gulp 和 typescript")])]),s("li",[s("a",{attrs:{href:"#编写ts文件"}},[e._v("编写ts文件")])]),s("li",[s("a",{attrs:{href:"#配置tsconfig文件"}},[e._v("配置tsconfig文件")])]),s("li",[s("a",{attrs:{href:"#配置gulpfile-js文件"}},[e._v("配置gulpfile.js文件")])]),s("li",[s("a",{attrs:{href:"#运行gulp命令，查看效果"}},[e._v("运行gulp命令，查看效果")])]),s("li",[s("a",{attrs:{href:"#使用多个ts文件"}},[e._v("使用多个ts文件")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-3-新建一个src-greet-ts文件："}},[e._v("1/3 新建一个src/greet.ts文件：")])]),s("li",[s("a",{attrs:{href:"#_2-3-更改src-main-ts代码，从greet-ts导入sayhello："}},[e._v("2/3 更改src/main.ts代码，从greet.ts导入sayHello：")])]),s("li",[s("a",{attrs:{href:"#_3-3-最后，将src-greet-ts添加到tsconfig-json："}},[e._v("3/3 最后，将src/greet.ts添加到tsconfig.json：")])])])]),s("li",[s("a",{attrs:{href:"#在浏览器环境中使用main-js"}},[e._v("在浏览器环境中使用main.js")]),s("ul",[s("li",[s("a",{attrs:{href:"#创建src-index-html文件"}},[e._v("创建src/index.html文件")])]),s("li",[s("a",{attrs:{href:"#把index-htm从src目标拷贝到dist目录"}},[e._v("把index.htm从src目标拷贝到dist目录")])]),s("li",[s("a",{attrs:{href:"#浏览器中的export错误"}},[e._v("浏览器中的export错误")])])])]),s("li",[s("a",{attrs:{href:"#工程由node-js环境移到浏览器环境里"}},[e._v("工程由Node.js环境移到浏览器环境里")]),s("ul",[s("li",[s("a",{attrs:{href:"#安装依赖"}},[e._v("安装依赖")])]),s("li",[s("a",{attrs:{href:"#修改gulpfile-js配置"}},[e._v("修改gulpfile.js配置")])]),s("li",[s("a",{attrs:{href:"#自动构建"}},[e._v("自动构建")])]),s("li",[s("a",{attrs:{href:"#浏览器自动刷新"}},[e._v("浏览器自动刷新")])])])]),s("li",[s("a",{attrs:{href:"#在gulp中使用less"}},[e._v("在gulp中使用less")]),s("ul",[s("li",[s("a",{attrs:{href:"#准备好目录"}},[e._v("准备好目录")])]),s("li",[s("a",{attrs:{href:"#安装gulp-less包"}},[e._v("安装gulp-less包")])]),s("li",[s("a",{attrs:{href:"#修改gulpfile配置"}},[e._v("修改gulpfile配置")])])])]),s("li",[s("a",{attrs:{href:"#end"}},[e._v("end")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"建立目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立目录结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 建立目录结构")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("package.json\nsrc/\ndist/\n")])])]),s("p",[e._v("建议使用npm init 初始化 package.json文件")]),e._v(" "),s("h2",{attrs:{id:"安装gulp-和-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装gulp-和-typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装gulp 和 typescript")]),e._v(" "),s("ol",[s("li",[e._v("全局安装gulp")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g gulp-cli\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("安装typescript，gulp和gulp-typescript到开发依赖项。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install --save-dev typescript gulp gulp-typescript\n")])])]),s("ul",[s("li",[e._v("typscript 是typescript的编译器")]),e._v(" "),s("li",[e._v("gulp-typescript 是与gulp配合使用的gulp插件")])]),e._v(" "),s("h2",{attrs:{id:"编写ts文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写ts文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 编写ts文件")]),e._v(" "),s("blockquote",[s("p",[e._v("目录/src/main.ts")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('function hello(compiler: string) {\n    console.log(`Hello from ${compiler}`);\n}\nhello("TypeScript");\n')])])]),s("h2",{attrs:{id:"配置tsconfig文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置tsconfig文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置tsconfig文件")]),e._v(" "),s("p",[e._v("在项目根目录下建立tsconfig.json文件。")]),e._v(" "),s("blockquote",[s("p",[e._v("目录/tsconfig.json")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "files": [\n        "src/main.ts"\n    ],\n    "compilerOptions": {\n        "noImplicitAny": true,\n        "target": "es5"\n    }\n}\n')])])]),s("h2",{attrs:{id:"配置gulpfile-js文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置gulpfile.js文件")]),e._v(" "),s("p",[e._v("在项目目录下建立gulpfile.js文件，来配置gulp命令")]),e._v(" "),s("blockquote",[s("p",[e._v("目录/gulpfile.js文件")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('var gulp = require("gulp");\nvar ts = require("gulp-typescript");\nvar tsProject = ts.createProject("tsconfig.json");\n\ngulp.task("default", function () {\n    return tsProject.src()\n        .pipe(tsProject())\n        .js.pipe(gulp.dest("dist"));\n});\n')])])]),s("h2",{attrs:{id:"运行gulp命令，查看效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行gulp命令，查看效果","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行gulp命令，查看效果")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gulp\nnode dist/main.js\n")])])]),s("ul",[s("li",[e._v("gulp 命令通过gulpfile.js的配置，把src/main.ts编译成dist/main.js文件。\n此时在dist下会生成一个main.js文件，其文件的内容是：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('function hello(compiler) {\n    console.log("hello from " + compiler);\n}\nhello("TypeScript");\n')])])]),s("p",[e._v("你可以回过去对比看看 main.ts的内容和现在的main.js的内容对比。")]),e._v(" "),s("ul",[s("li",[e._v("node dist/main.js 命令是在node环境中执行main.js")])]),e._v(" "),s("p",[e._v("以上是在node中执行javascript，那如何把javascript放在浏览器中执行呢？\n其实你可以直接把这个main.js引入到你的html页面中。")]),e._v(" "),s("h2",{attrs:{id:"使用多个ts文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用多个ts文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用多个ts文件")]),e._v(" "),s("p",[e._v("现实中的项目目录肯定会有很多个模块，表现在多离散的文件中。下面来尝试一下：")]),e._v(" "),s("p",[e._v("共三步.")]),e._v(" "),s("h3",{attrs:{id:"_1-3-新建一个src-greet-ts文件："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-新建一个src-greet-ts文件：","aria-hidden":"true"}},[e._v("#")]),e._v(" 1/3 新建一个src/greet.ts文件：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export function sayHello(name: string) {\n    return `Hello from ${name}`;\n}\n")])])]),s("h3",{attrs:{id:"_2-3-更改src-main-ts代码，从greet-ts导入sayhello："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-更改src-main-ts代码，从greet-ts导入sayhello：","aria-hidden":"true"}},[e._v("#")]),e._v(" 2/3 更改src/main.ts代码，从greet.ts导入sayHello：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('import { sayHello } from "./greet";\n\nconsole.log(sayHello("TypeScript"));\n')])])]),s("h3",{attrs:{id:"_3-3-最后，将src-greet-ts添加到tsconfig-json："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-最后，将src-greet-ts添加到tsconfig-json：","aria-hidden":"true"}},[e._v("#")]),e._v(" 3/3 最后，将src/greet.ts添加到tsconfig.json：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "files": [\n        "src/main.ts",\n        "src/greet.ts"\n    ],\n    "compilerOptions": {\n        "noImplicitAny": true,\n        "target": "es5"\n    }\n}\n')])])]),s("p",[e._v("注意：files的值是一个数组，数组中最后一个元素不要加“,”。如果你加了，有可能会在接下来的任务中出错。")]),e._v(" "),s("p",[e._v("确保执行gulp后模块是能工作的，在Node.js下进行测试：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gulp\nnode dist/main.js\n")])])]),s("p",[e._v("你会得到如下：\ndist/main.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nvar greet_1 = require("./greet");\nconsole.log(greet_1.sayHello("Typescript"));\n\n')])])]),s("p",[e._v("dist/greet.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nfunction sayHello(name) {\n    return "Hello from " + name;\n}\nexports.sayHello = sayHello;\n')])])]),s("p",[e._v("注意，此时，你如果直接在.html文件中引用dist/main.js文件是会出错误的。原因是：浏览器中不认识require命令。 而在node环境是可以执行node main.js的，因为node支持commonJS的模块化。")]),e._v(" "),s("p",[e._v("我们来证明这一点。")]),e._v(" "),s("h2",{attrs:{id:"在浏览器环境中使用main-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器环境中使用main-js","aria-hidden":"true"}},[e._v("#")]),e._v(" 在浏览器环境中使用main.js")]),e._v(" "),s("h3",{attrs:{id:"创建src-index-html文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建src-index-html文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建src/index.html文件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n</head>\n<body>\n    <p id="greeting">loading....</p>\n    <script src="main.js"><\/script>\n</body>\n</html>\n')])])]),s("h3",{attrs:{id:"把index-htm从src目标拷贝到dist目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把index-htm从src目标拷贝到dist目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 把index.htm从src目标拷贝到dist目录")]),e._v(" "),s("p",[e._v("为什么不直接在dist目录下创建这个index.html文件，而非要在src目录下创建好了再复制过去呢？ 因为src是源目录，dist是生产目录，我们只能把代码写在源目录中。")]),e._v(" "),s("p",[e._v("这个拷贝的过程是通过建立gulp任务来完成的")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let gulp = require("gulp")\n\nlet ts = require("gulp-typescript")\nlet tsProject = ts.createProject("tsconfig.json");\n\nlet paths = {\n    pages:["src/*.html"]\n}\ngulp.task("copy-html",function(){\n    return gulp.src(paths.pages).pipe(gulp.dest("dist"))\n});\n\ngulp.task("default",gulp.series("copy-html",function(){\n    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"))\n}))\n')])])]),s("p",[e._v("这里增加了copy-html任务并且把它加作default的依赖项。 这样，当default执行时，copy-html会被首先执行。")]),e._v(" "),s("p",[e._v("注意：default是默认任务，而第二个参数gulp.series()这种写法是gulp4.0的写法。gulp3.0的写法有个一点小区别。请大家根据自己gulp的版本来决定。")]),e._v(" "),s("p",[e._v("改造完gulpfile.js后，再次运行")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gulp\n")])])]),s("p",[e._v("可以看这个两个任务的结果:")]),e._v(" "),s("ol",[s("li",[e._v("index.html拷贝到了dist目录")]),e._v(" "),s("li",[e._v("main.ts,greet.ts被编译成了对应的.js文件。")])]),e._v(" "),s("h3",{attrs:{id:"浏览器中的export错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的export错误","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器中的export错误")]),e._v(" "),s("p",[e._v("此时，我们通过浏览器打开index.html文件，你会在浏览器中看到错误信息：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("main.js:2 Uncaught ReferenceError: exports is not defined\n    at main.js:2\n")])])]),s("p",[e._v("那么，如何解决呢？")]),e._v(" "),s("h2",{attrs:{id:"工程由node-js环境移到浏览器环境里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工程由node-js环境移到浏览器环境里","aria-hidden":"true"}},[e._v("#")]),e._v(" 工程由Node.js环境移到浏览器环境里")]),e._v(" "),s("p",[e._v("现在，让我们把这个工程由Node.js环境移到浏览器环境里。 通过Browserify把所有模块捆绑成一个JavaScript文件。")]),e._v(" "),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装依赖")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install --save-dev browserify tsify vinyl-source-stream\n")])])]),s("p",[e._v("首先，安装Browserify，tsify和vinyl-source-stream。 tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做vinyl。")]),e._v(" "),s("h3",{attrs:{id:"修改gulpfile-js配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改gulpfile-js配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改gulpfile.js配置")]),e._v(" "),s("p",[e._v("几个要点：")]),e._v(" "),s("ol",[s("li",[e._v("使用browserify处理typescript文件的插件tsify来代替 gulp-typescript")]),e._v(" "),s("li",[e._v("配置browserify()打包.js文件到bundle.js")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let gulp = require("gulp")\n\nlet browserify =require("browserify")\nlet source = require("vinyl-source-stream")\nlet tsify = require("tsify");\n\n// let ts = require("gulp-typescript")\n// let tsProject = ts.createProject("tsconfig.json");\n\nlet paths = {\n    pages:["src/*.html"]\n}\ngulp.task("copy-html",function(){\n    return gulp.src(paths.pages).pipe(gulp.dest("dist"))\n});\n\ngulp.task("default",gulp.series("copy-html",function(){\n    // return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"))\n    return browserify({\n        basedir:"",\n        debug:true,\n        entries:["src/main.ts"],\n        cache:{},\n        packageCache:{}\n    }).plugin(tsify)\n    .bundle()\n    .pipe(source(\'bundle.js\'))\n    .pipe(gulp.dest("dist"));\n}))\n')])])]),s("p",[e._v("修改了default任务，让它使用tsify插件调用Browserify，而不是gulp-typescript。 方便的是，两者传递相同的参数对象到TypeScript编译器。")]),e._v(" "),s("p",[e._v("调用bundle后，我们使用source（vinyl-source-stream的别名）把输出文件命名为bundle.js。")]),e._v(" "),s("p",[e._v("注意，我们为Broswerify指定了debug: true。 这会让tsify在输出文件里生成source maps。 source maps允许我们在浏览器中直接调试TypeScript源码，而不是在合并后的JavaScript文件上调试。 你要打开调试器并在main.ts里打一个断点，看看source maps是否能工作。 当你刷新页面时，代码会停在断点处，从而你就能够调试greet.ts。")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("修改src/index.html中的的js文件引用")])]),e._v(" "),s("p",[e._v("此时，应该引用 ./boundle.js")]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[e._v("运行命令 gulp")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gulp\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[e._v("观察./dist/bundle.js")])]),e._v(" "),s("p",[e._v("bundle.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module \'"+i+"\'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){\n"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nfunction sayHello(name) {\n    return "Hello from " + name;\n}\nexports.sayHello = sayHello;\n},{}],2:[function(require,module,exports){\n"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nvar greet_1 = require("./greet");\nconsole.log(greet_1.sayHello("Typescript"));\n},{"./greet":1}]},{},[2])\n\n')])])]),s("ol",{attrs:{start:"6"}},[s("li",[e._v("打开dist/index.html文件\n你应该可以在控制台中看到正确的输出了。")])]),e._v(" "),s("h3",{attrs:{id:"自动构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动构建","aria-hidden":"true"}},[e._v("#")]),e._v(" 自动构建")]),e._v(" "),s("p",[e._v("在编辑保存.ts时，能立即看到效果。")]),e._v(" "),s("h4",{attrs:{id:"安装watchify包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装watchify包","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装watchify包")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install --save-dev watchify gulp-util\n")])])]),s("p",[e._v("Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。")]),e._v(" "),s("h4",{attrs:{id:"修改gulpfile-js配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改gulpfile-js配置-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改gulpfile.js配置")]),e._v(" "),s("p",[e._v("共有三处改变，但是需要你略微重构一下代码。")]),e._v(" "),s("p",[e._v('(1) 将browserify实例包裹在watchify的调用里，控制生成的结果。\n(2) 调用watchedBrowserify.on("update", bundle);，每次TypeScript文件改变时Browserify会执行bundle函数。\n(3) 调用watchedBrowserify.on("log", gutil.log);将日志打印到控制台。')]),e._v(" "),s("p",[e._v("(1)和(2)在一起意味着我们要将browserify调用移出default任务。 然后给函数起个名字，因为Watchify和Gulp都要调用它。 (3)是可选的，但是对于调试来讲很有用。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let gulp = require("gulp")\n\nlet browserify =require("browserify")\nlet source = require("vinyl-source-stream")\nlet tsify = require("tsify");\nlet watchify = require("watchify")\nlet gutil = require("gulp-util")\n\nvar wathchedBrowerify = watchify(browserify({\n    basedir:"",\n    debug:true,\n    entries:["src/main.ts"],\n    cache:{},\n    packageCache:{}\n})).plugin(tsify)\n\nlet paths = {\n    pages:["src/*.html"]\n}\ngulp.task("copy-html",function(){\n    return gulp.src(paths.pages).pipe(gulp.dest("dist"))\n});\nfunction bundle(){\n    return wathchedBrowerify.bundle().pipe(source(\'bundle.js\'))\n    .pipe(gulp.dest("dist"));\n}\ngulp.task("default",gulp.series("copy-html",bundle));\n\nwathchedBrowerify.on("update",bundle);\nwathchedBrowerify.on("log",gutil.log)\n')])])]),s("h3",{attrs:{id:"浏览器自动刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器自动刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器自动刷新")]),e._v(" "),s("h4",{attrs:{id:"安装-live-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-live-server","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 live-server")]),e._v(" "),s("p",[e._v("live-server与我们上面介绍的typescript，gulp都没有关系。 你只需要全局安装live-server。然后进入dist目录，运行live-server即可看到效果。")]),e._v(" "),s("p",[e._v("它的"),s("a",{attrs:{href:"https://www.npmjs.com/package/live-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm地址"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g live-server\ncd dist\nlive-server\n")])])]),s("h2",{attrs:{id:"在gulp中使用less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在gulp中使用less","aria-hidden":"true"}},[e._v("#")]),e._v(" 在gulp中使用less")]),e._v(" "),s("h3",{attrs:{id:"准备好目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备好目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备好目录")]),e._v(" "),s("p",[e._v("dist/css")]),e._v(" "),s("p",[e._v("src/less")]),e._v(" "),s("h3",{attrs:{id:"安装gulp-less包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装gulp-less包","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装gulp-less包")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install gulp-less --dev\n")])])]),s("h3",{attrs:{id:"修改gulpfile配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改gulpfile配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改gulpfile配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let gulp = require("gulp")\n\nlet browserify =require("browserify")\nlet source = require("vinyl-source-stream")\nlet tsify = require("tsify");\nlet watchify = require("watchify")\nlet gutil = require("gulp-util")\n\nconst less = require(\'gulp-less\')\n\nvar wathchedBrowerify = watchify(browserify({\n    basedir:"",\n    debug:true,\n    entries:["src/main.ts"],\n    cache:{},\n    packageCache:{}\n})).plugin(tsify)\n\nlet paths = {\n    pages:["src/*.html"]\n}\n\ngulp.task(\'less\', function () {\n    return gulp.src(\'src/less/**/*.less\')\n      .pipe(less())\n      .pipe(gulp.dest(\'dist/css\'));\n  });\n\ngulp.task("copy-html",function(){\n    return gulp.src(paths.pages).pipe(gulp.dest("dist"))\n});\nfunction bundle(){\n    return wathchedBrowerify.bundle().pipe(source(\'bundle.js\'))\n    .pipe(gulp.dest("dist"));\n}\ngulp.task("default",gulp.series("copy-html","less",bundle));\n\ngulp.watch([\'src/less/*.less\',\'src/index.html\'], gulp.series(\'less\',\'copy-html\'));\n\nwathchedBrowerify.on("update",bundle);\nwathchedBrowerify.on("log",gutil.log)\n\n')])])]),s("h2",{attrs:{id:"end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end","aria-hidden":"true"}},[e._v("#")]),e._v(" end")]),e._v(" "),s("p",[e._v("至此，我们搭建一个可以写ts代码，并在浏览器环境中运行的开发环境。")])])},[],!1,null,null,null);a.options.__file="dev-gulp-env.md";t.default=a.exports}}]);