<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="机器人Id" prop="robotId">
                    <el-input v-model="form.robotId" placeholder="请输入" :disabled="isDisabled"/>
                </el-form-item>
                <el-form-item label="动作类型" prop="type">
                    <el-select v-model="form.action" placeholder="请选择">
                        <el-option v-for="item in actionTypes"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="话术类型" prop="type">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option v-for="item in messageTypes"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="链接：" prop="uri">
                    <el-input placeholder="请输入" v-model="form.uri">
                        <template slot="append">浏览</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="内容" prop="text">
                    <el-input
                        v-model="form.text"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input-number v-model="form.sort" :min="1"></el-input-number>
                </el-form-item>

                <el-form-item label="时间间隔" prop="interval">
                    <el-input-number v-model="form.interval" :min="1"></el-input-number>  秒
                </el-form-item>
                <el-form-item label="是否开启" prop="enable">
                    <el-switch v-model="form.enable"/>
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
import {getActionType, getMessageType} from "@/utils/dist";

export default {
    data() {
        return {
            form: { },
            title: '新增话术',
            dialogVisible: false,
            isDisabled: false,
            messageTypes : getMessageType(),
            actionTypes: getActionType()
        }
    },
    methods: {
        init(row, robotId){
            if(typeof(row.id) != "undefined"){
                this.title = "编辑话术"
                this.form = row
            }else{
                this.form.robotId = robotId
            }
            this.isDisabled = true
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    param.robotId = parseInt(param.robotId)
                    this.$service.robot.saveRobotMessage(param, function (result){
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
        resetForm(formName) {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.dialogVisible = false
            this.isDisabled = false
            this.resetForm()
            this.$emit('fetchData');
        }
    }
}
</script>

<style lang="less">
.form-list-wrapper {
    .el-card {
    }

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
