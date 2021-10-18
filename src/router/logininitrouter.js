import router from './index'
import {getModules} from './routes'


export function initRouter(callback){
    let modules = getModules()
    router.addRoutes([])
    router.addRoutes(modules)
    callback()
}

