import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'
import {loginOut} from "@/api/login";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 查询用户列表
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getUserList (param, callback) {
        const req = new this.proto.UserListRequest
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setUserId(param.id)
        req.setAreaId(param.areaId)
        req.setNickname(param.nickname)
        req.setVipOnly(param.vipOnly)
        req.setDepositOnly(param.depositOnly)
        req.setMinBalance(param.minBalance)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)

        const metadata = {'token': getToken()};
        this.client.getUserList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
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
                error(err)
            }
        })
    }


    /**
     * 更新用户
     */
    async updateUser (param, callback) {
        const req = new this.proto.User()
        req.setId(param.id)
        req.setVipEndAt(param.vipEndAt.getTime()/1000)

        const metadata = {'token': getToken()};
        this.client.updateUser(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
