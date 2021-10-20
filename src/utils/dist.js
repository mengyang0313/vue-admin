import {Empty} from "@/proto/js/usertype_pb";
import {PayChannelListRequest, CommodityListRequest, AppListRequest, IpLocationRequest} from "@/proto/js/cms_pb";
import {getToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";
import {isEmpty} from "@/api/api";
import {loginOut} from "@/utils/error";


export async function initData() {
    let areaArr = await initAreas()
    sessionStorage.setItem("areaArr", JSON.stringify(areaArr));
    // getAreaList()
    // getGuildList()
    // getAppList()
    // getPayChannelList()
    // getCommodityList()
    let guildArr = await initGuilds()
    sessionStorage.setItem("guildArr", JSON.stringify(guildArr));

    let currentUser = await initCurrentUserInfo()
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

    let apps = await getApps()
    sessionStorage.setItem("appArr", JSON.stringify(apps));

    let payChannelArr = await initPayChannel()
    sessionStorage.setItem("payChannelArr", JSON.stringify(payChannelArr));

    let commodityArr = await initCommodity()
    sessionStorage.setItem("commodityArr", JSON.stringify(commodityArr));
}

// export function initAsyncData(){
//     getApps(function (arr){
//         sessionStorage.setItem("appArr", JSON.stringify(arr));
//     })
//     getPayChannel(function(arr){
//         sessionStorage.setItem("payChannelArr", JSON.stringify(arr));
//     })
//     getCommodity(function(arr){
//             sessionStorage.setItem("commodityArr", JSON.stringify(arr))
//     })
//
// }

export const initCurrentUserInfo = () => new Promise((resolve, reject) => {
    const req = new Empty();
    const metadata = {'token': getToken()};
    console.log("initCurrentUserInfo")
    cmsService.getAdminInfo(req, metadata, (err, resp) => {
        if (!err) {
            console.log("initCurrentUserInfo resp:"+resp)
            const json = {
                name : resp.getName(),
                email : resp.getEmail(),
                areaId : resp.getAreaId(),
                appIds : resp.getAppIdsList(),
                modules : resp.getModules()
            }
            resolve(json)
        } else {
            console.log(err)
        }
    })
})
export function getCurrentUserAreaId(){
    try{
        let json = sessionStorage.getItem("currentUser");
        if(isEmpty(json)){
            loginOut()
        }else{
            return JSON.parse(json).areaId
        }
    }catch (err){
        console.log(err)
    }
    return undefined
}

export function getCurrentUserModules(){
    try{
        let json = sessionStorage.getItem("currentUser");
        return JSON.parse(json).modules
    }catch (err){
        console.log(err)
    }
    return undefined
}


export const initAreas = () => new Promise((resolve, reject) => {
    const empty = new Empty();
    const metadata = {'token': getToken()};
    cmsService.getAreaList(empty, metadata, (err, resp) => {
        if (!err) {
            const arr = []
            const list = resp.getAreasList()
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getTitle(),
                }
                arr.push(json)
            })
            resolve(arr)
        } else {
            console.log(err)
        }
    })
})

export function getAreaList(isShowAll) {
    let json = sessionStorage.getItem("areaArr");
    if (isEmpty(json)) {
        initAreas().then(r => {
            console.log("init area list: "+ r)
            sessionStorage.setItem("areaArr", JSON.stringify(r));
        })
    }else{
        let arr = JSON.parse(json)
        return setOk(isShowAll, arr)
    }
}




// 工会列表
export const initGuilds = () => new Promise((resolve, reject) => {
    const req = new Empty();
    const metadata = {'token': getToken()};
    cmsService.getGuildList(req, metadata, (err, resp) => {
        if (!err) {
            const arr = []
            const list = resp.getGuildsList()
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getName(),
                    areaId : item.getAreaId()
                }
                arr.push(json)
            })
            resolve(arr)
        } else {
            console.log(err)
        }
    })
})

export function getGuildList(isShowAll) {
    let json = sessionStorage.getItem("guildArr");
    if (isEmpty(json)) {
        initGuilds().then(r => {
            console.log("init guild list: "+ r)
            sessionStorage.setItem("guildArr", JSON.stringify(r));
        })
    }else{
        let arr = JSON.parse(json)
        return setOk(isShowAll, arr)
    }
}
export function getGuildListByAreaId(val, isShowAll){
    let guildList = getGuildList(false)
    let newList = []
    if(val === 0){
        newList = guildList
    }else{
        guildList.forEach(item => {
            if(item.areaId === val){
                newList.push(item)
            }
        })
    }
    return setOk(isShowAll, newList)
}

