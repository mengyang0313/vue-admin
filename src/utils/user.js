
export function getUser(second){

}


export function getUserAreaId(areaId){
    if(areaId===0){
        return "";
    }
    return new Date(second*1000).format('yyyy-MM-dd')
}
