<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addAutoMessage', '')">+ 新增话术</el-button>
                <el-button type="danger" @click="batchDelete">批量删除</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <template>
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
                            <el-form-item label="状态" prop="enable">
                                <el-select v-model="search.enable" placeholder="请选择">
                                    <el-option v-for="item in bools"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="场景标签" prop="action">
                                <el-select v-model="search.action" placeholder="请选择">
                                    <el-option v-for="item in actionTypes"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSearch">筛选</el-button>
                                <el-button type="danger" @click="resetForm">重置</el-button>
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
                <el-table-column prop="id" label="话术ID" align="center" width="150"/>
                <el-table-column prop="areaId" label="区域" align="center" width="150"/>
                <el-table-column prop="action" label="场景标签" align="center" width="150">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.action }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="enable" label="状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable"/>
                    </template>
                </el-table-column>
                <el-table-column prop="text" label="内容" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

            <!-- 编辑资料 -->
            <addAutoMessage ref="addAutoMessage" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import addAutoMessage from './dialog/add-auto-message'
import { getBool, getAreaList, getActionType } from "@/utils/common";

export default {
    components: { Pagination, addAutoMessage},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 1,
                enable: true,
                action: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 多选数据暂存数组
            multipleSelection: [],
            areaData: getAreaList(),
            bools: getBool(),
            actionTypes: getActionType()
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
            const $this = this
            this.listLoading = true
            this.$service.robot.getAutoMessageList(this.search, function (result){
                const list = result.getMessagesList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "action" : item.getAction(),
                        "text" : item.getText(),
                        "enable" : item.getEnable()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        onSearch() {
            this.search.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
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
