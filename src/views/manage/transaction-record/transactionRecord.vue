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
                <el-form-item label="交易者id">
                    <el-input v-model="search.traderId" type="number" placeholder="交易者id"/>
                </el-form-item>
                <el-form-item label="交易者类型">
                    <el-select v-model="search.traderType" placeholder="请选择">
                        <el-option v-for="item in traderTypeList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="交易类型">
                    <el-select v-model="search.sourceType" placeholder="请选择">
                        <el-option v-for="item in sourceTypeList"
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
                            <el-form-item label="区域" prop="areaId">
                                <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                                    <el-option v-for="item in areaData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
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
                                        <span v-else-if="item.os === 2">
                                            <i class="icon-pingguo" style="float: right"></i>
                                        </span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="创建时间" prop="createdStart">
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
                <el-table-column prop="id" label="交易ID" align="center" width="120" />
                <el-table-column prop="app" label="来源App" align="center" width="120" >
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
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>
        </el-card>
    </div>
</template>

<script>
import "@/assets/icon/iconfont.css"
import Pagination from '../../../components/Pagination'
import {
    getAreaList,
    getAppName,
    getSourceType,
    getTraderType,
    getAppListByAreaId, getCurrentUserAreaId
} from "@/utils/dist";
import {endUnix, startUnix, toTime} from "@/utils/util";

export default {
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: getCurrentUserAreaId(),
                appId: undefined,
                traderType: 0,
                traderId: undefined,
                sourceType: 0,
                date: [],
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaData: getAreaList(true),
            appList: [],
            traderTypeList : getTraderType(),
            sourceTypeList : getSourceType(),
        }
    },
    created() {
        this.changeArea(this.search.areaId)
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
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "traderType" : getTraderType(item.getTraderType()),
                        "traderId" : item.getTraderId(),
                        "sourceType" : getSourceType(item.getSourceType()),
                        "amount" : item.getAmount(),
                        "balance" : item.getBalance(),
                        "desc" : item.getDesc(),
                        "createdAt" : toTime(item.getCreatedAt())
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
            if (param.date.length > 0){
                param.createdStartUint = startUnix(this.search.date[0])
                param.createdEndUint = endUnix(this.search.date[1])
            }
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        changeArea(val){
            this.appList = getAppListByAreaId(val, true, true)
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
