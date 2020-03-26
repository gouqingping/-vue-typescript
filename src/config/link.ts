/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-02-19 20:34:33
 * @LastEditors  : Pat
 * @LastEditTime : 2020-02-19 23:32:48
 */
//import Layout from '@/views'
import app from "./app"
//const Home = () => import("@/page/Home.vue")

export const constantRoutes = [
	// {
	// 	path: '/',
	// 	component: Layout,
	// 	children: [{
	// 		path: 'home',
	// 		name: app.name,
	// 		component: Home,
	// 		meta: { title: app.name, isShowMenu: true },
	// 		hidden: true
	// 	}],
	// 	meta: {
	// 		name: "首页",
	// 		icon: "el-icon-s-home"
	// 	}
	// },
]

export const asyncRoutes = [
	{
		path: '/index',
		component: () => import("@/views/HelloWorld.vue"),
		meta: {
			name: '公共组件使用',
			icon: "el-icon-s-platform"
		},
		hidden: true
	}
]