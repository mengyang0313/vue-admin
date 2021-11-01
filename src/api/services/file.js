import { getToken } from '@/utils/cookie'
import { error } from '@/utils/error'
import {Message} from "element-ui";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    /**
     * 删除文件
     */
    async deleteFile (param, callback) {
        const req = new this.proto.FileRecord()
        req.setId(param.id)
        req.setStatus(param.status)

        const metadata = {'token': getToken()}
        this.client.deleteFile(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }
}
