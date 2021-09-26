<template>
    <div class="table-classic-wrapper">
        <Hints :hidden="isHints">
            <template slot="hintName"> 配置 < {{ search.areaName }} > 国家</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addCountry', '')">+ 新增国家</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="padding-left: 20px">
                    <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                </el-form-item>
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
                <el-table-column prop="id" label="用户ID" align="center" width="120" />
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="country" label="国家代码" align="center" width="120" />
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="国家名称(后台)" align="center" width="120"/>
                <el-table-column prop="name" label="国家名称(客户端)" align="center" width="150"/>
                <el-table-column prop="currency" label="货币类型" align="center" width="120" />
                <el-table-column prop="icon" label="图标" align="center" width="150">
                    <template scope="scope">
                        <el-image fit="contain" style="width: 50px; height: 50px" :src="scope.row.icon" :preview-src-list="[scope.row.icon]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="exchangeRate" label="汇率" align="center" :show-overflow-tooltip="true" width="150" />
                <el-table-column prop="channelNames" label="启用的支付渠道" align="center" :show-overflow-tooltip="true" width="300" />
                <el-table-column prop="sort" label="排序" align="center" width="120" />
                <el-table-column label="操作" align="center" width="180" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('payConfig',scope.row)">支付配置</el-button>
                        <el-button type="text" @click="toDialog('approximationConfig',scope.row)">近似值</el-button>
                        <el-button type="text" @click="toDialog('addCountry',scope.row)">更新</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 更新 弹出栏 -->
            <addCountry ref="addCountry" @fetchData="fetchData"/>

            <!-- 支付配置 弹出栏 -->
            <payConfig ref="payConfig" @fetchData="fetchData"/>

            <!-- 近似值配置 弹出栏 -->
            <approximationConfig ref="approximationConfig" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import Hints from '../../../components/Hints'
import addCountry from './dialog/addCountry'
import payConfig from './dialog/payConfig'
import approximationConfig from './dialog/approximationConfig'
import {getAreaList, getArrName, getPayType, getPayChannelList} from "@/utils/dist"

export default {
    components: { Pagination, Hints, imageShow, addCountry, payConfig, approximationConfig },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                areaName: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            isHints: true,
            isCollapse: true,
            areaList: getAreaList(),
            payTypeList: getPayType()
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        $route: {
            handler() {
                if (typeof(this.$route.query.areaId) !== "undefined"){
                    let areaId = this.$route.query.areaId
                    this.search.areaId = Number(areaId)
                    this.search.areaName = this.$route.query.areaName
                    this.isHints = false
                    this.fetchData()
                }
            },
            deep: true
        }
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.config.getCountryConfigList(this.search, function (result){
                const list = result.getConfigsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "country" : item.getCountry(),
                        "enable" : item.getEnable(),
                        "title" : item.getTitle(),
                        "name" : item.getName(),
                        "currency" : item.getCurrency(),
                        "icon" : item.getIcon(),
                        "exchangeRate" : item.getExchangeRate(),
                        "approximations" : item.getApproximationsList(),
                        "payChannelIds" : item.getPayChannelIdsList(),
                        "channelNames" : $this.handlePayChannel(item.getAreaId(), item.getPayChannelIdsList()).join(", "),
                        "sort" : item.getSort(),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        handlePayChannel(areaId, ids){
            let channelNames = []
            let channels = getPayChannelList(areaId)
            channels.forEach(item => {
                if(ids.indexOf(item.value) >= 0){
                    channelNames.push(item.label)
                }
            })
            return channelNames;
        },
        onSearch() {
            this.isHints = true
            this.search.page.currentPage = 1
            this.fetchData()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
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
