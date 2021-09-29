<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="exportVisible = true">导出数据</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="日期" prop="settleAt">
                    <el-date-picker
                        v-model="search.settleAtTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" disabled placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工会" prop="guildId">
                    <el-select v-model="search.guildId" placeholder="请选择">
                        <el-option v-for="item in guildList"
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
                            <el-form-item label="主播ID" prop="anchorId">
                                <el-input v-model="search.anchorId" placeholder="主播ID"/>
                            </el-form-item>
                            <el-form-item label="结算状态" prop="status">
                                <el-select v-model="search.status" placeholder="请选择">
                                    <el-option v-for="item in statusList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-collapse-item>
                </el-collapse>
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
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="guildStr" label="工会" align="center" width="150" />
                <el-table-column prop="anchorId" label="主播" align="center" width="150" />
                <el-table-column prop="settleAt" label="结算时间" align="center" width="120"/>
                <el-table-column prop="statusStr" label="结算状态" align="center" width="120"/>
                <el-table-column prop="callIncome" label="通话收入" align="center" width="120"/>
                <el-table-column prop="giftIncome" label="礼物收入" align="center" width="120"/>
                <el-table-column prop="commissionIncome" label="用户充值分成" align="center" width="120"/>
                <el-table-column prop="adjustIncome" label="奖惩收入" align="center" width="120"/>
                <el-table-column prop="adjustment" label="手动调整数额" align="center" width="120"/>
                <el-table-column prop="settled" label="结算收入" align="center" width="120"/>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <div v-if="scope.row.status === 1">
                            <el-button type="text" @click="eliminate(scope.row, 2)">本次剔除</el-button>
                        </div>
                        <div v-else-if="scope.row.status === 2 && scope.row.statusStr ==='预结算'">
                            <el-button type="text" @click="eliminate(scope.row, 1)">恢复</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

            <!-- 导出数据 弹出栏 -->
            <el-dialog
                title="导出数据"
                :visible.sync="exportVisible"
                width="30%"
            >
                <div class="export-data">
                    <el-button type="primary" @click="exportTable('xlsx')">EXCEL格式</el-button>
                    <el-button type="primary" @click="exportTable('csv')">CSV格式</el-button>
                    <el-button type="primary" @click="exportTable('txt')">TXT格式</el-button>
                </div>
                <div class="hints">TIP：请选择要导出数据的格式。</div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import {getAppList, getAreaList, getArrName, getCurrentUserAreaId, getGuildList, getSettleStatus} from "@/utils/dist";
import excel from "@/utils/excel";
import {toDate} from "@/utils/date";

export default {
    components: { Pagination },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                guildId: undefined,
                anchorId: undefined,
                settleAtTime: new Date().format('yyyy-MM-dd'),
                status: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            // 导出文件格式
            filesFormat: '.txt, .csv, .xls, .xlsx',
            // 导出数据 弹出框显示/隐藏
            exportVisible: false,
            isCollapse: true,
            submitLoading: false,
            areaList: getAreaList(),
            appList: getAppList(),
            guildList: getGuildList(),
            statusList: getSettleStatus()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            let param = this.search;
            if(typeof(this.search.settleAtTime) !== "undefined"){
                param.settleAt = new Date(this.search.settleAtTime).getTime() / 1000
            }
            this.$service.settle.getSettleList(param, function (result){
                const list = result.getRecordsList()
                $this.records = list
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "guildId" : item.getGuildId(),
                        "guildStr" : getArrName($this.guildList, item.getGuildId()),
                        "anchorId" : item.getAnchorId(),
                        "settleAt" : toDate(item.getSettleAt()),
                        "status" : item.getStatus(),
                        "statusStr" : getSettleStatus(item.getStatus()),
                        "callIncome" : item.getCallIncome(),
                        "giftIncome" : item.getGiftIncome(),
                        "commissionIncome" : item.getCommissionIncome(),
                        "adjustIncome" : item.getAdjustIncome(),
                        "adjustment" : item.getAdjustment(),
                        "settled" : item.getSettled()
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        // 导出数据--excle格式
        exportTable(type) {
            if (this.tableData.length) {
                const params = {
                    header: ['ID', '区域', '工会', '主播Id', '结算时间', '通话收入', '礼物收入', '用户充值分成', '奖惩收入', '手动调整数额', '结算收入'],
                    key: ['id', 'areaStr', 'guildStr', 'anchorId', 'settleAt','callIncome', 'giftIncome', 'commissionIncome', 'adjustIncome', 'adjustment', 'settled'],
                    data: this.tableData,
                    autoWidth: true,
                    fileName: '结算历史记录-' + this.search.settleAtTime,
                    bookType: type
                }
                excel.exportDataToExcel(params)
                this.exportVisible = false
            }
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
