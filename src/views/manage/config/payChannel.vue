<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addPayChannel', '')">+ 新增支付</el-button>
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
                <el-form-item label="支付方式" prop="areaId">
                    <el-select v-model="search.payType" placeholder="请选择">
                        <el-option v-for="item in payTypeList"
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
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="osTypeStr" label="系统类型" align="center" width="120"/>
                <el-table-column prop="channel" label="支付渠道" align="center" width="120"/>
                <el-table-column prop="payTypeStr" label="支付方式" align="center" width="150"/>
                <el-table-column prop="title" label="渠道名称" align="center" width="150"/>
                <el-table-column prop="name" label="渠道名称" align="center" width="150" />
                <el-table-column prop="icon" label="支付平台图标" align="center" width="150">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.icon" :preview-src-list="[scope.row.icon]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="discount" label="折扣" align="center" width="120" />
                <el-table-column prop="sort" label="排序" align="center" width="120" />
                <el-table-column prop="note" label="备注" align="center" width="320" />
                <el-table-column label="操作" align="center" width="180" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addPayChannel',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('delPay',scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 更新 弹出栏 -->
            <addPayChannel ref="addPayChannel" @fetchData="fetchData"/>


        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addPayChannel from './dialog/addPayChannel'
import {getAreaList, getArrName, getPayType, getOsType, getCurrentUserAreaId} from "@/utils/dist";

export default {
    components: { Pagination, imageShow, addPayChannel },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                payType: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaList: getAreaList(true),
            payTypeList: getPayType()
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaList[1].value : this.authAreaId
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.config.getPayChannelList(this.search, function (result){
                const list = result.getChannelsList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "osType" : item.getOsType(),
                        "osTypeStr" : getOsType(item.getOsType()),
                        "channel" : item.getChannel(),
                        "payType" : item.getPayType(),
                        "payTypeStr" : getPayType(item.getPayType()),
                        "title" : item.getTitle(),
                        "name" : item.getName(),
                        "icon" : item.getIcon(),
                        "enable" : item.getEnable(),
                        "discount" : item.getDiscount(),
                        "sort" : item.getSort(),
                        "note" : item.getNote(),
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
