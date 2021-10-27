<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list" v-loading="formLoading">

                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="系统类型" prop="osType">
                    <el-select v-model="form.osType" placeholder="请选择">
                        <el-option v-for="item in osTypeList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="支付方式" prop="payType">
                    <el-select v-model="form.payType" placeholder="请选择">
                        <el-option v-for="item in payTypeList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="支付渠道" prop="channel">
                    <el-input v-model="form.channel" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="渠道名称(后台)" prop="title">
                    <el-input v-model="form.title" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="渠道名称(客户端)" prop="name">
                    <el-input v-model="form.name" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="支付平台图标" prop="icon">
                    <div class="img">
                        <el-upload
                            action=""
                            :limit="1"
                            accept="image/*"
                            :on-preview="previewIcon"
                            :on-change="successIcon"
                            list-type="picture-card"
                            :file-list="iconArr"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="iconDialog" :modal-append-to-body="true" append-to-body>
                            <img width="100%" :src="form.icon" alt />
                        </el-dialog>
                    </div>
                    <div class="imgSpan2">只能上传jpg/png文件，50X50px</div>
                </el-form-item>
                <el-form-item label="是否启用" prop="enable">
                    <el-switch v-model="form.enable"/>
                </el-form-item>
                <el-form-item label="折扣" prop="discount">
                    <el-input-number v-model="form.discount" :min="0" :max="100"></el-input-number>
                    &nbsp;%
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input-number v-model="form.sort" :precision="0" :min="1"></el-input-number>
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
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import {getAreaList, getAppList, getPayType, getOsType, getCurrentUserAreaId} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    data() {
        return {
            form: {
                areaId : getCurrentUserAreaId()
            },
            dialogVisible: false,
            title: '新增支付',
            iconArr: [],
            iconDialog: false,
            formLoading: false,
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            appList: getAppList(),
            osTypeList: getOsType(),
            payTypeList: getPayType(false),
            rules: {
                areaId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                osType: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                payType: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                sort: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.title = "编辑国家"
                this.form = row
                this.iconArr.push({"url": row.icon});
            }
            this.form.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    this.$service.config.savePayChannel(param, function (result){
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
            this.iconArr = []
            this.formLoading = false
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        previewIcon(file) {
            this.iconDialog = true
        },
        successIcon(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 1, function (data){
                $this.form.icon = data.uri
                $this.formLoading = false
            })
        },
        imgUpload(file, type, callback){
            let headers = {
                'Content-Type': 'multipart/form-data',
                "token" : getToken(),
                "area-id" : 1,
                "file-type" : type
            }
            const formData = new FormData()
            formData.append('file', file)
            axios({
                url: process.env.VUE_APP_UPLOAD_URI,
                method: 'post',
                data: formData,
                headers: headers
            }).then(res => {
                const data = res.data
                callback(data)
            })
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
