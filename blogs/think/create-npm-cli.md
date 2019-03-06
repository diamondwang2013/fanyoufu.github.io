# 如何去生成自己的xxx-cli命令

## 背景

你积累了一些前端工程代码，希望这些工程代码能够复用。 比如说，为了学习使用typescript，我们在本地使用gulp,typescript,browerify,live-server等工具搭建了一个学习环境。

现在，你如果把这个学习环境提供给其他小伙伴使用？


## 如何复用代码
1. 纯文件分享。
 例如，共享在百度云中。下次要使用时，直接copy下来，改改目录名，工程名。
2. npm包。
在创建好前端项目之后，通过npm install XXX 的方式把代码拉下来，保存在node_modules中。通过 import 的方式使用代码。
3. npm-cli 命名行

具体使用方式是：

```
npm instill -g XXXX;

XXXX 命令 参数
```
典型的代码有 vue-cli, @vue-cli  create-react-app 等等。

本文介绍第三种方式。

## 基本步骤

1. 在github上创建代码库(下午以my-cli为例)。
2. 在本地以npm包的方式开发。
3. 开发完成后，打包上传到 npm。
4. 其他用户通过 npm install -g my-cli 的方式安装到本地。
5. 在本地运行 my-cli create ，来创建一个初始项目。


### 让你的代码支持命令行

1. 在package.json中设置 bin选项。

```
{
    "bin" : { "cliname" : "./cli.js" }
}
```
更多参考[bin](!https://docs.npmjs.com/files/package.json#bin) 。
2. 创建 bin/cli.js文件
在项目根目录下，创建bin/cli.js文件。其中，目录结构如下：

```
my-cli
    -bin
        -cli.js
    -package.json
``` 

编写bin/cli.js中的代码如下：
```
#!/usr/bin/env node
console.info("hello my-cli !")
```
特别注意第一句： `#!/usr/bin/env node`

3. 本地加载这个包
在项目目录下运行 npm install -g
```
 npm install -g
``` 
切换到其他的目录下。你试着在控制台中运行： 
```
my-cli
``` 

就会看到控制台的输出了。

为啥？
我们知道，如果在控制台中直接输入my-cli还不报错，说明，my-cli已经写入了环境目录下。在控制台中运行 `set` 命令，查看当前的环境变量。
你会发现`C:\Users\用户名\AppData\Roaming\npm`这个路径存在于环境变中。这就意味着你在控制台中输入的命令名，会在这个目录中去找。
