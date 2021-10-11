import router from './index'
import {getModules} from './routes'


export function initRouter(){
    let modules = getModules()
    router.addRoutes(modules)
}

