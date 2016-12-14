iot-web:fire:
===
iot web development

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
├── webpack.build.js #production webpack
├── webpack.development.js #development webpack
└── yarn.lock #yarn.lock

13 directories, 13 files
```
script
----
```javascript
"scripts": {
    "start": "node bin/development.js", //development
    "production": "node bin/production.js", //production
    "build": "npm run clean && webpack --config webpack.build.js", //build
    "clean": "rm -rf public/build/ && rm -rf dist/", //clean
    "test": "mocha -u bdd --compilers js:babel-core/register", //test
    "dev": "npm start" //development
}
```
