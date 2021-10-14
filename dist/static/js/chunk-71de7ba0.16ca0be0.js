(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71de7ba0"],{"0948":function(t,a,e){},"4a2f":function(t,a,e){"use strict";e("0948")},"6f2c":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-bar"})},i=[],n=(e("d81d"),e("313e")),r=e.n(n),o={name:"ChartsBar",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.dom.resize()},drawing:function(){var t=this.data.title,a=this.data.legend,e=this.data.data.map((function(t){return t.title})),s=this.data.data.map((function(t){return t.val1})),i=this.data.data.map((function(t){return t.val2})),n=this.data.data.map((function(t){return t.val3})),o={title:{text:t,top:15},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",max:function(t){return 100*Math.ceil(t.max/100)+300}}],color:["#2d8cf0"],series:[{name:a[0],type:"bar",stack:"total",color:"#2d8cf0",barWidth:"40%",label:{show:!0},emphasis:{focus:"series"},data:s},{name:a[1],type:"bar",stack:"total",color:"#19be6b",label:{show:!0},emphasis:{focus:"series"},data:i},{name:a[2],type:"bar",stack:"total",color:"#ff9900",label:{show:!0},emphasis:{focus:"series"},data:n}]};this.dom=r.a.init(this.$refs.dom),this.dom.setOption(o,!0),window.addEventListener("resize",this.resize)}}},l=o,d=e("2877"),c=Object(d["a"])(l,s,i,!1,null,null,null);a["a"]=c.exports},"86c5":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-wrapper"},[e("el-row",{staticClass:"date-box",attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"区域"}},[e("el-select",{attrs:{disabled:0!==t.authAreaId,placeholder:"请选择"},model:{value:t.search.areaId,callback:function(a){t.$set(t.search,"areaId",a)},expression:"search.areaId"}},t._l(t.areaList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:t.onSearch}},[t._v("刷 新")])],1)],1)],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.expenseKey,staticClass:"data-chart",attrs:{data:t.expenseData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.depositKey,staticClass:"data-chart",attrs:{data:t.depositData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsCountLine",{key:t.payKey,staticClass:"data-chart",attrs:{data:t.payData}})],1)],1)],1)],1)},i=[],n=(e("ac1f"),e("841c"),e("159b"),e("d3b7"),e("ddb0"),e("ec1b")),r=e.n(n),o=e("cc56"),l=e("6f2c"),d=e("9baf"),c=e("7139"),h={name:"Home",components:{CountTo:r.a,ChartsBar:l["a"],ChartsBarLine:o["a"],ChartsCountLine:d["a"]},data:function(){return{expenseKey:20,depositKey:40,payKey:60,search:{areaId:void 0},authAreaId:Object(c["n"])(),areaList:Object(c["f"])(!1),expenseData:{title:"实时消耗",legend:["全部用户"],keys:[],values:[]},depositData:{title:"实时充值",legend:["全部用户"],keys:[],values:[]},payData:{title:"渠道占比",legend:["Google","Apple","三方渠道"],keys:[],values:[]}}},created:function(){this.search.areaId=0===this.authAreaId?this.areaList[0].value:this.authAreaId,this.initData()},methods:{onSearch:function(){this.initData()},initData:function(){var t=this,a=this.search;a.startAt=this.startUnix(new Date),a.endAt=this.endUnix(new Date),this.$service.home.getAreaStat(this.search,(function(a){var e=a.getStatsList();t.handleExpenseData(e),t.handleDepositData(e),t.handlePayData(e)}))},handleExpenseData:function(t){var a=[],e=[],s=[];t.forEach((function(t,e){var i=t.getStartAt();a.push(new Date(1e3*i).format("hh:mm")),s.push(t.getExpense())})),e.push(s),this.expenseData.values=e,this.expenseData.keys=a,++this.expenseKey},handleDepositData:function(t){var a=[],e=[],s=[];t.forEach((function(t,e){var i=t.getStartAt();a.push(new Date(1e3*i).format("hh:mm")),s.push(t.getDeposit())})),e.push(s),this.depositData.values=e,this.depositData.keys=a,++this.depositKey},handlePayData:function(t){var a=[],e=[],s=[],i=[],n=[];t.forEach((function(t,e){var r=t.getStartAt();a.push(new Date(1e3*r).format("hh:mm")),s.push(t.getGooglePay()),i.push(t.getApplePay()),n.push(t.getOtherPay())})),e.push(s),e.push(i),e.push(n),this.payData.values=e,this.payData.keys=a,++this.payKey},startUnix:function(t){return new Date(t.toLocaleDateString()).getTime()/1e3},endUnix:function(t){return this.startUnix(t)+86400-1}}},u=h,p=(e("4a2f"),e("2877")),f=Object(p["a"])(u,s,i,!1,null,null,null);a["default"]=f.exports},"9baf":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-line"})},i=[],n=(e("d3b7"),e("ddb0"),e("159b"),e("313e")),r=e.n(n),o={name:"ChartsLine",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{init:function(t){this.data=t,this.drawing()},resize:function(){this.dom.resize()},drawing:function(){var t=this,a=this.data.title,e=this.data.legend,s=this.data.keys,i=[];e.forEach((function(a,e){var s={name:a,type:"line",data:t.data.values[e]};i.push(s)}));var n={title:{text:a,top:15},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:e},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:s,axisLabel:{interval:10}}],yAxis:[{type:"value"}],series:i};this.dom=r.a.init(this.$refs.dom),this.dom.setOption(n),window.addEventListener("resize",this.resize)}}},l=o,d=e("2877"),c=Object(d["a"])(l,s,i,!1,null,null,null);a["a"]=c.exports},cc56:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"dom",staticClass:"charts-bar"})},i=[],n=(e("d81d"),e("313e")),r=e.n(n),o={name:"ChartsBar",props:{data:{type:Object,default:function(){}}},data:function(){return{dom:null}},mounted:function(){this.drawing()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.dom.resize()},drawing:function(){console.log("组件......");var t=this.data.title,a=this.data.legend,e=this.data.data.map((function(t){return t.title})),s=this.data.data.map((function(t){return t.val1})),i=this.data.data.map((function(t){return t.val2})),n=this.data.data.map((function(t){return t.val3})),o=this.data.data.map((function(t){return t.val4})),l={title:{text:t,top:5},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{top:5,data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",max:function(t){return 100*Math.ceil(t.max/100)+200}},{type:"value",show:!1,axisLabel:{formatter:"{value} %"}}],series:[{name:a[0],type:"bar",stack:"total",color:"#2d8cf0",barWidth:"40%",label:{show:!0},emphasis:{focus:"series"},data:s},{name:a[1],type:"bar",stack:"total",color:"#19be6b",label:{show:!0},emphasis:{focus:"series"},data:i},{name:a[2],type:"line",color:"#19be6b",yAxisIndex:1,data:n},{name:a[3],type:"line",color:"#ff9900",yAxisIndex:1,data:o}]};this.dom=r.a.init(this.$refs.dom),this.dom.setOption(l),window.addEventListener("resize",this.resize)}}},l=o,d=e("2877"),c=Object(d["a"])(l,s,i,!1,null,null,null);a["a"]=c.exports}}]);