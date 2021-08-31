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


export function getReviewStatus(){
    return [{
        value: '1',
        label: '未审核'
    }, {
        value: '2',
        label: '已提交审核'
    }, {
        value: '3',
        label: '审核中'
    }, {
        value: '4',
        label: '审核不通过'
    }, {
        value: '5',
        label: '审核通过'
    }]
}


export function getReportedTypes(){
    return [{
        value: '1',
        label: '用户'
    }, {
        value: '2',
        label: '主播'
    }]
}


export function getReportedTime(){
    return [{
        value: '1',
        label: '今天'
    }, {
        value: '2',
        label: '最近3天'
    }, {
        value: '2',
        label: '最近7天'
    }]
}


