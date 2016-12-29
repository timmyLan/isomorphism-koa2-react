isomorphism-koa2-react:fire:
===
isomorphism-koa2-react [![Build Status](https://travis-ci.org/timmyLan/isomorphism-koa2-react.svg?branch=master)](https://travis-ci.org/timmyLan/isomorphism-koa2-react)

自动化构建项目
---
通过`yeoman`进行自动化构建该项目
* install yo using npm
```
 npm install -g yo
```
* install [`generator-isomorphism-koa2-react`](https://github.com/timmyLan/generator-isomorphism-koa2-react)
```
 npm install -g generator-isomorphism-koa2-react
```
* mkdir && cd your project directory,eg: 
```
 mkdir test && cd test
```
* run isomorphism-koa2-react with yo
```
 yo isomorphism-koa2-react
```
* answers
```
? What's the Project name(isomorphism-koa2-react)
? What's the Project version(1.0.0)
? What's the Project description()
? What's the Project git repository()
? What's your name()
```
* finish
```
 npm start
```
目录结构
---
```
.
├── LICENSE
├── README.md
├── app #前端相关
│   ├── actions #redux actions
│   ├── app.js #根节点挂载
│   ├── common #公共部分 
│   ├── components #组件
│   ├── containers #容器
│   ├── reducers #redux reducers
│   ├── routes.js #react-router
│   └── store #redux store
├── bin
│   ├── development.js #development enter file
│   └── production.js #production enter file
├── package.json 
├── platforms #平台相关
│   ├── common #公共部分 
│   └── server #服务相关
├── public
│   └── favicon.ico
├── test #测试代码相关
│   ├── actions #测试redux actions
│   │   └── about_test.js
│   ├── karma.conf.js #karma.conf
│   └── test_index.js #测试入口文件
├── webpack.build.js #production webpack
├── webpack.development.js #development webpack
├── webpack.test.js #test webpack
└── yarn.lock #yarn.lock

```
script
----
```javascript
"scripts": {
    "start": "node bin/development.js", //development
    "production": "node bin/production.js", //production
    "build": "npm run clean && webpack --config webpack.build.js", //build
    "clean": "rm -rf public/build/ && rm -rf dist/", //clean
    "test": "./node_modules/karma/bin/karma start test/karma.conf.js", //test
    "dev": "npm start" //development
}
```
