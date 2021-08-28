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
                        <el-col :span="4">
                            <el-form-item label="当前待结算日期:" label-width="320">
                                2021-07-20
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
                                <el-input v-model="listQuery.uid" placeholder="用户ID"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
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
