<template>
    <div class="img">
        <el-upload
            ref="uploadImage"
            action=""
            accept=".jpg, .png, .bmp, .jpeg, .webp"
            list-type="picture-card"
            :multiple="false"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="handleChange"
        >
            <i class="el-icon-plus"></i>
            <el-dialog :modal-append-to-body="true" append-to-body>
                <img width="100%" alt />
            </el-dialog>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'UploadImage',
    props: {
        btnName: {
            type: String,
            default: '选择图片'
        }
    },
    methods: {
        handleChange(file) {
            const raw = file.raw
            if (!raw) return false
            if (!this.isImage(raw)) {
                this.$message.warning('图片只支持.jpg, .png, .bmp, .jpeg, .webp格式!')
                return false
            }
            if (this.isLimit5M(raw)) {
                this.$emit('on-success', raw)
                this.$refs.uploadImage.clearFiles()
            }
        },
        isLimit5M(image) {
            const isLimit5M = image.size / 1024 / 1024 < 5
            if (isLimit5M) {
                return true
            } else {
                this.$message.warning('上传的图片大小不能超过5M!')
                return false
            }
        },
        isImage(image) {
            return /\.(jpg|png|bmp|jpeg|webp)$/.test(image.name)
        }
    }
}
</script>
