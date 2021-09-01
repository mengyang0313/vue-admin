import {Empty} from "@/proto/js/usertype_pb";
import {getToken, removeToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";

// 地区
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


// 工会列表
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

// 主播等级
export function getAnchorLevel(){
    return [{
        value: '0',
        label: '全部'
    }, {
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

// 审核状态
export function getReviewStatus(key){
    let arr = [{
            value: '0',
            label: '全部'
        }, {
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
            label: '不通过'
        }, {
            value: '5',
            label: '审核通过'
        }]
    if(typeof(key) != "undefined"){
        let label = ""
        arr.forEach((item) => {
            if(key.toString() === item.value.toString()){
                label = item.label
            }
        })
        return label
    }else{
        return arr
    }
}


//
export function getReportedTypes(){
    return [{
        value: '0',
        label: '全部'
    }, {
        value: '1',
        label: '用户'
    }, {
        value: '2',
        label: '主播'
    }]
}


export function getReportedTime(){
    return [{
        value: '0',
        label: '全部'
    }, {
        value: '1',
        label: '今天'
    }, {
        value: '2',
        label: '最近3天'
    }, {
        value: '3',
        label: '最近7天'
    }]
}

// 在线状态
export function getOnlineStatus(){
    return [{
        value: '0',
        label: '全部'
    },{
        value: '1',
        label: '离线'
    }, {
        value: '2',
        label: '在线'
    }, {
        value: '3',
        label: '忙线'
    }, {
        value: '3',
        label: '勿扰'
    }]
}


// 违规场景
export function getViolationScene(){
    return [{
        value: '0',
        label: '全部'
    },{
        value: '1',
        label: '视频通话'
    }, {
        value: '2',
        label: '聊天'
    }, {
        value: '3',
        label: '主播资料'
    }]
}


// 封禁类型
export function getBlockStatus(){
    return [{
        value: '0',
        label: '全部'
    },{
        value: '1',
        label: '不封禁'
    }, {
        value: '2',
        label: '封禁账号'
    }, {
        value: '3',
        label: '封禁设备'
    }, {
        value: '4',
        label: '封禁所有'
    }]
}




