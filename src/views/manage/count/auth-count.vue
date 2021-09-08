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
                <template>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="UID">
                                <el-input v-model="search.robotId" placeholder="UID"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="主播等级">
                                <el-select v-model="search.area" placeholder="请选择">
                                    <el-option v-for="item in areaData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="地区">
                                <el-select v-model="search.area" placeholder="请选择">
                                    <el-option v-for="item in areaData"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">查  询</el-button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </el-form-item>
                        </el-col>
                    </el-row>
                </template>
            </el-form>

            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">实时</el-menu-item>
                <el-menu-item index="2">上周</el-menu-item>
            </el-menu>

            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="uid" label="主播ID" align="center" width="200" />
                <el-table-column prop="optName" label="昵称" align="center" width="350"/>
                <el-table-column prop="opt" label="在线状态" align="center"  />
                <el-table-column prop="area" label="今日在线时长" align="center" width="150"/>
                <el-table-column prop="sysAccount" label="管理员帐号" align="center" width="200"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import { areaData, apps } from '@/dict/index'


export default {
    components: { Pagination, apps},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: this.initQuery(),
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            activeIndex: 1,
            areaData,
            apps
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = process.env.VUE_APP_JSON_URI + "/sys-log.json"
            // 获取数据列表接口
            getTableList(this.search, url).then(res => {
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
        //重置
        resetForm() {
            this.search = this.initQuery();
        },
        handleSelect(key, keyPath) {
            switch (key){
                case '1':
                    break;
                case '2':
                    break;
            }
        },
        initQuery() {
            return {
                uid: undefined,
                app: undefined,
                robotId: undefined,
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
