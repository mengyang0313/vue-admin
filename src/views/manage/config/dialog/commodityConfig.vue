<template>
    <el-dialog title="" :visible.sync="dialogVisible" append-to-body :before-close="closeDialog">
        <el-button v-for="item in areaList" :key="item.value" :label="item.label" :value="item.value" @click="closeDialog">
            <router-link :to="{path:'./commodity',query: {appId: appId, areaId: item.value,appName: appName}}">{{ item.label }}</router-link>
        </el-button>
    </el-dialog>
</template>

<script>
import {getAreaList} from "@/utils/common";

export default {
    data() {
        return {
            areaList:[],
            appId: undefined,
            appName: undefined,
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            let arr = []
            getAreaList().forEach(item => {
                if(row.areaIds.indexOf(item.value) >= 0){
                    arr.push(item)
                }
            })
            this.areaList = arr
            this.appId = row.id
            this.appName = row.app.label
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.iconArr = []
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        }
    }
}
</script>

<style lang="less">
.el-dialog {
    width: 30%;
}
</style>
