<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addSysAccount', '')">+ 新增管理帐号</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <template>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="区域">
                                <el-select v-model="search.area" placeholder="请选择">
                                    <el-option v-for="item in areaList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
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
                <el-table-column prop="id" label="编号" align="center" width="50"/>
                <el-table-column prop="email" label="邮箱" align="center" width="300"/>
                <el-table-column prop="name" label="真实姓名" align="center" width="200"/>
                <el-table-column prop="areaStr" label="绑定的区域" align="center" width="250"/>
                <el-table-column prop="enable" label="状态" align="center" width="200">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addSysAccount', scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 编辑资料 -->
            <addSysAccount ref="addSysAccount" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import addSysAccount from './dialog/add-sys-account'
import {getAreaList, getArrName} from '@/utils/dist'


export default {
    components: { Pagination, addSysAccount},
    data() {
        return {
            listLoading: true,
            search: {
                uid: undefined,
                app: undefined,
                robotId: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            isSubmit: false,
            areaList : getAreaList(true),
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
            this.$service.admin.getAdminList(this.search, function (result){
                const list = result.getAdminsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "enable" : item.getEnable(),
                        "email" : item.getEmail(),
                        "password" : item.getPassword(),
                        "passwordNew": "",
                        "name" : item.getName(),
                        "note" : item.getNote(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "app_ids" : item.getAppIdsList(),
                        "modules" : item.getModules(),
                        "login_at" : item.getLoginAt(),
                        "login_ip" : item.getLoginIp(),
                        "fail_count" : item.getFailCount(),
                        "access_token" : item.getAccessToken(),
                        "updated_at" : item.getUpdatedAt(),
                        "created_at" : item.getCreatedAt()
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            })
        },
        onSearch() {
            this.search.currentPage = 1
            this.fetchData()
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
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
