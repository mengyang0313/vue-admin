<template>
    <div class="home-wrapper">
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

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">整体收入</el-menu-item>
            <el-menu-item index="2">新增收入</el-menu-item>
            <el-menu-item index="3">整体付费率</el-menu-item>
            <el-menu-item index="4">新增付费率</el-menu-item>
            <el-menu-item index="5">新增用户数</el-menu-item>
            <el-menu-item index="6">在线主播数</el-menu-item>
            <el-menu-item index="7">活跃的付费用户数</el-menu-item>
            <el-menu-item index="8">电话接通率</el-menu-item>
            <el-menu-item index="9">平均通话时长</el-menu-item>
        </el-menu>

        <el-row class="date-box" :gutter="30">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}">
                    <ChartsLine :data="overallData" ref="chartsLine" class="data-chart"/>
                </el-card>
            </el-col>
        </el-row>
        <el-card shadow="always" style="padding-top: 30px;padding-bottom: 50px">
        <!-- 表格栏 -->
        <el-table
            ref="multipleTable"
            v-loading="listLoading"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            size="medium"
        >
            <el-table-column prop="uid" label="日期" align="center" width="150" />
            <el-table-column prop="nickname" label="产品" align="center" width="200" />
            <el-table-column prop="unionname" label="地区" align="center" width="220" />
            <el-table-column prop="balance" label="活跃用户" align="center" width="120"/>
            <el-table-column prop="settle" label="整体收入" align="center" width="120"/>
            <el-table-column prop="call" label="整体付费率" align="center" width="120"/>
            <el-table-column prop="gift" label="vip付费率" align="center" width="120"/>
            <el-table-column prop="other" label="ARPU" align="center" width="120"/>
            <el-table-column prop="reward" label="ARPPU" align="center"/>
        </el-table>
        <!-- 分页栏 -->
        <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                    @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsLine from '../../../components/Charts/ChartsLine'
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'

export default {
    name: 'Home',
    components: {CountTo, ChartsLine, Pagination},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: this.initQuery(),
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            activeIndex: '1',
            currentDate: {},
            overallData: {
                title: '整体收入',
                legend: ['整体收入'],
                keys: ['7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19'],
                values: [
                    [820, 932, 901, 934, 1290, 1330, 1320, 1520, 820, 750]
                ]
            },
            incData: {
                title: '新增收入',
                legend: ['新增收入'],
                keys: ['7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19'],
                values: [
                    [120, 232, 101, 534, 290, 130, 120, 2120, 720, 550]
                ]
            },
            overallPaidData: {
                title: '整体付费率',
                legend: ['整体付费率'],
                keys: ['7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19'],
                values: [
                    [8.2, 9.3, 9.1, 9.34, 12.90, 13.30, 13.20, 15.20, 8.20, 7.50]
                ]
            },
            incPaidData: {
                title: '新增付费率',
                legend: ['新增付费率'],
                keys: ['7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19'],
                values: [
                    [11.2, 21.3, 3.1, 13.34, 15.90, 19.30, 9.20, 5.20, 8.20, 2.50]
                ]
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            this.handleSelect(this.activeIndex,this.activeIndex)
            this.fetchData()
        },
        handleSelect(key, keyPath) {
            this.currentDate = {}
            switch (key){
                case '1':
                    this.currentDate = this.overallData
                    break;
                case '2':
                    this.currentDate = this.incData
                    break;
                case '3':
                    this.currentDate = this.overallPaidData
                    break;
                case '4':
                    this.currentDate = this.incPaidData
                    break;
            }
            this.$refs.chartsLine.init(this.currentDate);
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/settle.json"
            // 获取数据列表接口
            getTableList(this.listQuery, url).then(res => {
                const data = res.data
                if (data.code === 0) {
                    this.total = data.data.total
                    this.tableData = data.data.list
                    this.listLoading = false
                }
            }).catch(() => {
                this.listLoading = false
            })
        },
        // 查询数据
        onSearch() {
            this.listQuery.currentPage = 1
            this.fetchData()
        },
        initQuery() {
            return {
                uid: undefined,
                app: undefined,
                currentPage: 1,
                pageSize: 10
            }
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
