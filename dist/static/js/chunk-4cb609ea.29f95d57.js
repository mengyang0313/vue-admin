(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cb609ea"],{"0b79":function(t,e,i){"use strict";i("f32c")},1148:function(t,e,i){"use strict";var n=i("a691"),s=i("1d80");t.exports="".repeat||function(t){var e=String(s(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},1276:function(t,e,i){"use strict";var n=i("d784"),s=i("44e7"),a=i("825a"),l=i("1d80"),r=i("4840"),o=i("8aa5"),h=i("50c4"),c=i("14c3"),u=i("9263"),d=i("d039"),f=[].push,m=Math.min,p=4294967295,v=!d((function(){return!RegExp(p,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(l(this)),a=void 0===i?p:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!s(t))return e.call(n,t,a);var r,o,h,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,v=new RegExp(t.source,d+"g");while(r=u.call(v,n)){if(o=v.lastIndex,o>m&&(c.push(n.slice(m,r.index)),r.length>1&&r.index<n.length&&f.apply(c,r.slice(1)),h=r[0].length,m=o,c.length>=a))break;v.lastIndex===r.index&&v.lastIndex++}return m===n.length?!h&&v.test("")||c.push(""):c.push(n.slice(m)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=l(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s,i):n.call(String(s),e,i)},function(t,s){var l=i(n,t,this,s,n!==e);if(l.done)return l.value;var u=a(t),d=String(this),f=r(u,RegExp),g=u.unicode,x=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),y=new f(v?u:"^(?:"+u.source+")",x),b=void 0===s?p:s>>>0;if(0===b)return[];if(0===d.length)return null===c(y,d)?[d]:[];var w=0,E=0,z=[];while(E<d.length){y.lastIndex=v?E:0;var T,k=c(y,v?d:d.slice(E));if(null===k||(T=m(h(y.lastIndex+(v?0:E)),d.length))===w)E=o(d,E,g);else{if(z.push(d.slice(w,E)),z.length===b)return z;for(var S=1;S<=k.length-1;S++)if(z.push(k[S]),z.length===b)return z;E=w=T}}return z.push(d.slice(w)),z}]}),!v)},"141f":function(t,e,i){"use strict";i("9e6c")},"272e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("VueDrr",{staticClass:"element-drr-wrapper",attrs:{x:t.element.x,y:t.element.y,w:t.element.w,h:t.element.h,handles:t.handles,active:t.element.active,minw:80,minh:18,parent:!0,rotatable:!1},on:{dragstop:t.handleDragStop,resizing:t.handleResizing,resizestop:t.handleResizeStop,deactivated:t.handleDeactivate,activated:t.handleActivated}},[t._t("default")],2)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"z-drr-container",class:{"z-draggable":t.draggable,"z-resizable":t.resizable,"z-rotatable":t.rotatable,"z-active":t.enabled,"z-dragging":t.dragging,"z-resizing":t.resizing,"z-rotating":t.rotating},style:t.style,on:{mousedown:t.elmDown}},[t.rotatable?i("div",{staticClass:"z-rotateable-handle",style:{display:t.enabled?"block":"none"},on:{touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.elmDown(e)},mousedown:function(e){e.stopPropagation(),e.preventDefault(),t.rotating=!0},dblclick:t.fillParent}}):t._e(),t._l(t.handles,(function(e){return t.resizable?i("div",{key:e,staticClass:"z-resizeable-handle",class:"z-handle-"+e,style:{display:t.enabled?"block":"none"},on:{touchstart:function(i){return i.stopPropagation(),i.preventDefault(),t.handleDown(e,i)},mousedown:function(i){return i.stopPropagation(),i.preventDefault(),t.handleResizeStart(e,i)}}}):t._e()})),t._t("default")],2)},l=[];i("4de4"),i("c975"),i("a9e3"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("6062"),i("3ca3"),i("ddb0"),i("7db0");function r(t){return"function"===typeof t||"[object Function]"===Object.prototype.toString.call(t)}function o(t,e,i){var n=t,s=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find((function(t){return r(n[t])}));if(!r(n[s]))return!1;do{if(n[s](e))return!0;if(n===i)return!1;n=n.parentNode}while(n);return!1}var h={name:"VueDrr",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},canDeactive:{type:Boolean,default:!0},w:{type:[Number],default:200},h:{type:[Number,String],default:28,validator:function(t){var e="string"===typeof t?"auto"===t:t>=0;return e}},ratio:{type:[Number,String]},contains:{type:Boolean,default:!1},minw:{type:Number,default:28,validator:function(t){return t>0}},minh:{type:Number,default:28,validator:function(t){return t>0}},angle:{type:Number,default:0,validator:function(t){return"number"===typeof t}},x:{type:Number,default:0,validator:function(t){return"number"===typeof t}},y:{type:Number,default:0,validator:function(t){return"number"===typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){var e="string"===typeof t?"auto"===t:t>=0;return e}},handles:{type:Array,default:function(){return["n","e","s","w","nw","ne","se","sw"]},validator:function(t){var e=new Set(["n","e","s","w","nw","ne","se","sw"]);return new Set(t.filter((function(t){return e.has(t)}))).size===t.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},overflowY:{type:String,default:""}},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,rotateAngle:this.angle,resizing:!1,dragging:!1,rotating:!1,enabled:this.active,handle:null,zIndex:this.z,parentW:9999,parentH:9999,mouseX:0,mouseY:0,lastMouseX:0,lastMouseY:0,mouseOffX:0,mouseOffY:0,elmX:0,elmY:0,elmW:0,elmH:0}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",transform:"rotate("+this.rotateAngle+"deg)",zIndex:this.zIndex,overflowY:this.overflowY,overflowX:""}}},watch:{active:function(t){this.enabled=t},x:function(t){this.left=t,this.elmX=t},y:function(t){this.top=t,this.elmY=t},z:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)},w:function(t){this.width=t,this.elmW=t},h:function(t){this.height=t,this.elmH=t},angle:function(t){this.rotateAngle=t}},mounted:function(){var t=document.querySelector(".editor-mask")||document.documentElement;t.addEventListener("mousedown",this.deselect,!1),t.addEventListener("mousemove",this.handleMove,!1),t.addEventListener("mouseup",this.handleUp,!1),t.addEventListener("touchmove",this.handleMove,!1),t.addEventListener("touchend touchcancel",this.deselect,!1),t.addEventListener("touchstart",this.handleUp,!1),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){var t=document.querySelector(".editor-mask")||document.documentElement;t.removeEventListener("mousedown",this.deselect,!1),t.removeEventListener("mousemove",this.handleMove,!1),t.removeEventListener("mouseup",this.handleUp,!1),t.addEventListener("touchmove",this.handleMove,!1),t.addEventListener("touchend touchcancel",this.deselect,!1),t.addEventListener("touchstart",this.handleUp,!1)},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y),this.elmW=this.width,this.elmH=this.height}this.$emit("resizing",this.left,this.top,this.width,this.height)},elmDown:function(t){var e=t.target||t.srcElement;if(this.$el.contains(e)){if(this.dragHandle&&!o(e,this.dragHandle,this.$el)||this.dragCancel&&o(e,this.dragCancel,this.$el))return;this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0)}},deselect:function(t){-1!==t.type.indexOf("touch")?(this.mouseX=t.changedTouches[0].clientX,this.mouseY=t.changedTouches[0].clientY):(this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop),this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var e=t.target||t.srcElement,i=new RegExp("z-handle-([nesw]{1, 2})","");this.$el.contains(e)||i.test(e.className)||this.enabled&&this.canDeactive&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleResizeStart:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},handleDown:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},fillParent:function(t){var e=this;if(this.parent&&this.resizable&&this.maximize){var i=!1,n=function t(){i||window.requestAnimationFrame(t),"x"===e.axis?e.width===e.parentW&&0===e.left&&(i=!0):"y"===e.axis?e.height===e.parentH&&0===e.top&&(i=!0):"both"===e.axis&&e.width===e.parentW&&e.height===e.parentH&&0===e.top&&0===e.left&&(i=!0),"x"!==e.axis&&"both"!==e.axis||(e.width<e.parentW&&(e.width++,e.elmW++),e.left>0&&(e.left--,e.elmX--)),"y"!==e.axis&&"both"!==e.axis||(e.height<e.parentH&&(e.height++,e.elmH++),e.top>0&&(e.top--,e.elmY--)),e.$emit("resizing",e.left,e.top,e.width,e.height)};window.requestAnimationFrame(n)}},getOrigin:function(){var t=this.$el.getBoundingClientRect();return{x:(t.left+t.right)/2,y:(t.bottom+t.top)/2}},handleMove:function(t){var e=this.lastMouseX,i=this.lastMouseY,n=-1!==t.type.indexOf("touchmove");this.mouseX=n?t.touches[0].clientX:t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=n?t.touches[0].clientY:t.pageY||t.clientY+document.documentElement.scrollTop;var s=this.mouseX-this.lastMouseX+this.mouseOffX,a=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var l=s,r=a;if(this.resizing)this.handle.indexOf("n")>=0&&(this.elmH-r<this.minh?this.mouseOffY=r-(a=this.elmH-this.minh):this.parent&&this.elmY+r<0&&(this.mouseOffY=r-(a=-this.elmY)),this.elmY+=a,this.elmH-=a),this.handle.indexOf("s")>=0&&(this.elmH+r<this.minh?this.mouseOffY=r-(a=this.minh-this.elmH):this.parent&&this.elmY+this.elmH+r>this.parentH&&(this.mouseOffY=r-(a=this.parentH-this.elmY-this.elmH)),this.elmH+=a),this.handle.indexOf("w")>=0&&(this.elmW-l<this.minw?this.mouseOffX=l-(s=this.elmW-this.minw):this.parent&&this.elmX+l<0&&(this.mouseOffX=l-(s=-this.elmX)),this.elmX+=s,this.elmW-=s),this.handle.indexOf("e")>=0&&(this.elmW+l<this.minw?this.mouseOffX=l-(s=this.minw-this.elmW):this.parent&&this.elmX+this.elmW+l>this.parentW&&(this.mouseOffX=l-(s=this.parentW-this.elmX-this.elmW)),this.elmW+=s),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height);else if(this.dragging)this.parent&&(this.elmX+l<0?this.mouseOffX=l-(s=-this.elmX):this.elmX+this.elmW+l>this.parentW&&(this.mouseOffX=l-(s=this.parentW-this.elmX-this.elmW)),this.elmY+r<0?this.mouseOffY=r-(a=-this.elmY):this.elmY+this.elmH+r>this.parentH&&(this.mouseOffY=r-(a=this.parentH-this.elmY-this.elmH))),this.elmX+=s,this.elmY+=a,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top);else if(this.rotating){var o=this.getOrigin(),h=Math.atan2(i-o.y,e-o.x),c=Math.atan2(this.mouseY-o.y,this.mouseX-o.x);this.rotateAngle+=Math.round(180*(c-h)/Math.PI),this.$emit("rotating",this.rotateAngle)}},handleUp:function(t){-1!==t.type.indexOf("touch")&&(this.lastMouseX=t.changedTouches[0].clientX,this.lastMouseY=t.changedTouches[0].clientY),this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.rotating&&(this.rotating=!1,this.$emit("rotatestop",this.rotateAngle)),this.elmX=this.left,this.elmY=this.top}}},c=h,u=(i("141f"),i("2877")),d=Object(u["a"])(c,a,l,!1,null,"4435e4f4",null),f=d.exports,m={name:"ElementDrr",components:{VueDrr:f},props:{element:{type:Object,default:function(){}},handles:{type:Array,default:function(){return["n","e","s","w","nw","ne","se","sw"]}}},watch:{element:{handler:function(t){var e=this;this.$nextTick((function(){e.updateHeight()}))},deep:!0}},methods:{updateHeight:function(){var t=this;if("text"===this.element.type){var e=this.$el;this.$nextTick((function(){var i=Math.ceil(e.parentNode.getBoundingClientRect().height),n=Math.ceil(e.querySelector(".image-rich-text").getBoundingClientRect().height);t.element.y+n>=i&&(t.element.y=i-n),e.style.height=n+"px",t.element.h=n}))}},handleDragStop:function(t,e){this.element.x===t&&this.element.y===e||(this.element.x=t,this.element.y=e)},handleResizing:function(){"text"===this.element.type&&this.updateHeight()},handleResizeStop:function(t,e,i,n){this.element.x===t&&this.element.y===e&&this.element.w===i&&this.element.h===n||(this.element.x=t,this.element.y=e,this.element.w=i,"text"===this.element.type?this.updateHeight():this.element.h=n)},handleDeactivate:function(){this.element.active=!1},handleActivated:function(){this.element.active=!0,this.$emit("updateActiveEle",this.element)}}},p=m,v=(i("c338"),Object(u["a"])(p,n,s,!1,null,null,null));e["a"]=v.exports},"38cf":function(t,e,i){var n=i("23e7"),s=i("1148");n({target:"String",proto:!0},{repeat:s})},4762:function(t,e,i){"use strict";i("8e71")},"4e87":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-rich-text",style:t.element.style,attrs:{spellcheck:"false",contenteditable:"true"},domProps:{innerHTML:t._s(t.innerText)},on:{focus:t.handleFocus,keydown:function(t){return t.stopPropagation()},keyup:function(e){return e.stopPropagation(),t.emitInput(e)},paste:function(e){return t.handlePaste(e)},click:function(t){t.stopPropagation()}}})},s=[],a=(i("ac1f"),i("5319"),i("ed08")),l={name:"ImageRichText",props:{value:{type:String,default:"请输入文本"},element:{type:Object,default:function(){return{style:{}}}},activeEleText:{type:Object,default:function(){}}},data:function(){return{innerText:this.value.replace(/\n/g,"<br>")}},watch:{value:function(t){this.innerText=t}},methods:{emitInput:function(t){this.$emit("input",t.target.innerHTML),this.keepCursorLast(t)},handlePaste:function(t){this.$emit("input",Object(a["c"])(t)),this.keepCursorLast(t)},keepCursorLast:function(t){this.$nextTick((function(){Object(a["d"])(t.target)}))},handleFocus:function(){this.activeEleText.active=!0}}},r=l,o=(i("0b79"),i("2877")),h=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=h.exports},6062:function(t,e,i){"use strict";var n=i("6d61"),s=i("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(t,e,i){"use strict";var n=i("9bf2").f,s=i("7c73"),a=i("e2cc"),l=i("0366"),r=i("19aa"),o=i("2266"),h=i("7dd0"),c=i("2626"),u=i("83ab"),d=i("f183").fastKey,f=i("69f3"),m=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,i,h){var c=t((function(t,n){r(t,c,e),m(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=n&&o(n,t[h],t,i)})),f=p(e),v=function(t,e,i){var n,s,a=f(t),l=g(t,e);return l?l.value=i:(a.last=l={index:s=d(e,!0),key:e,value:i,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=l),n&&(n.next=l),u?a.size++:t.size++,"F"!==s&&(a.index[s]=l)),t},g=function(t,e){var i,n=f(t),s=d(e);if("F"!==s)return n.index[s];for(i=n.first;i;i=i.next)if(i.key==e)return i};return a(c.prototype,{clear:function(){var t=this,e=f(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),n=g(e,t);if(n){var s=n.next,a=n.previous;delete i.index[n.index],n.removed=!0,a&&(a.next=s),s&&(s.previous=a),i.first==n&&(i.first=s),i.last==n&&(i.last=a),u?i.size--:e.size--}return!!n},forEach:function(t){var e,i=f(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(c.prototype,i?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),u&&n(c.prototype,"size",{get:function(){return f(this).size}}),c},setStrong:function(t,e,i){var n=e+" Iterator",s=p(e),a=p(n);h(t,e,(function(t,e){m(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),c(e)}}},"6d61":function(t,e,i){"use strict";var n=i("23e7"),s=i("da84"),a=i("94ca"),l=i("6eeb"),r=i("f183"),o=i("2266"),h=i("19aa"),c=i("861d"),u=i("d039"),d=i("1c7e"),f=i("d44e"),m=i("7156");t.exports=function(t,e,i){var p=-1!==t.indexOf("Map"),v=-1!==t.indexOf("Weak"),g=p?"set":"add",x=s[t],y=x&&x.prototype,b=x,w={},E=function(t){var e=y[t];l(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(v&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!c(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(a(t,"function"!=typeof x||!(v||y.forEach&&!u((function(){(new x).entries().next()})))))b=i.getConstructor(e,t,p,g),r.REQUIRED=!0;else if(a(t,!0)){var z=new b,T=z[g](v?{}:-0,1)!=z,k=u((function(){z.has(1)})),S=d((function(t){new x(t)})),Y=!v&&u((function(){var t=new x,e=5;while(e--)t[g](e,e);return!t.has(-0)}));S||(b=e((function(e,i){h(e,b,t);var n=m(new x,e,b);return void 0!=i&&o(i,n[g],n,p),n})),b.prototype=y,y.constructor=b),(k||Y)&&(E("delete"),E("has"),p&&E("get")),(Y||T)&&E(g),v&&y.clear&&delete y.clear}return w[t]=b,n({global:!0,forced:b!=x},w),f(b,t),v||i.setStrong(b,t,p),b}},"7db0":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").find,a=i("44d2"),l=i("ae40"),r="find",o=!0,h=l(r);r in[]&&Array(1)[r]((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!h},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},"892b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-setting-wrapper"},[i("el-form",{attrs:{"label-width":"70px"}},[i("el-form-item",{attrs:{label:"文本"}},[i("ImageRichText",{staticClass:"text-editable",attrs:{"active-ele-text":t.activeEleText},model:{value:t.activeEleText.text,callback:function(e){t.$set(t.activeEleText,"text",e)},expression:"activeEleText.text"}})],1),i("el-form-item",{attrs:{label:"字体"}},[i("el-select",{attrs:{size:"small"},model:{value:t.activeEleText.style.fontFamily,callback:function(e){t.$set(t.activeEleText.style,"fontFamily",e)},expression:"activeEleText.style.fontFamily"}},t._l(t.fontFamilyData,(function(t){return i("el-option",{key:t.value,style:{fontFamily:t.value},attrs:{label:t.value,value:t.value}})})),1)],1),i("el-form-item",{attrs:{label:"字号"}},[i("el-select",{attrs:{size:"small"},model:{value:t.activeEleText.style.fontSize,callback:function(e){t.$set(t.activeEleText.style,"fontSize",e)},expression:"activeEleText.style.fontSize"}},t._l(t.fontSizeData,(function(t){return i("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),1)],1),i("el-form-item",{attrs:{label:"颜色"}},[i("div",{staticClass:"color-box"},[i("i",{staticClass:"vue-dsn-icon-wenzise color-icon",style:{color:t.activeEleText.style.color}}),i("el-color-picker",{model:{value:t.activeEleText.style.color,callback:function(e){t.$set(t.activeEleText.style,"color",e)},expression:"activeEleText.style.color"}})],1),i("div",{staticClass:"color-box"},[i("i",{staticClass:"vue-dsn-icon-beijingse color-icon icon-bg",style:{color:t.activeEleText.style.backgroundColor}}),i("el-color-picker",{model:{value:t.activeEleText.style.backgroundColor,callback:function(e){t.$set(t.activeEleText.style,"backgroundColor",e)},expression:"activeEleText.style.backgroundColor"}})],1),i("div",{staticClass:"style-box"},[i("span",{class:["style-item",t.fontWeight?"active":""],on:{click:t.setFontWeight}},[i("i",{staticClass:"vue-dsn-icon-jiacu style-icon"})]),i("div",{staticClass:"style-item"},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("i",{staticClass:"vue-dsn-icon-duiqi style-icon"}),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{style:t.setAlignActive("left"),attrs:{command:"left"}},[t._v("左对齐")]),i("el-dropdown-item",{style:t.setAlignActive("center"),attrs:{command:"center"}},[t._v("居中\n                            ")]),i("el-dropdown-item",{style:t.setAlignActive("right"),attrs:{command:"right"}},[t._v("右对齐\n                            ")])],1)],1)],1)])]),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.downloadImage}},[t._v("文本生成图片")])],1)],1)],1)},s=[],a=(i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),i("ed08")),l=i("4e87"),r=[{value:"黑体"},{value:"宋体"},{value:"仿宋"},{value:"楷体"},{value:"隶书"},{value:"微软雅黑"},{value:"方正姚体"}],o=[{value:"12px"},{value:"14px"},{value:"16px"},{value:"18px"},{value:"24px"},{value:"32px"},{value:"48px"}],h={name:"TextSetting",components:{ImageRichText:l["a"]},props:{activeEleText:{type:Object,default:function(){}}},data:function(){return{fontFamilyData:r,fontSizeData:o}},computed:{fontWeight:function(){return 400!==+this.activeEleText.style.fontWeight}},watch:{activeEleText:{handler:function(t){this.activeEleText.style.lineHeight=t.style.fontSize},deep:!0}},methods:{setFontWeight:function(){400===+this.activeEleText.style.fontWeight?this.activeEleText.style.fontWeight=600:this.activeEleText.style.fontWeight=400},handleCommand:function(t){this.activeEleText.style.textAlign=t},setAlignActive:function(t){return this.activeEleText.style.textAlign===t?{backgroundColor:"#409eff",color:"#fff"}:{backgroundColor:"",color:"#333"}},textBecomeImg:function(t){var e=document.createElement("canvas");e.width=t.w,e.height=t.h;var i=e.getContext("2d"),n=4,s=8;i.fillStyle=t.style.backgroundColor||"transparent",i.fillRect(0,0,e.width,e.height),i.fillStyle=t.style.color,i.font=t.style.fontWeight+" "+t.style.fontSize+" "+t.style.fontFamily,i.textBaseline="top",i.textAlign=t.style.textAlign;for(var a,l=t.text.split(""),r="",o=[],h=e.width-2*s,c=0;c<l.length;c++)i.measureText(r).width<h&&i.measureText(r+l[c]).width<=h?r+=l[c]:(o.push(r),r=l[c]);o.push(r),"left"===i.textAlign?a=s:"center"===i.textAlign?a=h/2:"right"===i.textAlign&&(a=h);for(var u=0;u<o.length;u++)i.fillText(o[u],a,parseInt(t.style.fontSize)*u+n,h);return e.toDataURL("image/png")},downloadImage:function(){var t=this.textBecomeImg(this.activeEleText),e=Object(a["a"])(t),i=document.createElement("a"),n=document.createEvent("HTMLEvents");n.initEvent("click",!0,!0),i.download="image.png",i.href=URL.createObjectURL(e),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}},c=h,u=(i("4762"),i("2877")),d=Object(u["a"])(c,n,s,!1,null,null,null);e["a"]=d.exports},"8b3d":function(t,e,i){},"8e71":function(t,e,i){},"9e6c":function(t,e,i){},a15b:function(t,e,i){"use strict";var n=i("23e7"),s=i("44ad"),a=i("fc6a"),l=i("a640"),r=[].join,o=s!=Object,h=l("join",",");n({target:"Array",proto:!0,forced:o||!h},{join:function(t){return r.call(a(this),void 0===t?",":t)}})},a9e3:function(t,e,i){"use strict";var n=i("83ab"),s=i("da84"),a=i("94ca"),l=i("6eeb"),r=i("5135"),o=i("c6b6"),h=i("7156"),c=i("c04e"),u=i("d039"),d=i("7c73"),f=i("241c").f,m=i("06cf").f,p=i("9bf2").f,v=i("58a8").trim,g="Number",x=s[g],y=x.prototype,b=o(d(y))==g,w=function(t){var e,i,n,s,a,l,r,o,h=c(t,!1);if("string"==typeof h&&h.length>2)if(h=v(h),e=h.charCodeAt(0),43===e||45===e){if(i=h.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+h}for(a=h.slice(2),l=a.length,r=0;r<l;r++)if(o=a.charCodeAt(r),o<48||o>s)return NaN;return parseInt(a,n)}return+h};if(a(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var E,z=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof z&&(b?u((function(){y.valueOf.call(i)})):o(i)!=g)?h(new x(w(e)),i,z):w(e)},T=n?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;T.length>k;k++)r(x,E=T[k])&&!r(z,E)&&p(z,E,m(x,E));z.prototype=y,y.constructor=z,l(s,g,z)}},bb2f:function(t,e,i){var n=i("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c338:function(t,e,i){"use strict";i("8b3d")},ed08:function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return a})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return r}));i("a15b"),i("d81d"),i("d3b7"),i("ac1f"),i("38cf"),i("5319"),i("1276"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7");function n(t){function e(t){var e=s(t).replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=e.split(/\r\n|\r|\n/);return i?i.map((function(t){return t.length>0?"<div>"+t+"</div>":"<div><br></div>"})).join(""):e}var i="",n=" ".repeat(2);if(t.preventDefault(),t.clipboardData)i=(t.originalEvent||t).clipboardData.getData("text/plain").replace(/\t/g,n),document.execCommand("insertHtml",!1,e(i));else if(window.clipboardData)if(i=window.clipboardData.getData("Text").replace(/\t/g,n),document.selection)document.selection.createRange().pasteHTML(e(i));else if(window.getSelection){var a=window.getSelection(),l=a.getRangeAt(0),r=document.createElement("span");r.innerHTML="&#FEFF;",l.deleteContents(),l.insertNode(r);var o=document.body.createTextRange();o.moveToElementText(r),r.parentNode.removeChild(r),o.pasteHTML(e(i)),o.collapse(!1),o.select()}return e(i)}function s(t){return t.replace(/<(\/?)p>/g,"<$1div>")}function a(t){if(window.getSelection){t.focus();var e=window.getSelection();e.selectAllChildren(t),e.collapseToEnd()}else if(document.selection){var i=document.selection.createRange();i.moveToElementText(t),i.collapse(!1),i.select()}}function l(t){for(var e=window.atob(t.split(",")[1]),i=[],n=0;n<e.length;n++)i.push(e.charCodeAt(n));return new Blob([new Uint8Array(i)],{type:"image/png"})}function r(t,e,i,n){var s=0,a=0,l=0;if(t>e)if(t>=i){var r=e*(i/t);r>=i?(s=t*(n/e),a=n,l=e/n):(s=i,a=r,l=t/i)}else s=t,a=e,l=1;else e>=n?(s=t*(n/e),a=n,l=e/n):(s=t,a=e,l=1);return{width:s,height:a,ratio:l}}},f183:function(t,e,i){var n=i("d012"),s=i("861d"),a=i("5135"),l=i("9bf2").f,r=i("90e3"),o=i("bb2f"),h=r("meta"),c=0,u=Object.isExtensible||function(){return!0},d=function(t){l(t,h,{value:{objectID:"O"+ ++c,weakData:{}}})},f=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,h)){if(!u(t))return"F";if(!e)return"E";d(t)}return t[h].objectID},m=function(t,e){if(!a(t,h)){if(!u(t))return!0;if(!e)return!1;d(t)}return t[h].weakData},p=function(t){return o&&v.REQUIRED&&u(t)&&!a(t,h)&&d(t),t},v=t.exports={REQUIRED:!1,fastKey:f,getWeakData:m,onFreeze:p};n[h]=!0},f32c:function(t,e,i){}}]);