#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

cd docs/.vuepress/dist


# 域名
echo 'hub.yellowsea.site' > CNAME

git init

git add -A

git commit -m "deploy"


# # 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:yellowsae/yellowsae.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/yellowsae/m-ui.git main:gh-pages


cd -
