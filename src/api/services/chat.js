import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 获取聊天记录列表
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getChatMessageList (param, callback) {
        let req = new this.proto.ChatMessageListRequest();
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setUserId(param.userId)
        req.setAppId(param.appId)
        req.setAnchorId(param.anchorId)
        req.setDirection(param.direction)
        req.setType(param.type)
        req.setKeyword(param.keyword)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getChatMessageList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
