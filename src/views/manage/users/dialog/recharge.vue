<template>
    <el-dialog title="充值" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="form" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="用户Id：" prop="uid">
                    <el-input v-model="form.id" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="充值钻石数量" prop="amount">
                    <el-input-number v-model="form.amount"></el-input-number>
                    <div class="imgSpan2">正数为增加，负数为扣除</div>
                </el-form-item>
                <el-form-item label="是否发生系统通知" prop="sendNotify">
                    <el-switch v-model="form.sendNotify"/>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input
                        v-model="form.desc"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
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
                id: '',
                nickname: '',
                amount: 100,
                sendNotify: false,
                desc: '线下充值'
            },
            banLevel,
            dialogVisible: false,
            rules: {
                amount: [
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
                    this.$service.anchor.adjustBalance(this.form, function (result){
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
