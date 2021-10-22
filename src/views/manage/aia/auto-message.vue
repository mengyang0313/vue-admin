<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('addAutoMessage', '')">+ 新增话术</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <template>
                    <el-form-item label="区域" prop="areaId">
                        <el-select v-model="search.areaId" :disabled="authAreaId !== 0" placeholder="请选择">
                            <el-option v-for="item in areaData"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="场景标签" prop="action">
                        <el-select v-model="search.action" placeholder="请选择">
                            <el-option v-for="item in actionTypes"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态" prop="enable">
                        <el-switch v-model="search.enable"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">筛选</el-button>
                    </el-form-item>
                </template>
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
                <el-table-column prop="id" label="话术ID" align="center" width="80"/>
                <el-table-column prop="areaName" label="区域" align="center" width="120"/>
                <el-table-column prop="action" label="动作类型" align="center" width="150">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.actionStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="type" label="消息类型" align="center" width="150">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.typeStr }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="enable" label="状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.enable" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="text" label="内容" align="center" />
                <el-table-column prop="thumb" label="文件" align="center" width="200">
                    <template scope="scope">
                        <div v-if="scope.row.type === 4">
                            <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.uri" :preview-src-list="[scope.row.uri]"/>
                        </div>
                        <div v-if="scope.row.type === 5">
                            <el-image @click="play(scope.row)" style="width: 50px; height: 50px" :src="scope.row.thumb" contain></el-image>
                        </div>
                        <div v-if="scope.row.type === 6">
                            <div v-if="scope.row.uri">
                                <m-audio :src="scope.row.uri" ></m-audio>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('addAutoMessage', scope.row)">更新</el-button>
                        <el-button type="text" @click="deleteAutoMessage(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 编辑资料 -->
            <addAutoMessage ref="addAutoMessage" @fetchData="fetchData"/>

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
import addAutoMessage from './dialog/add-auto-message'
import VueVideoPlayer from '../../../components/VueVideoPlayer'
import {getBool, getAreaList, getActionType, getArrName, getMessageType, getCurrentUserAreaId} from "@/utils/dist";

export default {
    components: { Pagination, addAutoMessage, VueVideoPlayer},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: undefined,
                enable: true,
                action: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            multipleSelection: [],
            tableData: [],
            playVisible: false,
            areaData: getAreaList(false),
            bools: getBool(),
            actionTypes: getActionType(true)
        }
    },
    created() {
        this.search.areaId = this.authAreaId === 0 ? this.areaData[0].value : this.authAreaId
        this.fetchData()
    },
    methods: {
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.robot.getAutoMessageList(this.search, function (result){
                const list = result.getMessagesList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaName" : getArrName($this.areaData, item.getAreaId()),
                        "type" : item.getType(),
                        "typeStr" : getMessageType(item.getType()),
                        "action": item.getAction(),
                        "actionStr": getActionType(false, item.getAction()),
                        "text" : item.getText(),
                        "enable" : item.getEnable(),
                        "uri" : item.getUri(),
                        "thumb" : item.getThumb(),
                        "struct": item
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        onSearch() {
            this.search.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
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
        deleteAutoMessage(row){
            this.$confirm('是否删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const $this = this
                let param = {
                    "id" : row.id
                }
                this.$service.robot.deleteAutoMessage(param, function (result){
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
    .el-divider--horizontal{
        width: 95%;
        margin-left: 20px;
        margin-right: 20px;
    }
    .search-box {
        margin-left: 0;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px
    }
}
</style>
