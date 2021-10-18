<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
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
            isRouterAlive: true
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick( () => {
                this.isRouterAlive = true;
            })
            initRouter(function (){
                //location.reload()
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
