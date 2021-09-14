<template>
    <div class="home-wrapper">
        <div class="date-row">
            <div v-for="(item, index) in cardInfoData" :key="index" class="data-col">
                <el-card shadow="always" :body-style="{padding: '0px'}">
                    <div class="date-block">
                        <div class="date-cont">
                            <div v-if="item.num === 3" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="3000"/>
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count2" :duration="3000"/>
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count3" :duration="3000"/>
                            </div>
                            <div v-else-if="item.num === 2" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="3000"/>
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count2" :duration="3000"/>
                            </div>
                            <div v-else-if="item.num === 1" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="3000"/>
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
                            <el-form-item label="地区">
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
                                <el-button type="danger" @click="onSubmit" icon="el-icon-refresh">刷 新</el-button>
                        </el-form-item>
                        </template>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBarLine :data="incomeData" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBarLine :data="totalDate" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBar title="新增用户" :data="userDate" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="activeData" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>


        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsBar title="充值渠道" :data="channelData" class="data-chart"/>
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
import {getAreaList} from "@/utils/common"

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            search: {
                areaId: 1,
                date: new Date(new Date().format('yyyy-MM-dd')),
                startAt: undefined,
                endAt: undefined
            },
            areaList: getAreaList(),
            cardInfoData: [],
            incomeData: {
                title: '新增收入',
                legend: ['新增收入'],
                data: [
                    {title: 'Mon', val1: 782},
                    {title: 'Tue', val1: 382},
                    {title: 'Wed', val1: 482},
                    {title: 'Thu', val1: 582},
                    {title: 'Fri', val1: 982},
                    {title: 'Sat', val1: 382},
                    {title: 'Sun', val1: 282}
                ]
            },
            totalDate: {
                title: '全部收入',
                legend: ['总收入'],
                data: [
                    {title: 'Mon', val1: 782},
                    {title: 'Tue', val1: 382},
                    {title: 'Wed', val1: 482},
                    {title: 'Thu', val1: 582},
                    {title: 'Fri', val1: 982},
                    {title: 'Sat', val1: 382},
                    {title: 'Sun', val1: 282}
                ]
            },
            userDate: {
                title: '新增用户',
                legend: ['新增用户'],
                data: [
                    {title: 'Mon', val1: 782},
                    {title: 'Tue', val1: 382},
                    {title: 'Wed', val1: 482},
                    {title: 'Thu', val1: 582},
                    {title: 'Fri', val1: 982},
                    {title: 'Sat', val1: 382},
                    {title: 'Sun', val1: 282}
                ]
            },
            activeData: {
                title: '活跃用户',
                legend: ['活跃用户'],
                keys: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
                values: [
                    [120, 132, 101, 134, 90, 230, 210]
                ]
            },
            userData: {
                Mon: 782,
                Tue: 925,
                Wed: 1196,
                Thu: 812,
                Fri: 328,
                Sat: 222,
                Sun: 1080
            },
            channelData: {
                title: '充值渠道',
                legend: ['google', 'apple', '其他'],
                data: [
                    {title: 'Mon', val1: 782, val2: 100, val3: 200},
                    {title: 'Tue', val1: 382, val2: 100, val3: 200},
                    {title: 'Wed', val1: 482, val2: 100, val3: 200},
                    {title: 'Thu', val1: 582, val2: 100, val3: 200},
                    {title: 'Fri', val1: 982, val2: 100, val3: 200},
                    {title: 'Sat', val1: 382, val2: 100, val3: 200},
                    {title: 'Sun', val1: 282, val2: 100, val3: 200},
                ]
            }
        }
    },
    created() {
        this.initCard()
        this.initData()
    },
    methods: {
        initCard(){
            const $this = this
            this.$service.home.getOverview(this.search, function (result){
                let inc = {
                    title: '大盘实时收入', num: 2, count: result.getIncome(), count2: result.getPayCount()
                }
                let user = {
                    title: '新增/活跃用户', num: 2, count: result.getNewUser(), count2: result.getActiveUser()
                }
                let anchor = {
                    title: '通话/在线主播', num: 2, count: result.getBusyAnchor(), count2: result.getOnlineAnchor()
                }
                let review = {
                    title: '待审核主播/profile/视频', num: 3, count: result.getReviewAnchor(), count2: result.getReviewProfile(), count3: result.getReviewVideo()
                }
                let amount = {
                    title: '新充值/消费/总余额', num: 3, count: result.getNewAmount(), count2: result.getExpenseAmount(), count3: result.getTotalAmount()
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
            this.$service.home.getHomeStat(this.search, function (result){
                let appStatArr = result.getStatsList()
                appStatArr.forEach(item => {
                    $this.handleNewIncomeData(item);
                    $this.handleTotalIncomeData(item);
                    $this.handleUserData(item);
                    $this.handleChannelData(item);
                })
            });
        },
        handleNewIncomeData(appStat){
            let json = {
                    title: appStat.getName(),
                    val1: appStat.getNewIncome()
                }
            this.incomeData.data.push(json)
        },
        handleTotalIncomeData(appStat){
            let json = {
                    title: appStat.getName(),
                    val1: appStat.getTotalIncome()
                }
            this.totalDate.data.push(json)
        },
        handleUserData(activeArr){
            let data = []
            activeArr.forEach((item, index) => {
                this.activeData.keys.push(index + ":00")
                data.push(item)
            })
            this.activeData.data.push(data)
        },
        handleActiveData(appStat){
            let json = {
                    title: appStat.getName(),
                    val1: appStat.getNewUser()
                }
            this.totalDate.data.push(json)
        },
        handleChannelData(appStat){
            let json =  {
                    title: appStat.getName(),
                    val1: appStat.getGoogleIncome(),
                    val2: appStat.getAppleIncome(),
                    val3: appStat.getOtherIncome()
                }
            this.channelData.data.push(json)
        }

        // incomeData: {
        //     title: '新增收入',
        //     legend: ['钻石收益', 'vip收益', '全部收入', '新增付费率'],
        //     data: [
        //         {title: 'Mon', val1: 782, val2: 82, val3: 18.2, val4: 8.2},
        //         {title: 'Tue', val1: 382, val2: 82, val3: 1.2, val4: 11.2},
        //         {title: 'Wed', val1: 482, val2: 82, val3: 5.2, val4: 11.2},
        //         {title: 'Thu', val1: 582, val2: 82, val3: 21.2, val4: 9.2},
        //         {title: 'Fri', val1: 982, val2: 82, val3: 2.2, val4: 5.2},
        //         {title: 'Sat', val1: 382, val2: 82, val3: 32.2, val4: 6.2},
        //         {title: 'Sun', val1: 282, val2: 82, val3: 5.2, val4: 9.2},
        //     ]
        // },
        // totalDate: {
        //     title: '全部收入',
        //     legend: ['充钻收入', 'vip收益', '全部收入', '新增付费率'],
        //     data: [
        //         {title: 'Mon', val1: 782, val2: 82, val3: 18.2, val4: 8.2},
        //         {title: 'Tue', val1: 382, val2: 82, val3: 1.2, val4: 11.2},
        //         {title: 'Wed', val1: 482, val2: 82, val3: 5.2, val4: 11.2},
        //         {title: 'Thu', val1: 582, val2: 82, val3: 21.2, val4: 9.2},
        //         {title: 'Fri', val1: 982, val2: 82, val3: 2.2, val4: 5.2},
        //         {title: 'Sat', val1: 382, val2: 82, val3: 32.2, val4: 6.2},
        //         {title: 'Sun', val1: 282, val2: 82, val3: 5.2, val4: 9.2},
        //     ]
        // },
    }
}
</script>

<style lang="less">
@import "../../assets/less/home";
</style>
