<template>
    <el-dialog title="新增话术" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list" v-loading="formLoading">
                <el-form-item label="运营区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="动作类型" prop="action">
                    <el-select v-model="form.action" placeholder="请选择">
                        <el-option v-for="item in actionTypes"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="话术类型" prop="type">
                    <el-select v-model="form.type" @change="changeType" placeholder="请选择">
                        <el-option v-for="item in messageTypes"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="内容" prop="text" v-if="isText">
                    <el-input
                        v-model="form.text"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="文件" prop="uri" v-else>
                    <div class="img">
                        <el-upload
                            action=""
                            :limit="1"
                            :on-preview="imgPreview"
                            :on-change="successFile"
                            :on-remove="removeFile"
                            list-type="picture-card"
                            :file-list="fileArr"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </el-form-item>

                <el-form-item label="是否开启" prop="enable">
                    <el-switch v-model="form.enable"/>
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
import {getActionType, getAreaList, getMessageType} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";

export default {
    data() {
        return {
            form: {
                enable: true
            },
            dialogVisible: false,
            isText: true,
            fileArr: [],
            formLoading: false,
            areaList: getAreaList(false),
            actionTypes: getActionType(),
            messageTypes : getMessageType(),
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.title = "编辑话术"
                this.form = row
                this.fileArr.push({"url": row.uri})
                this.changeType(row.type, true)
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form
                    this.$service.robot.saveAutoMessage(param, function (result){
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
        imgPreview(file) {
            this.imgDialog = true;
            this.imgUri = file.url
        },
        successFile(file) {
            const $this = this
            this.formLoading = true
            this.imgUpload(file.raw, this.fileType, function (data){
                if(1 === $this.fileType){
                    $this.form.uri = data.uri
                }else if(2 === $this.fileType){
                    $this.form.uri = data.uri
                    $this.form.thumb = data.thumb
                }else if(3 === $this.fileType){
                    $this.form.uri = data.uri
                    $this.form.duration = data.duration
                }
                $this.formLoading = false
            })
        },
        removeFile(file, fileList){
            this.form.uri = undefined
            this.form.thumb = undefined
            this.form.duration = undefined
            this.fileArr = undefined
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
        changeType(val, isInit){
            if(val===1){
                this.isText = true
            }else if(4 === val ){
                this.isText = false
                this.fileType = 1
                this.form.text = ''
            }else if(5 === val){
                this.isText = false
                this.fileType = 2
                this.form.text = ''
            }else if(6 === val){
                this.isText = false
                this.fileType = 3
                this.form.text = ''
            }
            if(!isInit){
                this.removeFile()
            }
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.formLoading = false
            this.fileArr = []
            this.isText = true
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
