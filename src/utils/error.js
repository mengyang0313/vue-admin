import {Empty} from "@/proto/js/usertype_pb";
import {getToken, removeToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";

// grpc预定义了一套通用错误码 https://grpc.github.io/grpc/core/md_doc_statuscodes.html
// 程序使用了其中的部分错误码，这个错误码直接通过捕获rpc的异常或者返回值获取，使用的错误码如下
// 2 UNKNOWN 未知错误
// 3 INVALID_ARGUMENT 调用参数非法
// 5 NOT_FOUND 查询的记录不存在
// 6 ALREADY_EXISTS 创建的记录已存在
// 7 PERMISSION_DENIED 没有操作权限
// 9 FAILED_PRECONDITION 前置条件不满足，用户已被封禁，检测到该错误时跳到封禁页面并调用GetBlockInfo获取封禁的详细信息
// 13 INTERNAL 内部服务器错误
// 14 UNAVAILABLE 网络错误或超时，app本地错误，请求没有到服务器
// 16 UNAUTHENTICATED 未登录，检测到该错误时跳到登录页面
// 其中需要特殊处理的是"2 UNKNOWN 未知错误"，检测到该错误码时表示为业务层错误，需要通过返回的header来获取详细的
// 业务层错误码，业务层错误码通过枚举ErrorCode定义，header的key为"error-code"


export function error(err) {
    if(16 == err.code){
        loginOut()
    }
    console.log(err)
}


export function loginOut() {
    removeToken()
    location.reload()
}

