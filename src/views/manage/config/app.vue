<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addApp', '')">+ 新增应用</el-button>
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
                    <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
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
                <el-table-column prop="id" label="应用Id" align="center" width="150" />
                <el-table-column prop="appStr" label="应用APP" align="center" width="120">
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
                <el-table-column prop="appKey" label="应用key" align="center" width="190" />
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="isAnchor" label="是否为主播端" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.isAnchor" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="areaNames" label="启用的区域" align="center" width="120" />
                <el-table-column prop="bundleId" label="包名" align="center" width="150" :show-overflow-tooltip="true"/>
                <el-table-column prop="storeCred" label="store cred"  align="center" width="170" :show-overflow-tooltip="true" />
                <el-table-column prop="apiAddr" label="api地址" align="center" width="170" :show-overflow-tooltip="true"/>
                <el-table-column prop="note" label="备注" align="center" width="120" :show-overflow-tooltip="true"/>
                <el-table-column label="操作" align="center" width="220" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('toConfig', scope.row, './commodity')">配置商品</el-button>
                        <el-button type="text" @click="toDialog('toConfig', scope.row, './signin')">配置签到</el-button>
                        <el-button type="text" @click="toDialog('toConfig', scope.row, './vip')">配置VIP</el-button>
                        <el-button type="text" @click="toDialog('version', scope.row)">版本</el-button>
                        <el-button type="text" @click="toDialog('addApp', scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('delPay', scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 新增应用 弹出栏 -->
            <addApp ref="addApp" @fetchData="fetchData"/>

            <toConfig ref="toConfig" @fetchData="fetchData"/>

            <version ref="version" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addApp from './dialog/addApp'
import addPay from './dialog/addPayChannel'
import version from './dialog/version'
import toConfig from './dialog/toConfig'
import {getAreaList, getAppList, getPayType, getAppName, getCurrentUserAreaId, getAppListByAreaId} from "@/utils/dist";

export default {
    components: { Pagination, imageShow, addPay, version, toConfig, addApp },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaList: getAreaList(true),
            payTypeList: getPayType(),
            appList: []
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[1].value : this.authAreaId
        this.changeArea(this.search.areaId)
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.config.getAppList(this.search, function (result){
                const list = result.getAppsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getId()),
                        "appKey" : item.getAppKey(),
                        "enable" : item.getEnable(),
                        "title" : item.getTitle(),
                        "osType": item.getOsType(),
                        "isAnchor" : item.getIsAnchor(),
                        "bundleId" : item.getBundleId(),
                        "storeCred" : item.getStoreCred(),
                        "apiAddr" : item.getApiAddr(),
                        "note" : item.getNote(),
                        "areaIds" : item.getAreaIdsList(),
                        "areaNames" : $this.handleAreaNames(item.getAreaIdsList()).join(", ")
                    }
                    data.push(json)
                })
                $this.total = 10
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
            this.search.page.currentPage = 1
            this.fetchData()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        toDialog(component, row, uri){
            if(typeof(uri) !== "undefined"){
                row.uri = uri
            }
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
