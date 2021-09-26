<template>
    <div class="table-classic-wrapper">
        <Hints>
            <template slot="hintName"> 编辑 < {{ search.nickname }} > 话术</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addRobotMessage', '')">+ 新增话术</el-button>
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
                <el-table-column prop="robotId" label="机器人ID" align="center" width="120" />

                <el-table-column prop="type" label="类型" align="center" width="100"/>
                <el-table-column prop="text" label="内容" align="center" width="350" />
                <el-table-column prop="uri" label="连接" align="center" width="150">
                    <template slot-scope="scope">
                        <a :href="scope.row.url" style="color: #1E88C7">{{ scope.row.fileName }}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="thumb" label="图片" align="center" width="150">
                    <template slot-scope="scope">
                        <el-image v-if="scope.row.thumb!=''" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" align="center" width="150"/>
                <el-table-column prop="enable" label="状态" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="interval" label="间隔时间" align="center" width="150"/>
                <el-table-column prop="action" label="动作类型" align="center" width="150"/>
            </el-table>
            <!-- 分页栏
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
            -->
            <!-- 新增话术 -->
            <addRobotMessage ref="addRobotMessage" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import addRobotMessage from './dialog/add-robot-message'
import Hints from '../../../components/Hints'
import {getActionType} from "@/utils/dist";

export default {
    name: 'Table',
    components: {Pagination, Hints, addRobotMessage},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                robotId: undefined,
                anchorId: "",
                nickname: "",
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 新增/编辑 弹出框显示/隐藏
            formVisible: false,
        }
    },
    created() {
        this.search.robotId = this.$route.query.robotId
        this.search.nickname = this.$route.query.nickname
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.robot.getRobotMessageList(this.search, function (result){
                const list = result.getMessagesList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "robotId" : item.getAnchorId(),
                        "type" : getActionType(item.getType()),
                        "text" : item.getText(),
                        "uri" : item.getUri(),
                        "thumb" : item.getThumb(),
                        "sort" : item.getSort(),
                        "aid": "aid",
                        "enable": item.getEnable(),
                        "interval": item.getInterval(),
                        "action": item.getAction()
                    }
                    data.push(json)
                })
                // $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSubmit() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(this.search.robotId)
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
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
