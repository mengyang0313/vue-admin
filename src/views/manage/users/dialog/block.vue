<template>
    <el-dialog title="封禁主播" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="主播Id：" prop="entityId">
                    <el-input v-model="form.entityId" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="封禁类型" prop="blockStatus">
                    <el-select v-model="form.blockStatus" placeholder="请选择">
                        <el-option
                            v-for="item in blockStatusList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="封禁时常" prop="duration">
                    <el-select v-model="form.duration" placeholder="请选择">
                        <el-option
                            v-for="item in blockTimeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="封禁理由" prop="reason">
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
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import { getBlockStatus, getBlockTime} from "@/utils/dist";

export default {
    components: { },
    data() {
        return {
            form: {
                entityId: '',
                entityType: 1,  //用户
                blockStatus: 1,
                duration: 5 * 60,
                reason: '',
                struct: ''
            },
            dialogVisible: false,
            blockStatusList: getBlockStatus(),
            blockTimeList: getBlockTime(),
            rules: {
                entityId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                blockStatus: [
                    {required: true, message: '请选择封禁类型', trigger: 'blur'}
                ],
                duration: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            this.form.entityId = row.id
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.anchor.block(this.form, function (result){
                        if (result) {
                            $this.$message.success("封禁成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("封禁失败!")
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
