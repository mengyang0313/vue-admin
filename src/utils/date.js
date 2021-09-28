
export function toDate(second){
    if(second===0){
        return "";
    }
    return new Date(second*1000).format('yyyy-MM-dd')
}

export function toTime(second){
    if(second===0){
        return "";
    }
    return new Date(second*1000).format('yyyy-MM-dd hh:mm:ss')
}


export function getDateStr(date){
    if(typeof(date) == "undefined"){
        date = new Date()
    }
    return date.format('yyyy-MM-dd')
}
