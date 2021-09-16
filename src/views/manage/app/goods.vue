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
                <el-form-item label="地区" prop="areaId">
                    <el-select v-model="search.areaId" placeholder="请选择">
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
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否启用">
                    <el-switch v-model="search.enable"/>
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
                <el-table-column prop="id" label="用户ID" align="center" width="120" />
                <el-table-column prop="areaStr" label="地区" align="center" width="120" />
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
                <el-table-column prop="nickname" label="用户名" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                        <!--                        <imageShow :data="[scope.row.avatar]" :max-show="1"/>-->
                    </template>
                </el-table-column>
                <el-table-column prop="onlineStatus" label="在线状态" align="center" width="120">
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
                <el-table-column prop="vipEndAt" label="vip到期时间" align="center" width="120"/>
                <el-table-column prop="expense" label="累计送礼" align="center" width="150"/>
                <el-table-column prop="deposit" label="累计充值" align="center" width="150"/>
                <el-table-column prop="balance" label="账户余额" align="center" width="250" />
                <el-table-column prop="createdAt" label="注册日期" align="center" width="150"/>
                <el-table-column prop="osType" label="手机机型" align="center" width="120" />
                <el-table-column prop="appVersion" label="app版本" align="center" width="120" />
                <el-table-column prop="onlineIp" label="ip地址" align="center" width="180">
                    <template slot-scope="scope">
                        <a @click="toDialog('ipAddress', scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
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
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 封禁设备 弹出栏 -->
            <block ref="block"/>

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
import {getAreaList, getAppList} from "@/utils/common";

export default {
    components: { Pagination, imageShow, block, multiAccount, recharge, updateUser},
    data() {
        return {
            listLoading: true,
            search: {
                appId: undefined,
                areaId: undefined,
                enable: true,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            isCollapse: true,
            areaList: getAreaList(),
            appList: getAppList()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.user.getUserList(this.search, function (result){
                const list = result.getUsersList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),

                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
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
