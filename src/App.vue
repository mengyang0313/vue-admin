<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
let t =  window.devicePixelRatio;
document.body.style.zoom = 1/ t;
</script>

<style lang="less">
@import "assets/less/index.less";
@import "assets/less/reset";
</style>
