<template>
    <el-dialog title="账户状态" :visible.sync="dialogVisible" append-to-body width="80%" :before-close="handleClose">
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
                    <el-table-column prop="time" label="时间" align="center"/>
                    <el-table-column prop="status" label="状态" align="center" width="200">
                        <template slot-scope="scope">
                            <div slot="reference">
                                <el-tag size="medium">{{ scope.row.status }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="event" label="事件" align="center" width="300"/>
                    <el-table-column prop="reason" label="原因" align="center"/>
                </el-table>
                <!-- 分页栏 -->
                <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                            @pagination="fetchData"/>
            </el-card>
        </div>
    </el-dialog>
</template>

<script>
import { getTableList } from '../../../../api/api'
import Pagination from '../../../../components/Pagination'

export default {
    name: 'Table',
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: {},
            // 数据总条数
            total: 0,
            dialogVisible: false
        }
    },
    methods: {
        init(uid){
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = "http://localhost:8000/data/account-status-list.json"
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
        }
    }
}
</script>

<style lang="less">

</style>
