<template>
    <el-dialog title="资料详情" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="ID：" prop="id">
                    <el-input v-model="form.id" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="头像" prop="photo">
                    <el-image style="width: 100px; height: 150px" :src="form.photo" contain></el-image>
                </el-form-item>
                <el-form-item label="国家" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="出生日期" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="职业" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="经常在线" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="签名" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="图片" prop="nickname">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="视频" prop="nickname">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>

                    </el-row>
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
    data() {
        return {
            form: {
                uid: '',
                nickname: ''
            },
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.uid = row.anchorId
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
