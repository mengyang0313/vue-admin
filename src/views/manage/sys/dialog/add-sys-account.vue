<template>
    <el-dialog title="新增管理帐号" :visible.sync="dialogVisible" append-to-body width="50%" :before-close="closeDialog">
        <div class="form-list-wrapper">
            <el-form ref="ruleForm" :model="form" :rules="rules" label-width="150px" class="form-list">

                <el-form-item label="账户名" prop="email">
                    <el-input v-model="form.email" maxlength="15" show-word-limit placeholder="请输入"/>
                </el-form-item>
                <el-form-item label="密码" prop="passwordNew">
                    <el-input v-model="form.passwordNew" placeholder="请输入" maxlength="16" show-password/>
                </el-form-item>
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入" show-word-limit/>
                </el-form-item>
                <el-form-item label="运营区域" prop="areaId">
                    <el-select v-model="form.areaId" placeholder="请选择">
                        <el-option v-for="item in areaList"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="权限设置" prop="routers">
                    <el-tree
                        ref="routers"
                        :data="data"
                        show-checkbox
                        node-key="id"
                        :props="defaultProps">
                    </el-tree>
                </el-form-item>

                <el-form-item class="submit-box">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-right: 50px">确&nbsp;&nbsp;&nbsp;定</el-button>
                    <el-button @click="resetForm('form')">重&nbsp;&nbsp;&nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>

import {getAreaList} from '@/utils/dist'
import {isEmpty} from "@/api/api";
import Layout from "@/layout";
import {asyncRoutes} from '@/router/routes'

export default {
    data() {
        const baseData = () => {
            const data = []
            for (let i = 1; i < 10; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`
                })
            }
            return data
        }
        return {
            //data: baseData(),
            form: {
                passwordNew: '',
                routers: undefined
            },
            value1: [1, 5],
            value2: [1, 5],
            dialogVisible: false,
            areaList : getAreaList(true),
            data2: [
            ],
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            rules: {
                areaId: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                passwordNew: [
                    {min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: ['blur', 'change']},
                    {pattern: /^[a-zA-Z0-9_-]{6,16}$/, message: '密码只支持字母、数字和下划线', trigger: ['blur', 'change']}
                ],
                name: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        init(row){
            if(typeof(row.id) != "undefined"){
                this.form = row
            }
            this.form.passwordNew = ''
            this.handleRouter()
        },
        submitForm(formName) {
            const $this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let psw = isEmpty($this.form.passwordNew) ? $this.form.password : $this.form.passwordNew
                    this.form.password = psw
                    let selRouters = this.$refs.routers.getCheckedNodes()
                    console.log("routers:"+ selRouters)
                    this.$service.admin.saveAdmin(this.form, function (result){
                        if (result) {
                            $this.$message.success("保存成功!")
                            $this.closeDialog()
                        } else {
                            $this.$message.error("保存失败!")
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
        handleRouter(){
            console.log(asyncRoutes)
            asyncRoutes.forEach(item => {
                let json = {}
                if(typeof(item.meta) == "undefined"){
                    json = {
                        key: item.children.meta.title
                    }
                }
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
