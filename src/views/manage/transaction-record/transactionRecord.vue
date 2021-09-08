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
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="地区" prop="areaId">
                            <el-select v-model="search.areaId" placeholder="请选择">
                                <el-option v-for="item in areaData"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="APP" prop="appId">
                            <el-select v-model="search.appId" placeholder="请选择">
                                <el-option v-for="item in appList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                    <span style="float: left">{{ item.label }}</span>
                                    <span v-if="item.os === 1">
                                        <i class="icon-android-fill" style="float: right"></i>
                                    </span>
                                    <span v-else>
                                        <i class="icon-pingguo" style="float: right"></i>
                                    </span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="创建时间" prop="createdStart">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="search.createdStart" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="search.createdEnd" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="交易者id">
                            <el-input v-model="search.traderId" placeholder="交易者id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="交易者类型">
                            <el-select v-model="search.traderType" placeholder="请选择">
                                <el-option v-for="item in traderTypeList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="交易类型">
                            <el-select v-model="search.sourceType" placeholder="请选择">
                                <el-option v-for="item in sourceTypeList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="search-box">
                        <el-form-item>
                            <el-button @click="onSearch('searchForm')" type="primary" size="small" style="width: 150px;">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
                            <el-button @click="resetForm('searchForm')" size="small" style="width: 150px;margin-left: 250px">重&nbsp;&nbsp;&nbsp;&nbsp;置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
                <el-table-column prop="id" label="交易ID" align="center" width="220" />
                <el-table-column prop="app" label="来源App" align="center" width="120" >
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
                <el-table-column prop="traderId" label="交易者id" align="center" width="120" />
                <el-table-column prop="traderType" label="交易者类型" align="center" width="120" />
                <el-table-column prop="sourceType" label="交易类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.sourceType }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="交易金额" align="center" width="220"/>
                <el-table-column prop="balance" label="交易后余额" align="center"/>
                <el-table-column prop="desc" label="描述" align="center"/>
                <el-table-column prop="createdAt" label="交易时间" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import "@/assets/icon/iconfont.css"
import Pagination from '../../../components/Pagination'
import {getAppList, getAreaList, getArrName, getAppName, getSourceType, getTraderType} from "@/utils/common";

export default {
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: undefined,
                appId: undefined,
                traderType: 0,
                traderId: undefined,
                sourceType: 0,
                createdStart: undefined,
                createdEnd: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreaList(),
            appList: getAppList(),
            traderTypeList : getTraderType(),
            sourceTypeList : getSourceType(),
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.transaction.getTransactionList(this.handleParam(), function (result){
                const list = result.getTransactionsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "traderType" : getTraderType(item.getTraderType()),
                        "traderId" : item.getTraderId(),
                        "sourceType" : getSourceType(item.getSourceType()),
                        "amount" : item.getAmount(),
                        "balance" : item.getBalance(),
                        "desc" : item.getDesc(),
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss')
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        handleParam(){
            let param = this.search;
            if (typeof(this.search.createdStart) != "undefined"){
                param.createdStartUint = this.search.createdStart.getTime() / 1000
            }
            if (typeof(this.search.createdEnd) != "undefined"){
                param.createdEndUint = this.search.createdEnd.getTime() / 1000
            }
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
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
