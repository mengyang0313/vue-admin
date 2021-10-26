<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list" v-loading="formLoading">
                <el-form-item label="机器人Id" prop="entityId">
                    <el-input v-model="form.entityId" :disabled="isDisabled"></el-input>
                </el-form-item>
<!--                <el-form-item label="区域" prop="areaId">-->
<!--                    <el-select v-model="form.areaId" placeholder="请选择">-->
<!--                        <el-option v-for="item in areaList"-->
<!--                                   :key="item.value"-->
<!--                                   :label="item.label"-->
<!--                                   :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
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
                <el-form-item label="图片" prop="imgUris">
                    <div class="img">
                        <el-upload
                            :limit="10"
                            accept="image/*"
                            :on-preview="imgPreview"
                            :on-change="successPhoto"
                            :on-remove="removePhoto"
                            list-type="picture-card"
                            :file-list="imgUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item label="视频" prop="videoUris">
                    <div class="img">
                        <el-upload
                            :limit="10"
                            accept="video/*"
                            :on-change="successVideo"
                            :on-remove="removeVideo"
                            list-type="picture-card"
                            :file-list="videoUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item label="点赞次数" prop="likes">
                    <el-input-number v-model="form.likes" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="发布时间" prop="likes">
                    <el-date-picker
                        v-model="form.publishAtTime"
                        type="datetime"
                        placeholder="选择日期时间"
                        default-time="12:00:00">
                    </el-date-picker>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
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
import {getMessageType, getAreaList, getAppList, getMessageTypeReject} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";
import {isEmpty} from "@/api/api";

export default {
    data() {
        return {
            form: {

            },
            title: '新增动态',
            formLoading: false,
            imgDialog: false,
            imgUri: undefined,
            imgUris: [],
            videoUris: [],
            isDisabled: false,
            dialogVisible: false,
            imgDialogVisible: false,
            messageTypes : getMessageTypeReject(),
            //areaList: getAreaList(false),
            appList: getAppList()
        }
    },
    methods: {
        init(row, entityId){
            if(!isEmpty(row)){
                this.title = "编辑动态"
                this.form = row
                if(row.images.length>0 && !isEmpty(row.images[0])){
                    row.images.forEach(item => {
                        this.imgUris.push({"url": item})
                    })
                }else {
                    this.imgUris = undefined
                }
                if(!isEmpty(row.thumb)){
                    this.videoUris.push({"thumb": row.thumb, "url": row.uri})
                }
                this.form.publishAtTime = new Date(this.form.publishAtTime)
            }else{
                this.form.entityId = entityId
                this.form.images = []
                this.imgUris = undefined
            }
            this.isDisabled = true
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form
                    param.entityType = 2
                    param.status = 5
                    param.publishAt = param.publishAtTime.getTime() / 1000
                    this.$service.robot.saveMoment(param, function (result){
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
            // this.formLoading = false
            // this.form.video = undefined
            // this.form.images = []
            // this.form.entityId = undefined
            this.form = {}
            this.imgUris = []
            this.videoUris = []
            this.isDisabled = false
            this.dialogVisible = false
            this.formLoading = false
            this.resetForm()
            this.$emit('fetchData');
        },
        imgPreview(file) {
            this.imgDialog = true;
            this.imgUri = file.url
        },
        successPhoto(file) {
            let $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 1, function (data){
                $this.form.images.push(data.uri)
                $this.formLoading = false
            })
        },
        successVideo(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 2, function (data){
                $this.form.video = data.uri
                $this.form.thumb = data.thumb
                $this.formLoading = false
            })
        },
        removePhoto(file, fileList){
            let arr = this.form.images
            let val = file.url
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === val) {
                    arr.splice(i, 1);
                    this.form.images = arr.length === 0 ? undefined : arr
                    break;
                }
            }
        },
        removeVideo(file, fileList){
            this.form.video = undefined
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
