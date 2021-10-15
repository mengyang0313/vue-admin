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
                    <ChartsCountLine :data="userData" :key="userKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsCountLine :data="callingData" :key="callingKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsCountLine :data="callData" :key="callKey" class="data-chart"/>
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
            userKey: 20,
            callingKey: 40,
            callKey: 60,
            expenseKey: 80,
            depositKey: 100,
            payKey: 120,
            search: {
                areaId: undefined
            },
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            userData: {
                title: '实时用户',
                legend: ['在线用户', '新用户', '付费用户', '空闲主播', '通话主播'],
                keys: [],
                values: []
            },
            callingData: {
                title: '实时通话',
                legend: ['AIB发起', '用户发起', '主播发起'],
                keys: [],
                values: []
            },
            callData: {
                title: '实时呼叫',
                legend: ['整体呼叫', 'AIB呼叫', '用户呼叫', '主播呼叫'],
                keys: [],
                values: []
            },
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
                title: '渠道收入',
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
                $this.handleUserData(statList)
                $this.handleCallingData(statList)
                $this.handleCallData(statList)
                $this.handleExpenseData(statList)
                $this.handleDepositData(statList)
                $this.handlePayData(statList)
            });
        },
        handleUserData(statList){
            let keys = []
            let values = []
            let onlineUser = []
            let newUser = []
            let payUser = []
            let idleAnchor = []
            let busyAnchor = []
            let len = statList.length
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                onlineUser.push(item.getOnlineUser())
                newUser.push(item.getNewUser())
                payUser.push(item.getPayUser())
                idleAnchor.push(item.getIdleAnchor())
                busyAnchor.push(item.getBusyAnchor())
            })

            values.push(onlineUser)
            values.push(newUser)
            values.push(payUser)
            values.push(idleAnchor)
            values.push(busyAnchor)

            this.userData.keys = keys
            this.userData.values = values
            ++this.userKey
        },
        handleCallingData(statList){
            let keys = []
            let values = []
            let aiCalling = []
            let userCalling = []
            let anchorCalling = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                aiCalling.push(item.getAiCalling())
                userCalling.push(item.getUserCalling())
                anchorCalling.push(item.getAnchorCalling())
            })
            values.push(aiCalling)
            values.push(userCalling)
            values.push(anchorCalling)

            this.callingData.keys = keys
            this.callingData.values = values
            ++this.callingKey
        },
        handleCallData(statList){
            let keys = []
            let values = []
            let aiCall = []
            let userCall = []
            let anchorCall = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("hh:mm"))
                aiCall.push(item.getAiCall())
                userCall.push(item.getUserCall())
                anchorCall.push(item.getAnchorCall())
            })
            values.push(aiCall)
            values.push(userCall)
            values.push(anchorCall)

            this.callData.keys = keys
            this.callData.values = values
            ++this.callKey
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
