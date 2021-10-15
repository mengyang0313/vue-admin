import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    // 统计数据
    async getOverview (param, callback) {
        let req = new this.proto.OverviewRequest();
        req.setAreaId(param.areaId)
        req.setStartAt(param.startAt)
        req.setEndAt(param.endAt)

        const metadata = {'token': getToken()};
        this.client.getOverview(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 图形统计数据
    async getHomeStat (param, callback) {
        let req = new this.proto.HomeStatRequest();
        req.setAreaId(param.areaId)
        req.setStartAt(param.startAt)
        req.setEndAt(param.endAt)

        const metadata = {'token': getToken()};
        this.client.getHomeStat(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 实时通话/实时营收
    async getAreaStat (param, callback) {
        let req = new this.proto.AreaStatRequest();
        req.setAreaId(param.areaId)
        req.setStartAt(param.startAt)
        req.setEndAt(param.endAt)

        const metadata = {'token': getToken()};
        this.client.getAreaStat(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    // 主播统计
    async getAnchorStat (param, callback) {
        let req = new this.proto.AnchorStatRequest();
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setLevel(param.level)
        req.setAnchorId(param.anchorId)
        req.setStatAt(param.statAt)

        const metadata = {'token': getToken()};
        this.client.getAnchorStat(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 获取用户统计数据
    async getUserStat (param, callback) {
        let req = new this.proto.UserStatRequest();
        req.setStartAt(param.startAt)
        req.setEndAt(param.endAt)
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setInterval(param.interval)

        const metadata = {'token': getToken()};
        this.client.getUserStat(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



}
