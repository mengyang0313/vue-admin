<template>
    <div class="home-wrapper" v-loading="listLoading">
        <div class="date-row">
            <div v-for="(item, index) in cardInfoData" :key="index" class="data-col">
                <el-card shadow="always" :body-style="{padding: '0px'}">
                    <div class="date-block">
                        <div class="date-cont">
                            <div v-if="item.num === 3" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="1000" :decimals="item.decimals"/>{{ item.unit }}
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count2" :duration="1000" :decimals="item.decimals"/>{{ item.unit }}
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count3" :duration="1000" :decimals="item.decimals"/>{{ item.unit }}
                            </div>
                            <div v-else-if="item.num === 2" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="1000" :decimals="item.decimals"/>
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count2" :duration="1000"/>
                            </div>
                            <div v-else-if="item.num === 1" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="1000"/>
                            </div>
                            <p class="title">{{ item.title }}</p>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>

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
                        <template>
                            <el-form-item label="区域">
                                <el-select v-model="search.areaId" placeholder="请选择">
                                    <el-option v-for="item in areaList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-date-picker
                                    v-model="search.date"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="danger" @click="onSearch" icon="el-icon-refresh">刷 新</el-button>
                        </el-form-item>
                        </template>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBarLine :data="incomeData" :key="incomeKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBarLine :data="totalDate" :key="totalKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBar title="新增用户" :key="newUserKey" :data="userDate" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="activeData" :key="activeKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>


        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBar title="充值渠道" :data="channelData" :key="channelKey" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsBarLine from '../../components/Charts/ChartsBarLine'
import ChartsBar from '../../components/Charts/ChartsBar'
import ChartsLine from '../../components/Charts/ChartsLine'
import {getAreaList, getAppList, getAppName, getCurrentUserAreaId} from "@/utils/dist"

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            listLoading: false,
            search: {
                areaId: undefined,
                date: new Date(new Date().format('yyyy-MM-dd')),
                startAt: undefined,
                endAt: undefined
            },
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            appList: getAppList(),
            cardInfoData: [],
            newUserKey: 1,
            incomeKey: 20,
            totalKey: 40,
            activeKey: 60,
            channelKey: 80,
            incomeData: {
                title: '新增收入',
                legend: ['新增收入'],
                data: []
            },
            totalDate: {
                title: '全部收入',
                legend: ['总收入'],
                data: []
            },
            userDate: {
                title: '新增用户',
                legend: ['新增用户'],
                data: []
            },
            activeData: {
                title: '活跃用户',
                legend: ['活跃用户'],
                keys: [],
                values: []
            },
            channelData: {
                title: '充值渠道',
                legend: ['google', 'apple', '其他'],
                data: []
            }
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
        this.initCard()
        this.initData()
    },
    methods: {
        onSearch() {
            this.listLoading = true
            this.initCard()
            this.initData()
        },
        initCard(){
            const $this = this
            this.cardInfoData = []
            this.$service.home.getOverview(this.handleSearch(), function (result){
                let income = result.getIncome()
                let income_decimals = 0
                if(income>0){
                    income = income / 100
                    income_decimals = 2
                }
                let inc = {
                    title: '大盘实时收入/订单数', num: 2, count: income, count2: result.getPayCount(), decimals: income_decimals
                }
                let user = {
                    title: '新增/活跃用户', num: 2, count: result.getNewUser(), count2: result.getActiveUser(), decimals: 0
                }
                let anchor = {
                    title: '通话/在线主播', num: 2, count: result.getBusyAnchor(), count2: result.getOnlineAnchor(), decimals: 0
                }
                let review = {
                    title: '待审核主播/资料/视频', num: 3, count: result.getReviewAnchor(), count2: result.getReviewProfile(), count3: result.getReviewVideo(), decimals: 0
                }
                let newAmount = result.getNewAmount() / 1000
                let expenseAmount = result.getExpenseAmount() / 1000
                let totalAmount = result.getTotalAmount() / 1000
                let amount = {
                    title: '新充值/消费/总余额', num: 3, count: newAmount, count2: expenseAmount, count3: totalAmount, decimals: 0, unit: "K"
                }
                $this.cardInfoData.push(inc)
                $this.cardInfoData.push(user)
                $this.cardInfoData.push(anchor)
                $this.cardInfoData.push(review)
                $this.cardInfoData.push(amount)
            });
        },
        initData(){
            const $this = this
            this.$service.home.getHomeStat(this.handleSearch(), function (result){
                let statList = result.getStatsList()

                let newArr = []
                let totalArr = []
                let userArr = []
                let channelArr = []
                statList.forEach(item => {
                    let app = getAppName($this.appList, item.getAppId())
                    let osStr = app.os === 1 ? "🤖" : "";
                    let title = app.label + osStr

                    if(item.getNewIncome() > 0){
                        newArr.push({
                            title: title,
                            val1: item.getNewIncome() / 100
                        })
                    }

                    if(item.getTotalIncome()>0){
                        totalArr.push({
                            title: title,
                            val1: item.getTotalIncome() / 100
                        })
                    }

                    if(item.getNewUser()>0){
                        userArr.push({
                            title: title,
                            val1: item.getNewUser()
                        })
                    }

                    if(item.getGoogleIncome()>0 || item.getAppleIncome()>0 || item.getOtherIncome()>0){
                        channelArr.push({
                            title: title,
                            val1: item.getGoogleIncome() / 100,
                            val2: item.getAppleIncome() / 100,
                            val3: item.getOtherIncome() / 100
                        })
                    }
                })
                console.log("userArr:"+userArr)
                $this.$set($this.userDate, 'data', userArr)
                ++$this.newUserKey
                $this.incomeData.data = newArr
                ++$this.incomeKey
                $this.totalDate.data = totalArr
                ++$this.totalKey
                $this.channelData.data = channelArr
                ++$this.channelKey

                let activeList = result.getHourlyActivesList()
                $this.handleActiveData(activeList)
                ++$this.activeKey
                $this.listLoading = false
            });

        },
        handleSearch(){
            let date = this.search.date
            this.search.startAt = this.startUnix(date)
            this.search.endAt = this.endUnix(date)
            return this.search
        },
        handleActiveData(statList){
            let data = []
            statList.forEach((item, index) => {
                this.activeData.keys.push(index + ":00")
                data.push(item)
            })
            this.activeData.values.push(data)
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
@import "../../assets/less/home";
</style>
