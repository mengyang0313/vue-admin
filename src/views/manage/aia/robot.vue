<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('editRobot', '')">+ 新增机器人</el-button>
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
                            <el-form-item label="状态" >
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
                            <el-form-item label="机器人ID">
                                <el-input v-model="search.robotId" placeholder="机器人ID"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">筛选</el-button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <el-button type="danger" @click="onSubmit">重置</el-button>
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
                <el-table-column prop="robotId" label="机器人ID" align="center" width="200" />
                <el-table-column prop="status" label="状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.forbid"/>
                    </template>
                </el-table-column>
                <el-table-column prop="country" label="国家" align="center" width="150" />
                <el-table-column prop="nickname" label="昵称" align="center" width="300"/>
                <el-table-column prop="photo" label="头像" align="center" width="150">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.photo" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="data" label="资料" align="center" width="150">
                    <template slot-scope="scope">
                        <a @click="toDialog('editRobot', scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column prop="words" label="话术" align="center" width="150">
                    <template slot-scope="scope">
                        <a @click="toDialog('editRobot', scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('editRobot', scope.row)">编辑资料</el-button>
                        <el-button type="text">
                            <router-link :to="{path:'./edit-words',query: {robotId: scope.row.robotId, nickname: scope.row.nickname}}">编辑话术</router-link>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>

            <!-- 编辑资料 -->
            <editRobot ref="editRobot"/>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import editRobot from './dialog/edit-robot'
import { areaData, apps } from '@/dict/index'

export default {
    components: { Pagination, apps, editRobot},
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
            let url = process.env.VUE_APP_JSON_URI + "/robot.json"
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
