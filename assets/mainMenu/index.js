System.register("chunks:///_virtual/mainMenu",["./MainMenu.ts","./VideoCamera.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScenesManager.ts","./VideoCamera.ts"],(function(e){"use strict";var n,t,o,a,r,c,i;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,a=e.Component},function(e){r=e.ScenesManager,c=e.SCENE},function(e){i=e.VideoCamera}],execute:function(){var u;t._RF.push({},"166f9PV6nJKI5OnjYOvYh3M","MainMenu",void 0);var s=o.ccclass;o.property,e("MainMenu",s("MainMenu")(u=function(e){function t(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))||this).m_videoCamera=new i,n}n(t,e);var o=t.prototype;return o.start=function(){this.m_videoCamera.Setup()},o.update=function(e){},o.gotoPlanetExplore=function(){r.GetInstance().gotoScene(c.PLANET_EXPLORE)},o.gotoSpaceExplore=function(){r.GetInstance().gotoScene(c.SPACE_EXPLORE)},t}(a))||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/VideoCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,o;return{setters:[function(e){i=e.asyncToGenerator,t=e.regeneratorRuntime},function(e){o=e.cclegacy}],execute:function(){o._RF.push({},"b79edjzGtVEaopgK8qMCbud","VideoCamera",void 0);e("VideoCamera",function(){function e(){this.faceModeUser="user",this.faceModeEnvironments={exact:"environment"},this.m_video=void 0,this.m_stream=void 0,this.m_bIsvideoPlaying=!1}var o=e.prototype;return o.start=function(){},o.update=function(e){},o.Setup=function(){var e=i(t().mark((function e(i){var o,s,n,r=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i=!0),o="",o=i?this.faceModeEnvironments:this.faceModeUser,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=8;break}throw console.log("Display BG"),new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 8:return s={audio:!1,video:{facingMode:o,width:{min:1280,ideal:1920,max:3840},height:{min:720,ideal:1080,max:2160}}},e.prev=9,e.next=12,navigator.mediaDevices.getUserMedia(s);case 12:this.m_stream=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.log("Cant get user media. Error: "+e.t0);case 18:return void 0!==(n=document.querySelector("video")).srcObject?n.srcObject=this.m_stream:void 0!==n.mozSrcObject?n.mozSrcObject=this.m_stream:window.URL.createObjectURL?n.src=window.URL.createObjectURL(this.m_stream):window.webkitURL?n.src=window.webkitURL.createObjectURL(this.m_stream):n.src=this.m_stream,n.playsInline=!0,n.play(),e.abrupt("return",new Promise((function(e,i){r.m_video=n,n.onloadedmetadata=function(){r.Resize(),e(n)}})));case 23:case"end":return e.stop()}}),e,this,[[9,15]])})));return function(i){return e.apply(this,arguments)}}(),o.PlayVideo=function(e){void 0===e&&(e=!1),null!==this.m_video&&(this.m_video.play(),this.m_bIsvideoPlaying=!0,this.m_video.style.display=e?"none":"block")},o.PauseVideo=function(){null!==this.m_video&&(this.m_video.pause(),this.m_bIsvideoPlaying=!1)},o.StopVideo=function(){null!==this.m_video&&null!==this.m_stream&&this.m_stream.getTracks().forEach((function(e){return e.stop()}))},o.OnGameResume=function(){this.m_bIsvideoPlaying&&null!==this.m_video&&this.PlayVideo()},o.Resize=function(){if(this.m_video){var e=window.innerWidth,i=window.innerHeight,t=this.m_video.videoWidth/this.m_video.videoHeight;if(e/i<t){var o=t*i;this.m_video.style.width=o+"px",this.m_video.style.marginLeft=-(o-e)/2+"px",this.m_video.style.height=i+"px",this.m_video.style.marginTop="0px"}else{var s=1/(t/e);this.m_video.style.height=s+"px",this.m_video.style.marginTop=-(s-i)/2+"px",this.m_video.style.width=e+"px",this.m_video.style.marginLeft="0px"}}},e}());o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/mainMenu', 'chunks:///_virtual/mainMenu'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});