<template>
    <el-dialog title="封禁历史" :visible.sync="dialogVisible" append-to-body width="80%" :before-close="closeDialog">
        <div class="table-classic-wrapper">
            <el-card shadow="always">
                <!-- 表格栏 -->
                <el-table
                    ref="multipleTable"
                    v-loading="listLoading"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    size="medium"
                >
                    <el-table-column type="selection" width="60"/>
                    <el-table-column prop="id" label="举报Id" align="center" width="120" />
                    <el-table-column prop="reporterId" label="举报方" align="center" width="120" />
                    <el-table-column prop="reportedId" label="被举报方" align="center" width="120" />
                    <el-table-column prop="violationTypeStr" label="举报类型" align="center" width="200"/>
                    <el-table-column prop="violationSceneStr" label="举报场景" align="center" width="100"/>
                    <el-table-column prop="reportMessage" label="举报信息" align="center" width="150"/>
                    <el-table-column prop="createdAt" label="举报时间" align="center" width="150"/>
                    <el-table-column prop="dealStatusStr" label="处理状态" align="center" width="150"/>
                    <el-table-column prop="dealMessage" label="处理信息" align="center" width="150"/>
                    <el-table-column prop="dealAt" label="处理时间" align="center" width="150"/>
                </el-table>
                <!-- 分页栏 -->
                <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                            @pagination="fetchData"/>

            </el-card>d
        </div>
    </el-dialog>
</template>

<script>
import Pagination from '../../../../components/Pagination'
import {
    getAppList,
    getAppName,
    getAreaList,
    getBlockStatus,
    getMessageType,
    getViolationScene,
    getViolationType
} from "@/utils/dist";
import {toTime} from "@/utils/util";
import VueVideoPlayer from '../../../../components/VueVideoPlayer'

export default {
    name: 'Table',
    components: { Pagination , VueVideoPlayer },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                reportedType: undefined,
                reportedId: undefined,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            tableData: {},
            total: 0,
            dialogVisible: false,
            playVisible: false,
            areaData: getAreaList(true),
            appList: getAppList(),
            messageTypeList: getMessageType()
        }
    },
    methods: {
        init(row){
            this.search.areaId = row.areaId;
            this.search.reportedType = 2;
            this.search.reportedId = row.id;
            this.fetchData()
        },
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.audit.getViolationList(this.search, function (result){
                const list = result.getRecordsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "reporterId" : item.getReporterId(),
                        "reportedId" : item.getReportedId(),
                        "violationType" : item.getViolationType(),
                        "violationTypeStr" : getViolationType(false, item.getViolationType()),
                        "violationScene" : item.getViolationScene(),
                        "violationSceneStr" : getViolationScene(false, item.getViolationScene()),
                        "reportMessage" : item.getReportMessage(),
                        "createdAt" : toTime(item.getCreatedAt()),
                        "dealStatus" : item.getDealStatus(),
                        "dealStatusStr" : getBlockStatus(false, item.getDealStatus()),
                        "dealMessage" : item.getDealMessage(),
                        "dealAt" : item.getDealAt()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
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
