(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62f97412"],{1061:function(t,e,a){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"40c0":function(t,e,a){"use strict";a("9d99")},"8a6c":function(t,e,a){},"9d99":function(t,e,a){},"9f1c":function(t,e,a){"use strict";a("8a6c")},c466:function(t,e,a){"use strict";function l(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd")}function r(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd hh:mm:ss")}function i(t){return"undefined"==typeof t&&(t=new Date),t.format("yyyy-MM-dd")}a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},cd77:function(t,e,a){"use strict";a("d81d"),a("d3b7"),a("25f0"),a("c19f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("99af");var l=a("1146"),r=a.n(l),i=a("21a6");function s(t,e){for(var a=e.map((function(t){return t.map((function(t){return null==t?{wch:10}:t.toString().charCodeAt(0)>255?{wch:2*t.toString().length}:{wch:t.toString().length}}))})),l=a[0],r=1;r<a.length;r++)for(var i=0;i<a[r].length;i++)l[i].wch<a[r][i].wch&&(l[i].wch=a[r][i].wch);t["!cols"]=l}function n(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}function o(t){for(var e=new ArrayBuffer(t.length),a=new Uint8Array(e),l=0;l!==t.length;++l)a[l]=255&t.charCodeAt(l);return e}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.header,a=t.key,l=t.data,c=t.fileName,u=t.autoWidth,d=void 0===u||u,h=t.bookType,m=void 0===h?"xlsx":h,f=r.a.utils.book_new(),p=n(a,l);c=c||"excel-list",p.unshift(e);var b=r.a.utils.aoa_to_sheet(p);d&&s(b,p),r.a.utils.book_append_sheet(f,b,c);var g=r.a.write(f,{bookType:m,bookSST:!1,type:"binary"});Object(i["saveAs"])(new Blob([o(g)],{type:"application/octet-stream"}),"".concat(c,".").concat(m))}function u(t){var e,a=[],l=r.a.utils.decode_range(t["!ref"]),i=l.s.r;for(e=l.s.c;e<=l.e.c;++e){var s=t[r.a.utils.encode_cell({c:e,r:i})],n="UNKNOWN "+e;s&&s.t&&(n=r.a.utils.format_cell(s)),a.push(n)}return a}function d(t,e){var a=r.a.read(t,{type:e}),l=a.SheetNames[0],i=a.Sheets[l],s=u(i),n=r.a.utils.sheet_to_json(i);return{header:s,results:n}}e["a"]={exportDataToExcel:c,readDataFromExcel:d}},d838:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always",id:"settleBody"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"success",icon:"el-icon-refresh"},on:{click:function(e){return t.toDialog("createSettle","")}}},[t._v("生成预结算记录")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:t.submitSettleRecord}},[t._v("确认结算")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.toDialog("importData","")}}},[t._v("导入数据")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.exportVisible=!0}}},[t._v("导出数据")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"日期",prop:"settleAt"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.search.settleAtTime,callback:function(e){t.$set(t.search,"settleAtTime",e)},expression:"search.settleAtTime"}})],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.areaId,callback:function(e){t.$set(t.search,"areaId",e)},expression:"search.areaId"}},t._l(t.areaList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"工会",prop:"guildId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.guildId,callback:function(e){t.$set(t.search,"guildId",e)},expression:"search.guildId"}},t._l(t.guildList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:t.onSearch}},[t._v("查  询")])],1),a("el-collapse",{attrs:{accordion:""},on:{change:function(e){t.isCollapse=!t.isCollapse}}},[a("el-collapse-item",[a("template",{slot:"title"},[t._v("\n                            "+t._s(t.isCollapse?"展开":"收起")+"\n                        ")]),a("div",[a("el-form-item",{attrs:{label:"主播ID",prop:"anchorId"}},[a("el-input",{attrs:{placeholder:"主播ID"},model:{value:t.search.anchorId,callback:function(e){t.$set(t.search,"anchorId",e)},expression:"search.anchorId"}})],1),a("el-form-item",{attrs:{label:"结算状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},t._l(t.statusList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],2)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"guildStr",label:"工会",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"settleAt",label:"结算时间",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"statusStr",label:"结算状态",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"callIncome",label:"通话收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"giftIncome",label:"礼物收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"commissionIncome",label:"用户充值分成",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"adjustIncome",label:"奖惩收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"adjustment",label:"手动调整数额",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[l.editable?[a("el-input",{staticStyle:{width:"100px"},model:{value:l.adjustment,callback:function(e){t.$set(l,"adjustment",e)},expression:"row.adjustment"}}),a("el-button",{staticClass:"cancel-btn",attrs:{type:"text"},on:{click:function(e){return t.cancelEdit(l)}}},[t._v("取消")])]:a("span",[t._v(t._s(l.adjustment))])]}}])}),a("el-table-column",{attrs:{prop:"settled",label:"结算收入",align:"center",width:"120"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.eliminate(e.row,2)}}},[t._v("本次剔除")]),e.row.editable?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.confirmEdit(e.row)}}},[t._v("保存")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.row.editable=!e.row.editable}}},[t._v("编辑")])],1):2===e.row.status&&"预结算"===e.row.statusStr?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.eliminate(e.row,1)}}},[t._v("恢复")])],1):t._e()]}}])})],1),a("el-dialog",{attrs:{title:"导出数据",visible:t.exportVisible,width:"30%"},on:{"update:visible":function(e){t.exportVisible=e}}},[a("div",{staticClass:"export-data"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.exportTable("xlsx")}}},[t._v("EXCEL格式")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.exportTable("csv")}}},[t._v("CSV格式")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.exportTable("txt")}}},[t._v("TXT格式")])],1),a("div",{staticClass:"hints"},[t._v("TIP：请选择要导出数据的格式。")])]),a("createSettle",{ref:"createSettle",on:{createSettleRecord:function(e){return t.createSettleRecord(e)}}}),a("importData",{ref:"importData",on:{importSuccess:function(e){return t.importSuccess(e)}}})],1)],1)},r=[],i=(a("ac1f"),a("841c"),a("159b"),a("333d")),s=a("7139"),n=a("cd77"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.closeDialog},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"ruleForm",attrs:{model:t.search,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.areaId,callback:function(e){t.$set(t.search,"areaId",e)},expression:"search.areaId"}},t._l(t.areaList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"结算时间",prop:"settleAtTime"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.search.settleAtTime,callback:function(e){t.$set(t.search,"settleAtTime",e)},expression:"search.settleAtTime"}})],1),a("el-form-item",{attrs:{label:"最小余额",prop:"minBalance"}},[a("el-input-number",{attrs:{min:"1"},model:{value:t.search.minBalance,callback:function(e){t.$set(t.search,"minBalance",e)},expression:"search.minBalance"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("确 定")])],1)],1)},c=[],u={data:function(){return{dialogVisible:!1,search:{areaId:1,settleAtTime:new Date((new Date).format("yyyy-MM-dd")),minBalance:100},rules:{minBalance:[{required:!0,message:"不能为空",trigger:"change"}]},areaList:Object(s["e"])()}},methods:{init:function(t){},onSearch:function(){var t=this,e=this.search;e.settleAt=this.search.settleAtTime.getTime()/1e3,this.$service.settle.createSettleRecord(e,(function(e){e?(t.$message.success("预结算生成成功!"),t.$emit("createSettleRecord",{areaId:t.search.areaId,settleAtTime:t.search.settleAtTime}),t.dialogVisible=!1):t.$message.error("预结算生成失败!")}))},closeDialog:function(){this.dialogVisible=!1}}},d=u,h=a("2877"),m=Object(h["a"])(d,o,c,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"导入数据",visible:t.dialogVisible,width:"80%","before-close":t.closeDialog},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-card",{attrs:{shadow:"always"}},[a("UploadExcel",{on:{"on-success":t.handleSuccess}}),a("div",{staticClass:"importButton",attrs:{align:"center"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:t.onImport}},[t._v("导  入")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},t._l(t.tableHeader,(function(t){return a("el-table-column",{key:t,attrs:{prop:t,label:t,align:"center"}})})),1)],1)],1)},b=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-excel-wrapper"},[a("el-upload",{ref:"uploadExcel",attrs:{drag:"",action:"",accept:".xlsx, .xls, .csv",multiple:!1,"show-file-list":!1,"auto-upload":!1,limit:1,"on-exceed":t.handleLimit,"on-change":t.handleChange}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将Excel文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1)},v=[],y=(a("b0c0"),{name:"UploadExcel",methods:{handleLimit:function(){return this.$message.warning("Excel文件只支持单个上传!"),!1},handleChange:function(t){var e=t.raw;return!!e&&(this.isExcel(e)?void(this.isLimit1M(e)&&this.readFile(e)):(this.$message.warning("Excel文件只支持.xlsx, .xls, .csv格式!"),!1))},isLimit1M:function(t){var e=t.size/1024/1024<1;return!!e||(this.$message.warning("上传的Excel文件大小不能超过1M!"),!1)},isExcel:function(t){return/\.(xlsx|xls|csv)$/.test(t.name)},readFile:function(t){var e=this,a=new FileReader;a.onload=function(t){var a=t.target.result,l=n["a"].readDataFromExcel(a,"array"),r=l.header,i=l.results;e.$emit("on-success",{header:r,results:i})},a.readAsArrayBuffer(t),a.onerror=function(t){e.$message.error("Excel文件读取出错!")},this.$refs.uploadExcel.clearFiles()}}}),x=y,w=(a("40c0"),Object(h["a"])(x,g,v,!1,null,null,null)),S=w.exports,I=a("b522"),_={components:{UploadExcel:S,Hints:I["a"]},data:function(){return{dialogVisible:!1,tableHeader:[],tableData:[],recordsArr:[]}},methods:{init:function(t){},handleSuccess:function(t){var e=this,a=t.header,l=t.results;this.tableHeader=a,this.tableData=l,l.forEach((function(t,a){e.recordsArr[a]={id:t.ID,adjustment:t["手动调整数额"]}}))},onImport:function(){0!==this.recordsArr.length?(this.$emit("importSuccess",{arr:this.recordsArr}),this.closeDialog()):this.$message.error("数据为空!")},closeDialog:function(){this.dialogVisible=!1}}},k=_,A=(a("9f1c"),Object(h["a"])(k,p,b,!1,null,null,null)),D=A.exports,T=a("c466"),j={components:{Pagination:i["a"],createSettle:f,importData:D},data:function(){return{listLoading:!0,search:{areaId:1,guildId:void 0,anchorId:void 0,settleAtTime:new Date((new Date).format("yyyy-MM-dd")),status:void 0},total:0,records:void 0,submitLoading:!1,areaList:Object(s["e"])(),appList:Object(s["c"])(),guildList:Object(s["p"])(),statusList:Object(s["B"])(),createSettleLoadingText:"预结算生成中...",submitSettleLoadingText:"算生成中...",filesFormat:".txt, .csv, .xls, .xlsx",exportVisible:!1}},created:function(){this.listLoading=!1},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e=this.search;"undefined"!==typeof this.search.settleAtTime&&(e.settleAt=this.search.settleAtTime.getTime()/1e3),this.$service.settle.getSettleList(e,(function(e){var a=e.getRecordsList();t.records=a;var l=[];a.forEach((function(e,a){var r={id:e.getId(),areaId:e.getAreaId(),areaStr:Object(s["g"])(t.areaList,e.getAreaId()),guildId:e.getGuildId(),guildStr:Object(s["g"])(t.guildList,e.getGuildId()),anchorId:e.getAnchorId(),settleAt:Object(T["b"])(e.getSettleAt()),status:e.getStatus(),statusStr:Object(s["B"])(e.getStatus()),callIncome:e.getCallIncome(),giftIncome:e.getGiftIncome(),commissionIncome:e.getCommissionIncome(),adjustIncome:e.getAdjustIncome(),adjustment:e.getAdjustment(),settled:e.getSettled(),editable:!1};l.push(r)})),t.total=a.length,t.tableData=l,t.listLoading=!1}))},onSearch:function(){this.fetchData()},resetForm:function(){this.$refs.searchForm.resetFields()},toDialog:function(t,e){var a=this;this.$refs[t].dialogVisible=!0,this.$nextTick((function(){a.$refs[t].init(e)}))},eliminate:function(t,e){this.records.forEach((function(a){t.id===a.getId()&&a.setStatus(e)})),this.tableData.forEach((function(a){t.id===a.id&&(a.status=e)}))},createSettleRecord:function(t){this.querySettleProgress(t)},submitSettleRecord:function(){var t=this,e={areaId:this.search.areaId,records:this.records,settleAtTime:this.search.settleAtTime};e.records.forEach((function(t){1===t.getStatus()&&t.setStatus(3)})),this.$service.settle.submitSettleRecord(e,(function(a){a?t.querySettleProgress(e):t.$message.error("结算失败!")}))},querySettleProgress:function(t){var e=this.$loading({target:document.querySelector("#settleBody")});this.showLoading(t,e)},showLoading:function(t,e){var a=this,l=this;setTimeout((function(){a.$service.settle.querySettleProgress(t,(function(a){if(a)return a=Math.ceil(1e4*Math.random())/100,e.text=l.createSettleLoadingText+a,a<20?l.showLoading(t,e):(setTimeout((function(){e.text="加载完成....100%",e.close()}),1e3),l.search.areaId=t.areaId,l.search.settleAtTime=t.settleAtTime,l.fetchData(),!0);l.$message.error("预结算生成失败!")}))}),500)},exportTable:function(t){if(this.tableData.length){var e={header:["ID","区域","工会","主播Id","结算时间","通话收入","礼物收入","用户充值分成","奖惩收入","手动调整数额","结算收入"],key:["id","areaStr","guildStr","anchorId","settleAt","callIncome","giftIncome","commissionIncome","adjustIncome","adjustment","settled"],data:this.tableData,autoWidth:!0,fileName:"预结算记录-"+Object(T["a"])(),bookType:t};n["a"].exportDataToExcel(e),this.exportVisible=!1}},importSuccess:function(t){var e=this;t.arr.forEach((function(t){var a=t.id,l=t.adjustment;e.setAdjustment(a,l)}))},setAdjustment:function(t,e){this.records.forEach((function(a){t===a.getId()&&a.setAdjustment(e)})),this.tableData.forEach((function(a){t===a.id&&(a.adjustment=e)}))},cancelEdit:function(t){t.hobby=t.originalHobby,t.editable=!1},confirmEdit:function(t){t.editable=!1,""!=t.adjustment?this.setAdjustment(t.id,parseInt(t.adjustment)):this.$message.error("不能为空!")},changePageSize:function(t){this.search.page.pageSize=t.limit}}},$=j,E=(a("d9d9"),Object(h["a"])($,l,r,!1,null,null,null));e["default"]=E.exports},d9d9:function(t,e,a){"use strict";a("1061")}}]);