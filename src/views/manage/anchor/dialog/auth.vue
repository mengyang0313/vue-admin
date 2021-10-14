<template>
    <el-dialog title="认证主播" :visible.sync="dialogVisible" append-to-body width="40%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="用户Id：" prop="anchorId">
                    <el-input v-model="form.anchorId" placeholder="请输入" :disabled="uidDisabled" @change="changeAnchor">
                    </el-input>
                </el-form-item>
                <el-form-item label="主播区域" prop="areaId">
                    <el-select v-model="form.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
<!--                <el-form-item label="主播等级：" prop="level">-->
<!--                    <el-select v-model="form.level" placeholder="请选择">-->
<!--                        <el-option-->
<!--                            v-for="item in anchorLevel"-->
<!--                            :key="item.value"-->
<!--                            :label="item.label"-->
<!--                            :value="item.value">-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
                <el-form-item label="主播工会" prop="guildId">
                    <el-select v-model="form.guildId" filterable placeholder="请选择">
                        <el-option v-for="item in guildList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <div :hidden="isHidden">
                    <el-divider></el-divider>
                    <el-form-item label="App: " prop="app">
                        {{ form.app.label }}
                        <span v-if="form.app.os === 1">
                            <i class="icon-android-fill"></i>
                        </span>
                        <span v-else-if="form.app.os === 2">
                            <i class="icon-pingguo"></i>
                        </span>
                    </el-form-item>
                    <el-form-item label="上线IP: " prop="onlineIp">
                        {{ form.onlineIp }}
                    </el-form-item>
                    <el-form-item label="国家: " prop="country">
                        {{ form.country }}
                    </el-form-item>
                </div>


                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm()" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm()">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import {
    getAnchorLevel, getAppList, getAppName,
    getAreaList,
    getCurrentUserAreaId,
    getGuildListByAreaId
} from "@/utils/dist";
import {isEmpty} from "@/api/api";

export default {
    name: 'Form',
    components: {},
    data() {
        return {
            form: {
                anchorId: undefined,
                areaId: undefined,
                guildId: undefined,
                app: {
                    label: 0,
                    os: 0
                },
                country: undefined,
                onlineIp: undefined
            },
            uidDisabled: true,
            dialogVisible: false,
            isHidden: true,
            authAreaId: getCurrentUserAreaId().areaId,
            anchorLevel: getAnchorLevel(),
            areaData: getAreaList(false),
            appListAll: getAppList(false),
            guildList: [],
            rules: {
                anchorId: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                guildId: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(row === ""){
                this.uidDisabled = false;
                this.form.areaId = this.authAreaId === 0 ? this.areaData[0].value : this.authAreaId
            }else{
                this.form.anchorId = row.id
                this.form.areaId = row.areaId
                this.form.guildId = row.guildId
            }
            this.changeArea(this.form.areaId)
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    if(!isEmpty($this.form.anchorId)){
                        $this.form.anchorId = parseInt($this.form.anchorId)
                    }
                    this.$service.anchor.authorizeAnchor($this.form, function (result){
                        if (result) {
                            $this.$message.success("认证成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("认证失败!")
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
        },
        changeArea(val){
            this.guildList = getGuildListByAreaId(val, false)
        },
        changeAnchor(val){
            let param = {
                    userId: val,
                    page: {
                        currentPage: 1,
                        pageSize: 10
                    }
                }
            const $this = this
            this.$service.user.getUserList(param, function (result){
                const list = result.getUsersList()
                if(list.length === 1){
                    $this.isHidden = false
                    let user = list[0]
                    $this.form.areaId = user.getAreaId()
                    $this.form.app = getAppName($this.appListAll, user.getAppId())
                    $this.form.country = user.getCountry()
                    $this.form.onlineIp = user.getOnlineIp()
                    $this.changeArea($this.form.areaId)
                }else{
                    $this.isHidden = true
                }
            })
        }
    }
}
</script>

<style lang="less">
.form-list-wrapper {

    .form-list {
        width: 90%;
        margin: 0 auto;

        .el-rate {
            line-height: 2;
        }

        //.el-input {
        //    position: relative;
        //    font-size: 14px;
        //    display: inline-block;
        //    width: 50%;
        //}

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
