<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="国家代码" prop="country">
                    <el-input v-model="form.country" placeholder="请输入" maxlength="2"/>
                </el-form-item>
                <el-form-item label="国家名称(后台)" prop="title">
                    <el-input v-model="form.title" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="国家名称(客户端)" prop="name">
                    <el-input v-model="form.name" placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="货币类型" prop="currency">
                    <el-input v-model="form.currency" placeholder="请输入" maxlength="3"/>
                </el-form-item>

                <el-form-item label="图标" prop="icon">
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
                <el-form-item label="汇率" prop="exchangeRate">
                    <el-input-number v-model="form.exchangeRate" :min="0" style="width: 70%"></el-input-number>
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input-number v-model="form.sort" :precision="0" :min="1" style="width: 30%"></el-input-number>
                </el-form-item>
                <el-form-item label="是否启用" prop="enable">
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
import {getAreaList, getAppList, getPayType, getOsType, getPayChannelList, getCurrentUserAreaId} from "@/utils/dist";
import {getToken} from "@/utils/cookie";
import axios from "axios";
import {Approximation} from "@/proto/js/usertype_pb";

export default {
    data() {
        return {
            form: {
                areaId : getCurrentUserAreaId()
            },
            dialogVisible: false,
            title: '新增国家',
            iconArr: [],
            iconDialog: false,
            authAreaId: getCurrentUserAreaId(),
            areaList: getAreaList(false),
            appList: getAppList(),
            osTypeList: getOsType(),
            payTypeList: getPayType(),
            payChannelList: getPayChannelList(),
            rules: {
                areaId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],

                name: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                currency: [
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
            }else{
                this.form.areaId = this.authAreaId === 0 ? this.areaList[0].value : this.authAreaId
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$service.config.saveCountryConfig(this.handleParam(), function (result){
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
        handleParam(){
            let param = this.form;
            // param.approximations = []
            // this.form.approximationArr.forEach(item => {
            //     let struct = new Approximation()
            //     struct.setLowValue(item.lowValue)
            //     struct.setHighValue(item.highValue)
            //     struct.setTargetValue(item.targetValue)
            //     param.approximations.push(struct)
            // });
            return param
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeDialog() {
            this.iconArr = []
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        previewIcon(file) {
            this.iconDialog = true
        },
        successIcon(file) {
            const $this = this
            this.imgUpload(file.raw, 1, function (data){
                $this.form.icon = data.uri
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
.approximation{
    .el-input {
        width: 20%;
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
