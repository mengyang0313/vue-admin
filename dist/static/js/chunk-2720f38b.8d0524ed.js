(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2720f38b"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"18a5":function(e,t,a){"use strict";var r=a("23e7"),l=a("857a"),i=a("af03");r({target:"String",proto:!0,forced:i("anchor")},{anchor:function(e){return l(this,"a","name",e)}})},2032:function(e,t,a){},"3e7d":function(e,t,a){},"494c":function(e,t,a){},"6a0e":function(e,t,a){},"6adf":function(e,t,a){"use strict";a("2032")},"841c":function(e,t,a){"use strict";var r=a("d784"),l=a("825a"),i=a("1d80"),n=a("129f"),o=a("577e"),s=a("14c3");r("search",(function(e,t,a){return[function(t){var a=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](o(a))},function(e){var r=l(this),i=o(e),c=a(t,r,i);if(c.done)return c.value;var u=r.lastIndex;n(u,0)||(r.lastIndex=0);var d=s(r,i);return n(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},8660:function(e,t,a){"use strict";a("3e7d")},a9e3:function(e,t,a){"use strict";var r=a("83ab"),l=a("da84"),i=a("94ca"),n=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("d9b5"),d=a("c04e"),m=a("d039"),f=a("7c73"),p=a("241c").f,b=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,v="Number",k=l[v],y=k.prototype,w=s(f(y))==v,S=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,r,l,i,n,o,s,c=d(e,"number");if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+c}for(i=c.slice(2),n=i.length,o=0;o<n;o++)if(s=i.charCodeAt(o),s<48||s>l)return NaN;return parseInt(i,r)}return+c};if(i(v,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var x,I=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof I&&(w?m((function(){y.valueOf.call(a)})):s(a)!=v)?c(new k(S(t)),a,I):S(t)},$=r?p(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;$.length>_;_++)o(k,x=$[_])&&!o(I,x)&&h(I,x,b(k,x));I.prototype=y,y.constructor=I,n(l,v,I)}},c466:function(e,t,a){"use strict";function r(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd")}function l(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd hh:mm:ss")}a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}))},c9658:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"用户Id",prop:"userId"}},[a("el-input",{attrs:{placeholder:"用户Id"},model:{value:e.search.userId,callback:function(t){e.$set(e.search,"userId",t)},expression:"search.userId"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.search.nickname,callback:function(t){e.$set(e.search,"nickname",t)},expression:"search.nickname"}})],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(t){e.isCollapse=!e.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[e._v("\n                        "+e._s(e.isCollapse?"展开":"收起")+"\n                    ")]),a("div",[a("el-form-item",{attrs:{label:"VIP",prop:"vipOnly"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.vipOnly,callback:function(t){e.$set(e.search,"vipOnly",t)},expression:"search.vipOnly"}},e._l(e.boolDict,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"是否付费",prop:"depositOnly"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.depositOnly,callback:function(t){e.$set(e.search,"depositOnly",t)},expression:"search.depositOnly"}},e._l(e.boolDict,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"钻石余额",prop:"minBalance"}},[a("el-input",{attrs:{placeholder:"请输入余额"},model:{value:e.search.minBalance,callback:function(t){e.$set(e.search,"minBalance",t)},expression:"search.minBalance"}},[a("template",{slot:"prepend"},[e._v("大于")])],2)],1),a("el-form-item",{attrs:{label:"注册时间",prop:"createdStart"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始时间"},model:{value:e.search.createdStart,callback:function(t){e.$set(e.search,"createdStart",t)},expression:"search.createdStart"}})],1),a("el-col",{staticClass:"line",attrs:{span:1,align:"center"}},[e._v("-")]),a("el-col",{attrs:{span:10}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"结束时间"},model:{value:e.search.createdEnd,callback:function(t){e.$set(e.search,"createdEnd",t)},expression:"search.createdEnd"}})],1)],1)],1)],2)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"appStr",label:"APP",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"nickname",label:"用户名",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:e.contain,src:t.row.avatar,"preview-src-list":[t.row.avatar]}})]}}])}),a("el-table-column",{attrs:{prop:"genderStr",label:"性别",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"fansCount",label:"粉丝数量",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"osTypeStr",label:"系统类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"onlineStatus",label:"在线状态",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[""!=t.row.onlineStatusStr?a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.onlineStatusStr))]):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"blockStatusStr",label:"封禁状态",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[""!=t.row.blockStatusStr?a("el-tag",{attrs:{size:"medium"},on:{click:function(a){return e.toDialog("accountStatusList",t.row)}}},[e._v(e._s(t.row.blockStatusStr))]):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"signature",label:"签名",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"occupation",label:"职业",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"vipEndAt",label:"vip到期时间",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"expense",label:"消费金额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"deposit",label:"充值金额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"balance",label:"账户余额",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"messageUsed",label:"已发送消息数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"checkinDays",label:"已签到天数",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"checkinAt",label:"上次签到时间",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"createdAt",label:"注册日期",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"appVersion",label:"app版本",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"onlineIp",label:"ip地址",align:"center",width:"140"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[3!==t.row.blockStatus&&4!==t.row.blockStatus?a("span",{staticStyle:{"padding-right":"10px","padding-left":"10px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("block",t.row)}}},[e._v("封禁")])],1):a("span",[a("el-button",{staticStyle:{"padding-right":"10px","padding-left":"10px"},attrs:{type:"text"},on:{click:function(a){return e.unblock(t.row.id)}}},[e._v("解封")])],1),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("recharge",t.row)}}},[e._v("充值")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("updateUser",t.row)}}},[e._v("更新")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("multiAccount",t.row)}}},[e._v("多帐号查询")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("block",{ref:"block"}),a("multiAccount",{ref:"multiAccount"}),a("recharge",{ref:"recharge",on:{fetchData:e.fetchData}}),a("updateUser",{ref:"updateUser",on:{fetchData:e.fetchData}})],1)],1)},l=[],i=(a("159b"),a("ac1f"),a("841c"),a("18a5"),a("333d")),n=a("528b"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"封禁主播",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"主播Id：",prop:"entityId"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.entityId,callback:function(t){e.$set(e.form,"entityId",t)},expression:"form.entityId"}})],1),a("el-form-item",{attrs:{label:"封禁类型",prop:"blockStatus"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.blockStatus,callback:function(t){e.$set(e.form,"blockStatus",t)},expression:"form.blockStatus"}},e._l(e.blockStatusList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"封禁时常",prop:"duration"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.duration,callback:function(t){e.$set(e.form,"duration",t)},expression:"form.duration"}},e._l(e.blockTimeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提   交")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},s=[],c=a("7139"),u={components:{},data:function(){return{form:{entityId:"",entityType:1,blockStatus:1,duration:300,reason:"",struct:""},dialogVisible:!1,blockStatusList:Object(c["h"])(),blockTimeList:Object(c["i"])(),rules:{entityId:[{required:!0,message:"内容不能为空",trigger:"change"}],blockStatus:[{required:!0,message:"请选择封禁类型",trigger:"blur"}],duration:[{required:!0,message:"请选择",trigger:"blur"}]}}},methods:{init:function(e){this.form.entityId=e.id},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){a&&e.$service.anchor.block(e.form,(function(e){e?(t.$message.success("封禁成功!"),t.closeDialog()):t.$message.error("封禁失败!")}))}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},d=u,m=(a("8660"),a("2877")),f=Object(m["a"])(d,o,s,!1,null,null,null),p=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"多帐号查询",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),a("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"永久封禁：",prop:"bool"}},[a("el-switch",{model:{value:e.form.bool,callback:function(t){e.$set(e.form,"bool",t)},expression:"form.bool"}})],1),e.form.bool?e._e():a("div",[a("el-form-item",{attrs:{label:"封禁时常",prop:"forever"}},[a("el-input-number",{attrs:{min:1},model:{value:e.form.forever,callback:function(t){e.$set(e.form,"forever",t)},expression:"form.forever"}}),e._v("小时\n                ")],1)],1),a("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},h=[],g={name:"Form",data:function(){return{form:{uid:"",nickname:"",bool:!1,forever:"",reason:""},dialogVisible:!1}},methods:{init:function(e){this.form.uid=e.anchorId,this.form.nickname=e.nickname},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("提交失败!"),!1;alert("提交成功!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},v=g,k=(a("6adf"),Object(m["a"])(v,b,h,!1,null,null,null)),y=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"充值",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"充值钻石数量",prop:"amount"}},[a("el-input-number",{model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}}),a("div",{staticClass:"imgSpan2"},[e._v("正数为增加，负数为扣除")])],1),a("el-form-item",{attrs:{label:"是否通知",prop:"sendNotify"}},[a("el-switch",{model:{value:e.form.sendNotify,callback:function(t){e.$set(e.form,"sendNotify",t)},expression:"form.sendNotify"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},S=[],x={components:{},data:function(){return{form:{id:"",nickname:"",amount:100,sendNotify:!1,desc:"线下充值"},dialogVisible:!1,rules:{amount:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){a&&e.$service.user.adjustBalance(e.form,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},resetForm:function(){this.$refs.ruleForm.resetFields()}}},I=x,$=(a("f701"),Object(m["a"])(I,w,S,!1,null,null,null)),_=$.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"更新用户信息",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"form",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"vip到期时间",prop:"vipEndAt"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"vip到期时间",align:"right"},model:{value:e.form.vipEndAt,callback:function(t){e.$set(e.form,"vipEndAt",t)},expression:"form.vipEndAt"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},F=[],O=a("da46"),A={components:{banLevel:O["d"]},data:function(){return{form:{uid:"",nickname:"",vipEndAt:""},banLevel:O["d"],dialogVisible:!1,rules:{vipEndAt:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(e){var t=this,a=this;this.$refs[e].validate((function(e){e&&t.$service.user.updateUser(t.form,(function(e){e?(a.$message.success("保存成功!"),a.closeDialog()):a.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.$emit("fetchData")},resetForm:function(e){this.$refs[e].resetFields()}}},C=A,E=(a("d186"),Object(m["a"])(C,D,F,!1,null,null,null)),N=E.exports,V=a("c466"),j={components:{Pagination:i["a"],imageShow:n["a"],block:p,multiAccount:y,recharge:_,updateUser:N},data:function(){return{listLoading:!0,search:{userId:void 0,nickname:void 0,createdStart:void 0,createdEnd:void 0,vipOnly:void 0,depositOnly:void 0,minBalance:void 0,areaId:void 0,page:{currentPage:1,pageSize:10}},total:0,isCollapse:!0,areaData:Object(c["e"])(),boolDict:Object(c["j"])(),appList:Object(c["c"])()}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.user.getUserList(this.handleParam(),(function(t){var a=t.getUsersList(),r=[];a.forEach((function(t,a){var l={id:t.getId(),appId:t.getAppId(),app:Object(c["d"])(e.appList,t.getAppId()),areaId:t.getAreaId(),areaStr:Object(c["g"])(e.areaData,t.getAreaId()),osType:t.getOsType(),osTypeStr:Object(c["u"])(t.getOsType()),country:t.getCountry(),lang:t.getLang(),onlineStatus:t.getOnlineStatus(),onlineStatusStr:Object(c["t"])(t.getOnlineStatus()),blockStatus:t.getBlockStatus(),blockStatusStr:Object(c["h"])(t.getBlockStatus()),balance:t.getBalance(),lockedBalance:t.getLockedBalance(),expense:t.getExpense(),reward:t.getReward(),deposit:t.getDeposit(),vipStartAt:t.getVipStartAt(),vipEndAt:Object(V["b"])(t.getVipEndAt()),messageQuota:t.getMessageQuota(),messageUsed:t.getMessageUsed(),checkinDays:t.getCheckinDays(),checkinAt:t.getCheckinAt(),fansCount:t.getFansCount(),nickname:t.getNickname(),gender:t.getGender(),genderStr:Object(c["o"])(t.getGender()),birthday:Object(V["b"])(t.getBirthday()),avatar:t.getAvatar(),signature:t.getSignature(),occupation:t.getOccupation(),offlineAt:Object(V["b"])(t.getOfflineAt()),createdAt:Object(V["b"])(t.getCreatedAt()),appVersion:t.getVersion(),onlineIp:t.getOnlineIp()};r.push(l)})),e.total=t.getTotalCount(),e.tableData=r,e.listLoading=!1}))},handleParam:function(){var e=this.search;return"undefined"!=typeof this.search.createdStart&&(e.createdStartUint=this.search.createdStart.getTime()/1e3),"undefined"!=typeof this.search.createdEnd&&(e.createdEndUint=this.search.createdEnd.getTime()/1e3),e},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},unblock:function(e){var t={entityId:e,entityType:1},a=this;this.$service.anchor.unblock(t,(function(e){e?(a.$message.success("解封成功!"),a.fetchData()):a.$message.error("解封失败!")}))},resetForm:function(){this.$refs.searchForm.resetFields()}}},L=j,T=(a("e85a"),Object(m["a"])(L,r,l,!1,null,null,null));t["default"]=T.exports},d186:function(e,t,a){"use strict";a("494c")},d88a:function(e,t,a){},da46:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return s}));var r=[{value:!0,label:"是"},{value:!1,label:"否"}],l=[{value:1,label:"kafo"},{value:2,label:"toya"}],i=[{value:1,label:"中东"},{value:2,label:"印尼"}],n=[{value:1,label:"差劲"},{value:2,label:"中等"},{value:2,label:"良好"},{value:2,label:"优秀"}],o=[{value:"0.5",label:"30分钟"},{value:1,label:"1小时"},{value:3,label:"3小时"},{value:"24",label:"1天"},{value:"72",label:"3天"},{value:"168",label:"7天"}],s=[{value:1,label:"奖励"},{value:2,label:"抽奖"}]},e85a:function(e,t,a){"use strict";a("d88a")},f701:function(e,t,a){"use strict";a("6a0e")}}]);