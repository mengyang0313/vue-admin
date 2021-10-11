<template>
    <div id="app">
        <router-view :key="routerKey"/>
    </div>
</template>

<script>
import {initRouter} from '@/router/logininitrouter'

export default {
    name: 'App',
    provide() {
        return {
            reload:this.reload
        }
    },
    data() {
        return {
            routerKey:1
        };
    },
    methods: {
        reload() {
            initRouter(function (){
                location.reload()
            })
        }
    }
}
</script>

<style lang="less">
@import "assets/less/index.less";
@import "assets/less/reset";
@import "assets/icon/iconfont.css";
@import "assets/icon-admin/iconfont.css";
</style>
