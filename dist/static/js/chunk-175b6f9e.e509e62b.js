(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-175b6f9e"],{1276:function(e,t,o){"use strict";var a=o("d784"),r=o("44e7"),n=o("825a"),i=o("1d80"),s=o("4840"),l=o("8aa5"),c=o("50c4"),u=o("577e"),f=o("14c3"),g=o("9263"),p=o("9f7f"),d=o("d039"),m=p.UNSUPPORTED_Y,h=[].push,b=Math.min,C=4294967295,v=!d((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));a("split",(function(e,t,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,o){var a=u(i(this)),n=void 0===o?C:o>>>0;if(0===n)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,n);var s,l,c,f=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=new RegExp(e.source,p+"g");while(s=g.call(m,a)){if(l=m.lastIndex,l>d&&(f.push(a.slice(d,s.index)),s.length>1&&s.index<a.length&&h.apply(f,s.slice(1)),c=s[0].length,d=l,f.length>=n))break;m.lastIndex===s.index&&m.lastIndex++}return d===a.length?!c&&m.test("")||f.push(""):f.push(a.slice(d)),f.length>n?f.slice(0,n):f}:"0".split(void 0,0).length?function(e,o){return void 0===e&&0===o?[]:t.call(this,e,o)}:t,[function(t,o){var r=i(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r,o):a.call(u(r),t,o)},function(e,r){var i=n(this),g=u(e),p=o(a,i,g,r,a!==t);if(p.done)return p.value;var d=s(i,RegExp),h=i.unicode,v=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(m?"g":"y"),y=new d(m?"^(?:"+i.source+")":i,v),k=void 0===r?C:r>>>0;if(0===k)return[];if(0===g.length)return null===f(y,g)?[g]:[];var I=0,S=0,x=[];while(S<g.length){y.lastIndex=m?0:S;var J,w=f(y,m?g.slice(S):g);if(null===w||(J=b(c(y.lastIndex+(m?S:0)),g.length))===I)S=l(g,S,h);else{if(x.push(g.slice(I,S)),x.length===k)return x;for(var A=1;A<=w.length-1;A++)if(x.push(w[A]),x.length===k)return x;S=I=J}}return x.push(g.slice(I)),x}]}),!v,m)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"206f":function(e,t,o){"use strict";o("f678")},"2b9f":function(e,t,o){"use strict";o("5a15")},"333d":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pagination-wrapper"},[o("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},r=[],n=(o("a9e3"),{name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[5,10,15,20,50,1e3]}},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("changePageSize",{page:this.currentPage,limit:e}),this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),i=n,s=(o("206f"),o("2877")),l=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},"34ce":function(e,t,o){},4502:function(e,t,o){},"528b":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"star-pic-vue"}},[e.data?[e._l(e.images,(function(t){return o("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t,id:"contract_url"},on:{click:e.enlargePic}})})),e.isDialogShow?void 0:e._e(),o("el-dialog",{attrs:{visible:e.centerDialogVisible,modal:"","close-on-click-modal":"","custom-class":"dialog"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[o("el-carousel",{attrs:{autoplay:!1,arrow:"always"}},e._l(e.data,(function(e){return o("el-carousel-item",{key:e},[o("img",{attrs:{src:e}})])})),1)],1)]:e._e()],2)},r=[],n=(o("a434"),{name:"star-pic-list",props:["data","maxShow"],data:function(){return{centerDialogVisible:!1,showPic:"",isDialogShow:!1,index:0}},computed:{images:function(){return this.data instanceof Array&&this.data.length>2?this.data.splice(0,this.maxShow):this.data}},methods:{enlargePic:function(e){this.isDialogShow=!0,this.centerDialogVisible=!0,this.showPic=this.data[0],console.log(this.images)}}}),i=n,s=(o("6cd3"),o("2877")),l=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},"56d6":function(e,t,o){"use strict";o("8e49")},"5a15":function(e,t,o){},"6cd3":function(e,t,o){"use strict";o("cfaa")},"77c9":function(e,t,o){},"7a05":function(e,t,o){"use strict";o("34ce")},"841c":function(e,t,o){"use strict";var a=o("d784"),r=o("825a"),n=o("1d80"),i=o("129f"),s=o("577e"),l=o("14c3");a("search",(function(e,t,o){return[function(t){var o=n(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,o):new RegExp(t)[e](s(o))},function(e){var a=r(this),n=s(e),c=o(t,a,n);if(c.done)return c.value;var u=a.lastIndex;i(u,0)||(a.lastIndex=0);var f=l(a,n);return i(a.lastIndex,u)||(a.lastIndex=u),null===f?-1:f.index}]}))},"8c4a":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-classic-wrapper"},[o("el-card",{attrs:{shadow:"always"}},[o("div",{staticClass:"control-btns"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("addArea","")}}},[e._v("+ 新增区域")])],1),o("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[o("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[o("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},on:{change:e.changeArea},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",{attrs:{label:"App",prop:"areaId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.appId,callback:function(t){e.$set(e.search,"appId",t)},expression:"search.appId"}},e._l(e.appList,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[o("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),1===t.os?o("span",[o("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===t.os?o("span",[o("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):e._e(),t.isAnchor?o("span",[o("i",{staticClass:"iconfont icon-zhuboguanli",staticStyle:{float:"right"}})]):e._e()])})),1)],1),o("el-form-item",{staticStyle:{"padding-left":"20px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[o("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"app",label:"APP",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?o("span",[o("i",{staticClass:"icon-android-fill"})]):2===t.row.app.os?o("span",[o("i",{staticClass:"icon-pingguo"})]):e._e()])]}}])}),o("el-table-column",{attrs:{prop:"convertRate",label:"积分转换比例",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"depositCommission",label:"充值分成",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"rewardCommission",label:"消费分成",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"callPrice",label:"通话价格",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"freeMessageCount",label:"免费消息",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"newUserReward",label:"奖励钻石",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"heartbeatInterval",label:"心跳间隔",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"payTypeNames",label:"支付方式",align:"center",width:"220"}}),o("el-table-column",{attrs:{prop:"cdn",label:"cdn域名",align:"center",width:"420"}}),o("el-table-column",{attrs:{prop:"dndPeriod",label:"免打扰时长",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"tags",label:"标签配置",align:"center",width:"820"}}),o("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text"}},[o("router-link",{attrs:{to:{path:"./country",query:{areaId:t.row.areaId,areaName:t.row.areaStr}}}},[e._v("国家配置")])],1),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.toDialog("ossConfig",t.row)}}},[e._v("OSS配置")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.toDialog("agoraConfig",t.row)}}},[e._v("声网配置")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.toDialog("rongcloudConfig",t.row)}}},[e._v("融云配置")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.toDialog("greenConfig",t.row)}}},[e._v("鉴黄配置")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.toDialog("addArea",t.row)}}},[e._v("参数配置")])]}}])})],1),o("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),o("addArea",{ref:"addArea",on:{fetchData:e.fetchData}}),o("agoraConfig",{ref:"agoraConfig",on:{fetchData:e.fetchData}}),o("ossConfig",{ref:"ossConfig",on:{fetchData:e.fetchData}}),o("rongcloudConfig",{ref:"rongcloudConfig",on:{fetchData:e.fetchData}}),o("greenConfig",{ref:"greenConfig",on:{fetchData:e.fetchData}})],1)],1)},r=[],n=(o("ac1f"),o("841c"),o("159b"),o("a15b"),o("333d")),i=o("528b"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"form-list-wrapper"},[o("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[o("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},on:{change:e.changeArea},model:{value:e.form.areaId,callback:function(t){e.$set(e.form,"areaId",t)},expression:"form.areaId"}},e._l(e.areaList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",{attrs:{label:"应用",prop:"appId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}},e._l(e.appList,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[o("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),1===t.os?o("span",[o("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===t.os?o("span",[o("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):e._e(),t.isAnchor?o("span",[o("i",{staticClass:"iconfont icon-zhuboguanli",staticStyle:{float:"right"}})]):e._e()])})),1)],1),o("el-form-item",{attrs:{label:"积分转换比例",prop:"convertRate"}},[o("el-input-number",{attrs:{min:0},model:{value:e.form.convertRate,callback:function(t){e.$set(e.form,"convertRate",t)},expression:"form.convertRate"}})],1),o("el-form-item",{attrs:{label:"充值分成比例",prop:"depositCommission"}},[o("el-input-number",{attrs:{min:0,max:100},model:{value:e.form.depositCommission,callback:function(t){e.$set(e.form,"depositCommission",t)},expression:"form.depositCommission"}}),e._v("\n                 %\n            ")],1),o("el-form-item",{attrs:{label:"赠送分成比例",prop:"rewardCommission"}},[o("el-input-number",{attrs:{min:0,max:100},model:{value:e.form.rewardCommission,callback:function(t){e.$set(e.form,"rewardCommission",t)},expression:"form.rewardCommission"}}),e._v("\n                 %\n            ")],1),o("el-form-item",{attrs:{label:"默认通话价格",prop:"callPrice"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.callPrice,callback:function(t){e.$set(e.form,"callPrice",t)},expression:"form.callPrice"}})],1),o("el-form-item",{attrs:{label:"免费消息数量",prop:"freeMessageCount"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.freeMessageCount,callback:function(t){e.$set(e.form,"freeMessageCount",t)},expression:"form.freeMessageCount"}})],1),o("el-form-item",{attrs:{label:"新用户奖励钻石",prop:"newUserReward"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.newUserReward,callback:function(t){e.$set(e.form,"newUserReward",t)},expression:"form.newUserReward"}})],1),o("el-form-item",{attrs:{label:"心跳间隔",prop:"heartbeatInterval"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.heartbeatInterval,callback:function(t){e.$set(e.form,"heartbeatInterval",t)},expression:"form.heartbeatInterval"}}),e._v(" 秒\n            ")],1),o("el-form-item",{attrs:{label:"免打扰时长",prop:"dndPeriod"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.dndPeriod,callback:function(t){e.$set(e.form,"dndPeriod",t)},expression:"form.dndPeriod"}}),e._v(" 秒\n            ")],1),o("el-form-item",{attrs:{label:"主播转换usd汇率",prop:"anchorExchangeRate"}},[o("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.anchorExchangeRate,callback:function(t){e.$set(e.form,"anchorExchangeRate",t)},expression:"form.anchorExchangeRate"}}),e._v(" \n            ")],1),o("el-form-item",{attrs:{label:"支付方式",prop:"payTypes"}},[o("el-checkbox-group",{model:{value:e.form.payTypes,callback:function(t){e.$set(e.form,"payTypes",t)},expression:"form.payTypes"}},e._l(e.payTypeList,(function(t){return o("el-checkbox",{key:t,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),o("el-form-item",{attrs:{label:"支付渠道",prop:"payChannelIds",hidden:e.isPayChannel}},[o("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.payChannelIds,callback:function(t){e.$set(e.form,"payChannelIds",t)},expression:"form.payChannelIds"}},e._l(e.payChannelList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",{attrs:{label:"cdn",prop:"cdn"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.cdn,callback:function(t){e.$set(e.form,"cdn",t)},expression:"form.cdn"}})],1),o("el-form-item",{attrs:{label:"标签",prop:"tags"}},[e._l(e.form.tagList,(function(t){return o("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(o){return e.handleClose(t)}}},[e._v("\n                    "+e._s(t)+"\n                ")])})),e.inputVisible?o("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm.apply(null,arguments)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):o("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")])],2),o("el-form-item",{staticClass:"submit-box"},[o("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),o("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},l=[],c=(o("1276"),o("a434"),o("7139")),u=o("4ec3"),f={data:function(){return{form:{areaId:Object(c["n"])(),payTypes:[],tagList:[]},dialogVisible:!1,imgDialogVisible:!1,inputVisible:!1,title:"新增区域",inputValue:"",areaList:Object(c["f"])(!0),appList:[],payTypeList:Object(c["A"])(),payChannelList:[],isPayChannel:!0,authAreaId:Object(c["n"])(),rules:{convertRate:[{required:!0,message:"内容不能为空",trigger:"change"}],depositCommission:[{required:!0,message:"内容不能为空",trigger:"blur"}],rewardCommission:[{required:!0,message:"内容不能为空",trigger:"blur"}],callPrice:[{required:!0,message:"内容不能为空",trigger:"blur"}],freeMessageCount:[{required:!0,message:"内容不能为空",trigger:"blur"}],newUserReward:[{required:!0,message:"内容不能为空",trigger:"blur"}],heartbeatInterval:[{required:!0,message:"内容不能为空",trigger:"blur"}],dndPeriod:[{required:!0,message:"内容不能为空",trigger:"blur"}],payTypes:[{required:!0,message:"内容不能为空",trigger:"blur"}],cdn:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},methods:{init:function(e){"undefined"!=typeof e.id?(this.title="编辑区域",this.form=e,"undefined"!==typeof e.tags?this.form.tagList=e.tags.split(","):this.form.tagList=[],Object(u["b"])(e.payTypes)&&(this.form.payTypes=[]),this.form.appId=0===this.form.appId?void 0:this.form.appId,this.changeArea(e.areaId),this.changeApp(e.appId)):this.changeArea(this.form.areaId)},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(o){if(o){var a=t.handleParam();e.$service.config.saveAreaConfig(a,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=this.form;return e.tags=this.form.tagList,e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},handleClose:function(e){this.inputVisible=!0,this.form.tagList.splice(this.form.tagList.indexOf(e),1),this.inputVisible=!1},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&this.form.tagList.push(e),this.inputVisible=!1,this.inputValue=""},changeArea:function(e){this.appList=Object(c["d"])(e),this.payChannelList=Object(c["y"])(e)},changeApp:function(e){this.isPayChannel=0===e||"undefined"==typeof e}}},g=f,p=(o("2b9f"),o("2877")),d=Object(p["a"])(g,s,l,!1,null,null,null),m=d.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"OSS配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"form-list-wrapper"},[o("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"endpoint",prop:"ossConfigJson.endpoint"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.ossConfigJson.endpoint,callback:function(t){e.$set(e.form.ossConfigJson,"endpoint",t)},expression:"form.ossConfigJson.endpoint"}})],1),o("el-form-item",{attrs:{label:"bucket",prop:"ossConfigJson.bucket"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.ossConfigJson.bucket,callback:function(t){e.$set(e.form.ossConfigJson,"bucket",t)},expression:"form.ossConfigJson.bucket"}})],1),o("el-form-item",{attrs:{label:"key_id",prop:"ossConfigJson.keyId"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.ossConfigJson.keyId,callback:function(t){e.$set(e.form.ossConfigJson,"keyId",t)},expression:"form.ossConfigJson.keyId"}})],1),o("el-form-item",{attrs:{label:"key_secret",prop:"ossConfigJson.keySecret"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.ossConfigJson.keySecret,callback:function(t){e.$set(e.form.ossConfigJson,"keySecret",t)},expression:"form.ossConfigJson.keySecret"}})],1),o("el-form-item",{staticClass:"submit-box"},[o("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),o("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},b=[],C=o("5432"),v={data:function(){return{form:{},dialogVisible:!1,title:"新增应用",iconArr:[],rules:{osType:[{required:!0,message:"内容不能为空",trigger:"change"}],appKey:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){this.form=e},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(o){if(o){var a=t.handleParam();e.$service.config.saveAreaConfig(a,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=this.form,t=e.ossConfigJson,o=new C["OssConfig"];return o.setEndpoint(t.endpoint),o.setBucket(t.bucket),o.setKeyId(t.keyId),o.setKeySecret(t.keySecret),e.ossConfig=o,e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},y=v,k=(o("a771"),Object(p["a"])(y,h,b,!1,null,null,null)),I=k.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"声网配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"form-list-wrapper"},[o("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"声网appId",prop:"agoraConfigJson.appId"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.appId,callback:function(t){e.$set(e.form.agoraConfigJson,"appId",t)},expression:"form.agoraConfigJson.appId"}})],1),o("el-form-item",{attrs:{label:"声网app证书",prop:"agoraConfigJson.appCert"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.appCert,callback:function(t){e.$set(e.form.agoraConfigJson,"appCert",t)},expression:"form.agoraConfigJson.appCert"}})],1),o("el-form-item",{attrs:{label:"Api客户id",prop:"agoraConfigJson.clientId"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.clientId,callback:function(t){e.$set(e.form.agoraConfigJson,"clientId",t)},expression:"form.agoraConfigJson.clientId"}})],1),o("el-form-item",{attrs:{label:"Api客户密匙",prop:"agoraConfigJson.clientSecret"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.clientSecret,callback:function(t){e.$set(e.form.agoraConfigJson,"clientSecret",t)},expression:"form.agoraConfigJson.clientSecret"}})],1),o("el-form-item",{attrs:{label:"视频录制时长",prop:"agoraConfigJson.captureDuration"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.captureDuration,callback:function(t){e.$set(e.form.agoraConfigJson,"captureDuration",t)},expression:"form.agoraConfigJson.captureDuration"}})],1),o("el-form-item",{attrs:{label:"视频录制存储配置",prop:"agoraConfigJson.storageVendor"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageVendor,callback:function(t){e.$set(e.form.agoraConfigJson,"storageVendor",t)},expression:"form.agoraConfigJson.storageVendor"}})],1),o("el-form-item",{attrs:{label:"storage_region",prop:"agoraConfigJson.storageRegion"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageRegion,callback:function(t){e.$set(e.form.agoraConfigJson,"storageRegion",t)},expression:"form.agoraConfigJson.storageRegion"}})],1),o("el-form-item",{attrs:{label:"storage_endpoint",prop:"agoraConfigJson.storageEndpoint"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageEndpoint,callback:function(t){e.$set(e.form.agoraConfigJson,"storageEndpoint",t)},expression:"form.agoraConfigJson.storageEndpoint"}})],1),o("el-form-item",{attrs:{label:"storage_bucket",prop:"agoraConfigJson.storageBucket"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageBucket,callback:function(t){e.$set(e.form.agoraConfigJson,"storageBucket",t)},expression:"form.agoraConfigJson.storageBucket"}})],1),o("el-form-item",{attrs:{label:"storage_access_key",prop:"agoraConfigJson.storageAccessKey"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageAccessKey,callback:function(t){e.$set(e.form.agoraConfigJson,"storageAccessKey",t)},expression:"form.agoraConfigJson.storageAccessKey"}})],1),o("el-form-item",{attrs:{label:"storage_secret_key",prop:"agoraConfigJson.storageSecretKey"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.agoraConfigJson.storageSecretKey,callback:function(t){e.$set(e.form.agoraConfigJson,"storageSecretKey",t)},expression:"form.agoraConfigJson.storageSecretKey"}})],1),o("el-form-item",{staticClass:"submit-box"},[o("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),o("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},x=[],J={data:function(){return{form:{},dialogVisible:!1,title:"新增应用",iconArr:[],rules:{osType:[{required:!0,message:"内容不能为空",trigger:"change"}],appKey:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){this.form=e},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(o){if(o){var a=t.handleParam();e.$service.config.saveAreaConfig(a,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=this.form,t=e.agoraConfigJson,o=new C["AgoraConfig"];return o.setAppId(t.appId),o.setAppCert(t.appCert),o.setClientId(t.clientId),o.setClientSecret(t.clientSecret),o.setCaptureDuration(t.captureDuration),o.setStorageVendor(t.storageVendor),o.setStorageRegion(t.storageRegion),o.setStorageEndpoint(t.storageEndpoint),o.setStorageBucket(t.storageBucket),o.setStorageAccessKey(t.storageAccessKey),o.setStorageSecretKey(t.storageSecretKey),e.agoraConfig=o,e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},w=J,A=(o("bd73"),Object(p["a"])(w,S,x,!1,null,null,null)),$=A.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"融云配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"form-list-wrapper"},[o("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"融云appKey",prop:"rongcloudConfigJson.appKey"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.appKey,callback:function(t){e.$set(e.form.rongcloudConfigJson,"appKey",t)},expression:"form.rongcloudConfigJson.appKey"}})],1),o("el-form-item",{attrs:{label:"融云appSecret",prop:"rongcloudConfigJson.appSecret"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.appSecret,callback:function(t){e.$set(e.form.rongcloudConfigJson,"appSecret",t)},expression:"form.rongcloudConfigJson.appSecret"}})],1),o("el-form-item",{attrs:{label:"融云api",prop:"rongcloudConfigJson.domain"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.domain,callback:function(t){e.$set(e.form.rongcloudConfigJson,"domain",t)},expression:"form.rongcloudConfigJson.domain"}})],1),o("el-form-item",{attrs:{label:"融云appKey(旧)",prop:"rongcloudConfigJson.oldAppKey"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.oldAppKey,callback:function(t){e.$set(e.form.rongcloudConfigJson,"oldAppKey",t)},expression:"form.rongcloudConfigJson.oldAppKey"}})],1),o("el-form-item",{attrs:{label:"融云appSecret(旧)",prop:"rongcloudConfigJson.oldAppSecret"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.oldAppSecret,callback:function(t){e.$set(e.form.rongcloudConfigJson,"oldAppSecret",t)},expression:"form.rongcloudConfigJson.oldAppSecret"}})],1),o("el-form-item",{attrs:{label:"融云api(旧)",prop:"rongcloudConfigJson.oldDomain"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.rongcloudConfigJson.oldDomain,callback:function(t){e.$set(e.form.rongcloudConfigJson,"oldDomain",t)},expression:"form.rongcloudConfigJson.oldDomain"}})],1),o("el-form-item",{staticClass:"submit-box"},[o("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),o("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},D=[],P={data:function(){return{form:{},dialogVisible:!1,title:"新增应用",iconArr:[],rules:{osType:[{required:!0,message:"内容不能为空",trigger:"change"}],appKey:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){this.form=e},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(o){if(o){var a=t.handleParam();e.$service.config.saveAreaConfig(a,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=this.form,t=e.rongcloudConfigJson,o=new C["RongcloudConfig"];return o.setAppKey(t.appKey),o.setAppSecret(t.appSecret),o.setDomain(t.domain),o.setOldAppKey(t.oldAppKey),o.setOldAppSecret(t.oldAppSecret),o.setOldDomain(t.oldDomain),e.rongcloudConfig=o,e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},F=P,V=(o("aede"),Object(p["a"])(F,_,D,!1,null,null,null)),O=V.exports,K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"鉴黄配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"form-list-wrapper"},[o("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"key_id",prop:"greenConfigJson.keyId"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.greenConfigJson.keyId,callback:function(t){e.$set(e.form.greenConfigJson,"keyId",t)},expression:"form.greenConfigJson.keyId"}})],1),o("el-form-item",{attrs:{label:"key_secret",prop:"greenConfigJson.keySecret"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.greenConfigJson.keySecret,callback:function(t){e.$set(e.form.greenConfigJson,"keySecret",t)},expression:"form.greenConfigJson.keySecret"}})],1),o("el-form-item",{staticClass:"submit-box"},[o("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),o("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},E=[],R={data:function(){return{form:{},dialogVisible:!1,title:"新增应用",iconArr:[],rules:{osType:[{required:!0,message:"内容不能为空",trigger:"change"}],appKey:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){this.form=e},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(o){if(o){var a=t.handleParam();e.$service.config.saveAreaConfig(a,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=this.form,t=e.greenConfigJson,o=new C["GreenConfig"];return o.setKeyId(t.keyId),o.setKeySecret(t.keySecret),e.greenConfig=o,e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},L=R,T=(o("56d6"),Object(p["a"])(L,K,E,!1,null,null,null)),j=T.exports,z={components:{Pagination:n["a"],imageShow:i["a"],addArea:m,ossConfig:I,agoraConfig:$,rongcloudConfig:O,greenConfig:j},data:function(){return{listLoading:!0,search:{appId:void 0,areaId:Object(c["n"])(),page:{currentPage:1,pageSize:10}},total:0,authAreaId:Object(c["n"])(),tableData:[],isCollapse:!0,areaList:Object(c["f"])(!0),appList:[],payType:Object(c["A"])()}},created:function(){this.search.areaId=0===this.authAreaId?this.areaList[1].value:this.authAreaId,this.changeArea(this.search.areaId),this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.config.getAreaConfigList(this.search,(function(t){var o=t.getConfigsList(),a=[];o.forEach((function(t,o){var r={id:t.getId(),areaId:t.getAreaId(),areaStr:Object(c["g"])(e.areaList,t.getAreaId()),appId:t.getAppId(),app:Object(c["e"])(Object(c["d"])(e.search.areaId,!1),t.getAppId()),convertRate:t.getConvertRate(),depositCommission:t.getDepositCommission(),rewardCommission:t.getRewardCommission(),callPrice:t.getCallPrice(),freeMessageCount:t.getFreeMessageCount(),newUserReward:t.getNewUserReward(),heartbeatInterval:t.getHeartbeatInterval(),payTypes:t.getPayTypesList(),payTypeNames:e.handlePayType(t.getPayTypesList()).join(","),cdn:t.getCdn(),dndPeriod:t.getDndPeriod(),tags:t.getTagsList().join(","),agoraConfig:t.getAgoraConfig(),agoraConfigJson:e.toJsonAgoraConfig(t.getAgoraConfig()),ossConfig:t.getOssConfig(),ossConfigJson:e.toJsonOssConfig(t.getOssConfig()),rongcloudConfig:t.getRongcloudConfig(),rongcloudConfigJson:e.toJsonRongcloudConfig(t.getRongcloudConfig()),greenConfig:t.getGreenConfig(),greenConfigJson:e.toJsonGreenConfig(t.getGreenConfig()),payChannelIds:t.getPayChannelIdsList(),struct:t};a.push(r)})),e.total=o.length,e.tableData=a,e.listLoading=!1}))},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var o=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){o.$refs[e].init(t)}))},resetForm:function(){this.$refs.searchForm.resetFields()},handlePayType:function(e){var t=[];return Object(c["A"])().forEach((function(o){e.indexOf(o.value)>=0&&t.push(o.label)})),t},toJsonAgoraConfig:function(e){if("undefined"==typeof e)return{};var t={appId:e.getAppId(),appCert:e.getAppCert(),clientId:e.getClientId(),clientSecret:e.getClientSecret(),captureDuration:e.getCaptureDuration(),storageVendor:e.getStorageVendor(),storageRegion:e.getStorageRegion(),storageEndpoint:e.getStorageEndpoint(),storageBucket:e.getStorageBucket(),storageAccessKey:e.getStorageAccessKey(),storageSecretKey:e.getStorageSecretKey()};return t},toJsonOssConfig:function(e){if("undefined"==typeof e)return{};var t={endpoint:e.getEndpoint(),bucket:e.getBucket(),keyId:e.getKeyId(),keySecret:e.getKeySecret()};return t},toJsonRongcloudConfig:function(e){if("undefined"==typeof e)return{};var t={appKey:e.getAppKey(),appSecret:e.getAppSecret(),domain:e.getDomain(),oldAppKey:e.getOldAppKey(),oldAppSecret:e.getOldAppSecret(),oldDomain:e.getOldDomain()};return t},toJsonGreenConfig:function(e){if("undefined"==typeof e)return{};var t={keyId:e.getKeyId(),keySecret:e.getKeySecret()};return t},changeArea:function(e){this.appList=Object(c["d"])(e,!0)}}},N=z,q=(o("7a05"),Object(p["a"])(N,a,r,!1,null,null,null));t["default"]=q.exports},"8e49":function(e,t,o){},a15b:function(e,t,o){"use strict";var a=o("23e7"),r=o("44ad"),n=o("fc6a"),i=o("a640"),s=[].join,l=r!=Object,c=i("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(n(this),void 0===e?",":e)}})},a771:function(e,t,o){"use strict";o("77c9")},a9e3:function(e,t,o){"use strict";var a=o("83ab"),r=o("da84"),n=o("94ca"),i=o("6eeb"),s=o("5135"),l=o("c6b6"),c=o("7156"),u=o("d9b5"),f=o("c04e"),g=o("d039"),p=o("7c73"),d=o("241c").f,m=o("06cf").f,h=o("9bf2").f,b=o("58a8").trim,C="Number",v=r[C],y=v.prototype,k=l(p(y))==C,I=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,o,a,r,n,i,s,l,c=f(e,"number");if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(o=c.charCodeAt(2),88===o||120===o)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(n=c.slice(2),i=n.length,s=0;s<i;s++)if(l=n.charCodeAt(s),l<48||l>r)return NaN;return parseInt(n,a)}return+c};if(n(C,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,x=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof x&&(k?g((function(){y.valueOf.call(o)})):l(o)!=C)?c(new v(I(t)),o,x):I(t)},J=a?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;J.length>w;w++)s(v,S=J[w])&&!s(x,S)&&h(x,S,m(v,S));x.prototype=y,y.constructor=x,i(r,C,x)}},aede:function(e,t,o){"use strict";o("de68")},bd73:function(e,t,o){"use strict";o("4502")},cfaa:function(e,t,o){},de68:function(e,t,o){},f678:function(e,t,o){}}]);