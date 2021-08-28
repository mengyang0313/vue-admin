import {setToken, getToken} from '@/utils/cookie'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient("http://localhost:10000", null, null)
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
                console.log(err)
            }
        })
    }

}
