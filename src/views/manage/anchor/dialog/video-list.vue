<template>
    <el-dialog title="已有视频" :visible.sync="dialogVisible" append-to-body width="80%" :before-close="closeDialog">
        <div class="table-classic-wrapper" style="padding-bottom: 20px">
                <!-- 表格栏 -->
                <el-table
                    ref="multipleTable"
                    v-loading="listLoading"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    size="medium"
                >
                    <el-table-column prop="video" label="视频" align="center" width="300">
                        <template scope="scope">
                            <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.video" ></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column prop="onlineStatus" label="在线状态" align="center" width="200">
                        <template slot-scope="scope">
                            <div slot="reference">
                                <el-tag size="medium">{{ scope.row.onlineStatus }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column prop="lastLoginTime" label="录制时间" align="center"/>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 分页栏 -->
                <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                            @pagination="fetchData"/>

                <el-dialog
                    title="播放视频"
                    :visible.sync="playVisible"
                    :before-close="closeVideo"
                    :append-to-body="true">
                    <div class="content-item">
                        <VueVideoPlayer ref="myVideoPlayer"></VueVideoPlayer>
                    </div>
                </el-dialog>
        </div>
    </el-dialog>
</template>

<script>
import { getTableList } from '../../../../api/api'
import Pagination from '../../../../components/Pagination'
import VueVideoPlayer from '../../../../components/VueVideoPlayer'

export default {
    name: 'Table',
    components: { Pagination, VueVideoPlayer },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {},
            // 数据总条数
            total: 0,
            playVisible: false,
            dialogVisible: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        videoListInit(uid){
            console.log("init uid:" + uid);
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            this.listLoading = true
            let url = process.env.VUE_APP_JSON_URI + "/anchor-manage.json"
            // 获取数据列表接口
            getTableList(this.search, url).then(res => {
                const data = res.data
                if (data.code === 0) {
                    this.total = data.data.total
                    this.tableData = data.data.list
                    this.listLoading = false
                }
            }).catch(() => {
                this.listLoading = false
            })
        },
        play(row) {
            this.playVisible = true;
            let src = 'https://cdn.jsdelivr.net/gh/baimingxuan/media-store/videos/houlang.mp4'
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.initSrc(src);
            })
            //this.videoUrl = row.videoPath;
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        closeVideo(){
            this.playVisible = false;
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.emptySrc();
            })
        },
        closeDialog() {
            this.dialogVisible = false
            this.resetForm()
            this.$emit('fetchData');
        },
        // 删除
        handleRefuse(index, row) {
            console.log(index, row)
            this.$confirm('是否删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已删除!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        }
    }
}
</script>

<style lang="less">
.video-player-wrapper {
    .content-box {
        height: 440px;
    }

    .content-item {
        padding: 8px 0;

        .video-js {
            .vjs-big-play-button {
                top: 45%;
                left: 45%;
                font-size: 2em;
            }
        }
    }
}
</style>
