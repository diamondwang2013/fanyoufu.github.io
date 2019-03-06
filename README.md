# notes

## 命令介绍

```
npm run update
```

把本地  的更新的源代码同步到 github 上。

使用 vuepress 生成简易风格的博客系统。

## 复制默认风格文件

你可以按文档的提示去新建立 layouts/Layout.vue 等等文件及文件夹去自己配置一个主题。但这样的成本太高，容易让人失去兴趣。我的做法比较粗暴一点：默认默认风格的全部源文件，然后，在此基础上修改。

### 复制 theme-default

在.vuepress 下新建 theme 文件夹，并把 vuepress 源文件中的 theme-default（如果够你在本地安装了 vuepress 的话，你可以在 node_modules/@vuepress/theme-default 中去找）下的文件全拷贝出来，放在 theme 下。

此时，你 npm run dev 再去查看效果，应该与默认的主题是一样的，没有区别。下面，我们就可以开始改造了。

### 改造主页 Home

在 theme/comonents/home.vue 中，你可以看到一些端倪。 features 项的设置是在 项目目录 blogs 下的 readme.md 中定义的。

###
