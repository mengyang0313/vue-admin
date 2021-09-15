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
                    <ChartsLine :data="userData" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="callingData" class="data-chart"/>
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
            userData: {
                title: '实时用户',
                legend: ['在线用户', '新用户', '付费用户', '空闲主播', '通话主播'],
                keys: [],
                values: [
                    // [820, 932, 901, 934, 1290, 1330, 1320, 1520, 820, 750]
                    // [120, 132, 101, 134, 90, 230, 210, 250, 280, 320],
                    // [350, 232, 201, 154, 190, 330, 410, 310, 210, 150],
                    // [120, 132, 150, 334, 390, 330, 320, 250, 280, 290],
                    // [90, 120, 150, 210, 220, 190, 170, 180, 190, 111],
                ]
            },
            callingData: {
                title: '实时通话',
                legend: ['AIB发起', '用户发起', '主播发起'],
                keys: [],
                values: [
                    // [20, 32, 91, 34, 90, 130, 20, 50, 80, 70],
                    // [20, 32, 11, 14, 9, 20, 10, 50, 20, 30],
                    // [50, 32, 21, 54, 90, 30, 40, 30, 10, 50],
                    // [20, 32, 15, 34, 30, 30, 30, 20, 80, 90],
                ]
            },
            callData: {
                title: '实时呼叫',
                legend: ['整体呼叫', 'AIB呼叫', '用户呼叫', '主播呼叫'],
                keys: [],
                values: [
                    // [20, 32, 91, 34, 90, 130, 20, 50, 80, 70],
                    // [20, 32, 11, 14, 9, 20, 10, 50, 20, 30],
                    // [50, 32, 21, 54, 90, 30, 40, 30, 10, 50],
                    // [20, 32, 15, 34, 30, 30, 30, 20, 80, 90],
                ]
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
                $this.handleUserData(statList)
            });
        },
        handleUserData(statList){
            let keys = []
            let onlineUser = []
            let newUser = []
            let payUser = []
            let idleAnchor = []
            let busyAnchor = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                onlineUser.push(item.getOnlineUser())
                newUser.push(item.getNewUser())
                payUser.push(item.getPayUser())
                idleAnchor.push(item.getIdleAnchor())
                busyAnchor.push(item.getBusyAnchor())
            })
            this.userData.keys = keys
            this.userData.values.push(onlineUser)
            this.userData.values.push(newUser)
            this.userData.values.push(payUser)
            this.userData.values.push(idleAnchor)
            this.userData.values.push(busyAnchor)
        },
        handleCallingData(statList){
            let keys = []
            let aiCalling = []
            let userCalling = []
            let anchorCalling = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                aiCalling.push(item.getAiCalling())
                userCalling.push(item.getUserCalling())
                anchorCalling.push(item.getAnchorCalling())
            })
            this.callingData.keys = keys
            this.callingData.values.push(aiCalling)
            this.callingData.values.push(userCalling)
            this.callingData.values.push(anchorCalling)
        },
        handleCallData(statList){
            let keys = []
            let aiCall = []
            let userCall = []
            let anchorCall = []
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
                aiCall.push(item.getAiCall())
                userCall.push(item.getUserCall())
                anchorCall.push(item.getAnchorCall())
            })
            this.callData.keys = keys
            this.callData.values.push(aiCall)
            this.callData.values.push(userCall)
            this.callData.values.push(anchorCall)
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
