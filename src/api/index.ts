/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-02-19 15:31:14
 * @LastEditors  : Pat
 * @LastEditTime : 2020-02-19 18:50:39
 */
import { get, post } from './axios/axios'
export async function login(params: any) {
    return await post(`/login`, params)
}