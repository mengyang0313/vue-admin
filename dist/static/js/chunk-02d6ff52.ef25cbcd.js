(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d6ff52"],{"3dc1":function(t,a,e){},4175:function(t,a,e){"use strict";e("3dc1")},b3d7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"home-wrapper"},[e("div",{staticClass:"date-row"},t._l(t.cardInfoData,(function(a,s){return e("div",{key:s,staticClass:"data-col"},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[e("div",{staticClass:"date-block"},[e("div",{staticClass:"date-cont"},[3===a.num?e("div",{staticStyle:{display:"inline"}},[e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count,duration:1e3,decimals:a.decimals}}),t._v(t._s(a.unit)+"\n                            /"),e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count2,duration:1e3,decimals:a.decimals}}),t._v(t._s(a.unit)+"\n                            /"),e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count3,duration:1e3,decimals:a.decimals}}),t._v(t._s(a.unit)+"\n                        ")],1):2===a.num?e("div",{staticStyle:{display:"inline"}},[e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count,duration:1e3,decimals:a.decimals}}),t._v("\n                            /"),e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count2,duration:1e3}})],1):1===a.num?e("div",{staticStyle:{display:"inline"}},[e("CountTo",{staticClass:"count-min",attrs:{"start-val":0,"end-val":a.count,duration:1e3}})],1):t._e(),e("p",{staticClass:"title"},[t._v(t._s(a.title))])])])])],1)})),0),e("el-row",{staticClass:"date-box",attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[[e("el-form-item",{attrs:{label:"区域"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.areaId,callback:function(a){t.$set(t.search,"areaId",a)},expression:"search.areaId"}},t._l(t.areaList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{attrs:{label:"时间"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.search.date,callback:function(a){t.$set(t.search,"date",a)},expression:"search.date"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:t.onSearch}},[t._v("刷 新")])],1)]],2)],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsBarLine",{key:t.incomeKey,staticClass:"data-chart",attrs:{data:t.incomeData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsBarLine",{key:t.totalKey,staticClass:"data-chart",attrs:{data:t.totalDate}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsBar",{key:t.newUserKey,staticClass:"data-chart",attrs:{title:"新增用户",data:t.userDate}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsLine",{key:t.activeKey,staticClass:"data-chart",attrs:{data:t.activeData}})],1)],1)],1),e("el-row",{staticClass:"date-box",attrs:{gutter:30}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"always","body-style":{padding:"10px",paddingTop:"20px"}}},[e("ChartsBar",{key:t.channelKey,staticClass:"data-chart",attrs:{title:"充值渠道",data:t.channelData}})],1)],1)],1)],1)},n=[],i=(e("159b"),e("ac1f"),e("841c"),e("d3b7"),e("ddb0"),e("ec1b")),l=e.n(i),o=e("cc56"),c=e("6f2c"),r=e("d909"),d=e("7139"),u={name:"Home",components:{CountTo:l.a,ChartsBar:c["a"],ChartsBarLine:o["a"],ChartsLine:r["a"]},data:function(){return{listLoading:!1,search:{areaId:1,date:new Date((new Date).format("yyyy-MM-dd")),startAt:void 0,endAt:void 0},areaList:Object(d["f"])(!0),appList:Object(d["c"])(),cardInfoData:[],newUserKey:1,incomeKey:20,totalKey:40,activeKey:60,channelKey:80,incomeData:{title:"新增收入",legend:["新增收入"],data:[]},totalDate:{title:"全部收入",legend:["总收入"],data:[]},userDate:{title:"新增用户",legend:["新增用户"],data:[]},activeData:{title:"活跃用户",legend:["活跃用户"],keys:[],values:[]},channelData:{title:"充值渠道",legend:["google","apple","其他"],data:[]}}},created:function(){this.initCard(),this.initData()},methods:{onSearch:function(){this.listLoading=!0,this.initCard(),this.initData()},initCard:function(){var t=this;this.cardInfoData=[],this.$service.home.getOverview(this.handleSearch(),(function(a){var e=a.getIncome(),s=0;console.log("income:"+e),e>0&&(e/=100,s=2);var n={title:"大盘实时收入",num:2,count:e,count2:a.getPayCount(),decimals:s},i={title:"新增/活跃用户",num:2,count:a.getNewUser(),count2:a.getActiveUser(),decimals:0},l={title:"通话/在线主播",num:2,count:a.getBusyAnchor(),count2:a.getOnlineAnchor(),decimals:0},o={title:"待审核主播/profile/视频",num:3,count:a.getReviewAnchor(),count2:a.getReviewProfile(),count3:a.getReviewVideo(),decimals:0},c=a.getNewAmount()/1e3,r=a.getExpenseAmount()/1e3,d=a.getTotalAmount()/1e3,u={title:"新充值/消费/总余额",num:3,count:c,count2:r,count3:d,decimals:0,unit:"K"};t.cardInfoData.push(n),t.cardInfoData.push(i),t.cardInfoData.push(l),t.cardInfoData.push(o),t.cardInfoData.push(u)}))},initData:function(){var t=this;this.$service.home.getHomeStat(this.handleSearch(),(function(a){var e=a.getStatsList(),s=[],n=[],i=[],l=[];e.forEach((function(a){var e=Object(d["e"])(t.appList,a.getAppId()),o=1===e.os?"🤖":"",c=e.label+o;a.getNewIncome()>0&&s.push({title:c,val1:a.getNewIncome()/100}),a.getTotalIncome()>0&&n.push({title:c,val1:a.getTotalIncome()/100}),a.getNewUser()>0&&i.push({title:c,val1:a.getNewUser()}),(a.getGoogleIncome()>0||a.getAppleIncome()>0||a.getOtherIncome()>0)&&l.push({title:c,val1:a.getGoogleIncome()/100,val2:a.getAppleIncome()/100,val3:a.getOtherIncome()/100})})),console.log("userArr:"+i),t.$set(t.userDate,"data",i),++t.newUserKey,t.incomeData.data=s,++t.incomeKey,t.totalDate.data=n,++t.totalKey,t.channelData.data=l,++t.channelKey;var o=a.getHourlyActivesList();t.handleActiveData(o),++t.activeKey,t.listLoading=!1}))},handleSearch:function(){var t=this.search.date;return this.search.startAt=this.startUnix(t),this.search.endAt=this.endUnix(t),this.search},handleActiveData:function(t){var a=this,e=[];t.forEach((function(t,s){a.activeData.keys.push(s+":00"),e.push(t)})),this.activeData.values.push(e)},startUnix:function(t){return new Date(t.toLocaleDateString()).getTime()/1e3},endUnix:function(t){return this.startUnix(t)+86400-1}}},h=u,p=(e("4175"),e("2877")),m=Object(p["a"])(h,s,n,!1,null,null,null);a["default"]=m.exports},d81d:function(t,a,e){"use strict";var s=e("23e7"),n=e("b727").map,i=e("1dde"),l=i("map");s({target:"Array",proto:!0,forced:!l},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);