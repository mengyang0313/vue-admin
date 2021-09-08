<template>
    <el-dialog title="帐号停用" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="主播Id：" prop="uid">
                    <el-input v-model="form.uid" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="用户昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="永久封禁：" prop="bool">
                    <el-switch v-model="form.bool"/>
                </el-form-item>
                <div v-if="!form.bool">
                    <el-form-item label="封禁时常" prop="forever">
                        <el-input-number v-model="form.forever" :min="1"></el-input-number>小时
                    </el-form-item>
                </div>
                <el-form-item label="封禁理由" prop="reason">
                    <el-input
                        v-model="form.reason"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                    <i class="el-icon-"></i>
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

export default {
    name: 'Form',
    data() {
        return {
            form: {
                uid: '',
                nickname: '',
                bool: false,
                forever: '',
                reason: ''
            },
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.uid = row.anchorId
            this.form.nickname = row.nickname
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 此处添加后端接口
                    alert('提交成功!')
                } else {
                    console.log('提交失败!')
                    return false
                }
            })
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
