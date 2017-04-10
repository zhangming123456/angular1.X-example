# 开发环境说明
文件名说明

- webpack.config.dev.js：配置启动入口
- webpack.config.module.js：配置加载器模块
- webpack.config.plugins.js：配置插件模块

文件夹说明

- src：开发环境文件夹
  - app：入口文件夹
    - app.js：webpack配置所需js入口文件
    - routing.js：路由与总控制器入口文件
  - components：组件
  - template：主模板文件
- statics：静态资源
- vendor：静态文件提供者
- .babelrc：ES6、ES7转ES5配制文件
- .eslintrc.js：代码容错配置
- .gitignore：git过滤配置

下载node_modules配置文件

```
npm install
或点击 npmDownload.bat 文件
```

生产环境

```
npm run build
或点击 npmRunBuild.bat 文件
```

开发环境

```
npm run dev
或点击 npmRunDev.bat 文件
```

#Angular1.X-example说明
这是学习angular例子案例

