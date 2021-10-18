<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="用户Id" prop="userId">
                    <el-input v-model="search.userId" placeholder="用户Id"/>
                </el-form-item>
                <el-form-item label="用户名" prop="nickname">
                    <el-input v-model="search.nickname" placeholder="用户名"/>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" placeholder="请选择" :disabled="authAreaId !== 0">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="padding-left: 20px">
                    <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                </el-form-item>
                <el-collapse accordion @change="isCollapse = !isCollapse">
                    <el-collapse-item>
                        <template slot="title">
                            {{isCollapse ? '展开' : '收起'}}
                        </template>
                        <div>
                            <el-form-item label="VIP" prop="vipOnly">
                                <el-select v-model="search.vipOnly" placeholder="请选择">
                                    <el-option v-for="item in boolDict"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="是否付费" prop="depositOnly">
                                <el-select v-model="search.depositOnly" placeholder="请选择">
                                    <el-option v-for="item in boolDict"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="钻石余额" prop="minBalance">
                                <el-input placeholder="请输入余额" v-model="search.minBalance">
                                    <template slot="prepend">大于</template>
                                </el-input>
                            </el-form-item>

                            <el-form-item label="注册时间" prop="createdStart">
                                <el-date-picker
                                    v-model="search.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
<!--                                <el-col :span="11">-->
<!--                                    <el-date-picker type="date" placeholder="开始时间" v-model="search.createdStart" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                                </el-col>-->
<!--                                <el-col class="line" :span="1" align="center">-</el-col>-->
<!--                                <el-col :span="10">-->
<!--                                    <el-date-picker type="date" placeholder="结束时间" v-model="search.createdEnd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                                </el-col>-->
                            </el-form-item>
                        </div>
                    </el-collapse-item>
                </el-collapse>
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
                <el-table-column prop="areaStr" label="区域" align="center" width="100" />
                <el-table-column prop="appStr" label="APP" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                <i class="icon-android-fill"></i>
                            </span>
                            <span v-else>
                                <i class="icon-pingguo"></i>
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="用户ID" align="center" width="120" />
                <el-table-column prop="nickname" label="用户名" align="center" width="200" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="genderStr" label="性别" align="center" width="100" />
                <el-table-column prop="fansCount" label="粉丝数量" align="center" width="100" />
                <el-table-column prop="osTypeStr" label="系统类型" align="center" width="120" />
                <el-table-column prop="onlineStatus" label="在线状态" align="center" width="100">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium" v-if="scope.row.onlineStatusStr!=''">{{ scope.row.onlineStatusStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="blockStatusStr" label="封禁状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag @click="toDialog('accountStatusList',scope.row)" v-if="scope.row.blockStatusStr!=''" size="medium">{{ scope.row.blockStatusStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="signature" label="签名" :show-overflow-tooltip="true" align="center" width="120" />
                <el-table-column prop="occupation" label="职业" align="center" width="120" />
                <el-table-column prop="vipEndAt" label="vip到期时间" align="center" width="180"/>
                <el-table-column prop="expense" label="消费金额" align="center" width="120"/>
                <el-table-column prop="deposit" label="充值金额" align="center" width="120"/>
                <el-table-column prop="balance" label="账户余额" align="center" width="120" />
                <el-table-column prop="messageUsed" label="已发送消息数量" align="center" width="120" />
                <el-table-column prop="checkinDays" label="已签到天数" align="center" width="120" />
                <el-table-column prop="checkinAt" label="上次签到时间" align="center" width="150"/>
                <el-table-column prop="createdAt" label="注册日期" align="center" width="150"/>
                <el-table-column prop="appVersion" label="app版本" align="center" width="120" />
                <el-table-column prop="onlineIp" label="ip地址" align="center" width="140"/>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <span v-if="scope.row.blockStatus !== 3 && scope.row.blockStatus !== 4" style="padding-right:10px;padding-left:10px;">
                            <el-button type="text" @click="toDialog('block',scope.row)">封禁</el-button>
                        </span>
                        <span v-else>
                            <el-button type="text" @click="unblock(scope.row.id)" style="padding-right:10px;padding-left:10px;">解封</el-button>
                        </span>
                        <el-button type="text" @click="toDialog('recharge',scope.row)">充值</el-button>
                        <el-button type="text" @click="toDialog('updateUser',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('multiAccount', scope.row)">多帐号查询</el-button>
                        <el-button type="text" @click="deleteUser(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 封禁设备 弹出栏 -->
            <block ref="block" @fetchData="fetchData"/>

            <!-- 多帐号查询 弹出栏 -->
            <multiAccount ref="multiAccount"/>

            <!-- 充值 弹出栏 -->
            <recharge ref="recharge" @fetchData="fetchData"/>

            <!-- 更新 弹出栏 -->
            <updateUser ref="updateUser" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import block from './dialog/block'
import multiAccount from './dialog/multi-account'
import recharge from './dialog/recharge'
import updateUser from './dialog/updateUser'
import {
    getAreaList,
    getArrName,
    getOsType,
    getBool,
    getAppList,
    getOnlineStatus,
    getBlockStatus,
    getAppName,
    getGenderType,
    getCurrentUserAreaId, getAppListByAreaId
} from "@/utils/dist";
import {toTime} from "@/utils/date";

export default {
    components: { Pagination, imageShow, block, multiAccount, recharge, updateUser},
    data() {
        return {
            listLoading: true,
            search: {
                userId: undefined,
                nickname: undefined,
                date: [],
                vipOnly: undefined,
                depositOnly: undefined,
                minBalance: undefined,
                areaId: getCurrentUserAreaId(),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaData: getAreaList(true),
            boolDict: getBool()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.user.getUserList(this.handleParam(), function (result){
                const list = result.getUsersList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "osType" : item.getOsType(),
                        "osTypeStr" : getOsType(item.getOsType()),
                        "country" : item.getCountry(),
                        "lang" : item.getLang(),
                        "onlineStatus" : item.getOnlineStatus(),
                        "onlineStatusStr" : getOnlineStatus(item.getOnlineStatus()),
                        "blockStatus" : item.getBlockStatus(),
                        "blockStatusStr" : getBlockStatus(item.getBlockStatus()),
                        "balance": item.getBalance(),
                        "lockedBalance": item.getLockedBalance(),
                        "expense" : item.getExpense(),
                        "reward": item.getReward(),
                        "deposit": item.getDeposit(),
                        "vipStartAt": item.getVipStartAt(),
                        "vipEndAt": toTime(item.getVipEndAt()),
                        "messageQuota": item.getMessageQuota(),
                        "messageUsed": item.getMessageUsed(),
                        "checkinDays": item.getCheckinDays(),
                        "checkinAt": toTime(item.getCheckinAt()),
                        "fansCount": item.getFansCount(),
                        "nickname" : item.getNickname(),
                        "gender": item.getGender(),
                        "genderStr": getGenderType(item.getGender()),
                        "birthday": toTime(item.getBirthday()),
                        "avatar": item.getAvatar(),
                        "signature": item.getSignature(),
                        "occupation": item.getOccupation(),
                        "offlineAt": toTime(item.getOfflineAt()),
                        "createdAt" : toTime(item.getCreatedAt()),
                        "appVersion" : item.getVersion(),
                        "onlineIp" : item.getOnlineIp(),
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        handleParam(){
            let param = this.search;
            if (param.date.length > 0){
                param.createdStartUint = this.search.date[0].getTime() / 1000
                param.createdEndUint = this.search.date[1].getTime() / 1000
            }
            return param
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
        unblock(entityId){
            let param = {
                entityId : entityId,
                entityType : 1
            }
            const $this = this
            this.$service.anchor.unblock(param, function (result){
                if (result) {
                    $this.$message.success("解封成功!")
                    $this.fetchData()
                } else {
                    $this.$message.error("解封失败!")
                }
            })
        },
        deleteUser(row){
            this.$confirm('是否删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const $this = this
                let param = {
                    "userId" : row.id
                }
                this.$service.user.deleteUser(param, function (result){
                    result ? $this.$message.success("删除成功!") : $this.$message.error("删除失败 !")
                    $this.fetchData()
                });
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        }
    }
}
</script>

<style lang="less">
.el-collapse-item__header {
    border-top: 0px solid #eaeefb;
    height: 34px;
    box-sizing: border-box;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-top: -75px;
    color: #277cda;
    z-index: 999;
    float: right;
}
.el-collapse-item__wrap{
    background-color: #f7f8fb;
}
.el-collapse{
    border-top: 0px solid #EBEEF5;
    border-bottom: 0px solid #EBEEF5;
}
.el-collapse-item__content {
    padding-bottom: 5px;
}
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
