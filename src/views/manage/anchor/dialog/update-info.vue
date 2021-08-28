<template>
    <el-dialog title="更新信息" :visible.sync="dialogVisible" append-to-body width="60%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="主播ID：" prop="uid">
                    <el-input v-model="form.uid" placeholder="请输入" :disabled="true"/>
                </el-form-item>
                <el-form-item label="主播地区" prop="area">
                    <el-select v-model="form.area" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主播工会" prop="level">
                    <el-option v-for="item in anchorLevel"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-form-item>
                <el-form-item label="主播等级" prop="level">
                    <el-select v-model="form.level" placeholder="请选择">
                        <el-option v-for="item in anchorLevel"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="备注" prop="remarks">
                    <el-input
                        v-model="form.remarks"
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
import { areaData, anchorLevel } from '@/dict/index'

export default {
    data() {
        return {
            form: {
                uid: '',
                nickname: '',
                unionId: '',
                level: '',
                area: '',
                remarks: ''
            },
            areaData,
            anchorLevel,
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form.uid = row.anchorId
            this.form.nickname = row.nickname
            this.form.unionId = row.unionId
            this.form.level = row.level
            this.form.area = row.area
            this.form.remarks = row.remarks
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
