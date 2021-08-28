<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="listQuery"
                label-width="90px"
                class="search-form"
            >
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="用户ID">
                            <el-input v-model="listQuery.uid" placeholder="用户ID"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="订单号">
                            <el-input v-model="listQuery.orderId" placeholder="订单号"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="交易时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="listQuery.startTime" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="listQuery.endTime" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="APP">
                            <el-select v-model="listQuery.app" placeholder="请选择">
                                <el-option v-for="item in apps"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="地区">
                            <el-select v-model="listQuery.area" placeholder="请选择">
                                <el-option v-for="item in areaData"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="订单状态">
                            <el-select v-model="listQuery.orderStatus" placeholder="请选择">
                                <el-option v-for="item in orderStatus"
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
                <el-table-column prop="orderId" label="订单ID" align="center" width="150" />
                <el-table-column prop="orderId" label="渠道订单号" align="center" width="150" />
                <el-table-column prop="sourceApp" label="来源APP" align="center" width="80" />
                <el-table-column prop="uid" label="用户ID" align="center" width="120"/>
                <el-table-column prop="goodsName" label="商品名称" align="center" width="220"/>
                <el-table-column prop="area" label="地区" align="center" width="80"/>
                <el-table-column prop="price" label="本地价格" align="center" width="80"/>
                <el-table-column prop="usprice" label="美元价格" align="center" width="80"/>
                <el-table-column prop="status" label="支付状态" align="center" width="80">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.status }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="channel" label="支付渠道" align="center" width="100"/>
                <el-table-column prop="minChannel" label="支付小渠道" align="center" width="100"/>
                <el-table-column prop="payTime" label="支付时长" align="center" width="100"/>
                <el-table-column prop="createTime" label="创建时间" align="center" width="170"/>
                <el-table-column label="操作" align="center" width="170">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toMakeOrder('dataInfo', scope.row)">补单</el-button>
                        <el-button type="text" @click="toRetreat(scope.$index, scope.row)">退单</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import { areaData, apps, orderStatus } from '@/dict/index'

export default {
    components: { Pagination, apps, orderStatus },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: this.initQuery(),
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            areaData,
            apps,
            orderStatus
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/order.json"
            // 获取数据列表接口
            getTableList(this.listQuery, url).then(res => {
                const data = res.data
                if (data.code === 0) {
                    this.total = data.data.total
                    this.tableData = data.data.list
                    this.listLoading = false
                }
            }).catch(() => {
                this.listLoading = false
            })
        },
        // 查询数据
        onSearch() {
            this.listQuery.currentPage = 1
            this.fetchData()
        },
        toMakeOrder() {
        },
        toRetreat() {
        },
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        initQuery() {
            return {
                uid: undefined,
                orderId: undefined,
                startTime: undefined,
                endTime: undefined,
                app: undefined,
                area: undefined,
                orderStatus: undefined,
                currentPage: 1,
                pageSize: 10
            }
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
