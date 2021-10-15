<template>
    <div class="table-classic-wrapper">
        <Hints :hidden="isHints">
            <template slot="hintName"> 配置 < {{ search.appName }} <i :class="search.osIcon"></i>> VIP</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addVip', '')">+ 新增vip配置</el-button>
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
                <el-table-column prop="id" label="id" align="center" width="150" />
                <el-table-column prop="areaStr" label="区域" align="center" width="150" />
                <el-table-column prop="app" label="APP" align="center" width="150">
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


                <el-table-column prop="title" label="后台使用名称" align="center" width="190" />
                <el-table-column prop="days" label="天数" align="center" width="120" />
                <el-table-column prop="price" label="价格" align="center" width="120" />
                <el-table-column prop="discount" label="折扣" align="center" width="120" />
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" align="center" width="120" />

                <el-table-column label="操作" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addVip',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('delPay',scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 新增商品 弹出栏 -->
            <addVip ref="addVip" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addVip from './dialog/addVip'
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
    components: { Pagination, Hints, imageShow, addVip },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                appId: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isHints: true,
            areaList: getAreaList(true),
            payTypeList: getPayType(),
            appList: getAppList()
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[1].value : this.authAreaId
        this.search.appId = typeof(this.search.appId) == "undefined" ? this.appList[0].value : this.search.appId
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
                    this.search.osIcon = this.$route.query.os === '1' ? "icon-android-fill" : "icon-pingguo"
                    this.changeArea(this.search.areaId)
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
            this.$service.config.getVipConfig(this.search, function (result){
                const list = result.getConfigsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "title" : item.getTitle(),
                        "days" : item.getDays(),
                        "price": item.getPrice(),
                        "discount" : item.getDiscount(),
                        "enable" : item.getEnable(),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
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
