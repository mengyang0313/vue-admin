import Vue from 'vue'
import { getToken } from '@/utils/cookie'
import { events } from '@/constants'
import {
    AreaListReply, LoginRequest, AdminListReply, GuildListReply, AppListReply, AnchorListRequest, UserListRequest,
    UserListReply, AdminFileChunk, AdjustBalanceRequest
} from '../proto/js/cms_pb'
import { Empty, EntityType } from '../proto/js/usertype_pb'
import { Admin, Guild } from '../proto/js/cmstype_pb'
import { CmsSdkClient } from '@/proto/js/cms_grpc_web_pb.js'
import axios from "axios";

const getMetadata = () => {
  return {
    'token': getToken()
  }
}

const deps = {
  events,
  getMetadata,
  proto: {
      AreaListReply,
      LoginRequest,
      AdminListReply,
      GuildListReply,
      AppListReply,
      AnchorListRequest,
      UserListRequest,
      UserListReply,
      AdminFileChunk,
      AdjustBalanceRequest,
      Empty,
      EntityType,
      Admin,
      Guild,
      CmsClient: CmsSdkClient
  }
}

const requireFile = require.context(
  './services',
  false,
  /[\w-]+\.js$/
)



const initService = () => {
    const services = {}
    requireFile.keys().forEach(fileName => {
        const config = requireFile(fileName)
        const name = fileName
            .replace(/^\.\//, '')
            .replace(/^\.\/_/, '')
            .replace(/\.\w+$/, '')
        const Service = config.default || config
        services[name] = new Service(deps)
    })
    Vue.prototype.$service = services
}
initService()
export default initService


// 访问json文件
export function getTableList(param, url) {
    return axios({
        url: url,
        method: 'get',
        param
    })
}
