/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-02-19 15:31:14
 * @LastEditors  : Pat
 * @LastEditTime : 2020-02-19 23:33:45
 */
const api = require('@/init/api.js');
let appConfig: any = {
    name: 'Vue TypeScript Demo',
    // 项目启动IP
    host: '0.0.0.0',
    buildName: "dist",
    // 项目启动端口
    port: 8089,
    //预请求缓存20天
    cacheTime: 1728000,
    // 设置路由模式
    // hash or history
    router_mode: 'hash',
    proxyTable: {}
}
for (let i in api) {
    appConfig[i] = api[i]
}

export default appConfig