<template>
    <el-dialog title="新增话术" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="话术类型" prop="country">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="链接：" prop="url">
                    <el-input placeholder="请输入" v-model="form.url">
                        <template slot="append">浏览</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input
                        v-model="form.content"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="排序" prop="photo">
                    <el-input-number v-model="form.sort" :min="1"></el-input-number>
                </el-form-item>

                <el-form-item label="时间间隔" prop="interval">
                    <el-input-number v-model="form.interval" :min="1"></el-input-number>  秒
                </el-form-item>
                <el-form-item label="是否开启" prop="isOpen">
                    <el-switch v-model="form.isOpen"/>
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
                type: '',
                url: '',
                content: '',
                sort: '',
                interval: '',
                isOpen: ''
            },
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.type = row.type
            this.form.url = row.url
            this.form.content = row.content
            this.form.sort = row.sort
            this.form.interval = row.interval
            this.form.isOpen = row.isOpen
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
