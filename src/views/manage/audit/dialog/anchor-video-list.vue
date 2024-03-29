<template>
    <el-dialog title="查看视频" :visible.sync="dialogVisible" append-to-body width="60%" :before-close="handleClose">
        <div class="table-classic-wrapper dialog-list">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" icon="el-icon-check" @click="batchPassed">批量通过</el-button>
                <el-button type="warning" icon="el-icon-delete" @click="batchDele">批量删除</el-button>
            </div>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="id" label="ID" align="center" width="150" />
                <el-table-column prop="ownerId" label="所有者ID" align="center" width="150"/>
                <el-table-column prop="thumb" label="视频" align="center" width="180">
                    <template scope="scope">
                        <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="areaStr" label="区域" align="center" width="180"/>
                <el-table-column prop="status" label="审核状态" align="center" width="120"/>
                <el-table-column label="操作" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="passed(scope.row)">通过</el-button>
                        <el-button type="text" @click="delVideo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>
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
import {getAppList, getAppName, getAreaList, getArrName, getFileType, getReviewStatus} from "@/utils/dist"
import {toTime} from "@/utils/util";

export default {
    name: 'Table',
    components: { Pagination, VueVideoPlayer },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            search: {
                anchorId : undefined,
                status: 5,
                page: {
                    currentPage: 1,
                    pageSize: 50
                }
            },
            videoList: [],
            imgList: [],
            // 数据总条数
            total: 0,
            multipleSelection: [],
            playVisible: false,
            dialogVisible: false,
            appList: getAppList(),
            areaList: getAreaList(true),
            fileTypeList: getFileType()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        init(row){
            this.search.anchorId = row.ownerId
            this.fetchData()
        },
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.audit.getLiveList(this.search, function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "type" : getArrName($this.fileTypeList, item.getType()),
                        "ownerId" : item.getOwnerId(),
                        "thumb" : item.getThumb(),
                        "uri" : item.getUri(),
                        "status" : getReviewStatus(item.getStatus())
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
            let src = row.uri
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.initSrc(src);
            })
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
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
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        passed(row) {
            const $this = this
            let param = {
                "id" : row.id,
                "status" : 5
            }
            this.$service.audit.processLive(param, function (result){
                result ? $this.$message.success("审核通过 !") : $this.$message.error("审核失败 !")
                $this.fetchData()
            });
        },
        // 删除
        delVideo(row) {
            const $this = this
            let param = {
                "id" : row.id,
                "status" : 4
            }
            this.$service.audit.processLive(param, function (result){
                result ? $this.$message.success("已删除 !") : $this.$message.error("删除失败 !")
                $this.fetchData()
            });
        },
        batchPassed(){
            this.multipleSelection.forEach(item => {
                this.passed(item)
            })
        },
        batchDele(){
            this.multipleSelection.forEach(item => {
                this.delVideo(item)
            })
        }
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
