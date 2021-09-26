<template>
    <el-dialog title="已有视频" :visible.sync="dialogVisible" append-to-body width="80%" :before-close="handleClose">
        <div class="table-classic-wrapper">
            <el-card shadow="always">
                <!-- 表格栏 -->
                <el-table
                    ref="multipleTable"
                    v-loading="listLoading"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    size="medium"
                >
                    <el-table-column prop="thumb" label="视频" align="center" width="300">
                        <template scope="scope">
                            <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态" align="center" width="200">
                        <template slot-scope="scope">
                            <div slot="reference">
                                <el-tag size="medium">{{ scope.row.status }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column prop="createdAt" label="录制时间" align="center"/>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 分页栏 -->
                <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
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
            </el-card>
        </div>
    </el-dialog>
</template>

<script>
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
            search: {
                ownerId: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
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
        init(row){
            this.search.ownerId = row.search.ownerId
            this.fetchData()
        },
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.audit.getLiveList(this.search, function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "thumb" : item.getThumb(),
                        "status" : item.getStatus(),
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss')
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        play(row) {
            this.playVisible = true;
            let src = 'https://cdn.jsdelivr.net/gh/baimingxuan/media-store/videos/houlang.mp4'
            src = row.uri
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.initSrc(src);
            })
            //this.videoUrl = row.videoPath;
        },
        closeVideo(){
            this.playVisible = false;
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.emptySrc();
            })
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
