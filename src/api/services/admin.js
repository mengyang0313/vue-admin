import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    /**
     * 查询后台管理帐号
     * @param callback
     * @returns {Promise<void>}
     */
    async getAdminList (param, callback) {
        const emptyReq = new this.proto.Empty();
        const metadata = {'token': getToken()};
        this.client.getAdminList(emptyReq, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

    async saveAdmin (param, callback) {
        const admin = new this.proto.Admin();
        admin.setEnable(true)
        admin.setId(param.id)
        admin.setEmail(param.email)
        admin.setPassword(param.password)
        admin.setName(param.name)
        admin.setAreaIdsList(param.area)

        const metadata = {'token': getToken()};
        this.client.saveAdmin(admin, metadata, (err, resp) => {
            !err ? callback(true) : callback(false)
        })
    }


}
