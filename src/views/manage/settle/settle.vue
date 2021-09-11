<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="success" @click="toDialog('createSettleSearch', '')" icon="el-icon-refresh">生成预结算记录</el-button>
                <el-button type="primary" @click="submitSettleRecord" icon="el-icon-check" :loading="submitLoading">确认结算</el-button>
                <el-button type="primary" @click="handleImport">导入数据</el-button>
                <el-button type="primary" @click="exportVisible = true">导出数据</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="日期:">
                    <el-date-picker
                        v-model="search.date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地区">
                    <el-select v-model="search.area" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工会">
                    <el-select v-model="search.app" placeholder="请选择">
                        <el-option v-for="item in apps"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主播ID">
                    <el-input v-model="search.uid" placeholder="用户ID"/>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">筛&nbsp;&nbsp;&nbsp;&nbsp;选</el-button>
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
                <el-table-column prop="uid" label="主播ID" align="center" width="150" />
                <el-table-column prop="nickname" label="主播昵称" align="center" width="200" />
                <el-table-column prop="unionname" label="工会名称" align="center" width="220" />
                <el-table-column prop="balance" label="钻石余额" align="center" width="120"/>
                <el-table-column prop="settle" label="结算钻石" align="center" width="120"/>
                <el-table-column prop="call" label="通话" align="center" width="120"/>
                <el-table-column prop="gift" label="礼物" align="center" width="120"/>
                <el-table-column prop="other" label="其他" align="center" width="120"/>
                <el-table-column prop="reward" label="奖励" align="center" width="120"/>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text">本次剔除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>

            <!-- 充值 弹出栏 -->
            <createSettleSearch ref="createSettleSearch" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import createSettleSearch from './dialog/CreateSettleSearch'
import {getAreaList, getArrName } from "@/utils/common";



export default {
    components: { Pagination, createSettleSearch },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: 1,
                guildId: undefined,
                anchorId: undefined,
                settleAt: undefined,
                status: undefined
            },
            total: 0,
            submitLoading: false,
            areaList: getAreaList()
        }
    },
    created() {
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.settle.getSettleList(this.search(), function (result){
                const list = result.getUsersList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "nickname" : item.getNickname(),
                        "avatar"  : item.getAvatar(),
                        "onlineStatus" : item.getOnlineStatus(),
                        "onlineStatusStr" : getOnlineStatus(item.getOnlineStatus()),
                        "blockStatus" : item.getBlockStatus(),
                        "blockStatusStr" : getBlockStatus(item.getBlockStatus()),
                        "vipEndAt" : new Date(item.getVipEndAt() * 1000).format('yyyy-MM-dd'),
                        "expense" : item.getExpense(),
                        "deposit" : item.getDeposit(),
                        "balance" : item.getBalance(),
                        "createdAt" : new Date(item.getCreatedAt() * 1000).format('yyyy-MM-dd hh:mm:ss'),
                        "osType" : item.getOsType(),
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
        onSearch() {
            this.fetchData()
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        // 生成预结算记录
        createSettleRecord(){

        },
        // 确认结算
        submitSettleRecord(){
            this.submitLoading = true
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
