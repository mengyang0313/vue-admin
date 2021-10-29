<template>
    <div class="table-classic-wrapper">
        <el-card shadow="always">
            <!-- 操作栏 -->
            <div class="control-btns">
                <el-button type="primary" @click="toDialog('push', '')">+ 创建推送消息</el-button>
            </div>
            <!-- 查询栏 -->
            <el-form
                ref="searchForm"
                :inline="true"
                :model="search"
                label-width="90px"
                class="search-form"
            >
                <el-form-item label="区域">
                    <el-select v-model="search.areaId" @change="changeArea" :disabled="authAreaId !== 0" placeholder="请选择">
                        <el-option v-for="item in areaData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="APP">
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
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户Id">
                    <el-input v-model="search.userId" type="number" placeholder="用户Id"/>
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
                            <el-form-item label="主播Id">
                                <el-input v-model="search.anchorId" type="number" placeholder="主播Id"/>
                            </el-form-item>
                            <el-form-item label="发送时间">
                                <el-date-picker
                                    v-model="search.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
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
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="userId" label="用户id" align="center" width="120" />
                <el-table-column prop="anchorId" label="主播id" align="center" width="120" />
                <el-table-column prop="sendScene" label="发送场景" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.sendScene }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="giftId" label="礼物id" align="center" width="120" />
                <el-table-column prop="quantity" label="数量" align="center" width="120" />
                <el-table-column prop="price" label="单价" align="center" width="120" />
                <el-table-column prop="total" label="总价" align="center" width="120" />
                <el-table-column prop="income" label="主播端收入" align="center" width="120" />
                <el-table-column prop="createdAt" label="发送时间" align="center"/>
            </el-table>
            <!-- 分页栏 -->
            <Pagination :total="total" :page.sync="search.page.currentPage" :limit.sync="search.page.pageSize"
                        @pagination="fetchData" @changePageSize="changePageSize($event)"/>

            <!-- 对话 弹出栏 -->
            <push ref="push"/>

        </el-card>
    </div>
</template>

<script>
import "@/assets/icon/iconfont.css"
import Pagination from '../../../components/Pagination'
import push from './dialog/push'
import {
    getAreaList,
    getMessageType,
    getAppName,
    getAppListByAreaId,
    getCurrentUserAreaId, getArrName
} from "@/utils/dist";
import {endUnix, startUnix, toTime} from "@/utils/util";

export default {
    components: { Pagination, push },
    data() {
        return {
            listLoading: true,
            search: {
                areaId: getCurrentUserAreaId(),
                userId: undefined,
                anchorId: undefined,
                appId: undefined,
                date: [],
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaData: getAreaList(true),
            appList: [],
            messageTypeList: getMessageType()
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
            this.$service.gift.getGiftList(this.handleParam(), function (result){
                const list = result.getGiftsList()
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaData, item.getAreaId()),
                        "appId" : item.getAppId(),
                        "app" : getAppName(getAppListByAreaId($this.search.areaId, false), item.getAppId()),
                        "userId" : item.getUserId(),
                        "anchorId" : item.getAnchorId(),
                        "sendScene" : item.getCallId() === 0 ? "聊天" : "通话",
                        "giftId" : item.getGiftId(),
                        "quantity" : item.getQuantity(),
                        "price" : item.getPrice(),
                        "total" : item.getTotal(),
                        "income" : item.getIncome(),
                        "createdAt" : toTime(item.getCreatedAt())
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
            if (param.date.length > 0){
                param.createdStartUint = startUnix(this.search.date[0])
                param.createdEndUint = endUnix(this.search.date[1])
            }
            return param
        },
        onSearch() {
            this.search.page.currentPage = 1
            this.fetchData()
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row);
            })
        },
        changePageSize(msg){
            this.search.page.pageSize = msg.limit
        },
        resetForm() {
            this.$refs.searchForm.resetFields()
        },
        play(row) {
            this.playVisible = true;
            let src = row.uri
            this.$nextTick(()=>{
                this.$refs.myVideoPlayer.initSrc(src);
            })
        },
        changeArea(val){
            this.appList = getAppListByAreaId(val, true, true)
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
