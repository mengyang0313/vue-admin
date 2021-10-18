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
                <el-form-item label="用户ID" prop="userId">
                    <el-input v-model="search.userId" placeholder="用户ID"/>
                </el-form-item>
                <el-form-item label="订单号" prop="recordId">
                    <el-input v-model="search.recordId" placeholder="订单号"/>
                </el-form-item>
                <el-form-item label="订单状态" prop="payStatus">
                    <el-select v-model="search.payStatus" placeholder="请选择">
                        <el-option v-for="item in payStatus"
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
                            <el-form-item label="交易时间" prop="createdStart">
                                <el-date-picker
                                    v-model="search.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
<!--                                <el-col :span="11">-->
<!--                                    <el-date-picker type="date" placeholder="开始时间" v-model="search.createdStart" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                                </el-col>-->
<!--                                <el-col class="line" :span="1" align="center">-</el-col>-->
<!--                                <el-col :span="10">-->
<!--                                    <el-date-picker type="date" placeholder="结束时间" v-model="search.createdEnd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                                </el-col>-->
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
                                    </el-option>
                                </el-select>
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
                <el-table-column prop="id" label="订单ID" align="center" width="150" />
                <el-table-column prop="payOrderId" label="渠道订单号" align="center" width="200" />
                <el-table-column prop="commodityId" label="商品名称" align="center" width="200"/>
                <el-table-column prop="appId" label="来源APP" align="center" width="140">
                    <template scope="scope">
                        <div slot="reference">
                            {{ scope.row.app.label }}
                            <span v-if="scope.row.app.os === 1">
                                <i class="icon-android-fill"></i>
                            </span>
                            <span v-else>
                                <i class="icon-pingguo"></i>
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="areaId" label="区域" align="center" width="80"/>
                <el-table-column prop="userId" label="用户ID" align="center" width="120"/>

                <el-table-column prop="payType" label="支付方式" align="center" width="100"/>
                <el-table-column prop="payChannel" label="支付渠道" align="center" width="100"/>
                <el-table-column prop="usdPrice" label="美元价格" align="center" width="80"/>
                <el-table-column prop="paidAt" label="支付时间" align="center" width="180"/>
                <el-table-column prop="payStatus" label="支付状态" align="center" width="80">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.payStatus }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="钻石数量" align="center" width="80"/>
                <el-table-column prop="country" label="国家" align="center" width="80"/>
                <el-table-column prop="payPrice" label="本地价格" align="center" width="150"/>
                <el-table-column prop="queryAt" label="查询支付状态时间" align="center" width="180"/>
                <el-table-column prop="createdAt" label="创建时间" align="center" width="170"/>
                <el-table-column prop="isSubscription" label="是否为订阅" align="center" width="120">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.isSubscription" disabled/>
                    </template>
                </el-table-column>
                <el-table-column prop="anchorId" label="关联的主播id" align="center" width="120"/>
                <el-table-column prop="commission" label="主播佣金" align="center" width="120"/>
<!--                <el-table-column label="操作" align="center" width="170" fixed="right">-->
<!--                    <template slot-scope="scope">-->
<!--                        <el-button type="text" @click="toMakeOrder('dataInfo', scope.row)">补单</el-button>-->
<!--                        <el-button type="text" @click="toRetreat(scope.$index, scope.row)">退单</el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->
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
    getPayStatus,
    getAppList,
    getArrName,
    getAppName,
    getPayType,
    getCommodityList, getPayChannelList, getAppListByAreaId, getCurrentUserAreaId
} from "@/utils/dist";
import {endUnix, toTime} from "@/utils/date";
import {isEmpty} from "@/api/api";

export default {
    components: { Pagination },
    data() {
        return {
            // 数据列表加载动画
            listLoading: true,
            // 查询列表参数对象
            search: {
                userId: undefined,
                recordId: undefined,
                date: [],
                appId: undefined,
                areaId: getCurrentUserAreaId(),
                payStatus: 0,
                page: {
                    currentPage: 1,
                    pageSize: 10
                }
            },
            total: 0,
            authAreaId: getCurrentUserAreaId(),
            isCollapse: true,
            areaData: getAreaList(true),
            appList: getAppList(true, true),
            payStatus: getPayStatus(),
            payTypeList: getPayType(),
            commodityList: getCommodityList()
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
            this.$service.order.getPayList(this.handleParam(), function (result){
                const list = result.getRecordsList()
                const data = []
                list.forEach((item, index)=>{
                    let price = item.getPayPrice() / 100
                    if(!isEmpty(item.getCurrency())){
                        price = item.getCurrency() + "-" + price
                    }
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "userId" : item.getUserId(),
                        "areaId" : getArrName($this.areaData, item.getAreaId()),
                        "commission" : item.getCommission(),
                        "payType" : getPayType(item.getPayType()),
                        "payChannel" : $this.handlePayChannel(item.getAreaId(), item.getPayChannel()),
                        "country" : item.getCountry(),
                        "commodityId" : $this.handleCommodity(item.getCommodityId()),
                        "desc" : item.getDesc(),
                        "payOrderId": item.getPayOrderId(),
                        "payUrl" : item.getPayUrl(),
                        "payPrice" : price,
                        "usdPrice" : item.getUsdPrice() / 100,
                        "amount": item.getAmount(),
                        "payStatus" : getPayStatus(item.getPayStatus()),
                        "paidAt" : toTime(item.getPaidAt()),
                        "queryAt": toTime(item.getQueryAt()),
                        "createdAt" : toTime(item.getCreatedAt()),
                        "isSubscription" : item.getIsSubscription()
                    }
                    data.push(json)
                })
                $this.total = result.getTotalCount()
                $this.tableData = data
                $this.listLoading = false
            });
        },
        handleParam(){
            let param = this.search;
            if (param.date.length > 0){
                param.createdStartUint = this.search.date[0].getTime() / 1000
                param.createdEndUint = endUnix(this.search.date[1])
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
        handleCommodity(commodityId){
            let name = "";
            this.commodityList.forEach(item => {
                if(item.value === commodityId){
                    name = isEmpty(item.name) ? item.label : item.name
                }
            })
            return name
        },
        handlePayChannel(areaId, channelId){
            let name = ""
            getPayChannelList(areaId).forEach(item => {
                if(item.value === channelId){
                    name = item.label
                }
            })
            return name
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
