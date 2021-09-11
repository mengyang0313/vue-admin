import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    // 生成预结算记录
    async createSettleRecord (param, callback) {
        let req = new this.proto.CreateSettleRequest();
        req.setAreaId(param.areaId)
        req.setSettleAt(param.settleAt)
        req.setMinBalance(param.minBalance)

        const metadata = {'token': getToken()}
        this.client.createSettleRecord(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 确认结算
    async submitSettleRecord (param, callback) {
        let req = new this.proto.SubmitSettleRequest();
        req.setAreaId(param.areaId)
        req.setRecordsList(param.records)

        const metadata = {'token': getToken()}
        this.client.submitSettleRecord(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 查询结算记录生成或提交进度
    async querySettleProgress (param, callback) {
        let req = new this.proto.SettleProgressRequest();
        req.setAreaId(param.areaId)

        const metadata = {'token': getToken()}
        this.client.querySettleProgress(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 获取结算记录
    async getSettleList (param, callback) {
        let req = new this.proto.SettleListRequest();
        req.setAreaId(param.areaId)
        req.setGuildId(param.guildId)
        req.setAnchorId(param.anchorId)
        req.setSettleAt(param.settleAt)
        req.setStatus(param.status)

        const metadata = {'token': getToken()}
        this.client.getSettleList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
