<template>
    <div class="table-classic-wrapper">
        <Hints>
            <template slot="hintName">查看 < {{ basic.id }} > 主播详情</template>
        </Hints>
        <el-row class="date-box" :gutter="20">
            <el-col :span="24">
                <el-card shadow="always" :body-style="{padding: '10px', paddingTop:'20px'}" style="min-height:10px">
                    <template>
                        <el-container>
                            <el-main>
                                <el-descriptions class="margin-top" title="主播详情" :column="5" :labelStyle="{'text-align': 'right', 'width':'130px'}" size="medium" border>
                                    <el-descriptions-item label="主播Id" >
                                        {{ basic.id }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="应用">
                                        {{ basic.appId }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="版本号">
                                        {{ basic.version }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="工会">
                                        {{ basic.guildId }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="区域">
                                        {{ basic.areaId }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="是否为机器人">
                                        {{ basic.robot }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="国家">
                                        {{ basic.country }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="在线状态">
                                       {{ basic.onlineStatus }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="审核状态">
                                        {{ basic.reviewStatus }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="封禁状态">
                                        {{ basic.blockStatus }}
                                    </el-descriptions-item>

                                    <el-descriptions-item label="profile数量">
                                        {{ basic.profileCount }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="活跃的profile数量">
                                        {{ basic.activeCount }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="等级">
                                        {{ basic.levelStr }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="首选语言">
                                        {{ basic.lang }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="支持的语言">
                                        {{ basic.langs }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="每分钟价格">
                                        {{ basic.price }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="通话收入">
                                        {{ basic.callIncome }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="礼物收入">
                                        {{ basic.giftIncome }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="用户充值分成">
                                        {{ basic.commissionIncome }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="奖惩">
                                        {{ basic.adjustIncome }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="当前余额">
                                        {{ basic.balance }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="已结算总收入">
                                        {{ basic.settled }}
                                    </el-descriptions-item>
                                    <el-descriptions-item label="粉丝数量">
                                        {{ basic.fansCount }}
                                    </el-descriptions-item>

                                </el-descriptions>
                            </el-main>
<!--                            <el-aside width="400px">
                                <el-image style="width: 50px; height: 50px" :src="basic.avatar" contain></el-image>
                            </el-aside>
                            <el-aside width="100px"></el-aside>-->
                        </el-container>
<!--                        <el-container>
                            <el-main>
                                <el-descriptions class="margin-top" :column="6" size="medium" border>

                                </el-descriptions>
                            </el-main>
                        </el-container>-->
                    </template>
                </el-card>
            </el-col>
        </el-row>

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selItem">
            <el-menu-item index="1">主播资料</el-menu-item>
            <el-menu-item index="2">通话记录</el-menu-item>
            <el-menu-item index="3">订单信息</el-menu-item>
        </el-menu>
        <el-card shadow="always" style="min-height:10px" :hidden="isHiddenProfile">
            <!-- 表格栏 -->
            <el-table
                ref="multipleTable"
                v-loading="listLoading"
                :data="profilesTableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="60"/>
                <el-table-column prop="id" label="资料id" align="center" width="120" />
                <el-table-column prop="areaStr" label="区域" align="center" width="120" />
                <el-table-column prop="app" label="所属应用" align="center" width="120">
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
                <el-table-column prop="nickname" label="昵称" align="center" width="120" />
                <el-table-column prop="avatar" label="头像" align="center" width="120">
                    <template scope="scope">
                        <el-image :fit="contain" style="width: 50px; height: 50px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
                    </template>
                </el-table-column>
                <el-table-column prop="signature" label="签名" align="center" width="180" :show-overflow-tooltip="true"/>
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
                <el-table-column prop="photoCount" label="相册文件" align="center" width="120">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toDialog('photoList',scope.row)">{{ scope.row.photoCount }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="videoCount" label="视频文件" align="center" width="120" >
                    <template scope="scope">
                        <el-button type="text" @click="toDialog('videoList',scope.row)">{{ scope.row.videoCount }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="tags" label="标签" align="center" width="180" />
                <el-table-column prop="occupation" label="职业" align="center" width="120" />
                <el-table-column prop="birthday" label="生日" align="center" width="150" />
                <el-table-column prop="voiceGreeting" label="语音问候" align="center" width="150" />
                <el-table-column prop="onlineStart" label="常在线起始时间" align="center" width="150" />
                <el-table-column prop="onlineEnd" label="常在线结束时间" align="center" width="200" />
            </el-table>
            <!-- 分页栏
            <Pagination :total="total" :page.sync="search.currentPage" :limit.sync="search.pageSize"
                        @pagination="fetchData"/>
            -->

            <!-- 相册列表 -->
            <photoList ref="photoList" @fetchData="fetchData"/>

            <!-- 视频列表 -->
            <videoList ref="videoList" @fetchData="fetchData"/>
        </el-card>

        <!-- 通话记录 -->
        <el-card shadow="always" style="min-height:10px" :hidden="isHiddenCall">
            <el-table
                ref="multipleTable"
                :data="callTableData"
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
        </el-card>

        <!-- 订单管理 -->
        <el-card shadow="always" style="min-height:10px" :hidden="isHiddenOrder">
            <el-table
                ref="multipleTable"
                :data="orderTableData"
                tooltip-effect="dark"
                style="width: 100%"
                size="medium"
            >
                <el-table-column prop="id" label="交易ID" align="center" width="120" />
                <el-table-column prop="app" label="来源App" align="center" width="120" >
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
                <el-table-column prop="traderId" label="交易者id" align="center" width="120" />
                <el-table-column prop="traderType" label="交易者类型" align="center" width="120" />
                <el-table-column prop="sourceType" label="交易类型" align="center" width="120">
                    <template scope="scope">
                        <div slot="reference">
                            <el-tag size="medium">{{ scope.row.sourceType }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="交易金额" align="center" width="220"/>
                <el-table-column prop="balance" label="交易后余额" align="center" width="120"/>
                <el-table-column prop="desc" label="描述" align="center" width="450"/>
                <el-table-column prop="createdAt" label="交易时间" align="center" width="220"/>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import Hints from '../../../components/Hints'
import DescriptionList from '../../../components/Description/index'
import {
    getReviewStatus,
    getArrName,
    getAppList,
    getAreaList,
    getGuildList,
    getOnlineStatus,
    getBlockStatus,
    getOccupationType,
    getAnchorLevel,
    getAppName,
    getCallType,
    getHangType,
    getTraderType, getSourceType
} from "@/utils/dist";
import videoList from '../audit/dialog/video-list'
import photoList from '../audit/dialog/photo-list'
import {toDate, toTime} from "@/utils/util";
import {isEmpty} from "@/api/api";

export default {
    name: 'Table',
    components: {Pagination, Hints, DescriptionList, videoList, photoList},
    data() {
        return {
            listLoading: true,
            search: {
                id: undefined,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            },
            basic: {},
            total: 0,
            isHiddenProfile: false,
            isHiddenCall: true,
            isHiddenOrder: true,
            activeIndex: '1',
            profilesTableData: {},
            callTableData: {},
            orderTableData: {},
            appList: getAppList(),
            areaList: getAreaList(true),
            guildList: getGuildList()
        }
    },
    created() {
        this.search.id = this.$route.query.id
        this.fetchData()
    },
    watch: {
        $route: {
            handler(newName, oldName) {
                let id = this.$route.query.id
                if(!isEmpty(id)){
                    this.search.id = id
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
            this.$service.anchor.getAnchorFull(this.search, function (result){
                $this.handleBasic(result.getBasic())
                $this.profilePage(result.getProfilesList())
            });
            this.callPage()
            this.orderPage()
        },
        handleBasic(basic){
            this.basic.id = basic.getId()
            this.basic.appId = getArrName(this.appList, basic.getAppId())
            this.basic.version = basic.getVersion()
            this.basic.guildId = getArrName(this.guildList, basic.getGuildId())
            this.basic.areaId = getArrName(this.areaList, basic.getAreaId())
            this.basic.robot = basic.getRobot()
            this.basic.country = basic.getCountry()
            this.basic.onlineStatus = getOnlineStatus(basic.getOnlineStatus())
            this.basic.reviewStatus = getReviewStatus(basic.getReviewStatus())
            this.basic.profileCount = basic.getProfileCount()
            this.basic.activeCount = basic.getActiveCount()
            this.basic.level = basic.getLevel()
            this.basic.levelStr = getAnchorLevel(basic.getLevel())
            this.basic.lang = basic.getLang()
            this.basic.price = basic.getPrice()
            this.basic.callIncome = basic.getCallIncome()
            this.basic.giftIncome = basic.getGiftIncome()
            this.basic.commissionIncome = basic.getCommissionIncome()
            this.basic.adjustIncome = basic.getAdjustIncome()
            this.basic.fansCount = basic.getFansCount()
            this.basic.liveIds = basic.getLiveIdsList()
            this.basic.offlineAt = basic.getOfflineAt()
            this.basic.blockStatus = getBlockStatus(false, basic.getBlockStatus())
            this.basic.onlineIp = basic.getOnlineIp()
            this.basic.longitude = basic.getLongitude()
            this.basic.latitude = basic.getLatitude()
            this.basic.createIp = basic.getCreateIp()
            this.basic.deviceId = basic.getDeviceId()
            this.basic.networkType = basic.getNetworkType()
            this.basic.bankName = basic.getBankName()
            this.basic.accountName = basic.getAccountName()
            this.basic.bankAccount = basic.getBankAccount()
            this.basic.email = basic.getEmail()
            this.basic.note = basic.getNote()
            this.basic.heartbeatAt = basic.getHeartbeatAt()
            this.basic.accessToken = basic.getAccessToken()
        },
        profilePage(profiles) {
            let $this = this
            const profilesData = []
            profiles.forEach((item, index)=>{
                const json = {
                    "id" : item.getId(),
                    "areaId" : item.getAreaId(),
                    "areaStr" : getArrName($this.areaList, item.getAreaId()),
                    "appId" : item.getAppId(),
                    "app" : getAppList($this.appList, item.getAppId()),
                    "nickname" : item.getNickname(),
                    "signature" : item.getSignature(),
                    "avatar" : item.getAvatar(),
                    "reviewStatus" : item.getStatus(),
                    "reviewStatusStr" : getReviewStatus(item.getStatus()),
                    "photoCount" : item.getPhotoIdsList().length,
                    "videoCount" : item.getVideoIdsList().length,
                    "tags" : item.getTagsList().join(", "),
                    "occupation" : getOccupationType(item.getOccupation()),
                    "birthday" : toDate(item.getBirthday()),
                    "voiceGreeting" : item.getVoiceGreeting(),
                    "onlineStart" : item.getOnlineStart(),
                    "onlineEnd" : item.getOnlineEnd(),
                    "photos" : item.getPhotosList(),
                    "videos" : item.getVideosList(),
                    "struct" : item
                }
                profilesData.push(json)
            })
            this.profilesTableData = profilesData
            this.listLoading = false
        },
        callPage(){
            const $this = this
            let param = {
                anchorId: this.search.id,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            }
            this.$service.call.getCallList(param, function (result){
                const list = result.getCallsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "areaId" : item.getAreaId(),
                        "areaStr" : getArrName($this.areaList, item.getAreaId()),
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
                $this.callTableData = data

            })
        },
        orderPage(){
            const $this = this
            let param = {
                traderId: this.search.id,
                page:{
                    currentPage: 1,
                    pageSize: 10
                }
            }
            this.$service.transaction.getTransactionList(param, function (result){
                const list = result.getTransactionsList();
                const data = []
                list.forEach((item, index)=>{
                    const json = {
                        "id" : item.getId(),
                        "appId" : item.getAppId(),
                        "app" : getAppName($this.appList, item.getAppId()),
                        "traderType" : getTraderType(item.getTraderType()),
                        "traderId" : item.getTraderId(),
                        "sourceType" : getSourceType(item.getSourceType()),
                        "amount" : item.getAmount(),
                        "balance" : item.getBalance(),
                        "desc" : item.getDesc(),
                        "createdAt" : toTime(item.getCreatedAt())
                    }
                    data.push(json)
                })
                $this.orderTableData = data
                document.getElementsByName("orderId").forEach(item => item.setAttribute("orderId", "width='120'"))
            })
        },
        toDialog(component, row){
            this.$refs[component].dialogVisible = true
            this.$nextTick(()=>{
                this.$refs[component].init(row)
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        selItem(key) {
            switch (key){
                case '1':
                    this.hiddenAll()
                    this.isHiddenProfile = false
                    break;
                case '2':
                    this.hiddenAll()
                    this.isHiddenCall = false
                    break;
                case '3':
                    this.hiddenAll()
                    this.isHiddenOrder = false
                    break;
            }
        },
        hiddenAll(){
            this.isHiddenProfile = true
            this.isHiddenCall = true
            this.isHiddenOrder = true
        }
    }
}
</script>

<style lang="less">
el-descriptions-item{
    text-align: right
}
.table-classic-wrapper {
    .el-card {
        min-height: 10px;
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
