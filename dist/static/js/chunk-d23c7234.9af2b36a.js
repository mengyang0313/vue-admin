(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d23c7234"],{"208a":function(e,t,a){"use strict";a("796e")},4:function(e,t){},"796e":function(e,t,a){},be3f:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("videoPlayer",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions}})},i=[],n=a("d6d3"),o=(a("fda2"),{name:"VueVideoPlayer",components:{videoPlayer:n["videoPlayer"]},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:""}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},methods:{initSrc:function(e){this.playerOptions.sources[0].src=e},emptySrc:function(){this.playerOptions.sources[0].src=""}}}),l=o,r=a("2877"),c=Object(r["a"])(l,s,i,!1,null,null,null);t["a"]=c.exports},e4b8:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"video-player-wrapper"},[a("Hints",[a("template",{slot:"hintName"},[e._v("视频播放器")]),a("template",{slot:"hintInfo"},[a("p",[e._v("Vue-Video-Player：一个使用Vue对video.js进行二次封装的视频播放插件，适用于目前主流网络视频的播放")]),a("p"),a("p",[e._v("github地址：访问\n                "),a("el-link",{attrs:{type:"success",href:"https://github.com/surmon-china/vue-video-player",target:"_blank"}},[e._v("\n                    Vue-Video-Player\n                ")])],1)])],2),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("传统视频播放器")]),a("div",{staticClass:"content-box"},[a("video",{staticStyle:{outline:"none"},attrs:{src:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/videos/houlang.mp4",controls:"",width:"100%"}})])])],1),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("视频播放插件")]),a("div",{staticClass:"content-item"},[a("VueVideoPlayer")],1)])],1)],1)],1)},i=[],n=a("b522"),o=a("be3f"),l={name:"VideoPlayer",components:{Hints:n["a"],VueVideoPlayer:o["a"]}},r=l,c=(a("208a"),a("2877")),u=Object(c["a"])(r,s,i,!1,null,null,null);t["default"]=u.exports}}]);