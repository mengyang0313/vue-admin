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
                <el-form-item label="工会ID">
                    <el-input v-model="search.id" placeholder="工会ID"/>
                </el-form-item>
                <el-form-item label="地区">
                    <el-select v-model="search.areaId" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否启用">
                    <el-switch v-model="search.enable"/>
                </el-form-item>
                <el-form-item style="padding-left: 20px">
                    <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                </el-form-item>
            </el-form>
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('edit', '')">+ 新增工会</el-button>
            </div>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="id" label="工会ID" align="center" width="70" />
                <el-table-column prop="name" label="工会名称" align="center" width="250" />
                <el-table-column prop="areaStr" label="地区" align="center" width="120" />
                <el-table-column prop="anchorCount" label="主播数" align="center" width="120"/>
                <el-table-column prop="enable" label="状态" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-switch v-model="scope.row.enable" disabled/>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="创建时间" align="center" width="250"/>
                <el-table-column prop="note" label="备注" align="center" width="220"/>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('edit', scope.row)">编辑</el-button>
                        <el-button type="text" @click="toDialog('close', scope.row)">关闭</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

            <!-- 新增或编辑 -->
            <edit ref="edit" @fetchData="fetchData"/>

            <!-- 关闭 -->
            <close ref="close"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import edit from './dialog/edit'
import close from './dialog/close'
import {getAreaList, getBool, getArrName} from "@/utils/common";



export default {
    components: { Pagination, edit, close },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                id: undefined,
                areaData: undefined,
                enable: true,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            areaData : getAreaList(),
            boolDict : getBool()
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
            this.$service.guild.getGuildList(this.search, function (result){
                const list = result.getGuildsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "name" : item.getName(),
                        "inviteCode" : item.getInviteCode(),
                        "anchorCount" : item.getAnchorCount(),
                        "enable" : item.getEnable(),
                        "note" : item.getNote(),
                        "createdAt" : new Date(item.getCreatedAt() * 1000).format('yyyy-MM-dd hh:mm:ss'),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            })
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
