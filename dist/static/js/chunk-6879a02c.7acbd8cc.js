(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6879a02c"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"18a5":function(e,t,a){"use strict";var r=a("23e7"),n=a("857a"),i=a("af03");r({target:"String",proto:!0,forced:i("anchor")},{anchor:function(e){return n(this,"a","name",e)}})},2032:function(e,t,a){},"206f":function(e,t,a){"use strict";a("f678")},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],i=(a("a9e3"),{name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[5,10,15,20,50,1e3]}},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("changePageSize",{page:this.currentPage,limit:e}),this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),l=i,o=(a("206f"),a("2877")),s=Object(o["a"])(l,r,n,!1,null,null,null);t["a"]=s.exports},"3e7d":function(e,t,a){},"494c":function(e,t,a){},"528b":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"star-pic-vue"}},[e.data?[e._l(e.images,(function(t){return a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t,id:"contract_url"},on:{click:e.enlargePic}})})),e.isDialogShow?void 0:e._e(),a("el-dialog",{attrs:{visible:e.centerDialogVisible,modal:"","close-on-click-modal":"","custom-class":"dialog"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-carousel",{attrs:{autoplay:!1,arrow:"always"}},e._l(e.data,(function(e){return a("el-carousel-item",{key:e},[a("img",{attrs:{src:e}})])})),1)],1)]:e._e()],2)},n=[],i=(a("a434"),{name:"star-pic-list",props:["data","maxShow"],data:function(){return{centerDialogVisible:!1,showPic:"",isDialogShow:!1,index:0}},computed:{images:function(){return this.data instanceof Array&&this.data.length>2?this.data.splice(0,this.maxShow):this.data}},methods:{enlargePic:function(e){this.isDialogShow=!0,this.centerDialogVisible=!0,this.showPic=this.data[0],console.log(this.images)}}}),l=i,o=(a("6cd3"),a("2877")),s=Object(o["a"])(l,r,n,!1,null,null,null);t["a"]=s.exports},"6a0e":function(e,t,a){},"6adf":function(e,t,a){"use strict";a("2032")},"6cd3":function(e,t,a){"use strict";a("cfaa")},"841c":function(e,t,a){"use strict";var r=a("d784"),n=a("825a"),i=a("1d80"),l=a("129f"),o=a("577e"),s=a("14c3");r("search",(function(e,t,a){return[function(t){var a=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](o(a))},function(e){var r=n(this),i=o(e),c=a(t,r,i);if(c.done)return c.value;var u=r.lastIndex;l(u,0)||(r.lastIndex=0);var d=s(r,i);return l(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},8660:function(e,t,a){"use strict";a("3e7d")},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),l=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("d9b5"),d=a("c04e"),f=a("d039"),p=a("7c73"),m=a("241c").f,b=a("06cf").f,g=a("9bf2").f,h=a("58a8").trim,v="Number",k=n[v],y=k.prototype,w=s(p(y))==v,S=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,r,n,i,l,o,s,c=d(e,"number");if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(i=c.slice(2),l=i.length,o=0;o<l;o++)if(s=i.charCodeAt(o),s<48||s>n)return NaN;return parseInt(i,r)}return+c};if(i(v,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var x,$=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof $&&(w?f((function(){y.valueOf.call(a)})):s(a)!=v)?c(new k(S(t)),a,$):S(t)},_=r?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;_.length>I;I++)o(k,x=_[I])&&!o($,x)&&g($,x,b(k,x));$.prototype=y,y.constructor=$,l(n,v,$)}},c965:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"用户Id",prop:"userId"}},[a("el-input",{attrs:{placeholder:"用户Id"},model:{value:e.search.userId,callback:function(t){e.$set(e.search,"userId",t)},expression:"search.userId"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.search.nickname,callback:function(t){e.$set(e.search,"nickname",t)},expression:"search.nickname"}})],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:0!==e.authAreaId},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(t){e.isCollapse=!e.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[e._v("\n                            "+e._s(e.isCollapse?"展开":"收起")+"\n                        ")]),a("div",[a("el-form-item",{attrs:{label:"VIP",prop:"vipOnly"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.vipOnly,callback:function(t){e.$set(e.search,"vipOnly",t)},expression:"search.vipOnly"}},e._l(e.boolDict,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"是否付费",prop:"depositOnly"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.depositOnly,callback:function(t){e.$set(e.search,"depositOnly",t)},expression:"search.depositOnly"}},e._l(e.boolDict,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"钻石余额",prop:"minBalance"}},[a("el-input",{attrs:{placeholder:"请输入余额"},model:{value:e.search.minBalance,callback:function(t){e.$set(e.search,"minBalance",t)},expression:"search.minBalance"}},[a("template",{slot:"prepend"},[e._v("大于")])],2)],1),a("el-form-item",{attrs:{label:"注册时间",prop:"createdStart"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.search.date,callback:function(t){e.$set(e.search,"date",t)},expression:"search.date"}})],1)],1)],2)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"appStr",label:"APP",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                            "+e._s(t.row.app.label)+"\n                            "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"nickname",label:"用户名",align:"center",width:"200"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:e.contain,src:t.row.avatar,"preview-src-list":[t.row.avatar]}})]}}])}),a("el-table-column",{attrs:{prop:"genderStr",label:"性别",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"fansCount",label:"粉丝数量",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"osTypeStr",label:"系统类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"onlineStatus",label:"在线状态",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[""!=t.row.onlineStatusStr?a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.onlineStatusStr))]):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"blockStatusStr",label:"封禁状态",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[""!=t.row.blockStatusStr?a("el-tag",{attrs:{size:"medium"},on:{click:function(a){return e.toDialog("accountStatusList",t.row)}}},[e._v(e._s(t.row.blockStatusStr))]):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"signature",label:"签名","show-overflow-tooltip":!0,align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"occupation",label:"职业",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"vipEndAt",label:"vip到期时间",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"expense",label:"消费金额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"deposit",label:"充值金额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"balance",label:"账户余额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"messageUsed",label:"已发送消息数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"checkinDays",label:"已签到天数",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"checkinAt",label:"上次签到时间",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"createdAt",label:"注册日期",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"appVersion",label:"app版本",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"onlineIp",label:"上线IP",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.getAddress(t.row)}}},[e._v(e._s(t.row.onlineIp))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[3!==t.row.blockStatus&&4!==t.row.blockStatus?a("span",{staticStyle:{"padding-right":"10px","padding-left":"10px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("block",t.row)}}},[e._v("封禁")])],1):a("span",[a("el-button",{staticStyle:{"padding-right":"10px","padding-left":"10px"},attrs:{type:"text"},on:{click:function(a){return e.unblock(t.row.id)}}},[e._v("解封")])],1),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("recharge",t.row)}}},[e._v("充值")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("updateUser",t.row)}}},[e._v("更新")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("multiAccount",t.row)}}},[e._v("多帐号查询")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.deleteUser(t.row)}}},[e._v("删除")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("block",{ref:"block",on:{fetchData:e.fetchData}}),a("multiAccount",{ref:"multiAccount"}),a("recharge",{ref:"recharge",on:{fetchData:e.fetchData}}),a("updateUser",{ref:"updateUser",on:{fetchData:e.fetchData}})],1)],1)},n=[],i=(a("159b"),a("ac1f"),a("841c"),a("18a5"),a("333d")),l=a("528b"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"封禁主播",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"主播Id：",prop:"entityId"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.entityId,callback:function(t){e.$set(e.form,"entityId",t)},expression:"form.entityId"}})],1),a("el-form-item",{attrs:{label:"封禁类型",prop:"blockStatus"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.blockStatus,callback:function(t){e.$set(e.form,"blockStatus",t)},expression:"form.blockStatus"}},e._l(e.blockStatusList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"封禁时常",prop:"duration"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.duration,callback:function(t){e.$set(e.form,"duration",t)},expression:"form.duration"}},e._l(e.blockTimeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提   交")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},s=[],c=a("7139"),u={components:{},data:function(){return{form:{entityId:"",entityType:1,blockStatus:1,duration:300,reason:"",struct:""},dialogVisible:!1,blockStatusList:Object(c["h"])(),blockTimeList:Object(c["i"])(),rules:{entityId:[{required:!0,message:"内容不能为空",trigger:"change"}],blockStatus:[{required:!0,message:"请选择封禁类型",trigger:"blur"}],duration:[{required:!0,message:"请选择",trigger:"blur"}]}}},methods:{init:function(e){this.form.entityId=e.id},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){a&&e.$service.anchor.block(e.form,(function(e){e?(t.$message.success("封禁成功!"),t.closeDialog()):t.$message.error("封禁失败!")}))}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},d=u,f=(a("8660"),a("2877")),p=Object(f["a"])(d,o,s,!1,null,null,null),m=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"多帐号查询",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),a("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"永久封禁：",prop:"bool"}},[a("el-switch",{model:{value:e.form.bool,callback:function(t){e.$set(e.form,"bool",t)},expression:"form.bool"}})],1),e.form.bool?e._e():a("div",[a("el-form-item",{attrs:{label:"封禁时常",prop:"forever"}},[a("el-input-number",{attrs:{min:1},model:{value:e.form.forever,callback:function(t){e.$set(e.form,"forever",t)},expression:"form.forever"}}),e._v("小时\n                ")],1)],1),a("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},g=[],h={name:"Form",data:function(){return{form:{uid:"",nickname:"",bool:!1,forever:"",reason:""},dialogVisible:!1}},methods:{init:function(e){this.form.uid=e.anchorId,this.form.nickname=e.nickname},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("提交失败!"),!1;alert("提交成功!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},v=h,k=(a("6adf"),Object(f["a"])(v,b,g,!1,null,null,null)),y=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"充值",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"充值钻石数量",prop:"amount"}},[a("el-input-number",{model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}}),a("div",{staticClass:"imgSpan2"},[e._v("正数为增加，负数为扣除")])],1),a("el-form-item",{attrs:{label:"是否通知",prop:"sendNotify"}},[a("el-switch",{model:{value:e.form.sendNotify,callback:function(t){e.$set(e.form,"sendNotify",t)},expression:"form.sendNotify"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},S=[],x={components:{},data:function(){return{form:{id:"",nickname:"",amount:100,sendNotify:!1,desc:"线下充值"},dialogVisible:!1,rules:{amount:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){a&&e.$service.user.adjustBalance(e.form,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},resetForm:function(){this.$refs.ruleForm.resetFields()}}},$=x,_=(a("f701"),Object(f["a"])($,w,S,!1,null,null,null)),I=_.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"更新用户信息",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"form",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"vip到期时间",prop:"vipEndAt"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"vip到期时间",align:"right"},model:{value:e.form.vipEndAt,callback:function(t){e.$set(e.form,"vipEndAt",t)},expression:"form.vipEndAt"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},O=[],A=a("da46"),C={components:{banLevel:A["d"]},data:function(){return{form:{uid:"",nickname:"",vipEndAt:""},banLevel:A["d"],dialogVisible:!1,rules:{vipEndAt:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(e){var t=this,a=this;this.$refs[e].validate((function(e){e&&t.$service.user.updateUser(t.form,(function(e){e?(a.$message.success("保存成功!"),a.closeDialog()):a.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.$emit("fetchData")},resetForm:function(e){this.$refs[e].resetFields()}}},F=C,E=(a("d186"),Object(f["a"])(F,D,O,!1,null,null,null)),j=E.exports,z=a("ca00"),P={components:{Pagination:i["a"],imageShow:l["a"],block:m,multiAccount:y,recharge:I,updateUser:j},data:function(){return{listLoading:!0,search:{userId:void 0,nickname:void 0,date:[],vipOnly:void 0,depositOnly:void 0,minBalance:void 0,areaId:Object(c["n"])(),page:{currentPage:1,pageSize:10}},total:0,authAreaId:Object(c["n"])(),isCollapse:!0,areaData:Object(c["f"])(!0),boolDict:Object(c["j"])()}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.user.getUserList(this.handleParam(),(function(t){var a=t.getUsersList(),r=[];a.forEach((function(t,a){var n={id:t.getId(),appId:t.getAppId(),app:Object(c["e"])(Object(c["d"])(e.search.areaId,!1),t.getAppId()),areaId:t.getAreaId(),areaStr:Object(c["g"])(e.areaData,t.getAreaId()),osType:t.getOsType(),osTypeStr:Object(c["x"])(t.getOsType()),country:t.getCountry(),lang:t.getLang(),onlineStatus:t.getOnlineStatus(),onlineStatusStr:Object(c["w"])(t.getOnlineStatus()),blockStatus:t.getBlockStatus(),blockStatusStr:Object(c["h"])(t.getBlockStatus()),balance:t.getBalance(),lockedBalance:t.getLockedBalance(),expense:t.getExpense(),reward:t.getReward(),deposit:t.getDeposit(),vipStartAt:t.getVipStartAt(),vipEndAt:Object(z["g"])(t.getVipEndAt()),messageQuota:t.getMessageQuota(),messageUsed:t.getMessageUsed(),checkinDays:t.getCheckinDays(),checkinAt:Object(z["g"])(t.getCheckinAt()),fansCount:t.getFansCount(),nickname:t.getNickname(),gender:t.getGender(),genderStr:Object(c["q"])(t.getGender()),birthday:Object(z["g"])(t.getBirthday()),avatar:t.getAvatar(),signature:t.getSignature(),occupation:t.getOccupation(),offlineAt:Object(z["g"])(t.getOfflineAt()),createdAt:Object(z["g"])(t.getCreatedAt()),appVersion:t.getVersion(),onlineIp:t.getOnlineIp()};r.push(n)})),e.total=t.getTotalCount(),e.tableData=r,e.listLoading=!1}))},handleParam:function(){var e=this.search;return e.date.length>0&&(e.createdStartUint=Object(z["d"])(this.search.date[0]),e.createdEndUint=Object(z["a"])(this.search.date[1])),e},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},getAddress:function(e){var t=this;Object(c["K"])(e.onlineIp,(function(e){var a=e.getCountry()+" . "+e.getCity();t.$alert(a,"地区",{confirmButtonText:"确定"})}))},unblock:function(e){var t={entityId:e,entityType:1},a=this;this.$service.anchor.unblock(t,(function(e){e?(a.$message.success("解封成功!"),a.fetchData()):a.$message.error("解封失败!")}))},deleteUser:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=t,r={userId:e.id};t.$service.user.deleteUser(r,(function(e){e?a.$message.success("删除成功!"):a.$message.error("删除失败 !"),a.fetchData()}))}))},resetForm:function(){this.$refs.searchForm.resetFields()}}},V=P,N=(a("e85a"),Object(f["a"])(V,r,n,!1,null,null,null));t["default"]=N.exports},ca00:function(e,t,a){"use strict";function r(e){return e/100}function n(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd")}function i(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd hh:mm:ss")}function l(e){return"undefined"==typeof e&&(e=new Date),e.format("yyyy-MM-dd")}function o(e){var t=new Date((new Date).format("yyyy-MM-dd"));return e?t.setDate(t.getDate()+e):t}function s(e){return new Date(e.toLocaleDateString()).getTime()/1e3}function c(e){return s(e)+86400-1}a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return c}))},cfaa:function(e,t,a){},d186:function(e,t,a){"use strict";a("494c")},d88a:function(e,t,a){},da46:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return s}));var r=[{value:!0,label:"是"},{value:!1,label:"否"}],n=[{value:1,label:"kafo"},{value:2,label:"toya"}],i=[{value:1,label:"中东"},{value:2,label:"印尼"}],l=[{value:1,label:"差劲"},{value:2,label:"中等"},{value:2,label:"良好"},{value:2,label:"优秀"}],o=[{value:"0.5",label:"30分钟"},{value:1,label:"1小时"},{value:3,label:"3小时"},{value:"24",label:"1天"},{value:"72",label:"3天"},{value:"168",label:"7天"}],s=[{value:1,label:"奖励"},{value:2,label:"抽奖"}]},e85a:function(e,t,a){"use strict";a("d88a")},f678:function(e,t,a){},f701:function(e,t,a){"use strict";a("6a0e")}}]);