(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5971f437"],{"64b6":function(e,t,a){"use strict";a("77d3")},"77d3":function(e,t,a){},"7ac6":function(e,t,a){"use strict";a("c567")},8719:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-wrapper"},[a("el-row",{staticClass:"date-box",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"区域"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.area,callback:function(t){e.$set(e.search,"area",t)},expression:"search.area"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"产品"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.area,callback:function(t){e.$set(e.search,"area",t)},expression:"search.area"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"时间"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.area,callback:function(t){e.$set(e.search,"area",t)},expression:"search.area"}},e._l(e.areaData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:e.onSubmit}},[e._v("刷 新")])],1)],1)],1)],1)],1),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[e._v("整体收入")]),a("el-menu-item",{attrs:{index:"2"}},[e._v("新增收入")]),a("el-menu-item",{attrs:{index:"3"}},[e._v("整体付费率")]),a("el-menu-item",{attrs:{index:"4"}},[e._v("新增付费率")]),a("el-menu-item",{attrs:{index:"5"}},[e._v("新增用户数")]),a("el-menu-item",{attrs:{index:"6"}},[e._v("在线主播数")]),a("el-menu-item",{attrs:{index:"7"}},[e._v("活跃的付费用户数")]),a("el-menu-item",{attrs:{index:"8"}},[e._v("电话接通率")]),a("el-menu-item",{attrs:{index:"9"}},[e._v("平均通话时长")])],1),a("el-row",{staticClass:"date-box",attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[a("ChartsLine",{ref:"chartsLine",staticClass:"data-chart",attrs:{data:e.overallData}})],1)],1)],1),a("el-card",{staticStyle:{"padding-top":"30px","padding-bottom":"50px"},attrs:{shadow:"always"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"uid",label:"日期",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"nickname",label:"产品",align:"center",width:"200"}}),a("el-table-column",{attrs:{prop:"unionname",label:"区域",align:"center",width:"220"}}),a("el-table-column",{attrs:{prop:"balance",label:"活跃用户",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"settle",label:"整体收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"call",label:"整体付费率",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"gift",label:"vip付费率",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"other",label:"ARPU",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"reward",label:"ARPPU",align:"center"}})],1),a("Pagination",{attrs:{total:e.total,page:e.search.currentPage,limit:e.search.pageSize},on:{"update:page":function(t){return e.$set(e.search,"currentPage",t)},"update:limit":function(t){return e.$set(e.search,"pageSize",t)},pagination:e.fetchData}})],1)],1)},r=[],n=(a("ac1f"),a("841c"),a("ec1b")),i=a.n(n),s=a("d909"),c=a("4ec3"),o=a("333d"),u={name:"Home",components:{CountTo:i.a,ChartsLine:s["a"],Pagination:o["a"]},data:function(){return{listLoading:!0,search:this.initQuery(),total:0,isSubmit:!1,activeIndex:1,currentDate:{},overallData:{title:"整体收入",legend:["整体收入"],keys:["7-10","7-11","7-12","7-13","7-14","7-15","7-16","7-17","7-18","7-19"],values:[[820,932,901,934,1290,1330,1320,1520,820,750]]},incData:{title:"新增收入",legend:["新增收入"],keys:["7-10","7-11","7-12","7-13","7-14","7-15","7-16","7-17","7-18","7-19"],values:[[120,232,101,534,290,130,120,2120,720,550]]},overallPaidData:{title:"整体付费率",legend:["整体付费率"],keys:["7-10","7-11","7-12","7-13","7-14","7-15","7-16","7-17","7-18","7-19"],values:[[8.2,9.3,9.1,9.34,12.9,13.3,13.2,15.2,8.2,7.5]]},incPaidData:{title:"新增付费率",legend:["新增付费率"],keys:["7-10","7-11","7-12","7-13","7-14","7-15","7-16","7-17","7-18","7-19"],values:[[11.2,21.3,3.1,13.34,15.9,19.3,9.2,5.2,8.2,2.5]]}}},mounted:function(){this.init()},methods:{init:function(){this.handleSelect(this.activeIndex,this.activeIndex),this.fetchData()},handleSelect:function(e,t){switch(this.currentDate={},e){case"1":this.currentDate=this.overallData;break;case"2":this.currentDate=this.incData;break;case"3":this.currentDate=this.overallPaidData;break;case"4":this.currentDate=this.incPaidData;break}this.$refs.chartsLine.init(this.currentDate)},fetchData:function(){var e=this;this.listLoading=!0;var t="http://43.132.169.239/dist/data//settle.json";Object(c["a"])(this.search,t).then((function(t){var a=t.data;0===a.code&&(e.total=a.data.total,e.tableData=a.data.list,e.listLoading=!1)})).catch((function(){e.listLoading=!1}))},onSearch:function(){this.search.currentPage=1,this.fetchData()},initQuery:function(){return{uid:void 0,app:void 0,currentPage:1,pageSize:10}}}},d=u,h=(a("64b6"),a("7ac6"),a("2877")),p=Object(h["a"])(d,l,r,!1,null,null,null);t["default"]=p.exports},a9e3:function(e,t,a){"use strict";var l=a("83ab"),r=a("da84"),n=a("94ca"),i=a("6eeb"),s=a("5135"),c=a("c6b6"),o=a("7156"),u=a("d9b5"),d=a("c04e"),h=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,b=a("9bf2").f,v=a("58a8").trim,g="Number",w=r[g],x=w.prototype,D=c(p(x))==g,y=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,l,r,n,i,s,c,o=d(e,"number");if("string"==typeof o&&o.length>2)if(o=v(o),t=o.charCodeAt(0),43===t||45===t){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+o}for(n=o.slice(2),i=n.length,s=0;s<i;s++)if(c=n.charCodeAt(s),c<48||c>r)return NaN;return parseInt(n,l)}return+o};if(n(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var I,_=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof _&&(D?h((function(){x.valueOf.call(a)})):c(a)!=g)?o(new w(y(t)),a,_):y(t)},k=l?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;k.length>N;N++)s(w,I=k[N])&&!s(_,I)&&b(_,I,f(w,I));_.prototype=x,x.constructor=_,i(r,g,_)}},c567:function(e,t,a){}}]);