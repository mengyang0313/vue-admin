<template>
    <div class="home-wrapper">
        <div class="date-row">
            <div v-for="(item, index) in cardInfoData" :key="index" class="data-col">
                <el-card shadow="always" :body-style="{padding: '0px'}">
                    <div class="date-block">
                        <i :class="[ item.icon ]" :style="{ background: item.color }" class="icon-box"/>
                        <div class="date-cont">
                            <div v-if="item.count2" style="display: inline">
                                <CountTo class="count-min" :start-val="0" :end-val="item.count" :duration="3000"/>
                                /<CountTo class="count-min" :start-val="0" :end-val="item.count2" :duration="3000"/>
                            </div>
                            <div v-else style="display: inline">
                                <CountTo class="count" :start-val="0" :end-val="item.count" :duration="3000"/>
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
                        :model="listQuery"
                        label-width="90px"
                        class="search-form"
                    >
                        <template>
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="地区">
                                        <el-select v-model="listQuery.area" placeholder="请选择">
                                            <el-option v-for="item in areaData"
                                                       :key="item.value"
                                                       :label="item.label"
                                                       :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="产品" >
                                        <el-select v-model="listQuery.area" placeholder="请选择">
                                            <el-option v-for="item in areaData"
                                                       :key="item.value"
                                                       :label="item.label"
                                                       :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="时间">
                                        <el-select v-model="listQuery.area" placeholder="请选择">
                                            <el-option v-for="item in areaData"
                                                       :key="item.value"
                                                       :label="item.label"
                                                       :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-button type="danger" @click="onSubmit" icon="el-icon-refresh">刷 新</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
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
                    <ChartsBar title="新增用户" :data="channelData" class="data-chart"/>
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

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            listQuery: {},
            cardInfoData: [
                {title: '大盘实时收入', icon: 'vue-dsn-icon-dianji', count: 28102, color: '#2d8cf0'},
                {title: '今日新增/活跃用户', icon: 'vue-dsn-icon-xinzeng', count: 15890,count2: 56250, color: '#19be6b'},
                {title: '今日主播活跃/总数', icon: 'vue-dsn-icon-xinfeng', count: 248,count2: 18250, color: '#ff9900'},
                {title: '待审核内容', icon: 'vue-dsn-icon-dianzan', count: 2500, color: '#e46cbb'},
                {title: '今日钻石消耗', icon: 'vue-dsn-icon-heart', count: 2304, color: '#9a66e4'}
            ],
            incomeData: {
                title: '新增收入',
                legend: ['钻石收益', 'vip收益', '全部收入', '新增付费率'],
                data: [
                    {title: 'Mon', val1: 782, val2: 82, val3: 18.2, val4: 8.2},
                    {title: 'Tue', val1: 382, val2: 82, val3: 1.2, val4: 11.2},
                    {title: 'Wed', val1: 482, val2: 82, val3: 5.2, val4: 11.2},
                    {title: 'Thu', val1: 582, val2: 82, val3: 21.2, val4: 9.2},
                    {title: 'Fri', val1: 982, val2: 82, val3: 2.2, val4: 5.2},
                    {title: 'Sat', val1: 382, val2: 82, val3: 32.2, val4: 6.2},
                    {title: 'Sun', val1: 282, val2: 82, val3: 5.2, val4: 9.2},
                ]
            },
            totalDate: {
                title: '全部收入',
                legend: ['充钻收入', 'vip收益', '全部收入', '新增付费率'],
                data: [
                    {title: 'Mon', val1: 782, val2: 82, val3: 18.2, val4: 8.2},
                    {title: 'Tue', val1: 382, val2: 82, val3: 1.2, val4: 11.2},
                    {title: 'Wed', val1: 482, val2: 82, val3: 5.2, val4: 11.2},
                    {title: 'Thu', val1: 582, val2: 82, val3: 21.2, val4: 9.2},
                    {title: 'Fri', val1: 982, val2: 82, val3: 2.2, val4: 5.2},
                    {title: 'Sat', val1: 382, val2: 82, val3: 32.2, val4: 6.2},
                    {title: 'Sun', val1: 282, val2: 82, val3: 5.2, val4: 9.2},
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
            channelData: {
                Mon: 782,
                Tue: 925,
                Wed: 1196,
                Thu: 812,
                Fri: 328,
                Sat: 222,
                Sun: 1080
            }
        }
    }
}
</script>

<style lang="less">
@import "../../assets/less/home";
</style>
