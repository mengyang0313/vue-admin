import { getToken } from '@/utils/cookie'
import { error } from '@/utils/error'
import {ProcessProfileRequest, ProcessViolationRequest} from "@/proto/js/cms_pb";

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
     * 处理主播资料审核
     */
    async processProfile (param, callback) {
        const req = new this.proto.ProcessProfileRequest()
        req.setProfileId(param.profileId)
        req.setStatus(param.status)
        req.setReason(param.reason)

        const metadata = {'token': getToken()}
        this.client.processProfile(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
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
        req.setScene(param.scene)
        req.setAreaId(param.areaId)
        req.setReportedType(this.proto.EntityType.ENTITYUSER)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)
        req.setReportedId(param.reporterId)

        const metadata = {'token': getToken()};
        this.client.getViolationList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    /**
     * 处理违规
     */
    async processViolation (param, callback) {
        let req = new this.proto.ProcessViolationRequest()
        req.setViolationId(param.violationId)
        req.setDealStatus(param.dealStatus)
        req.setDealMessage(param.dealMessage)
        req.setBlockDuration(param.blockDuration)

        const metadata = {'token': getToken()}
        this.client.processViolation(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }

}
