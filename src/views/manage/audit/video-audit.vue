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
                    <el-col :span="12">
                        <el-form-item label="待审核" size="medium">
                            <el-button @click="onSubmit">待审核资料 (65)</el-button>
                            <el-button @click="onSubmit">待审核视频 (65)</el-button>
                            <el-button @click="onSubmit">待审核举报 (65)</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="审核状态">
                            <el-select v-model="search.reviewStatus" placeholder="请选择" @change="changeArea">
                                <el-option v-for="item in reviewStatus"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="地区">
                            <el-select v-model="search.areaId" placeholder="请选择" @change="changeArea">
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
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="ownerId" label="用户id" align="center" width="120" />
                <el-table-column prop="ownerNickname" label="昵称" align="center" />
                <el-table-column prop="ownerType" label="用户类型" align="center" />
                <el-table-column prop="thumb" label="视频" align="center" width="300">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="ownerId" label="已有视频" align="center" width="300">
                    <template slot-scope="scope">
                        <a @click="toDialog('videoList',scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="录制时间" align="center" width="150" />
                <el-table-column label="操作" align="center" width="200">
                    <template slot-scope="scope">
                        <el-button type="primary" plain size="mini" :disabled="scope.row.forbid" @click="handlePassed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>
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
import Pagination from '../../../components/Pagination'
import {getAreas, getReviewStatus} from "@/utils/common"
import videoList from './dialog/video-list'

export default {
    name: 'Table',
    components: {Pagination, videoList},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 1,
                reviewStatus: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreas(),
            reviewStatus: getReviewStatus()
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
            this.$service.audit.getLiveList(this.search, function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "ownerId" : item.getOwnerId(),
                        "ownerNickname" : "昵称",
                        "ownerType" : item.getOwnerType(),
                        "thumb" : item.getThumb(),
                        "videos" : "查看",
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss')
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
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
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
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
