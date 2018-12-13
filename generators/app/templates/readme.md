# <%= name %>

## 简介

<%= description %>

## 快速开始

本项目为玲珑组件库组件生成器（generator-ling-component）自动生成，为正常编译，开发者需要全局安装 taro-cli 1.1.0 版本。

```
npm install -g @tarojs/cli@1.1.0
```

执行 `npm run dev` 开始开发，组件代码位于 `src/component/` 下，其他内容开发者无需改动。

开发完毕后请执行 `npm run pack` 并将生成的 tgz 文件（位于项目根目录）上传至玲珑组件库平台。

## 注意

1. 设计稿请以 750 宽为准。
1. 开发者只要修改 `src/component/` 下的内容，其他内容仅为正常运行项目所需。
1. 不要升级依赖版本。
1. 若要兼容小程序平台，请阅读 Taro 相关文档并自测支持情况。
1. 上传体积限制目前为 1MB ，图片、音乐等大体积资源文件请使用 CDN 。

## 更多资源

[玲珑组件库](http://zjk.jd.com/)
[Taro 官方网站](https://taro.js.org/)
[玲珑智能设计平台](https://ling.jd.com/)
