<template>
    <el-dialog title="导入数据" :visible.sync="dialogVisible" width="80%" :before-close="closeDialog">
        <el-card shadow="always">
            <UploadExcel @on-success="handleSuccess" />
            <div align="center" class="importButton">
                <el-button @click="onImport" type="primary" size="small" style="width: 120px;">导&nbsp;&nbsp;入</el-button>
            </div>
            <el-table
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column v-for="item in tableHeader" :key="item" :prop="item" :label="item" align="center" />
            </el-table>
        </el-card>
    </el-dialog>
</template>

<script>
import UploadExcel from '@/components/UploadExcel'
import Hints from '@/components/Hints'

export default {
    components: { UploadExcel, Hints },
    data() {
        return {
            dialogVisible: false,
            tableHeader: [],
            tableData: [],
            recordsArr: []
        }
    },
    methods: {
        init(row){},
        handleSuccess({ header, results }) {
            this.tableHeader = header
            this.tableData = results
            results.forEach((item, index) => {
                this.recordsArr[index] = {
                    id: item.ID,
                    adjustment: item["手动调整数额"]
                }
            })
        },
        onImport(){
            if(this.recordsArr.length === 0){
                this.$message.error("数据为空!")
                return
            }
            this.$emit('importSuccess', {arr: this.recordsArr});
            this.closeDialog()
        },
        closeDialog() {
            this.dialogVisible = false
        }
    }
}
</script>

<style lang="less">
.import-excel-wrapper {
    .el-card {
        min-height: 400px;
    }
    .search-form {
        padding-top: 18px;
        margin-bottom: 15px;
        background-color: #f7f8fb;
    }
    .el-table thead {
        font-weight: 600;
        th{
            background-color: #f2f3f7;
        }
    }
    .el-dialog__body {
        padding: 15px 5px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
    }
    .upload-excel-wrapper {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-bottom: 10px;
    }

}
.importButton{
    margin-bottom: 10px;
}
</style>

