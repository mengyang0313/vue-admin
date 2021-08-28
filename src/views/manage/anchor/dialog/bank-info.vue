<template>
    <el-dialog title="银行信息" :visible.sync="dialogVisible" append-to-body width="60%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="主播Id：" prop="uid">
                    <el-input v-model="form.uid" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="开户行" prop="openAccountBank">
                    <el-input v-model="form.openAccountBank" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="账户名" prop="account">
                    <el-input v-model="form.account" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="银行卡账户" prop="account">
                    <el-input v-model="form.account" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="E-mail" prop="email">
                    <el-input v-model="form.email" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="备注" prop="bz">
                    <el-input v-model="form.bz" placeholder="请输入"/>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="dialogVisible=false">取&nbsp;&nbsp;&nbsp;消</el-button>
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
