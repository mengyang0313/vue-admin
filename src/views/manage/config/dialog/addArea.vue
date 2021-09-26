<template>
    <el-dialog title="新增区域" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="form.areaId" @change="changeArea" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应用" prop="appId">
                    <el-select v-model="form.appId" @change="changeApp" placeholder="请选择">
                        <el-option v-for="item in appList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="积分转换比例" prop="convertRate">
                    <el-input-number v-model="form.convertRate" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="充值分成比例" prop="depositCommission">
                    <el-input-number v-model="form.depositCommission" :min="0" :max="100"></el-input-number>
                    &nbsp;%
                </el-form-item>
                <el-form-item label="赠送分成比例" prop="rewardCommission">
                    <el-input-number v-model="form.rewardCommission" :min="0" :max="100"></el-input-number>
                    &nbsp;%
                </el-form-item>
                <el-form-item label="默认通话价格" prop="callPrice">
                    <el-input-number v-model="form.callPrice" :precision="0" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="免费消息数量" prop="freeMessageCount">
                    <el-input-number v-model="form.freeMessageCount" :precision="0" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="新用户奖励钻石" prop="newUserReward">
                    <el-input-number v-model="form.newUserReward" :precision="0" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="心跳间隔" prop="heartbeatInterval">
                    <el-input-number v-model="form.heartbeatInterval" :precision="0" :min="1"></el-input-number>&nbsp;秒
                </el-form-item>
                <el-form-item label="免打扰时长" prop="dndPeriod">
                    <el-input-number v-model="form.dndPeriod" :precision="0" :min="1"></el-input-number>&nbsp;秒
                </el-form-item>
                <el-form-item label="主播转换usd汇率" prop="anchorExchangeRate">
                    <el-input-number v-model="form.anchorExchangeRate" :precision="0" :min="1"></el-input-number>&nbsp;
                </el-form-item>
                <el-form-item label="支付方式" prop="payTypes">
                    <el-checkbox-group v-model="form.payTypes" >
                        <el-checkbox v-for="item in payTypeList" :label="item.value" :key="item">{{ item.label }}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="支付渠道" prop="payChannelIds" :hidden="isPayChannel">
                    <el-select v-model="form.payChannelIds" multiple placeholder="请选择">
                        <el-option v-for="item in payChannelList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="cdn" prop="cdn">
                    <el-input v-model="form.cdn" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="标签" prop="tags">
                    <el-tag
                        :key="tag"
                        v-for="tag in form.tagList"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
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
import { getAreaList, getAppList, getPayType, getPayChannelList} from "@/utils/common";
import {isEmpty} from "@/api/api";

export default {
    data() {
        return {
            form: {
                payTypes: [],
                tagList: []
            },
            dialogVisible: false,
            imgDialogVisible: false,
            inputVisible: false,
            inputValue: '',
            areaList: getAreaList(),
            appList: [],
            payTypeList: getPayType(),
            payChannelList: [],
            isPayChannel: true,
            rules: {
                convertRate: [
                    {required: true, message: '内容不能为空', trigger: 'change'}
                ],
                depositCommission: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                rewardCommission: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                callPrice: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                freeMessageCount: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                newUserReward: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                heartbeatInterval: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                dndPeriod: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                payTypes: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                cdn: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.form = row
                if(typeof(row.tags) !== "undefined"){
                    this.form.tagList = row.tags.split(",")
                }
                if(isEmpty(row.payTypes)){
                    this.form.payTypes = []
                }
                this.changeArea(row.areaId)
            }
        },
        submitForm() {
            const $this = this
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = this.form;
                    param.tags = this.form.tagList
                    this.$service.config.saveAreaConfig(param, function (result){
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
        handleClose(tag) {
            this.inputVisible = true;
            this.form.tagList.splice(this.form.tagList.indexOf(tag), 1);
            this.inputVisible = false;
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.form.tagList.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        changeArea(val) {
            this.payChannelList = getPayChannelList(val)

            let apps = getAppList()
            let newApps = []
            apps.forEach(item => {
                if(item.areaIds.indexOf(val)){
                    newApps.push(item)
                }
            })
            newApps.unshift({
                isAnchor: false,
                label: "全部",
                os: 1,
                value: 0
            })
            this.appList = newApps
        },
        changeApp(val) {
            this.isPayChannel = val !== 0 ? false : true
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
