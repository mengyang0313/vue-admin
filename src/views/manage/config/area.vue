<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addArea', '')">+ 新增区域</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="App" prop="areaId">
                    <el-select v-model="search.appId" placeholder="请选择">
                        <el-option v-for="item in appList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span v-if="item.os === 1">
                                <i class="icon-android-fill" style="float: right"></i>
                            </span>
                            <span v-else-if="item.os === 2">
                                <i class="icon-pingguo" style="float: right"></i>
                            </span>
                            <span v-if="item.isAnchor">
                                <i class="iconfont icon-zhuboguanli" style="float: right"></i>
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="padding-left: 20px">
                    <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                </el-form-item>
            </el-form>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="app" label="APP" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                <i class="icon-android-fill"></i>
                            </span>
                            <span v-else-if="scope.row.app.os === 2">
                                <i class="icon-pingguo"></i>
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="convertRate" label="积分转换比例" align="center" width="120" />
                <el-table-column prop="depositCommission" label="充值分成" align="center" width="120"/>
                <el-table-column prop="rewardCommission" label="消费分成" align="center" width="120"/>
                <el-table-column prop="callPrice" label="通话价格" align="center" width="120"/>
                <el-table-column prop="freeMessageCount" label="免费消息" align="center" width="120" />
                <el-table-column prop="newUserReward" label="奖励钻石" align="center" width="120"/>
                <el-table-column prop="heartbeatInterval" label="心跳间隔" align="center" width="120" />
                <el-table-column prop="payTypeNames" label="支付方式" align="center" width="220" />
                <el-table-column prop="cdn" label="cdn域名" align="center" width="420" />
                <el-table-column prop="dndPeriod" label="免打扰时长" align="center" width="120" />
                <el-table-column prop="tags" label="标签配置" align="center" width="820" />
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text">
                            <router-link :to="{path:'./country',query: {areaId: scope.row.areaId,areaName: scope.row.areaStr}}">国家配置</router-link>
                        </el-button>
                        <el-button type="text" @click="toDialog('ossConfig', scope.row)">OSS配置</el-button>
                        <el-button type="text" @click="toDialog('agoraConfig', scope.row)">声网配置</el-button>
                        <el-button type="text" @click="toDialog('rongcloudConfig', scope.row)">融云配置</el-button>
                        <el-button type="text" @click="toDialog('greenConfig', scope.row)">鉴黄配置</el-button>
                        <el-button type="text" @click="toDialog('addArea', scope.row)">参数配置</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 参数配置 弹出栏 -->
            <addArea ref="addArea" @fetchData="fetchData"/>

            <agoraConfig ref="agoraConfig" @fetchData="fetchData"/>

            <ossConfig ref="ossConfig" @fetchData="fetchData"/>

            <rongcloudConfig ref="rongcloudConfig" @fetchData="fetchData"/>

            <greenConfig ref="greenConfig" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addArea from './dialog/addArea'
import ossConfig from './dialog/ossConfig'
import agoraConfig from './dialog/agoraConfig'
import rongcloudConfig from './dialog/rongcloudConfig'
import greenConfig from './dialog/greenConfig'
import {
    getAreaList,
    getAppList,
    getArrName,
    getPayType,
    getAreaListByAreaId,
    getAppName,
    getCurrentUserAreaId
} from "@/utils/dist";

