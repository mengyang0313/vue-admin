(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fffd3160"],{"097e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("addApp","")}}},[e._v("+ 新增应用")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"id",label:"应用Id",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"appStr",label:"应用APP",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):2===t.row.app.os?a("span",[a("i",{staticClass:"icon-pingguo"})]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"appKey",label:"应用key",align:"center",width:"190"}}),a("el-table-column",{attrs:{prop:"enable",label:"是否启用",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"scope.row.enable"}})]}}])}),a("el-table-column",{attrs:{prop:"isAnchor",label:"是否为主播端",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.isAnchor,callback:function(a){e.$set(t.row,"isAnchor",a)},expression:"scope.row.isAnchor"}})]}}])}),a("el-table-column",{attrs:{prop:"areaNames",label:"启用的区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"bundleId",label:"包名",align:"center",width:"150","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"storeCred",label:"store cred",align:"center",width:"170","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"apiAddr",label:"api地址",align:"center",width:"170","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"note",label:"备注",align:"center",width:"120","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"220",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("commodityConfig",t.row)}}},[e._v("配置商品")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("version",t.row)}}},[e._v("版本")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("addApp",t.row)}}},[e._v("更新")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("delPay",t.row)}}},[e._v("删除")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("addApp",{ref:"addApp",on:{fetchData:e.fetchData}}),a("commodityConfig",{ref:"commodityConfig",on:{fetchData:e.fetchData}}),a("version",{ref:"version",on:{fetchData:e.fetchData}})],1)],1)},l=[],r=(a("ac1f"),a("841c"),a("159b"),a("a15b"),a("333d")),o=a("528b"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"系统类型",prop:"osType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.osType,callback:function(t){e.$set(e.form,"osType",t)},expression:"form.osType"}},e._l(e.osTypeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"应用key",prop:"appKey",hidden:e.isHiddenAppKey}},[a("el-input",{attrs:{placeholder:"请输入",disabled:""},model:{value:e.form.appKey,callback:function(t){e.$set(e.form,"appKey",t)},expression:"form.appKey"}})],1),a("el-form-item",{attrs:{label:"应用名称",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"包名",prop:"bundleId"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.bundleId,callback:function(t){e.$set(e.form,"bundleId",t)},expression:"form.bundleId"}})],1),a("el-form-item",{attrs:{label:"启用的区域",prop:"areaIds"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.areaIds,callback:function(t){e.$set(e.form,"areaIds",t)},expression:"form.areaIds"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("el-switch",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}})],1),a("el-form-item",{attrs:{label:"是否为主播端",prop:"isAnchor"}},[a("el-switch",{model:{value:e.form.isAnchor,callback:function(t){e.$set(e.form,"isAnchor",t)},expression:"form.isAnchor"}})],1),a("el-form-item",{attrs:{label:"api地址",prop:"apiAddr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.apiAddr,callback:function(t){e.$set(e.form,"apiAddr",t)},expression:"form.apiAddr"}})],1),a("el-form-item",{attrs:{label:"store cred",prop:"storeCred"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入内容","show-word-limit":""},model:{value:e.form.storeCred,callback:function(t){e.$set(e.form,"storeCred",t)},expression:"form.storeCred"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},s=[],c=a("7139"),p=(a("f3e4"),a("cebe"),{data:function(){return{form:{},dialogVisible:!1,title:"新增应用",iconArr:[],iconDialog:!1,isHiddenAppKey:!0,areaList:Object(c["e"])(),appList:Object(c["c"])(),osTypeList:Object(c["v"])(),payTypeList:Object(c["y"])(),rules:{osType:[{required:!0,message:"内容不能为空",trigger:"change"}],appKey:[{required:!0,message:"内容不能为空",trigger:"change"}],title:[{required:!0,message:"内容不能为空",trigger:"change"}],bundleId:[{required:!0,message:"内容不能为空",trigger:"change"}],areaIds:[{required:!0,message:"内容不能为空",trigger:"change"}],enable:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){"undefined"!=typeof e.id&&(this.title="编辑应用",this.form=e,this.isHiddenAppKey=!1)},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(a){var i=e.form;e.$service.config.saveApp(i,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}}),u=p,d=(a("6326"),a("2877")),f=Object(d["a"])(u,n,s,!1,null,null,null),m=f.exports,b=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"版本",visible:e.dialogVisible,"append-to-body":"",width:"80%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"table-classic-wrapper dialog-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"app",label:"来源App",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"code",label:"版本号",align:"center",width:"90"}}),a("el-table-column",{attrs:{prop:"name",label:"版本名称",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.editable?[a("el-input",{staticStyle:{width:"140px"},model:{value:i.name,callback:function(t){e.$set(i,"name",t)},expression:"row.name"}}),a("el-button",{staticClass:"cancel-btn",attrs:{type:"text"},on:{click:function(t){return e.cancelEdit(i)}}},[e._v("取消")])]:a("span",[e._v(e._s(i.name))])]}}])}),a("el-table-column",{attrs:{prop:"enable",label:"是否启用",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"scope.row.enable"}})]}}])}),a("el-table-column",{attrs:{prop:"inReview",label:"是否审核中",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.inReview,callback:function(a){e.$set(t.row,"inReview",a)},expression:"scope.row.inReview"}})]}}])}),a("el-table-column",{attrs:{prop:"note",label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.editable?[a("el-input",{staticStyle:{width:"420px"},model:{value:i.note,callback:function(t){e.$set(i,"note",t)},expression:"row.note"}}),a("el-button",{staticClass:"cancel-btn",attrs:{type:"text"},on:{click:function(t){return e.cancelEdit(i)}}},[e._v("取消")])]:a("span",[e._v(e._s(i.note))])]}}])}),a("el-table-column",{attrs:{prop:"createdAt",label:"创建时间",align:"center",width:"200"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.enable(i)}}},[e._v("启用")]),i.editable?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.confirmEdit(i)}}},[e._v("保存\n                    ")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){i.editable=!i.editable}}},[e._v("编辑\n                    ")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData}})],1)])},g=[],v={name:"Table",components:{Pagination:r["a"]},data:function(){return{listLoading:!0,search:{appId:void 0,page:{currentPage:1,pageSize:10}},tableData:{},total:0,dialogVisible:!1,areaData:Object(c["e"])(),appList:Object(c["c"])(),messageTypeList:Object(c["s"])()}},methods:{init:function(e){this.search.appId=e.id,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.$service.config.getVersionList(this.search,(function(t){var a=t.getVersionsList(),i=[];a.forEach((function(t,a){var l={id:t.getId(),appId:t.getAppId(),app:Object(c["d"])(e.appList,t.getAppId()),osType:t.getOsType(),code:t.getCode(),name:t.getName(),enable:t.getEnable(),inReview:t.getInReview(),note:t.getNote(),editable:!1};i.push(l)})),e.total=a.length,e.tableData=i,e.listLoading=!1}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},enable:function(e){e.enable=!0},cancelEdit:function(e){e.hobby=e.originalHobby,e.editable=!1},confirmEdit:function(e){e.editable=!1,e.originalHobby=e.hobby;var t=this;this.$service.config.saveVersion(e,(function(e){e?t.$message.success("保存成功!"):t.$message.error("保存失败!")}))}}},y=v,w=(a("f0bf"),Object(d["a"])(y,h,g,!1,null,null,null)),x=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"",visible:e.dialogVisible,"append-to-body":"","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},e._l(e.areaList,(function(t){return a("el-button",{key:t.value,attrs:{label:t.label,value:t.value},on:{click:e.closeDialog}},[a("router-link",{attrs:{to:{path:"./commodity",query:{appId:e.appId,areaId:t.value,appName:e.appName}}}},[e._v(e._s(t.label))])],1)})),1)},I=[],_={data:function(){return{areaList:[],appId:void 0,appName:void 0,dialogVisible:!1}},methods:{init:function(e){var t=[];Object(c["e"])().forEach((function(a){e.areaIds.indexOf(a.value)>=0&&t.push(a)})),this.areaList=t,this.appId=e.id,this.appName=e.app.label},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},$=_,A=(a("56a2"),Object(d["a"])($,k,I,!1,null,null,null)),D=A.exports,L={components:{Pagination:r["a"],imageShow:o["a"],addPay:b["a"],version:x,commodityConfig:D,addApp:m},data:function(){return{listLoading:!0,search:{areaId:Object(c["n"])(),page:{currentPage:1,pageSize:10}},total:0,isCollapse:!0,areaList:Object(c["e"])(),payTypeList:Object(c["y"])(),appList:Object(c["c"])()}},created:function(){this.changeArea(this.search.areaId),this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.config.getAppList(this.search,(function(t){var a=t.getAppsList(),i=[];a.forEach((function(t,a){var l={id:t.getId(),app:Object(c["d"])(e.appList,t.getId()),appKey:t.getAppKey(),enable:t.getEnable(),title:t.getTitle(),osType:t.getOsType(),isAnchor:t.getIsAnchor(),bundleId:t.getBundleId(),storeCred:t.getStoreCred(),apiAddr:t.getApiAddr(),note:t.getNote(),areaIds:t.getAreaIdsList(),areaNames:e.handleAreaNames(t.getAreaIdsList()).join(", ")};i.push(l)})),e.total=10,e.tableData=i,e.listLoading=!1}))},handleAreaNames:function(e){var t=[];return this.areaList.forEach((function(a){e.indexOf(a.value)>=0&&t.push(a.label)})),t},onSearch:function(){this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},resetForm:function(){this.$refs.searchForm.resetFields()}}},S=L,T=(a("1d89"),Object(d["a"])(S,i,l,!1,null,null,null));t["default"]=T.exports},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1d89":function(e,t,a){"use strict";a("9387")},"3d31":function(e,t,a){},"502f":function(e,t,a){},"56a2":function(e,t,a){"use strict";a("6d2f")},6326:function(e,t,a){"use strict";a("3d31")},"6d2f":function(e,t,a){},"73d4":function(e,t,a){},"841c":function(e,t,a){"use strict";var i=a("d784"),l=a("825a"),r=a("1d80"),o=a("129f"),n=a("577e"),s=a("14c3");i("search",(function(e,t,a){return[function(t){var a=r(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](n(a))},function(e){var i=l(this),r=n(e),c=a(t,i,r);if(c.done)return c.value;var p=i.lastIndex;o(p,0)||(i.lastIndex=0);var u=s(i,r);return o(i.lastIndex,p)||(i.lastIndex=p),null===u?-1:u.index}]}))},"8c4f":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.form.areaId,callback:function(t){e.$set(e.form,"areaId",t)},expression:"form.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"系统类型",prop:"osType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.osType,callback:function(t){e.$set(e.form,"osType",t)},expression:"form.osType"}},e._l(e.osTypeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"支付方式",prop:"payType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.payType,callback:function(t){e.$set(e.form,"payType",t)},expression:"form.payType"}},e._l(e.payTypeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"支付渠道",prop:"channel"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.channel,callback:function(t){e.$set(e.form,"channel",t)},expression:"form.channel"}})],1),a("el-form-item",{attrs:{label:"渠道名称(后台)",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"渠道名称(客户端)",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"支付平台图标",prop:"icon"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:1,"on-preview":e.previewIcon,"on-change":e.successIcon,"list-type":"picture-card","file-list":e.iconArr,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.iconDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(t){e.iconDialog=t}}},[a("img",{attrs:{width:"100%",src:e.form.icon,alt:""}})])],1),a("div",{staticClass:"imgSpan2"},[e._v("只能上传jpg/png文件，50X50px")])]),a("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("el-switch",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}})],1),a("el-form-item",{attrs:{label:"折扣",prop:"discount"}},[a("el-input-number",{attrs:{min:0,max:100},model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}}),e._v("\n                 %\n            ")],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{attrs:{precision:0,min:1},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},l=[],r=a("7139"),o=a("f3e4"),n=a("cebe"),s=a.n(n),c={data:function(){return{form:{areaId:Object(r["n"])()},dialogVisible:!1,title:"新增支付",iconArr:[],iconDialog:!1,areaList:Object(r["e"])(),appList:Object(r["c"])(),osTypeList:Object(r["v"])(),payTypeList:Object(r["y"])(),rules:{areaId:[{required:!0,message:"内容不能为空",trigger:"change"}],osType:[{required:!0,message:"内容不能为空",trigger:"blur"}],payType:[{required:!0,message:"内容不能为空",trigger:"blur"}],sort:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},methods:{init:function(e){"undefined"!=typeof e.id&&(this.title="编辑国家",this.form=e,this.iconArr.push({url:e.icon}))},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(a){var i=e.form;e.$service.config.savePayChannel(i,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},previewIcon:function(e){this.iconDialog=!0},successIcon:function(e){var t=this;this.imgUpload(e.raw,1,(function(e){t.form.icon=e.uri}))},imgUpload:function(e,t,a){var i={"Content-Type":"multipart/form-data",token:Object(o["a"])(),"area-id":1,"file-type":t},l=new FormData;l.append("file",e),s()({url:"http://101.33.118.232:8101/file/upload",method:"post",data:l,headers:i}).then((function(e){var t=e.data;a(t)}))}}},p=c,u=(a("a18e"),a("2877")),d=Object(u["a"])(p,i,l,!1,null,null,null);t["a"]=d.exports},9387:function(e,t,a){},a15b:function(e,t,a){"use strict";var i=a("23e7"),l=a("44ad"),r=a("fc6a"),o=a("a640"),n=[].join,s=l!=Object,c=o("join",",");i({target:"Array",proto:!0,forced:s||!c},{join:function(e){return n.call(r(this),void 0===e?",":e)}})},a18e:function(e,t,a){"use strict";a("502f")},a9e3:function(e,t,a){"use strict";var i=a("83ab"),l=a("da84"),r=a("94ca"),o=a("6eeb"),n=a("5135"),s=a("c6b6"),c=a("7156"),p=a("d9b5"),u=a("c04e"),d=a("d039"),f=a("7c73"),m=a("241c").f,b=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,v="Number",y=l[v],w=y.prototype,x=s(f(w))==v,k=function(e){if(p(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,i,l,r,o,n,s,c=u(e,"number");if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,l=49;break;case 79:case 111:i=8,l=55;break;default:return+c}for(r=c.slice(2),o=r.length,n=0;n<o;n++)if(s=r.charCodeAt(n),s<48||s>l)return NaN;return parseInt(r,i)}return+c};if(r(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,_=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof _&&(x?d((function(){w.valueOf.call(a)})):s(a)!=v)?c(new y(k(t)),a,_):k(t)},$=i?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;$.length>A;A++)n(y,I=$[A])&&!n(_,I)&&h(_,I,b(y,I));_.prototype=w,w.constructor=_,o(l,v,_)}},f0bf:function(e,t,a){"use strict";a("73d4")}}]);