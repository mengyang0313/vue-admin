(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06bb551b"],{"18a5":function(e,t,l){"use strict";var a=l("23e7"),r=l("857a"),i=l("af03");a({target:"String",proto:!0,forced:i("anchor")},{anchor:function(e){return r(this,"a","name",e)}})},2032:function(e,t,l){},"3db3":function(e,t,l){},"494c":function(e,t,l){},"6a0e":function(e,t,l){},"6adf":function(e,t,l){"use strict";l("2032")},a9e3:function(e,t,l){"use strict";var a=l("83ab"),r=l("da84"),i=l("94ca"),n=l("6eeb"),o=l("5135"),s=l("c6b6"),c=l("7156"),u=l("c04e"),m=l("d039"),d=l("7c73"),f=l("241c").f,p=l("06cf").f,b=l("9bf2").f,v=l("58a8").trim,h="Number",g=r[h],y=g.prototype,k=s(d(y))==h,w=function(e){var t,l,a,r,i,n,o,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=v(c),t=c.charCodeAt(0),43===t||45===t){if(l=c.charCodeAt(2),88===l||120===l)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(i=c.slice(2),n=i.length,o=0;o<n;o++)if(s=i.charCodeAt(o),s<48||s>r)return NaN;return parseInt(i,a)}return+c};if(i(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,$=function(e){var t=arguments.length<1?0:e,l=this;return l instanceof $&&(k?m((function(){y.valueOf.call(l)})):s(l)!=h)?c(new g(w(t)),l,$):w(t)},_=a?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;_.length>I;I++)o(g,x=_[I])&&!o($,x)&&b($,x,p(g,x));$.prototype=y,y.constructor=$,n(r,h,$)}},c9658:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-classic-wrapper"},[l("el-card",{attrs:{shadow:"always"}},[l("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.listQuery,"label-width":"90px"}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"用户Id"}},[l("el-input",{attrs:{placeholder:"用户Id"},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"用户名"}},[l("el-input",{attrs:{placeholder:"用户名"},model:{value:e.listQuery.nickname,callback:function(t){e.$set(e.listQuery,"nickname",t)},expression:"listQuery.nickname"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"注册时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始时间"},model:{value:e.listQuery.createdStart,callback:function(t){e.$set(e.listQuery,"createdStart",t)},expression:"listQuery.createdStart"}})],1),l("el-col",{staticClass:"line",attrs:{span:1,align:"center"}},[e._v("-")]),l("el-col",{attrs:{span:10}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"结束时间"},model:{value:e.listQuery.createdEnd,callback:function(t){e.$set(e.listQuery,"createdEnd",t)},expression:"listQuery.createdEnd"}})],1)],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"VIP"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.listQuery.vipOnly,callback:function(t){e.$set(e.listQuery,"vipOnly",t)},expression:"listQuery.vipOnly"}},e._l(e.boolDict,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"是否付费"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.listQuery.depositOnly,callback:function(t){e.$set(e.listQuery,"depositOnly",t)},expression:"listQuery.depositOnly"}},e._l(e.boolDict,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"钻石余额"}},[l("el-input",{attrs:{placeholder:"请输入余额"},model:{value:e.listQuery.minBalance,callback:function(t){e.$set(e.listQuery,"minBalance",t)},expression:"listQuery.minBalance"}},[l("template",{slot:"prepend"},[e._v("大于")])],2)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"地区"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.listQuery.areaId,callback:function(t){e.$set(e.listQuery,"areaId",t)},expression:"listQuery.areaId"}},e._l(e.areaData,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),l("el-row",[l("el-col",{staticClass:"search-box",attrs:{span:24}},[l("el-form-item",[l("el-button",{staticStyle:{width:"150px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.onSearch("searchForm")}}},[e._v("查    询")]),l("el-button",{staticStyle:{width:"150px","margin-left":"250px"},attrs:{size:"small"},on:{click:function(t){return e.resetForm("searchForm")}}},[e._v("重    置")])],1)],1)],1)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[l("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"areaId",label:"地区",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"appId",label:"APP",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"nickname",label:"用户名",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.avatar,contain:""}})]}}])}),l("el-table-column",{attrs:{prop:"dlfs",label:"登录方式",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"onlineStatus",label:"在线状态",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.onlineStatus))])],1)]}}])}),l("el-table-column",{attrs:{prop:"blockStatus",label:"账户状态",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"},on:{click:function(l){return e.toDialog("accountStatusList",t.row)}}},[e._v(e._s(t.row.accountStatus))])],1)]}}])}),l("el-table-column",{attrs:{prop:"vipEndAt",label:"vip到期时间",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"vipCount",label:"vip购买次数",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"expense",label:"累计送礼",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"deposit",label:"累计充值",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"balance",label:"账户余额",align:"center",width:"250"}}),e._v('\n            el-table-column prop="schyrq" label="上次活跃日期" align="center" width="150"/>\n            '),l("el-table-column",{attrs:{prop:"scczrq",label:"上次充值日期",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"createdAt",label:"注册日期",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"osType",label:"手机机型",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"version",label:"系统版本",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"appVersion",label:"app版本",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"onlineIp",label:"ip地址",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("a",{staticStyle:{color:"#1E88C7"},on:{click:function(l){return e.toDialog("ipAddress",t.row)}}},[e._v("查看")])]}}])}),l("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.toDialog("ban",t.row)}}},[e._v("封禁")]),l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.toDialog("recharge",t.row)}}},[e._v("充值")]),l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.toDialog("updateUser",t.row)}}},[e._v("更新")]),l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.toDialog("multiAccount",t.row)}}},[e._v("多帐号查询")])]}}])})],1),l("Pagination",{attrs:{total:e.total,page:e.listQuery.currentPage,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"currentPage",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.fetchData}}),l("ban",{ref:"ban"}),l("multiAccount",{ref:"multiAccount"}),l("recharge",{ref:"recharge",on:{fetchData:e.fetchData}}),l("updateUser",{ref:"updateUser",on:{fetchData:e.fetchData}})],1)],1)},r=[],i=(l("4160"),l("159b"),l("333d")),n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"封禁设备",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"form-list-wrapper"},[l("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"主播Id：",prop:"uid"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),l("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),l("el-form-item",{attrs:{label:"封禁时常",prop:"banLevel"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.banLevel,callback:function(t){e.$set(e.form,"banLevel",t)},expression:"form.banLevel"}},e._l(e.banLevel,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),l("el-form-item",{staticClass:"submit-box"},[l("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),l("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},o=[],s=l("da46"),c={components:{banLevel:s["e"]},data:function(){return{form:{uid:"",nickname:"",bool:!1,forever:"",reason:""},banLevel:s["e"],dialogVisible:!1}},methods:{init:function(e){this.form.uid=e.anchorId,this.form.nickname=e.nickname},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("提交失败!"),!1;alert("提交成功!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},u=c,m=(l("f890"),l("2877")),d=Object(m["a"])(u,n,o,!1,null,null,null),f=d.exports,p=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"多帐号查询",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"form-list-wrapper"},[l("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.uid,callback:function(t){e.$set(e.form,"uid",t)},expression:"form.uid"}})],1),l("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),l("el-form-item",{attrs:{label:"永久封禁：",prop:"bool"}},[l("el-switch",{model:{value:e.form.bool,callback:function(t){e.$set(e.form,"bool",t)},expression:"form.bool"}})],1),e.form.bool?e._e():l("div",[l("el-form-item",{attrs:{label:"封禁时常",prop:"forever"}},[l("el-input-number",{attrs:{min:1},model:{value:e.form.forever,callback:function(t){e.$set(e.form,"forever",t)},expression:"form.forever"}}),e._v("小时\n                ")],1)],1),l("el-form-item",{attrs:{label:"封禁理由",prop:"reason"}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),l("el-form-item",{staticClass:"submit-box"},[l("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),l("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},b=[],v={name:"Form",data:function(){return{form:{uid:"",nickname:"",bool:!1,forever:"",reason:""},dialogVisible:!1}},methods:{init:function(e){this.form.uid=e.anchorId,this.form.nickname=e.nickname},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("提交失败!"),!1;alert("提交成功!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},h=v,g=(l("6adf"),Object(m["a"])(h,p,b,!1,null,null,null)),y=g.exports,k=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"充值",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"form-list-wrapper"},[l("el-form",{ref:"form",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),l("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),l("el-form-item",{attrs:{label:"充值钻石数量",prop:"amount"}},[l("el-input-number",{model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}}),l("div",{staticClass:"imgSpan2"},[e._v("正数为增加，负数为扣除")])],1),l("el-form-item",{attrs:{label:"是否发生系统通知",prop:"sendNotify"}},[l("el-switch",{model:{value:e.form.sendNotify,callback:function(t){e.$set(e.form,"sendNotify",t)},expression:"form.sendNotify"}})],1),l("el-form-item",{attrs:{label:"备注",prop:"desc"}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),l("el-form-item",{staticClass:"submit-box"},[l("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),l("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},w=[],x=(l("18a5"),{components:{banLevel:s["e"]},data:function(){return{form:{id:"",nickname:"",amount:100,sendNotify:!1,desc:"线下充值"},banLevel:s["e"],dialogVisible:!1,rules:{amount:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(e){var t=this,l=this;this.$refs[e].validate((function(e){e&&t.$service.anchor.adjustBalance(t.form,(function(e){e?(l.$message.success("保存成功!"),l.closeDialog()):l.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.$emit("fetchData")},resetForm:function(e){this.$refs[e].resetFields()}}}),$=x,_=(l("f701"),Object(m["a"])($,k,w,!1,null,null,null)),I=_.exports,S=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"更新用户信息",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"form-list-wrapper"},[l("el-form",{ref:"form",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"用户Id：",prop:"uid"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),l("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),l("el-form-item",{attrs:{label:"vip到期时间",prop:"vipEndAt"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始时间"},model:{value:e.form.vipEndAt,callback:function(t){e.$set(e.form,"vipEndAt",t)},expression:"form.vipEndAt"}})],1),l("el-form-item",{staticClass:"submit-box"},[l("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提   交")]),l("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},Q=[],D={components:{banLevel:s["e"]},data:function(){return{form:{uid:"",nickname:"",vipEndAt:""},banLevel:s["e"],dialogVisible:!1,rules:{vipEndAt:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){this.form.id=e.id,this.form.nickname=e.nickname},submitForm:function(e){var t=this,l=this;this.$refs[e].validate((function(e){e&&t.$service.anchor.updateUser(t.form,(function(e){e?(l.$message.success("保存成功!"),l.closeDialog()):l.$message.error("保存失败!")}))}))},closeDialog:function(){this.dialogVisible=!1,this.$emit("fetchData")},resetForm:function(e){this.$refs[e].resetFields()}}},F=D,A=(l("d186"),Object(m["a"])(F,S,Q,!1,null,null,null)),E=A.exports,C={components:{Pagination:i["a"],ban:f,multiAccount:y,recharge:I,updateUser:E},data:function(){return{listLoading:!0,listQuery:this.initQuery(),total:0,tableData:[],multipleSelection:[],isSubmit:!1,areaData:s["d"],boolDict:s["f"]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.user.getUserList(this.listQuery,(function(t){var l=t.getUsersList(),a=l.length,r=[];l.forEach((function(e,t){var l={id:e.getId(),areaId:e.getAreaId(),appId:e.getAppId(),nickname:e.getNickname(),avatar:e.getAvatar(),dlfs:"登陆方式",blockStatus:e.getBlockStatus(),onlineStatus:e.getOnlineStatus(),vipEndAt:new Date(1e3*e.getVipEndAt()).format("yyyy-MM-dd"),vipCount:3,expense:e.getExpense(),deposit:e.getDeposit(),balance:e.getBalance(),schyrq:"上次活跃日期",scczrq:"上次充值日期",createdAt:new Date(1e3*e.getCreatedAt()).format("yyyy-MM-dd hh:mm:ss"),osType:e.getOsType(),version:"系统版本",appVersion:e.getVersion(),onlineIp:e.getOnlineIp()};r.push(l)})),e.total=a,e.tableData=r,e.listLoading=!1}))},onSearch:function(){this.listQuery.currentPage=1,this.fetchData()},toDialog:function(e,t){var l=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){l.$refs[e].init(t)}))},resetForm:function(){this.listQuery=this.initQuery()},initQuery:function(){return{id:void 0,nickname:void 0,createdStart:void 0,createdEnd:void 0,vipOnly:void 0,depositOnly:void 0,minBalance:void 0,areaId:void 0,page:{currentPage:1,pageSize:10}}}}},N=C,V=(l("e85a"),Object(m["a"])(N,a,r,!1,null,null,null));t["default"]=V.exports},d186:function(e,t,l){"use strict";l("494c")},d88a:function(e,t,l){},da46:function(e,t,l){"use strict";l.d(t,"f",(function(){return a})),l.d(t,"c",(function(){return r})),l.d(t,"d",(function(){return i})),l.d(t,"n",(function(){return n})),l.d(t,"m",(function(){return o})),l.d(t,"b",(function(){return s})),l.d(t,"a",(function(){return c})),l.d(t,"k",(function(){return u})),l.d(t,"e",(function(){return m})),l.d(t,"i",(function(){return d})),l.d(t,"j",(function(){return f})),l.d(t,"h",(function(){return p})),l.d(t,"g",(function(){return b})),l.d(t,"o",(function(){return v})),l.d(t,"p",(function(){return h})),l.d(t,"l",(function(){return g}));var a=[{value:!0,label:"是"},{value:!1,label:"否"}],r=[{value:"1",label:"kafo"},{value:"2",label:"toya"}],i=[{value:"1",label:"中东"},{value:"2",label:"印尼"}],n=[{value:"1",label:"用户"},{value:"2",label:"主播"}],o=[{value:"1",label:"聊天"},{value:"2",label:"视频通话"}],s=[{value:"1",label:"一般"},{value:"2",label:"优秀"}],c=[{value:"1",label:"正常"},{value:"2",label:"异常"}],u=[{value:"1",label:"离线"},{value:"2",label:"在线"}],m=[{value:"0.5",label:"30分钟"},{value:"1",label:"1小时"},{value:"3",label:"3小时"},{value:"24",label:"1天"},{value:"72",label:"3天"},{value:"168",label:"7天"}],d=[{value:"1",label:"奖励"},{value:"2",label:"抽奖"}],f=[{value:"1",label:"文字"},{value:"2",label:"图片"}],p=[{value:"1",label:"AIB"},{value:"2",label:"用户主动"},{value:"3",label:"主播主动"}],b=[{value:"1",label:"进行中"},{value:"2",label:"挂断"}],v=[{value:"1",label:"正常挂断"},{value:"2",label:"异常"}],h=[{value:"1",label:"通话消耗"},{value:"2",label:"礼物消耗"}],g=[{value:"1",label:"已支付"},{value:"2",label:"待支付"}]},e85a:function(e,t,l){"use strict";l("d88a")},f701:function(e,t,l){"use strict";l("6a0e")},f890:function(e,t,l){"use strict";l("3db3")}}]);