(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-131d191b"],{1061:function(e,t,a){},2:function(e,t){},"206f":function(e,t,a){"use strict";a("f678")},3:function(e,t){},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},r=[],n=(a("a9e3"),{name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[5,10,15,20,50,1e3]}},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("changePageSize",{page:this.currentPage,limit:e}),this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),s=n,l=(a("206f"),a("2877")),c=Object(l["a"])(s,i,r,!1,null,null,null);t["a"]=c.exports},4:function(e,t){},"404b":function(e,t,a){"use strict";a("de17")},"40c0":function(e,t,a){"use strict";a("9d99")},"8a6c":function(e,t,a){},"9d99":function(e,t,a){},"9f1c":function(e,t,a){"use strict";a("8a6c")},b522:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hints-wrapper"},[a("div",{staticClass:"hint-title"},[a("i",{staticClass:"vue-dsn-icon-tishi"}),a("span",[e._t("hintName")],2)]),a("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},r=[],n={name:"Hints"},s=n,l=(a("404b"),a("2877")),c=Object(l["a"])(s,i,r,!1,null,null,null);t["a"]=c.exports},c466:function(e,t,a){"use strict";function i(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd")}function r(e){return 0===e?"":new Date(1e3*e).format("yyyy-MM-dd hh:mm:ss")}function n(e){return"undefined"==typeof e&&(e=new Date),e.format("yyyy-MM-dd")}function s(e){var t=new Date((new Date).format("yyyy-MM-dd"));return e?t.setDate(t.getDate()+e):t}function l(e){return new Date(e.toLocaleDateString()).getTime()/1e3}function c(e){return l(e)+86400-1}a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return c}))},cd77:function(e,t,a){"use strict";a("d81d"),a("d3b7"),a("25f0"),a("c19f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("99af");var i=a("1146"),r=a.n(i),n=a("21a6");function s(e,t){for(var a=t.map((function(e){return e.map((function(e){return null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}}))})),i=a[0],r=1;r<a.length;r++)for(var n=0;n<a[r].length;n++)i[n].wch<a[r][n].wch&&(i[n].wch=a[r][n].wch);e["!cols"]=i}function l(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}function c(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),i=0;i!==e.length;++i)a[i]=255&e.charCodeAt(i);return t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.header,a=e.key,i=e.data,o=e.fileName,u=e.autoWidth,d=void 0===u||u,h=e.bookType,f=void 0===h?"xlsx":h,p=r.a.utils.book_new(),m=l(a,i);o=o||"excel-list",m.unshift(t);var g=r.a.utils.aoa_to_sheet(m);d&&s(g,m),r.a.utils.book_append_sheet(p,g,o);var b=r.a.write(p,{bookType:f,bookSST:!1,type:"binary"});Object(n["saveAs"])(new Blob([c(b)],{type:"application/octet-stream"}),"".concat(o,".").concat(f))}function u(e){var t,a=[],i=r.a.utils.decode_range(e["!ref"]),n=i.s.r;for(t=i.s.c;t<=i.e.c;++t){var s=e[r.a.utils.encode_cell({c:t,r:n})],l="UNKNOWN "+t;s&&s.t&&(l=r.a.utils.format_cell(s)),a.push(l)}return a}function d(e,t){var a=r.a.read(e,{type:t}),i=a.SheetNames[0],n=a.Sheets[i],s=u(n),l=r.a.utils.sheet_to_json(n);return{header:s,results:l}}t["a"]={exportDataToExcel:o,readDataFromExcel:d}},d838:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always",id:"settleBody"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"success",icon:"el-icon-refresh"},on:{click:function(t){return e.toDialog("createSettle","")}}},[e._v("生成预结算记录")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.submitSettleRecord}},[e._v("确认结算")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("importData","")}}},[e._v("导入数据")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportVisible=!0}}},[e._v("导出数据")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"日期",prop:"settleAt"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.search.settleAtTime,callback:function(t){e.$set(e.search,"settleAtTime",t)},expression:"search.settleAtTime"}})],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},on:{change:e.changeArea},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"工会",prop:"guildId"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.search.guildId,callback:function(t){e.$set(e.search,"guildId",t)},expression:"search.guildId"}},e._l(e.guildList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(t){e.isCollapse=!e.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[e._v("\n                        "+e._s(e.isCollapse?"展开":"收起")+"\n                    ")]),a("div",[a("el-form-item",{attrs:{label:"主播ID",prop:"anchorId"}},[a("el-input",{attrs:{placeholder:"主播ID"},model:{value:e.search.anchorId,callback:function(t){e.$set(e.search,"anchorId",t)},expression:"search.anchorId"}})],1),a("el-form-item",{attrs:{label:"结算状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}},e._l(e.statusList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],2)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"guildStr",label:"工会",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"settleAt",label:"结算时间",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"statusStr",label:"结算状态",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"callIncome",label:"通话收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"giftIncome",label:"礼物收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"commissionIncome",label:"用户充值分成",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"adjustIncome",label:"奖惩收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"adjustment",label:"手动调整数额",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.editable?[a("el-input",{staticStyle:{width:"100px"},model:{value:i.adjustment,callback:function(t){e.$set(i,"adjustment",t)},expression:"row.adjustment"}}),a("el-button",{staticClass:"cancel-btn",attrs:{type:"text"},on:{click:function(t){return e.cancelEdit(i)}}},[e._v("取消")])]:a("span",[e._v(e._s(i.adjustment))])]}}])}),a("el-table-column",{attrs:{prop:"settled",label:"结算收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.eliminate(t.row,2)}}},[e._v("本次剔除")]),t.row.editable?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.confirmEdit(t.row)}}},[e._v("保存")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.row.editable=!t.row.editable}}},[e._v("编辑")])],1):2===t.row.status&&"预结算"===t.row.statusStr?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.eliminate(t.row,1)}}},[e._v("恢复")])],1):e._e()]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData}}),a("el-dialog",{attrs:{title:"导出数据",visible:e.exportVisible,width:"30%"},on:{"update:visible":function(t){e.exportVisible=t}}},[a("div",{staticClass:"export-data"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("xlsx")}}},[e._v("EXCEL格式")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("csv")}}},[e._v("CSV格式")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("txt")}}},[e._v("TXT格式")])],1),a("div",{staticClass:"hints"},[e._v("TIP：请选择要导出数据的格式。")])]),a("createSettle",{ref:"createSettle",on:{createSettleRecord:function(t){return e.createSettleRecord(t)}}}),a("importData",{ref:"importData",on:{importSuccess:function(t){return e.importSuccess(t)}}})],1)],1)},r=[],n=(a("ac1f"),a("841c"),a("159b"),a("333d")),s=a("7139"),l=a("cd77"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.search,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"结算时间",prop:"settleAtTime"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.search.settleAtTime,callback:function(t){e.$set(e.search,"settleAtTime",t)},expression:"search.settleAtTime"}})],1),a("el-form-item",{attrs:{label:"最小余额",prop:"minBalance"}},[a("el-input-number",{attrs:{min:"1"},model:{value:e.search.minBalance,callback:function(t){e.$set(e.search,"minBalance",t)},expression:"search.minBalance"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("确 定")])],1)],1)},o=[],u=a("c466"),d={data:function(){return{dialogVisible:!1,authAreaId:Object(s["n"])(),search:{areaId:Object(s["n"])(),settleAtTime:Object(u["b"])(),minBalance:100},rules:{minBalance:[{required:!0,message:"不能为空",trigger:"change"}]},areaList:Object(s["f"])(!1)}},methods:{init:function(e){this.search.areaId=0===this.authAreaId?this.areaList[0].value:this.authAreaId},onSearch:function(){var e=this,t=this.search;t.settleAt=new Date(this.search.settleAtTime).getTime()/1e3,this.$service.settle.createSettleRecord(t,(function(t){t?(e.$message.success("预结算生成成功!"),e.$emit("createSettleRecord",{areaId:e.search.areaId,settleAtTime:e.search.settleAtTime}),e.dialogVisible=!1):e.$message.error("预结算生成失败!")}))},closeDialog:function(){this.dialogVisible=!1}}},h=d,f=a("2877"),p=Object(f["a"])(h,c,o,!1,null,null,null),m=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"导入数据",visible:e.dialogVisible,width:"80%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-card",{attrs:{shadow:"always"}},[a("UploadExcel",{on:{"on-success":e.handleSuccess}}),a("div",{staticClass:"importButton",attrs:{align:"center"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onImport}},[e._v("导  入")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e,align:"center"}})})),1)],1)],1)},b=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-excel-wrapper"},[a("el-upload",{ref:"uploadExcel",attrs:{drag:"",action:"",accept:".xlsx, .xls, .csv",multiple:!1,"show-file-list":!1,"auto-upload":!1,limit:1,"on-exceed":e.handleLimit,"on-change":e.handleChange}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将Excel文件拖到此处，或"),a("em",[e._v("点击上传")])])])],1)},y=[],x=(a("b0c0"),{name:"UploadExcel",methods:{handleLimit:function(){return this.$message.warning("Excel文件只支持单个上传!"),!1},handleChange:function(e){var t=e.raw;return!!t&&(this.isExcel(t)?void(this.isLimit1M(t)&&this.readFile(t)):(this.$message.warning("Excel文件只支持.xlsx, .xls, .csv格式!"),!1))},isLimit1M:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message.warning("上传的Excel文件大小不能超过1M!"),!1)},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)},readFile:function(e){var t=this,a=new FileReader;a.onload=function(e){var a=e.target.result,i=l["a"].readDataFromExcel(a,"array"),r=i.header,n=i.results;t.$emit("on-success",{header:r,results:n})},a.readAsArrayBuffer(e),a.onerror=function(e){t.$message.error("Excel文件读取出错!")},this.$refs.uploadExcel.clearFiles()}}}),S=x,w=(a("40c0"),Object(f["a"])(S,v,y,!1,null,null,null)),I=w.exports,A=a("b522"),_={components:{UploadExcel:I,Hints:A["a"]},data:function(){return{dialogVisible:!1,tableHeader:[],tableData:[],recordsArr:[]}},methods:{init:function(e){},handleSuccess:function(e){var t=this,a=e.header,i=e.results;this.tableHeader=a,this.tableData=i,i.forEach((function(e,a){t.recordsArr[a]={id:e.ID,adjustment:e["手动调整数额"]}}))},onImport:function(){0!==this.recordsArr.length?(this.$emit("importSuccess",{arr:this.recordsArr}),this.closeDialog()):this.$message.error("数据为空!")},closeDialog:function(){this.dialogVisible=!1}}},k=_,j=(a("9f1c"),Object(f["a"])(k,g,b,!1,null,null,null)),D=j.exports,$={components:{Pagination:n["a"],createSettle:m,importData:D},data:function(){return{listLoading:!0,search:{areaId:Object(s["n"])(),guildId:void 0,anchorId:void 0,settleAtTime:Object(u["b"])(),status:void 0,page:{currentPage:1,pageSize:1e3}},total:0,authAreaId:Object(s["n"])(),records:void 0,submitLoading:!1,areaList:Object(s["f"])(!1),appList:Object(s["c"])(),guildList:[],statusList:Object(s["E"])(),createSettleLoadingText:"预结算生成中...",submitSettleLoadingText:"算生成中...",filesFormat:".txt, .csv, .xls, .xlsx",exportVisible:!1}},created:function(){this.search.areaId=0===this.authAreaId?this.areaList[0].value:this.authAreaId,this.changeArea(this.search.areaId),this.listLoading=!1},methods:{fetchData:function(){var e=this;this.listLoading=!0;var t=this.search;"undefined"!==typeof this.search.settleAtTime&&(t.settleAt=new Date(this.search.settleAtTime).getTime()/1e3),this.$service.settle.getSettleList(t,(function(t){var a=t.getRecordsList();e.records=a;var i=[];a.forEach((function(t,a){var r={id:t.getId(),areaId:t.getAreaId(),areaStr:Object(s["g"])(e.areaList,t.getAreaId()),guildId:t.getGuildId(),guildStr:Object(s["g"])(e.guildList,t.getGuildId()),anchorId:t.getAnchorId(),settleAt:Object(u["e"])(t.getSettleAt()),status:t.getStatus(),statusStr:Object(s["E"])(t.getStatus()),callIncome:t.getCallIncome(),giftIncome:t.getGiftIncome(),commissionIncome:t.getCommissionIncome(),adjustIncome:t.getAdjustIncome(),adjustment:t.getAdjustment(),settled:t.getSettled(),editable:!1};i.push(r)})),e.total=a.length,e.tableData=i,e.listLoading=!1}))},onSearch:function(){this.fetchData()},resetForm:function(){this.$refs.searchForm.resetFields()},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},eliminate:function(e,t){this.records.forEach((function(a){e.id===a.getId()&&a.setStatus(t)})),this.tableData.forEach((function(a){e.id===a.id&&(a.status=t)}))},createSettleRecord:function(e){this.querySettleProgress(e)},submitSettleRecord:function(){var e=this,t={areaId:this.search.areaId,records:this.records,settleAtTime:this.search.settleAtTime};t.records.forEach((function(e){1===e.getStatus()&&e.setStatus(3)})),this.$service.settle.submitSettleRecord(t,(function(a){a?e.querySettleProgress(t):e.$message.error("结算失败!")}))},querySettleProgress:function(e){var t=this.$loading({target:document.querySelector("#settleBody")});this.showLoading(e,t)},showLoading:function(e,t){var a=this,i=this;setTimeout((function(){a.$service.settle.querySettleProgress(e,(function(a){if(a)return a=Math.ceil(1e4*Math.random())/100,t.text=i.createSettleLoadingText+a,a<20?i.showLoading(e,t):(setTimeout((function(){t.text="加载完成....100%",t.close()}),1e3),i.search.areaId=e.areaId,i.search.settleAtTime=e.settleAtTime,i.fetchData(),!0);i.$message.error("预结算生成失败!")}))}),500)},exportTable:function(e){if(this.tableData.length){var t={header:["ID","区域","工会","主播Id","结算时间","通话收入","礼物收入","用户充值分成","奖惩收入","手动调整数额","结算收入"],key:["id","areaStr","guildStr","anchorId","settleAt","callIncome","giftIncome","commissionIncome","adjustIncome","adjustment","settled"],data:this.tableData,autoWidth:!0,fileName:"预结算记录-"+Object(u["c"])(),bookType:e};l["a"].exportDataToExcel(t),this.exportVisible=!1}},importSuccess:function(e){var t=this;e.arr.forEach((function(e){var a=e.id,i=e.adjustment;t.setAdjustment(a,i)}))},setAdjustment:function(e,t){this.records.forEach((function(a){e===a.getId()&&a.setAdjustment(t)})),this.tableData.forEach((function(a){e===a.id&&(a.adjustment=t)}))},cancelEdit:function(e){e.hobby=e.originalHobby,e.editable=!1},confirmEdit:function(e){e.editable=!1,""!=e.adjustment?this.setAdjustment(e.id,parseInt(e.adjustment)):this.$message.error("不能为空!")},changePageSize:function(e){this.search.page.pageSize=e.limit},changeArea:function(e){this.guildList=Object(s["s"])(e,!0)}}},T=$,E=(a("d9d9"),Object(f["a"])(T,i,r,!1,null,null,null));t["default"]=E.exports},d9d9:function(e,t,a){"use strict";a("1061")},de17:function(e,t,a){},f678:function(e,t,a){}}]);