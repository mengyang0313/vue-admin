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
                    <span>{{ userInfo.areaId }}</span>
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

import {toTime} from "@/utils/util";
import {getAreaList, getArrName} from "@/utils/dist";

export default {
    name: 'UserCenter',
    inject:["reload"],
    data() {
        return {
            userInfo: {
                email: undefined
            },
            areaList: getAreaList(true)
        }
    },
    created() {
        const $this = this
        this.$service.user.getAdminInfo({}, function (result){
            $this.userInfo.email = result.getEmail()
            $this.userInfo.name = result.getName()
            $this.userInfo.note = result.getNote()
            $this.userInfo.areaId = getArrName($this.areaList, result.getAreaId())
            $this.userInfo.appIds = result.getAppIdsList()
            $this.userInfo.loginAt = toTime(result.getLoginAt()),
            $this.userInfo.loginIp = result.getLoginIp()
            $this.userInfo.createdAt = toTime(result.getCreatedAt())
        })
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
