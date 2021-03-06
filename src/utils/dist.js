import {Empty} from "@/proto/js/usertype_pb";
import {PayChannelListRequest, CommodityListRequest, AppListRequest, IpLocationRequest} from "@/proto/js/cms_pb";
import {getToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";
import {isEmpty} from "@/api/api";
import {loginOut} from "@/utils/error";


export async function initData() {
    let areaArr = await initAreas()
    // getAreaList()
    // getGuildList()
    // getAppList()
    // getPayChannelList()
    // getCommodityList()
    let guildArr = await initGuilds()
    let currentUser = await initCurrentUserInfo()
    let apps = await initApps()
    let payChannelArr = await initPayChannel()
    let commodityArr = await initCommodity()

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
    cmsService.getAdminInfo(req, metadata, (err, resp) => {
        if (!err) {
            const json = {
                name : resp.getName(),
                email : resp.getEmail(),
                areaId : resp.getAreaId(),
                appIds : resp.getAppIdsList(),
                modules : resp.getModules()
            }
            sessionStorage.setItem("currentUser", JSON.stringify(json));
            resolve(json)
        } else {
            console.log("initCurrentUserInfo :" + err)
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
            sessionStorage.setItem("areaArr", JSON.stringify(arr));
            resolve(arr)
        } else {
            console.log("initAreas:" + err)
        }
    })
})

export function getAreaList(isShowAll) {
    let json = sessionStorage.getItem("areaArr");
    if (isEmpty(json)) {
        initAreas().then()
    }else{
        let arr = JSON.parse(json)
        return setOk(isShowAll, arr)
    }
}




// ????????????
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
            console.log("???????????????:" + JSON.stringify(arr))
            sessionStorage.setItem("guildArr", JSON.stringify(arr))
            resolve(arr)
        } else {
            console.log("initGuilds:" +err)
        }
    })
})

export function getGuildList(isShowAll) {
    let json = sessionStorage.getItem("guildArr");
    if (isEmpty(json)) {
        initGuilds().then()
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

// ????????????
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
            sessionStorage.setItem("appArr", JSON.stringify(arr));
            resolve(arr)
        } else {
            console.log("initApps:" + err)
        }
    })
})

export function getAppList(isNoAnchor, isShowAll) {
    let json = sessionStorage.getItem("appArr");
    let arr = []
    if (isEmpty(json)) {
        initApps().then()
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

// ????????????
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
            sessionStorage.setItem("payChannelArr", JSON.stringify(arr));
            resolve(arr)
        } else {
            console.log("initPayChannel:" +err)
        }
    })
})


export function getPayChannelList(areaId) {
    let str = sessionStorage.getItem("payChannelArr");
    if (isEmpty(str)) {
        initPayChannel().then()
    }else{
        let arr = JSON.parse(str)
        let result = []
        arr.forEach(item => {
            if(item.areaId === areaId){
                result.push(item)
            }
        })
        return setOk(false, result)
    }
}



// ????????????
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
            sessionStorage.setItem("commodityArr", JSON.stringify(arr));
            resolve(arr)
        } else {
            console.log("initCommodity:" +err)
        }
    })
})

export function getCommodityList() {
    let str = sessionStorage.getItem("commodityArr");
    if (isEmpty(str)) {
        initCommodity().then()
    }else{
        let arr = JSON.parse(str)
        return setOk(false, arr)
    }
}


// ??????ip?????????
export function ipToAddress(ip, callback){
    let req = new IpLocationRequest();
    req.setIp(ip)
    let metadata = {'token': getToken()};
    cmsService.getIpLocation(req, metadata, (err, resp) => {
        if (!err) {
            callback(resp)
        } else {
            console.log("ipToAddress:" +err)
        }
    })
}


export function getArrName(arr, id){
    let label = ""
    if(isEmpty(id) || id === 0){
        return label
    }
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
    let isAnchor = false
    if(isEmpty(id) || id === 0){
        return {label:label, os:os, isAnchor: isAnchor}
    }
    arr.forEach((item) => {
        if(typeof(item.value) !== "undefined"){
            if(id.toString() === item.value.toString()){
                label = item.label
                os = item.os
                isAnchor = item.isAnchor
            }
        }
    })
    return {label:label, os:os, isAnchor: isAnchor}
}


export function setOk(isShowAll, arr){
    if (isShowAll) {
        arr.unshift({
            label: "??????",
            value: 0
        })
    }
    return arr
}



// ??????
export function getBool(){
    return [{
        value: true,
        label: '???'
    }, {
        value: false,
        label: '???'
    }]
}

