<template>
    <el-dialog title="关闭" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">

        </div>
    </el-dialog>
</template>

<script>

import { areaData, anchorLevel} from '@/dict/index'

export default {
    name: 'Form',
    components: { areaData, anchorLevel},
    data() {
        return {
            form: {
                uid: '',
                area: '',
                level: '',
                unionId: ''
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
