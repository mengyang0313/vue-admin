import { getToken } from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    /**
     * 获取主播资料列表
     */
    async getProfileList (param, callback) {
        const req = new this.proto.ProfileListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAnchorId(param.anchorId)
        req.setAreaId(param.areaId)
        req.setStatus(param.reviewStatus)

        const metadata = {'token': getToken()};
        this.client.getProfileList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    /**
     * 待审核举报
     */
    async getViolationList (param, callback) {
        const req = new this.proto.ViolationListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setReportedType(this.proto.EntityType.ENTITYUSER)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)
        req.setReportedId(param.reporterId)
        req.setReportedId(param.reportedId)

        const metadata = {'token': getToken()};
        this.client.getViolationList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
