<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="主播Id" prop="anchorId">
                    <el-input v-model="search.anchorId" placeholder="主播Id"/>
                </el-form-item>
                <el-form-item label="区域">
                    <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
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
                <el-table-column prop="id" label="ID" align="center" width="120" />
                <el-table-column prop="ownerId" label="主播Id" align="center" width="180" />
                <el-table-column prop="areaName" label="区域" align="center" width="120"/>
                <el-table-column prop="thumb" label="视频" align="center" width="150">
                    <template scope="scope">
                        <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="ownerId" label="已有视频" align="center" width="120">
                    <template scope="scope">
                        <el-button type="text" @click="toDialog('videoList',scope.row)">查看</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="录制时间" align="center"/>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="passed(scope.row)">通过</el-button>
                        <el-button type="text" @click="delVideo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <el-dialog
                title="播放视频"
                :visible.sync="playVisible"
                :before-close="closeVideo"
                :append-to-body="true">
                <div class="content-item">
                    <VueVideoPlayer ref="myVideoPlayer"></VueVideoPlayer>
                </div>
            </el-dialog>

            <!-- 视频列表 -->
            <videoList ref="videoList" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import {getAppList, getAppName, getAreaList, getArrName, getCurrentUserAreaId, getReviewStatus} from "@/utils/dist"
import videoList from './dialog/anchor-video-list'
import {toTime} from "@/utils/date"
import VueVideoPlayer from '../../../components/VueVideoPlayer'

export default {
    name: 'Table',
    components: {Pagination, videoList, VueVideoPlayer},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: undefined,
                reviewStatus: 2,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            tableData: [],
            multipleSelection: [],
            playVisible: false,
            areaData: getAreaList(false),
            reviewStatus: getReviewStatus(),
            appListAll: getAppList(false)
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaData[0].value : this.authAreaId
        this.fetchData()
    },
    methods: {
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
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appListAll, item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaName" : getArrName($this.areaData, item.getAreaId()),
                        "ownerId" : item.getOwnerId(),
                        "ownerType" : item.getOwnerType(),
                        "thumb" : item.getThumb(),
                        "likes" : item.getLikes(),
                        "uri" : item.getUri(),
                        "createdAt" : toTime(item.getCreatedAt())
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        // 查询数据
        onSubmit() {
            this.search.currentPage = 1
            this.fetchData()
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        play(row) {
            this.playVisible = true;
            let src = row.uri
            console.log("播放视频")
            console.log(row)
            console.log(row.uri)
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
        // 拒绝
        delVideo(row) {
            const $this = this
            let param = {
                "id" : row.id,
                "status" : 4
            }
            this.$service.audit.processLive(param, function (result){
                result ? $this.$message.success("已拒绝 !") : $this.$message.error("拒绝失败 !")
                $this.fetchData()
            });
        }
    }
}
</script>

<style lang="less">
.table-classic-wrapper {
    .el-card {
        min-height: 656px;
    }

    .control-btns {
        margin-bottom: 20px;
    }

    .search-form {
        padding-top: 18px;
        margin-bottom: 15px;
        background-color: #f7f8fb;
    }

    .el-table thead {
        font-weight: 600;

        th {
            background-color: #f2f3f7;
        }
    }

    .dialog-form {
        .el-input {
            width: 380px;
        }

        .footer-item {
            margin-top: 50px;
            text-align: right;
        }
    }

}
</style>
