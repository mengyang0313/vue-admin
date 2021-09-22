<template>
    <el-dialog title="近似值配置" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="近似值配置" prop="exchangeRate">
                    <el-button type="warning" @click="addApproximation">新增</el-button>
                </el-form-item>
                <el-form-item label=""
                              class="approximation"
                              v-for="(item, index) in form.approximationArr"
                              :key="item.key"
                >
                    <el-input size="medium" placeholder="下限" v-model="item.lowValue"/>&nbsp;
                    <el-input size="small" placeholder="上限" v-model="item.highValue"/>&nbsp;
                    <el-input size="mini" placeholder="目标值" v-model="item.targetValue"/>&nbsp;
                    <el-button @click.prevent="removeApproximation(item)">删除</el-button>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>

import {Approximation} from "@/proto/js/usertype_pb";

export default {
    data() {
        return {
            form: {
                approximations: undefined,
                approximationArr: []
            },
            row: { },
            payChannelList:[],
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.row = row
            this.form.approximations = row.approximations
            this.form.approximations.forEach(item => {
                this.form.approximationArr.push({
                    lowValue: item.getLowValue(),
                    highValue: item.getHighValue(),
                    targetValue: item.getTargetValue()
                })
            })
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = $this.handleParam();
                    this.$service.config.saveCountryConfig(param, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
                        }
                    });
                }
            })
        },
        handleParam(){
            let approximations = []
            this.form.approximationArr.forEach(item => {
                let struct = new Approximation()
                struct.setLowValue(item.lowValue)
                struct.setHighValue(item.highValue)
                struct.setTargetValue(item.targetValue)
                approximations.push(struct)
            });
            this.row.approximations = approximations
            return this.row
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.iconArr = []
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        addApproximation() {
            this.form.approximationArr.push({
                lowValue: '',
                highValue: '',
                targetValue: '',
                key: Date.now()
            });
        },
        removeApproximation(item) {
            let index = this.form.approximationArr.indexOf(item)
            if (index !== -1) {
                this.form.approximationArr.splice(index, 1)
            }
        }
    }
}
</script>

<style lang="less">
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.approximation{
    .el-input {
        width: 20%;
    }
}

.form-list-wrapper {
    .form-list {
        width: 80%;
        margin: 0 auto;

        .el-rate {
            line-height: 2;
        }

        > .el-form-item {
            margin-bottom: 22px;

            .line {
                text-align: center;
            }

            .tip-title {
                text-align: right;
                color: #606266;
            }
        }

        .submit-box {
            margin-top: 35px;
            margin-left: 0;
            text-align: center;
        }
    }
}
</style>
