<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">

            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('auth', '')">+ 认证主播</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="主播Id" prop="anchorId">
                    <el-input v-model="search.anchorId" placeholder="主播Id"/>
                </el-form-item>
                <el-form-item label="工会" prop="guildId">
                    <el-select v-model="search.guildId" filterable placeholder="请选择">
                        <el-option v-for="item in guildList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" :disabled="authAreaId !== 0"  @change="changeArea" placeholder="请选择">
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
                            <el-form-item label="审核状态" prop="reviewStatus">
                                <el-select v-model="search.reviewStatus" placeholder="请选择">
                                    <el-option v-for="item in reviewStatus"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="封禁状态" prop="blockStatus">
                                <el-select v-model="search.blockStatus" placeholder="请选择">
                                    <el-option v-for="item in blockStatusList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="在线状态" prop="onlineStatus">
                                <el-select v-model="search.onlineStatus" placeholder="请选择">
                                    <el-option v-for="item in onlineStatus"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
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
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="id" label="主播id" align="center" width="100">
                    <template slot-scope="scope">
                        <el-button type="text">
                            <router-link :to="{path:'./anchorInfo',query: {id: scope.row.id}}"> {{ scope.row.id }}</router-link>
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="app" label="App" align="center" width="120">
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
                <el-table-column prop="areaName" label="区域" align="center" width="120" />
                <el-table-column prop="country" label="国家" align="center" width="120" />
                <el-table-column prop="guildName" label="工会" align="center" width="120" />
                <el-table-column prop="level" label="主播等级" align="center" width="120">
                    <template slot-scope="scope">
                        <el-tag size="medium" v-if="scope.row.levelStr!=''">{{ scope.row.levelStr }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="fansCount" label="粉丝数量" align="center" width="120" />
                <el-table-column prop="onlineStatusStr" label="在线状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium" v-if="scope.row.onlineStatusStr!=''">{{ scope.row.onlineStatusStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="reviewStatusStr" label="账户状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag @click="toDialog('reviewStatus',scope.row)" v-if="scope.row.reviewStatusStr!=''" size="medium">{{ scope.row.reviewStatusStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="blockStatusStr" label="封禁状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag @click="toDialog('blockStatus',scope.row)" v-if="scope.row.blockStatusStr!=''" size="medium">{{ scope.row.blockStatusStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="balance" label="余额" align="center" width="120" />
                <el-table-column prop="settled" label="已结算" align="center" width="120" />
                <el-table-column prop="callIncome" label="通话收益" align="center" width="120" />
                <el-table-column prop="giftIncome" label="礼物收益" align="center" width="120" />
                <el-table-column prop="commissionIncome" label="佣金收益" align="center" width="120" />
                <el-table-column prop="adjustIncome" label="奖惩" align="center" width="120" />
                <el-table-column prop="price" label="单价" align="center" width="120" />
                <el-table-column prop="updatedAt" label="最近登录时间" align="center" width="180" />
                <el-table-column prop="createdAt" label="注册时间" align="center" width="180" />
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('updateInfo',scope.row)">更新</el-button>
                        <span v-if="scope.row.blockStatus !== 3 && scope.row.blockStatus !== 4" style="padding-right:10px;padding-left:10px;">
                            <el-button type="text" @click="toDialog('block',scope.row)">封禁</el-button>
                        </span>
                        <span v-else>
                            <el-button type="text" @click="unblock(scope.row.id)" style="padding-right:10px;padding-left:10px;">解封</el-button>
                        </span>
                        <el-button type="text" @click="toDialog('auth',scope.row)">认证主播</el-button>
                        <el-button type="text" @click="toDialog('incentive', scope.row)">更新奖惩</el-button><br/>
                        <el-button type="text" @click="toDialog('multiAccount', scope.row)">多帐号</el-button>
                        <el-button type="text" @click="toDialog('migrate', scope.row)">帐号迁移</el-button>
                        <el-button type="text" @click="toDialog('merge', scope.row)">帐号合并</el-button>

                        <span v-if="scope.row.reviewStatus === 5" style="padding-right:10px;padding-left:10px;">
                            <el-button type="text" @click="stopAccount(scope.row)">停用</el-button>
                        </span>
                        <span v-else-if="scope.row.reviewStatus === 6">
                            <el-button type="text" @click="recoveryAccount(scope.row)" style="padding-right:10px;padding-left:10px;">恢复</el-button>
                        </span>

                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData()" @changePageSize="changePageSize($event)"/>

            <!-- 视频记录 弹出栏 -->
            <videoList ref="videoList" @fetchData="fetchData"/>

            <!-- 账户状态 弹出栏 -->
            <accountStatusList ref="accountStatusList" @fetchData="fetchData"/>

            <!-- 资料管理 弹出栏 -->
            <dataList ref="dataList" @fetchData="fetchData"/>

            <!-- 银行信息 弹出栏 -->
            <bankInfo ref="bankInfo" @fetchData="fetchData"/>

            <!-- 更新信息 弹出栏 -->
            <updateInfo ref="updateInfo" @fetchData="fetchData"/>

            <!-- 封禁设备 弹出栏 -->
            <block ref="block" @fetchData="fetchData"/>

            <!-- 认证主播 弹出栏 -->
            <auth ref="auth" @fetchData="fetchData"/>

            <!-- 更新奖惩 弹出栏 -->
            <incentive ref="incentive" @fetchData="fetchData"/>

            <!-- 多帐号查询 弹出栏 -->
            <multiAccount ref="multiAccount" @fetchData="fetchData"/>

            <!-- 帐号迁移 弹出栏 -->
            <migrate ref="migrate" @fetchData="fetchData"/>

            <!-- 帐号合并 弹出栏 -->
            <merge ref="merge" @fetchData="fetchData"/>

            <!-- 主播信息 -->
            <anchorInfo ref="anchorInfo" @fetchData="fetchData"/>
            <router-view></router-view>
        </el-card>
    </div>
</template>

<script>
import "@/assets/icon/iconfont.css"
import Pagination from '../../../components/Pagination'
import {
    getAreaList,
    getAnchorLevel,
    getOnlineStatus,
    getReviewStatus,
    getGuildList, getArrName, getAppList, getBlockStatus, getAppName, getCurrentUserAreaId, getGuildListByAreaId
} from "@/utils/dist";
import videoList from './dialog/video-list'
import accountStatusList from './dialog/account-status-list'
import dataList from './dialog/dataInfo'
import block from './dialog/block'
import auth from './dialog/auth'
import bankInfo from './dialog/bank-info'
import updateInfo from './dialog/update-info'
import incentive from './dialog/incentive'
import multiAccount from './dialog/multi-account'
import migrate from './dialog/migrate'
import merge from './dialog/merge'
import Child from './anchor-info';
import {endUnix, toTime} from "@/utils/date";


export default {
    components: { Pagination, Child, videoList, accountStatusList, dataList, block, auth, bankInfo, updateInfo, incentive, multiAccount, migrate, merge},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                anchorId: undefined,
                areaId: undefined,
                guildId: undefined,
                blockStatus: undefined,
                onlineStatus: 0,
                reviewStatus: 0,
                date: [],
                page : {
                    currentPage: 1,
                    pageSize: 10
                },
                pageSize: 10
            },
            // 数据总条数
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            isCollapse: true,
            areaData: getAreaList(true),
            guildList: [],
            anchorLevel: getAnchorLevel(),
            reviewStatus: getReviewStatus(),
            onlineStatus: getOnlineStatus(),
            blockStatusList : getBlockStatus(),
            appList: getAppList(true),
            appListAll: getAppList(false)
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaData[0].value : this.authAreaId
        this.changeArea(this.search.areaId)
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.anchor.getAnchorList(this.handleParam(), function (result){
                const list = result.getAnchorsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appListAll, item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaName" : getArrName($this.areaData, item.getAreaId()),
                        "country" : item.getCountry(),
                        "guildId" : item.getGuildId(),
                        "guildName" : getArrName($this.guildList, item.getGuildId()),
                        "onlineStatus" : item.getOnlineStatus(),
                        "onlineStatusStr" : getOnlineStatus(item.getOnlineStatus()),
                        "reviewStatus" : item.getReviewStatus(),
                        "reviewStatusStr" : getReviewStatus(item.getReviewStatus()),
                        "blockStatus" : item.getBlockStatus(),
                        "blockStatusStr" : getBlockStatus(item.getBlockStatus()),
                        "profileCount" : item.getProfileCount(),
                        "activeCount" : item.getActiveCount(),
                        "level" : item.getLevel(),
                        "levelStr" : getAnchorLevel(item.getLevel()),
                        "fansCount" : item.getFansCount(),
                        "balance" : item.getBalance(),
                        "settled" : item.getSettled(),
                        "callIncome" : item.getCallIncome(),
                        "giftIncome" : item.getGiftIncome(),
                        "commissionIncome" : item.getCommissionIncome(),
                        "price" : item.getPrice(),
                        "adjustIncome" : item.getAdjustIncome(),
                        "updatedAt" : toTime(item.getUpdatedAt()),
                        "createdAt" : toTime(item.getCreatedAt()),
                        "bankName" : item.getBankName(),
                        "accountName" : item.getAccountName(),
                        "bankAccount" : item.getBankAccount(),
                        "struct" : item
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
                param.createdEndUint = endUnix(this.search.date[1])
            }
            return param
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        onSearch() {
            this.search.currentPage = 1
            this.fetchData()
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
                entityType : 2
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
        stopAccount(row){
            let param = {
                id : row.id,
                reviewStatus : 6,
                struct: row.struct
            }
            const $this = this
            this.$service.anchor.updateAnchorBasic(param, function (result){
                if (result) {
                    $this.$message.success("停用成功!")
                    $this.fetchData()
                } else {
                    $this.$message.error("停用失败!")
                }
            })
        },
        recoveryAccount(row){
            let param = {
                id : row.id,
                reviewStatus : 6,
                struct: row.struct
            }
            const $this = this
            this.$service.anchor.updateAnchorBasic(param, function (result){
                if (result) {
                    $this.$message.success("恢复成功!")
                    $this.fetchData()
                } else {
                    $this.$message.error("恢复失败!")
                }
            })
        },
        handlePassed(index, row) {
            this.$confirm('是否通过?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '通过!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        // 拒绝
        handleRefuse(index, row) {
            console.log(index, row)
            this.$confirm('是否拒绝?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已拒绝!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        changeArea(val){
            this.guildList = getGuildListByAreaId(val, true)
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
    margin-top: -130px;
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
