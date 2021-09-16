<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <template>
                    <el-form-item label="主播Id">
                        <el-input v-model="search.anchorId" placeholder="主播Id"/>
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
                    <el-form-item label="地区">
                        <el-select v-model="search.areaId" placeholder="请选择">
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
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">查  询</el-button>
                    </el-form-item>
                </template>
            </el-form>

            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">实时</el-menu-item>
                <el-menu-item index="2">上周</el-menu-item>
            </el-menu>

            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="anchorId" label="主播ID" align="center" />
                <el-table-column prop="startAt" label="统计时间" align="center"/>
                <el-table-column prop="onlineDuration" label="在线时长" align="center"/>
                <el-table-column prop="inCall" label="来电数" align="center"  />
                <el-table-column prop="outCall" label="呼出数" align="center"/>
                <el-table-column prop="answer" label="接听数" align="center/>
                <el-table-column prop="answer30" label="通话时间30s" align="center"/>
                <el-table-column prop="answer50" label="通话时间50s" align="center"/>
                <el-table-column prop="duration" label="通话时长" align="center"/>
                <el-table-column prop="callIncome" label="通话收入" align="center"/>
                <el-table-column prop="giftIncome" label="礼物收入" align="center"/>
                <el-table-column prop="commissionIncome" label="用户充值分成" align="center"/>
                <el-table-column prop="adjustIncome" label="奖惩收入" align="center"/>
                <el-table-column prop="expense" label="消耗贡献" align="center"/>
                <el-table-column prop="income" label="充值贡献" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import {getAreaList, getAnchorLevel, getArrName } from "@/utils/common";


export default {
    components: { Pagination },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                level: undefined,
                anchorId: undefined,
                settleAtTime: new Date(new Date().format('yyyy-MM-dd')),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            isSubmit: false,
            activeIndex: 1,
            areaList: getAreaList(),
            levelList: getAnchorLevel()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.home.getAnchorStat(this.handleParam(), function (result){
                const list = result.getStatsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "startAt" : new Date(item.getStartAt() * 1000).format('yyyy-MM-dd'),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "anchorId" : item.getAnchorId(),
                        "onlineDuration" : item.getOnlineDuration(),
                        "inCall" : item.getInCall(),
                        "outCall" : item.getOutCall(),
                        "answer" : item.getAnswer(),
                        "answer30" : item.getAnswer30(),
                        "answer50" : item.getAnswer50(),
                        "duration" : item.getDuration(),
                        "callIncome" : item.getCallIncome(),
                        "giftIncome" : item.getGiftIncome(),
                        "commissionIncome" : item.getCommissionIncome(),
                        "adjustIncome" : item.getAdjustIncome(),
                        "expense" : item.getExpense(),
                        "income" : item.getIncome()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        handleParam(){
            let param = this.search;
            if (typeof(this.search.settleAtTime) != "undefined"){
                param.statAt = this.search.settleAtTime.getTime() / 1000
            }
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
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
        handleSelect(key, keyPath) {
            switch (key){
                case '1':
                    break;
                case '2':
                    break;
            }
        }
    }
}
</script>

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
