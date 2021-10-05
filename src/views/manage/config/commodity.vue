<template>
    <div class="table-classic-wrapper">
        <Hints :hidden="isHints">
            <template slot="hintName"> 配置 < {{ search.appName }} > 商品</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addCommodity', '')">+ 新增商品</el-button>
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
                    <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应用" prop="appId">
                    <el-select v-model="search.appId" placeholder="请选择">
                        <el-option v-for="item in appList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span v-if="item.os === 1">
                                <i class="icon-android-fill" style="float: right"></i>
                            </span>
                            <span v-else-if="item.os === 2">
                                <i class="icon-pingguo" style="float: right"></i>
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否为订阅">
                    <el-switch v-model="search.isSubscription"/>
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
                <el-table-column prop="title" label="商品名称" align="center" width="150" />
                <el-table-column prop="name" label="商品名称(客户端)" align="center" width="150" />
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="app" label="APP" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                <i class="icon-android-fill"></i>
                            </span>
                            <span v-else-if="scope.row.app.os === 2">
                                <i class="icon-pingguo"></i>
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="sku" label="sku" align="center" width="190" />
                <el-table-column prop="price" label="价格" align="center" width="120" />
                <el-table-column prop="discount" label="客户端显示折扣" align="center" width="120" />
                <el-table-column prop="icon" label="图标" align="center" width="120">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.icon" :preview-src-list="[scope.row.icon]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="充值数量" align="center" width="120" />
                <el-table-column prop="bonus" label="奖励数量" align="center" width="120" />
                <el-table-column prop="isFirstReward" label="是否首次双倍" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.isFirstReward" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="vipDays" label="vip天数" align="center" width="120" />
                <el-table-column prop="sort" label="排序" align="center" width="120" />
                <el-table-column label="操作" align="center" width="180" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addCommodity',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('delPay',scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 新增商品 弹出栏 -->
            <addCommodity ref="addCommodity" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addCommodity from './dialog/addCommodity'
import Hints from '../../../components/Hints'
import {
    getAreaList,
    getAppList,
    getPayType,
    getAppName,
    getArrName,
    getAppListByAreaId,
    getCurrentUserAreaId
} from "@/utils/dist";

export default {
    components: { Pagination, Hints, imageShow, addCommodity },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                appId: undefined,
                isSubscription: false,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            isHints: true,
            areaList: getAreaList(),
            payTypeList: getPayType(),
            appList: getAppList()
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[1].value : this.authAreaId
        this.search.appId = typeof(this.search.appId) == "undefined" ? this.appList[1].value : this.search.appId
        this.changeArea(this.search.areaId)
        this.fetchData()
    },
    watch: {
        $route: {
            handler() {
                if (typeof(this.$route.query.appId) !== "undefined"){
                    this.search.appId = Number(this.$route.query.appId)
                    this.search.areaId = Number(this.$route.query.areaId)
                    this.search.appName = this.$route.query.appName
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
            this.$service.config.getCommodityList(this.search, function (result){
                const list = result.getCommoditiesList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "enable" : item.getEnable(),
                        "title" : item.getTitle(),
                        "name": item.getName(),
                        "sku" : item.getSku(),
                        "price" : item.getPrice(),
                        "currency" : item.getCurrency(),
                        "discount" : item.getDiscount(),
                        "icon" : item.getIcon(),
                        "amount" : item.getAmount(),
                        "bonus" : item.getBonus(),
                        "isSubscription" : item.getIsSubscription(),
                        "vipDays" : item.getVipDays(),
                        "sort" : item.getSort()
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        handleAreaNames(areaIds){
            let names = []
            this.areaList.forEach(item => {
                if(areaIds.indexOf(item.value)>=0){
                    names.push(item.label)
                }
            })
            return names
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
        },
        changeArea(val){
            this.appList = getAppListByAreaId(val, true)
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
