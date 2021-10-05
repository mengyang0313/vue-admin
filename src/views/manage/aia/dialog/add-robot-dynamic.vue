<template>
    <el-dialog title="新增动态" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="机器人Id" prop="entityId">
                    <el-input v-model="form.entityId" disabled></el-input>
                </el-form-item>
                <el-form-item label="应用" prop="appId">
                    <el-select v-model="form.appId" placeholder="请选择">
                        <el-option v-for="item in appList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="内容" prop="text">
                    <el-input
                        v-model="form.content"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="图片" prop="photoIds">
                    <div class="img">
                        <el-upload
                            action=""
                            :limit="10"
                            :on-preview="previewPhoto"
                            :on-change="successPhoto"
                            :on-remove="removePhoto"
                            list-type="picture-card"
                            :file-list="form.photoUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="imgDialogVisible" :modal-append-to-body="true" append-to-body>
                            <img width="100%" :src="form.images" alt />
                        </el-dialog>
                    </div>
                </el-form-item>
                <el-form-item label="视频" prop="videoIds">
                    <div class="img">
                        <el-upload
                            action=""
                            :limit="10"
                            :on-preview="previewVideo"
                            :on-change="successVideo"
                            :on-remove="removeVideo"
                            list-type="picture-card"
                            :file-list="form.videoUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="imgDialogVisible" :modal-append-to-body="true" append-to-body>
                            <img width="100%" :src="form.video" alt />
                        </el-dialog>
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
    </el-dialog>
</template>

<script>
import { getMessageType, getAreaList, getAppList } from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    data() {
        return {
            form: {
                entityId: "",
                entityType: 2,
                status: 5,
                appId: '',
                areaId: '',
                content: '',
                images: '',
                video: '',
                likes: 10,
                publishAtTime:undefined
            },
            dialogVisible: false,
            imgDialogVisible: false,
            messageTypes : getMessageType(),
            areaList: getAreaList(true),
            appList: getAppList()
        }
    },
    methods: {
        init(entityId){
            this.form.entityId = entityId
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    param.publishAt = param.publishAtTime.getTime() /1000
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
        resetForm(formName) {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        previewAvatar(file) {
            this.imgDialogVisible = true;
        },
        previewPhoto(file){
            this.imgDialogVisible = true;
        },
        previewVideo(file){
            this.imgDialogVisible = true;
        },
        successAvatar(file) {
            const $this = this
            this.imgUpload(file.raw, 1, function (data){
                $this.form.avatar = data.uri
            })
        },
        successPhoto(file) {
            let $this = this
            this.imgUpload(file.raw, 1, function (data){
                $this.form.photoIds.push(data.id)
            })
        },
        successVideo(file) {
            const $this = this
            this.imgUpload(file.raw, 2, function (data){
                $this.form.videoIds.push(data.id)
                $this.form.video = data.id
            })
        },
        removePhoto(file, fileList){
            let arr = this.form.photoIds
            let val = file.name
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        },
        removeVideo(file, fileList){
            let arr = this.form.videoIds
            let val = file.name
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === val) {
                    arr.splice(i, 1);
                    break;
                }
            }
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
                url: 'http://101.33.118.232:8101/file/upload',
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
