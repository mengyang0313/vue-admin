<template>
    <el-dialog title="鉴黄配置" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="key_id" prop="greenConfigJson.keyId">
                    <el-input v-model="form.greenConfigJson.keyId" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="key_secret" prop="greenConfigJson.keySecret">
                    <el-input v-model="form.greenConfigJson.keySecret" placeholder="请输入"/>
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

import {GreenConfig} from "@/proto/js/cmstype_pb";

export default {
    data() {
        return {
            form: { },
            dialogVisible: false,
            title: '新增应用',
            iconArr: [],
            rules: {
                osType: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                appKey: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ]
            }
        }
    },
    methods: {
        init(row){
            this.form = row
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = $this.handleParam()
                    this.$service.config.saveAreaConfig(param, function (result){
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
            let param = this.form
            let json = param.greenConfigJson
            let config = new GreenConfig()
            config.setKeyId(json.keyId)
            config.setKeySecret(json.keySecret)
            param.greenConfig = config
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
