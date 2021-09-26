<template>
    <div class="user-center-wrapper clear-fix">
        <el-card shadow="always" :body-style="{padding: '50px'}">
            <div class="user-avatar">
                <img src="../assets/img/avatar.png" alt="avatar">
            </div>
            <ul class="user-info">
                <li>
                    <label>帐号：</label>
                    <span>{{ userInfo.email }}</span>
                </li>
                <li>
                    <label>真实姓名：</label>
                    <span>{{ userInfo.name }}</span>
                </li>
                <li>
                    <label>权限区域：</label>
                    <span>{{ userInfo.areaIds }}</span>
                </li>
                <li>
                    <label>权限应用：</label>
                    <span>{{ userInfo.appIds }}</span>
                </li>
                <li>
                    <label>权限模块：</label>
                    <span>{{ userInfo.modules }}</span>
                </li>
                <li>
                    <label>备注：</label>
                    <span>{{ userInfo.note }}</span>
                </li>
                <li>
                    <label>登陆时间：</label>
                    <span>{{ userInfo.loginAt }}</span>
                </li>
                <li>
                    <label>登陆IP：</label>
                    <span>{{ userInfo.loginIp }}</span>
                </li>
                <li>
                    <label>创建时间：</label>
                    <span>{{ userInfo.createdAt }}</span>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'UserCenter',
    data() {
        return {
            userInfo: {
                email: undefined
            }
        }
    },
    created() {
        const $this = this
        this.$service.user.getAdminInfo({}, function (result){
            $this.userInfo.email = result.getEmail()
            $this.userInfo.name = result.getName()
            $this.userInfo.note = result.getNote()
            $this.userInfo.areaIds = result.getAreaIdsList()
            $this.userInfo.appIds = result.getAppIdsList()
            $this.userInfo.modules = result.getModulesList()
            $this.userInfo.loginAt = new Date(result.getLoginAt()*1000).format('yyyy-MM-dd hh:mm:ss'),
            $this.userInfo.loginIp = result.getLoginIp()
            $this.userInfo.createdAt = new Date(result.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss')
        });
        /*getUserInfo().then(res => {
            this.userInfo = res
        })*/
    }
}
</script>

<style lang="less">
.user-center-wrapper {
    .user-avatar {
        float: left;
        width: 150px;
        height: 150px;
    }

    .user-info {
        float: left;
        width: 800px;
        margin-left: 50px;
        margin-bottom: 50px;

        li {
            height: 34px;
            line-height: 34px;

            label,
            span {
                display: inline-block;
                vertical-align: middle;
            }

            label {
                width: 80px;
                margin-right: 12px;
                text-align: right;
            }
        }
    }
}
</style>
