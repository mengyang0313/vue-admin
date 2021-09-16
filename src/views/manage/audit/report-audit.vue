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
                <template>
                    <el-form-item label="举报方Id" prop="reporterId">
                        <el-input v-model="search.reporterId" placeholder="举报方Id"/>
                    </el-form-item>
                    <el-form-item label="被举报方Id" prop="reportedId">
                        <el-input v-model="search.reportedId" placeholder="被举报方Id"/>
                    </el-form-item>
                    <el-form-item label="举报方类型" prop="reportedType">
                        <el-select v-model="search.reportedType" placeholder="请选择">
                            <el-option v-for="item in reportedTypes"
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
                                <el-form-item label="举报场景" prop="scenes">
                                    <el-select v-model="search.scene" placeholder="请选择">
                                        <el-option v-for="item in violationScenes"
                                                   :key="item.value"
                                                   :label="item.label"
                                                   :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="举报时间" prop="reportedTime">
                                    <el-select v-model="search.reportedTime" placeholder="请选择">
                                        <el-option v-for="item in reportedTimes"
                                                   :key="item.value"
                                                   :label="item.label"
                                                   :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="区域" prop="areaId">
                                    <el-select v-model="search.areaId" placeholder="请选择">
                                        <el-option v-for="item in areaData"
                                                   :key="item.value"
                                                   :label="item.label"
                                                   :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
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
                <el-table-column prop="id" label="举报Id" align="center" width="120" />
                <el-table-column prop="reporterId" label="举报方" align="center" width="120" />
                <el-table-column prop="reportedId" label="被举报方" align="center" width="120" />
                <el-table-column prop="violationType" label="举报类型" align="center" width="200"/>
                <el-table-column prop="violationScene" label="举报场景" align="center" width="100"/>
                <el-table-column prop="reportMessage" label="举报信息" align="center" width="150">
<!--                    <template slot-scope="scope">-->
<!--                        <a @click="hisVideo(scope.row)" style="color: #1E88C7">查看</a>-->
<!--                    </template>-->
                </el-table-column>
                <el-table-column prop="createdAt" label="举报时间" align="center" width="150">
<!--                    <template slot-scope="scope">-->
<!--                        <a @click="hisVideo(scope.row)" style="color: #1E88C7">查看</a>-->
<!--                    </template>-->
                </el-table-column>
                <el-table-column prop="dealStatus" label="处理状态" align="center" width="150"/>
                <el-table-column prop="dealMessage" label="处理信息" align="center" width="150"/>
                <el-table-column prop="dealAt" label="处理时间" align="center" width="150"/>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="primary" plain size="mini" :disabled="scope.row.forbid" @click="processViolation(scope.row)">处理</el-button>
                        <el-button type="success" plain size="mini" @click="processViolation(scope.row)">忽略</el-button>
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
import { getReportedTypes, getReportedTime, getAreaList, getViolationScene } from "@/utils/common";

export default {
    name: 'Table',
    components: {Pagination},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 1,
                scene: 0,
                reportedType: 1,
                reportUid: undefined,
                reportedTime: 1,
                createdStart: undefined,
                createdEnd: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            isCollapse: true,
            areaData: getAreaList(),
            reportedTypes: getReportedTypes(),
            reportedTimes: getReportedTime(),
            violationScenes: getViolationScene()
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
            this.handleReportedTime()
            this.$service.audit.getViolationList(this.search, function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "reporterId" : item.getReporterId(),
                        "reportedId" : item.getReportedId(),
                        "violationType" : item.getViolationType(),
                        "violationScene" : item.getViolationScene(),
                        "reportMessage" : item.getReportMessage(),
                        "createdAt" : item.getCreatedAt(),
                        "dealStatus" : item.getDealStatus(),
                        "dealMessage" : item.getDealMessage(),
                        "dealAt" : item.getDealAt()
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
            this.search.page.currentPage = 1
            this.fetchData()
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 通过
        handlePassed(index, row) {
            const $this = this
            this.$prompt('', '通过原因', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                let param = {
                    "profileId" : row.id,
                    "status" : 5,
                    "reason" : value
                }
                this.$service.audit.processViolation(param, function (result){
                    result ? $this.$message.success("审核通过 !") : $this.$message.error("审核失败 !")
                    this.fetchData()
                });
            })
        },
        // 拒绝
        handleRefuse(index, row) {
            const $this = this
            this.$prompt('', '通过原因', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                let param = {
                    "violationId" : row.id,
                    "dealStatus" : 4,
                    "dealMessage" : value
                }
                this.$service.audit.processViolation(param, function (result){
                    result ? $this.$message.success("已拒绝 !") : $this.$message.error("拒绝失败 !")
                    this.fetchData()
                });
            })
        },
        //重置
        resetForm() {
            this.$refs['searchForm'].resetFields()
        },
        handleReportedTime(){
            let rt = this.search.reportedTime;

            let startTime1 = undefined;
            let endTime1 = undefined;
            let daySecond = 24 * 60 * 60;
            let currentSecond = new Date(new Date().toLocaleDateString()).getTime() /1000;
            if('1' === rt){
                startTime1 = currentSecond; // 当天0点
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }else if('2' === rt){
                startTime1 = currentSecond - daySecond * 3;
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }else if('3' === rt){
                startTime1 = currentSecond - daySecond * 7;
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }
            this.search.createdStart = startTime1;
            this.search.createdEnd = endTime1;
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
