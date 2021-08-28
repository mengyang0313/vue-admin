<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="listQuery"
                label-width="90px"
                class="search-form"
            >
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="用户Id">
                            <el-input v-model="listQuery.id" placeholder="用户Id"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="用户名">
                            <el-input v-model="listQuery.nickname" placeholder="用户名"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="注册时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始时间" v-model="listQuery.createdStart" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="1" align="center">-</el-col>
                            <el-col :span="10">
                                <el-date-picker type="date" placeholder="结束时间" v-model="listQuery.createdEnd" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="VIP">
                            <el-select v-model="listQuery.vipOnly" placeholder="请选择">
                                <el-option v-for="item in boolDict"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="是否付费">
                            <el-select v-model="listQuery.depositOnly" placeholder="请选择">
                                <el-option v-for="item in boolDict"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="钻石余额">
                            <el-input placeholder="请输入余额" v-model="listQuery.minBalance">
                                <template slot="prepend">大于</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="地区">
                            <el-select v-model="listQuery.areaId" placeholder="请选择">
                                <el-option v-for="item in areaData"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
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
            >
                <el-table-column prop="id" label="用户ID" align="center" width="120" />
                <el-table-column prop="areaId" label="地区" align="center" width="120" />
                <el-table-column prop="appId" label="APP" align="center" width="120" />
                <el-table-column prop="nickname" label="用户名" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.avatar" contain></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="dlfs" label="登录方式" align="center" width="120"/>
                <el-table-column prop="onlineStatus" label="在线状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.onlineStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="blockStatus" label="账户状态" align="center" width="120">
                    <template slot-scope="scope">
                        <div slot="reference">
                            <el-tag @click="toDialog('accountStatusList',scope.row)" size="medium">{{ scope.row.accountStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="vipEndAt" label="vip到期时间" align="center" width="120"/>
                <el-table-column prop="vipCount" label="vip购买次数" align="center" width="150"/>
                <el-table-column prop="expense" label="累计送礼" align="center" width="150"/>
                <el-table-column prop="deposit" label="累计充值" align="center" width="150"/>
                <el-table-column prop="balance" label="账户余额" align="center" width="250" />
                el-table-column prop="schyrq" label="上次活跃日期" align="center" width="150"/>
                <el-table-column prop="scczrq" label="上次充值日期" align="center" width="150"/>
                <el-table-column prop="createdAt" label="注册日期" align="center" width="150"/>
                <el-table-column prop="osType" label="手机机型" align="center" width="120" />
                <el-table-column prop="version" label="系统版本" align="center" width="120" />
                <el-table-column prop="appVersion" label="app版本" align="center" width="120" />
                <el-table-column prop="onlineIp" label="ip地址" align="center" width="180">
                    <template slot-scope="scope">
                        <a @click="toDialog('ipAddress', scope.row)" style="color: #1E88C7">查看</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('ban',scope.row)">封禁</el-button>
                        <el-button type="text" @click="toDialog('recharge',scope.row)">充值</el-button>
                        <el-button type="text" @click="toDialog('updateUser',scope.row)">更新</el-button>
                        <el-button type="text" @click="toDialog('multiAccount', scope.row)">多帐号查询</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize"
                        @pagination="fetchData"/>



            <!-- 封禁设备 弹出栏 -->
            <ban ref="ban"/>

            <!-- 多帐号查询 弹出栏 -->
            <multiAccount ref="multiAccount"/>

            <!-- 充值 弹出栏 -->
            <recharge ref="recharge" @fetchData="fetchData"/>

            <!-- 更新 弹出栏 -->
            <updateUser ref="updateUser" @fetchData="fetchData"/>

        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import ban from './dialog/ban'
import multiAccount from './dialog/multi-account'
import recharge from './dialog/recharge'
import updateUser from './dialog/updateUser'
import { areaData, boolDict } from '@/dict/index'

export default {
    components: { Pagination, ban, multiAccount, recharge, updateUser},
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            listQuery: this.initQuery(),
            // 数据总条数
            total: 0,
            // 表格数据数组
            tableData: [],
            // 多选数据暂存数组
            multipleSelection: [],
            // 防止多次连续提交表单
            isSubmit: false,
            areaData,
            boolDict
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
            this.$service.user.getUserList(this.listQuery, function (result){
                const list = result.getUsersList()
                const length = list.length;
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "appId" : item.getAppId(),
                        "nickname" : item.getNickname(),
                        "avatar"  : item.getAvatar(),
                        "dlfs" : "登陆方式",
                        "blockStatus" : item.getBlockStatus(),
                        "onlineStatus" : item.getOnlineStatus(),
                        "vipEndAt" : new Date(item.getVipEndAt()*1000).format('yyyy-MM-dd'),
                        "vipCount" : 3,
                        "expense" : item.getExpense(),
                        "deposit" : item.getDeposit(),
                        "balance" : item.getBalance(),
                        "schyrq" : "上次活跃日期",
                        "scczrq" : "上次充值日期",
                        "createdAt" : new Date(item.getCreatedAt()*1000).format('yyyy-MM-dd hh:mm:ss'),
                        "osType" : item.getOsType(),
                        "version" : "系统版本",
                        "appVersion" : item.getVersion(),
                        "onlineIp" : item.getOnlineIp(),
                    }
                    data.push(json)
                })
                $this.total = length
                $this.tableData = data
                $this.listLoading = false
            });
            // console.log(this.listQuery)
            // let url = "http://localhost:8000/data/users.json"
            // // 获取数据列表接口
            // getTableList(this.listQuery, url).then(res => {
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
        onSearch() {
            this.listQuery.currentPage = 1
            this.fetchData()
        },
        // 弹框
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        //重置
        resetForm() {
            this.listQuery = this.initQuery();
        },
        initQuery() {
            return {
                id: undefined,
                nickname: undefined,
                createdStart: undefined,
                createdEnd: undefined,
                vipOnly: undefined,
                depositOnly: undefined,
                minBalance: undefined,
                areaId: undefined,
                page: {
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
