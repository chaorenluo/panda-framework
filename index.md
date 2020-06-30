#第一步 执行npm init 配置文件夹目录 

build //用于存放webpack配置文件以及自动生成组件的命令

doc //演示组件库的页面

docs //打包后的演示组件库的页面

lib //用于存放打包后的组件库代码 

packages //用于存放组件库的源码

script //用来存放自动生成代码的模板

src  //组件库打包和开发的入口 

test //用于编写测试用例


![](https://user-gold-cdn.xitu.io/2020/6/21/172d591bdb2b3a24?w=670&h=1068&f=png&s=46757)


#第二步 编写webpack打包配置：

在build里面编写
webpack.common.js  //用于把所有组件打包成单文件的webpack
webpack.component.js //用于把一个一个组件打包成单文件方便按需引入
webpack.config.base.js //一些webpack的公用打包配置
webpack.config.dev.js //组件预览页面的webpack开发环境打包
webpack.config.doc.js //组件预览页面的webpack正式环境打包

然后在build里面创建一个bin目录用于存放一些工具文件

#第三步在package里面创建npm命令

     "dev": "webpack-dev-server --progress --history-api-fallback --config
     build/webpack.config.dev.js",
 
     "start": "npm run dev",
 
    "lint": "eslint --ext .js --ext .vue src --ext .vue packages --ext .vue --ext .js doc --ext .vue",
 
    "lint:fix": "eslint --ext .js,.vue src  doc test packages --fix",
  
    "lint:staged": "lint-staged",
    
    "test:unit": "jest --config test/jest.config.js",
    
    "test": "npm run lint && npm run test:unit",
    
    "test:debug": "node --inspect node_modules/.bin/jest --runInBand --config test/jest.config.js",
    
    "docs:build": "npm run build:icon && webpack --config build/webpack.config.doc.js",
    "new": "node script/create-component.js",
    
    "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",
    
    "pub": "npm publish",
    
    "build:icon": "node build/bin/iconInit", 
    
    "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",
    
    "dist": "npm run clean && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:theme",
    
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile
    packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk"
    

    "dev": 开发环境 启动
    "start": "npm run dev", 开发环境启动
    "lint":  eslint检测
    "lint:fix": eslint修复
     "lint:staged": eslint修改git commit保存的文件
      "test:unit": 执行jest自动化测试
     "test": 执行eslint修复以及jest测试
    "test:debug":  开启jest的debug模式测试
    "docs:build": 打包api文档目录
      "new": 创建新组建，执行后会帮你创建基础目录以及基础代码
    "clean": 删除lib打包目录
      "pub": 发布到npm
      "build:icon": 生成icon图标的json文件
     "build:utils": 把src下面除index文件之外的文件移到lib目录
     "dist": 打包组件库
    "build:theme": 打包组件库css
    
    
    
    