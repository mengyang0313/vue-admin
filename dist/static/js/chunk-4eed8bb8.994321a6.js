(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eed8bb8"],{1:function(t,e){},"10dd":function(t,e,i){},"18a5":function(t,e,i){"use strict";var a=i("23e7"),s=i("857a"),n=i("af03");a({target:"String",proto:!0,forced:n("anchor")},{anchor:function(t){return s(this,"a","name",t)}})},"1e8f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"查看图片",visible:t.dialogVisible,"append-to-body":"",width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"table-classic-wrapper dialog-list"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[i("el-table-column",{attrs:{prop:"uri",label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.contain,src:e.row.uri,"preview-src-list":[e.row.uri]}})]}}])}),i("el-table-column",{attrs:{prop:"thumb",label:"应用App",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                            "+t._s(e.row.app.label)+"\n                            "),1===e.row.app.os?i("span",[i("i",{staticClass:"icon-android-fill"})]):i("span",[i("i",{staticClass:"icon-pingguo"})])])]}}])}),i("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"type",label:"文件类型",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"ownerId",label:"所有者ID",align:"center",width:"120"}})],1),i("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData}})],1),i("el-dialog",{attrs:{title:"播放视频",visible:t.playVisible,"before-close":t.closeVideo,"append-to-body":!0},on:{"update:visible":function(e){t.playVisible=e}}},[i("div",{staticClass:"content-item"},[i("VueVideoPlayer",{ref:"myVideoPlayer"})],1)])],1)},s=[],n=(i("159b"),i("333d")),l=i("be3f"),o=i("7139"),r={name:"Table",components:{Pagination:n["a"],VueVideoPlayer:l["a"]},data:function(){return{listLoading:!0,search:{page:{currentPage:1,pageSize:10}},photoList:[],imgList:[],total:0,playVisible:!1,dialogVisible:!1,appList:Object(o["c"])(),areaList:Object(o["f"])(!0),fileTypeList:Object(o["p"])()}},created:function(){this.fetchData()},methods:{init:function(t){this.photoList=t.photos,this.fetchData()},fetchData:function(){var t=this,e=[];this.photoList.forEach((function(i){var a={app:Object(o["e"])(t.appList,i.getAppId()),areaStr:Object(o["g"])(t.areaList,i.getAreaId()),type:Object(o["g"])(t.fileTypeList,i.getType()),ownerId:i.getOwnerId(),uri:i.getUri()};e.push(a)})),this.total=this.photoList.length,this.tableData=e,this.listLoading=!1},play:function(t){var e=this;this.playVisible=!0;var i="https://cdn.jsdelivr.net/gh/baimingxuan/media-store/videos/houlang.mp4";i=t.uri,this.$nextTick((function(){e.$refs.myVideoPlayer.initSrc(i)}))},closeVideo:function(){var t=this;this.playVisible=!1,this.$nextTick((function(){t.$refs.myVideoPlayer.emptySrc()}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},c=r,d=(i("20fc"),i("2877")),u=Object(d["a"])(c,a,s,!1,null,null,null);e["a"]=u.exports},"20fc":function(t,e,i){"use strict";i("3a5a")},"3a5a":function(t,e,i){},"4e40":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-classic-wrapper"},[i("Hints",[i("template",{slot:"hintName"},[t._v("查看 < "+t._s(t.basic.id)+" > 主播详情")])],2),i("el-row",{staticClass:"date-box",attrs:{gutter:20}},[i("el-col",{attrs:{span:24}},[i("el-card",{staticStyle:{"min-height":"10px"},attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[[i("el-container",[i("el-main",[i("el-descriptions",{staticClass:"margin-top",attrs:{title:"主播详情",column:5,labelStyle:{"text-align":"right",width:"130px"},size:"medium",border:""}},[i("el-descriptions-item",{attrs:{label:"主播Id"}},[t._v("\n                                        "+t._s(t.basic.id)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"应用"}},[t._v("\n                                        "+t._s(t.basic.appId)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"版本号"}},[t._v("\n                                        "+t._s(t.basic.version)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"工会"}},[t._v("\n                                        "+t._s(t.basic.guildId)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"区域"}},[t._v("\n                                        "+t._s(t.basic.areaId)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"是否为机器人"}},[t._v("\n                                        "+t._s(t.basic.robot)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"国家"}},[t._v("\n                                        "+t._s(t.basic.country)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"在线状态"}},[t._v("\n                                       "+t._s(t.basic.onlineStatus)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"审核状态"}},[t._v("\n                                        "+t._s(t.basic.reviewStatus)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"封禁状态"}},[t._v("\n                                        "+t._s(t.basic.blockStatus)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"profile数量"}},[t._v("\n                                        "+t._s(t.basic.profileCount)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"活跃的profile数量"}},[t._v("\n                                        "+t._s(t.basic.activeCount)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"等级"}},[t._v("\n                                        "+t._s(t.basic.levelStr)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"首选语言"}},[t._v("\n                                        "+t._s(t.basic.lang)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"支持的语言"}},[t._v("\n                                        "+t._s(t.basic.langs)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"每分钟价格"}},[t._v("\n                                        "+t._s(t.basic.price)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"通话收入"}},[t._v("\n                                        "+t._s(t.basic.callIncome)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"礼物收入"}},[t._v("\n                                        "+t._s(t.basic.giftIncome)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"用户充值分成"}},[t._v("\n                                        "+t._s(t.basic.commissionIncome)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"奖惩"}},[t._v("\n                                        "+t._s(t.basic.adjustIncome)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"当前余额"}},[t._v("\n                                        "+t._s(t.basic.balance)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"已结算总收入"}},[t._v("\n                                        "+t._s(t.basic.settled)+"\n                                    ")]),i("el-descriptions-item",{attrs:{label:"粉丝数量"}},[t._v("\n                                        "+t._s(t.basic.fansCount)+"\n                                    ")])],1)],1)],1)]],2)],1)],1),i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[i("el-menu-item",{attrs:{index:"1"}},[t._v("主播资料")]),i("el-menu-item",{attrs:{index:"2"}},[t._v("通话记录")]),i("el-menu-item",{attrs:{index:"3"}},[t._v("订单信息")])],1),i("el-card",{staticStyle:{"min-height":"10px"},attrs:{shadow:"always"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.profilesTableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"60"}}),i("el-table-column",{attrs:{prop:"id",label:"资料id",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"app",label:"所属应用",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                            "+t._s(e.row.app.label)+"\n                            "),1===e.row.app.os?i("span",[i("i",{staticClass:"icon-android-fill"})]):2===e.row.app.os?i("span",[i("i",{staticClass:"icon-pingguo"})]):t._e()])]}}])}),i("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.contain,src:e.row.avatar,"preview-src-list":[e.row.avatar]}})]}}])}),i("el-table-column",{attrs:{prop:"signature",label:"签名",align:"center",width:"180","show-overflow-tooltip":!0}}),i("el-table-column",{attrs:{prop:"reviewStatus",label:"账户状态",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{attrs:{slot:"reference"},slot:"reference"},[4===e.row.reviewStatus?i("div",[i("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.row.reviewStatusStr))])],1):i("div",[i("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.reviewStatusStr))])],1)])]}}])}),i("el-table-column",{attrs:{prop:"photoCount",label:"相册文件",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return t.toDialog("photoList",e.row)}}},[t._v(t._s(e.row.photoCount))])]}}])}),i("el-table-column",{attrs:{prop:"videoCount",label:"视频文件",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return t.toDialog("videoList",e.row)}}},[t._v(t._s(e.row.videoCount))])]}}])}),i("el-table-column",{attrs:{prop:"tags",label:"标签",align:"center",width:"180"}}),i("el-table-column",{attrs:{prop:"occupation",label:"职业",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"birthday",label:"生日",align:"center",width:"150"}}),i("el-table-column",{attrs:{prop:"voiceGreeting",label:"语音问候",align:"center",width:"150"}}),i("el-table-column",{attrs:{prop:"onlineStart",label:"常在线起始时间",align:"center",width:"150"}}),i("el-table-column",{attrs:{prop:"onlineEnd",label:"常在线结束时间",align:"center",width:"200"}})],1),i("photoList",{ref:"photoList",on:{fetchData:t.fetchData}}),i("videoList",{ref:"videoList",on:{fetchData:t.fetchData}})],1)],1)},s=[],n=(i("ac1f"),i("841c"),i("18a5"),i("159b"),i("a15b"),i("333d")),l=i("b522"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"description_text"},[t.title?i("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),i("el-row",{attrs:{gutter:t.gutter}},t._l(t.dataSource,(function(e,a){return i("el-col",{key:a,attrs:{span:+t.col}},[i("div",{staticClass:"term"},[t._v(t._s(e.term))]),i("div",{staticClass:"detail"},[t._v(t._s(e.detail))])])})),1)],1)},r=[],c=(i("d81d"),i("4de4"),i("a9e3"),function(t){return t.filter((function(t){return"Description"===t.tag})).map((function(t){return{tag:t.tag,term:t.data&&t.data.attrs.term||"暂无",detail:t.children&&t.children[0].text||"暂无"}}))}),d={name:"Description",props:{title:String,content:[Object,Array],gutter:{type:[Number,String],default:20},col:{type:[Number,String],default:8}},data:function(){return{dataSource:c(this.$slots.default||[])}},watch:{content:function(){this.dataSource=c(this.$slots.default||[])}}},u=d,p=(i("f99d"),i("2877")),b=Object(p["a"])(u,o,r,!1,null,"fbb17e26",null),g=b.exports,h=i("7139"),f=i("c4d5"),m=i("1e8f"),v=i("c466"),w={name:"Table",components:{Pagination:n["a"],Hints:l["a"],DescriptionList:g,videoList:f["a"],photoList:m["a"]},data:function(){return{listLoading:!0,search:{id:void 0,page:{currentPage:1,pageSize:10}},basic:{},total:0,activeIndex:"1",profilesTableData:{},appList:Object(h["c"])(),areaList:Object(h["f"])(!0),guildList:Object(h["r"])()}},created:function(){this.search.id=this.$route.query.id,this.fetchData()},watch:{$route:{handler:function(t,e){this.search.id=this.$route.query.id,this.fetchData()},deep:!0}},methods:{fetchData:function(){var t=this;this.listLoading=!0,this.$service.anchor.getAnchorFull(this.search,(function(e){t.handleBasic(e.getBasic()),t.profilePage(e.getProfilesList())}))},handleBasic:function(t){this.basic.id=t.getId(),this.basic.appId=Object(h["g"])(this.appList,t.getAppId()),this.basic.version=t.getVersion(),this.basic.guildId=Object(h["g"])(this.guildList,t.getGuildId()),this.basic.areaId=Object(h["g"])(this.areaList,t.getAreaId()),this.basic.robot=t.getRobot(),this.basic.country=t.getCountry(),this.basic.onlineStatus=Object(h["w"])(t.getOnlineStatus()),this.basic.reviewStatus=Object(h["D"])(t.getReviewStatus()),this.basic.profileCount=t.getProfileCount(),this.basic.activeCount=t.getActiveCount(),this.basic.level=t.getLevel(),this.basic.levelStr=Object(h["b"])(t.getLevel()),this.basic.lang=t.getLang(),this.basic.price=t.getPrice(),this.basic.callIncome=t.getCallIncome(),this.basic.giftIncome=t.getGiftIncome(),this.basic.commissionIncome=t.getCommissionIncome(),this.basic.adjustIncome=t.getAdjustIncome(),this.basic.fansCount=t.getFansCount(),this.basic.liveIds=t.getLiveIdsList(),this.basic.offlineAt=t.getOfflineAt(),this.basic.blockStatus=Object(h["h"])(t.getBlockStatus()),this.basic.onlineIp=t.getOnlineIp(),this.basic.longitude=t.getLongitude(),this.basic.latitude=t.getLatitude(),this.basic.createIp=t.getCreateIp(),this.basic.deviceId=t.getDeviceId(),this.basic.networkType=t.getNetworkType(),this.basic.bankName=t.getBankName(),this.basic.accountName=t.getAccountName(),this.basic.bankAccount=t.getBankAccount(),this.basic.email=t.getEmail(),this.basic.note=t.getNote(),this.basic.heartbeatAt=t.getHeartbeatAt(),this.basic.accessToken=t.getAccessToken()},profilePage:function(t){var e=this,i=[];t.forEach((function(t,a){var s={id:t.getId(),areaId:t.getAreaId(),areaStr:Object(h["g"])(e.areaList,t.getAreaId()),appId:t.getAppId(),app:Object(h["c"])(e.appList,t.getAppId()),nickname:t.getNickname(),signature:t.getSignature(),avatar:t.getAvatar(),reviewStatus:t.getStatus(),reviewStatusStr:Object(h["D"])(t.getStatus()),photoCount:t.getPhotoIdsList().length,videoCount:t.getVideoIdsList().length,tags:t.getTagsList().join(", "),occupation:Object(h["v"])(t.getOccupation()),birthday:Object(v["b"])(t.getBirthday()),voiceGreeting:t.getVoiceGreeting(),onlineStart:t.getOnlineStart(),onlineEnd:t.getOnlineEnd(),photos:t.getPhotosList(),videos:t.getVideosList(),struct:t};i.push(s)})),this.profilesTableData=i,this.listLoading=!1},toDialog:function(t,e){var i=this;this.$refs[t].dialogVisible=!0,this.$nextTick((function(){i.$refs[t].init(e)}))},handleSelectionChange:function(t){this.multipleSelection=t}}},y=w,_=(i("b480"),Object(p["a"])(y,a,s,!1,null,null,null));e["default"]=_.exports},5185:function(t,e,i){},"7e5f":function(t,e,i){},a15b:function(t,e,i){"use strict";var a=i("23e7"),s=i("44ad"),n=i("fc6a"),l=i("a640"),o=[].join,r=s!=Object,c=l("join",",");a({target:"Array",proto:!0,forced:r||!c},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},b480:function(t,e,i){"use strict";i("10dd")},c466:function(t,e,i){"use strict";function a(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd")}function s(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd hh:mm:ss")}function n(t){return"undefined"==typeof t&&(t=new Date),t.format("yyyy-MM-dd")}i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},c4d5:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"查看视频",visible:t.dialogVisible,"append-to-body":"",width:"60%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"table-classic-wrapper dialog-list"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[i("el-table-column",{attrs:{prop:"id",label:"ID",align:"center",width:"150"}}),i("el-table-column",{attrs:{prop:"ownerId",label:"所有者ID",align:"center",width:"150"}}),i("el-table-column",{attrs:{prop:"thumb",label:"视频",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.thumb,contain:""},on:{click:function(i){return t.play(e.row)}}})]}}])}),i("el-table-column",{attrs:{prop:"thumb",label:"应用App",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                        "+t._s(e.row.app.label)+"\n                        "),1===e.row.app.os?i("span",[i("i",{staticClass:"icon-android-fill"})]):i("span",[i("i",{staticClass:"icon-pingguo"})])])]}}])}),i("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"180"}}),i("el-table-column",{attrs:{prop:"type",label:"文件类型",align:"center",width:"180"}})],1),i("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData}})],1),i("el-dialog",{attrs:{title:"播放视频",visible:t.playVisible,"before-close":t.closeVideo,"append-to-body":!0},on:{"update:visible":function(e){t.playVisible=e}}},[i("div",{staticClass:"content-item"},[i("VueVideoPlayer",{ref:"myVideoPlayer"})],1)])],1)},s=[],n=(i("159b"),i("333d")),l=i("be3f"),o=i("7139"),r={name:"Table",components:{Pagination:n["a"],VueVideoPlayer:l["a"]},data:function(){return{listLoading:!0,search:{page:{currentPage:1,pageSize:10}},videoList:[],imgList:[],total:0,playVisible:!1,dialogVisible:!1,appList:Object(o["c"])(),areaList:Object(o["f"])(!0),fileTypeList:Object(o["p"])()}},created:function(){this.fetchData()},methods:{init:function(t){this.videoList=t.videos,this.fetchData()},fetchData:function(){var t=this,e=[];this.videoList.forEach((function(i){var a={id:i.getId(),app:Object(o["e"])(t.appList,i.getAppId()),areaStr:Object(o["g"])(t.areaList,i.getAreaId()),type:Object(o["g"])(t.fileTypeList,i.getType()),ownerId:i.getOwnerId(),thumb:i.getThumb(),uri:i.getUri()};e.push(a)})),this.total=this.videoList.length,this.tableData=e,this.listLoading=!1},play:function(t){var e=this;this.playVisible=!0;var i=t.uri;this.$nextTick((function(){e.$refs.myVideoPlayer.initSrc(i)}))},closeVideo:function(){var t=this;this.playVisible=!1,this.$nextTick((function(){t.$refs.myVideoPlayer.emptySrc()}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},c=r,d=(i("fc7e"),i("2877")),u=Object(d["a"])(c,a,s,!1,null,null,null);e["a"]=u.exports},f99d:function(t,e,i){"use strict";i("7e5f")},fc7e:function(t,e,i){"use strict";i("5185")}}]);