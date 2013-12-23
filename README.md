Ghost-Sitemap
=============
Sitemap plugin for Ghost platform

## 介绍
使用sitemap module生成网站地图xml文件. 由于Ghost的App(plugin) API在0.5版本才会发布, 所以
目前本插件是通过对Ghost代码hack实现的, 使用方式不够优美

## 安装

1. 将sitemap.js复制到 Ghost/core/server/下
2. 安装sitemap模块  npm install sitemap
3. 修改文件 Ghost/core/server/index.js, 搜索 `routes.frontend(server);` 在后边添加 require('./sitemap')(server);
4. 重启Ghost
5. 访问 http://host/sitemap.xml 查看是否ok


注: 如果在core/server/下没有找到index.js请更新ghost代码


## Targets

* 使用Ghost的plugin机制进行开发
* 简单,易用
