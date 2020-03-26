/*
 * @Description:
 * @LastEditors  : Pat
 * @LastEditTime : 2020-02-19 21:44:58
 */
import router from './index'
import store from '@/config/store/index'
import { asyncRoutes } from '@/config/link'
import config from "@/config/app"
let dct: any = document
//路由拦截
router.beforeEach(async (to, from, next) => {
    //用来做登录页不能浏览器前进回退
    let allowBack: any = true; //    给个默认值true
    dct.title = to.name || config.name;
    if (to.meta.allowBack !== undefined) {
        allowBack = to.meta.allowBack;
    };
    if (!allowBack) {
        history.pushState(null, location.href)
    };
    localStorage.setItem("allowBack", allowBack);
    if (to.path == "/") {
        next("/index");
    } else {
        const hasPermissions = store.getters.permission_routes && store.getters.permission_routes.length > 0
        if (!hasPermissions) {
            const accessRoutes = await store.dispatch('permission/generateRoutes', asyncRoutes)
            router.addRoutes(accessRoutes)
            // { ...to, replace: true }
            next()
        } else {
            next();
        }
    }
})