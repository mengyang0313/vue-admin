<template>
    <el-dialog title="认证主播" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="用户Id：" prop="anchorId">
                    <el-input v-model="form.anchorId" placeholder="请输入" :disabled="uidDisabled"/>
                </el-form-item>
                <el-form-item label="主播地区" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
<!--                <el-form-item label="主播等级：" prop="level">-->
<!--                    <el-select v-model="form.level" placeholder="请选择">-->
<!--                        <el-option-->
<!--                            v-for="item in anchorLevel"-->
<!--                            :key="item.value"-->
<!--                            :label="item.label"-->
<!--                            :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
                <el-form-item label="主播工会" prop="guildId">
                    <el-select v-model="form.guildId" placeholder="请选择">
                        <el-option v-for="item in guildList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm()" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm()">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import {getAnchorLevel, getAreaList, getGuildList} from "@/utils/common";

export default {
    name: 'Form',
    components: {},
    data() {
        return {
            form: {
                anchorId: '',
                areaId: '',
                level: '',
                guildId: ''
            },
            uidDisabled: true,
            dialogVisible: false,
            anchorLevel: getAnchorLevel(),
            areaData: getAreaList(),
            guildList: getGuildList(),
            rules: {
                anchorId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                areaId: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ],
                guildId: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(row === ""){
                this.uidDisabled = false;
            }else{
                this.form.anchorId = row.id
                this.form.areaId = row.areaId
                this.form.level = row.level
                this.form.guildId = row.guildId
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.anchor.authorizeAnchor(this.form, function (result){
                        if (result) {
                            $this.$message.success("认证成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("认证失败!")
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
