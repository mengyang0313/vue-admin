import Vue from 'vue'
import {getToken, removeToken} from '@/utils/cookie'
import { events } from '@/constants'
import {
    AreaListReply, LoginRequest, AdminListReply, GuildListReply, AppListReply, AnchorListRequest, UserListRequest,
    UserListReply, AdminFileChunk, AdjustBalanceRequest, ProfileListRequest, ViolationListRequest, ProcessProfileRequest,
    ProcessViolationRequest, LiveListRequest, PayListRequest, RobotListRequest, RobotMessageListRequest, AutoMessageListRequest,
    AnchorFullRequest, ChatMessageListRequest, CallListRequest, TransactionListRequest, AuthorizeAnchorRequest, BlockRequest, UnblockRequest,
    MigrateRequest, MomentListRequest
} from '../proto/js/cms_pb'
import { Empty, EntityType, User, AnchorLevel, ReviewStatus, Moment } from '../proto/js/usertype_pb'
import { Admin, Guild, RobotMessage, AutoMessage } from '../proto/js/cmstype_pb'
import { AnchorProfile } from '../proto/js/anchortype_pb'
import { CmsSdkClient } from '@/proto/js/cms_grpc_web_pb.js'
import {getAreaList, getGuildList, getAppList, initData} from "@/utils/common";
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
      ProfileListRequest,
      ViolationListRequest,
      ProcessProfileRequest,
      ProcessViolationRequest,
      LiveListRequest,
      PayListRequest,
      RobotListRequest,
      RobotMessageListRequest,
      AutoMessageListRequest,
      AnchorFullRequest,
      ChatMessageListRequest,
      CallListRequest,
      TransactionListRequest,
      AuthorizeAnchorRequest,
      BlockRequest,
      UnblockRequest,
      MigrateRequest,
      MomentListRequest,
      Empty,
      EntityType,
      User,
      AnchorLevel,
      ReviewStatus,
      Moment,
      Admin,
      Guild,
      RobotMessage,
      AnchorProfile,
      AutoMessage,
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


Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
