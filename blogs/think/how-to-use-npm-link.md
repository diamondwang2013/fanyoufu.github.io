# npm link

## 背景

你封装了一些工具在 Npm 包中，你想把它上传到 npm 中，供其他人使用。问题是：如何在本地进行测试：在另一个项目中引入这个包，使用这个包中的内容？

##  步骤

### 1. 在你的  当前的包中 npm link

例如，你本地有个项目，包名是 initPackage. 其中根目录下有一个 index.js 文件，你在 Package.json 中也设置它是入口文件。

index.js 的内容如下：

```
export default {
  hello() {
    return "hello";
  }
}
```

它通过 es6 模块化的方式导出一个对象。 接下来，我们希望在正式发布这个包之前，在本地先用用看。

### 2. 在你的目标包中 npm link initPackage

这样，你会在 node_modules 文件夹下找到一个`快捷方式`，它指向 initPackage。
然后，你就可以在你的代码中正常地：`import XXX from 'initPackage'` .

## npm install 也会先调用 npm link
