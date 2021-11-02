import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    // 查询主播列表
    async getAnchorList (param, callback) {
        const req = new this.proto.AnchorListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAnchorId(param.anchorId)
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setGuildId(param.guildId)
        req.setBlockStatus(param.blockStatus)
        req.setOnlineStatus(param.onlineStatus)
        req.setReviewStatus(param.reviewStatus)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getAnchorList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    async getAnchorFull ( param, callback) {
        const req = new this.proto.AnchorFullRequest()
        req.setAnchorId(param.id)

        const metadata = {'token': getToken()};
        this.client.getAnchorFull(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 更新主播基础信息
    async updateAnchorBasic (param, callback) {
        const req = param.struct
        req.setId(param.id)
        req.setGuildId(param.guildId)
        req.setAreaId(param.areaId)
        req.setLevel(param.level)
        req.setNote(param.note)
        req.setReviewStatus(param.reviewStatus)
        req.setBankName(param.bankName)
        req.setAccountName(param.accountName)
        req.setBankAccount(param.bankAccount)

        const metadata = {'token': getToken()};
        this.client.updateAnchorBasic(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 认证主播
    async authorizeAnchor (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AuthorizeAnchorRequest()
        }
        req.setAnchorId(param.anchorId)
        req.setAreaId(param.areaId)
        req.setGuildId(param.guildId)

        const metadata = {'token': getToken()};
        this.client.authorizeAnchor(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                error(err)
                callback(false)
            }
        })
    }


    // 封禁
    async block (param, callback) {
        let req = new this.proto.BlockRequest()
        req.setEntityType(param.entityType)
        req.setEntityId(param.entityId)
        req.setBlockStatus(param.blockStatus)
        req.setDuration(param.duration)
        req.setReason(param.reason)

        const metadata = {'token': getToken()};
        this.client.block(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                error(err)
                callback(false)
            }
        })
    }


    // 解封
    async unblock (param, callback) {
        let req = new this.proto.UnblockRequest()
        req.setEntityType(param.entityType)
        req.setEntityId(param.entityId)

        const metadata = {'token': getToken()};
        this.client.unblock(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                error(err)
                callback(false)
            }
        })
    }


    // 账户迁移
    async migrate (param, callback) {
        let req = new this.proto.MigrateRequest()
        req.setEntityType(param.entityType)
        req.setSrcId(param.srcId)
        req.setDstId(param.dstId)

        const metadata = {'token': getToken()};
        this.client.migrate(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                error(err)
                callback(false)
            }
        })
    }


    /**
     * 更新奖励惩罚
     */
    async adjustBalance ( param, callback) {
        const req = new this.proto.AdjustBalanceRequest()
        req.setEntityType(this.proto.EntityType.ENTITYANCHOR)
        req.setEntityId(param.id)
        req.setAmount(param.amount)
        req.setSendNotify(param.sendNotify)
        req.setDesc(param.desc)

        const metadata = {'token': getToken()};
        this.client.adjustBalance(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
