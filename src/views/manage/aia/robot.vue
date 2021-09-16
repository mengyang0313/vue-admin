<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('editRobot', '')">+ 新增机器人</el-button>
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
                        <el-select v-model="search.areaId" placeholder="请选择">
                            <el-option v-for="item in areaData"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态" prop="enable">
                        <el-select v-model="search.enable" placeholder="请选择">
                            <el-option v-for="item in bools"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="机器人ID" prop="robotId">
                        <el-input v-model="search.robotId" placeholder="机器人主播ID"/>
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
            >
                <el-table-column prop="anchorId" label="机器人ID" align="center" width="150" />
                <el-table-column prop="status" label="状态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="areaStr" label="区域" align="center" width="150" />
                <el-table-column prop="avatar" label="头像" align="center" width="150">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="nickname" label="昵称" align="center" width="400"/>
                <el-table-column prop="data" label="动态" align="center" width="150">
                    <template slot-scope="scope">
                        <el-button type="text">
                            <router-link :to="{path:'./robot-dynamic',query: {robotId: scope.row.anchorId,nickname: scope.row.nickname}}"> 查看 </router-link>
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="words" label="对话" align="center" width="150">
                    <template slot-scope="scope">
                        <a @click="toDialog('showDialog', scope.row.anchorId)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('editRobot', scope.row)">编辑资料</el-button>
                        <el-button type="text">
                            <router-link :to="{path:'./robot-message',query: {robotId: scope.row.anchorId,nickname: scope.row.nickname}}">编辑话术</router-link>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>

            <!-- 编辑资料 -->
            <editRobot ref="editRobot" @fetchData="fetchData"/>

            <!-- 查看对话 -->
            <showDialog ref="showDialog" @fetchData="fetchData"/>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import editRobot from './dialog/edit-robot'
import showDialog from './dialog/show-dialog'
import { getBool, getAreaList, getArrName} from "@/utils/common";

export default {
    components: { Pagination, editRobot, showDialog},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 1,
                enable: true,
                robotId: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreaList(),
            bools: getBool()
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.robot.getRobotList(this.search, function (result){
                const list = result.getRobotsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "anchorId" : item.getAnchorId(),
                        "status" : $this.handleStatus(item.getStatus()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "nickname" : item.getNickname(),
                        "avatar" : item.getAvatar(),
                        "birthday" : item.getBirthday(),
                        "occupation": item.getOccupation(),
                        "onlineStart": item.getOnlineStart(),
                        "onlineEnd": item.getOnlineEnd(),
                        "signature": item.getSignature(),
                        "photoIds": item.getPhotoIdsList(),
                        "photos": item.getPhotosList(),
                        "videoIds": item.getVideoIdsList(),
                        "videos": item.getVideosList(),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
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
        handleStatus(status){
            return status === 5
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
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