// 应用列表
export const initApps = () => new Promise((resolve, reject) => {
    const req = new AppListRequest();
    const metadata = {'token': getToken()};
    cmsService.getAppList(req, metadata, (err, resp) => {
        if (!err) {
            const arr = []
            const list = resp.getAppsList()
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getTitle(),
                    os : item.getOsType(),
                    isAnchor: item.getIsAnchor(),
                    areaIds: item.getAreaIdsList()
                }
                arr.push(json)
            })
            resolve(arr)
        } else {
            console.log(err)
        }
    })
})

export async function getApps(isNoAnchor, isShowAll) {
    let arr = await initApps()
    return arr
}

export function getAppList(isNoAnchor, isShowAll) {
    let json = sessionStorage.getItem("appArr");
    let arr = []
    if (isEmpty(json)) {
        initApps().then(r => {
            console.log("init app list: "+ r)
            sessionStorage.setItem("appArr", JSON.stringify(r));
        })
    }else{
        arr = JSON.parse(json)
    }
    if(isNoAnchor){
        let result = []
        arr.forEach(item => {
            if(!item.isAnchor){
                result.push(item)
            }
        })
        return setOk(isShowAll, result)
    }else{
        return setOk(isShowAll, arr)
    }
}

export function getAppListByAreaId(val, isFilter, isShowAll){
    let apps = getAppList(isFilter, false)

    let newApps = []
    if(val === 0){
        newApps = apps
    }else{
        apps.forEach(item => {
            if(item.areaIds.indexOf(val) >= 0){
                newApps.push(item)
            }
        })
    }
    return setOk(isShowAll, newApps)
}

// 支付渠道
export const initPayChannel = () => new Promise((resolve, reject) => {
    const req = new PayChannelListRequest();
    const metadata = {'token': getToken()};
    cmsService.getPayChannelList(req, metadata, (err, resp) => {
        if (!err) {
            const arr = []
            const list = resp.getChannelsList()
            console.log("getPayChannel list:"+list)
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getName(),
                    icon : item.getIcon(),
                    areaId : item.getAreaId()
                }
                arr.push(json)
            })
            resolve(arr)
        } else {
            console.log(err)
        }
    })
})

export function getPayChannelList(areaId) {
    let str = sessionStorage.getItem("payChannelArr");
    if (isEmpty(str)) {
        initPayChannel().then(r => {
            console.log("init PayChannel list: "+ r)
            sessionStorage.setItem("payChannelArr", JSON.stringify(r));
        })
    }else{
        let arr = JSON.parse(str)
        let result = []
        arr.forEach(item => {
            if(item.areaId === areaId){
                result.push(item)
            }
        })
        return setOk(false, arr)
    }
}



// 商品列表
export const initCommodity = () => new Promise((resolve, reject) => {
    const req = new CommodityListRequest();
    const metadata = {'token': getToken()};
    cmsService.getCommodityList(req, metadata, (err, resp) => {
        if (!err) {
            const arr = []
            const list = resp.getCommoditiesList()
            list.forEach((item, index)=>{
                const json = {
                    value : item.getId(),
                    label : item.getTitle(),
                    name : item.getName(),
                    areaId : item.getAreaId(),
                    appId: item.getAppId()
                }
                arr.push(json)
            })
            resolve(arr)
        } else {
            console.log(err)
        }
    })
})

export function getCommodityList() {
    let str = sessionStorage.getItem("commodityArr");
    if (isEmpty(str)) {
        initCommodity().then(r => {
            console.log("init Commodity list: "+ r)
            sessionStorage.setItem("commodityArr", JSON.stringify(r));
        })
    }else{
        let arr = JSON.parse(str)

        return setOk(false, arr)
    }
}


// 查询ip的地址
export function ipToAddress(ip, callback){
    let req = new IpLocationRequest();
    req.setIp(ip)
    let metadata = {'token': getToken()};
    cmsService.getIpLocation(req, metadata, (err, resp) => {
        if (!err) {
            callback(resp)
        } else {
            console.log(err)
        }
    })
}


