<template>
    <el-dialog title="创建消息" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="目标APP" prop="appId">
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
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标区域" prop="areaId">
                    <el-select v-model="form.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标对象" prop="areaId">

                </el-form-item>
                <el-form-item label="推送标题" prop="name">
                    <el-input v-model="form.name" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="推送封面" prop="areaId">
                    <div class="img">
                        <el-upload
                            :limit="1"
                            accept="image/*"
                            :on-preview="imgPreview"
                            :on-change="successImg"
                            list-type="picture-card"
                            :file-list="imgArr"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                    <div class="imgSpan2">只能上传jpg/png文件，50X50px</div>
                </el-form-item>
                <el-form-item label="推送内容" prop="areaId">
                    <el-input
                        v-model="form.note"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="跳转链接" prop="areaId">
                    <el-input v-model="form.name" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="是否定时推送" prop="areaId">
                    <el-switch v-model="form.statusBool"/>
                </el-form-item>
                <el-form-item label="定时时间" prop="date">
                    <el-date-picker
                        v-model="form.date"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog :visible.sync="imgDialog" :modal-append-to-body="true" append-to-body>
            <img width="100%" :src="imgUri" alt />
        </el-dialog>
    </el-dialog>
</template>

<script>

import { boolDict} from '@/dict/index'
import {getAppList, getAreaList, getBool, getCurrentUserAreaId, initAreas, initGuilds} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    name: 'Form',
    components: { boolDict},
    data() {
        return {
            form: {
                areaId: undefined
            },
            authAreaId: getCurrentUserAreaId(),
            dialogVisible: false,
            imgArr: [],
            imgDialog: false,
            imgUri: undefined,
            areaData : getAreaList(false),
            appList: getAppList(true, true),
            rules: {
                areaId: [
                    {required: true, message: '请选择', trigger: 'change'}
                ],
                name: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                enable: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            this.form.areaId = this.authAreaId === 0 ? this.areaData[0].value : this.authAreaId
        },
        submitForm(formName) {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.guild.saveGuild(this.form, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            initGuilds()
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
                        }
                    })
                }
            })
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        imgPreview(file) {
            this.imgDialog = true;
            this.imgUri = file.url
        },
        successImg(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 1, function (data){
                $this.form.avatar = data.uri
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
