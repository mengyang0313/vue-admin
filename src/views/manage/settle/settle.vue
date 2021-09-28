<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always" id="settleBody">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="success" @click="toDialog('createSettle', '')" icon="el-icon-refresh">生成预结算记录</el-button>
                <el-button type="primary" @click="submitSettleRecord" icon="el-icon-check">确认结算</el-button>
                <el-button type="primary" @click="toDialog('importData', '')">导入数据</el-button>
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
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" placeholder="请选择">
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
                <el-table-column prop="adjustment" label="手动调整数额" align="center" width="150">
                    <template slot-scope="{row}">
                        <template v-if="row.editable">
                            <el-input v-model="row.adjustment" style="width: 100px;"/>
                            <el-button class="cancel-btn" type="text" @click="cancelEdit(row)">取消</el-button>
                        </template>
                        <span v-else>{{ row.adjustment }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="settled" label="结算收入" align="center" width="120"/>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <div v-if="scope.row.status === 1">
                            <el-button type="text" @click="eliminate(scope.row, 2)">本次剔除</el-button>
                            <el-button v-if="scope.row.editable" type="text" size="small" @click="confirmEdit(scope.row)">保存</el-button>
                            <el-button v-else type="text" size="small" @click="scope.row.editable = !scope.row.editable">编辑</el-button>
                        </div>
                        <div v-else-if="scope.row.status === 2 && scope.row.statusStr ==='预结算'">
                            <el-button type="text" @click="eliminate(scope.row, 1)">恢复</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
<!--            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.page.pageSize"-->
<!--                        @pagination="fetchData"/>-->
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


            <!-- 充值 弹出栏 -->
            <createSettle ref="createSettle" @createSettleRecord="createSettleRecord($event)"/>

            <!-- 导入 弹出栏 -->
            <importData ref="importData"  @importSuccess="importSuccess($event)"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import {getAreaList, getAppList, getArrName, getGuildList, getSettleStatus} from "@/utils/dist";
import excel from "@/utils/excel"
import createSettle from './dialog/createSettle'
import importData from './dialog/import-data'
import {getDateStr, toDate} from "@/utils/date";


export default {
    components: { Pagination, createSettle, importData},
    data() {
        return {
            listLoading: true,
            search: {
                areaId: 1,
                guildId: undefined,
                anchorId: undefined,
                settleAtTime: new Date(new Date().format('yyyy-MM-dd')),
                status: undefined
            },
            total: 0,
            records : undefined,
            submitLoading: false,
            areaList: getAreaList(),
            appList: getAppList(),
            guildList: getGuildList(),
            statusList: getSettleStatus(),
            createSettleLoadingText: "预结算生成中...",
            submitSettleLoadingText: "算生成中...",
            // 导出文件格式
            filesFormat: '.txt, .csv, .xls, .xlsx',
            // 导出数据 弹出框显示/隐藏
            exportVisible: false
        }
    },
    created() {
        this.listLoading = false
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            let param = this.search;
            if(typeof(this.search.settleAtTime) !== "undefined"){
                param.settleAt = this.search.settleAtTime.getTime() / 1000
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
                        "settled" : item.getSettled(),
                        "editable" : false
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSearch() {
            this.fetchData()
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        // 剔除
        eliminate(row, status){
            this.records.forEach(item => {
                if(row.id === item.getId()){
                    item.setStatus(status)
                }
            })
            this.tableData.forEach(item => {
                if(row.id === item.id){
                    item.status = status
                }
            })
        },
        // 生成预结算记录
        createSettleRecord(param){
            this.querySettleProgress(param)
        },
        // 确认结算
        submitSettleRecord(){
            let $this = this
            let param = {
                areaId : this.search.areaId,
                records: this.records,
                settleAtTime: this.search.settleAtTime
            }
            param.records.forEach(item => {
                if(1 === item.getStatus()){
                    item.setStatus(3)
                }
            })
            this.$service.settle.submitSettleRecord(param, function (result){
                if(result){
                    $this.querySettleProgress(param)
                }else{
                    $this.$message.error("结算失败!")
                }
            });
        },
        // 查询结算和预结算 进度
        querySettleProgress(param){
            const loading = this.$loading({
                target: document.querySelector("#settleBody")
            });
            this.showLoading(param, loading)
        },
        showLoading(param, loading){
            let $this = this
            setTimeout(() => {
                this.$service.settle.querySettleProgress(param, function (result){
                    if(result){
                        result = Math.ceil(Math.random()*10000) / 100
                        loading.text = $this.createSettleLoadingText + result
                        if(result<20){
                            return $this.showLoading(param, loading) //递归
                        }
                        setTimeout(() => {
                            loading.text = "加载完成....100%"
                            loading.close();
                        }, 1000);

                        $this.search.areaId = param.areaId
                        $this.search.settleAtTime = param.settleAtTime
                        $this.fetchData()
                        return true
                    }else{
                        $this.$message.error("预结算生成失败!")
                    }
                })
            },500)
        },
        // 导出数据--excle格式
        exportTable(type) {
            if (this.tableData.length) {
                const params = {
                    header: ['ID', '区域', '工会', '主播Id', '结算时间', '通话收入', '礼物收入', '用户充值分成', '奖惩收入', '手动调整数额', '结算收入'],
                    key: ['id', 'areaStr', 'guildStr', 'anchorId', 'settleAt', 'callIncome', 'giftIncome', 'commissionIncome', 'adjustIncome', 'adjustment', 'settled'],
                    data: this.tableData,
                    autoWidth: true,
                    fileName: '预结算记录-' + getDateStr(),
                    bookType: type
                }
                excel.exportDataToExcel(params)
                this.exportVisible = false
            }
        },
        importSuccess(result){
            result.arr.forEach(rel => {
                let id = rel.id
                let adjustment = rel.adjustment
                this.setAdjustment(id, adjustment)
            })
        },
        setAdjustment(id, adjustment) {
            this.records.forEach(item => {
                if(id === item.getId()){
                    item.setAdjustment(adjustment)
                }
            })
            this.tableData.forEach(item => {
                if(id === item.id){
                    item.adjustment = adjustment
                }
            })
        },
        cancelEdit(row) {
            row.hobby = row.originalHobby
            row.editable = false
        },
        confirmEdit(row) {
            row.editable = false
            if(row.adjustment != ""){
                this.setAdjustment(row.id, parseInt(row.adjustment))
            }else{
                this.$message.error("不能为空!")
            }
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
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
