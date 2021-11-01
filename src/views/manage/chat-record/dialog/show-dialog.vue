<template>
    <el-dialog title="对话" :visible.sync="dialogVisible" append-to-body width="70%" :before-close="closeDialog">
        <div class="table-classic-wrapper" style="padding-bottom: 20px">
                <!-- 表格栏 -->
                <el-table
                    ref="multipleTable"
                    v-loading="listLoading"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    size="medium"
                >
                    <el-table-column prop="app" label="来源App" align="center" width="120">
                        <template scope="scope">
                            <div slot="reference">
                                {{ scope.row.app.label }}
                                <span v-if="scope.row.app.os === 1">
                                    <i class="icon-android-fill"></i>
                                </span>
                                <span v-else-if="scope.row.app.os === 2">
                                    <i class="icon-pingguo"></i>
                                </span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="userId" label="用户id" align="center" width="120" />
                    <el-table-column prop="directionStr" label="消息方向" align="center" width="120"/>
                    <el-table-column prop="anchorId" label="主播id" align="center" width="120" />
                    <el-table-column prop="type" label="消息类型" align="center" width="120">
                        <template scope="scope">
                            <div slot="reference">
                                <el-tag size="medium">{{ scope.row.type }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="text" label="私信内容" align="center"  />
                    <el-table-column prop="sendAt" label="发送时间" align="center" width="220"/>
                </el-table>
                <!-- 分页栏 -->
                <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                            @pagination="fetchData"/>
        </div>
    </el-dialog>
</template>

<script>
import Pagination from '../../../../components/Pagination'
import {getAppList, getAppName, getAreaList, getMessageType} from "@/utils/dist";
import {toTime} from "@/utils/util";

export default {
    name: 'Table',
    components: { Pagination },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: undefined,
                userId: undefined,
                anchorId: undefined,
                appId: undefined,
                direction: 0,
                type: undefined,
                keyword: undefined,
                createdStart: undefined,
                createdEnd: undefined,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            tableData: {},
            total: 0,
            dialogVisible: false,
            areaData: getAreaList(true),
            appList: getAppList(),
            messageTypeList: getMessageType()
        }
    },
    methods: {
        init(row){
            this.search.userId = row.userId;
            this.search.anchorId = row.anchorId;
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.chat.getChatMessageList(this.handleParam(), function (result){
                const list = result.getMessagesList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "userId" : item.getUserId(),
                        "direction" : item.getDirection(),
                        "directionStr" : item.getDirection() === 1 ? "<--" : "-->",
                        "anchorId" : item.getAnchorId(),
                        "type" : getMessageType(item.getType()),
                        "text" : item.getText(),
                        "uri" : item.getUri(),
                        "sendAt" : toTime(item.getSendAt())
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        handleParam(){
            let param = this.search;
            return param
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
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
