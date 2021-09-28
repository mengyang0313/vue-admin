<template>
    <el-dialog title="声网配置" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="声网appId" prop="agoraConfigJson.appId">
                    <el-input v-model="form.agoraConfigJson.appId" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="声网app证书" prop="agoraConfigJson.appCert">
                    <el-input v-model="form.agoraConfigJson.appCert" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="Api客户id" prop="agoraConfigJson.clientId">
                    <el-input v-model="form.agoraConfigJson.clientId" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="Api客户密匙" prop="agoraConfigJson.clientSecret">
                    <el-input v-model="form.agoraConfigJson.clientSecret" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="视频录制时长" prop="agoraConfigJson.captureDuration">
                    <el-input v-model="form.agoraConfigJson.captureDuration" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="视频录制存储配置" prop="agoraConfigJson.storageVendor">
                    <el-input v-model="form.agoraConfigJson.storageVendor" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="storage_region" prop="agoraConfigJson.storageRegion">
                    <el-input v-model="form.agoraConfigJson.storageRegion" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="storage_endpoint" prop="agoraConfigJson.storageEndpoint">
                    <el-input v-model="form.agoraConfigJson.storageEndpoint" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="storage_bucket" prop="agoraConfigJson.storageBucket">
                    <el-input v-model="form.agoraConfigJson.storageBucket" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="storage_access_key" prop="agoraConfigJson.storageAccessKey">
                    <el-input v-model="form.agoraConfigJson.storageAccessKey" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="storage_secret_key" prop="agoraConfigJson.storageSecretKey">
                    <el-input v-model="form.agoraConfigJson.storageSecretKey" placeholder="请输入"/>
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

import {AgoraConfig} from "@/proto/js/cmstype_pb";

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
            let json = param.agoraConfigJson
            let agoraConfig = new AgoraConfig()
            agoraConfig.setAppId(json.appId)
            agoraConfig.setAppCert(json.appCert)
            agoraConfig.setClientId(json.clientId)
            agoraConfig.setClientSecret(json.clientSecret)
            agoraConfig.setCaptureDuration(json.captureDuration)
            agoraConfig.setStorageVendor(json.storageVendor)
            agoraConfig.setStorageRegion(json.storageRegion)
            agoraConfig.setStorageEndpoint(json.storageEndpoint)
            agoraConfig.setStorageBucket(json.storageBucket)
            agoraConfig.setStorageAccessKey(json.storageAccessKey)
            agoraConfig.setStorageSecretKey(json.storageSecretKey)
            param.agoraConfig = agoraConfig
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
