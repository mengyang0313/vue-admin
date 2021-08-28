import {Empty} from "@/proto/js/usertype_pb";
import {getToken} from "@/utils/cookie";
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

