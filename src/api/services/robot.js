import { getToken } from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    // 机器人列表
    async getRobotList (param, callback) {
        const req = new this.proto.RobotListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setEnable(param.enable)
        req.setRobotId(param.robotId)

        const metadata = {'token': getToken()};
        this.client.getRobotList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    async saveRobot (param, callback) {
        const req = param.struct
        req.setNickname(param.nickname)
        req.setAvatar(param.avatar)
        req.setAreaId(param.areaId)
        req.setBirthday(param.birthday)
        req.setOccupation(param.occupation)
        req.setOnlineStart(param.onlineStart)
        req.setOnlineEnd(param.onlineEnd)
        req.setSignature(param.signature)
        req.setPhotoIdsList(param.photoIds)
        req.setVideoIdsList(param.videoIds)
        req.setStatus(param.status)

        const metadata = {'token': getToken()};
        this.client.saveRobot(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


    // 获取机器人自动消息列表
    async getRobotMessageList (param, callback) {
        const req = new this.proto.RobotMessageListRequest()
        req.setRobotId(param.robotId)

        const metadata = {'token': getToken()}
        this.client.getRobotMessageList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    async saveRobotMessage (param, callback) {
        const req = new this.proto.RobotMessage()
        req.setAnchorId(param.robotId)
        req.setType(param.type)
        req.setUri(param.uri)
        req.setText(param.text)
        req.setSort(param.sort)
        req.setInterval(param.interval)
        req.setEnable(param.enable)

        const metadata = {'token': getToken()};
        this.client.saveRobotMessage(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


    // AIB场景话术
    async getAutoMessageList (param, callback) {
        const req = new this.proto.AutoMessageListRequest()
        req.setPageNo(param.page.currentPage)
        req.setPageSize(param.page.pageSize)
        req.setAreaId(param.areaId)
        req.setEnable(param.enable)
        req.setAction(param.action)

        const metadata = {'token': getToken()}
        this.client.getAutoMessageList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    async saveAutoMessage (param, callback) {
        const req = new this.proto.AutoMessage()
        req.setAreaId(param.areaId)
        req.setAction(param.action)
        req.setText(param.text)
        req.setEnable(param.enable)

        const metadata = {'token': getToken()};
        this.client.saveAutoMessage(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


}
