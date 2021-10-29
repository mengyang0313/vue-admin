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
                            <el-form-item label="区域">
                                <el-select v-model="searchCount.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                                    <el-option v-for="item in areaList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间" prop="date">
                                <el-date-picker
                                    v-model="searchCount.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSearch">查  询</el-button>
                            </el-form-item>
                        </template>
                    </el-form>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selItem">
                        <el-menu-item index="1">AIB接通率</el-menu-item>
                        <el-menu-item index="2">接通率</el-menu-item>
                    </el-menu>

                    <ChartsLine :data="aibData" ref="chartsLine" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>


        <el-card shadow="always" style="padding-top: 30px;padding-bottom: 50px">
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <template>
                    <el-form-item label="主播Id">
                        <el-input v-model="search.anchorId" type="number" placeholder="主播Id"/>
                    </el-form-item>
                    <el-form-item label="主播等级">
                        <el-select v-model="search.level" placeholder="请选择">
                            <el-option v-for="item in levelList"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="区域">
                        <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                            <el-option v-for="item in areaList"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期" prop="settleAt">
                        <el-date-picker
                            v-model="search.settleAtTime"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">查  询</el-button>
                    </el-form-item>
                </template>
            </el-form>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="anchorId" label="主播ID" align="center" width="120"/>
                <el-table-column prop="areaStr" label="区域" align="center" width="120"/>
                <el-table-column prop="startAt" label="统计时间" align="center" width="170"/>
                <el-table-column prop="onlineDuration" label="在线时长" align="center" width="100"/>
                <el-table-column prop="inCall" label="来电数" align="center" width="100"/>
                <el-table-column prop="inCallRatio" label="来电接通率" align="center" width="100"/>
                <el-table-column prop="outCall" label="呼出数" align="center" width="100"/>
                <el-table-column prop="answer" label="接听数" align="center" width="100"/>
                <el-table-column prop="answer10" label="" align="center"/>
                <el-table-column prop="answer30" label="通话30s" align="center" width="100"/>
                <el-table-column prop="answer50" label="通话50s" align="center" width="100"/>
                <el-table-column prop="duration" label="通话时长" align="center" width="100"/>
                <el-table-column prop="callIncome" label="通话收入" align="center" width="100"/>
                <el-table-column prop="giftIncome" label="礼物收入" align="center" width="100"/>
                <el-table-column prop="commissionIncome" label="用户充值分成" align="center" width="100"/>
                <el-table-column prop="adjustIncome" label="奖惩收入" align="center" width="100"/>
                <el-table-column prop="expense" label="消耗贡献" align="center" width="100"/>
                <el-table-column prop="userIncome" label="引导用户充值贡献" align="center" width="100"/>
                <el-table-column label="操作" align="center" width="1" fixed="right">
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsLine from '../../../components/Charts/ChartsLine'
import Pagination from '../../../components/Pagination'
import {
    getAnchorLevel,
    getAppListByAreaId,
    getAppName,
    getAreaList,
    getArrName,
    getCurrentUserAreaId,
} from "@/utils/dist";
import {endUnix, getCurrentDate, startUnix, toDate, toDollar} from "@/utils/util";

