(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a6a9580"],{1276:function(t,e,a){"use strict";var i=a("d784"),r=a("44e7"),o=a("825a"),n=a("1d80"),l=a("4840"),s=a("8aa5"),c=a("50c4"),d=a("577e"),u=a("14c3"),p=a("9263"),f=a("9f7f"),h=a("d039"),m=f.UNSUPPORTED_Y,g=[].push,b=Math.min,v=4294967295,I=!h((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));i("split",(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=d(n(this)),o=void 0===a?v:a>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);var l,s,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,f+"g");while(l=p.call(m,i)){if(s=m.lastIndex,s>h&&(u.push(i.slice(h,l.index)),l.length>1&&l.index<i.length&&g.apply(u,l.slice(1)),c=l[0].length,h=s,u.length>=o))break;m.lastIndex===l.index&&m.lastIndex++}return h===i.length?!c&&m.test("")||u.push(""):u.push(i.slice(h)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=n(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,r,a):i.call(d(r),e,a)},function(t,r){var n=o(this),p=d(t),f=a(i,n,p,r,i!==e);if(f.done)return f.value;var h=l(n,RegExp),g=n.unicode,I=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(m?"g":"y"),y=new h(m?"^(?:"+n.source+")":n,I),w=void 0===r?v:r>>>0;if(0===w)return[];if(0===p.length)return null===u(y,p)?[p]:[];var S=0,k=0,D=[];while(k<p.length){y.lastIndex=m?0:k;var x,_=u(y,m?p.slice(k):p);if(null===_||(x=b(c(y.lastIndex+(m?k:0)),p.length))===S)k=s(p,k,g);else{if(D.push(p.slice(S,k)),D.length===w)return D;for(var $=1;$<=_.length-1;$++)if(D.push(_[$]),D.length===w)return D;k=S=x}}return D.push(p.slice(S)),D}]}),!I,m)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"655f":function(t,e,a){},"841c":function(t,e,a){"use strict";var i=a("d784"),r=a("825a"),o=a("1d80"),n=a("129f"),l=a("577e"),s=a("14c3");i("search",(function(t,e,a){return[function(e){var a=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](l(a))},function(t){var i=r(this),o=l(t),c=a(e,i,o);if(c.done)return c.value;var d=i.lastIndex;n(d,0)||(i.lastIndex=0);var u=s(i,o);return n(i.lastIndex,d)||(i.lastIndex=d),null===u?-1:u.index}]}))},"8c43":function(t,e,a){"use strict";a("90f2")},"90f2":function(t,e,a){},"9ae9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"control-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.toDialog("editRobot","")}}},[t._v("+ 新增机器人")])],1),a("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:t.search,"label-width":"90px"}},[[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:0!==t.authAreaId,placeholder:"请选择"},model:{value:t.search.areaId,callback:function(e){t.$set(t.search,"areaId",e)},expression:"search.areaId"}},t._l(t.areaData,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"状态",prop:"enable"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.search.enable,callback:function(e){t.$set(t.search,"enable",e)},expression:"search.enable"}},t._l(t.bools,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"机器人ID",prop:"robotId"}},[a("el-input",{attrs:{placeholder:"机器人主播ID"},model:{value:t.search.robotId,callback:function(e){t.$set(t.search,"robotId",e)},expression:"search.robotId"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"small"},on:{click:t.onSearch}},[t._v("查  询")])],1)]],2),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"anchorId",label:"机器人ID",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{disabled:""},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{prop:"areaStr",label:"区域",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"appStr",label:"应用APP",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                        "+t._s(e.row.app.label)+"\n                        "),1===e.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):2===e.row.app.os?a("span",[a("i",{staticClass:"icon-pingguo"})]):t._e()])]}}])}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.contain,src:e.row.avatar,"preview-src-list":[e.row.avatar]}})]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center",width:"400"}}),a("el-table-column",{attrs:{prop:"data",label:"动态",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"}},[a("router-link",{attrs:{to:{path:"./robot-dynamic",query:{robotId:e.row.anchorId,nickname:e.row.nickname}}}},[t._v(" 查看 ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"words",label:"对话",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticStyle:{color:"#1E88C7"},on:{click:function(a){return t.toDialog("showDialog",e.row.anchorId)}}},[t._v("查看")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.toDialog("editRobot",e.row)}}},[t._v("编辑资料")]),a("el-button",{attrs:{type:"text"}},[a("router-link",{attrs:{to:{path:"./robot-message",query:{robotId:e.row.anchorId,nickname:e.row.nickname}}}},[t._v("编辑话术")])],1)]}}])})],1),a("Pagination",{attrs:{total:t.total,page:t.search.currentPage,limit:t.search.pageSize},on:{"update:page":function(e){return t.$set(t.search,"currentPage",e)},"update:limit":function(e){return t.$set(t.search,"pageSize",e)},pagination:t.fetchData,changePageSize:function(e){return t.changePageSize(e)}}}),a("editRobot",{ref:"editRobot",on:{fetchData:t.fetchData}}),a("showDialog",{ref:"showDialog",on:{fetchData:t.fetchData}})],1)],1)},r=[],o=(a("ac1f"),a("841c"),a("159b"),a("333d")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,"modal-append-to-body":!1,"append-to-body":"",width:"50%","before-close":t.closeDialog},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"form-list-wrapper"},[a("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:t.form,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"区域",prop:"areaId"}},[a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.form.areaId,callback:function(e){t.$set(t.form,"areaId",e)},expression:"form.areaId"}},t._l(t.areaData,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"应用App",prop:"appId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.appId,callback:function(e){t.$set(t.form,"appId",e)},expression:"form.appId"}},t._l(t.appList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),1===e.os?a("span",[a("i",{staticClass:"icon-android-fill",staticStyle:{float:"right"}})]):2===e.os?a("span",[a("i",{staticClass:"icon-pingguo",staticStyle:{float:"right"}})]):t._e(),e.isAnchor?a("span",[a("i",{staticClass:"iconfont icon-zhuboguanli",staticStyle:{float:"right"}})]):t._e()])})),1)],1),0==typeof t.form.anchorId?a("el-form-item",{attrs:{label:"ID",prop:"anchorId"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.robotId,callback:function(e){t.$set(t.form,"robotId",e)},expression:"form.robotId"}})],1):t._e(),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:1,"on-preview":t.previewAvatar,"on-change":t.successAvatar,"list-type":"picture-card","file-list":t.avatarArr,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.avatarDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(e){t.avatarDialog=e}}},[a("img",{attrs:{width:"100%",src:t.form.avatar,alt:""}})])],1),a("div",{staticClass:"imgSpan2"},[t._v("只能上传jpg/png文件，50X50px")])]),a("el-form-item",{attrs:{label:"出生日期",prop:"birthday"}},[a("el-date-picker",{staticStyle:{width:"35%"},attrs:{type:"date",placeholder:"出生日期"},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1),a("el-form-item",{attrs:{label:"职业",prop:"occupation"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}},t._l(t.occupationTypes,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"经常在线",prop:"onlineStart"}},[a("el-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"00:00",step:"01:00",end:"23:00"}},model:{value:t.form.onlineStart,callback:function(e){t.$set(t.form,"onlineStart",e)},expression:"form.onlineStart"}}),a("el-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"01:00",step:"01:00",end:"24:00",minTime:t.form.onlineStart}},model:{value:t.form.onlineEnd,callback:function(e){t.$set(t.form,"onlineEnd",e)},expression:"form.onlineEnd"}})],1),a("el-form-item",{attrs:{label:"签名",prop:"signature"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.signature,callback:function(e){t.$set(t.form,"signature",e)},expression:"form.signature"}})],1),a("el-form-item",{attrs:{label:"是否启用",prop:"status"}},[a("el-switch",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),a("el-form-item",{attrs:{label:"图片",prop:"photoIds"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:10,"on-preview":t.previewPhoto,"on-change":t.successPhoto,"on-remove":t.removePhoto,"list-type":"picture-card","file-list":t.form.photoUris,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.photoDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(e){t.photoDialog=e}}},[a("img",{attrs:{width:"100%",src:t.form.video,alt:""}})])],1)]),a("el-form-item",{attrs:{label:"视频",prop:"videoIds"}},[a("div",{staticClass:"img"},[a("el-upload",{attrs:{action:"",limit:10,"on-preview":t.previewVideo,"on-change":t.successVideo,"on-remove":t.removeVideo,"list-type":"picture-card","file-list":t.form.videoUris,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.videoDialog,"modal-append-to-body":!0,"append-to-body":""},on:{"update:visible":function(e){t.videoDialog=e}}},[a("img",{attrs:{width:"100%",src:t.form.video,alt:""}})])],1)]),a("el-form-item",{staticClass:"submit-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("确   定")]),a("el-button",{on:{click:function(e){return t.resetForm()}}},[t._v("重   置")])],1)],1)],1)])},l=[],s=(a("1276"),a("b0c0"),a("a434"),a("f3e4")),c=a("7139"),d=a("cebe"),u=a.n(d),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img"},[a("el-upload",{ref:"uploadImage",attrs:{action:"",accept:".jpg, .png, .bmp, .jpeg, .webp","list-type":"picture-card",multiple:!1,"show-file-list":!1,"auto-upload":!1,"on-change":t.handleChange}},[a("i",{staticClass:"el-icon-plus"}),a("el-dialog",{attrs:{"modal-append-to-body":!0,"append-to-body":""}},[a("img",{attrs:{width:"100%",alt:""}})])],1)],1)},f=[],h={name:"UploadImage",props:{btnName:{type:String,default:"选择图片"}},methods:{handleChange:function(t){var e=t.raw;return!!e&&(this.isImage(e)?void(this.isLimit5M(e)&&(this.$emit("on-success",e),this.$refs.uploadImage.clearFiles())):(this.$message.warning("图片只支持.jpg, .png, .bmp, .jpeg, .webp格式!"),!1))},isLimit5M:function(t){var e=t.size/1024/1024<5;return!!e||(this.$message.warning("上传的图片大小不能超过5M!"),!1)},isImage:function(t){return/\.(jpg|png|bmp|jpeg|webp)$/.test(t.name)}}},m=h,g=a("2877"),b=Object(g["a"])(m,p,f,!1,null,null,null),v=b.exports,I={components:{ImgUpdate:v},data:function(){return{form:{id:0,anchorId:0,nickname:"",avatar:"",areaId:Object(c["n"])(),appId:"",birthday:"",occupation:"",onlineStart:"",onlineEnd:"",signature:"",photoIds:[],photos:[],photoUris:[],videoIds:[],videos:[],status:!0,struct:""},title:"新增机器人",dialogImageUrl:"",dialogVisible:!1,avatarDialog:!1,photoDialog:!1,videoDialog:!1,areaData:Object(c["e"])(),occupationTypes:Object(c["t"])(),appList:Object(c["c"])(),avatarArr:[],rules:{nickname:[{required:!0,message:"内容不能为空",trigger:"change"}],areaId:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;"undefined"!=typeof t.anchorId?(this.title="编辑机器人",this.form=t,this.form.birthday=1e3*t.birthday,this.form.onlineStart=t.onlineStart+":00",this.form.onlineEnd=t.onlineEnd+":00",this.avatarArr.push({url:t.avatar}),this.form.photoUris=[],this.form.photos.forEach((function(t){e.form.photoUris.push({name:t.getId(),url:t.getUri()})})),this.form.videoUris=[],this.form.videos.forEach((function(t){e.form.videoUris.push({name:t.getId(),url:t.getUri()})}))):this.changeArea(this.form.areaId)},submitForm:function(){var t=this,e=this;this.$refs.ruleForm.validate((function(a){if(a){var i=t.form;i.onlineStart=parseInt(t.form.onlineStart.split(":")[0]),i.onlineEnd=parseInt(t.form.onlineEnd.split(":")[0]),i.birthday=t.form.birthday/1e3,i.status=t.form.status?5:6,t.$service.robot.saveRobot(i,(function(t){t?(e.$message.success("保存成功!"),e.closeDialog()):e.$message.error("保存失败!")}))}}))},resetForm:function(){this.form.photoIds=[],this.form.photos=[],this.form.photoUris=[],this.form.videoIds=[],this.form.videos=[],this.form.videoUris=[],this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.avatarArr=[],this.resetForm(),this.$emit("fetchData")},previewAvatar:function(t){this.avatarDialog=!0},previewPhoto:function(t){this.photoDialog=!0},previewVideo:function(t){this.videoDialog=!0},successAvatar:function(t){var e=this;this.imgUpload(t.raw,1,(function(t){e.form.avatar=t.uri}))},successPhoto:function(t){var e=this;this.imgUpload(t.raw,1,(function(t){e.form.photoIds.push(t.id)}))},successVideo:function(t){var e=this;this.imgUpload(t.raw,2,(function(t){e.form.videoIds.push(t.id),e.form.video=t.id}))},removePhoto:function(t,e){for(var a=this.form.photoIds,i=t.name,r=0;r<a.length;r++)if(a[r]===i){a.splice(r,1);break}},removeVideo:function(t,e){for(var a=this.form.videoIds,i=t.name,r=0;r<a.length;r++)if(a[r]===i){a.splice(r,1);break}},imgUpload:function(t,e,a){var i={"Content-Type":"multipart/form-data",token:Object(s["a"])(),"area-id":1,"file-type":e},r=new FormData;r.append("file",t),u()({url:"http://101.33.118.232:8101/file/upload",method:"post",data:r,headers:i}).then((function(t){var e=t.data;a(e)}))},changeArea:function(t){var e=Object(c["f"])(t);e.splice(0),this.appList=e}}},y=I,w=(a("8c43"),Object(g["a"])(y,n,l,!1,null,null,null)),S=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"对话",visible:t.dialogVisible,"append-to-body":"",width:"80%","before-close":t.closeDialog},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"table-classic-wrapper"},[a("el-card",{attrs:{shadow:"always"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",size:"medium"}},[a("el-table-column",{attrs:{prop:"app",label:"来源App",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n                            "+t._s(e.row.app.label)+"\n                            "),1===e.row.app.os?a("span",[a("i",{staticClass:"icon-android-fill"})]):a("span",[a("i",{staticClass:"icon-pingguo"})])])]}}])}),a("el-table-column",{attrs:{prop:"userId",label:"用户id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"directionStr",label:"消息方向",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"anchorId",label:"主播id",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"消息类型",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.type))])],1)]}}])}),a("el-table-column",{attrs:{prop:"text",label:"私信内容",align:"center"}}),a("el-table-column",{attrs:{prop:"sendAt",label:"发送时间",align:"center",width:"220"}})],1),a("Pagination",{attrs:{total:t.total,page:t.search.page.currentPage,limit:t.search.page.pageSize},on:{"update:page":function(e){return t.$set(t.search.page,"currentPage",e)},"update:limit":function(e){return t.$set(t.search.page,"pageSize",e)},pagination:t.fetchData}})],1)],1)])},D=[],x=a("c466"),_={name:"Table",components:{Pagination:o["a"]},data:function(){return{listLoading:!0,search:{areaId:void 0,userId:void 0,anchorId:void 0,appId:void 0,direction:0,type:void 0,keyword:void 0,createdStart:void 0,createdEnd:void 0,page:{currentPage:1,pageSize:10}},tableData:{},total:0,dialogVisible:!1,areaData:Object(c["e"])(),appList:Object(c["c"])(),messageTypeList:Object(c["s"])()}},methods:{init:function(t){this.search.anchorId=t,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,this.$service.chat.getChatMessageList(this.handleParam(),(function(e){var a=e.getMessagesList(),i=[];a.forEach((function(e,a){var r={id:e.getId(),appId:e.getAppId(),app:Object(c["d"])(t.appList,e.getAppId()),userId:e.getUserId(),direction:e.getDirection(),directionStr:1===e.getDirection()?"<--":"--\x3e",anchorId:e.getAnchorId(),type:Object(c["s"])(e.getType()),text:e.getText(),uri:e.getUri(),sendAt:Object(x["c"])(e.getSendAt())};i.push(r)})),t.total=e.getTotalCount(),t.tableData=i,t.listLoading=!1}))},handleParam:function(){var t=this.search;return"undefined"!=typeof this.search.createdStart&&(t.createdStartUint=this.search.createdStart.getTime()/1e3),"undefined"!=typeof this.search.createdEnd&&(t.createdEndUint=this.search.createdEnd.getTime()/1e3),t},resetForm:function(){this.$refs.ruleForm.resetFields()},closeDialog:function(){this.dialogVisible=!1,this.resetForm(),this.$emit("fetchData")}}},$=_,E=(a("f26d"),Object(g["a"])($,k,D,!1,null,null,null)),A=E.exports,C={components:{Pagination:o["a"],editRobot:S,showDialog:A},data:function(){return{listLoading:!0,search:{areaId:Object(c["n"])(),enable:!0,robotId:void 0,page:{currentPage:1,pageSize:10}},total:0,authAreaId:Object(c["n"])(),isSubmit:!1,areaData:Object(c["e"])(),appList:[],bools:Object(c["j"])()}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,this.$service.robot.getRobotList(this.search,(function(e){var a=e.getRobotsList(),i=[];a.forEach((function(e,a){var r={appId:e.getAppId(),app:Object(c["d"])(Object(c["f"])(t.search.areaId,!1),e.getAppId()),anchorId:e.getAnchorId(),status:t.handleStatus(e.getStatus()),areaId:e.getAreaId(),areaStr:Object(c["g"])(t.areaData,e.getAreaId()),nickname:e.getNickname(),avatar:e.getAvatar(),birthday:e.getBirthday(),occupation:e.getOccupation(),onlineStart:e.getOnlineStart(),onlineEnd:e.getOnlineEnd(),signature:e.getSignature(),photoIds:e.getPhotoIdsList(),photos:e.getPhotosList(),videoIds:e.getVideoIdsList(),videos:e.getVideosList(),struct:e};i.push(r)})),t.total=e.getTotalCount(),t.tableData=i,t.listLoading=!1}))},onSearch:function(){this.search.currentPage=1,this.fetchData()},toDialog:function(t,e){var a=this;this.$refs[t].dialogVisible=!0,this.$nextTick((function(){a.$refs[t].init(e)}))},handleStatus:function(t){return 5===t},resetForm:function(){this.$refs.searchForm.resetFields()},changePageSize:function(t){this.search.page.pageSize=t.limit}}},j=C,O=(a("f43b"),Object(g["a"])(j,i,r,!1,null,null,null));e["default"]=O.exports},a03a:function(t,e,a){},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),o=a("94ca"),n=a("6eeb"),l=a("5135"),s=a("c6b6"),c=a("7156"),d=a("d9b5"),u=a("c04e"),p=a("d039"),f=a("7c73"),h=a("241c").f,m=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,v="Number",I=r[v],y=I.prototype,w=s(f(y))==v,S=function(t){if(d(t))throw TypeError("Cannot convert a Symbol value to a number");var e,a,i,r,o,n,l,s,c=u(t,"number");if("string"==typeof c&&c.length>2)if(c=b(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=c.slice(2),n=o.length,l=0;l<n;l++)if(s=o.charCodeAt(l),s<48||s>r)return NaN;return parseInt(o,i)}return+c};if(o(v,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var k,D=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof D&&(w?p((function(){y.valueOf.call(a)})):s(a)!=v)?c(new I(S(e)),a,D):S(e)},x=i?h(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;x.length>_;_++)l(I,k=x[_])&&!l(D,k)&&g(D,k,m(I,k));D.prototype=y,y.constructor=D,n(r,v,D)}},c466:function(t,e,a){"use strict";function i(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd")}function r(t){return 0===t?"":new Date(1e3*t).format("yyyy-MM-dd hh:mm:ss")}function o(t){return"undefined"==typeof t&&(t=new Date),t.format("yyyy-MM-dd")}a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o}))},f26d:function(t,e,a){"use strict";a("a03a")},f43b:function(t,e,a){"use strict";a("655f")}}]);