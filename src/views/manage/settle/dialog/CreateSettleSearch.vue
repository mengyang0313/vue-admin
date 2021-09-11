<!--
<template>
    <el-dialog title="查看对话" :visible.sync="dialogVisible" append-to-body width="20%" :before-close="handleClose">
        中国.香港
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        &lt;!&ndash; 查询栏 &ndash;&gt;
        <el-form
            ref="searchForm"
            :inline="true"
            :model="search"
            label-width="90px"
            class="search-form"
        >
            <el-form-item label="地区">
                <el-select v-model="search.area" placeholder="请选择">
                    <el-option v-for="item in areaData"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="结算时间">
                <el-date-picker v-model="search.date" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="主播ID">
                <el-input v-model="search.minBalance" placeholder="主播ID"/>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>

export default {
    data() {
        return {
            dialogVisible: false,
            search: {
                areaId: 1,
                settleAt: undefined,
                minBalance: 100
            }
        }
    },
    methods: {
        init(uid){
        }
    }
}
</script>

-->