// ????????????
export function getAnchorLevel(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '??????'
    }, {
        value: 4,
        label: '??????'
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

// ????????????
export function getReviewStatus(key){
    let arr = [{
            value: 0,
            label: '??????'
        }, {
            value: 1,
            label: '?????????'
        }, {
            value: 2,
            label: '???????????????'
        }, {
            value: 3,
            label: '?????????'
        }, {
            value: 4,
            label: '?????????'
        }, {
            value: 5,
            label: '????????????'
        }, {
            value: 6,
            label: '??????'
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
export function getReportedTypes(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
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


export function getReportedTime(){
    return [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????3???'
    }, {
        value: 3,
        label: '??????7???'
    }]
}

// ????????????
export function getOnlineStatus(key){
    let arr = [{
            value: 0,
            label: '??????'
        },{
            value: 1,
            label: '??????'
        }, {
            value: 2,
            label: '??????'
        }, {
            value: 3,
            label: '??????'
        }, {
            value: 4,
            label: '??????'
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


// ????????????
export function getViolationScene(isShowAll, key){
    let arr = [{
        value: 1,
        label: '????????????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '????????????'
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
        if(isShowAll){
            arr.unshift({
                value: 0,
                label: '??????'
            })
        }
        return arr
    }
}


// ????????????
export function getBlockStatus(isShowAll, key){
    let arr = [{
        value: 1,
        label: '?????????'
    }, {
        value: 2,
        label: '????????????'
    }, {
        value: 3,
        label: '????????????'
    }, {
        value: 4,
        label: '????????????'
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
        if(isShowAll){
            arr.unshift({
                value: 0,
                label: '??????'
            })
        }
        return arr
    }
}


// ????????????
export function getBlockTime(key){
    let arr = [{
        value: 5 * 60,
        label: '5??????'
    },{
        value: 30 * 60,
        label: '30??????'
    }, {
        value: 60 * 60,
        label: '1??????'
    }, {
        value: 3 * 60 * 60,
        label: '3??????'
    }, {
        value: 24 * 60 * 60,
        label: '1???'
    }, {
        value: 3 * 24 * 60 * 60,
        label: '3???'
    }, {
        value: 7 * 24 * 60 * 60,
        label: '7???'
    }, {
        value: 30 * 24 * 60 * 60,
        label: '1???'
    }, {
        value: 365 * 24 * 60 * 60,
        label: '1???'
    }, {
        value: 10 * 365 * 24 * 60 * 60,
        label: '????????????'
    }]

    if(typeof(key) != "undefined"){
        let label = ""
        arr.forEach((item) => {
            if(key === item.value ){
                label = item.label
            }
            if(key >= arr[arr.length-1].value){
                label = arr[arr.length-1].label
            }
        })
        return label
    }else{
        return arr
    }
}


// ????????????
export function getPayStatus(key){
    let arr = [{
        value: 0,
        label: '??????'
    },{
        value: 1,
        label: '?????????'
    }, {
        value: 2,
        label: '?????????'
    }, {
        value: 3,
        label: '?????????'
    }, {
        value: 4,
        label: '?????????'
    }, {
        value: 5,
        label: '?????????'
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


// ????????????
export function getOccupationType(key){
    let arr = [{
        value: 1,
        label: 'IT/?????????/??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '??????/??????'
    }, {
        value: 4,
        label: '??????/??????'
    }, {
        value: 5,
        label: '??????'
    }, {
        value: 6,
        label: '??????/??????'
    }, {
        value: 7,
        label: '??????/?????????'
    }, {
        value: 8,
        label: '??????/??????'
    }, {
        value: 9,
        label: '??????'
    }, {
        value: 10,
        label: '??????/??????'
    }, {
        value: 11,
        label: '??????'
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


// ????????????
export function getMessageType(key){
    let arr = [{
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '??????'
    }, {
        value: 4,
        label: '??????'
    }, {
        value: 5,
        label: '??????'
    }, {
        value: 6,
        label: '??????'
    }, {
        value: 7,
        label: '??????'
    }, {
        value: 8,
        label: '????????????'
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

export function getMessageTypeReject(key){
    let arr = [{
        value: 1,
        label: '??????'
    }, {
        value: 4,
        label: '??????'
    }, {
        value: 5,
        label: '??????'
    }, {
        value: 6,
        label: '??????'
    }, {
        value: 8,
        label: '????????????'
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


// ????????????
export function getActionType(isShowAll, key){
    let arr =  [{
            value: 1,
            label: '????????????'
        }, {
            value: 2,
            label: '?????????'
        }, {
            value: 3,
            label: '????????????'
        }, {
            value: 4,
            label: '??????'
        }, {
            value: 5,
            label: '??????'
        }, {
            value: 6,
            label: '????????????'
        }, {
            value: 7,
            label: '???????????????'
        }, {
            value: 8,
            label: '????????????'
        }, {
            value: 9,
            label: '????????????'
        }, {
            value: 10,
            label: '????????????'
        }, {
            value: 11,
            label: '????????????????????????'
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
        if(isShowAll){
            arr.unshift({
                value: 0,
                label: '??????'
            })
        }
        return arr
    }
}


// ????????????
export function getViolationType(isShowAll, key){
    let arr =  [{
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '??????'
    }, {
        value: 4,
        label: '??????'
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
        if(isShowAll){
            arr.unshift({
                value: 0,
                label: '??????'
            })
        }
        return arr
    }
}


// ??????????????????
export function getCallType(key){
    let arr = [{
            value: 0,
            label: '??????'
        },{
            value: 1,
            label: '????????????'
        }, {
            value: 2,
            label: '????????????'
        }, {
            value: 3,
            label: '??????Ai??????'
        }, {
            value: 4,
            label: '??????Ai??????'
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



// ????????????
export function getHangType(key){
    let arr = [{
        value: 0,
        label: '??????'
    },{
        value: 1,
        label: '????????????'
    }, {
        value: 2,
        label: '????????????'
    }, {
        value: 3,
        label: '????????????'
    }, {
        value: 4,
        label: '?????????????????????'
    }, {
        value: 5,
        label: '????????????'
    }, {
        value: 6,
        label: '????????????'
    }, {
        value: 7,
        label: '????????????'
    }, {
        value: 8,
        label: '????????????'
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




// ????????????
export function getCallStatus(key){
    let arr = [{
        value: 0,
        label: '??????'
    },{
        value: 1,
        label: '????????????'
    }, {
        value: 2,
        label: '?????????'
    }, {
        value: 3,
        label: '????????????'
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



// ????????????
export function getEntityType(key){
    let arr = [{
        value: 0,
        label: '??????'
    },{
        value: 1,
        label: '????????????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '?????????'
    }, {
        value: 4,
        label: '??????'
    }, {
        value: 5,
        label: '????????????'
    }, {
        value: 6,
        label: '????????????'
    }, {
        value: 7,
        label: '????????????'
    }, {
        value: 8,
        label: 'VIP??????'
    }, {
        value: 9,
        label: '????????????'
    }, {
        value: 10,
        label: '????????????'
    }, {
        value: 11,
        label: '????????????'
    }, {
        value: 12,
        label: '????????????'
    }, {
        value: 13,
        label: '????????????'
    }, {
        value: 14,
        label: '????????????'
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


// ????????????
export function getTraderType(key){
    let arr = [{
        value: 0,
        label: '??????'
    },{
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '?????????'
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


// ????????????
export function getSourceType(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 5,
        label: '????????????'
    }, {
        value: 6,
        label: '????????????'
    }, {
        value: 7,
        label: '????????????'
    }, {
        value: 8,
        label: 'VIP??????'
    }, {
        value: 9,
        label: '????????????'
    }, {
        value: 10,
        label: '????????????'
    }, {
        value: 11,
        label: '????????????'
    }, {
        value: 12,
        label: '????????????'
    }, {
        value: 13,
        label: '????????????'
    }, {
        value: 14,
        label: '????????????'
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



// ????????????
export function getSettleStatus(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '?????????'
    }, {
        value: 2,
        label: '?????????'
    }, {
        value: 3,
        label: '????????????'
    }, {
        value: 4,
        label: '????????????'
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



// ????????????
export function getPayType(isShowAll, key){
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
        if(isShowAll){
            arr.unshift({
                value: 0,
                label: '??????'
            })
        }
        return arr
    }
}



// ????????????
export function getOsType(key){
    let arr = [{
        value: 0,
        label: '??????'
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



// ????????????
export function getFileType(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '??????'
    }, {
        value: 2,
        label: '??????'
    }, {
        value: 3,
        label: '??????'
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


// ????????????
export function getGenderType(key){
    let arr = [{
        value: 0,
        label: '??????'
    }, {
        value: 1,
        label: '???'
    }, {
        value: 2,
        label: '???'
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



// ????????????
export function getStatInterval(key){
    let arr = [{
        value: 3,
        label: '1??????'
    }, {
        value: 4,
        label: '1???'
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

