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
            <el-menu-item index="1">活跃用户数</el-menu-item>
            <el-menu-item index="2">ARPU</el-menu-item>
            <el-menu-item index="3">整体收入</el-menu-item>
            <el-menu-item index="4">付费用户数</el-menu-item>
            <el-menu-item index="5">整体付费率</el-menu-item>
            <el-menu-item index="6">接通率</el-menu-item>
            <el-menu-item index="7">平均通话时长</el-menu-item>
            <el-menu-item index="8">新增收入</el-menu-item>
            <el-menu-item index="9">新增用户数</el-menu-item>
            <el-menu-item index="10">新增付费率</el-menu-item>
            <el-menu-item index="11">送钻消耗比</el-menu-item>
            <el-menu-item index="12">消息消耗比</el-menu-item>
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
            <el-table-column prop="date" label="日期" align="center" width="180" />
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
            <el-table-column prop="areaName" label="区域" align="center" width="100"/>
            <el-table-column prop="activeUser" label="活跃用户数" align="center" width="120"/>
            <el-table-column prop="arpu" label="ARPU" align="center" width="120"/>
            <el-table-column prop="income" label="整体收入" align="center" width="120"/>
            <el-table-column prop="payUser" label="付费用户数" align="center" width="120"/>
            <el-table-column prop="payPaidRatio" label="整体付费率" align="center" width="120"/>
            <el-table-column prop="answerRatio" label="接通率" align="center" width="120"/>
            <el-table-column prop="durationRatio" label="平均通话时长" align="center" width="120"/>
            <el-table-column prop="newIncome" label="新增收入" align="center" width="120"/>
            <el-table-column prop="newUser" label="新增用户数" align="center" width="120"/>
            <el-table-column prop="newPayPaidRatio" label="新增付费率" align="center" width="120"/>
            <el-table-column prop="newFreeDiamondConsume" label="送钻消耗比" align="center" width="120"/>
            <el-table-column prop="newFreeMessageConsume" label="消息消耗比" align="center" width="120"/>

            <el-table-column label="操作" align="center" width="1" fixed="right">
            </el-table-column>
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
import {endUnix, getCurrentDate, startUnix, toDollar} from "@/utils/util";

