<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addArea', '')">+ 新增区域</el-button>
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
                <el-table-column prop="id" label="ID" align="center" width="120" />
                <el-table-column prop="title" label="标题" align="center" width="120" />
                <el-table-column prop="name" label="名称" align="center" width="200" />
                <el-table-column prop="countries" label="区域覆盖的国家" align="center" width="200" />
                <el-table-column prop="lang" label="语言" align="center" width="120" />
                <el-table-column prop="enable" label="是否启用" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="创建时间" align="center"/>
<!--                <el-table-column label="操作" align="center" width="250" fixed="right">-->
<!--                    <template slot-scope="scope">-->
<!--                        <el-button type="text" @click="toDialog('addArea', scope.row)">参数配置</el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 参数配置 弹出栏 -->
            <addAreaConfig ref="addAreaConfig" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>

import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import addAreaConfig from './dialog/addAreaConfig'
import {toTime} from "@/utils/util";


export default {
    components: { Pagination, imageShow, addAreaConfig },
    data() {
        return {
            listLoading: true,
            search: {
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            tableData: [],
            isCollapse: true
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.area.getAreaList(this.search, function (result){
                const list = result.getAreasList()
                const data = []
                list.forEach((item, index) => {
                    const json = {
                        "id" : item.getId(),
                        "title" : item.getTitle(),
                        "name" : item.getName(),
                        "countries" : item.getCountriesList(),
                        "lang" : item.getLang(),
                        "enable" : item.getEnable(),
                        "createdAt" : toTime(item.getCreatedAt()),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            });
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
