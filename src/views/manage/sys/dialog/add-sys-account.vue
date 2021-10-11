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
                        node-key="key"
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
import {asyncRoutesData} from '@/router/routes'

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
            data: this.handleTree(),
            defaultProps: {
                children: 'children',
                label: 'title'
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
        },
        submitForm(formName) {
            const $this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let param = this.form
                    let psw = isEmpty(param.passwordNew) ? param.password : param.passwordNew
                    param.password = psw

                    let checkNodes = this.$refs.routers.getCheckedNodes()
                    let halfCheckNodes = this.$refs.routers.getHalfCheckedNodes()
                    checkNodes.push.apply(checkNodes, halfCheckNodes)
                    param.modules = $this.handleRouter(checkNodes)

                    this.$service.admin.saveAdmin(param, function (result){
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
        handleRouter(checkNodes){
            // let arr = []
            // checkNodes.forEach(item => {
            //     arr.push(JSON.stringify(item))
            // })
            // return arr
            let parents = []
            let childrens = []
            checkNodes.forEach(item => {
                if(item.isParent){
                    parents.push(item)
                }else{
                    childrens.push(item)
                }
            })
            parents.sort(function(x,y){
                return x.order-y.order;
            });
            return JSON.stringify({parents: parents, childrens: childrens})
        },
        handleTree(){
            console.log(asyncRoutesData)
            let list = []
            let order = 0
            asyncRoutesData.forEach(item => {
                let json = {
                    key: item.name,
                    isParent : true,
                    order: order++
                }
                if(typeof(item.meta) === "undefined"){
                    json.title = item.children[0].meta.title
                }else{
                    json.title = item.meta.title
                    let childList = []
                    item.children.forEach(children => {
                        let child = {
                            key: children.name,
                            title: children.meta.title,
                            isParent : false,
                            order: order++
                        }
                        childList.push(child)
                    })
                    json.children = childList
                }
                list.push(json)
            })
            return list
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
