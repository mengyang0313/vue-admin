import request from '../request'
import {removeToken} from "@/utils/cookie";

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getUserInfo(params) {
    return request({
        url: '/user/info',
        method: 'get',
        params
    })
}
