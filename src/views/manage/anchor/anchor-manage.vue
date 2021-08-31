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
                    <el-col :span="6">
                        <el-form-item label="UID">
                            <el-input v-model="search.uid" placeholder="UID"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="工会ID">
                            <el-input v-model="search.unionId" placeholder="工会ID"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="注册时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="search.registeredTime1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="search.registeredTime2" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="主播等级">
                            <el-select v-model="search.level" placeholder="请选择">
                                <el-option v-for="item in anchorLevel"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="账户状态">
                            <el-select v-model="search.accountStatus" placeholder="请选择">
                                <el-option v-for="item in accountStatus"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="在线状态">
                            <el-select v-model="search.onlineStatus" placeholder="请选择">
                                <el-option v-for="item in onlineStatus"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="地区">
                            <el-select v-model="search.area" placeholder="请选择">
                                <el-option v-for="item in areaData"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="接听率(日)">
                            <el-input placeholder="请输入" v-model="search.diamond">
                                <template slot="prepend">小余</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="search-box">
                        <el-form-item>
                            <el-button @click="onSearch('searchForm')" type="primary" size="small" style="width: 150px;">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
                            <el-button @click="resetForm('searchForm')" size="small" style="width: 150px;margin-left: 250px">重&nbsp;&nbsp;&nbsp;&nbsp;置</el-button>
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
                        <el-image style="width: 50px; height: 50px" :src="scope.row.avatar" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="videos" label="录制视频" align="center" width="120">
                    <template scope="scope">
                        <el-image @click="toDialog('videoList', scope.row)" style="width: 50px; height: 50px" :src="scope.row.videos" title="查看全部"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="onlineStatus" label="在线状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.onlineStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="reviewStatus" label="账户状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag @click="toDialog('reviewStatus',scope.row)" size="medium">{{ scope.row.reviewStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="profileCount" label="资料管理" align="center" width="120">
                    <template slot-scope="scope">
                        <router-link :to="`./data-manage`">{{ scope.row.profileCount }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="note" label="备注" align="center" width="250" />

                <el-table-column prop="answerRate" label="接听率" align="center" width="150">
                        60%/70%
                </el-table-column>
                <el-table-column prop="level" label="主播等级" align="center" width="120" />

                <el-table-column prop="balance" label="余额" align="center" width="120" />
                <el-table-column prop="settled" label="总收益" align="center" width="120" />
                <el-table-column prop="callIncome" label="通话收益" align="center" width="120" />
                <el-table-column prop="giftIncome" label="礼物收益" align="center" width="120" />
                <el-table-column prop="commissionIncome" label="佣金收益" align="center" width="120" />
                <el-table-column prop="price" label="单价" align="center" width="120" />

                <el-table-column prop="updatedAt" label="最近登录时间" align="center" width="150" />
                <el-table-column prop="sczc" label="首次认证时间" align="center" width="150" />
                <el-table-column prop="createdAt" label="注册时间" align="center" width="150" />
                <el-table-column prop="sjxh" label="手机型号" align="center" width="200" />
                <el-table-column prop="xtbb" label="系统版本号" align="center" width="200" />
                <el-table-column prop="yhxx" label="银行信息" align="center" width="180">
                    <template slot-scope="scope">
                        <a @click="toDialog('bankInfo', scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('updateInfo',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('ban',scope.row)">封禁</el-button>
                        <el-button type="text" @click="toDialog('auth',scope.row)">认证主播</el-button>
                        <el-button type="text" @click="toDialog('incentive', scope.row)">更新奖惩</el-button><br/>
                        <el-button type="text" @click="toDialog('multiAccount', scope.row)">多帐号</el-button>
                        <el-button type="text" @click="toDialog('migrate', scope.row)">帐号迁移</el-button>
                        <el-button type="text" @click="toDialog('merge', scope.row)">帐号合并</el-button>
                        <el-button type="text" @click="toDialog('black', scope.row)">帐号停用</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData"/>

            <!-- 视频记录 弹出栏 -->
            <videoList ref="videoList"/>

            <!-- 账户状态 弹出栏 -->
            <accountStatusList ref="accountStatusList"/>

            <!-- 资料管理 弹出栏 -->
            <dataList ref="dataList"/>

            <!-- 银行信息 弹出栏 -->
            <bankInfo ref="bankInfo"/>

            <!-- 更新信息 弹出栏 -->
            <updateInfo ref="updateInfo"/>

            <!-- 封禁设备 弹出栏 -->
            <ban ref="ban"/>

            <!-- 认证主播 弹出栏 -->
            <auth ref="auth"/>

            <!-- 更新奖惩 弹出栏 -->
            <incentive ref="incentive"/>

            <!-- 多帐号查询 弹出栏 -->
            <multiAccount ref="multiAccount"/>

            <!-- 帐号迁移 弹出栏 -->
            <migrate ref="migrate"/>

            <!-- 帐号合并 弹出栏 -->
            <merge ref="merge"/>

            <!-- 帐号停用 弹出栏 -->
            <black ref="black"/>

        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import { anchorLevel, accountStatus, onlineStatus } from '@/dict/index'
import {getAreas} from "@/utils/common";
import videoList from './dialog/video-list'
import accountStatusList from './dialog/account-status-list'
import dataList from './dialog/dataInfo'
import ban from './dialog/ban'
import auth from './dialog/auth'
import bankInfo from './dialog/bank-info'
import updateInfo from './dialog/update-info'
import incentive from './dialog/incentive'
import multiAccount from './dialog/multi-account'
import migrate from './dialog/migrate'
import merge from './dialog/merge'
import black from './dialog/black'



export default {
    components: { Pagination, videoList, accountStatusList, dataList, ban, auth, bankInfo, updateInfo, incentive, multiAccount, migrate, merge, black},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: this.initQuery(),
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 防止多次连续提交表单
            isSubmit: false,
            areaData: getAreas(),
            anchorLevel,
            accountStatus,
            onlineStatus
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
            this.$service.anchor.getAnchorList(this.search, function (result){
                const list = result.getAnchorsList()
                const length = list.length;
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "guildId" : item.getGuildId(),
                        "nickname" : "nickname",
                        "avatar" : "avatar",
                        "videos" : "videos",
                        "onlineStatus" : item.getOnlineStatus(),
                        "reviewStatus" : item.getReviewStatus(),
                        "profileCount" : item.getProfileCount(),
                        "note" : item.getNote(),
                        "level" : item.getLevel(),
                        "jtl" : "jtl",
                        "balance" : item.getBalance(),
                        "settled" : item.getSettled(),
                        "callIncome" : item.getCallIncome(),
                        "giftIncome" : item.getGiftIncome(),
                        "commissionIncome" : item.getCommissionIncome(),
                        "price" : item.getPrice(),
                        "updatedAt" : new Date(item.getUpdatedAt()*1000).format('yyyy-MM-dd hh:mm:ss'),
                        "sczc" : item.getCreatedAt(),
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss'),
                        "sjxh" : "手机型号",
                        "xtbb" : "系统版本",
                        "yhxx" : "银行",
                        "struct" : item
                    }
                    data.push(json)
                })
                $this.total = length
                $this.tableData = data
                $this.listLoading = false
            });
        },
        // 查询数据
        onSearch() {
            this.search.currentPage = 1
            this.fetchData()
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
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
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // 列表中婚姻状况栏，状态值改变时，调用
        selectChange(row) {
            // 此处添加后台接口，成功后调用fetchData方法更新列表
        },
        //重置
        resetForm() {
            this.search = this.initQuery();
        },
        initQuery() {
            return {
                uid: undefined,
                nickname: undefined,
                registeredTime1: undefined,
                registeredTime2: undefined,
                level: undefined,
                accountStatus: undefined,
                area: undefined,
                onlineStatus: undefined,
                page : {
                    currentPage: 1,
                    pageSize: 10
                }
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
