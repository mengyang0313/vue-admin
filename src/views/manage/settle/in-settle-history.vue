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
                <template>
                    <el-row>
                        <el-col :span="16">
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
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="6">
                            <el-form-item label="结算周期:">
                                <el-date-picker v-model="listQuery.settleDate" type="date" placeholder="选择日期"
                                                style="width: 100%;"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="工会">
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
                            <el-form-item label="主播ID">
                                <el-input v-model="listQuery.uid" placeholder="主播ID"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">筛&nbsp;&nbsp;&nbsp;&nbsp;选</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </template>
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
                <el-table-column prop="nickname" label="主播昵称" align="center" width="150" />
                <el-table-column prop="unionname" label="工会名称" align="center" width="150" />
                <el-table-column prop="balance" label="钻石余额" align="center" width="120"/>
                <el-table-column prop="settle" label="结算钻石" align="center" width="120"/>
                <el-table-column prop="call" label="通话" align="center" width="80"/>
                <el-table-column prop="gift" label="礼物" align="center" width="280"/>
                <el-table-column prop="other" label="其他" align="center" width="80"/>
                <el-table-column prop="noStandard" label="不达标通话" align="center" width="100"/>
                <el-table-column prop="standard" label="达标通话" align="center" width="80"/>
                <el-table-column prop="connectRate" label="有效接通率" align="center" width="100"/>
                <el-table-column prop="callIncome" label="通话收入" align="center" width="80"/>
                <el-table-column prop="giftIncome" label="礼物收入" align="center" width="80"/>
                <el-table-column prop="otherIncome" label="其他收入" align="center" width="80"/>
                <el-table-column prop="reward" label="奖励" align="center" width="80"/>
                <el-table-column prop="connectRateReward" label="接通率奖励" align="center" width="100"/>
                <el-table-column prop="punishment" label="惩罚" align="center" />
                <el-table-column prop="totalIncome" label="总收入" align="center" />
                <el-table-column prop="account" label="账户名" align="center" />
                <el-table-column prop="openAccountBank" label="开户行" align="center" />
                <el-table-column prop="accountBank" label="银行帐号" align="center" />
                <el-table-column prop="email" label="邮箱" align="center" />
                <el-table-column prop="createTime" label="注册日期" align="center" />
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
import excel from "@/utils/excel";

export default {
    components: { Pagination, apps },
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
            exportVisible: false,
            importVisible: false,
            areaData,
            apps
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/settle.json"
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
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        initQuery() {
            return {
                uid: undefined,
                app: undefined,
                settleDate: undefined,
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

