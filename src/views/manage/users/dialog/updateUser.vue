<template>
    <el-dialog title="更新用户信息" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="form" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="用户Id：" prop="uid">
                    <el-input v-model="form.id" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="vip到期时间" prop="vipEndAt">
                    <el-date-picker type="date" placeholder="开始时间" v-model="form.vipEndAt" style="width: 100%;"></el-date-picker>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm('form')">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import { banLevel } from '@/dict/index'

export default {
    components: { banLevel },
    data() {
        return {
            form: {
                uid: '',
                nickname: '',
                vipEndAt: ''
            },
            banLevel,
            dialogVisible: false,
            rules: {
                vipEndAt: [
                    {required: true, message: '不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            this.form.id = row.id
            this.form.nickname = row.nickname
        },
        submitForm(formName) {
            const $this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$service.user.updateUser(this.form, function (result){
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
            this.$emit('fetchData');
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
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
