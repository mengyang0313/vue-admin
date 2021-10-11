import router from './index'
import {getModules} from './routes'


export function initRouter(callback){
    let modules = getModules()
    console.log("####3")
    console.log(modules)
    router.addRoutes([])
    router.addRoutes(modules)
    callback()
}

