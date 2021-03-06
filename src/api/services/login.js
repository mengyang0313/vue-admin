import {setToken, getToken} from '@/utils/cookie'
import {loginOut} from "@/utils/error";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }

    async login (user, callback) {
        const req = new this.proto.LoginRequest()
        req.setEmail(user.email.trim())
        req.setPassword(user.password.trim())
        this.client.login(req, {}, (err, resp) => {
            if (!err) {
                setToken(resp.getAccessToken())
                callback(true)
            } else {
                callback(false)
            }
        })
    }


}
