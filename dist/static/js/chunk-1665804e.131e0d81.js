(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1665804e"],{6793:function(t,a,e){"use strict";e("b69b")},"6f2c":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-bar"})},n=[],i=(e("b0c0"),e("d81d"),e("313e")),r=e.n(i),o={name:"ChartsBar",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.dom.resize()},drawing:function(){var t=this.data.title,a=this.data.name,e=this.data.legend,s=this.data.data.map((function(t){return t.title})),n=this.data.data.map((function(t){return t.val1})),i=this.data.data.map((function(t){return t.val2})),o=this.data.data.map((function(t){return t.val3})),l={title:{text:t,subtext:a,top:5},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:e},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:s,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"},{type:"value",show:!1,axisLabel:{formatter:"{value} %"},max:function(t){return 100*Math.ceil(t.max/100)+200}}],color:["#2d8cf0"],series:[{name:e[0],type:"bar",stack:"total",color:"#2d8cf0",barWidth:"40%",label:{show:!0},emphasis:{focus:"series"},data:n},{name:e[1],type:"bar",stack:"total",color:"#19be6b",label:{show:!0},emphasis:{focus:"series"},data:i},{name:e[2],type:"bar",stack:"total",color:"#ff9900",label:{show:!0},emphasis:{focus:"series"},data:o}]};this.dom=r.a.init(this.$refs.dom),this.dom.setOption(l,!0),window.addEventListener("resize",this.resize)}}},l=o,d=e("2877"),h=Object(d["a"])(l,s,n,!1,null,null,null);a["a"]=h.exports},b69b:function(t,a,e){},ca00:function(t,a,e){"use strict";function s(t){return t/100}function n(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd")}function i(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd hh:mm:ss")}function r(t){return"undefined"==typeof t&&(t=new Date),t.format("yyyy-MM-dd")}function o(t){var a=new Date((new Date).toLocaleDateString());return t?a.setDate(a.getDate()+t):a}function l(){return new Date((new Date).toLocaleDateString())}function d(){return new Date(1e3*c(new Date))}function h(t){return new Date(t.toLocaleDateString()).getTime()/1e3}function c(t){return h(t)+86400-1}e.d(a,"h",(function(){return s})),e.d(a,"g",(function(){return n})),e.d(a,"i",(function(){return i})),e.d(a,"d",(function(){return r})),e.d(a,"c",(function(){return o})),e.d(a,"e",(function(){return l})),e.d(a,"a",(function(){return d})),e.d(a,"f",(function(){return h})),e.d(a,"b",(function(){return c}))},cc56:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-bar"})},n=[],i=(e("b0c0"),e("d81d"),e("313e")),r=e.n(i),o={name:"ChartsBar",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.dom.resize()},drawing:function(){var t=this.data.title,a=this.data.name,e=this.data.legend,s=this.data.data.map((function(t){return t.title})),n=this.data.data.map((function(t){return t.val1})),i=this.data.data.map((function(t){return t.val2})),o=this.data.data.map((function(t){return t.val3})),l=this.data.data.map((function(t){return t.val4})),d={title:{text:t,subtext:a,top:5},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:e},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:s,axisPointer:{type:"shadow"}}],yAxis:[{type:"value"},{type:"value",show:!1,axisLabel:{formatter:"{value} %"},max:function(t){return 100*Math.ceil(t.max/100)+200}}],series:[{name:e[0],type:"bar",stack:"total",color:"#2d8cf0",barWidth:"40%",label:{show:!0},emphasis:{focus:"series"},data:n},{name:e[1],type:"bar",stack:"total",color:"#19be6b",label:{show:!0},emphasis:{focus:"series"},data:i},{name:e[2],type:"line",color:"#19be6b",yAxisIndex:1,data:o},{name:e[3],type:"line",color:"#ff9900",yAxisIndex:1,data:l}]};this.dom=r.a.init(this.$refs.dom),this.dom.setOption(d),window.addEventListener("resize",this.resize)}}},l=o,d=e("2877"),h=Object(d["a"])(l,s,n,!1,null,null,null);a["a"]=h.exports},d37e:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-wrapper"},[e("el-row",{staticClass:"date-box",attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"区域"}},[e("el-select",{attrs:{disabled:0!==t.authAreaId,placeholder:"请选择"},model:{value:t.search.areaId,callback:function(a){t.$set(t.search,"areaId",a)},expression:"search.areaId"}},t._l(t.areaList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{attrs:{label:"时间",prop:"createdStart"}},[e("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.search.date,callback:function(a){t.$set(t.search,"date",a)},expression:"search.date"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:t.onSearch}},[t._v("刷 新")])],1)],1)],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.userKey,staticClass:"data-chart",attrs:{data:t.userData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.callingKey,staticClass:"data-chart",attrs:{data:t.callingData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.callKey,staticClass:"data-chart",attrs:{data:t.callData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.expenseKey,staticClass:"data-chart",attrs:{data:t.expenseData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.depositKey,staticClass:"data-chart",attrs:{data:t.depositData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.payKey,staticClass:"data-chart",attrs:{data:t.payData}})],1)],1)],1)],1)},n=[],i=(e("ac1f"),e("841c"),e("159b"),e("d3b7"),e("ddb0"),e("ec1b")),r=e.n(i),o=e("cc56"),l=e("6f2c"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-line"})},h=[],c=e("313e"),u=e.n(c),p={name:"ChartsLine",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{init:function(t){this.data=t,this.drawing()},resize:function(){this.dom.resize()},drawing:function(){var t=this,a=this.data.title,e=this.data.interval,s=this.data.legend,n=this.data.keys,i=[];s.forEach((function(a,e){var s={name:a,type:"line",showSymbol:!1,data:t.data.values[e]};i.push(s)}));var r={title:{text:a,top:15},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:s},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:n,axisLabel:{interval:e}}],yAxis:[{type:"value"}],series:i};this.dom=u.a.init(this.$refs.dom),this.dom.setOption(r),window.addEventListener("resize",this.resize)}}},f=p,y=e("2877"),m=Object(y["a"])(f,d,h,!1,null,null,null),g=m.exports,v=e("7139"),b=e("ca00"),w={name:"Home",components:{CountTo:r.a,ChartsBar:l["a"],ChartsBarLine:o["a"],ChartsCountLine:g},data:function(){return{userKey:20,callingKey:40,callKey:60,expenseKey:80,depositKey:100,payKey:120,minDate:Object(b["c"])(-3),search:{areaId:void 0,date:[Object(b["e"])(),Object(b["a"])()]},fmt:"",interval:void 0,authAreaId:Object(v["n"])(),areaList:Object(v["f"])(!1),userData:{title:"实时用户",legend:["在线用户","新用户","付费用户","空闲主播","通话主播"],keys:[],values:[]},callingData:{title:"实时通话",legend:["AIB发起","用户发起","主播发起"],keys:[],values:[]},callData:{title:"实时呼叫",legend:["整体呼叫","AIB呼叫","用户呼叫","主播呼叫"],keys:[],values:[]},expenseData:{title:"实时消耗",legend:["全部用户"],keys:[],values:[]},depositData:{title:"实时充值",legend:["全部用户"],keys:[],values:[]},payData:{title:"渠道收入",legend:["Google","Apple","三方渠道"],keys:[],values:[]}}},created:function(){this.search.areaId=0===this.authAreaId?this.areaList[0].value:this.authAreaId,this.initData()},methods:{onSearch:function(){this.initData()},initData:function(){var t=this,a=this.handleParam();this.$service.home.getAreaStat(a,(function(e){var s=e.getStatsList();t.toFmt(a),t.handleUserData(s),t.handleCallingData(s),t.handleCallData(s),t.handleExpenseData(s),t.handleDepositData(s),t.handlePayData(s)}))},handleParam:function(){var t=this.search;return t.date.length>0&&(t.startAt=this.search.date[0].getTime()/1e3,t.endAt=this.search.date[1].getTime()/1e3),t},handleUserData:function(t){var a=this,e=[],s=[],n=[],i=[],r=[],o=[],l=[];t.length;t.forEach((function(t,s){var d=t.getStartAt();e.push(new Date(1e3*d).format(a.fmt)),n.push(t.getOnlineUser()),i.push(t.getNewUser()),r.push(t.getPayUser()),o.push(t.getIdleAnchor()),l.push(t.getBusyAnchor())})),s.push(n),s.push(i),s.push(r),s.push(o),s.push(l),this.userData.keys=e,this.userData.values=s,this.userData.interval=this.interval,++this.userKey},handleCallingData:function(t){var a=this,e=[],s=[],n=[],i=[],r=[];t.forEach((function(t,s){var o=t.getStartAt();e.push(new Date(1e3*o).format(a.fmt)),n.push(t.getAiCalling()),i.push(t.getUserCalling()),r.push(t.getAnchorCalling())})),s.push(n),s.push(i),s.push(r),this.callingData.keys=e,this.callingData.values=s,this.userData.interval=this.interval,++this.callingKey},handleCallData:function(t){var a=this,e=[],s=[],n=[],i=[],r=[];t.forEach((function(t,s){var o=t.getStartAt();e.push(new Date(1e3*o).format(a.fmt)),n.push(t.getAiCall()),i.push(t.getUserCall()),r.push(t.getAnchorCall())})),s.push(n),s.push(i),s.push(r),this.callData.keys=e,this.callData.values=s,this.userData.interval=this.interval,++this.callKey},handleExpenseData:function(t){var a=this,e=[],s=[],n=[];t.forEach((function(t,s){var i=t.getStartAt();e.push(new Date(1e3*i).format(a.fmt)),n.push(t.getExpense())})),s.push(n),this.expenseData.values=s,this.expenseData.keys=e,this.userData.interval=this.interval,++this.expenseKey},handleDepositData:function(t){var a=this,e=[],s=[],n=[];t.forEach((function(t,s){var i=t.getStartAt();e.push(new Date(1e3*i).format(a.fmt)),n.push(t.getDeposit())})),s.push(n),this.depositData.values=s,this.depositData.keys=e,this.userData.interval=this.interval,++this.depositKey},handlePayData:function(t){var a=this,e=[],s=[],n=[],i=[],r=[];t.forEach((function(t,s){var o=t.getStartAt();e.push(new Date(1e3*o).format(a.fmt)),n.push(t.getGooglePay()/100),i.push(t.getApplePay()/100),r.push(t.getOtherPay()/100)})),s.push(n),s.push(i),s.push(r),this.payData.values=s,this.payData.keys=e,this.userData.interval=this.interval,++this.payKey},toFmt:function(t){var a=t.date[0],e=t.date[1];a.getTime()===e.getTime()?(this.fmt="hh:mm",this.interval=10):(this.fmt="MM-dd hh:mm",this.interval=void 0)}}},x=w,D=(e("6793"),Object(y["a"])(x,s,n,!1,null,null,null));a["default"]=D.exports}}]);