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

                    <el-form-item style="padding-left: 20px">
                        <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                    </el-form-item>
                    <el-collapse accordion @change="isCollapse = !isCollapse">
                        <el-collapse-item>
                            <template slot="title">
                                {{isCollapse ? '展开' : '收起'}}
                            </template>
                            <div>
                                <el-form-item label="举报方类型" prop="reportedType">
                                    <el-select v-model="search.reporterType" placeholder="请选择">
                                        <el-option v-for="item in reportedTypes"
                                                   :key="item.value"
                                                   :label="item.label"
                                                   :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="举报方Id" prop="reporterId">
                                    <el-input v-model="search.reporterId" type="number" placeholder="举报方Id"/>
                                </el-form-item>
                                <el-form-item label="被举报方Id" prop="reportedId">
                                    <el-input v-model="search.reportedId" type="number" placeholder="被举报方Id"/>
                                </el-form-item>
                                <el-form-item label="被举报方类型" prop="reportedType">
                                    <el-select v-model="search.reportedType" placeholder="请选择">
                                        <el-option v-for="item in reportedTypes"
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
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="app" label="App" align="center" width="120">
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
                <el-table-column prop="reporterType" label="举报者类型" align="center" width="120" />
                <el-table-column prop="reporterId" label="举报人Id" align="center" width="120" />
                <el-table-column prop="reportedType" label="被举报者类型" align="center" width="120" />
                <el-table-column prop="reportedId" label="被举报者id" align="center" width="120" />
                <el-table-column prop="violationTypeStr" label="违规类型" align="center" width="120" />
                <el-table-column prop="violationSceneStr" label="违规场景" align="center" width="120" />
                <el-table-column prop="dealMessage" label="举报信息" align="center" width="120" />
                <el-table-column prop="dealStatusStr" label="处理状态" align="center" width="120" />
                <el-table-column prop="dealAt" label="处理时间" align="center" width="150"/>
                <el-table-column prop="blockDuration" label="封禁时长" align="center" width="120"/>
                <el-table-column prop="revoked" label="是否取消处罚" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-switch v-model="scope.row.revoked" disabled/>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="创建时间" align="center" width="150"/>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope" >
                        <div hidden="scope.row.isHidden">
                            <el-button type="text" plain size="mini" @click="toDialog('block',scope.row)">处理</el-button>
                            <el-button type="text" plain size="mini" @click="handleRefuse(scope.row)">忽略</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>
        </el-card>

        <!-- 处理 弹出栏 -->
        <block ref="block" @fetchData="fetchData"/>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import {
    getReportedTypes,
    getReportedTime,
    getAreaList,
    getViolationScene,
    getViolationType,
    getBlockStatus, getArrName, getAppName, getAppListByAreaId
} from "@/utils/dist";
import block from './dialog/block'
import {toTime} from "@/utils/util";
import {isEmpty} from "@/api/api";

export default {
    name: 'Table',
    components: { Pagination, block },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                dealStatus: [],
                scene: 0,
                reporterType: undefined,
                reporterId: undefined,
                reportedType: undefined,
                reportedId: undefined,
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
            areaData: getAreaList(true),
            reportedTypes: getReportedTypes(),
            reportedTimes: getReportedTime(),
            violationScenes: getViolationScene(true)
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
            this.$service.audit.getViolationList(this.handleReportedTime(), function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "reporterType" : getReportedTypes(item.getReporterType()),
                        "reporterId" : item.getReporterId(),
                        "reportedType" : getReportedTypes(item.getReportedType()),
                        "reportedId" : item.getReportedId(),
                        "violationType" : item.getViolationType(),
                        "violationTypeStr" : getViolationType(false, item.getViolationType()),
                        "violationScene" : item.getViolationScene(),
                        "violationSceneStr" : getViolationScene(false, item.getViolationScene()),
                        "reportMessage" : item.getReportMessage(),
                        "dealStatus" : item.getDealStatus(),
                        "dealStatusStr" : getBlockStatus(false, item.getDealStatus()),
                        "isHidden": !isEmpty(item.getDealStatus()),
                        "dealMessage" : item.getDealMessage(),
                        "dealAt" : toTime(item.getDealAt()),
                        "blockDuration" : item.getBlockDuration(),
                        "revoked" : item.getRevoked(),
                        "createdAt" : toTime(item.getCreatedAt()),
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        handleRefuse(index, row) {
            const $this = this
            let param = {
                "violationId" : row.id,
                "dealStatus" : 0
            }
            this.$service.audit.processViolation(param, function (result){
                result ? $this.$message.success("已忽略 !") : $this.$message.error("失败 !")
                this.fetchData()
            });
        },
        resetForm() {
            this.$refs['searchForm'].resetFields()
        },
        handleReportedTime(){
            let param = this.search
            let rt = param.reportedTime;

            let startTime1 = undefined;
            let endTime1 = undefined;
            let daySecond = 24 * 60 * 60;
            let currentSecond = new Date(new Date().toLocaleDateString()).getTime() /1000;
            if(1 === rt){
                startTime1 = currentSecond; // 当天0点
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }else if(2 === rt){
                startTime1 = currentSecond - daySecond * 3;
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }else if(3 === rt){
                startTime1 = currentSecond - daySecond * 7;
                endTime1 = currentSecond + daySecond -1;// 当天23:59
            }
            param.createdStart = startTime1;
            param.createdEnd = endTime1;
            return param
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