export function getArrName(arr, id){
    let label = ""
    arr.forEach((item) => {
        if(typeof(item.value) !== "undefined"){
            if(id.toString() === item.value.toString()){
                label = item.label
            }
        }
    })
    return label
}


export function getAppName(arr, id){
    let label = ""
    let os = 0
    arr.forEach((item) => {
        if(typeof(item.value) !== "undefined"){
            if(id.toString() === item.value.toString()){
                label = item.label
                os = item.os
            }
        }
    })
    return {label:label, os:os}
}


export function setOk(isShowAll, arr){
    if (isShowAll) {
        arr.unshift({
            label: "全部",
            value: 0
        })
    }
    return arr
}



// 是否
export function getBool(){
    return [{
        value: true,
        label: '是'
    }, {
        value: false,
        label: '否'
    }]
}

// 主播等级
export function getAnchorLevel(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '差劲'
    }, {
        value: 2,
        label: '中等'
    }, {
        value: 3,
        label: '良好'
    }, {
        value: 4,
        label: '优秀'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key === 0){
            return label
        }
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

// 审核状态
export function getReviewStatus(key){
    let arr = [{
            value: 0,
            label: '全部'
        }, {
            value: 1,
            label: '未审核'
        }, {
            value: 2,
            label: '已提交审核'
        }, {
            value: 3,
            label: '审核中'
        }, {
            value: 4,
            label: '不通过'
        }, {
            value: 5,
            label: '审核通过'
        }, {
            value: 6,
            label: '停用'
        }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '用户'
    }, {
        value: 2,
        label: '主播'
    }]
}


export function getReportedTime(){
    return [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '今天'
    }, {
        value: 2,
        label: '最近3天'
    }, {
        value: 3,
        label: '最近7天'
    }]
}

// 在线状态
export function getOnlineStatus(key){
    let arr = [{
            value: 0,
            label: '全部'
        },{
            value: 1,
            label: '离线'
        }, {
            value: 2,
            label: '在线'
        }, {
            value: 3,
            label: '忙线'
        }, {
            value: 3,
            label: '勿扰'
        }]

    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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


// 违规场景
export function getViolationScene(){
    return [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '视频通话'
    }, {
        value: 2,
        label: '聊天'
    }, {
        value: 3,
        label: '主播资料'
    }]
}


