<template>
    <div class="table-classic-wrapper">
        <Hints>
            <template slot="hintName"> 编辑 < {{ search.nickname }} > 动态</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addRobotDynamic', undefined, search.entityId)">+ 新增动态</el-button>
                <el-button type="danger" @click="batchDelete">批量删除</el-button>
            </div>
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="entityId" label="机器人Id" align="center" width="100"/>
                <el-table-column prop="areaStr" label="区域" align="center" width="80" />
                <el-table-column prop="status" label="审核状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-tag size="medium">{{ scope.row.status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="content" label="内容" align="center" width="350" />
                <el-table-column prop="images" label="图片" align="center" width="120">
                    <template scope="scope">
                        <el-image v-if="scope.row.images[0]" contain style="width: 50px; height: 50px" :src="scope.row.images[0]" :preview-src-list="scope.row.images"/>
                    </template>
                </el-table-column>
                <el-table-column prop="thumb" label="视频" align="center" width="150">
                    <template scope="scope">
                        <el-image v-if="scope.row.thumb" @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="likes" label="点赞次数" align="center" width="150"/>
                <el-table-column prop="publishAtTime" label="发布时间" align="center"/>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addRobotDynamic', scope.row)">更新</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
            -->
            <!-- 新增话术 -->
            <addRobotDynamic ref="addRobotDynamic" @fetchData="fetchData"/>

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
</template>

<script>
import Pagination from '../../../components/Pagination'
import addRobotDynamic from './dialog/add-robot-dynamic'
import Hints from '../../../components/Hints'
import {getArrName, getAreaList, getReviewStatus} from "@/utils/dist";
import {toTime} from "@/utils/util";
import VueVideoPlayer from '../../../components/VueVideoPlayer'
import {isEmpty} from "@/api/api";


export default {
    name: 'Table',
    components: {Pagination, Hints, addRobotDynamic, VueVideoPlayer},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                entityType: 2,
                entityId: "",
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            tableData: [],
            multipleSelection: [],
            formVisible: false,
            playVisible: false,
            areaList: getAreaList(true),
            appList: []
        }
    },
    created() {
        this.search.entityId = this.$route.query.robotId
        this.search.nickname = this.$route.query.nickname
        this.fetchData()
    },
    watch: {
        $route: {
            handler(newName, oldName) {
                let robotId = this.$route.query.robotId
                let nickname = this.$route.query.nickname
                if(!isEmpty(robotId)){
                    this.search.entityId = robotId
                    this.search.nickname = nickname
                    this.fetchData()
                }
            },
            deep: true
        }
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.robot.getMomentList(this.search, function (result){
                const list = result.getMomentsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
                        "entityType" : item.getEntityType(),
                        "entityId" : item.getEntityId(),
                        "status" : getReviewStatus(item.getStatus()),
                        "content" : item.getContent(),
                        "images": item.getImagesList(),
                        "video": item.getVideo(),
                        "thumb": item.getThumb(),
                        "likes": item.getLikes(),
                        "publishAtTime": toTime(item.getPublishAt()),
                        "nickname": item.getNickname(),
                        "avatar": item.getAvatar(),
                        "struct": item
                    }
                    data.push(json)
                })
                // $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSubmit() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row, entityId){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row, entityId)
            })
        },
        play(row) {
            this.playVisible = true;
            let src = row.video
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
        handleDelete(index, row) {
            console.log(index, row)
            this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 此处可添加--删除接口
                // 删除成功调用fetchData方法更新列表
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 批量删除
        batchDelete() {
            if (this.multipleSelection.length < 1) {
                this.$message({
                    message: '请先选择要删除的数据！',
                    type: 'warning'
                })
            } else {
                this.handleDelete()
            }
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

    .upload-box,
    .export-data {
        width: 300px;
        margin: 0 auto 30px;
    }

    .upload-box {
        width: 156px;

        .files-upload {
            color: #20a0ff;
        }
    }

    .hints {
        font-size: 12px;
        color: #aaa;
        text-align: center;
    }
}
</style>
