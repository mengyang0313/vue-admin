(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3ef9388"],{"0b45":function(e,t,a){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"206f":function(e,t,a){"use strict";a("f678")},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],i=(a("a9e3"),{name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[5,10,15,20,50]}},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("changePageSize",{page:this.currentPage,limit:e}),this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),l=i,o=(a("206f"),a("2877")),s=Object(o["a"])(l,r,n,!1,null,null,null);t["a"]=s.exports},"3c46":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[[a("el-form-item",{attrs:{label:"举报方Id",prop:"reporterId"}},[a("el-input",{attrs:{placeholder:"举报方Id"},model:{value:e.search.reporterId,callback:function(t){e.$set(e.search,"reporterId",t)},expression:"search.reporterId"}})],1),a("el-form-item",{attrs:{label:"被举报方Id",prop:"reportedId"}},[a("el-input",{attrs:{placeholder:"被举报方Id"},model:{value:e.search.reportedId,callback:function(t){e.$set(e.search,"reportedId",t)},expression:"search.reportedId"}})],1),a("el-form-item",{attrs:{label:"举报方类型",prop:"reportedType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.reportedType,callback:function(t){e.$set(e.search,"reportedType",t)},expression:"search.reportedType"}},e._l(e.reportedTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(t){e.isCollapse=!e.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[e._v("\n                                "+e._s(e.isCollapse?"展开":"收起")+"\n                            ")]),a("div",[a("el-form-item",{attrs:{label:"举报场景",prop:"scenes"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.scene,callback:function(t){e.$set(e.search,"scene",t)},expression:"search.scene"}},e._l(e.violationScenes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"举报时间",prop:"reportedTime"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.reportedTime,callback:function(t){e.$set(e.search,"reportedTime",t)},expression:"search.reportedTime"}},e._l(e.reportedTimes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],2)],1)]],2),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),a("el-table-column",{attrs:{prop:"id",label:"举报Id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"reporterId",label:"举报方",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"reportedId",label:"被举报方",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"violationType",label:"举报类型",align:"center",width:"200"}}),a("el-table-column",{attrs:{prop:"violationScene",label:"举报场景",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"reportMessage",label:"举报信息",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"createdAt",label:"举报时间",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"dealStatus",label:"处理状态",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"dealMessage",label:"处理信息",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"dealAt",label:"处理时间",align:"center",width:"150"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",plain:"",size:"mini",disabled:t.row.forbid},on:{click:function(a){return e.processViolation(t.row)}}},[e._v("处理")]),a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){return e.processViolation(t.row)}}},[e._v("忽略")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}})],1)],1)},n=[],i=(a("ac1f"),a("841c"),a("159b"),a("333d")),l=a("7139"),o=a("c466"),s={name:"Table",components:{Pagination:i["a"]},data:function(){return{listLoading:!0,search:{areaId:1,scene:0,reportedType:1,reportUid:void 0,reportedTime:1,createdStart:void 0,createdEnd:void 0,page:{currentPage:1,pageSize:10}},total:0,isCollapse:!0,areaData:Object(l["f"])(!0),reportedTypes:Object(l["C"])(),reportedTimes:Object(l["B"])(),violationScenes:Object(l["I"])()}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.handleReportedTime(),this.$service.audit.getViolationList(this.search,(function(t){var a=t.getRecordsList(),r=[];a.forEach((function(e,t){var a={id:e.getId(),reporterId:e.getReporterId(),reportedId:e.getReportedId(),violationType:e.getViolationType(),violationScene:e.getViolationScene(),reportMessage:e.getReportMessage(),createdAt:Object(o["c"])(e.getCreatedAt()),dealStatus:e.getDealStatus(),dealMessage:e.getDealMessage(),dealAt:e.getDealAt()};r.push(a)})),e.total=t.getTotalCount(),e.tableData=r,e.listLoading=!1}))},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},handleSelectionChange:function(e){this.multipleSelection=e},changePageSize:function(e){this.search.page.pageSize=e.limit},handlePassed:function(e,t){var a=this,r=this;this.$prompt("","通过原因",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var n=e.value,i={profileId:t.id,status:5,reason:n};a.$service.audit.processViolation(i,(function(e){e?r.$message.success("审核通过 !"):r.$message.error("审核失败 !"),this.fetchData()}))}))},handleRefuse:function(e,t){var a=this,r=this;this.$prompt("","通过原因",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var n=e.value,i={violationId:t.id,dealStatus:4,dealMessage:n};a.$service.audit.processViolation(i,(function(e){e?r.$message.success("已拒绝 !"):r.$message.error("拒绝失败 !"),this.fetchData()}))}))},resetForm:function(){this.$refs["searchForm"].resetFields()},handleReportedTime:function(){var e=this.search.reportedTime,t=void 0,a=void 0,r=86400,n=new Date((new Date).toLocaleDateString()).getTime()/1e3;"1"===e?(t=n,a=n+r-1):"2"===e?(t=n-3*r,a=n+r-1):"3"===e&&(t=n-7*r,a=n+r-1),this.search.createdStart=t,this.search.createdEnd=a}}},c=s,u=(a("bf0e"),a("2877")),p=Object(u["a"])(c,r,n,!1,null,null,null);t["default"]=p.exports},"841c":function(e,t,a){"use strict";var r=a("d784"),n=a("825a"),i=a("1d80"),l=a("129f"),o=a("577e"),s=a("14c3");r("search",(function(e,t,a){return[function(t){var a=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](o(a))},function(e){var r=n(this),i=o(e),c=a(t,r,i);if(c.done)return c.value;var u=r.lastIndex;l(u,0)||(r.lastIndex=0);var p=s(r,i);return l(r.lastIndex,u)||(r.lastIndex=u),null===p?-1:p.index}]}))},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),l=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("d9b5"),p=a("c04e"),d=a("d039"),h=a("7c73"),f=a("241c").f,g=a("06cf").f,m=a("9bf2").f,b=a("58a8").trim,v="Number",y=n[v],I=y.prototype,S=s(h(I))==v,w=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,r,n,i,l,o,s,c=p(e,"number");if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(i=c.slice(2),l=i.length,o=0;o<l;o++)if(s=i.charCodeAt(o),s<48||s>n)return NaN;return parseInt(i,r)}return+c};if(i(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var T,z=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof z&&(S?d((function(){I.valueOf.call(a)})):s(a)!=v)?c(new y(w(t)),a,z):w(t)},x=r?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;x.length>$;$++)o(y,T=x[$])&&!o(z,T)&&m(z,T,g(y,T));z.prototype=I,I.constructor=z,l(n,v,z)}},bf0e:function(e,t,a){"use strict";a("0b45")},c466:function(e,t,a){"use strict";function r(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd")}function n(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd hh:mm:ss")}function i(e){return"undefined"==typeof e&&(e=new Date),e.format("yyyy-MM-dd")}a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}))},f678:function(e,t,a){}}]);