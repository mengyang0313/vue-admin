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
                        <template>
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="地区">
                                        <el-select v-model="search.area" placeholder="请选择">
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
                    <ChartsLine :data="userData" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="callData" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="call2Data" class="data-chart"/>
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

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            search: {},
            userData: {
                title: '实时用户',
                legend: ['在线用户', '新用户', '付费用户', '空闲主播', '通话主播'],
                keys: ['14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40'],
                values: [
                    [820, 932, 901, 934, 1290, 1330, 1320, 1520, 820, 750]
                    [120, 132, 101, 134, 90, 230, 210, 250, 280, 320],
                    [350, 232, 201, 154, 190, 330, 410, 310, 210, 150],
                    [120, 132, 150, 334, 390, 330, 320, 250, 280, 290],
                    [90, 120, 150, 210, 220, 190, 170, 180, 190, 111],
                ]
            },
            callData: {
                title: '实时通话',
                legend: ['实时通话', 'AIB发起', '用户发起', '主播发起'],
                keys: ['14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40'],
                values: [
                    [20, 32, 91, 34, 90, 130, 20, 50, 80, 70],
                    [20, 32, 11, 14, 9, 20, 10, 50, 20, 30],
                    [50, 32, 21, 54, 90, 30, 40, 30, 10, 50],
                    [20, 32, 15, 34, 30, 30, 30, 20, 80, 90],
                ]
            },
            call2Data: {
                title: '实时呼叫',
                legend: ['整体呼叫', 'AIB呼叫', '用户呼叫', '主播呼叫'],
                keys: ['14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40'],
                values: [
                    [20, 32, 91, 34, 90, 130, 20, 50, 80, 70],
                    [20, 32, 11, 14, 9, 20, 10, 50, 20, 30],
                    [50, 32, 21, 54, 90, 30, 40, 30, 10, 50],
                    [20, 32, 15, 34, 30, 30, 30, 20, 80, 90],
                ]
            }
        }
    }
}
</script>

<style lang="less">
@import "../../../assets/less/home";
</style>
