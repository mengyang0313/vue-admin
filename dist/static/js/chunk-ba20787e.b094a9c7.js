(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba20787e"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"657c":function(e,t,a){"use strict";a("f90b")},"6cf0":function(e,t,a){"use strict";a("b75c")},"76e0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"关键词"}},[a("el-input",{attrs:{placeholder:"关键词"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),a("el-form-item",{attrs:{label:"消息类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}},e._l(e.messageTypeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"区域"}},[a("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},on:{change:e.changeArea},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(t){e.isCollapse=!e.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[e._v("\n                        "+e._s(e.isCollapse?"展开":"收起")+"\n                    ")]),a("div",[a("el-form-item",{attrs:{label:"用户Id"}},[a("el-input",{attrs:{placeholder:"用户Id"},model:{value:e.search.userId,callback:function(t){e.$set(e.search,"userId",t)},expression:"search.userId"}})],1),a("el-form-item",{attrs:{label:"主播Id"}},[a("el-input",{attrs:{placeholder:"主播Id"},model:{value:e.search.anchorId,callback:function(t){e.$set(e.search,"anchorId",t)},expression:"search.anchorId"}})],1),a("el-form-item",{attrs:{label:"APP"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.appId,callback:function(t){e.$set(e.search,"appId",t)},expression:"search.appId"}},e._l(e.appList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),1===t.os?a("span",[a("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===t.os?a("span",[a("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):e._e()])})),1)],1),a("el-form-item",{attrs:{label:"发送时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始时间"},model:{value:e.search.createdStart,callback:function(t){e.$set(e.search,"createdStart",t)},expression:"search.createdStart"}})],1),a("el-col",{staticClass:"line",attrs:{span:1,align:"center"}},[e._v("-")]),a("el-col",{attrs:{span:10}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"结束时间"},model:{value:e.search.createdEnd,callback:function(t){e.$set(e.search,"createdEnd",t)},expression:"search.createdEnd"}})],1)],1)],1)],2)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"app",label:"来源App",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):2===t.row.app.os?a("span",[a("i",{staticClass:"icon-pingguo"})]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"userId",label:"用户id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"directionStr",label:"消息方向",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"typeStr",label:"消息类型",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.typeStr))])],1)]}}])}),a("el-table-column",{attrs:{prop:"text",label:"私信内容",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?a("div",[e._v("\n                        "+e._s(t.row.text)+"\n                    ")]):4===t.row.type?a("div",[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:e.contain,src:t.row.uri,"preview-src-list":[t.row.uri]}})],1):5===t.row.type?a("div",[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.thumb,contain:""},on:{click:function(a){return e.play(t.row)}}})],1):a("div",[e._v("\n                        "+e._s(t.row.text)+"\n                    ")])]}}])}),a("el-table-column",{attrs:{prop:"sendAt",label:"发送时间",align:"center",width:"220"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("showDialog",t.row)}}},[e._v("查看对话")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("showDialog",{ref:"showDialog"})],1)],1)},i=[],n=(a("ac1f"),a("841c"),a("159b"),a("ed2c"),a("333d")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"对话",visible:e.dialogVisible,"append-to-body":"",width:"80%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"app",label:"来源App",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                            "+e._s(t.row.app.label)+"\n                            "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):2===t.row.app.os?a("span",[a("i",{staticClass:"icon-pingguo"})]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"userId",label:"用户id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"directionStr",label:"消息方向",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"消息类型",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.type))])],1)]}}])}),a("el-table-column",{attrs:{prop:"text",label:"私信内容",align:"center"}}),a("el-table-column",{attrs:{prop:"sendAt",label:"发送时间",align:"center",width:"220"}})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData}})],1)],1)])},l=[],c=a("7139"),o=a("c466"),d={name:"Table",components:{Pagination:n["a"]},data:function(){return{listLoading:!0,search:{areaId:void 0,userId:void 0,anchorId:void 0,appId:void 0,direction:0,type:void 0,keyword:void 0,createdStart:void 0,createdEnd:void 0,page:{currentPage:1,pageSize:10}},tableData:{},total:0,dialogVisible:!1,areaData:Object(c["e"])(),appList:Object(c["c"])(),messageTypeList:Object(c["s"])()}},methods:{init:function(e){this.search.userId=e.userId,this.search.anchorId=e.anchorId,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.$service.chat.getChatMessageList(this.handleParam(),(function(t){var a=t.getMessagesList(),r=[];a.forEach((function(t,a){var i={id:t.getId(),appId:t.getAppId(),app:Object(c["d"])(e.appList,t.getAppId()),userId:t.getUserId(),direction:t.getDirection(),directionStr:1===t.getDirection()?"<--":"--\x3e",anchorId:t.getAnchorId(),type:Object(c["s"])(t.getType()),text:t.getText(),uri:t.getUri(),sendAt:Object(o["c"])(t.getSendAt())};r.push(i)})),e.total=t.getTotalCount(),e.tableData=r,e.listLoading=!1}))},handleParam:function(){var e=this.search;return"undefined"!=typeof this.search.createdStart&&(e.createdStartUint=this.search.createdStart.getTime()/1e3),"undefined"!=typeof this.search.createdEnd&&(e.createdEndUint=this.search.createdEnd.getTime()/1e3),e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},p=d,u=(a("6cf0"),a("2877")),h=Object(u["a"])(p,s,l,!1,null,null,null),f=h.exports,g={components:{Pagination:n["a"],showDialog:f},data:function(){return{listLoading:!0,search:{areaId:Object(c["n"])(),userId:void 0,anchorId:void 0,appId:void 0,direction:0,type:void 0,keyword:void 0,createdStart:void 0,createdEnd:void 0,page:{currentPage:1,pageSize:10}},total:0,authAreaId:Object(c["n"])(),isCollapse:!0,areaData:Object(c["e"])(),appList:[],messageTypeList:Object(c["s"])()}},created:function(){this.changeArea(this.search.areaId),this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.chat.getChatMessageList(this.handleParam(),(function(t){var a=t.getMessagesList(),r=[];a.forEach((function(t,a){var i={id:t.getId(),appId:t.getAppId(),app:Object(c["d"])(Object(c["f"])(e.search.areaId,!1),t.getAppId()),userId:t.getUserId(),direction:t.getDirection(),directionStr:1===t.getDirection()?"<--":"--\x3e",anchorId:t.getAnchorId(),type:t.getType(),typeStr:Object(c["s"])(t.getType()),text:t.getText(),uri:t.getUri(),sendAt:Object(o["c"])(t.getSendAt())};r.push(i)})),e.total=t.getTotalCount(),e.tableData=r,e.listLoading=!1}))},handleParam:function(){var e=this.search;return"undefined"!=typeof this.search.createdStart&&(e.createdStartUint=this.search.createdStart.getTime()/1e3),"undefined"!=typeof this.search.createdEnd&&(e.createdEndUint=this.search.createdEnd.getTime()/1e3),e},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},changePageSize:function(e){this.search.page.pageSize=e.limit},resetForm:function(){this.$refs.searchForm.resetFields()},play:function(e){var t=this;this.playVisible=!0;var a=e.uri;this.$nextTick((function(){t.$refs.myVideoPlayer.initSrc(a)}))},changeArea:function(e){this.appList=Object(c["f"])(e,!0)}}},b=g,m=(a("657c"),Object(u["a"])(b,r,i,!1,null,null,null));t["default"]=m.exports},"841c":function(e,t,a){"use strict";var r=a("d784"),i=a("825a"),n=a("1d80"),s=a("129f"),l=a("577e"),c=a("14c3");r("search",(function(e,t,a){return[function(t){var a=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](l(a))},function(e){var r=i(this),n=l(e),o=a(t,r,n);if(o.done)return o.value;var d=r.lastIndex;s(d,0)||(r.lastIndex=0);var p=c(r,n);return s(r.lastIndex,d)||(r.lastIndex=d),null===p?-1:p.index}]}))},a9e3:function(e,t,a){"use strict";var r=a("83ab"),i=a("da84"),n=a("94ca"),s=a("6eeb"),l=a("5135"),c=a("c6b6"),o=a("7156"),d=a("d9b5"),p=a("c04e"),u=a("d039"),h=a("7c73"),f=a("241c").f,g=a("06cf").f,b=a("9bf2").f,m=a("58a8").trim,v="Number",y=i[v],I=y.prototype,w=c(h(I))==v,S=function(e){if(d(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,r,i,n,s,l,c,o=p(e,"number");if("string"==typeof o&&o.length>2)if(o=m(o),t=o.charCodeAt(0),43===t||45===t){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+o}for(n=o.slice(2),s=n.length,l=0;l<s;l++)if(c=n.charCodeAt(l),c<48||c>i)return NaN;return parseInt(n,r)}return+o};if(n(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var _,x=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof x&&(w?u((function(){I.valueOf.call(a)})):c(a)!=v)?o(new y(S(t)),a,x):S(t)},k=r?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;k.length>A;A++)l(y,_=k[A])&&!l(x,_)&&b(x,_,g(y,_));x.prototype=I,I.constructor=x,s(i,v,x)}},b75c:function(e,t,a){},c466:function(e,t,a){"use strict";function r(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd")}function i(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd hh:mm:ss")}function n(e){return"undefined"==typeof e&&(e=new Date),e.format("yyyy-MM-dd")}a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},ed2c:function(e,t,a){},f90b:function(e,t,a){}}]);