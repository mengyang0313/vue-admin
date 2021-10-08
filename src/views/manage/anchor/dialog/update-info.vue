<template>
    <el-dialog title="更新信息" :visible.sync="dialogVisible" append-to-body width="60%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="主播ID：" prop="anchorId">
                    <el-input v-model="form.id" placeholder="请输入" :disabled="true"/>
                </el-form-item>
<!--                <el-form-item label="主播昵称：" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" :disabled="true"/>
                </el-form-item>-->
                <el-form-item label="主播区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主播工会" prop="guildId">
                    <el-select v-model="form.guildId" filterable placeholder="请选择">
                        <el-option v-for="item in guildList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
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
                <el-form-item label="备注" prop="note">
                    <el-input
                        v-model="form.note"
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 8 }"
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
import {getAnchorLevel, getAreaList, getGuildList} from "@/utils/dist";

export default {
    data() {
        return {
            form: {},
            areaData: getAreaList(true),
            anchorLevel: getAnchorLevel(),
            guildList: getGuildList(),
            dialogVisible: false
        }
    },
    methods: {
        init(row){
            this.form = row
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.anchor.updateAnchorBasic(this.form, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
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
