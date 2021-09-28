<template>
    <el-dialog title="融云配置" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="融云appKey" prop="rongcloudConfigJson.appKey">
                    <el-input v-model="form.rongcloudConfigJson.appKey" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="融云appSecret" prop="rongcloudConfigJson.appSecret">
                    <el-input v-model="form.rongcloudConfigJson.appSecret" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="融云api" prop="rongcloudConfigJson.domain">
                    <el-input v-model="form.rongcloudConfigJson.domain" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="融云appKey(旧)" prop="rongcloudConfigJson.oldAppKey">
                    <el-input v-model="form.rongcloudConfigJson.oldAppKey" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="融云appSecret(旧)" prop="rongcloudConfigJson.oldAppSecret">
                    <el-input v-model="form.rongcloudConfigJson.oldAppSecret" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="融云api(旧)" prop="rongcloudConfigJson.oldDomain">
                    <el-input v-model="form.rongcloudConfigJson.oldDomain" placeholder="请输入"/>
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

import {RongcloudConfig} from "@/proto/js/cmstype_pb";

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
            let json = param.rongcloudConfigJson
            let config = new RongcloudConfig()
            config.setAppKey(json.appKey)
            config.setAppSecret(json.appSecret)
            config.setDomain(json.domain)
            config.setOldAppKey(json.oldAppKey)
            config.setOldAppSecret(json.oldAppSecret)
            config.setOldDomain(json.oldDomain)
            param.rongcloudConfig = config
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
