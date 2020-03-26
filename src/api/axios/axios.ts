/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-02-19 15:31:14
 * @LastEditors  : Pat
 * @LastEditTime : 2020-02-19 18:53:07
 */
const qs = require("qs")
import Vue from 'vue'
import axios from 'axios'
//import { Message, Loading } from 'element-ui'
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = ''
//var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
	config => {
		// loadingInstance = Loading.service({
		// 	lock: true,
		// 	text: '数据加载中，请稍后...',
		// 	spinner: 'el-icon-loading',
		// 	background: 'rgba(0, 0, 0, 0.7)'
		// })
		if (config.method === 'post') {
			config.data = qs.stringify(config.data)
		}
		return config
	},
	err => {
		// loadingInstance.close()
		// Message.error('请求错误')
		return Promise.reject(err)
	}
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
	res => res,
	err => {
		return Promise.reject(err)
	}
)
// 发送请求
export function post(url: string, params: any) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(res => {
				resolve(res)
			}, err => {
				reject(err)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function get(url: string, params: any) {
	return new Promise((resolve, reject) => {
		axios.get(url, { params: params })
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function uploadRequest(url: string, params: any) {
	return new Promise((resolve, reject) => {
		axios.create({
			withCredentials: true
		}).post(url, params).then(response => {
			resolve(response)
		}, err => {
			reject(err)
		}).catch((error) => {
			reject(error)
		})
	})
}
