<template>
    <div class="home-wrapper">
        <el-row class="date-box" :gutter="20">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <el-form
                        ref="searchForm"
                        :inline="true"
                        :model="search"
                        label-width="90px"
                        class="search-form"
                    >
                        <el-form-item label="区域">
                            <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                                <el-option v-for="item in areaList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="APP">
                            <el-select v-model="search.appId" placeholder="请选择">
                                <el-option v-for="item in appList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                    <span style="float: left">{{ item.label }}</span>
                                    <span v-if="item.os === 1">
                                            <i class="icon-android-fill" style="float: right"></i>
                                        </span>
                                    <span v-else-if="item.os === 2">
                                            <i class="icon-pingguo" style="float: right"></i>
                                        </span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="间隔">
                            <el-select v-model="search.interval" placeholder="请选择">
                                <el-option v-for="item in intervalList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="时间" prop="createdStart">
                            <el-date-picker
                                v-model="search.date"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="onSearch" icon="el-icon-refresh">刷 新</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selItem">
            <el-menu-item index="1">整体收入</el-menu-item>
            <el-menu-item index="2">新增收入</el-menu-item>
            <el-menu-item index="3">整体付费率</el-menu-item>
            <el-menu-item index="4">新增付费率</el-menu-item>
            <el-menu-item index="5">新增用户数</el-menu-item>
            <el-menu-item index="6">活跃的付费用户数</el-menu-item>
            <el-menu-item index="7">电话接通率</el-menu-item>
            <el-menu-item index="8">平均通话时长</el-menu-item>
        </el-menu>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="incomeData" ref="chartsLine" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>
        <el-card shadow="always" style="padding-top: 30px;padding-bottom: 50px">
        <!-- 表格栏 -->
        <el-table
            ref="multipleTable"
            v-loading="listLoading"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            size="medium"
        >
            <el-table-column prop="date" label="日期" align="center" width="200" />
            <el-table-column prop="app" label="APP" align="center" width="120">
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
            <el-table-column prop="areaName" label="区域" align="center" width="120" />
            <el-table-column prop="income" label="整体收入" align="center" width="120"/>
            <el-table-column prop="newIncome" label="新增收入" align="center" width="120"/>
            <el-table-column prop="payPaidRatio" label="整体付费率" align="center" width="120"/>
            <el-table-column prop="newPayPaidRatio" label="新增付费率" align="center" width="120"/>
            <el-table-column prop="newUser" label="新增用户数" align="center" width="120"/>
            <el-table-column prop="payUser" label="活跃的付费用户数" align="center"/>
            <el-table-column prop="answerRatio" label="电话接通率" align="center"/>
            <el-table-column prop="durationRatio" label="平均通话时长" align="center"/>
        </el-table>
        <!-- 分页栏 -->
        <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                    @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsLine from '../../../components/Charts/ChartsLine'
import Pagination from '../../../components/Pagination'
import {
    getAppListByAreaId,
    getAppName,
    getAreaList,
    getArrName,
    getCurrentUserAreaId,
    getStatInterval
} from "@/utils/dist";
import {endUnix, getCurrentDate, startUnix} from "@/utils/date";

