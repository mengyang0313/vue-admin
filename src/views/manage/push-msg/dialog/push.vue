<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="handleClose">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">
                <el-form-item label="目标APP" prop="area">
                    <el-select v-model="form.area" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标区域" prop="area">
                    <el-select v-model="form.area" placeholder="请选择">
                        <el-option
                            v-for="item in areaData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="目标人群：" prop="bool">
                    <el-radio-group v-model="form.crowd">
                        <el-radio @change="changeCrowd()" :label="1">主播端</el-radio>
                        <el-radio @change="changeCrowd()" :label="2">客户端</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="目标对象：" prop="bool">
                    <div v-if="form.crowdBool">
                        <el-radio-group v-model="form.obj" @change="changeSingle()">
                            <el-radio :label="1">全部用户</el-radio>
                            <el-radio :label="2">付费用户</el-radio>
                            <el-radio :label="3">未付费用户</el-radio>
                            <el-radio :label="4">单一用户</el-radio>
                        </el-radio-group>
                    </div>
                    <div v-if="!form.crowdBool">
                        <el-radio-group v-model="form.obj">
                            <el-radio label="全部用户"/>所谓
                            <el-radio label="单一用户" @change="changeSingle()"/>
                        </el-radio-group>
                    </div>
                </el-form-item>

                <div v-if="form.singleBool">
                    <el-form-item label="单一用户Id：" prop="bool">
                        <el-input v-model="form.singleUid" placeholder="单一用户Id"/>
                    </el-form-item>
                </div>

                <el-form-item label="推送标题：" prop="bool">
                    <el-input v-model="form.title" placeholder="推送标题"/>
                </el-form-item>
                <el-form-item label="推送封面：" prop="bool">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-image style="width: 100px; height: 150px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" contain></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="推送内容：" prop="bool">
                    <el-input
                        v-model="form.content"
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5 }"
                        placeholder="请输入内容"
                        maxlength="50"
                        show-word-limit
                    />
                </el-form-item>
                <el-form-item label="跳转链接：" prop="bool">
                    <el-input v-model="form.url" placeholder="跳转链接"/>
                </el-form-item>
                <el-form-item label="定时推送：" prop="bool">
                    <el-radio-group v-model="form.timing">
                        <el-radio label="主播端"/>
                        <el-radio label="用户端"/>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="定时时间：" prop="bool">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="开始时间" v-model="form.startTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="1" align="center">-</el-col>
                    <el-col :span="10">
                        <el-date-picker type="date" placeholder="结束时间" v-model="form.endTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('form')" style="margin-right: 50px">提&nbsp;&nbsp;&nbsp;交</el-button>
                    <el-button @click="resetForm('form')">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>

import { areaData, boolDict} from '@/dict/index'

export default {
    name: 'Form',
    components: { areaData, boolDict},
    data() {
        return {
            form: {
                unionId: '',
                area: '',
                crowd: 2,
                title: '',
                crowdBool: true,
                singleBool: false,
                singleUid: '',
                content: '',
                url: '',
                timing: '',
                startTime: '',
                endTime: '',
                obj: 1
            },
            title: '',
            dialogVisible: false,
            boolDict
        }
    },
    methods: {
        init(row){
            this.dialogVisible = true
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
        changeCrowd(){
            this.form.crowdBool = !this.form.crowdBool
        },
        changeSingle(){
            this.form.singleBool = this.form.obj === 4
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
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
