<template>
    <div class="table-classic-wrapper">
        <Hints :hidden="isHints">
            <template slot="hintName"> 编辑 < {{ search.nickname }} > 话术</template>
        </Hints>
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addRobotMessage', '')">+ 新增话术</el-button>
            </div>
            <!-- 查询栏 -->
<!--            <el-form-->
<!--                ref="searchForm"-->
<!--                :inline="true"-->
<!--                :model="search"-->
<!--                label-width="90px"-->
<!--                class="search-form"-->
<!--            >-->
<!--                <template>-->
<!--                    <el-form-item label="机器人ID" prop="robotId">-->
<!--                        <el-input v-model="search.robotId" placeholder="机器人主播ID"/>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item>-->
<!--                        <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>-->
<!--                    </el-form-item>-->
<!--                </template>-->
<!--            </el-form>-->
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
                <el-table-column prop="robotId" label="机器人ID" align="center" width="120" />

                <el-table-column prop="typeStr" label="话术类型" align="center" width="100"/>
                <el-table-column prop="actionStr" label="动作类型" align="center" width="100"/>
                <el-table-column prop="text" label="内容" align="center" width="350" />
                <el-table-column prop="thumb" label="文件" align="center" width="150">
                    <template scope="scope">
                        <div v-if="scope.row.type === 4">
                            <el-image contain style="width: 50px; height: 50px" :src="scope.row.uri" :preview-src-list="[scope.row.uri]"/>
                        </div>
                        <div v-if="scope.row.type === 5 || scope.row.type === 8">
                            <div @click="play(scope.row)">
                                <el-image style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                            </div>
                        </div>
                        <div v-if="scope.row.type === 6">
                            <div v-if="scope.row.uri">
                                <m-audio :src="scope.row.uri" ></m-audio>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" align="center" width="150"/>
                <el-table-column prop="enable" label="状态" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="interval" label="间隔时间" align="center" width="150"/>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addRobotMessage', scope.row)">更新</el-button>
                        <el-button type="text" @click="deleteRobotMessage(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
            -->
            <!-- 新增话术 -->
            <addRobotMessage ref="addRobotMessage" @fetchData="fetchData"/>

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
import addRobotMessage from './dialog/add-robot-message'
import Hints from '../../../components/Hints'
import {getActionType, getMessageType} from "@/utils/dist"
import VueVideoPlayer from '../../../components/VueVideoPlayer'
import {isEmpty} from "@/api/api";

export default {
    name: 'Table',
    components: {Pagination, Hints, addRobotMessage, VueVideoPlayer},
    data() {
        return {
            listLoading: true,
            search: {
                robotId: undefined,
                anchorId: undefined,
                nickname: "",
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
            isHints: true,
        }
    },
    created() {
        this.search.robotId = this.$route.query.robotId
        this.search.nickname = this.$route.query.nickname
        this.fetchData()
    },
    watch: {
        $route: {
            handler() {
                let robotId = this.$route.query.robotId
                let nickname = this.$route.query.nickname
                if(!isEmpty(robotId)){
                    this.search.robotId = robotId
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
            if(typeof(this.search.robotId) == "undefined"){
                this.listLoading = false
                return
            }
            this.$service.robot.getRobotMessageList(this.search, function (result){
                const list = result.getMessagesList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "robotId" : item.getAnchorId(),
                        "type" : item.getType(),
                        "typeStr" : getMessageType(item.getType()),
                        "text" : item.getText(),
                        "uri" : item.getUri(),
                        "thumb" : item.getThumb(),
                        "sort" : item.getSort(),
                        "enable": item.getEnable(),
                        "interval": item.getInterval(),
                        "action": item.getAction(),
                        "actionStr": getActionType(false, item.getAction()),
                        "struct": item
                    }
                    data.push(json)
                })
                $this.tableData = data
                $this.listLoading = false
            });
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row, this.search.robotId)
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
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
        deleteRobotMessage(row){
            this.$confirm('是否删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const $this = this
                let param = {
                    "id" : row.id
                }
                this.$service.robot.deleteRobotMessage(param, function (result){
                    result ? $this.$message.success("删除成功!") : $this.$message.error("删除失败 !")
                    $this.fetchData()
                });
            })
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
