<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="系统类型" prop="osType">
                    <el-select v-model="form.osType" placeholder="请选择">
                        <el-option v-for="item in osTypeList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应用key" prop="appKey" :hidden="isHiddenAppKey">
                    <el-input v-model="form.appKey" placeholder="请输入" disabled/>
                </el-form-item>
                <el-form-item label="应用名称" prop="title">
                    <el-input v-model="form.title" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="包名" prop="bundleId">
                    <el-input v-model="form.bundleId" placeholder="请输入"/>
                </el-form-item>

                <el-form-item label="启用的区域" prop="areaIds">
                    <el-select v-model="form.areaIds" multiple placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="是否启用" prop="enable">
                    <el-switch v-model="form.enable"/>
                </el-form-item>
                <el-form-item label="是否为主播端" prop="isAnchor">
                    <el-switch v-model="form.isAnchor"/>
                </el-form-item>
                <el-form-item label="google play" prop="storeCred">
                    <el-input v-model="form.storeCred" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="api地址" prop="apiAddr">
                    <el-input v-model="form.apiAddr" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="备注" prop="note">
                    <el-input
                        v-model="form.note"
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 8 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
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
import {getAreaList, getAppList, getPayType, getOsType} from "@/utils/common";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    data() {
        return {
            form: { },
            dialogVisible: false,
            title: '新增应用',
            iconArr: [],
            iconDialog: false,
            isHiddenAppKey: true,
            areaList: getAreaList(),
            appList: getAppList(),
            osTypeList: getOsType(),
            payTypeList: getPayType(),
            rules: {
                osType: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                appKey: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                title: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                bundleId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                areaIds: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                enable: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.title = "编辑应用"
                this.form = row
                this.isHiddenAppKey = false
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    this.$service.config.saveApp(param, function (result){
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
