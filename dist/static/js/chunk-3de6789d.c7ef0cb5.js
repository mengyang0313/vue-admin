(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de6789d"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1ea5":function(e,t,a){"use strict";a("6dc6")},"27b9":function(e,t,a){},4914:function(e,t,a){"use strict";a("e3c7")},"67ca":function(e,t,a){},"6dc6":function(e,t,a){},"841c":function(e,t,a){"use strict";var i=a("d784"),r=a("825a"),o=a("1d80"),n=a("129f"),l=a("577e"),s=a("14c3");i("search",(function(e,t,a){return[function(t){var a=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](l(a))},function(e){var i=r(this),o=l(e),c=a(t,i,o);if(c.done)return c.value;var u=i.lastIndex;n(u,0)||(i.lastIndex=0);var f=s(i,o);return n(i.lastIndex,u)||(i.lastIndex=u),null===f?-1:f.index}]}))},"9e72":function(e,t,a){"use strict";a("27b9")},a15b:function(e,t,a){"use strict";var i=a("23e7"),r=a("44ad"),o=a("fc6a"),n=a("a640"),l=[].join,s=r!=Object,c=n("join",",");i({target:"Array",proto:!0,forced:s||!c},{join:function(e){return l.call(o(this),void 0===e?",":e)}})},a9e3:function(e,t,a){"use strict";var i=a("83ab"),r=a("da84"),o=a("94ca"),n=a("6eeb"),l=a("5135"),s=a("c6b6"),c=a("7156"),u=a("d9b5"),f=a("c04e"),p=a("d039"),m=a("7c73"),d=a("241c").f,h=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,v="Number",y=r[v],x=y.prototype,w=s(m(x))==v,C=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,i,r,o,n,l,s,c=f(e,"number");if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=c.slice(2),n=o.length,l=0;l<n;l++)if(s=o.charCodeAt(l),s<48||s>r)return NaN;return parseInt(o,i)}return+c};if(o(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,k=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof k&&(w?p((function(){x.valueOf.call(a)})):s(a)!=v)?c(new y(C(t)),a,k):C(t)},$=i?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;$.length>_;_++)l(y,I=$[_])&&!l(k,I)&&g(k,I,h(y,I));k.prototype=x,x.constructor=k,n(r,v,k)}},ba7a:function(e,t,a){"use strict";a("67ca")},c18d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("Hints",{attrs:{hidden:e.isHints}},[a("template",{slot:"hintName"},[e._v(" 配置 < "+e._s(e.search.areaName)+" > 国家")])],2),a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("addCountry","")}}},[e._v("+ 新增国家")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"country",label:"国家代码",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"enable",label:"是否启用",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"scope.row.enable"}})]}}])}),a("el-table-column",{attrs:{prop:"title",label:"国家名称(后台)",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"国家名称(客户端)",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"currency",label:"货币类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:"contain",src:e.row.icon,"preview-src-list":[e.row.icon]}})]}}])}),a("el-table-column",{attrs:{prop:"exchangeRate",label:"汇率",align:"center","show-overflow-tooltip":!0,width:"150"}}),a("el-table-column",{attrs:{prop:"channelNames",label:"启用的支付渠道",align:"center","show-overflow-tooltip":!0,width:"300"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"120"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"180",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("payConfig",t.row)}}},[e._v("支付配置")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("approximationConfig",t.row)}}},[e._v("近似值")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("addCountry",t.row)}}},[e._v("更新")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("addCountry",{ref:"addCountry",on:{fetchData:e.fetchData}}),a("payConfig",{ref:"payConfig",on:{fetchData:e.fetchData}}),a("approximationConfig",{ref:"approximationConfig",on:{fetchData:e.fetchData}})],1)],1)},r=[],o=(a("ac1f"),a("841c"),a("a9e3"),a("159b"),a("a15b"),a("333d")),n=a("528b"),l=a("b522"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.areaId,callback:function(t){e.$set(e.form,"areaId",t)},expression:"form.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"国家代码",prop:"country"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"2"},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}})],1),a("el-form-item",{attrs:{label:"国家名称(后台)",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"国家名称(客户端)",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"货币类型",prop:"currency"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"3"},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}})],1),a("el-form-item",{attrs:{label:"图标",prop:"icon"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:1,"on-preview":e.previewIcon,"on-change":e.successIcon,"list-type":"picture-card","file-list":e.iconArr,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.iconDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(t){e.iconDialog=t}}},[a("img",{attrs:{width:"100%",src:e.form.icon,alt:""}})])],1),a("div",{staticClass:"imgSpan2"},[e._v("只能上传jpg/png文件，50X50px")])]),a("el-form-item",{attrs:{label:"汇率",prop:"exchangeRate"}},[a("el-input-number",{staticStyle:{width:"70%"},attrs:{min:0},model:{value:e.form.exchangeRate,callback:function(t){e.$set(e.form,"exchangeRate",t)},expression:"form.exchangeRate"}})],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"30%"},attrs:{precision:0,min:1},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("el-switch",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},c=[],u=a("7139"),f=a("f3e4"),p=a("cebe"),m=a.n(p),d=a("7af6"),h={data:function(){return{form:{},dialogVisible:!1,title:"新增国家",iconArr:[],iconDialog:!1,areaList:Object(u["e"])(),appList:Object(u["c"])(),osTypeList:Object(u["t"])(),payTypeList:Object(u["w"])(),payChannelList:Object(u["u"])(),rules:{areaId:[{required:!0,message:"内容不能为空",trigger:"change"}],name:[{required:!0,message:"内容不能为空",trigger:"blur"}],currency:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},methods:{init:function(e){"undefined"!=typeof e.id&&(this.title="编辑国家",this.form=e,this.iconArr.push({url:e.icon}))},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){a&&e.$service.config.saveCountryConfig(e.handleParam(),(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}))},handleParam:function(){var e=this.form;return e},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},previewIcon:function(e){this.iconDialog=!0},successIcon:function(e){var t=this;this.imgUpload(e.raw,1,(function(e){t.form.icon=e.uri}))},imgUpload:function(e,t,a){var i={"Content-Type":"multipart/form-data",token:Object(f["a"])(),"area-id":1,"file-type":t},r=new FormData;r.append("file",e),m()({url:"http://101.33.118.232:8101/file/upload",method:"post",data:r,headers:i}).then((function(e){var t=e.data;a(t)}))}}},g=h,b=(a("9e72"),a("2877")),v=Object(b["a"])(g,s,c,!1,null,null,null),y=v.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"支付配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{prop:"payChannelIds"}},[a("el-checkbox-group",{model:{value:e.form.payChannelIds,callback:function(t){e.$set(e.form,"payChannelIds",t)},expression:"form.payChannelIds"}},e._l(e.payChannelList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},w=[],C={data:function(){return{form:{payChannelIds:[],checkedPayChannel:[]},payChannelList:[],dialogVisible:!1}},methods:{init:function(e){this.payChannelList=Object(u["u"])(e.areaId),this.form=e},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(a){var i=e.form;e.$service.config.saveCountryConfig(i,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},I=C,k=(a("1ea5"),Object(b["a"])(I,x,w,!1,null,null,null)),$=k.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"近似值配置",visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"近似值配置",prop:"exchangeRate"}},[a("el-button",{attrs:{type:"warning"},on:{click:e.addApproximation}},[e._v("新增")])],1),e._l(e.form.approximationArr,(function(t,i){return a("el-form-item",{key:t.key,staticClass:"approximation",attrs:{label:""}},[a("el-input",{attrs:{size:"medium",placeholder:"下限"},model:{value:t.lowValue,callback:function(a){e.$set(t,"lowValue",a)},expression:"item.lowValue"}}),e._v(" \n                "),a("el-input",{attrs:{size:"small",placeholder:"上限"},model:{value:t.highValue,callback:function(a){e.$set(t,"highValue",a)},expression:"item.highValue"}}),e._v(" \n                "),a("el-input",{attrs:{size:"mini",placeholder:"目标值"},model:{value:t.targetValue,callback:function(a){e.$set(t,"targetValue",a)},expression:"item.targetValue"}}),e._v(" \n                "),a("el-button",{on:{click:function(a){return a.preventDefault(),e.removeApproximation(t)}}},[e._v("删除")])],1)})),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],2)],1)])},V=[],D=(a("a434"),{data:function(){return{form:{approximations:void 0,approximationArr:[]},row:{},payChannelList:[],dialogVisible:!1}},methods:{init:function(e){var t=this;this.row=e,this.form.approximations=e.approximations,this.form.approximations.forEach((function(e){t.form.approximationArr.push({lowValue:e.getLowValue(),highValue:e.getHighValue(),targetValue:e.getTargetValue()})}))},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(a){var i=t.handleParam();e.$service.config.saveCountryConfig(i,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},handleParam:function(){var e=[];return this.form.approximationArr.forEach((function(t){var a=new d["Approximation"];a.setLowValue(t.lowValue),a.setHighValue(t.highValue),a.setTargetValue(t.targetValue),e.push(a)})),this.row.approximations=e,this.row},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},addApproximation:function(){this.form.approximationArr.push({lowValue:"",highValue:"",targetValue:"",key:Date.now()})},removeApproximation:function(e){var t=this.form.approximationArr.indexOf(e);-1!==t&&this.form.approximationArr.splice(t,1)}}}),F=D,A=(a("4914"),Object(b["a"])(F,_,V,!1,null,null,null)),S=A.exports,L={components:{Pagination:o["a"],Hints:l["a"],imageShow:n["a"],addCountry:y,payConfig:$,approximationConfig:S},data:function(){return{listLoading:!0,search:{areaId:void 0,areaName:void 0,page:{currentPage:1,pageSize:10}},total:0,isHints:!0,isCollapse:!0,areaList:Object(u["e"])(),payTypeList:Object(u["w"])()}},created:function(){this.fetchData()},watch:{$route:{handler:function(){if("undefined"!==typeof this.$route.query.areaId){var e=this.$route.query.areaId;this.search.areaId=Number(e),this.search.areaName=this.$route.query.areaName,this.isHints=!1,this.fetchData()}},deep:!0}},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.config.getCountryConfigList(this.search,(function(t){var a=t.getConfigsList(),i=[];a.forEach((function(t,a){var r={id:t.getId(),areaId:t.getAreaId(),areaStr:Object(u["f"])(e.areaList,t.getAreaId()),country:t.getCountry(),enable:t.getEnable(),title:t.getTitle(),name:t.getName(),currency:t.getCurrency(),icon:t.getIcon(),exchangeRate:t.getExchangeRate(),approximations:t.getApproximationsList(),payChannelIds:t.getPayChannelIdsList(),channelNames:e.handlePayChannel(t.getAreaId(),t.getPayChannelIdsList()).join(", "),sort:t.getSort(),struct:t};i.push(r)})),e.total=a.length,e.tableData=i,e.listLoading=!1}))},handlePayChannel:function(e,t){var a=[],i=Object(u["u"])(e);return i.forEach((function(e){t.indexOf(e.value)>=0&&a.push(e.label)})),a},onSearch:function(){this.isHints=!0,this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},resetForm:function(){this.$refs.searchForm.resetFields()}}},N=L,E=(a("ba7a"),Object(b["a"])(N,i,r,!1,null,null,null));t["default"]=E.exports},e3c7:function(e,t,a){}}]);