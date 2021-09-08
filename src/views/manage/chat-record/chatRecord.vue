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
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="用户Id">
                            <el-input v-model="search.userId" placeholder="用户Id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="主播Id">
                            <el-input v-model="search.anchorId" placeholder="主播Id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="发送时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="search.createdStart" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="search.createdEnd" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="APP">
                            <el-select v-model="search.app" placeholder="请选择">
                                <el-option v-for="item in appList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="地区">
                            <el-select v-model="search.areaId" placeholder="请选择">
                                <el-option v-for="item in areaData"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="关键词">
                            <el-input v-model="search.keyword" placeholder="关键词"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="消息类型">
                            <el-select v-model="search.type" placeholder="请选择">
                                <el-option v-for="item in messageTypeList"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="search-box">
                        <el-form-item>
                            <el-button @click="onSearch('searchForm')" type="primary" size="small" style="width: 150px;">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
                            <el-button @click="resetForm('searchForm')" size="small" style="width: 150px;margin-left: 250px">重&nbsp;&nbsp;&nbsp;&nbsp;置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
                <el-table-column prop="appStr" label="来源App" align="center" width="120" />
                <el-table-column prop="userId" label="用户id" align="center" width="120" />
                <el-table-column prop="directionStr" label="消息方向" align="center" width="120"/>
                <el-table-column prop="anchorId" label="主播id" align="center" width="120" />
                <el-table-column prop="type" label="消息类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.type }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="text" label="私信内容" align="center"  />
                <el-table-column prop="sendAt" label="发送时间" align="center" width="220"/>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('conversation',scope.row)">查看对话</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

            <!-- 对话 弹出栏 -->
            <conversation ref="conversation"/>

        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import conversation from './dialog/conversation'
import { areaData, apps, msgTypes } from '@/dict/index'
import {getAppList, getAreaList, getMessageType, getArrName} from "@/utils/common";

export default {
    components: { Pagination, conversation },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: undefined,
                userId: undefined,
                anchorId: undefined,
                appId: undefined,
                direction: 0,
                type: undefined,
                keyword: undefined,
                createdStart: undefined,
                createdEnd: undefined,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreaList(),
            appList: getAppList(),
            messageTypeList: getMessageType()
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
            this.$service.chat.getChatMessageList(this.handleParam(), function (result){
                const list = result.getMessagesList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "appStr" : getArrName($this.appList, item.getAppId()),
                        "userId" : item.getUserId(),
                        "direction" : item.getDirection(),
                        "directionStr" : item.getDirection() === 1 ? "<--" : "-->",
                        "anchorId" : item.getAnchorId(),
                        "type" : getMessageType(item.getType()),
                        "text" : item.getText(),
                        "uri" : item.getUri(),
                        "sendAt" : new Date(item.getSendAt()*1000).format('yyyy-MM-dd hh:mm:ss')
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        handleParam(){
            let param = this.search;
            if (typeof(this.search.createdStart) != "undefined"){
                param.createdStartUint = this.search.createdStart.getTime() / 1000
            }
            if (typeof(this.search.createdEnd) != "undefined"){
                param.createdEndUint = this.search.createdEnd.getTime() / 1000
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
                this.$refs[component].init(row);
            })
        },
        //重置
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
