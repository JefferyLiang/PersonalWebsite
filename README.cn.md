# koa-ts

> 让 Koa 能够配合 typescript 完成服务器端任务的开发

首先这是一个干净的项目，只引入几个必要的简单的中间件，如: `koa-bodyparser`, `koa-router`, `koa-logger`之类的。

在项目中能我们能够使用`typescript`进行代码的编写。

项目中开发模式`npm run dev`是由`nodemonn`配合`ts-node`完成的，配置文件为`nodemon.json`，需要修改的可以到里面修改该文件。

项目中生产模式`npm run prod`是用`pm2`实现的，配置文件在`config/pm2.config.json`中。

## 快速上手

```bash

// 全局安装 pm2 和 pm2 的typescript模块

npm i -g pm2 && pm2 install typescript

// 安装项目的node依赖包

npm i

// 以开发模式启动

npm run dev

// 已生产模式启动

npm run prod

// 关闭生产模式

npm run prod-stop

```

## 项目目录结构

```

.
|
| --- client // 网站的主题文件夹
|
| --- config // 项目全局配置文件夹
|
| --- public // 公用的静态资源文件夹
|
| --- server // Koa 2 的服务器端文件
|       |
|       | --- app.ts // Koa 2 的入口文件
|       |
|       | --- config // Koa 2 的服务器端配置文件夹
|       |
|       | --- controllers // Koa 2 的控制器文件夹
|       |
|       | --- middlewares // Koa 2 引入的中间件配置文件
|       |
|       | --- routes // Koa 2 的路由文件夹

```