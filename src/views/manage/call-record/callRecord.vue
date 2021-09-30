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
                <el-form-item label="用户id" prop="userId">
                    <el-input v-model="search.userId" placeholder="用户id"/>
                </el-form-item>
                <el-form-item label="主播id" prop="anchorId">
                    <el-input v-model="search.anchorId" placeholder="主播id"/>
                </el-form-item>
                <el-form-item label="区域" prop="areaId">
                    <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="padding-left: 20px">
                    <el-button @click="onSearch" type="primary" size="small" style="width: 120px;">查&nbsp;&nbsp;询</el-button>
                </el-form-item>
                <el-collapse accordion @change="isCollapse = !isCollapse">
                    <el-collapse-item>
                        <template slot="title">
                            {{isCollapse ? '展开' : '收起'}}
                        </template>
                        <div>
                            <el-form-item label="APP" prop="appId">
                                <el-select v-model="search.appId" placeholder="请选择">
                                    <el-option v-for="item in appList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span v-if="item.os === 1">
                                            <i class="icon-android-fill" style="float: right"></i>
                                        </span>
                                        <span v-else-if="item.os === 2">
                                            <i class="icon-pingguo" style="float: right"></i>
                                        </span>
                                        <span v-if="item.isAnchor">
                                            <i class="iconfont icon-zhuboguanli" style="float: right"></i>
                                        </span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="创建时间" prop="createdStart">
                                <el-col :span="11">
                                    <el-date-picker type="date" placeholder="开始时间" v-model="search.createdStart" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="1" align="center">-</el-col>
                                <el-col :span="10">
                                    <el-date-picker type="date" placeholder="结束时间" v-model="search.createdEnd" style="width: 100%;"></el-date-picker>
                                </el-col>
                            </el-form-item>

                            <el-form-item label="发起方式" prop="callType">
                                <el-select v-model="search.callType" placeholder="请选择">
                                    <el-option v-for="item in callTypeList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="挂断方式" prop="hangType">
                                <el-select v-model="search.hangType" placeholder="请选择">
                                    <el-option v-for="item in hangTypeList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="通话状态" prop="status">
                                <el-select v-model="search.status" placeholder="请选择">
                                    <el-option v-for="item in callStatusList"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="最小时长" prop="minDuration">
                                <el-input v-model="search.minDuration" placeholder="最小时长"/>
                            </el-form-item>
                            <el-form-item label="最大时长" prop="maxDuration">
                                <el-input v-model="search.maxDuration" placeholder="最大时长"/>
                            </el-form-item>
                        </div>
                    </el-collapse-item>
                </el-collapse>
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
                <el-table-column prop="id" label="通话Id" align="center" width="120" />
                <el-table-column prop="app" label="来源App" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                <i class="icon-android-fill"></i>
                            </span>
                            <span v-else-if="scope.row.app.os === 2">
                                <i class="icon-pingguo"></i>
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="userId" label="用户Id" align="center" width="120" />
                <el-table-column prop="anchorId" label="主播Id" align="center" width="120" />
                <el-table-column prop="areaStr" label="区域" align="center" width="120"/>
                <el-table-column prop="callType" label="通话发起类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.callType }}</el-tag>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="connectedAt" label="通话建立时间" align="center" width="150"/>
                <el-table-column prop="hangAt" label="通话结束时间" align="center" width="150"/>
                <el-table-column prop="duration" label="通话时长" align="center" width="120"/>
                <el-table-column prop="billDuration" label="计费时长" align="center" width="120"/>
                <el-table-column prop="expense" label="用户消费" align="center" width="120"/>
                <el-table-column prop="hangType" label="通话结束类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium" v-if="scope.row.hangType!=''">{{ scope.row.hangType }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="income" label="主播收益" align="center" width="120"/>
                <el-table-column prop="userScore" label="用户评分" align="center"/>
                <el-table-column prop="captureDStatus" label="录屏状态" align="center"/>
                <el-table-column prop="captureDuration" label="录制时长" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>
        </el-card>
    </div>
</template>

<script>
import "@/assets/icon/iconfont.css"
import Pagination from '../../../components/Pagination'
import {
    getAreaList,
    getAppList,
    getHangType,
    getCallStatus,
    getCallType,
    getArrName,
    getAppName,
    getAreaListByAreaId, getCurrentUserAreaId
} from "@/utils/dist";
import {toTime} from "@/utils/date";

export default {
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                areaId: getCurrentUserAreaId(),
                appId: undefined,
                userId: undefined,
                anchorId: undefined,
                callType: 0,
                hangType: undefined,
                status: undefined,
                minDuration: undefined,
                maxDuration: undefined,
                createdStart: undefined,
                createdEnd: undefined,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaData: getAreaList(),
            appList: [],
            callTypeList : getCallType(),
            hangTypeList : getHangType(),
            callStatusList : getCallStatus()
        }
    },
    created() {
        this.changeArea(this.search.areaId)
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        fetchData() {
            const $this = this
            this.listLoading = true
            this.$service.call.getCallList(this.handleParam(), function (result){
                const list = result.getCallsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAreaListByAreaId($this.search.areaId, false), item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "userId" : item.getUserId(),
                        "anchorId" : item.getAnchorId(),
                        "callType" : getCallType(item.getCallType()),
                        "connectedAt" : toTime(item.getConnectedAt()),
                        "hangAt" : toTime(item.getHangAt()),
                        "duration" : item.getDuration(),
                        "billDuration" : item.getBillDuration(),
                        "expense": item.getExpense(),
                        "hangType" : getHangType(item.getHangType()),
                        "income" : item.getIncome(),
                        "userScore": item.getUserScore(),
                        "captureStatus": item.getCaptureStatus(),
                        "captureDuration": item.getCaptureDuration()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            })
        },
        handleParam(){
            let param = this.search;
            if (typeof(this.search.createdStart) != "undefined"){
                param.createdStartUint = this.search.createdStart.getTime() / 1000
            }
            if (typeof(this.search.createdEnd) != "undefined"){
                param.createdEndUint = this.search.createdEnd.getTime() / 1000
            }
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        changeArea(val){
            this.appList = getAreaListByAreaId(val, true)
        }
    }
}
</script>

<style lang="less">
.el-collapse-item__header {
    border-top: 0px solid #eaeefb;
    height: 34px;
    box-sizing: border-box;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-top: -75px;
    color: #277cda;
    z-index: 999;
    float: right;
}
.el-collapse-item__wrap{
    background-color: #f7f8fb;
}
.el-collapse{
    border-top: 0px solid #EBEEF5;
    border-bottom: 0px solid #EBEEF5;
}
.el-collapse-item__content {
    padding-bottom: 5px;
}
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
