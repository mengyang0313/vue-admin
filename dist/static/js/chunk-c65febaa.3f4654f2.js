(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c65febaa"],{"0948":function(a,t,e){},"4a2f":function(a,t,e){"use strict";e("0948")},"86c5":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home-wrapper"},[e("el-row",{staticClass:"date-box",attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:a.search,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"区域"}},[e("el-select",{attrs:{disabled:0!==a.authAreaId,placeholder:"请选择"},model:{value:a.search.areaId,callback:function(t){a.$set(a.search,"areaId",t)},expression:"search.areaId"}},a._l(a.areaList,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:a.onSearch}},[a._v("刷 新")])],1)],1)],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[a.expenseData.keys?e("ChartsLine",{staticClass:"data-chart",attrs:{data:a.expenseData}}):a._e()],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[a.depositData.keys?e("ChartsLine",{staticClass:"data-chart",attrs:{data:a.depositData}}):a._e()],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[a.payData.keys?e("ChartsLine",{staticClass:"data-chart",attrs:{data:a.payData}}):a._e()],1)],1)],1)],1)},n=[],r=(e("ac1f"),e("841c"),e("159b"),e("d3b7"),e("ddb0"),e("ec1b")),i=e.n(r),o=e("cc56"),l=e("6f2c"),c=e("d909"),d=e("7139"),p={name:"Home",components:{CountTo:i.a,ChartsBar:l["a"],ChartsBarLine:o["a"],ChartsLine:c["a"]},data:function(){return{search:{areaId:Object(d["n"])()},areaList:Object(d["e"])(),expenseData:{title:"实时消耗",legend:["全部用户"],keys:[],values:[]},depositData:{title:"实时充值",legend:["全部用户"],keys:[],values:[]},payData:{title:"渠道占比",legend:["Google","Apple","三方渠道"],keys:[],values:[]}}},created:function(){this.initData()},methods:{onSearch:function(){this.initData()},initData:function(){var a=this,t=this.search;t.startAt=this.startUnix(new Date),t.endAt=this.endUnix(new Date),this.$service.home.getAreaStat(this.search,(function(t){var e=t.getStatsList();a.handleExpenseData(e),a.handleDepositData(e),a.handlePayData(e)}))},handleExpenseData:function(a){var t=[],e=[];a.forEach((function(a,s){var n=a.getStartAt();t.push(new Date(1e3*n).format("HH:mm")),e.push(a.getExpense())})),this.expenseData.values.push(e),this.expenseData.keys=t},handleDepositData:function(a){var t=[],e=[];a.forEach((function(a,s){var n=a.getStartAt();t.push(new Date(1e3*n).format("HH:mm")),e.push(a.getDeposit())})),this.depositData.values.push(e),this.depositData.keys=t},handlePayData:function(a){var t=[],e=[],s=[],n=[];a.forEach((function(a,r){var i=a.getStartAt();t.push(new Date(1e3*i).format("HH:mm")),e.push(a.getGooglePay()),s.push(a.getApplePay()),n.push(a.getOtherPay())})),this.payData.values.push(e),this.payData.values.push(s),this.payData.values.push(n),this.payData.keys=t},startUnix:function(a){return new Date(a.toLocaleDateString()).getTime()/1e3},endUnix:function(a){return this.startUnix(a)+86400-1}}},h=p,u=(e("4a2f"),e("2877")),f=Object(u["a"])(h,s,n,!1,null,null,null);t["default"]=f.exports},d81d:function(a,t,e){"use strict";var s=e("23e7"),n=e("b727").map,r=e("1dde"),i=r("map");s({target:"Array",proto:!0,forced:!i},{map:function(a){return n(this,a,arguments.length>1?arguments[1]:void 0)}})}}]);