export default {
    components: { Pagination, imageShow, addArea, ossConfig, agoraConfig, rongcloudConfig, greenConfig},
    data() {
        return {
            listLoading: true,
            search: {
                appId: undefined,
                areaId: getCurrentUserAreaId(),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            tableData: [],
            isCollapse: true,
            areaList: getAreaList(),
            appList: [],
            payType: getPayType()
        }
    },
    created() {
        this.changeArea(this.search.areaId)
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.config.getAreaConfigList(this.search, function (result){
                const list = result.getConfigsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAreaListByAreaId($this.search.areaId, false), item.getAppId()),
                        "convertRate" : item.getConvertRate(),
                        "depositCommission" : item.getDepositCommission(),
                        "rewardCommission" : item.getRewardCommission(),
                        "callPrice" : item.getCallPrice(),
                        "freeMessageCount" : item.getFreeMessageCount(),
                        "newUserReward" : item.getNewUserReward(),
                        "heartbeatInterval" : item.getHeartbeatInterval(),
                        "payTypes" : item.getPayTypesList(),
                        "payTypeNames" : $this.handlePayType(item.getPayTypesList()).join(","),
                        "cdn" : item.getCdn(),
                        "dndPeriod" : item.getDndPeriod(),
                        "tags" : item.getTagsList().join(","),
                        "agoraConfig": item.getAgoraConfig(),
                        "agoraConfigJson": $this.toJsonAgoraConfig(item.getAgoraConfig()),
                        "ossConfig": item.getOssConfig(),
                        "ossConfigJson": $this.toJsonOssConfig(item.getOssConfig()),
                        "rongcloudConfig": item.getRongcloudConfig(),
                        "rongcloudConfigJson": $this.toJsonRongcloudConfig(item.getRongcloudConfig()),
                        "greenConfig": item.getGreenConfig(),
                        "greenConfigJson": $this.toJsonGreenConfig(item.getGreenConfig()),
                        "payChannelIds": item.getPayChannelIdsList(),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        handlePayType(arr) {
            let data = []
            getPayType().forEach(item => {
                if(arr.indexOf(item.value)){
                    data.push(item.label)
                }
            })
            return data
        },
        toJsonAgoraConfig(struct){
            let json = {
                "appId": struct.getAppId(),
                "appCert": struct.getAppCert(),
                "clientId": struct.getClientId(),
                "clientSecret": struct.getClientSecret(),
                "captureDuration": struct.getCaptureDuration(),
                "storageVendor": struct.getStorageVendor(),
                "storageRegion": struct.getStorageRegion(),
                "storageEndpoint": struct.getStorageEndpoint(),
                "storageBucket": struct.getStorageBucket(),
                "storageAccessKey": struct.getStorageAccessKey(),
                "storageSecretKey": struct.getStorageSecretKey()
            }
            return json
        },
        toJsonOssConfig(struct){
            let json = {
                    "endpoint": struct.getEndpoint(),
                    "bucket": struct.getBucket(),
                    "keyId": struct.getKeyId(),
                    "keySecret": struct.getKeySecret()
                }
            return json
        },
        toJsonRongcloudConfig(struct){
            let json = {
                "appKey": struct.getAppKey(),
                "appSecret": struct.getAppSecret(),
                "domain": struct.getDomain(),
                "oldAppKey": struct.getOldAppKey(),
                "oldAppSecret": struct.getOldAppSecret(),
                "oldDomain": struct.getOldDomain()
            }
            return json
        },
        toJsonGreenConfig(struct){
            let json = {
                "keyId": struct.getKeyId(),
                "keySecret": struct.getKeySecret()
            }
            return json
        },
        changeArea(val){
            this.appList = getAreaListByAreaId(val, true)
        }
    }
}
</script>

<style lang="less">
.table-classic-wrapper {
    .el-card {
        min-height: 656px;
    }

    .control-btns {
        margin-bottom: 20px;
    }

    .search-form {
        padding-top: 18px;
        margin-bottom: 15px;
        background-color: #f7f8fb;
    }

    .el-table thead {
        font-weight: 600;

        th {
            background-color: #f2f3f7;
        }
    }

    .dialog-form {
        .el-input {
            width: 380px;
        }

        .footer-item {
            margin-top: 50px;
            text-align: right;
        }
    }
    .el-divider--horizontal{
        width: 95%;
        margin-left: 20px;
        margin-right: 20px;
    }
    .search-box {
        margin-left: 0;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px
    }
}
</style>
