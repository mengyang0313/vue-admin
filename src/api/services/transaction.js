import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'
import {TransactionListRequest} from "@/proto/js/cms_pb";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 获取交易记录列表
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getTransactionList (param, callback) {
        let req = new this.proto.TransactionListRequest();
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setTraderType(param.traderType)
        req.setTraderId(param.traderId)
        req.setSourceType(param.sourceType)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getTransactionList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
