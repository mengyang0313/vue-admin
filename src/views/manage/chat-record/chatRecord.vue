<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="listQuery"
                label-width="90px"
                class="search-form"
            >
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="发送方Id">
                            <el-input v-model="listQuery.formUid" placeholder="发送方Id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="接收方Id">
                            <el-input v-model="listQuery.toUid" placeholder="接收方Id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="日期">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="listQuery.registeredTime1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="listQuery.registeredTime2" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="APP">
                            <el-select v-model="listQuery.app" placeholder="请选择">
                                <el-option v-for="item in apps"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
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
                        <el-form-item label="内容">
                            <el-input v-model="listQuery.content" placeholder="内容"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="消息类型">
                            <el-select v-model="listQuery.msgType" placeholder="请选择">
                                <el-option v-for="item in msgTypes"
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
                <el-table-column prop="app" label="来源App" align="center" width="120" />
                <el-table-column prop="fromUid" label="发送方Id" align="center" width="120" />
                <el-table-column prop="toUid" label="接收方Id" align="center" width="120" />
                <el-table-column prop="msgType" label="消息类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.msgType }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sendTime" label="发送时间" align="center" width="220"/>
                <el-table-column prop="content" label="私信内容" align="center"  />
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('conversation',scope.row)">查看对话</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                        @pagination="fetchData"/>

            <!-- 对话 弹出栏 -->
            <conversation ref="conversation"/>

        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import conversation from './dialog/conversation'
import { areaData, apps, msgTypes } from '@/dict/index'

export default {
    components: { Pagination, conversation },
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
            areaData,
            apps,
            msgTypes
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/msgs.json"
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
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        initQuery() {
            return {
                formUid: undefined,
                toUid: undefined,
                registeredTime1: undefined,
                registeredTime2: undefined,
                app: undefined,
                content: undefined,
                msgType: undefined,
                area: undefined,
                currentPage: 1,
                pageSize: 10
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
