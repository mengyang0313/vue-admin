<template>
    <el-dialog title="新增配置项" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="系统" prop="sys">
                    <el-select v-model="form.area" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="版本" prop="version">
                    <el-input v-model="form.version" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="渠道" prop="channel">
                    <el-input v-model="form.channel" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="Key" prop="key">
                    <el-input v-model="form.key" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="Value" prop="value">
                    <el-input v-model="form.value" placeholder="请输入" />
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
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
                robotId: '',
                version: '',
                channel: '',
                key: '',
                value: ''
            },
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.robotId = row.robotId
            this.form.nickname = row.nickname
            this.form.photo = row.photo
            this.form.country = row.country
            this.form.birth = row.birth
            this.form.profession = row.profession
            this.form.online = row.online
            this.form.sign = row.sign
            this.form.imgs = row.imgs
            this.form.videos = row.videos
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