export default {
    name: 'Home',
    components: {CountTo, ChartsLine, Pagination},
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                level: undefined,
                anchorId: undefined,
                settleAtTime: getCurrentDate(),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            searchCount: {
                areaId: undefined,
                date: [
                    getCurrentDate(-6),
                    getCurrentDate()
                ],
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            activeIndex: '1',
            fmt: 'hh:mm',
            currentDate: {},
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            levelList: getAnchorLevel(),
            aibData: {
                title: 'AIB接通率',
                legend: ['AIB接通率'],
                values: []
            },
            anchorData: {
                title: '接通率',
                legend: ['接通率'],
                values: []
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            this.search.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
            this.changeArea(this.search.areaId)
            this.fetchData()
            this.initCount()
        },
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            let param = this.search;
            param.statAt = startUnix(new Date(this.search.settleAtTime))
            if (typeof(this.search.anchorId) != "undefined"){
                param.anchorId = parseInt(this.search.anchorId)
            }
            this.$service.home.getAnchorStat(param, function (result){
                const list = result.getStatsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "startAt" : toDate(item.getStartAt()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "anchorId" : item.getAnchorId(),
                        "onlineDuration" : $this.formatSeconds(item.getOnlineDuration()),
                        "inCall" : item.getInCall(),
                        "inCallRatio": $this.toRatio(item.getAnswer(), item.getInCall()) + "%",
                        "outCall" : item.getOutCall(),
                        "answer" : item.getAnswer(),
                        "answer30" : item.getAnswer30(),
                        "answer50" :item.getAnswer50(),
                        "duration" : $this.formatSeconds(item.getDuration()),
                        "callIncome" : item.getCallIncome(),
                        "giftIncome" : item.getGiftIncome(),
                        "commissionIncome" : item.getCommissionIncome(),
                        "adjustIncome" : item.getAdjustIncome(),
                        "expense" : item.getExpense(),
                        "userIncome" : item.getUserIncome()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        initCount(){
            const $this = this
            let param = this.search;
            let date = new Date(this.search.settleAtTime)
            param.startAt = startUnix(date)
            param.endAt = endUnix(date)
            this.$service.home.getAreaStat(param, function (result){
                let statList = result.getStatsList()
                let keys = []
                let aib = []
                let anchor = []
                statList.forEach((item, index) => {
                    let startAt = item.getStartAt()
                    keys.push(new Date(startAt * 1000).format("hh:mm"))

                    let aibRatio = $this.toRatio(item.getAiCalling(), item.getAiCall())
                    aib.push(aibRatio)

                    let totalCall = item.getAiCall() + item.getAnchorCall() + item.getAnchorCall()
                    let totalAnswer = item.getUserAnswer() + item.getAnchorAnswer()
                    let anchorRatio = $this.toRatio(totalAnswer, totalCall)
                    anchor.push(anchorRatio)
                })

                //aib接通率
                $this.aibData.keys = keys
                $this.aibData.values = []
                $this.aibData.unit = '%'
                $this.aibData.values.push(aib)

                //主播接通率
                $this.anchorData.keys = keys
                $this.anchorData.values = []
                $this.anchorData.unit = '%'
                $this.anchorData.values.push(anchor)

                $this.selItem($this.activeIndex)
            });
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
            this.initCount()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        resetForm() {
            this.search = this.initQuery();
        },
        selItem(key) {
            this.currentDate = {}
            switch (key){
                case '1':
                    this.currentDate = this.aibData
                    break;
                case '2':
                    this.currentDate = this.anchorData
                    break;
            }
            this.activeIndex = key
            this.$refs.chartsLine.init(this.currentDate);
        },
        formatSeconds(value) {
            let result = parseInt(value)
            let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
            let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
            let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));

            let res = '';
            if(m !== '00') res += `${h}:${m}`;
            return res;
        },
        toRatio(num, total){
            num = parseFloat(num);
            total = parseFloat(total);
            if (isNaN(num) || isNaN(total)) {
                return 0;
            }
            return total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00);
        },
        toAve(num, total){
            if (total === 0) {
                return num
            }else {
                return Math.round(num / total)
            }
        },
        changeArea(val){
            this.appList = getAppListByAreaId(val, true, true)
        }
    }
}
</script>

<style lang="less">
@import "../../../assets/less/home";
</style>
<style lang="less">
.table-classic-wrapper {
    .el-card {
        min-height: 656px;
    }

    .control-btns {
        margin-bottom: 20px;
    }

    .search-form {
        padding-top: 18px;
        margin-bottom: 15px;
        background-color: #f7f8fb;
    }

    .el-table thead {
        font-weight: 600;

        th {
            background-color: #f2f3f7;
        }
    }

    .dialog-form {
        .el-input {
            width: 380px;
        }
        .footer-item {
            margin-top: 50px;
            text-align: right;
        }
    }
    .el-divider--horizontal{
        width: 95%;
        margin-left: 20px;
        margin-right: 20px;
    }
    .search-box {
        margin-left: 0;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px
    }
}
</style>
