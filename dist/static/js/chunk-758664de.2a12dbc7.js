(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-758664de"],{"7d82":function(e,t,a){},8541:function(e,t,a){},8802:function(e,t,a){"use strict";a("7d82")},a9e3:function(e,t,a){"use strict";var l=a("83ab"),n=a("da84"),r=a("94ca"),i=a("6eeb"),o=a("5135"),u=a("c6b6"),s=a("7156"),c=a("c04e"),f=a("d039"),d=a("7c73"),b=a("241c").f,p=a("06cf").f,m=a("9bf2").f,v=a("58a8").trim,h="Number",g=n[h],y=g.prototype,k=u(d(y))==h,I=function(e){var t,a,l,n,r,i,o,u,s=c(e,!1);if("string"==typeof s&&s.length>2)if(s=v(s),t=s.charCodeAt(0),43===t||45===t){if(a=s.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+s}for(r=s.slice(2),i=r.length,o=0;o<i;o++)if(u=r.charCodeAt(o),u<48||u>n)return NaN;return parseInt(r,l)}return+s};if(r(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,N=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof N&&(k?f((function(){y.valueOf.call(a)})):u(a)!=h)?s(new g(I(t)),a,N):I(t)},_=l?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;_.length>S;S++)o(g,w=_[S])&&!o(N,w)&&m(N,w,p(g,w));N.prototype=y,y.constructor=N,i(n,h,N)}},d8c0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("addSysConfig","")}}},[e._v("+ 新增配置项")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"item",label:"配置项",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"sys",label:"系统",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"channel",label:"渠道",align:"center",width:"450"}}),a("el-table-column",{attrs:{prop:"version",label:"版本",align:"center",width:"350"}}),a("el-table-column",{attrs:{prop:"num",label:"当前值",align:"center",width:"250"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("addSysConfig",t.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.listQuery.currentPage,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"currentPage",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.fetchData}}),a("addSysConfig",{ref:"addSysConfig"})],1)],1)},n=[],r=a("4ec3"),i=a("333d"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新增配置项",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"系统",prop:"sys"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.area,callback:function(t){e.$set(e.form,"area",t)},expression:"form.area"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"版本",prop:"version"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.channel,callback:function(t){e.$set(e.form,"channel",t)},expression:"form.channel"}})],1),a("el-form-item",{attrs:{label:"Key",prop:"key"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),a("el-form-item",{attrs:{label:"Value",prop:"value"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确   定")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重   置")])],1)],1)],1)])},u=[],s={data:function(){return{form:{robotId:"",version:"",channel:"",key:"",value:""},dialogVisible:!1}},methods:{init:function(e){this.form.robotId=e.robotId,this.form.nickname=e.nickname,this.form.photo=e.photo,this.form.country=e.country,this.form.birth=e.birth,this.form.profession=e.profession,this.form.online=e.online,this.form.sign=e.sign,this.form.imgs=e.imgs,this.form.videos=e.videos},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("提交失败!"),!1;alert("提交成功!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},c=s,f=(a("8802"),a("2877")),d=Object(f["a"])(c,o,u,!1,null,null,null),b=d.exports,p=a("da46"),m={components:{Pagination:i["a"],apps:p["c"],addSysConfig:b},data:function(){return{listLoading:!0,listQuery:this.initQuery(),total:0,isSubmit:!1,areaData:p["d"],apps:p["c"]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0;var t="http://localhost:8000/data/sys-config.json";Object(r["a"])(this.listQuery,t).then((function(t){var a=t.data;0===a.code&&(e.total=a.data.total,e.tableData=a.data.list,e.listLoading=!1)})).catch((function(){e.listLoading=!1}))},onSearch:function(){this.listQuery.currentPage=1,this.fetchData()},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},resetForm:function(){this.listQuery=this.initQuery()},initQuery:function(){return{uid:void 0,app:void 0,robotId:void 0,currentPage:1,pageSize:10}}}},v=m,h=(a("e697"),Object(f["a"])(v,l,n,!1,null,null,null));t["default"]=h.exports},da46:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"n",(function(){return i})),a.d(t,"m",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"e",(function(){return f})),a.d(t,"i",(function(){return d})),a.d(t,"j",(function(){return b})),a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"o",(function(){return v})),a.d(t,"p",(function(){return h})),a.d(t,"l",(function(){return g}));var l=[{value:!0,label:"是"},{value:!1,label:"否"}],n=[{value:"1",label:"kafo"},{value:"2",label:"toya"}],r=[{value:"1",label:"中东"},{value:"2",label:"印尼"}],i=[{value:"1",label:"用户"},{value:"2",label:"主播"}],o=[{value:"1",label:"聊天"},{value:"2",label:"视频通话"}],u=[{value:"1",label:"一般"},{value:"2",label:"优秀"}],s=[{value:"1",label:"正常"},{value:"2",label:"异常"}],c=[{value:"1",label:"离线"},{value:"2",label:"在线"}],f=[{value:"0.5",label:"30分钟"},{value:"1",label:"1小时"},{value:"3",label:"3小时"},{value:"24",label:"1天"},{value:"72",label:"3天"},{value:"168",label:"7天"}],d=[{value:"1",label:"奖励"},{value:"2",label:"抽奖"}],b=[{value:"1",label:"文字"},{value:"2",label:"图片"}],p=[{value:"1",label:"AIB"},{value:"2",label:"用户主动"},{value:"3",label:"主播主动"}],m=[{value:"1",label:"进行中"},{value:"2",label:"挂断"}],v=[{value:"1",label:"正常挂断"},{value:"2",label:"异常"}],h=[{value:"1",label:"通话消耗"},{value:"2",label:"礼物消耗"}],g=[{value:"1",label:"已支付"},{value:"2",label:"待支付"}]},e697:function(e,t,a){"use strict";a("8541")}}]);