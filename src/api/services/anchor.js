import {setToken, getToken} from '@/utils/cookie'
import {EntityType} from "@/proto/js/usertype_pb";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient("http://localhost:8080", null, null)
    }


    /**
     * 查询主播列表
     * @param page
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getAnchorList ( param, callback) {
        const req = new this.proto.AnchorListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAnchorId(param.anchorId)
        req.setAreaId(param.areaId)
        req.setGuildId(param.guildId)
        req.setBlockStatus(param.blockStatus)
        req.setOnlineStatus(param.onlineStatus)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)

        const metadata = {'token': getToken()};
        this.client.getAnchorList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                console.log(err)
            }
        })
    }



    /**
     * 充值
     */
    async adjustBalance ( param, callback) {
        const req = new this.proto.AdjustBalanceRequest()
        req.setEntityType(this.proto.EntityType.ENTITYUSER)
        req.setEntityId(param.id)
        req.setAmount(param.amount)
        req.setSendNotify(param.sendNotify)
        req.setDesc(param.desc)

        const metadata = {'token': getToken()};
        this.client.adjustBalance(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                console.log(err)
            }
        })
    }

}
