
export function toDollar(inc){
    return inc / 100
}


export function checkImg(file){
    let imgType = file.name.substring(file.name.lastIndexOf('.')+1)
    const isPng = imgType === 'png'
    const isJpg = imgType === 'jpg'
    if(!isPng && !isJpg) {
        this.$message({
            message: '上传文件只能是 png、jpg格式!',
            type: 'warning'
        });
        return false
    }
    return true
}


export function checkVideo(file){
    let imgType = file.name.substring(file.name.lastIndexOf('.') + 1)
    const isMp4 = imgType === 'mp4'
    if(!isMp4) {
        this.$message({
            message: '上传文件只能是 mp4格式!',
            type: 'warning'
        });
        return false
    }
    return true
}


//############## 日期 ############
export function toDate(second){
    if(second===0){
        return "";
    }
    return new Date(second * 1000).format('yyyy-MM-dd')
}

export function toTime(second){
    if(second===0){
        return "";
    }
    return new Date(second * 1000).format('yyyy-MM-dd hh:mm:ss')
}


export function getDateStr(date){
    if(typeof(date) == "undefined"){
        date = new Date()
    }
    return date.format('yyyy-MM-dd')
}


export function getCurrentDate(d){
    let date = new Date(new Date().toLocaleDateString())
    return d ? new Date(date.setDate(date.getDate() + d)) : date
}

export function startTime(){
    return new Date(new Date().toLocaleDateString())
}

export function endTime(){
    return new Date(endUnix(new Date()) * 1000)
}

export function startUnix($date) {
    return new Date($date.toLocaleDateString()).getTime() / 1000
}

export function endUnix($date) {
    return startUnix($date) + 24 * 60 * 60 - 1
}
