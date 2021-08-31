<template>
    <div class="table-classic-wrapper">
        <Hints>
            <template slot="hintName"> 编辑 < {{ robotName }} > 话术</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addWords', '')">+ 新增话术</el-button>
                <el-button type="danger" @click="batchDelete">批量删除</el-button>
            </div>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="robotId" label="机器人ID" align="center" width="150" />
                <el-table-column prop="photo" label="头像" align="center" width="150">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.photo" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="type" label="类型" align="center" width="150"/>
                <el-table-column prop="content" label="内容" align="center" width="350" />
                <el-table-column prop="url" label="连接" align="center" width="150">
                    <template slot-scope="scope">
                        <a :href="scope.row.url" style="color: #1E88C7">{{ scope.row.fileName }}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="url" label="缩略图" align="center" width="150">
                    <template slot-scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.url" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" align="center" width="150"/>
                <el-table-column prop="status" label="状态" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status"/>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>

            <!-- 新增话术 -->
            <addWords ref="addWords"/>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import addWords from './dialog/add-words'
import Hints from '../../../components/Hints'
import { areaData, apps } from '@/dict/index'

export default {
    name: 'Table',
    components: {Pagination, Hints, apps, addWords},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: this.initQuery(),
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 新增/编辑 弹出框显示/隐藏
            formVisible: false,
            // 防止多次连续提交表单
            isSubmit: false,
            robotId: '',
            robotName: '',
            areaData,
            apps
        }
    },
    created() {
        this.robotId = this.$route.query.robotId
        this.robotName = this.$route.query.nickname
        this.fetchData()
    },
    methods: {
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 删除数据
        handleDelete(index, row) {
            console.log(index, row)
            this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 此处可添加--删除接口
                // 删除成功调用fetchData方法更新列表
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 批量删除
        batchDelete() {
            if (this.multipleSelection.length < 1) {
                this.$message({
                    message: '请先选择要删除的数据！',
                    type: 'warning'
                })
            } else {
                this.handleDelete()
            }
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = process.env.VUE_APP_JSON_URI + "/edit-words.json"
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
        onSubmit() {
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

    .upload-box,
    .export-data {
        width: 300px;
        margin: 0 auto 30px;
    }

    .upload-box {
        width: 156px;

        .files-upload {
            color: #20a0ff;
        }
    }

    .hints {
        font-size: 12px;
        color: #aaa;
        text-align: center;
    }
}
</style>
