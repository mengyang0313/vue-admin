<template>
    <div class="table-classic-wrapper">
        <Hints>
            <template slot="hintName"> 编辑 < {{ search.nickname }} > 动态</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addRobotDynamic', search.entityId)">+ 新增动态</el-button>
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
                <el-table-column prop="nickname" label="昵称" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="100">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="appStr" label="app" align="center" width="80" />
                <el-table-column prop="areaStr" label="区域" align="center" width="80" />
                <el-table-column prop="status" label="审核状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-tag size="medium">{{ scope.row.status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="content" label="内容" align="center" width="350" />
                <el-table-column prop="thumb" label="图片/视频" align="center" width="150">
                    <template slot-scope="scope">
                        <el-image v-if="scope.row.thumb!=''" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="likes" label="点赞次数" align="center" width="150"/>
                <el-table-column prop="publishAt" label="发布时间" align="center"/>
            </el-table>
            <!-- 分页栏
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
            -->
            <!-- 新增话术 -->
            <addRobotDynamic ref="addRobotDynamic" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import addRobotDynamic from './dialog/add-robot-dynamic'
import Hints from '../../../components/Hints'
import {getArrName, getAreaList, getAppList, getReviewStatus, getAppName, getAreaListByAreaId} from "@/utils/dist";
import {toTime} from "@/utils/date";


export default {
    name: 'Table',
    components: {Pagination, Hints, addRobotDynamic},
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
            areaList: getAreaList(),
            appList: []
        }
    },
    created() {
    },
    watch: {
        $route: {
            handler(newName, oldName) {
                this.search.entityId = this.$route.query.robotId
                this.search.nickname = this.$route.query.nickname
                this.fetchData()
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
                        "appStr" : getAppName(getAreaListByAreaId($this.search.areaId, false), item.getAppId()),
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
                        "publishAt": toTime(item.getPublishAt()),
                        "nickname": item.getNickname(),
                        "avatar": item.getAvatar()
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
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(this.search.entityId)
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
