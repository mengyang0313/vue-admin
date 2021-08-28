import {setToken, getToken} from '@/utils/cookie'

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient("http://localhost:10000", null, null)
    }

    async login (user, callback) {
        const req = new this.proto.LoginRequest()
        req.setEmail(user.email.trim())
        req.setPassword(user.password.trim())
        this.client.login(req, {}, (err, resp) => {
            if (!err) {
                setToken(resp.getAccessToken())
                callback(resp.getAccessToken())
            } else {
                console.log(err)
            }
        })
    }


}
