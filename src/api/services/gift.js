import { getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 获取礼物记录列表
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getGiftList (param, callback) {
        let req = new this.proto.GiftListRequest();
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setUserId(param.userId)
        req.setAppId(param.appId)
        req.setAnchorId(param.anchorId)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getGiftList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
