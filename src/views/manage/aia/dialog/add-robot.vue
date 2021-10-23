<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" :modal-append-to-body="false" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list" v-loading="formLoading">
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId"  :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="ID" prop="anchorId" v-if="typeof(form.anchorId) == 0">
                    <el-input v-model="form.robotId" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="头像" prop="avatar">
                    <div class="img">
                        <el-upload
                            :limit="1"
                            accept="image/*"
                            :on-preview="imgPreview"
                            :on-change="successAvatar"
                            list-type="picture-card"
                            :file-list="avatarArr"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                    <div class="imgSpan2">只能上传jpg/png文件，50X50px</div>
                </el-form-item>
                <el-form-item label="签名" prop="signature">
                    <el-input v-model="form.signature" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="职业" prop="occupation">
                    <el-select v-model="form.occupation" placeholder="请选择">
                        <el-option v-for="item in occupationTypes"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birthdayStr">
                    <el-date-picker type="date" placeholder="出生日期" v-model="form.birthday" style="width: 35%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="经常在线" prop="onlineStartStr">
                    <el-input-number v-model="form.onlineStart" :min="1" :max="24" label="开始时间"></el-input-number>
                    <el-input-number v-model="form.onlineEnd" :min="form.onlineStart" :max="24" label="结束时间"></el-input-number>
                </el-form-item>

                <el-form-item label="是否启用" prop="statusBool">
                    <el-switch v-model="form.statusBool"/>
                </el-form-item>
                <el-form-item label="图片" prop="photoIds">
                    <div class="img">
                        <el-upload
                            :limit="10"
                            accept="image/*"
                            :on-preview="imgPreview"
                            :on-change="successPhoto"
                            :on-remove="removePhoto"
                            list-type="picture-card"
                            :file-list="form.photoUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item label="视频" prop="videoIds">
                    <div class="img">
                        <el-upload
                            :limit="10"
                            accept="video/*"
                            :on-preview="imgPreview"
                            :on-change="successVideo"
                            :on-remove="removeVideo"
                            list-type="picture-card"
                            :file-list="form.videoUris"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm()" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm()">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog :visible.sync="imgDialog" :modal-append-to-body="true" append-to-body>
            <img width="100%" :src="imgUri" alt />
        </el-dialog>
    </el-dialog>

</template>

<script>
import { getToken } from "@/utils/cookie";
import {
    getAreaList,
    getOccupationType,
    getAppList,
    getCurrentUserAreaId,
    getAppListByAreaId,
    getPayChannelList
} from "@/utils/dist";
import axios from "axios";
import ImgUpdate from '@/components/ImgUpdate'
import {checkImg, checkVideo, getCurrentDate} from "@/utils/util";

export default {
    components: { ImgUpdate },
    data() {
        return {
            form: {
                areaId: getCurrentUserAreaId(),
                photoIds: [],
                photos: [],
                photoUris: [],
                videoIds: [],
                videos: [],
                statusBool: true
            },
            title: '新增机器人',
            formLoading: false,
            dialogImageUrl: '',
            dialogVisible: false,
            imgDialog: false,
            imgUri: undefined,
            authAreaId: getCurrentUserAreaId(),
            areaData: getAreaList(true),
            occupationTypes: getOccupationType(),
            appList: getAppList(),
            avatarArr: [],
            rules: {
                nickname: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                areaId: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.anchorId) != "undefined"){
                this.title = "编辑机器人"
                this.form = row
                this.avatarArr.push({"url": row.avatar});
                this.form.photoUris = []
                this.form.photos.forEach((item) => {
                    this.form.photoUris.push({name: item.getId(), url: item.getUri()})
                })
                this.form.videoUris = []
                this.form.videos.forEach((item) => {
                    this.form.videoUris.push({name: item.getId(), url: item.getUri()})
                })
                this.form.birthday = new Date(row.birthday * 1000)

            }else {
                this.changeArea(this.form.areaId)
                this.form.birthday = getCurrentDate()
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form
                    param.birthdayTime = param.birthday.getTime() / 1000
                    param.status = this.form.statusBool ? 5 : 6
                    this.$service.robot.saveRobot(param, function (result){
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
            this.form.photoIds = [];
            this.form.photos = [];
            this.form.photoUris = [];
            this.form.videoIds = [];
            this.form.videos = [];
            this.form.videoUris = [];
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.formLoading = false
            this.dialogVisible = false
            this.avatarArr = []
            this.form = {}
            this.resetForm()
            this.$emit('fetchData');
        },
        imgPreview(file) {
            this.imgDialog = true;
            this.imgUri = file.url
        },
        successAvatar(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 1, function (data){
                $this.form.avatar = data.uri
                $this.formLoading = false
            })
        },
        successPhoto(file) {
            let $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 1, function (data){
                $this.form.photoIds.push(data.id)
                $this.formLoading = false
            })
        },
        successVideo(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, 2, function (data){
                $this.form.videoIds.push(data.id)
                $this.form.video = data.id
                $this.formLoading = false
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
        },
        changeArea(val) {
            let arr = getAppListByAreaId(val, true)
            arr.splice(0, 1)
            this.appList = arr
        }
    }
}
</script>

<style lang="less">
.avatar-upload {
    .content-box {
        height: 320px;

        .el-upload {
            display: block;
        }

        .icon-small {
            padding: 8px 24px;

            .el-icon-upload {
                font-size: 14px;
                margin-right: 3px;
            }
        }
    }
}
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
