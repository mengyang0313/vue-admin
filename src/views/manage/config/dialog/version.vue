<template>
    <el-dialog title="版本" :visible.sync="dialogVisible" append-to-body width="80%" :before-close="closeDialog">
        <div class="table-classic-wrapper dialog-list">
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
                            <span v-else>
                            <i class="icon-pingguo"></i>
                        </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="code" label="版本号" align="center" width="90" />
                <el-table-column prop="name" label="版本名称" align="center" width="200">
                    <template slot-scope="{row}">
                        <template v-if="row.editable">
                            <el-input v-model="row.name" style="width: 140px;"/>
                            <el-button class="cancel-btn" type="text" @click="cancelEdit(row)">取消</el-button>
                        </template>
                        <span v-else>{{ row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="enable" label="是否启用" align="center" width="90">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="inReview" label="是否审核中" align="center" width="90">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.inReview" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="note" label="备注" align="center" >
                    <template slot-scope="{row}">
                        <template v-if="row.editable">
                            <el-input v-model="row.note" style="width: 420px;"/>
                            <el-button class="cancel-btn" type="text" @click="cancelEdit(row)">取消</el-button>
                        </template>
                        <span v-else>{{ row.note }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="创建时间" align="center" width="200"/>
                <el-table-column label="操作" align="center" width="150">
                    <template slot-scope="{row}">
                        <el-button type="text" @click="enable(row)">启用</el-button>
                        <el-button v-if="row.editable" type="text" size="small" @click="confirmEdit(row)">保存
                        </el-button>
                        <el-button v-else type="text" size="small" @click="row.editable = !row.editable">编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>
        </div>
    </el-dialog>
</template>

<script>
import Pagination from '../../../../components/Pagination'
import {getAppList, getAppName, getAreaList, getMessageType} from "@/utils/common";

export default {
    name: 'Table',
    components: { Pagination },
    data() {
        return {
            listLoading: true,
            search: {
                appId: undefined,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            tableData: {},
            total: 0,
            dialogVisible: false,
            areaData: getAreaList(),
            appList: getAppList(),
            messageTypeList: getMessageType()
        }
    },
    methods: {
        init(row){
            this.search.appId = row.id;
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.config.getVersionList(this.search, function (result){
                const list = result.getVersionsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "osType" : item.getOsType(),
                        "code" : item.getCode(),
                        "name" : item.getName(),
                        "enable" : item.getEnable(),
                        "inReview" : item.getInReview(),
                        "note" : item.getNote(),
                        "editable" : false
                    }
                    data.push(json)
                })
                $this.total = list.length
                $this.tableData = data
                $this.listLoading = false
            })
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        enable(row){
            row.enable = true
        },
        cancelEdit(row) {
            row.hobby = row.originalHobby
            row.editable = false
        },
        confirmEdit(row) {
            row.editable = false
            row.originalHobby = row.hobby
            const $this = this
            this.$service.config.saveVersion(row, function (result){
                if (result) {
                    $this.$message.success("保存成功!")
                } else {
                    $this.$message.error("保存失败!")
                }
            });
        }
    }
}
</script>

<style lang="less">
.dialog-list{
    padding: 20px;
}

</style>