// 封禁类型
export function getBlockStatus(key){
    let arr = [{
        value: 1,
        label: '不封禁'
    }, {
        value: 2,
        label: '发送警告'
    }, {
        value: 3,
        label: '封禁账号'
    }, {
        value: 4,
        label: '封禁所有'
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


// 封禁时常
export function getBlockTime(key){
    let arr = [{
        value: 5 * 60,
        label: '5分钟'
    },{
        value: 30 * 60,
        label: '30分钟'
    }, {
        value: 60 * 60,
        label: '1小时'
    }, {
        value: 3 * 60 * 60,
        label: '3小时'
    }, {
        value: 24 * 60 * 60,
        label: '1天'
    }, {
        value: 7 * 24 * 60 * 60,
        label: '7天'
    }, {
        value: 30 * 24 * 60 * 60,
        label: '1月'
    }, {
        value: 365 * 24 * 60 * 60,
        label: '1年'
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


// 支付状态
export function getPayStatus(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '待支付'
    }, {
        value: 2,
        label: '已支付'
    }, {
        value: 3,
        label: '已取消'
    }, {
        value: 4,
        label: '已退款'
    }, {
        value: 4,
        label: '已超时'
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


// 职业类型
export function getOccupationType(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: 'IT/互联网/通信'
    }, {
        value: 2,
        label: '学生'
    }, {
        value: 3,
        label: '文化/艺术'
    }, {
        value: 4,
        label: '影视/娱乐'
    }, {
        value: 5,
        label: '金融'
    }, {
        value: 6,
        label: '医药/健康'
    }, {
        value: 7,
        label: '工业/制造业'
    }, {
        value: 8,
        label: '媒体/公关'
    }, {
        value: 9,
        label: '零售'
    }, {
        value: 10,
        label: '教育/科研'
    }, {
        value: 11,
        label: '其他'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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


// 消息类型
export function getMessageType(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '文本'
    }, {
        value: 2,
        label: '礼物'
    }, {
        value: 3,
        label: '充值'
    }, {
        value: 4,
        label: '图片'
    }, {
        value: 5,
        label: '视频'
    }, {
        value: 6,
        label: '语音'
    }, {
        value: 7,
        label: '位置'
    }, {
        value: 8,
        label: '虚拟视频'
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


// 动作类型
export function getActionType(key){
    let arr =  [{
            value: 0,
            label: '全部'
        },{
            value: 1,
            label: '拒绝接听'
        }, {
            value: 2,
            label: '未接听'
        }, {
            value: 3,
            label: '通话结束'
        }, {
            value: 4,
            label: '关注'
        }, {
            value: 5,
            label: '充值'
        }, {
            value: 6,
            label: '发送礼物'
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


// 通话发起类型
export function getCallType(key){
    let arr = [{
            value: 0,
            label: '全部'
        },{
            value: 1,
            label: '用户呼叫'
        }, {
            value: 2,
            label: '主播呼叫'
        }, {
            value: 3,
            label: '用户Ai呼叫'
        }, {
            value: 4,
            label: '主播Ai呼叫'
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



// 结束类型
export function getHangType(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '用户挂断'
    }, {
        value: 2,
        label: '主播挂断'
    }, {
        value: 3,
        label: '无人接听'
    }, {
        value: 4,
        label: '客户端网络不好'
    }, {
        value: 4,
        label: '余额不足'
    }, {
        value: 4,
        label: '系统错误'
    }, {
        value: 4,
        label: '声网超时'
    }, {
        value: 4,
        label: '声网错误'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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




// 结束类型
export function getCallStatus(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '等待接通'
    }, {
        value: 2,
        label: '通话中'
    }, {
        value: 3,
        label: '通话结束'
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



// 实体类型
export function getEntityType(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '普通用户'
    }, {
        value: 2,
        label: '主播'
    }, {
        value: 3,
        label: '管理员'
    }, {
        value: 4,
        label: '公会'
    }, {
        value: 5,
        label: '订阅订单'
    }, {
        value: 6,
        label: '充值订单'
    }, {
        value: 7,
        label: '礼物记录'
    }, {
        value: 8,
        label: 'VIP记录'
    }, {
        value: 9,
        label: '通话记录'
    }, {
        value: 10,
        label: '签到记录'
    }, {
        value: 11,
        label: '举报记录'
    }, {
        value: 12,
        label: '在线记录'
    }, {
        value: 13,
        label: '结算记录'
    }, {
        value: 14,
        label: '奖惩记录'
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


// 用户类型
export function getTraderType(key){
    let arr = [{
        value: 0,
        label: '全部'
    },{
        value: 1,
        label: '用户'
    }, {
        value: 2,
        label: '主播'
    }, {
        value: 3,
        label: '管理员'
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


// 实体类型
export function getSourceType(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 5,
        label: '订阅订单'
    }, {
        value: 6,
        label: '充值订单'
    }, {
        value: 7,
        label: '礼物记录'
    }, {
        value: 8,
        label: 'VIP记录'
    }, {
        value: 9,
        label: '通话记录'
    }, {
        value: 10,
        label: '签到记录'
    }, {
        value: 11,
        label: '举报记录'
    }, {
        value: 12,
        label: '在线记录'
    }, {
        value: 13,
        label: '结算记录'
    }, {
        value: 14,
        label: '奖惩记录'
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



// 结算状态
export function getSettleStatus(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '预结算'
    }, {
        value: 2,
        label: '已剔除'
    }, {
        value: 3,
        label: '结算完成'
    }, {
        value: 4,
        label: '撤销结算'
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



// 支付方式
export function getPayType(key){
    let arr = [{
        value: 1,
        label: 'Google'
    }, {
        value: 2,
        label: 'Apple'
    }, {
        value: 3,
        label: 'Xendit'
    }, {
        value: 4,
        label: 'PayerMax'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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



// 系统类型
export function getOsType(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: 'Android'
    }, {
        value: 2,
        label: 'Ios'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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



// 文件类型
export function getFileType(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '图片'
    }, {
        value: 2,
        label: '视频'
    }, {
        value: 3,
        label: '音频'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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


// 性别类型
export function getGenderType(key){
    let arr = [{
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '男'
    }, {
        value: 2,
        label: '女'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0 || key==='0'){
            return label
        }
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



// 时间间隔
export function getStatInterval(key){
    let arr = [{
        value: 3,
        label: '1小时'
    }, {
        value: 4,
        label: '1天'
    }]
    if(typeof(key) != "undefined"){
        let label = ""
        if(key===0){
            return label
        }
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

