<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="支付方式" prop="type">
                    <el-select v-model="form.type" placeholder="请选择" @change="changePayType">
                        <el-option v-for="item in payTypeList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="第三方应用Id" prop="appId" :hidden="isAppIdHidden">
                    <el-input v-model="form.appId" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="应用密匙" prop="appSecret" :hidden="isAppSecretHidden">
                    <el-input v-model="form.appSecret" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="重定向地址" prop="redirectUrl">
                    <el-input v-model="form.redirectUrl" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="回调地址" prop="callbackUrl">
                    <el-input v-model="form.callbackUrl" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="字段1" prop="extra1">
                    <el-input v-model="form.extra1" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="字段2" prop="extra2">
                    <el-input v-model="form.extra2" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="字段3" prop="extra3">
                    <el-input v-model="form.extra3" placeholder="请输入"/>
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
import {getAreaList, getAppList, getPayType, getOsType} from "@/utils/dist";

export default {
    data() {
        return {
            form: { },
            dialogVisible: false,
            title: '新增支付参数',
            iconArr: [],
            iconDialog: false,
            isAppIdHidden: true,
            isAppSecretHidden: true,
            areaList: getAreaList(),
            appList: getAppList(),
            osTypeList: getOsType(),
            payTypeList: getPayType(),
            rules: {
                areaId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                type: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                redirectUrl: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.title = "编辑支付参数"
                this.form = row
                this.changePayType(row.type)
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    this.$service.config.savePayConfig(param, function (result){
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
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.iconArr = []
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        changePayType(val) {
            if(4 === val){
                this.isAppIdHidden = false
                this.isAppSecretHidden = false
            }else{
                this.form.appId = undefined
                if(3 === val){
                    this.isAppSecretHidden = false
                }else{
                    this.isAppSecretHidden = true
                    this.form.appSecret = undefined
                }
                this.isAppIdHidden = true
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
