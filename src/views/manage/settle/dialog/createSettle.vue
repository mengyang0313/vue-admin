<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <!-- 查询栏 -->
        <el-form
            ref="searchForm"
            :model="search"
            label-width="100px"
        >
            <el-form-item label="地区">
                <el-select v-model="search.areaId" placeholder="请选择">
                    <el-option v-for="item in areaList"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="结算时间">
                <el-date-picker v-model="search.settleAtTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="最小余额">
                <el-input-number v-model="search.minBalance" min="1"/>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="onSearch">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>

import {getAreaList, getArrName} from "@/utils/common";

export default {
    data() {
        return {
            dialogVisible: false,
            search: {
                areaId: 1,
                settleAtTime: new Date(new Date().format('yyyy-MM-dd')),
                minBalance: 100
            },
            areaList: getAreaList()
        }
    },
    methods: {
        init(row){

        },
        onSearch() {
            let $this = this
            let param = this.search;
            param.settleAt = this.search.settleAtTime.getTime() / 1000
            this.$service.settle.createSettleRecord(param, function (result){
                if(result){
                    $this.$message.success("预结算生成成功!")
                    $this.$emit('createSettleRecord', {areaId: $this.search.areaId, settleAt: $this.search.settleAtTime});
                    $this.dialogVisible = false
                }else{
                    $this.$message.error("预结算生成失败!")
                }
            });
        },
        closeDialog() {
            this.dialogVisible = false
        }
    }
}
</script>

