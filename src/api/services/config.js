import {setToken, getToken} from '@/utils/cookie'
import { error } from '@/utils/error'
import {OsType} from "@/proto/js/usertype_pb";

export default class {
    constructor (deps) {
        this.proto = deps.proto
        this.client = new deps.proto.CmsClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
    }


    // 查询区域列表
    async getAreaConfigList (param, callback) {
        const req = new this.proto.AreaConfigListRequest();
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)

        const metadata = {'token': getToken()};
        this.client.getAreaConfigList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 保存区域配置
    async saveAreaConfig (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.AreaConfig()
        }
        req.setAppId(param.appId)
        req.setAreaId(param.areaId)
        req.setConvertRate(param.convertRate)
        req.setDepositCommission(param.depositCommission)
        req.setRewardCommission(param.rewardCommission)
        req.setCallPrice(param.callPrice)
        req.setFreeMessageCount(param.freeMessageCount)
        req.setNewUserReward(param.newUserReward)
        req.setHeartbeatInterval(param.heartbeatInterval)
        req.setPayTypesList(param.payTypes)
        req.setPayChannelIdsList(param.payChannelIds)
        req.setCdn(param.cdn)
        req.setDndPeriod(param.dndPeriod)
        req.setTagsList(param.tags)
        req.setAnchorExchangeRate(param.anchorExchangeRate)

        const metadata = {'token': getToken()}
        this.client.saveAreaConfig(req, metadata, (err, resp) => {
            if (!err) {
                callback(true)
            } else {
                callback(false)
                error(err)
            }
        })
    }


    // 查询支付渠道
    async getPayChannelList (param, callback) {
        const req = new this.proto.PayChannelListRequest();
        req.setAreaId(param.areaId)
        req.setPayType(param.payType)

        const metadata = {'token': getToken()};
        this.client.getPayChannelList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 保存支付渠道配置
    async savePayChannel (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.PayChannel()
        }
        req.setAreaId(param.areaId)
        req.setOsType(param.osType)
        req.setPayType(param.payType)
        req.setChannel(param.channel)
        req.setTitle(param.title)
        req.setName(param.name)
        req.setIcon(param.icon)
        req.setEnable(param.enable)
        req.setDiscount(param.discount)
        req.setSort(param.sort)
        req.setNote(param.note)

        const metadata = {'token': getToken()};
        this.client.savePayChannel(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 查询支付参数
    async getPayConfigList (param, callback) {
        const req = new this.proto.PayConfigListRequest();
        req.setAreaId(param.areaId)

        const metadata = {'token': getToken()};
        this.client.getPayConfigList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 保存支付参数
    async savePayConfig (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.PayConfig()
        }
        req.setAreaId(param.areaId)
        req.setType(param.type)
        req.setAppId(param.appId)
        req.setAppSecret(param.appSecret)
        req.setRedirectUrl(param.redirectUrl)
        req.setCallbackUrl(param.callbackUrl)
        req.setExtra1(param.extra1)
        req.setExtra2(param.extra2)
        req.setExtra3(param.extra3)

        const metadata = {'token': getToken()};
        this.client.savePayConfig(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 查询国家配置
    async getCountryConfigList (param, callback) {
        const req = new this.proto.CountryConfigListRequest();
        req.setAreaId(param.areaId)

        const metadata = {'token': getToken()};
        this.client.getCountryConfigList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 保存国家配置
    async saveCountryConfig (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.CountryConfig()
        }
        req.setAreaId(param.areaId)
        req.setCountry(param.country)
        req.setEnable(param.enable)
        req.setTitle(param.title)
        req.setName(param.name)
        req.setCurrency(param.currency)
        req.setIcon(param.icon)
        req.setExchangeRate(param.exchangeRate)
        req.setApproximationsList(param.approximations)
        req.setPayChannelIdsList(param.payChannelIds)
        req.setSort(param.sort)

        const metadata = {'token': getToken()};
        this.client.saveCountryConfig(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 查询应用列表
    async getAppList (param, callback) {
        const req = new this.proto.CountryConfigListRequest();
        req.setAreaId(param.areaId)

        const metadata = {'token': getToken()};
        this.client.getAppList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }


    // 保存应用
    async saveApp (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.App()
        }
        req.setId(param.id)
        req.setOsType(param.osType)
        req.setAppKey(param.appKey)
        req.setEnable(param.enable)
        req.setTitle(param.title)
        req.setIsAnchor(param.isAnchor)
        req.setBundleId(param.bundleId)
        req.setStoreCred(param.storeCred)
        req.setApiAddr(param.apiAddr)
        req.setNote(param.note)
        req.setAreaIdsList(param.areaIds)

        const metadata = {'token': getToken()};
        this.client.saveApp(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 获取商品配置
    async getCommodityList (param, callback) {
        const req = new this.proto.CommodityListRequest();
        req.setAreaId(param.areaId)
        req.setAppId(param.appId)
        req.setIsSubscription(param.isSubscription)

        const metadata = {'token': getToken()};
        this.client.getCommodityList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 保存商品
    async saveCommodity (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.Commodity()
        }
        req.setId(param.id)
        req.setAppId(param.appId)
        req.setAreaId(param.areaId)
        req.setEnable(param.enable)
        req.setTitle(param.title)
        req.setName(param.name)
        req.setSku(param.sku)
        req.setPrice(param.price)
        req.setCurrency(param.currency)
        req.setDiscount(param.discount)
        req.setIcon(param.icon)
        req.setAmount(param.amount)
        req.setBonus(param.bonus)
        req.setVipDays(param.vipDays)
        req.setSort(param.sort)
        req.setIsSubscription(param.isSubscription)

        const metadata = {'token': getToken()};
        this.client.saveCommodity(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 获取版本列表
    async getVersionList (param, callback) {
        const req = new this.proto.VersionListRequest();
        req.setAppId(param.appId)

        const metadata = {'token': getToken()};
        this.client.getVersionList(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }



    // 保存商品
    async saveVersion (param, callback) {
        let req = param.struct
        if(typeof(req) == "undefined"){
            req = new this.proto.Version()
        }
        req.setId(param.id)
        req.setAppId(param.appId)
        req.setOsType(param.osType)
        req.setCode(param.code)
        req.setName(param.name)
        req.setEnable(param.enable)
        req.setInReview(param.inReview)
        req.setNote(param.note)

        const metadata = {'token': getToken()};
        this.client.saveVersion(req, metadata, (err, resp) => {
            if (!err) {
                callback(resp)
            } else {
                error(err)
            }
        })
    }

}
