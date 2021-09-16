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
                    <el-select v-model="search.areaId" placeholder="请选择" @change="changeArea">
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
                <el-table-column prop="anchorId" label="主播id" align="center" width="120" />
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="nickname" label="昵称" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="reviewStatus" label="账户状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <div v-if="4 === scope.row.reviewStatus">
                                <el-tag size="medium" type="warning">{{ scope.row.reviewStatusStr }}</el-tag>
                            </div>
                            <div v-else>
                                <el-tag size="medium">{{ scope.row.reviewStatusStr }}</el-tag>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="photoCount" label="相册文件" align="center" width="120" @click="toDialog('profileList', scope.row)">
                    <template slot-scope="scope">
                        {{ scope.row.photoCount }}
                    </template>
                </el-table-column>
                <el-table-column prop="videoCount" label="视频文件" align="center" width="120" >
                    <template scope="scope">
                        {{ scope.row.videoCount }}
                    </template>
                </el-table-column>
                <el-table-column prop="tags" label="标签" align="center" width="120" />
                <el-table-column prop="occupationStr" label="职业" align="center" width="120" />
                <el-table-column prop="birthday" label="生日" align="center" width="150" />
                <el-table-column prop="voiceGreeting" label="语音问候" align="center" width="150" />
                <el-table-column prop="onlineStart" label="常在线起始时间" align="center" width="150" />
                <el-table-column prop="onlineEnd" label="常在线结束时间" align="center" width="200" />
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text"  @click="handlePassed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="text"  @click="handleRefuse(scope.$index, scope.row)">拒绝</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

        </el-card>
    </div>

</template>

<script>
import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import {getAreaList, getOccupationType, getReviewStatus, getArrName} from "@/utils/common"

export default {
    name: 'Table',
    components: { Pagination, imageShow },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: 1,
                reviewStatus: 3,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            areaData: getAreaList(),
            reviewStatus: getReviewStatus(),
            occupationList: getOccupationType()
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
            this.$service.audit.getProfileList(this.search, function (result){
                const list = result.getProfilesList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "anchorId" : item.getAnchorId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "nickname" : item.getNickname(),
                        "avatar" : item.getAvatar(),
                        "reviewStatus" : item.getStatus(),
                        "reviewStatusStr" : getReviewStatus(item.getStatus()),
                        "photoCount" : item.getPhotoIdsList().length,
                        "videoCount" : item.getVideoIdsList().length,
                        "tags" : item.getTagsList().join(", "),
                        "occupation" : item.getOccupation(),
                        "occupationStr" : getArrName($this.occupationList, item.getOccupation()),
                        "birthday" : new Date(item.getBirthday()*1000).format('yyyy-MM-dd'),
                        "voiceGreeting" : item.getVoiceGreeting(),
                        "onlineStart" : item.getOnlineStart(),
                        "onlineEnd" : item.getOnlineEnd(),
                        "struct" : item
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
            this.search.page.currentPage = 1
            this.fetchData()
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 通过
        handlePassed(index, row) {
            const $this = this
            this.$confirm('是否通过', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                let param = {
                    "profileId" : row.id,
                    "status" : 5,
                    "reason" : value
                }
                this.$service.audit.processProfile(param, function (result){
                    result ? $this.$message.success("审核通过 !") : $this.$message.error("审核失败 !")
                    $this.fetchData()
                });
            })
        },
        // 拒绝
        handleRefuse(index, row) {
            const $this = this
            this.$prompt('', '拒绝原因', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                let param = {
                    "profileId" : row.id,
                    "status" : 4,
                    "reason" : value
                }
                this.$service.audit.processProfile(param, function (result){
                    result ? $this.$message.success("已拒绝 !") : $this.$message.error("拒绝失败 !")
                    $this.fetchData()
                });
            })
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        changeArea(){
            this.fetchData()
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
