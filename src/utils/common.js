import {Empty} from "@/proto/js/usertype_pb";
import {getToken, removeToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";


export function getAreas(){
    const empty = new Empty();
    const metadata = {'token': getToken()};
    const data = []
    cmsService.getAreaList(empty, metadata, (err, resp) => {
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



export function getGuildList(){
    const data = []
    const req = new Empty();
    const metadata = {'token': getToken()};
    cmsService.getGuildList(req, metadata, (err, resp) => {
        if (!err) {
            const list = resp.getGuildsList();
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getName()
                }
                data.push(json)
            })
        } else {
            console.log(err)
        }
    })
    return data;
}


export function getAnchorLevel(){
    return [{
        value: '1',
        label: '差劲'
    }, {
        value: '2',
        label: '中等'
    }, {
        value: '3',
        label: '良好'
    }, {
        value: '4',
        label: '优秀'
    }]
}



