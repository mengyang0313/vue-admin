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
                    <ChartsLine :data="userData" v-if="userData.values" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="callingData" v-if="callingData.values" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="callData" v-if="callData.values" class="data-chart"/>
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
import {getAreaList, getCurrentUserAreaId} from "@/utils/dist";

export default {
    name: 'Home',
    components: {CountTo, ChartsBar, ChartsBarLine, ChartsLine},
    data() {
        return {
            search: {
                areaId: getCurrentUserAreaId()
            },
            areaList: getAreaList(true),
            userData: {
                title: '实时用户',
                legend: ['在线用户', '新用户', '付费用户', '空闲主播', '通话主播'],
                keys: [],
                values: undefined
            },
            callingData: {
                title: '实时通话',
                legend: ['AIB发起', '用户发起', '主播发起'],
                keys: [],
                values: undefined
            },
            callData: {
                title: '实时呼叫',
                legend: ['整体呼叫', 'AIB呼叫', '用户呼叫', '主播呼叫'],
                keys: [],
                values: undefined
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
                $this.handleCallingData(statList)
                $this.handleCallData(statList)
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
            statList.forEach((item, index) => {
                let startAt = item.getStartAt()
                keys.push(new Date(startAt * 1000).format("HH:mm"))
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
        },
        handleCallingData(statList){
            let keys = []
            let values = []
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
            values.push(aiCalling)
            values.push(userCalling)
            values.push(anchorCalling)

            this.callingData.keys = keys
            this.callingData.values = values
        },
        handleCallData(statList){
            let keys = []
            let values = []
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
            values.push(aiCall)
            values.push(userCall)
            values.push(anchorCall)

            this.callData.keys = keys
            this.callData.values = values
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
