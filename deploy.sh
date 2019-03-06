#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
cd blogs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
#git remote add origin https://github.com/fanyoufu/fanyoufu.github.io.git
git remote add origin https://github.com/fanyoufu/blog.git master:gh-pages
git push -f origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:fanyoufu/blog.git master:gh-pages
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
