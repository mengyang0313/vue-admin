<template>
    <el-dialog title="查看视频" :visible.sync="dialogVisible" append-to-body width="60%" :before-close="handleClose">
        <div class="table-classic-wrapper dialog-list">
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="thumb" label="应用App" align="center" width="300">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                    <i class="icon-android-fill"></i>
                                </span>
                            <span v-else>
                                    <i class="icon-pingguo"></i>
                                </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="areaStr" label="区域" align="center" width="200"/>
                <el-table-column prop="type" label="文件类型" align="center" width="200"/>
                <el-table-column prop="ownerId" label="所有者ID" align="center" width="200"/>
                <el-table-column prop="thumb" label="视频" align="center">
                    <template scope="scope">
                        <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <!--                    <el-table-column label="操作" align="center">-->
                <!--                        <template slot-scope="scope">-->
                <!--                            <el-button type="success" plain size="mini" @click="handleRefuse(scope.$index, scope.row)">删除</el-button>-->
                <!--                        </template>-->
                <!--                    </el-table-column>-->
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>
        </div>
        <el-dialog
            title="播放视频"
            :visible.sync="playVisible"
            :before-close="closeVideo"
            :append-to-body="true">
            <div class="content-item">
                <VueVideoPlayer ref="myVideoPlayer"></VueVideoPlayer>
            </div>
        </el-dialog>
    </el-dialog>
</template>

<script>
import Pagination from '../../../../components/Pagination'
import VueVideoPlayer from '../../../../components/VueVideoPlayer'
import {getAppList, getAppName, getAreaList, getArrName, getFileType} from "@/utils/common"

export default {
    name: 'Table',
    components: { Pagination, VueVideoPlayer },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            search: {
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            videoList: [],
            imgList: [],
            // 数据总条数
            total: 0,
            playVisible: false,
            dialogVisible: false,
            appList: getAppList(),
            areaList: getAreaList(),
            fileTypeList: getFileType()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        init(row){
            this.videoList = row.videos
            this.fetchData()
        },
        fetchData() {
            let $this = this
            let data = []
            this.videoList.forEach(item => {
                let json = {
                    "app" : getAppName($this.appList, item.getAppId()),
                    "areaStr" : getArrName($this.areaList, item.getAreaId()),
                    "type" : getArrName($this.fileTypeList, item.getType()),
                    "ownerId" : item.getOwnerId(),
                    "thumb" : item.getThumb(),
                    "uri" : item.getUri()
                }
                data.push(json)
            })
            this.total = this.videoList.length
            this.tableData = data
            this.listLoading = false
        },
        play(row) {
            this.playVisible = true;
            let src = row.uri
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.initSrc(src);
            })
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
    }
}
</script>

<style lang="less">
.dialog-list{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom:  20px;
}
</style>
