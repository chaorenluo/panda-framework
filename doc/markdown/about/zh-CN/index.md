<h1>
panda-framework
</h1>
<div class="panda-logo">
  
</div>
    <h1>
      <img src="https://travis-ci.com/panda-framework/panda-framework.svg?branch=master">
      <img src="https://codecov.io/gh/panda-framework/panda-framework/branch/master/graph/badge.svg">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg">
      <img src="https://img.shields.io/badge/webpack-4-blue.svg">
      <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
  </h1>


`panda-framework` 是一款轻量级的Vue UI Web组件库。

## 支持环境
支持主流的现代浏览器。

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> </br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >=11                                                                                                                                                 | >= 14                                                                                                                                                  | >= 45                                                                                                                                                         | >=49                                                                                                                                                       | >=10                                                                                                                                                      |

## 安装

我们推荐使用 npm 或 yarn 的方式进行安装，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```shell
// 使用npm

npm install panda-framework -S

// 使用yarn

yarn add panda-framework
```

## 示例

```
import Vue from 'vue'

// 全局引入
import Panda from 'panda-framework'

Vue.use(Panda)

支持按需引入
import {Button} from 'panda-framework'
Vue.use(Button);

需要安装
npm install babel-plugin-component -D

然后，将 .babelrc 修改为：
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "panda-framework",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}


## 开发指南

- [Vue](https://cn.vuejs.org/index.html)