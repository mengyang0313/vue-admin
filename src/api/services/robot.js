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
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AnchorProfile()
        }
        req.setNickname(param.nickname)
        req.setAvatar(param.avatar)
        req.setAreaId(param.areaId)
        req.setBirthday(param.birthdayTime)
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
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.RobotMessage()
        }
        req.setAnchorId(param.robotId)
        req.setType(param.type)
        req.setAction(param.action)
        req.setUri(param.uri)
        req.setThumb(param.thumb)
        req.setText(param.text)
        req.setSort(param.sort)
        req.setInterval(param.interval)
        req.setEnable(param.enable)
        req.setDuration(param.duration)

        const metadata = {'token': getToken()};
        this.client.saveRobotMessage(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


    // 删除机器人消息
    async deleteRobotMessage (param, callback) {
        const req = new this.proto.RobotMessage()
        req.setId(param.id)

        const metadata = {'token': getToken()};
        this.client.deleteRobotMessage(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
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
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AutoMessage()
        }
        req.setAreaId(param.areaId)
        req.setAction(param.action)
        req.setType(param.type)
        req.setText(param.text)
        req.setEnable(param.enable)
        req.setUri(param.uri)
        req.setThumb(param.thumb)
        req.setDuration(param.duration)

        const metadata = {'token': getToken()};
        this.client.saveAutoMessage(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


    // 删除自动消息
    async deleteAutoMessage (param, callback) {
        const req = new this.proto.AutoMessage()
        req.setId(param.id)

        const metadata = {'token': getToken()};
        this.client.deleteAutoMessage(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }


    // 获取朋友圈列表
    async getMomentList (param, callback) {
        const req = new this.proto.MomentListRequest()
        req.setEntityId(param.entityId)
        req.setEntityType(param.entityType)

        const metadata = {'token': getToken()}
        this.client.getMomentList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    async saveMoment (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.Moment()
        }
        req.setEntityId(param.entityId)
        req.setEntityType(param.entityType)
        req.setAppId(param.appId)
        req.setAreaId(param.areaId)
        req.setContent(param.content)
        req.setStatus(param.status)
        req.setPublishAt(param.publishAt)
        req.setImagesList(param.images)
        req.setThumb(param.thumb)
        req.setVideo(param.video)
        req.setLikes(param.likes)

        const metadata = {'token': getToken()};
        this.client.saveMoment(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }




}
