import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 获取通话记录列表
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getCallList (param, callback) {
        let req = new this.proto.CallListRequest();
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setUserId(param.userId)
        req.setAnchorId(param.anchorId)
        req.setCallType(param.callType)
        req.setHangType(param.hangType)
        req.setStatus(param.status)
        req.setMinDuration(param.minDuration)
        req.setMaxDuration(param.maxDuration)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)

        const metadata = {'token': getToken()};
        this.client.getCallList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
