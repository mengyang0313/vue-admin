<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addWords', '')">+ 新增话术</el-button>
                <el-button type="danger" @click="batchDelete">批量删除</el-button>
            </div>
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
                        <el-col :span="6">
                            <el-form-item label="状态" >
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
                            <el-form-item label="场景标签">
                                <el-select v-model="listQuery.tags" placeholder="请选择">
                                    <el-option v-for="item in areaData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">筛选</el-button>
                                <el-button type="danger" @click="onSubmit">重置</el-button>
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
                <el-table-column prop="wordsId" label="话术ID" align="center" width="150"/>
                <el-table-column prop="area" label="区域" align="center" width="150">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.area }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="tags" label="标签" align="center" width="150">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.tags }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status"/>
                    </template>
                </el-table-column>
                <el-table-column prop="content" label="内容" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                        @pagination="fetchData"/>

            <!-- 编辑资料 -->
            <addWords ref="addWords"/>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import addWords from './dialog/add-words'
import { areaData, apps } from '@/dict/index'

export default {
    components: { Pagination, apps, addWords},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: this.initQuery(),
            // 数据总条数
            total: 0,
            // 多选数据暂存数组
            multipleSelection: [],
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
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/words-manage.json"
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
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        // 删除数据
        handleDelete(index, row) {
            console.log(index, row)
            this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 此处可添加--删除接口
                // 删除成功调用fetchData方法更新列表
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 批量删除
        batchDelete() {
            if (this.multipleSelection.length < 1) {
                this.$message({
                    message: '请先选择要删除的数据！',
                    type: 'warning'
                })
            } else {
                this.handleDelete()
            }
        },
        initQuery() {
            return {
                uid: undefined,
                app: undefined,
                robotId: undefined,
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
