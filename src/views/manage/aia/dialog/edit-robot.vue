<template>
    <el-dialog title="编辑资料" :visible.sync="dialogVisible" :modal-append-to-body="false" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" label-width="150px" class="form-list">
                <el-form-item label="ID：" prop="robotId">
                    <el-input v-model="form.robotId" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="头像" prop="photo">
                    <div class="img">
                        <el-upload
                            action=""
                            :limit="1"
                            :on-preview="handlePictureCardPreview"
                            :on-change="onUploadChange"
                            list-type="picture-card"
                            :auto-upload="false"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="imgDialogVisible" :modal-append-to-body="true" append-to-body>
                            <img width="100%" :src="form.photo" alt />
                        </el-dialog>
                    </div>
                    <div class="imgSpan2">只能上传jpg/png文件，50X50px</div>
                </el-form-item>
                <el-form-item label="国家" prop="country">
                    <el-select v-model="form.area" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-date-picker type="date" placeholder="出生日期" v-model="form.birth" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="职业" prop="profession">
                    <el-input v-model="form.profession" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="经常在线" prop="online">
                    <el-input v-model="form.online" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="签名" prop="sign">
                    <el-input v-model="form.sign" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="图片" prop="imgs">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="视频" prop="videos">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm('form')">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import {AdminFileChunk} from "@/proto/js/cms_pb";
import {getToken} from "@/utils/cookie";
import {cmsService} from "@/grpc/server";

export default {
    data() {
        return {
            form: {
                robotId: '',
                nickname: '',
                photo: '',
                country: '',
                birth: '',
                profession: '',
                online: '',
                sign: '',
                imgs: '',
                videos: ''
            },
            dialogImageUrl: '',
            dialogVisible: false,
            imgDialogVisible: false
        }
    },
    methods: {
        handlePictureCardPreview(file) {
            this.form.photo = file.url;
            this.imgDialogVisible = true;
        },
        //上传成功
        onUploadChange(file) {
            alert(file)
            const adminFileChunk = new AdminFileChunk();
            adminFileChunk.setOffset(0)
            adminFileChunk.setAreaId(1)
            adminFileChunk.setType(file.raw.type)

            const reader = new FileReader();
            // 读取文件内容，结果用data:url的字符串形式表示
            reader.readAsArrayBuffer(file.raw);
            // reader.readAsDataURL(file.raw);
            reader.onload = function(e) {
                //这个是获取到byte数组
                console.log(e.target.result);
                //basedata是之前定义的变量
                adminFileChunk.setContent(e.target.result);
                console.log("二进制转化完成")

                const metadata = {'token': getToken()};
                cmsService.uploadFiles(adminFileChunk, metadata, (err, resp) => {
                    if (!err) {
                        alert("上传成功!")
                        this.close()
                    } else {
                        console.log(err)
                        alert("上传失败!")
                    }
                })
            }
        },
        init(row){
            this.form.robotId = row.robotId
            this.form.nickname = row.nickname
            this.form.photo = row.photo
            this.form.country = row.country
            this.form.birth = row.birth
            this.form.profession = row.profession
            this.form.online = row.online
            this.form.sign = row.sign
            this.form.imgs = row.imgs
            this.form.videos = row.videos
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
