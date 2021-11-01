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
     * 处理主播资料审核
     */
    async saveProfile (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AnchorProfile()
        }
        req.setId(param.profileId)
        req.setNickname(param.nickname)
        req.setSignature(param.signature)
        req.setGender(param.gender)

        const metadata = {'token': getToken()}
        this.client.saveProfile(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }

    async processProfile (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AnchorProfile()
        }
        req.setId(param.profileId)
        req.setStatus(param.status)
        req.setRejectReason(param.reason)

        const metadata = {'token': getToken()}
        this.client.saveProfile(req, metadata, (err, resp) => {
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
        req.setDealStatusList([2,3])
        req.setScene(param.scene)
        req.setReporterType(param.reporterType)
        req.setReporterId(param.reporterId)
        req.setReportedType(param.reportedType)
        req.setReportedId(param.reportedId)
        req.setCreatedStart(param.createdStart)
        req.setCreatedEnd(param.createdEnd)


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
        req.setViolationId(param.entityId)
        req.setDealStatus(param.dealStatus)
        req.setDealMessage(param.dealMessage)
        req.setBlockDuration(param.duration)

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



    /**
     * 待审核视频
     */
    async getLiveList (param, callback) {
        const req = new this.proto.LiveListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setAnchorId(param.anchorId)
        req.setStatus(param.reviewStatus)
        req.setCreatedStart(param.createdStartUint)
        req.setCreatedEnd(param.createdEndUint)

        const metadata = {'token': getToken()};
        this.client.getLiveList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    /**
     * 处理通话录制视频列表
     */
    async processLive (param, callback) {
        const req = new this.proto.FileRecord()
        req.setId(param.id)
        req.setStatus(param.status)

        const metadata = {'token': getToken()}
        this.client.processLive(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }


}
