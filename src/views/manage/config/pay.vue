<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addPay', '')">+ 新增支付参数</el-button>
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
                    <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
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
                <el-table-column prop="typeStr" label="支付方式" align="center" width="120"/>
                <el-table-column prop="appId" label="第三方应用Id" align="center" width="200"/>
                <el-table-column prop="appSecret" label="应用密匙" align="center" :show-overflow-tooltip="true" width="200"/>
                <el-table-column prop="redirectUrl" label="重定向地址" align="center" :show-overflow-tooltip="true" width="200"/>
                <el-table-column prop="callbackUrl" label="回调地址" align="center" :show-overflow-tooltip="true" width="200" />
                <el-table-column prop="extra1" label="字段1" align="center" :show-overflow-tooltip="true" width="200"/>
                <el-table-column prop="extra2" label="字段2" align="center" :show-overflow-tooltip="true" width="200" />
                <el-table-column prop="extra3" label="字段3" align="center" :show-overflow-tooltip="true" width="200" />
                <el-table-column prop="createdAt" label="创建时间" align="center" width="180"/>
                <el-table-column label="操作" align="center" width="180" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addPay',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('delPay',scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 更新 弹出栏 -->
            <addPay ref="addPay" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addPay from './dialog/addPay'
import {getAreaList, getArrName, getPayType, getAppList, getAppName, getCurrentUserAreaId} from "@/utils/dist";
import {toTime} from "@/utils/date";

export default {
    components: { Pagination, imageShow, addPay},
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaList: getAreaList(),
            payTypeList: getPayType(),
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
            this.$service.config.getPayConfigList(this.search, function (result){
                const list = result.getConfigsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "type" : item.getType(),
                        "typeStr" : getPayType(item.getType()),
                        "appId" : item.getAppId(),
                        "appSecret" : item.getAppSecret(),
                        "redirectUrl" : item.getRedirectUrl(),
                        "callbackUrl" : item.getCallbackUrl(),
                        "extra1" : item.getExtra1(),
                        "extra2" : item.getExtra2(),
                        "extra3" : item.getExtra3(),
                        "createdAt" :  toTime(item.getCreatedAt()),
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
