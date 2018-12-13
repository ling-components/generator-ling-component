# <%= name %>

## 简介

玲玲组件库组件依赖 [Taro](https://nervjs.github.io/taro/docs/README.html) 框架，要求开发者对 Taro 有一定了解。

## 快速开始

```
// 全局安装 Taro cli 1.1.0 版本
npm install -g @tarojs/cli@1.1.0

// 运行项目
npm run dev
```

组件代码位于 `src/component/` 下，其他内容开发者无需改动。

开发完成请执行 `npm run pack` 并将位于项目根目录的 `tgz` 文件上传至玲珑组件库平台。

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
