<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="应用" prop="appId">
                    <el-select v-model="form.appId" placeholder="请选择">
                        <el-option v-for="item in appList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span v-if="item.os === 1">
                                <i class="icon-android-fill" style="float: right"></i>
                            </span>
                            <span v-else-if="item.os === 2">
                                <i class="icon-pingguo" style="float: right"></i>
                            </span>
                            <span v-if="item.isAnchor">
                                <i class="iconfont icon-zhuboguanli" style="float: right"></i>
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" :disabled="authAreaId !== 0" @change="changeArea" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="后台使用名称" prop="title">
                    <el-input v-model="form.title" placeholder="请输入" />
                </el-form-item>

                <el-form-item label="天数" prop="days">
                    <el-input-number v-model="form.days" :min="0" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input-number v-model="form.price" :min="0" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="折扣" prop="discount">
                    <el-input-number v-model="form.discount" :min="0" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="是否启用" prop="enable">
                    <el-switch v-model="form.enable"/>
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input-number v-model="form.sort" :min="0" placeholder="请输入"/>
                </el-form-item>
                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import {
    getAreaList,
    getAppList,
    getPayType,
    getOsType,
    getCurrentUserAreaId,
    getAppListByAreaId,
    getPayChannelList
} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    data() {
        return {
            form: {
                enable: true,
                areaId : undefined
            },
            dialogVisible: false,
            title: 'vip配置',
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            appList: [],
            rules: {
                appId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                areaId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                name: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                price: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                sort: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.form = row
            }else{
                this.form.id = undefined
                this.form.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
            }
            this.changeArea(this.form.areaId)
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    this.$service.config.saveVipConfig(param, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
                        }
                    });
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
        },
        changeArea(val) {
            this.appList = getAppListByAreaId(val, true, false)
        }
    }
}
</script>

<style lang="less">
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
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
