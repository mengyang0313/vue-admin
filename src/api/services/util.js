import {setToken, getToken} from '@/utils/cookie'


export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient("http://43.132.169.239:10000", null, null)
    }


    /**
     * 获取运营区域列表，不分页
     * @returns {*[]}
     */
    getAreas () {
        const empty = this.proto.Empty();
        const metadata = {'token': getToken()};
        const data = []
        this.client.getAreaList(empty, metadata, (err, resp) => {
            if (!err) {
                const list = resp.getAreasList()
                list.forEach((item, index)=>{
                    const json = {
                        value : item.getId(),
                        label : item.getTitle(),
                    }
                    data.push(json)
                })
            } else {
                console.log(err)
            }
        })
        return data
    }

}
