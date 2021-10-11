<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        console.log("这是app页面")
    }
}
</script>

<style lang="less">
@import "assets/less/index.less";
@import "assets/less/reset";
@import "assets/icon/iconfont.css";
@import "assets/icon-admin/iconfont.css";
</style>
