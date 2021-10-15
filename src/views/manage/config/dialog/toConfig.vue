<template>
    <el-dialog :title="appName" :visible.sync="dialogVisible" append-to-body :before-close="closeDialog">
        <el-button v-for="item in areaList" :key="item.value" :label="item.label" :value="item.value" >
            <router-link type="text" :to="{path: uri,query: {appId: appId, areaId: item.value,appName: appName,os: os}}">{{ item.label }}</router-link>
        </el-button>
    </el-dialog>
</template>

<script>
import {getAreaList} from "@/utils/dist";

export default {
    data() {
        return {
            areaList:[],
            appId: undefined,
            appName: undefined,
            uri: undefined,
            os: undefined,
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            let arr = []
            getAreaList(true).forEach(item => {
                if(row.areaIds.indexOf(item.value) >= 0){
                    arr.push(item)
                }
            })
            this.areaList = arr
            this.appId = row.id
            this.appName = row.app.label
            this.os = row.app.os
            this.uri = row.uri
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
.el-dialog {
    width: 30%;
}
</style>
