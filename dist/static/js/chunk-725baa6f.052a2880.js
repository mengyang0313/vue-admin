(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725baa6f"],{1:function(t,e){},"1e8f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"查看图片",visible:t.dialogVisible,"append-to-body":"",width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"table-classic-wrapper dialog-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"uri",label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.contain,src:e.row.uri,"preview-src-list":[e.row.uri]}})]}}])}),a("el-table-column",{attrs:{prop:"thumb",label:"应用App",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                            "+t._s(e.row.app.label)+"\n                            "),1===e.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"文件类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"ownerId",label:"所有者ID",align:"center",width:"120"}})],1),a("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData}})],1),a("el-dialog",{attrs:{title:"播放视频",visible:t.playVisible,"before-close":t.closeVideo,"append-to-body":!0},on:{"update:visible":function(e){t.playVisible=e}}},[a("div",{staticClass:"content-item"},[a("VueVideoPlayer",{ref:"myVideoPlayer"})],1)])],1)},n=[],l=(a("159b"),a("333d")),o=a("be3f"),r=a("7139"),s={name:"Table",components:{Pagination:l["a"],VueVideoPlayer:o["a"]},data:function(){return{listLoading:!0,search:{page:{currentPage:1,pageSize:10}},photoList:[],imgList:[],total:0,playVisible:!1,dialogVisible:!1,appList:Object(r["c"])(),areaList:Object(r["e"])(),fileTypeList:Object(r["o"])()}},created:function(){this.fetchData()},methods:{init:function(t){this.photoList=t.photos,this.fetchData()},fetchData:function(){var t=this,e=[];this.photoList.forEach((function(a){var i={app:Object(r["d"])(t.appList,a.getAppId()),areaStr:Object(r["g"])(t.areaList,a.getAreaId()),type:Object(r["g"])(t.fileTypeList,a.getType()),ownerId:a.getOwnerId(),uri:a.getUri()};e.push(i)})),this.total=this.photoList.length,this.tableData=e,this.listLoading=!1},play:function(t){var e=this;this.playVisible=!0;var a="https://cdn.jsdelivr.net/gh/baimingxuan/media-store/videos/houlang.mp4";a=t.uri,this.$nextTick((function(){e.$refs.myVideoPlayer.initSrc(a)}))},closeVideo:function(){var t=this;this.playVisible=!1,this.$nextTick((function(){t.$refs.myVideoPlayer.emptySrc()}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},c=s,u=(a("20fc"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,null,null);e["a"]=d.exports},"20fc":function(t,e,a){"use strict";a("3a5a")},2690:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"主播Id",prop:"anchorId"}},[a("el-input",{attrs:{placeholder:"主播Id"},model:{value:t.search.anchorId,callback:function(e){t.$set(t.search,"anchorId",e)},expression:"search.anchorId"}})],1),a("el-form-item",{attrs:{label:"区域"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:""},on:{change:t.changeArea},model:{value:t.search.areaId,callback:function(e){t.$set(t.search,"areaId",e)},expression:"search.areaId"}},t._l(t.areaData,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"gender",label:"性别",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.contain,src:e.row.avatar,"preview-src-list":[e.row.avatar]}})]}}])}),a("el-table-column",{attrs:{prop:"reviewStatus",label:"账户状态",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[4===e.row.reviewStatus?a("div",[a("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.row.reviewStatusStr))])],1):a("div",[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.reviewStatusStr))])],1)])]}}])}),a("el-table-column",{attrs:{prop:"photoCount",label:"相册文件",align:"center",width:"120"},on:{click:function(e){return t.toDialog("profileList",t.scope.row)}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.toDialog("photoList",e.row)}}},[t._v(t._s(e.row.photoCount))])]}}])}),a("el-table-column",{attrs:{prop:"videoCount",label:"视频文件",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.toDialog("videoList",e.row)}}},[t._v(t._s(e.row.videoCount))])]}}])}),a("el-table-column",{attrs:{prop:"tags",label:"标签",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"occupationStr",label:"职业",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"birthday",label:"生日",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"signature",label:"签名",align:"center","show-overflow-tooltip":!0,width:"200"}}),a("el-table-column",{attrs:{prop:"voiceGreeting",label:"语音问候",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"onlineStart",label:"常在线起始时间",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"onlineEnd",label:"常在线结束时间",align:"center",width:"200"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handlePassed(e.$index,e.row)}}},[t._v("通过")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleRefuse(e.$index,e.row)}}},[t._v("拒绝")])]}}])})],1),a("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData,changePageSize:function(e){return t.changePageSize(e)}}}),a("photoList",{ref:"photoList",on:{fetchData:t.fetchData}}),a("videoList",{ref:"videoList",on:{fetchData:t.fetchData}})],1)],1)},n=[],l=(a("ac1f"),a("841c"),a("159b"),a("a15b"),a("333d")),o=a("528b"),r=a("c4d5"),s=a("1e8f"),c=a("7139"),u=a("c466"),d={name:"Table",components:{Pagination:l["a"],imageShow:o["a"],videoList:r["a"],photoList:s["a"]},data:function(){return{listLoading:!0,search:{areaId:Object(c["n"])(),reviewStatus:2,page:{currentPage:1,pageSize:10}},total:0,tableData:[],multipleSelection:[],areaData:Object(c["e"])(),reviewStatus:Object(c["B"])(),occupationList:Object(c["t"])(),genderList:Object(c["p"])()}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,this.$service.audit.getProfileList(this.search,(function(e){var a=e.getProfilesList(),i=[];a.forEach((function(e,a){var n={id:e.getId(),anchorId:e.getAnchorId(),areaId:e.getAreaId(),areaStr:Object(c["g"])(t.areaData,e.getAreaId()),nickname:e.getNickname(),gender:Object(c["g"])(t.genderList,e.getGender()),avatar:e.getAvatar(),reviewStatus:e.getStatus(),reviewStatusStr:Object(c["B"])(e.getStatus()),photoCount:e.getPhotoIdsList().length,videoCount:e.getVideoIdsList().length,tags:e.getTagsList().join(", "),occupation:e.getOccupation(),occupationStr:Object(c["g"])(t.occupationList,e.getOccupation()),birthday:Object(u["b"])(e.getBirthday()),signature:e.getSignature(),voiceGreeting:e.getVoiceGreeting(),onlineStart:e.getOnlineStart(),onlineEnd:e.getOnlineEnd(),photos:e.getPhotosList(),videos:e.getVideosList(),struct:e};i.push(n)})),t.total=e.getTotalCount(),t.tableData=i,t.listLoading=!1}))},onSubmit:function(){this.search.page.currentPage=1,this.fetchData()},handleSelectionChange:function(t){this.multipleSelection=t},changePageSize:function(t){this.search.page.pageSize=t.limit},handlePassed:function(t,e){var a=this,i=this;this.$confirm("是否通过","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var n=t.value,l={profileId:e.id,status:5,reason:n};a.$service.audit.processProfile(l,(function(t){t?i.$message.success("审核通过 !"):i.$message.error("审核失败 !"),i.fetchData()}))}))},handleRefuse:function(t,e){var a=this,i=this;this.$prompt("","拒绝原因",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var n=t.value,l={profileId:e.id,status:4,reason:n};a.$service.audit.processProfile(l,(function(t){t?i.$message.success("已拒绝 !"):i.$message.error("拒绝失败 !"),i.fetchData()}))}))},toDialog:function(t,e){var a=this;this.$refs[t].dialogVisible=!0,this.$nextTick((function(){a.$refs[t].init(e)}))},changeArea:function(){this.fetchData()}}},p=d,h=(a("ddb2"),a("2877")),g=Object(h["a"])(p,i,n,!1,null,null,null);e["default"]=g.exports},"3a5a":function(t,e,a){},5185:function(t,e,a){},"538d":function(t,e,a){},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),l=a("fc6a"),o=a("a640"),r=[].join,s=n!=Object,c=o("join",",");i({target:"Array",proto:!0,forced:s||!c},{join:function(t){return r.call(l(this),void 0===t?",":t)}})},c4d5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"查看视频",visible:t.dialogVisible,"append-to-body":"",width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"table-classic-wrapper dialog-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"thumb",label:"视频",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.thumb,contain:""},on:{click:function(a){return t.play(e.row)}}})]}}])}),a("el-table-column",{attrs:{prop:"thumb",label:"应用App",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                        "+t._s(e.row.app.label)+"\n                        "),1===e.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"文件类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"ownerId",label:"所有者ID",align:"center",width:"120"}})],1),a("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData}})],1),a("el-dialog",{attrs:{title:"播放视频",visible:t.playVisible,"before-close":t.closeVideo,"append-to-body":!0},on:{"update:visible":function(e){t.playVisible=e}}},[a("div",{staticClass:"content-item"},[a("VueVideoPlayer",{ref:"myVideoPlayer"})],1)])],1)},n=[],l=(a("159b"),a("333d")),o=a("be3f"),r=a("7139"),s={name:"Table",components:{Pagination:l["a"],VueVideoPlayer:o["a"]},data:function(){return{listLoading:!0,search:{page:{currentPage:1,pageSize:10}},videoList:[],imgList:[],total:0,playVisible:!1,dialogVisible:!1,appList:Object(r["c"])(),areaList:Object(r["e"])(),fileTypeList:Object(r["o"])()}},created:function(){this.fetchData()},methods:{init:function(t){this.videoList=t.videos,this.fetchData()},fetchData:function(){var t=this,e=[];this.videoList.forEach((function(a){var i={app:Object(r["d"])(t.appList,a.getAppId()),areaStr:Object(r["g"])(t.areaList,a.getAreaId()),type:Object(r["g"])(t.fileTypeList,a.getType()),ownerId:a.getOwnerId(),thumb:a.getThumb(),uri:a.getUri()};e.push(i)})),this.total=this.videoList.length,this.tableData=e,this.listLoading=!1},play:function(t){var e=this;this.playVisible=!0;var a=t.uri;this.$nextTick((function(){e.$refs.myVideoPlayer.initSrc(a)}))},closeVideo:function(){var t=this;this.playVisible=!1,this.$nextTick((function(){t.$refs.myVideoPlayer.emptySrc()}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},c=s,u=(a("fc7e"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,null,null);e["a"]=d.exports},ddb2:function(t,e,a){"use strict";a("538d")},fc7e:function(t,e,a){"use strict";a("5185")}}]);