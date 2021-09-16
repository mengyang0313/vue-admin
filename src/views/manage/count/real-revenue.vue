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
                        <el-form-item label="地区">
                            <el-select v-model="search.areaId" placeholder="请选择">
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
                    <ChartsLine :data="expenseData" v-if="expenseData.keys" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="depositData" v-if="depositData.keys" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="payData" v-if="payData.keys" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsBarLine from '../../../components/Charts/ChartsBarLine'
import ChartsBar from '../../../components/Charts/ChartsBar'
import ChartsLine from '../../../components/Charts/ChartsLine'
import {getAreaList} from "@/utils/common";

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            search: {
                areaId: 1
            },
            areaList: getAreaList(),
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
            let expense = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                expense.push(item.getExpense())
            })
            this.expenseData.values.push(expense)
            this.expenseData.keys = keys
        },
        handleDepositData(statList){
            let keys = []
            let deposit = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                deposit.push(item.getDeposit())
            })
            this.depositData.values.push(deposit)
            this.depositData.keys = keys
        },
        handlePayData(statList){
            let keys = []
            let googlePay = []
            let applePay = []
            let otherPay = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                googlePay.push(item.getGooglePay())
                applePay.push(item.getApplePay())
                otherPay.push(item.getOtherPay())
            })
            this.payData.values.push(googlePay)
            this.payData.values.push(applePay)
            this.payData.values.push(otherPay)
            this.payData.keys = keys
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
