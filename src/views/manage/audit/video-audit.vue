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
                <el-col :span="16">
                    <el-form-item label="待审核" size="medium">
                        <el-button @click="onSubmit">待审核资料 (65)</el-button>
                        <el-button @click="onSubmit">待审核视频 (65)</el-button>
                        <el-button @click="onSubmit">待审核举报 (65)</el-button>
                    </el-form-item>
                </el-col>

                <el-form-item label="地区">
                    <el-select v-model="search.area" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
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
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="auchorId" label="主播id" align="center" width="120" />
                <el-table-column prop="nickname" label="主播昵称" align="center" />
                <el-table-column prop="photo" label="主播头像" align="center" width="300">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.photo" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="video" label="视频" align="center" width="300">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.video" title="查看全部"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="lastLoginTime" label="最近登录时间" align="center" width="150" />
                <el-table-column label="操作" align="center" width="200">
                    <template slot-scope="scope">
                        <el-button type="primary" plain size="mini" :disabled="scope.row.forbid" @click="handlePassed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import {getTableList} from '../../../api/api'
import Pagination from '../../../components/Pagination'
import { areaData } from '@/dict/index'

export default {
    name: 'Table',
    components: {Pagination},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                area: undefined,
                currentPage: 1,
                pageSize: 10
            },
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 防止多次连续提交表单
            isSubmit: false,
            areaData
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            console.log(this.search)
            let url = process.env.VUE_APP_JSON_URI + "/anchor.json"
            // 获取数据列表接口
            getTableList(this.search, url).then(res => {
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
            this.search.currentPage = 1
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

}
</style>