export default {
    name: 'Home',
    components: {CountTo, ChartsLine, Pagination},
    data() {
        return {
            listLoading: true,
            search: {
                areaId: 0,
                appId: 0,
                date: [
                    getCurrentDate(-6),
                    getCurrentDate()
                ],
                interval: 4,
                page: {
                    currentPage: 1,
                    pageSize: 1000
                }
            },
            total: 0,
            activeIndex: '1',
            currentDate: {},
            authAreaId: getCurrentUserAreaId(),
            appList: undefined,
            areaList: getAreaList(true),
            areaListAll: getAreaList(true),
            intervalList: getStatInterval(),
            data: {}
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

                let incomeJson = $this.format("整体收入", "整体收入",'$')
                let newIncomeJson = $this.format("新增收入", "新增收入",'$')
                let payPaidRatioJson = $this.format("整体付费率", "整体付费率",'%')
                let newPayPaidRatioJson = $this.format("新增付费率", "新增付费率",'%')
                let activeUserJson = $this.format("活跃用户数", "活跃用户数",'')
                let newUserJson = $this.format("新增用户数", "新增用户数",'')
                let payUserJson = $this.format("付费用户数", "付费用户数",'')
                let newFreeDiamondConsumeJson = $this.format("送钻消耗比", "送钻消耗比",'%')
                let newFreeMessageConsumeJson = $this.format("消息消耗比", "消息消耗比",'%')
                let answerRatioJson = $this.format("接通率", "接通率",'%')
                let durationAverageJson = $this.format("平均通话时长", "平均通话时长",'')
                let arpuJson = $this.format("ARPU", "ARPU",'$')

                list.forEach((item, index)=>{
                    let startAt = item.getStartAt()
                    keys.push(new Date(startAt * 1000).format(fmt))

                    incomeJson.values[0].push(toDollar(item.getIncome()))
                    newIncomeJson.values[0].push(toDollar(item.getNewIncome()))

                    let payPaidRatio = $this.toRatio(item.getPayUser(), item.getActiveUser())
                    payPaidRatioJson.values[0].push(payPaidRatio)

                    let newPayPaidRatio = $this.toRatio(item.getNewPayUser(), item.getNewUser())
                    newPayPaidRatioJson.values[0].push(newPayPaidRatio)

                    activeUserJson.values[0].push(item.getActiveUser())

                    newUserJson.values[0].push(item.getNewUser())

                    payUserJson.values[0].push(item.getPayUser())

                    let newFreeDiamondConsumeRatio = $this.toRatio(item.getNewCallUser(), item.getNewUser())
                    newFreeDiamondConsumeJson.values[0].push(newFreeDiamondConsumeRatio)

                    let newFreeMessageConsumeRatio = $this.toRatio(item.getNewChatUser(), item.getNewUser())
                    newFreeMessageConsumeJson.values[0].push(newFreeMessageConsumeRatio)

                    let answerRatio = $this.toRatio(item.getAnswer(), item.getCall())
                    answerRatioJson.values[0].push(answerRatio)

                    let durationAverage = $this.toAve(item.getDuration(), item.getAnswer())
                    durationAverageJson.values[0].push(durationAverage)

                    let arpu = $this.toAve(item.getIncome(), item.getActiveUser())
                    arpuJson.values[0].push(toDollar(arpu))

                    // 列表数据
                    const json = {
                        "id" : item.getId(),
                        "date" : new Date(startAt * 1000).format("yyyy-MM-dd hh:mm"),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaName" : getArrName($this.areaListAll, item.getAreaId()),
                        "income" : toDollar(item.getIncome())+ "$",
                        "newIncome" : toDollar(item.getNewIncome())+ "$",
                        "payPaidRatio" : payPaidRatio+ "%",
                        "newPayPaidRatio" : newPayPaidRatio+ "%",
                        "newUser" : item.getNewUser(),
                        "payUser" : item.getPayUser(),
                        "newFreeDiamondConsume" : newFreeDiamondConsumeRatio + "%",
                        "newFreeMessageConsume" : newFreeMessageConsumeRatio + "%",
                        "answerRatio" : answerRatio+ "%",
                        "durationRatio" : durationAverage,
                        "arpu" : toDollar(arpu)+ "$",
                        "activeUser": item.getActiveUser()
                    }
                    tableData.push(json)
                })

                incomeJson.keys = keys
                $this.data.incomeJson = incomeJson

                newIncomeJson.keys = keys
                $this.data.newIncomeJson = newIncomeJson

                payPaidRatioJson.keys = keys
                $this.data.payPaidRatioJson = payPaidRatioJson

                newPayPaidRatioJson.keys = keys
                $this.data.newPayPaidRatioJson = newPayPaidRatioJson

                activeUserJson.keys = keys
                $this.data.activeUserJson = activeUserJson

                newUserJson.keys = keys
                $this.data.newUserJson = newUserJson

                payUserJson.keys = keys
                $this.data.payUserJson = payUserJson

                newFreeDiamondConsumeJson.keys = keys
                $this.data.newFreeDiamondConsumeJson = newFreeDiamondConsumeJson

                newFreeMessageConsumeJson.keys = keys
                $this.data.newFreeMessageConsumeJson = newFreeMessageConsumeJson

                answerRatioJson.keys = keys
                $this.data.answerRatioJson = answerRatioJson

                durationAverageJson.keys = keys
                $this.data.durationAverageJson = durationAverageJson

                arpuJson.keys = keys
                $this.data.arpuJson = arpuJson


                $this.total = tableData.length
                $this.tableData = tableData
                $this.listLoading = false

                $this.selItem($this.activeIndex)
            });
        },
        format(title, subtitle, unit){
            let json = {
                    title: title,
                    legend: [subtitle],
                    unit: unit,
                    keys: [],
                    values: [
                        []
                    ]
                }
            return json
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
                    this.currentDate = this.data.activeUserJson
                    break;
                case '2':
                    this.currentDate = this.data.arpuJson
                    break;
                case '3':
                    this.currentDate = this.data.incomeJson
                    break;
                case '4':
                    this.currentDate = this.data.payUserJson
                    break;
                case '5':
                    this.currentDate = this.data.payPaidRatioJson
                    break;
                case '6':
                    this.currentDate = this.data.answerRatioJson
                    break;
                case '7':
                    this.currentDate = this.data.durationAverageJson
                    break;
                case '8':
                    this.currentDate = this.data.newIncomeJson
                    break;
                case '9':
                    this.currentDate = this.data.newUserJson
                    break;
                case '10':
                    this.currentDate = this.data.newPayPaidRatioJson
                    break;
                case '11':
                    this.currentDate = this.data.newFreeDiamondConsumeJson
                    break;
                case '12':
                    this.currentDate = this.data.newFreeMessageConsumeJson
                    break;
            }
            this.activeIndex = key
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
