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
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="待审核" size="medium">
                            <el-button @click="onSubmit">待审核资料 (65)</el-button>
                            <el-button @click="onSubmit">待审核视频 (65)</el-button>
                            <el-button @click="onSubmit">待审核举报 (65)</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="审核状态">
                            <el-select v-model="search.reviewStatus" placeholder="请选择" @change="changeArea">
                                <el-option v-for="item in reviewStatus"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="地区">
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
                    </el-col>
                </el-row>
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
                <el-table-column prop="id" label="主播id" align="center" width="120" />
                <el-table-column prop="areaId" label="地区" align="center" width="120" />
                <el-table-column prop="guildId" label="工会Id" align="center" width="120" />
                <el-table-column prop="nickname" label="昵称" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <imageShow :data="[scope.row.avatar]" :max-show="1"/>
                    </template>
                </el-table-column>
                <el-table-column prop="videos" label="录制视频" align="center" width="120">
                    <template scope="scope">
                        <imageShow :data="[scope.row.videos]" :max-show="1"/>
                    </template>
                </el-table-column>
                <el-table-column prop="onlineStatus" label="在线状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.onlineStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="accountStatus" label="账户状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.accountStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="profileCount" label="资料数量" align="center" width="120" />
                <el-table-column prop="tags" label="标签" align="center" width="120" >
                    <template scope="scope">
                        <el-tag size="medium">{{ scope.row.tags }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="occupation" label="职业" align="center" width="120" />
                <el-table-column prop="birthday" label="生日" align="center" width="150" />
                <el-table-column prop="voiceGreeting" label="语音问候" align="center" width="150" />
                <el-table-column prop="onlineStart" label="每日经常在线起始时间" align="center" width="150" />
                <el-table-column prop="onlineEnd" label="每日经常在线结束时间" align="center" width="200" />
                <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text"  @click="handlePassed(scope.$index, scope.row)">通过</el-button>
                        <el-button type="text"  @click="handleRefuse(scope.$index, scope.row)">拒绝</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
        </el-card>
    </div>

</template>

<script>
import Pagination from '../../../components/Pagination'
import imageShow from '../../../components/ImageShow/image-show'
import { getAreas, getReviewStatus } from "@/utils/common";

export default {
    name: 'Table',
    components: { Pagination, imageShow },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: undefined,
                reviewStatus: undefined,
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
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreas(),
            reviewStatus: getReviewStatus(),
            showviewer: false
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
                const length = list.length;
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "guildId" : item.getGuildId(),
                        "nickname" : item.getNickname(),
                        "avatar" : item.getAvatar(),
                        "videos" : item.getVideoIdsList(),
                        "onlineStatus" : "在线状态",
                        "reviewStatus" : "账户状态",
                        "profileCount" : "资料数量",
                        "tags" : item.getTags(),
                        "occupation" : item.getOccupation(),
                        "birthday" : item.getBirthday(),
                        "voiceGreeting" : item.getVoiceGreeting(),
                        "onlineStart" : item.getOnlineStart(),
                        "onlineEnd" : item.getOnlineEnd(),
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = length
                $this.tableData = data
                $this.listLoading = false
            });

            // this.listLoading = true
            // console.log(this.search)
            // let url = process.env.VUE_APP_JSON_URI + "/anchor.json"
            // // 获取数据列表接口
            // getTableList(this.search, url).then(res => {
            //     const data = res.data
            //     if (data.code === 0) {
            //         this.total = data.data.total
            //         this.tableData = data.data.list
            //         this.listLoading = false
            //     }
            // }).catch(() => {
            //     this.listLoading = false
            // })
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
        // 通过
        handlePassed(index, row) {
            console.log(index, row)
            this.$confirm('是否通过?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '通过!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        // 拒绝
        handleRefuse(index, row) {
            console.log(index, row)
            this.$confirm('是否拒绝?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已拒绝!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
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
