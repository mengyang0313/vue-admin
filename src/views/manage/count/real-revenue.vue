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
                            <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                                <el-option v-for="item in areaList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="onSearch" icon="el-icon-refresh">刷 新</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsCountLine :data="expenseData" :key="expenseKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsCountLine :data="depositData" :key="depositKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsCountLine :data="payData" :key="payKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsBarLine from '../../../components/Charts/ChartsBarLine'
import ChartsBar from '../../../components/Charts/ChartsBar'
import ChartsCountLine from '../../../components/Charts/ChartsCountLine'
import {getAreaList, getCurrentUserAreaId} from "@/utils/dist";

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsCountLine},
    data() {
        return {
            expenseKey: 20,
            depositKey: 40,
            payKey: 60,
            search: {
                areaId: undefined
            },
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            expenseData: {
                title: '实时消耗',
                legend: ['全部用户'],
                keys: [],
                values: []
            },
            depositData: {
                title: '实时充值',
                legend: ['全部用户'],
                keys: [],
                values: []
            },
            payData: {
                title: '渠道占比',
                legend: ['Google', 'Apple', '三方渠道'],
                keys: [],
                values: []
            }
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
        this.initData()
    },
    methods: {
        onSearch() {
            this.initData()
        },
        initData(){
            const $this = this
            let param = this.search
            param.startAt = this.startUnix(new Date())
            param.endAt = this.endUnix(new Date())
            this.$service.home.getAreaStat(this.search, function (result){
                let statList = result.getStatsList()
                $this.handleExpenseData(statList)
                $this.handleDepositData(statList)
                $this.handlePayData(statList)
            });
        },
        handleExpenseData(statList){
            let keys = []
            let values = []
            let expense = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                expense.push(item.getExpense())
            })
            values.push(expense)
            this.expenseData.values = values
            this.expenseData.keys = keys
            ++this.expenseKey
        },
        handleDepositData(statList){
            let keys = []
            let values = []
            let deposit = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                deposit.push(item.getDeposit())
            })
            values.push(deposit)
            this.depositData.values = values
            this.depositData.keys = keys
            ++this.depositKey
        },
        handlePayData(statList){
            let keys = []
            let values = []
            let googlePay = []
            let applePay = []
            let otherPay = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                googlePay.push(item.getGooglePay())
                applePay.push(item.getApplePay())
                otherPay.push(item.getOtherPay())
            })
            values.push(googlePay)
            values.push(applePay)
            values.push(otherPay)
            this.payData.values = values
            this.payData.keys = keys
            ++this.payKey
        },
        startUnix($date) {
            return new Date($date.toLocaleDateString()).getTime() / 1000
        },
        endUnix($date) {
            return this.startUnix($date) + 24 * 60 * 60 - 1
        }
    }
}
</script>

<style lang="less">
@import "../../../assets/less/home";
</style>
