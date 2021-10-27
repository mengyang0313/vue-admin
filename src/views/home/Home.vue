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
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count3" :duration="1000"/>{{ item.unit }}
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
                    <ChartsBarLine :data="subData" :key="subKey" class="data-chart"/>
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
import {endUnix, getCurrentDate, startUnix, toDollar} from "@/utils/util";

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            listLoading: false,
            search: {
                areaId: undefined,
                date: getCurrentDate(),
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
            subKey: 100,
            incomeData: {
                title: '新增收入',
                name: '',
                legend: ['新增收入'],
                data: []
            },
            subData: {
                title: '订阅收入',
                name: '',
                legend: ['订阅收入'],
                data: []
            },
            totalDate: {
                title: '全部收入',
                name: '',
                legend: ['总收入'],
                data: []
            },
            userDate: {
                title: '新增用户',
                name: '',
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
                let subIncome = result.getSubIncome()
                let income_decimals = 0
                if(income>0){
                    income = toDollar(income)
                    subIncome = toDollar(subIncome)
                    income_decimals = 2
                }
                let inc = {
                    title: '总收入/订阅收入/订单数', num: 3, count: income, count2: subIncome, count3: result.getPayCount(), decimals: income_decimals
                }
                let user = {
                    title: '新增/可通话/活跃用户', num: 3, count: result.getNewUser(), count2: result.getValidUser(), count3: result.getActiveUser(), decimals: 0
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
                let subArr = []
                let totalArr = []
                let userArr = []
                let channelArr = []
                statList.forEach(item => {
                    let app = getAppName($this.appList, item.getAppId())
                    let title = app.label

                    if(item.getNewIncome() > 0){
                        newArr.push({
                            title: title,
                            val1: toDollar(item.getNewIncome()),
                            os: app.os
                        })
                    }

                    if(item.getSubIncome() > 0){
                        subArr.push({
                            title: title,
                            val1: toDollar(item.getSubIncome()),
                            os: app.os
                        })
                    }

                    if(item.getTotalIncome()>0){
                        totalArr.push({
                            title: title,
                            val1: toDollar(item.getTotalIncome()),
                            os: app.os
                        })
                    }

                    if(item.getNewUser()>0){
                        userArr.push({
                            title: title,
                            val1: item.getNewUser(),
                            os: app.os
                        })
                    }

                    if(item.getGoogleIncome()>0 || item.getAppleIncome()>0 || item.getOtherIncome()>0){
                        let googleIncome = toDollar(item.getGoogleIncome())
                        let appleIncome = toDollar(item.getAppleIncome())
                        let otherIncome = toDollar(item.getOtherIncome())
                        channelArr.push({
                            title: title,
                            val1: googleIncome,
                            val2: appleIncome,
                            val3: otherIncome,
                            total: googleIncome + appleIncome + otherIncome,
                            os: app.os
                        })
                    }
                })

                // 新增用户
                $this.userDate.name = "总计:" + $this.countTotal(userArr, 'val1')
                $this.userDate.data = userArr.sort(function(x,y){
                    return y.val1 - x.val1;
                })
                ++$this.newUserKey


                // 订阅收入
                $this.subData.name = "总计:" + $this.countTotal(subArr, 'val1')
                $this.subData.data = subArr.sort(function(x,y){
                    return y.val1 - x.val1;
                })
                ++$this.subKey

                // 新增收入
                $this.incomeData.name = "总计:" + $this.countTotal(newArr, 'val1')
                $this.incomeData.data = newArr.sort(function(x,y){
                    return y.val1 - x.val1;
                })
                ++$this.incomeKey

                // 全部收入
                $this.totalDate.name = "总计:" + $this.countTotal(totalArr, 'val1')
                $this.totalDate.data = totalArr.sort(function(x,y){
                    return y.val1 - x.val1;
                })
                ++$this.totalKey

                // 充值渠道
                $this.channelData.name = "总计:" + $this.countTotal(channelArr, 'total')
                    + "  google:"+ $this.countTotal(channelArr, 'val1')
                    + "  apple:"+ $this.countTotal(channelArr, 'val2')
                    + "  其他:"+ $this.countTotal(channelArr, 'val3')
                $this.channelData.data = channelArr.sort(function(x,y){
                    return y.total - x.total;
                })
                ++$this.channelKey

                let activeList = result.getHourlyActivesList()
                $this.handleActiveData(activeList)
                ++$this.activeKey
                $this.listLoading = false
            });

        },
        handleSearch(){
            let date = this.search.date
            this.search.startAt = startUnix(date)
            this.search.endAt = endUnix(date)
            return this.search
        },
        handleActiveData(statList){
            let keyArr = []
            let valueArr = []
            let data = []
            statList.forEach((item, index) => {
                keyArr.push(index + ":00")
                data.push(item)
            })
            valueArr.push(data)
            this.activeData.keys = keyArr
            this.activeData.values = valueArr
            ++this.activeKey
        },
        countTotal(arr, keyName) {
            let $total = 0;
            $total = arr.reduce(function (total, currentValue, currentIndex, arr){
                return currentValue[keyName] ? (total + currentValue[keyName]) : total;
            }, 0);
            return $total.toFixed(2);
        }
    }
}
</script>

<style lang="less">
@import "../../assets/less/home";
</style>
