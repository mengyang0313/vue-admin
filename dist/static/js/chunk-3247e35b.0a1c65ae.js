(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3247e35b"],{"0af3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-classic-wrapper"},[a("Hints",{attrs:{hidden:e.isHints}},[a("template",{slot:"hintName"},[e._v(" 配置 < "+e._s(e.search.appName)+" > 商品")])],2),a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toDialog("addCommodity","")}}},[e._v("+ 新增商品")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.search,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},on:{change:e.changeArea},model:{value:e.search.areaId,callback:function(t){e.$set(e.search,"areaId",t)},expression:"search.areaId"}},e._l(e.areaList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"应用",prop:"appId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.appId,callback:function(t){e.$set(e.search,"appId",t)},expression:"search.appId"}},e._l(e.appList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),1===t.os?a("span",[a("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===t.os?a("span",[a("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):e._e()])})),1)],1),a("el-form-item",{attrs:{label:"是否为订阅"}},[a("el-switch",{model:{value:e.search.isSubscription,callback:function(t){e.$set(e.search,"isSubscription",t)},expression:"search.isSubscription"}})],1),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:e.onSearch}},[e._v("查  询")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"title",label:"商品名称",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称(客户端)",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"app",label:"APP",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                        "+e._s(t.row.app.label)+"\n                        "),1===t.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):2===t.row.app.os?a("span",[a("i",{staticClass:"icon-pingguo"})]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"enable",label:"是否启用",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"scope.row.enable"}})]}}])}),a("el-table-column",{attrs:{prop:"sku",label:"sku",align:"center",width:"190"}}),a("el-table-column",{attrs:{prop:"price",label:"价格",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"discount",label:"客户端显示折扣",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:e.contain,src:t.row.icon,"preview-src-list":[t.row.icon]}})]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"充值数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"bonus",label:"奖励数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"isFirstReward",label:"是否首次双倍",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:""},model:{value:t.row.isFirstReward,callback:function(a){e.$set(t.row,"isFirstReward",a)},expression:"scope.row.isFirstReward"}})]}}])}),a("el-table-column",{attrs:{prop:"vipDays",label:"vip天数",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"120"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"180",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("addCommodity",t.row)}}},[e._v("更新")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.toDialog("delPay",t.row)}}},[e._v("删除")])]}}])})],1),a("Pagination",{attrs:{total:e.total,page:e.search.page.currentPage,limit:e.search.page.pageSize},on:{"update:page":function(t){return e.$set(e.search.page,"currentPage",t)},"update:limit":function(t){return e.$set(e.search.page,"pageSize",t)},pagination:e.fetchData,changePageSize:function(t){return e.changePageSize(t)}}}),a("addCommodity",{ref:"addCommodity",on:{fetchData:e.fetchData}})],1)],1)},r=[],n=(a("ac1f"),a("841c"),a("a9e3"),a("159b"),a("333d")),s=a("528b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"append-to-body":"",width:"50%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"应用",prop:"appId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}},e._l(e.appList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),1===t.os?a("span",[a("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===t.os?a("span",[a("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):e._e(),t.isAnchor?a("span",[a("i",{staticClass:"iconfont icon-zhuboguanli",staticStyle:{float:"right"}})]):e._e()])})),1)],1),a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:0!==e.authAreaId,placeholder:"请选择"},model:{value:e.form.areaId,callback:function(t){e.$set(e.form,"areaId",t)},expression:"form.areaId"}},e._l(e.areaList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))])])})),1)],1),a("el-form-item",{attrs:{label:"商品名称",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"商品名称(客户端)",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"sku",prop:"sku"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.sku,callback:function(t){e.$set(e.form,"sku",t)},expression:"form.sku"}})],1),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}),e._v("\n                 美分\n            ")],1),a("el-form-item",{attrs:{label:"客户端显示折扣",prop:"discount"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}}),e._v("\n                 %\n            ")],1),a("el-form-item",{attrs:{label:"充值数量",prop:"amount"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),a("el-form-item",{attrs:{label:"奖励数量",prop:"bonus"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.bonus,callback:function(t){e.$set(e.form,"bonus",t)},expression:"form.bonus"}})],1),a("el-form-item",{attrs:{label:"vip天数",prop:"vipDays"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.vipDays,callback:function(t){e.$set(e.form,"vipDays",t)},expression:"form.vipDays"}})],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"图标",prop:"icon"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:1,"on-preview":e.previewIcon,"on-change":e.successIcon,"list-type":"picture-card","file-list":e.iconArr,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.iconDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(t){e.iconDialog=t}}},[a("img",{attrs:{width:"100%",src:e.form.icon,alt:""}})])],1),a("div",{staticClass:"imgSpan2"},[e._v("只能上传jpg/png文件，50X50px")])]),a("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("el-switch",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}})],1),a("el-form-item",{attrs:{label:"是否首次双倍",prop:"isFirstReward"}},[a("el-switch",{model:{value:e.form.isFirstReward,callback:function(t){e.$set(e.form,"isFirstReward",t)},expression:"form.isFirstReward"}})],1),a("el-form-item",{attrs:{label:"是否为订阅",prop:"isSubscription"}},[a("el-switch",{model:{value:e.form.isSubscription,callback:function(t){e.$set(e.form,"isSubscription",t)},expression:"form.isSubscription"}})],1),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确   定")]),a("el-button",{on:{click:e.resetForm}},[e._v("重   置")])],1)],1)],1)])},o=[],c=a("7139"),u=a("f3e4"),p=a("cebe"),d=a.n(p),f={data:function(){return{form:{enable:!0,areaId:void 0},dialogVisible:!1,title:"新增商品",authAreaId:Object(c["n"])(),iconArr:[],iconDialog:!1,areaList:Object(c["f"])(!1),appList:[],rules:{appId:[{required:!0,message:"内容不能为空",trigger:"change"}],areaId:[{required:!0,message:"内容不能为空",trigger:"change"}],name:[{required:!0,message:"内容不能为空",trigger:"change"}],price:[{required:!0,message:"内容不能为空",trigger:"change"}],amount:[{required:!0,message:"内容不能为空",trigger:"change"}]}}},methods:{init:function(e){"undefined"!=typeof e.id?(this.title="编辑商品",this.form=e,this.iconArr.push({url:e.icon})):this.form.areaId=0===this.authAreaId?this.areaList[0].value:this.authAreaId,this.changeArea(this.form.areaId)},submitForm:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(a){var i=e.form;e.$service.config.saveCommodity(i,(function(e){e?(t.$message.success("保存成功!"),t.closeDialog()):t.$message.error("保存失败!")}))}}))},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.iconArr=[],this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")},previewIcon:function(e){this.iconDialog=!0},successIcon:function(e){var t=this;this.imgUpload(e.raw,1,(function(e){t.form.icon=e.uri}))},imgUpload:function(e,t,a){var i={"Content-Type":"multipart/form-data",token:Object(u["a"])(),"area-id":1,"file-type":t},r=new FormData;r.append("file",e),d()({url:"http://101.33.118.232:8101/file/upload",method:"post",data:r,headers:i}).then((function(e){var t=e.data;a(t)}))},changeArea:function(e){this.appList=Object(c["d"])(e,!0,!1)}}},m=f,h=(a("5695"),a("2877")),g=Object(h["a"])(m,l,o,!1,null,null,null),b=g.exports,v=a("b522"),w={components:{Pagination:n["a"],Hints:v["a"],imageShow:s["a"],addCommodity:b},data:function(){return{listLoading:!0,search:{areaId:Object(c["n"])(),appId:void 0,isSubscription:!1,page:{currentPage:1,pageSize:10}},total:0,authAreaId:Object(c["n"])(),isCollapse:!0,isHints:!0,areaList:Object(c["f"])(!0),payTypeList:Object(c["A"])(),appList:Object(c["c"])()}},created:function(){this.search.areaId=0===this.authAreaId?this.areaList[1].value:this.authAreaId,this.search.appId="undefined"==typeof this.search.appId?this.appList[1].value:this.search.appId,this.changeArea(this.search.areaId),this.fetchData()},watch:{$route:{handler:function(){"undefined"!==typeof this.$route.query.appId&&(this.search.appId=Number(this.$route.query.appId),this.search.areaId=Number(this.$route.query.areaId),this.search.appName=this.$route.query.appName,this.isHints=!1,this.fetchData())},deep:!0}},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.$service.config.getCommodityList(this.search,(function(t){var a=t.getCommoditiesList(),i=[];a.forEach((function(t,a){var r={id:t.getId(),appId:t.getAppId(),app:Object(c["e"])(Object(c["d"])(e.search.areaId,!1),t.getAppId()),areaId:t.getAreaId(),areaStr:Object(c["g"])(e.areaList,t.getAreaId()),enable:t.getEnable(),title:t.getTitle(),name:t.getName(),sku:t.getSku(),price:t.getPrice(),currency:t.getCurrency(),discount:t.getDiscount(),icon:t.getIcon(),amount:t.getAmount(),bonus:t.getBonus(),isSubscription:t.getIsSubscription(),isFirstReward:t.getIsFirstReward(),vipDays:t.getVipDays(),sort:t.getSort()};i.push(r)})),e.total=a.length,e.tableData=i,e.listLoading=!1}))},handleAreaNames:function(e){var t=[];return this.areaList.forEach((function(a){e.indexOf(a.value)>=0&&t.push(a.label)})),t},onSearch:function(){this.isHints=!0,this.search.page.currentPage=1,this.fetchData()},changePageSize:function(e){this.search.page.pageSize=e.limit},toDialog:function(e,t){var a=this;this.$refs[e].dialogVisible=!0,this.$nextTick((function(){a.$refs[e].init(t)}))},resetForm:function(){this.$refs.searchForm.resetFields()},changeArea:function(e){this.appList=Object(c["d"])(e,!0)}}},y=w,I=(a("61ed"),Object(h["a"])(y,i,r,!1,null,null,null));t["default"]=I.exports},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"206f":function(e,t,a){"use strict";a("f678")},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},r=[],n=(a("a9e3"),{name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[5,10,15,20,50]}},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("changePageSize",{page:this.currentPage,limit:e}),this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),s=n,l=(a("206f"),a("2877")),o=Object(l["a"])(s,i,r,!1,null,null,null);t["a"]=o.exports},"404b":function(e,t,a){"use strict";a("de17")},"528b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"star-pic-vue"}},[e.data?[e._l(e.images,(function(t){return a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t,id:"contract_url"},on:{click:e.enlargePic}})})),e.isDialogShow?void 0:e._e(),a("el-dialog",{attrs:{visible:e.centerDialogVisible,modal:"","close-on-click-modal":"","custom-class":"dialog"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-carousel",{attrs:{autoplay:!1,arrow:"always"}},e._l(e.data,(function(e){return a("el-carousel-item",{key:e},[a("img",{attrs:{src:e}})])})),1)],1)]:e._e()],2)},r=[],n=(a("a434"),{name:"star-pic-list",props:["data","maxShow"],data:function(){return{centerDialogVisible:!1,showPic:"",isDialogShow:!1,index:0}},computed:{images:function(){return this.data instanceof Array&&this.data.length>2?this.data.splice(0,this.maxShow):this.data}},methods:{enlargePic:function(e){this.isDialogShow=!0,this.centerDialogVisible=!0,this.showPic=this.data[0],console.log(this.images)}}}),s=n,l=(a("6cd3"),a("2877")),o=Object(l["a"])(s,i,r,!1,null,null,null);t["a"]=o.exports},5695:function(e,t,a){"use strict";a("6637")},"61ed":function(e,t,a){"use strict";a("c413")},6637:function(e,t,a){},"6cd3":function(e,t,a){"use strict";a("cfaa")},"841c":function(e,t,a){"use strict";var i=a("d784"),r=a("825a"),n=a("1d80"),s=a("129f"),l=a("577e"),o=a("14c3");i("search",(function(e,t,a){return[function(t){var a=n(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](l(a))},function(e){var i=r(this),n=l(e),c=a(t,i,n);if(c.done)return c.value;var u=i.lastIndex;s(u,0)||(i.lastIndex=0);var p=o(i,n);return s(i.lastIndex,u)||(i.lastIndex=u),null===p?-1:p.index}]}))},a9e3:function(e,t,a){"use strict";var i=a("83ab"),r=a("da84"),n=a("94ca"),s=a("6eeb"),l=a("5135"),o=a("c6b6"),c=a("7156"),u=a("d9b5"),p=a("c04e"),d=a("d039"),f=a("7c73"),m=a("241c").f,h=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,v="Number",w=r[v],y=w.prototype,I=o(f(y))==v,S=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,a,i,r,n,s,l,o,c=p(e,"number");if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(n=c.slice(2),s=n.length,l=0;l<s;l++)if(o=n.charCodeAt(l),o<48||o>r)return NaN;return parseInt(n,i)}return+c};if(n(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var k,_=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof _&&(I?d((function(){y.valueOf.call(a)})):o(a)!=v)?c(new w(S(t)),a,_):S(t)},x=i?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;x.length>$;$++)l(w,k=x[$])&&!l(_,k)&&g(_,k,h(w,k));_.prototype=y,y.constructor=_,s(r,v,_)}},b522:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hints-wrapper"},[a("div",{staticClass:"hint-title"},[a("i",{staticClass:"vue-dsn-icon-tishi"}),a("span",[e._t("hintName")],2)]),a("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},r=[],n={name:"Hints"},s=n,l=(a("404b"),a("2877")),o=Object(l["a"])(s,i,r,!1,null,null,null);t["a"]=o.exports},c413:function(e,t,a){},cfaa:function(e,t,a){},de17:function(e,t,a){},f678:function(e,t,a){}}]);