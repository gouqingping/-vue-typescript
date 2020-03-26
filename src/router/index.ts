/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-23 16:55:52
 * @LastEditors  : Pat
 * @LastEditTime : 2020-03-24 09:36:57
 */
import Vue from "vue";
import Router, { RawLocation } from "vue-router";
import Home from "../views/HelloWorld.vue"

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location: RawLocation) {
	return (<any>(routerPush.call(this, location))).catch((error: any) => error)
}

Vue.use(Router);

const createRouter = () => new Router({
	routes: [{
		path: "*",
		component: Home
	}]
})

const router = createRouter()

export default router