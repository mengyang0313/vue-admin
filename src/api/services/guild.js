import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    /**
     * 查询工会
     * @param param
     * @param callback
     * @returns {Promise<void>}
     */
    async getGuildList (param, callback) {
        const req = new this.proto.GuildListRequest();
        req.setAreaId(param.areaId)
        const metadata = {'token': getToken()};
        this.client.getGuildList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    async saveGuild (param, callback) {
        let req = param.struct;
        if(typeof(req) == "undefined"){
            req = new this.proto.Guild()
        }else{
            req.setId(param.id)
        }
        req.setAreaId(param.areaId)
        req.setName(param.name)
        req.setEnable(param.enable)
        req.setNote(param.note)

        const metadata = {'token': getToken()}
        this.client.saveGuild(req, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


}
