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
                            <el-form-item label="待审核" size="medium">
                                <el-button @click="onSubmit">待审核资料 (65)</el-button>
                                <el-button @click="onSubmit">待审核视频 (65)</el-button>
                                <el-button @click="onSubmit">待审核举报 (65)</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
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
                        <el-col :span="8">
                            <el-form-item label="举报方">
                                <el-select v-model="listQuery.reportUserType" placeholder="请选择">
                                    <el-option v-for="item in reportUserTypeData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="举报场景">
                                <el-select v-model="listQuery.scenes" placeholder="请选择">
                                    <el-option v-for="item in reportScenesData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="审核状态">
                                <el-select v-model="listQuery.status" placeholder="请选择">
                                    <el-option v-for="item in reportAuditStatusData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="举报方Id">
                                <el-input v-model="listQuery.reportUid" placeholder="举报方Id"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="被举报方Id">
                                <el-input v-model="listQuery.reportUid" placeholder="被举报方Id"/>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" class="search-box">
                            <el-form-item>
                                <el-button type="primary" size="small" style="width: 150px;">查询</el-button>
                                <el-button @click="resetForm('searchForm')" size="small" style="width: 150px;margin-left: 250px">重置</el-button>
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
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="reportId" label="举报Id" align="center" width="120" />
                <el-table-column prop="area" label="地区" align="center" width="120" />
                <el-table-column prop="reportUid" label="举报方Id" align="center" width="120"/>
                <el-table-column prop="reason" label="举报原因" align="center" width="200"/>
                <el-table-column prop="scenes" label="举报场景" align="center" width="100"/>
                <el-table-column prop="status" label="审核状态" align="center" width="100"/>
                <el-table-column prop="time" label="举报时间" align="center" width="150"/>
                <el-table-column prop="reportId" label="对应聊天" align="center" width="150">
                    <template slot-scope="scope">
                        <a @click="hisVideo(scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column prop="reportId" label="对应视频" align="center" width="150">
                    <template slot-scope="scope">
                        <a @click="hisVideo(scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="200">
                    <template slot-scope="scope">
                        <el-button type="primary" plain size="mini" :disabled="scope.row.forbid" @click="handlePassed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>
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
import {getTableList} from '../../../api/api'
import Pagination from '../../../components/Pagination'
import { areaData, reportUserTypeData, reportScenesData, reportAuditStatusData } from '@/dict/index'

export default {
    name: 'Table',
    components: {Pagination},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: this.initQuery(),
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 防止多次连续提交表单
            isSubmit: false,
            areaData,
            reportUserTypeData,
            reportScenesData
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            console.log(this.listQuery)
            let url = process.env.VUE_APP_JSON_URI + "/report.json"
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
        onSubmit() {
            this.listQuery.currentPage = 1
            this.fetchData()
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 通过
        handlePassed(index, row) {
            console.log(index, row)
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
        // 列表中婚姻状况栏，状态值改变时，调用
        selectChange(row) {
            // 此处添加后台接口，成功后调用fetchData方法更新列表
        },
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        initQuery() {
            return {
                status: undefined,
                scenes: undefined,
                reportUserType: undefined,
                reportUid: undefined,
                currentPage: 1,
                pageSize: 10
            }
        },
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
