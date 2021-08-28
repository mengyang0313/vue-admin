<template>
    <el-dialog title="查看对话" :visible.sync="dialogVisible" append-to-body width="20%" :before-close="handleClose">
                中国.香港
    </el-dialog>
</template>

<script>

export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        init(uid){
        }
    }
}
</script>

