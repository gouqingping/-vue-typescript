<!--
 * @Autor        : Pat
 * @Description  : Vue3.0 + TypeScript 3.5.3 Info
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-24 15:45:52
 * @LastEditors  : Pat
 * @LastEditTime : 2020-03-24 15:55:52
 -->
# Vue3.0 + TypeScript 3.5.3

## Port Info

    8888 为 webpack-bundle-analyzer 神器端口，在设置 vue.config.js devServer port 时请不要占用8888端口

## 下拉依赖

    npm i

## 启动

    npm run dev

## 打包

    npm run build

## 修改系统配置

    amb 文件夹下 修改dist.js文件，或者新建一个 *.js 文件 配置相关属性。新建*.js名称为你的打包名称

## 修改api请求地址

    api 文件夹下修改dev.js文件，dev.js 为dev环境下的配置，文件内必须 存在name = "XXX" ，XXX 即为 amb/XXX.js 关联文件

## package.json 自定义 scripts 说明

> vue-cli-service serve  --mode ENV_TYPE=dev  --mode SYS_TYPE=enterprise --report

    * ENV_TYPE 环境区分
    * SYS_TYPE 模式区分
    * report webpack-bundle-analyzer 神器

## vue-cli 使用 webpack-bundle-analyzer

> webpack-bundle-analyzer可以看到项目各模块的大小，可以按需优化

    vue add webpack-bundle-analyzer

#### vue.config.js中配置方法
> 在vue.config.js中的chainWebpack中添加

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
        //生产环境自动删除console
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    );

    or 

    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin).init(Plugin => new Plugin());
    