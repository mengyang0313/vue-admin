<template>
    <el-dialog title="更新奖惩" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="主播Id：" prop="uid">
                    <el-input v-model="form.uid" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="用户昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>

                <el-form-item label="奖励类型" prop="type">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option
                            v-for="item in incentiveType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="操作金额" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>

                <el-form-item label="是否发送通知：" prop="bool">
                    <el-switch v-model="form.bool"/>
                </el-form-item>

                <el-form-item label="通知内容" prop="reason">
                    <el-input
                        v-model="form.reason"
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
import { incentiveType } from '@/dict/index'

export default {
    components: { incentiveType },
    data() {
        return {
            form: {
                uid: '',
                nickname: ''
            },
            incentiveType,
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
