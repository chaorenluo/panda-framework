<p align="center">
  <a href="https://panda-framework.github.io">
    <a href="https://panda-framework.github.io">
    <img width="161" height="125" src="https://upload-images.jianshu.io/upload_images/8108267-b9d5a9dea5e57a79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
  </a>
  </a>
</p>

<h1 align="center">panda-framework</h1>

<h3 align="center">A Light Vue 2.0 Web UI Framework</h3>



<div align="center">

[![Build Status](https://travis-ci.com/panda-framework/panda-framework.svg?branch=master)](https://travis-ci.com/panda-framework/panda-framework)
[![codecov](https://codecov.io/gh/panda-framework/panda-framework/branch/master/graph/badge.svg)](https://codecov.io/gh/panda-framework/panda-framework)
![MIT](https://img.shields.io/badge/license-MIT-000000.svg)
![webpack](https://img.shields.io/badge/webpack-4-blue.svg)
![vue](https://img.shields.io/badge/vue-2.6.10-green.svg)

</div>


<img style="height:100%;width:100%" src="https://github.com/panda-framework/panda-framework/blob/master/static/Screenshot_en_new.png?raw=true"/>

English | [简体中文](./README-zh_CN.md)


## 📦 Install

Use npm

```bash
npm install panda-framework --S
```

Use yarn

```bash
yarn add panda-framework
```

## 🔨 Quick Start

```javascript
import Vue from 'vue'
import Ninecat from 'panda-framework'
import 'panda-framework/package/main.css'

Vue.use(Ninecat)

// or
import {
  Button
  // ...
} from 'panda-framework'

Vue.component(Button.name, Button)

```

## 🖥  Browser Support

Supports all major modern browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> </br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >=11                                                                                                                                                 | >= 14                                                                                                                                                  | >= 45                                                                                                                                                         | >=49                                                                                                                                                       | >=10                                                                                                                                                      |


## 🔗 Links

- [Home page](https://chaorenluo.github.io/panda-framework/docs/index.html#/PButton)


## ⌨️ Development

Clone locally

```bash
$ git clone https://github.com/chaorenluo/panda-framework
$ cd panda-framework
$ yarn install
$ yarn start
```

## ✅ Todo List

- [x] Document directory custom configuration.
- [x] Preview demo online.
- [x] Integrate Travis CI.
- [x] Integrate codecov.
- [x] Building documents automatically. 
- [x] Tag to build npm packages automatically.
- [x] Component unit testing. 
- [x] Integrate docsearch.(Some problems,need fix.)
- [x] Support JSX.
- [ ] Common component develop.(Doing)
- [ ] Integrate codepen.
- [ ] Color theme customization.
- [ ] Globalization.
- [ ] Mixed develop with typescript and JavaScript.

