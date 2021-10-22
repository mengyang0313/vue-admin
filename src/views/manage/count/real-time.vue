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
                        <el-form-item label="时间" prop="createdStart">
                            <el-date-picker
                                v-model="search.date"
                                type="datetimerange"
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
import {endTime, endUnix, getCurrentDate, startTime, startUnix, toTime} from "@/utils/util";

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
            minDate: getCurrentDate(-3),
            search: {
                areaId: undefined,
                date: [
                    startTime(),
                    endTime()
                ]
            },
            fmt: '',
            interval: undefined,
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
                legend: ['AIB呼叫', '用户呼叫', '主播呼叫'],
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
            let param = this.handleParam()
            this.$service.home.getAreaStat(param, function (result){
                let statList = result.getStatsList()
                $this.toFmt(param)
                $this.handleUserData(statList)
                $this.handleCallingData(statList)
                $this.handleCallData(statList)
                $this.handleExpenseData(statList)
                $this.handleDepositData(statList)
                $this.handlePayData(statList)
            });
        },
        handleParam(){
            let param = this.search;
            if (param.date.length > 0){
                param.startAt = this.search.date[0].getTime() / 1000
                param.endAt = this.search.date[1].getTime() / 1000
            }
            return param
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
                keys.push(new Date(startAt * 1000).format(this.fmt))
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
            this.userData.interval = this.interval
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
                keys.push(new Date(startAt * 1000).format(this.fmt))
                aiCalling.push(item.getAiCalling())
                userCalling.push(item.getUserCalling())
                anchorCalling.push(item.getAnchorCalling())
            })
            values.push(aiCalling)
            values.push(userCalling)
            values.push(anchorCalling)

            this.callingData.keys = keys
            this.callingData.values = values
            this.callingData.interval = this.interval
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
                keys.push(new Date(startAt * 1000).format(this.fmt))
                aiCall.push(item.getAiCall())
                userCall.push(item.getUserCall())
                anchorCall.push(item.getAnchorCall())
            })
            values.push(aiCall)
            values.push(userCall)
            values.push(anchorCall)

            this.callData.keys = keys
            this.callData.values = values
            this.callData.interval = this.interval
            ++this.callKey
        },
        handleExpenseData(statList){
            let keys = []
            let values = []
            let expense = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format(this.fmt))
                expense.push(item.getExpense())
            })
            values.push(expense)
            this.expenseData.values = values
            this.expenseData.keys = keys
            this.expenseData.interval = this.interval
            ++this.expenseKey
        },
        handleDepositData(statList){
            let keys = []
            let values = []
            let deposit = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format(this.fmt))
                deposit.push(item.getDeposit())
            })
            values.push(deposit)
            this.depositData.values = values
            this.depositData.keys = keys
            this.depositData.interval = this.interval
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
                keys.push(new Date(startAt * 1000).format(this.fmt))
                googlePay.push(item.getGooglePay()/100)
                applePay.push(item.getApplePay()/100)
                otherPay.push(item.getOtherPay()/100)
            })
            values.push(googlePay)
            values.push(applePay)
            values.push(otherPay)
            this.payData.values = values
            this.payData.keys = keys
            this.payData.interval = this.interval
            ++this.payKey
        },
        toFmt(param){
            let startDate = new Date(param.date[0].toLocaleDateString())
            let endDate = new Date(param.date[1].toLocaleDateString())
            if(startDate.getTime() === endDate.getTime()){
                this.fmt = "hh:mm"
                this.interval = 10
            }else{
                this.fmt = "MM-dd hh:mm"
                this.interval = undefined
            }
        }
    }
}
</script>

<style lang="less">
@import "../../../assets/less/home";
</style>
