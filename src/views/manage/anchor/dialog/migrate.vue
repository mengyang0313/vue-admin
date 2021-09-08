<template>
    <el-dialog title="帐号迁移" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="源账号id" prop="srcId">
                    <el-input v-model="form.srcId" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="目的账号id" prop="dstId">
                    <el-input v-model="form.dstId" placeholder="请输入"/>
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

export default {
    name: 'Form',
    data() {
        return {
            form: {
                entityType: 2,
                srcId: undefined,
                dstId: undefined
            },
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.srcId = row.id
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.form.dstId = parseInt(this.form.dstId)
                    this.$service.anchor.migrate(this.form, function (result){
                        if (result) {
                            $this.$message.success("迁移成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("迁移失败!")
                        }
                    })
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
