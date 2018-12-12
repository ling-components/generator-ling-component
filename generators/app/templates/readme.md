<%= name %>
----

<%= description %>

本项目为玲珑组件库组件生成器（generator-ling-component）自动生成，为正常编译，开发者需要全局安装 taro-cli 1.1.0 版本。

```
npm install -g @tarojs/cli@1.1.0
```

开发期间可以执行 `npm run dev` 预览组件，开发完毕后请执行 `npm pack` 并将打包的 tgz 文件上传至玲珑组件库平台。

## 注意

1. 以下文件、目录为自动生成，其中一些是正常运行 Taro 项目所必须的，请勿修改，否则可能破坏项目正常功能，且无法通过后续审核：

  - config/
  - src/pages/
  - src/app.js
  - src/index.html
  - src/index.js
  - src/config
  - project.config.json

2. 不要升级依赖版本

3. 若组件希望覆盖小程序平台，请阅读 Taro 相关文档并自测支持情况
