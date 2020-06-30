<p align="center">
  <a href="https://panda-framework.github.io">
    <img width="191"  src="https://tinypng.com//images/pro/panda-pro.png" />
  </a>
</p>

<h1 align="center">panda-framework</h1>

<h3 align="center">一个清爽的Vue 2.0 UI Web框架</h3>



<div align="center">

[![Build Status](https://travis-ci.com/panda-framework/panda-framework.svg?branch=master)](https://travis-ci.com/panda-framework/panda-framework)
[![codecov](https://codecov.io/gh/panda-framework/panda-framework/branch/master/graph/badge.svg)](https://codecov.io/gh/panda-framework/panda-framework)
![MIT](https://img.shields.io/badge/license-MIT-000000.svg)
![webpack](https://img.shields.io/badge/webpack-4-blue.svg)
![vue](https://img.shields.io/badge/vue-2.6.10-green.svg)

</div>



## 📦 安装
通过npm

```bash
npm install panda-framework --S
```
通过yarn

```bash
yarn add panda-framework
```

## 🔨 快速开始

```javascript
import Vue from 'vue'
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
```

## 🖥 浏览器支持

现代浏览器或者IE11以上

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> </br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >=11                                                                                                                                                 | >= 14                                                                                                                                                  | >= 45                                                                                                                                                         | >=49                                                                                                                                                       | >=10                                                                                                                                                      |

## 🔗 链接

- [主页](https://chaorenluo.github.io/panda-framework/docs/index.html#/about)


## ⌨️ 开发

本地Clone

```bash
$ git clone https://github.com/chaorenluo/panda-framework
$ cd panda-framework
$ yarn install
$ yarn start
```

## ✅ Todo List

- [x] 自定义文档目录结构
- [x] 在线预览UI组件
- [x] 集成Travis CI实现自动化构建
- [x] 集成Codecov展示测试覆盖率
- [x] 自动构建发布文档 
- [x] 自动通过git tag 发布npm
- [x] 完成组件单元测试
- [x] 集成Docsearch
- [x] 支持JSX语法开发
- [ ] 基本组件开发完善（进行中）
- [ ] 集成codepen完成在线编辑代码
- [ ] 自定义主题色
- [ ] 国际化
- [ ] Typescript 和 JavaScript混合开发



