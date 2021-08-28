<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="no" label="编号" align="center" width="100"/>
                <el-table-column prop="nickname" label="昵称" align="center" width="300"/>
                <el-table-column prop="photo" label="头像" align="center" width="300">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.photo" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="在线状态" align="center" width="200">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.status }}</el-tag>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('dataInfo', scope.row)">查看资料</el-button>
                        <el-button type="text" @click="passed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="text" @click="refuse(scope.$index, scope.row)">拒绝</el-button>
                        <el-button type="text" @click="history(scope.$index, scope.row)">审核历史</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                        @pagination="fetchData"/>

            <!-- 资料详情 -->
            <dataInfo ref="dataInfo"/>

            <el-dialog
                title="拒绝"
                :visible.sync="refuseVisible"
                :append-to-body="true">
                <div class="content-item">
                    <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                        <el-form-item label="拒绝理由：" prop="reason">
                            <el-input
                                v-model="form.reason"
                                type="textarea"
                                :autosize="{ minRows: 3, maxRows: 5 }"
                                placeholder="请输入内容"
                                maxlength="50"
                                show-word-limit
                            />
                        </el-form-item>

                        <el-form-item class="submit-box">
                            <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                            <el-button @click="resetForm('form')">重&nbsp;&nbsp;&nbsp;置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>

            <el-dialog
                title="审核历史"
                :visible.sync="historyVisible"
                :append-to-body="true">
                <!-- 表格栏 -->
                <el-table
                    ref="multipleTable"
                    v-loading="listLoading"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    size="medium"
                >
                    <el-table-column prop="time" label="日期" align="center"/>
                    <el-table-column prop="status" label="审核状态" align="center" width="200"/>
                    <el-table-column prop="reason" label="拒绝原因" align="center"/>
                </el-table>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
import { getTableList } from '../../../api/api'
import Pagination from '../../../components/Pagination'
import dataInfo from './dialog/dataInfo'

export default {
    name: 'Table',
    components: { Pagination, dataInfo },
    data() {
        return {
            form: {

            },
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: {},
            // 数据总条数
            total: 0,
            infoVisible: false,
            refuseVisible: false,
            historyVisible: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        init(uid){
            console.log("init uid:" + uid);
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/data-list.json"
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
        showInfo(row){
            this.infoVisible = true
        },
        refuse(row) {
            this.refuseVisible = true
        },
        history(row){
            this.historyVisible = true
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        // 通过
        passed(index, row) {
            console.log(index, row)
            this.$confirm('是否通过?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已通过!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        handleClose(){
            this.dialogVisible = false
        }
    }
}
</script>

<style lang="less">
.video-player-wrapper {
    .content-box {
        height: 440px;
    }

    .content-item {
        padding: 8px 0;

        .video-js {
            .vjs-big-play-button {
                top: 45%;
                left: 45%;
                font-size: 2em;
            }
        }
    }
}
</style>
