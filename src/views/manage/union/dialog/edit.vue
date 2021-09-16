<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="工会名称：" prop="name">
                    <el-input v-model="form.name" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="工会区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工会状态：" prop="enable">
                    <el-switch v-model="form.enable"></el-switch>
                </el-form-item>
                <el-form-item label="备注" prop="note">
                    <el-input
                        v-model="form.note"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>

import { boolDict} from '@/dict/index'
import {getAreaList, getBool} from "@/utils/common";

export default {
    name: 'Form',
    components: { boolDict},
    data() {
        return {
            form: {
                id:'',
                areaId: '',
                name: '',
                enable: true,
                note: ''
            },
            title: '',
            dialogVisible: false,
            boolDict: getBool(),
            areaData : getAreaList(),
            rules: {
                areaId: [
                    {required: true, message: '请选择', trigger: 'change'}
                ],
                name: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                enable: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            this.title = '新增工会'
            if(row !== ''){
                this.title = '编辑工会'
                this.form = row
            }
        },
        submitForm(formName) {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.guild.saveGuild(this.form, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
                        }
                    })
                }
            })
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        }
    }
}
</script>

<style lang="less">
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
