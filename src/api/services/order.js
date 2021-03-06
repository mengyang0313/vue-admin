import { getToken } from '@/utils/cookie'
import { error } from '@/utils/error'
import {Message} from "element-ui";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    // 订单列表
    async getPayList (param, callback) {
        const req = new this.proto.PayListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setUserId(param.userId)
        req.setRecordId(param.recordId)
        req.setStatus(param.payStatus)
        req.setPayType(param.payType)
        req.setOrderId(param.payChannel)
        req.setSubscriptionOnly(param.isSubscription)
        req.setNewUserOnly(param.newUserOnly)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getPayList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
