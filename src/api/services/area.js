import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    /**
     * 获取运营区域列表
     */
    async getAreaList (param, callback) {
        let req = new this.proto.Empty();

        const metadata = {'token': getToken()};
        this.client.getAreaList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
