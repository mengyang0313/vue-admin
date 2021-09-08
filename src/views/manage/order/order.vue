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
                        <el-form-item label="用户ID" prop="userId">
                            <el-input v-model="search.userId" placeholder="用户ID"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="订单号" prop="recordId">
                            <el-input v-model="search.recordId" placeholder="订单号"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="交易时间" prop="createdStart">
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
                        <el-form-item label="订单状态" prop="payStatus">
                            <el-select v-model="search.payStatus" placeholder="请选择">
                                <el-option v-for="item in payStatus"
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
                            <el-button @click="onSearch" type="primary" size="small" style="width: 150px;">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
                            <el-button @click="resetForm" size="small" style="width: 150px;margin-left: 250px">重&nbsp;&nbsp;&nbsp;&nbsp;置</el-button>
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
                <el-table-column prop="id" label="订单ID" align="center" width="150" />
                <el-table-column prop="payOrderId" label="渠道订单号" align="center" width="150" />
                <el-table-column prop="appId" label="来源APP" align="center" width="80">
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
                <el-table-column prop="userId" label="用户ID" align="center" width="120"/>
                <el-table-column prop="areaId" label="地区" align="center" width="80"/>
                <el-table-column prop="country" label="国家" align="center" width="80"/>
                <el-table-column prop="commodityId" label="商品名称" align="center" width="220"/>
                <el-table-column prop="payPrice" label="本地价格" align="center" width="80"/>
                <el-table-column prop="usdPrice" label="美元价格" align="center" width="80"/>
                <el-table-column prop="payStatus" label="支付状态" align="center" width="80">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.payStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="payType" label="支付渠道" align="center" width="100"/>
                <el-table-column prop="payChannel" label="支付小渠道" align="center" width="100"/>
                <el-table-column prop="paidAt" label="支付时间" align="center" width="100"/>
                <el-table-column prop="createdAt" label="创建时间" align="center" width="170"/>
                <el-table-column label="操作" align="center" width="170">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toMakeOrder('dataInfo', scope.row)">补单</el-button>
                        <el-button type="text" @click="toRetreat(scope.$index, scope.row)">退单</el-button>
                    </template>
                </el-table-column>
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
import { apps, orderStatus } from '@/dict/index'
import {getAreaList, getPayStatus, getAppList, getArrName, getAppName} from "@/utils/common";

export default {
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                userId: undefined,
                recordId: undefined,
                createdStart: undefined,
                createdEnd: undefined,
                appId: undefined,
                areaId: 1,
                payStatus: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            areaData: getAreaList(),
            appList: getAppList(),
            payStatus: getPayStatus()
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
            this.$service.order.getPayList(this.handleParam(), function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "payOrderId" : item.getPayOrderId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "userId" : item.getUserId(),
                        "areaId" : getArrName($this.areaData, item.getAreaId()),
                        "country" : item.getCountry(),
                        "commodityId" : item.getCommodityId(),
                        "payPrice" : item.getPayPrice(),
                        "usdPrice" : item.getUsdPrice(),
                        "payStatus" : getPayStatus(item.getPayStatus()),
                        "payType" : item.getPayType(),
                        "payChannel" : item.getPayChannel(),
                        "paidAt" : item.getPaidAt(),
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss')
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