export default {
    name: 'Home',
    components: {CountTo, ChartsLine, Pagination},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 0,
                appId: 0,
                date: [
                    getCurrentDate(),
                    getCurrentDate()
                ],
                interval: 3,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            activeIndex: '1',
            currentDate: {},
            authAreaId: getCurrentUserAreaId(),
            appList: undefined,
            areaList: getAreaList(true),
            areaListAll: getAreaList(false),
            intervalList: getStatInterval(),
            incomeData: {
                title: '整体收入',
                legend: ['整体收入'],
                values: []
            },
            newIncomeData: {
                title: '新增收入',
                legend: ['新增收入']
            },
            payPaidRatioData: {
                title: '整体付费率',
                legend: ['整体付费率'],
                values: []
            },
            newPayPaidRatioData: {
                title: '新增付费率',
                legend: ['新增付费率'],
                keys: [],
                values: []
            },
            newUserData: {
                title: '新增用户数',
                legend: ['新增用户'],
                keys: [],
                values: []
            },
            payUserData: {
                title: '活跃的付费用户数',
                legend: ['付费率用户'],
                keys: [],
                values: []
            },
            answerRatioData: {
                title: '电话接通率',
                legend: ['接通率'],
                keys: [],
                values: []
            },
            durationRatioData: {
                title: '平均通话时长',
                legend: ['通话时长'],
                keys: [],
                values: []
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            this.search.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
            this.changeArea(this.search.areaId)
            this.fetchData()
        },
        fetchData() {
            const $this = this
            this.cardInfoData = []
            let param = this.handleSearch()
            this.$service.home.getUserStat(param, function (result){
                const list = result.getStatsList()
                let keys = []
                let tableData = []

                let fmt = $this.toFmt(param)

                let incomes = []
                let newIncomes = []
                let payPaidRatios = []
                let newPayPaidRatios = []
                let newUser = []
                let payUser = []
                let answerRatios = []
                let durationRatios = []
                list.forEach((item, index)=>{
                    let startAt = item.getStartAt()
                    keys.push(new Date(startAt * 1000).format(fmt))
                    incomes.push(item.getIncome())
                    newIncomes.push(item.getNewIncome())

                    let payPaidRatio = $this.toRatio(item.getActiveUser(), item.getPayUser())
                    payPaidRatios.push(payPaidRatio)

                    let newPayPaidRatio = $this.toRatio(item.getNewIncome(), item.getNewUser())
                    newPayPaidRatios.push(newPayPaidRatio)

                    newUser.push(item.getNewUser())

                    payUser.push(item.getPayUser())

                    let answerRatio = $this.toRatio(item.getAnswer(), item.getCall())
                    answerRatios.push(answerRatio)

                    let durationRatio = $this.toAve(item.getDuration(), item.getAnswer())
                    durationRatios.push(durationRatio)

                    // 列表数据
                    const json = {
                        "id" : item.getId(),
                        "date" : new Date(startAt * 1000).format("yyyy-MM-dd hh:mm"),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaName" : getArrName($this.areaListAll, item.getAreaId()),
                        "income" : item.getIncome(),
                        "newIncome" : item.getNewIncome(),
                        "payPaidRatio" : payPaidRatio,
                        "newPayPaidRatio" : newPayPaidRatio,
                        "newUser" : item.getNewUser(),
                        "payUser" : item.getPayUser(),
                        "answerRatio" : answerRatio,
                        "durationRatio" : durationRatio
                    }
                    tableData.push(json)
                })
                //整体收入
                $this.incomeData.keys = keys
                $this.incomeData.values = []
                $this.incomeData.values.push(incomes)

                //新增收入
                $this.newIncomeData.keys = keys
                $this.newIncomeData.values = []
                $this.newIncomeData.values.push(newIncomes)

                //整体付费率
                $this.payPaidRatioData.keys = keys
                $this.payPaidRatioData.values = []
                $this.payPaidRatioData.values.push(payPaidRatios)

                //新增付费率
                $this.newPayPaidRatioData.keys = keys
                $this.newPayPaidRatioData.values = []
                $this.newPayPaidRatioData.values.push(newPayPaidRatios)

                //新增用户数
                $this.newUserData.keys = keys
                $this.newUserData.values = []
                $this.newUserData.values.push(newUser)

                //活跃的付费用户数
                $this.payUserData.keys = keys
                $this.payUserData.values = []
                $this.payUserData.values.push(payUser)

                //电话接通率
                $this.answerRatioData.keys = keys
                $this.answerRatioData.values = []
                $this.answerRatioData.values.push(answerRatios)

                //平均通话时长
                $this.durationRatioData.keys = keys
                $this.durationRatioData.values = []
                $this.durationRatioData.values.push(durationRatios)

                $this.total = tableData.length
                $this.tableData = tableData
                $this.listLoading = false

                $this.selItem($this.activeIndex)
            });
        },
        toFmt(param){
            let fmt = "MM-dd hh:mm";
            let interval = param.interval
            if(interval === 3){
                let startDate = param.date[0]
                let endDate = param.date[1]
                fmt = startDate.getTime() === endDate.getTime() ? "hh:mm" : "MM-dd hh:mm"
            }
            return fmt
        },
        toRatio(num, total){
            num = parseFloat(num);
            total = parseFloat(total);
            if (isNaN(num) || isNaN(total)) {
                return 0;
            }
            return total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00);
        },
        toAve(num, total){
            if (total === 0) {
                return num
            }else {
                return Math.round(num / total)
            }
        },
        handleSearch(){
            let param = this.search;
            param.startAt = startUnix(this.search.date[0])
            param.endAt = endUnix(this.search.date[1])
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        selItem(key) {
            this.currentDate = {}
            switch (key){
                case '1':
                    this.currentDate = this.incomeData
                    break;
                case '2':
                    this.currentDate = this.newIncomeData
                    break;
                case '3':
                    this.currentDate = this.payPaidRatioData
                    break;
                case '4':
                    this.currentDate = this.newPayPaidRatioData
                    break;
                case '5':
                    this.currentDate = this.newUserData
                    break;
                case '6':
                    this.currentDate = this.payUserData
                    break;
                case '7':
                    this.currentDate = this.answerRatioData
                    break;
                case '8':
                    this.currentDate = this.durationRatioData
                    break;
            }
            this.$refs.chartsLine.init(this.currentDate);
        },
        changeArea(val){
            this.appList = getAppListByAreaId(val, true, true)
        }
    }
}
</script>

<style lang="less">
@import "../../../assets/less/home";
</style>
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
