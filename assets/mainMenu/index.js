System.register("chunks:///_virtual/mainMenu",["./MainMenu.ts","./VideoCamera.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScenesManager.ts","./VideoCamera.ts"],(function(e){"use strict";var n,t,o,a,r,c,i;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,a=e.Component},function(e){r=e.ScenesManager,c=e.SCENE},function(e){i=e.VideoCamera}],execute:function(){var u;t._RF.push({},"166f9PV6nJKI5OnjYOvYh3M","MainMenu",void 0);var s=o.ccclass;o.property,e("MainMenu",s("MainMenu")(u=function(e){function t(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))||this).m_videoCamera=new i,n}n(t,e);var o=t.prototype;return o.start=function(){var e=this;this.m_videoCamera.Setup().then((function(n){e.m_videoCamera.PlayVideo()}))},o.update=function(e){},o.gotoPlanetExplore=function(){r.GetInstance().gotoScene(c.PLANET_EXPLORE)},o.gotoSpaceExplore=function(){r.GetInstance().gotoScene(c.SPACE_EXPLORE)},t}(a))||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/VideoCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,s;return{setters:[function(e){i=e.asyncToGenerator,t=e.regeneratorRuntime},function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"b79edjzGtVEaopgK8qMCbud","VideoCamera",void 0);e("VideoCamera",function(){function e(){this.m_video=void 0,this.stream=void 0,this.m_bIsvideoPlaying=!1}var s=e.prototype;return s.Setup=function(){var e=i(t().mark((function e(i){var s,n,o=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i={exact:"environment"}),this.faceMode=i,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=5;break}e.next=19;break;case 5:return s=document.querySelector("video"),n={audio:!1,video:{facingMode:i,width:{min:1280,ideal:1920,max:3840},height:{min:720,ideal:1080,max:2160}}},e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia(n);case 10:this.stream=e.sent,e.next=15;break;case 13:e.prev=13,e.t0=e.catch(7);case 15:return void 0!==s.srcObject?s.srcObject=this.stream:void 0!==s.mozSrcObject?s.mozSrcObject=this.stream:window.URL.createObjectURL?s.src=window.URL.createObjectURL(this.stream):window.webkitURL?s.src=window.webkitURL.createObjectURL(this.stream):s.src=this.stream,s.playsInline=!0,s.play(),e.abrupt("return",new Promise((function(e,i){o.m_video=s,s.onloadedmetadata=function(){o.Resize(),e(s)}})));case 19:case"end":return e.stop()}}),e,this,[[7,13]])})));return function(i){return e.apply(this,arguments)}}(),s.PlayVideo=function(e){void 0===e&&(e=!1),null!==this.m_video&&(this.m_video.play(),this.m_bIsvideoPlaying=!0,this.m_video.style.display=e?"none":"block")},s.PauseVideo=function(){null!==this.m_video&&(this.m_video.pause(),this.m_bIsvideoPlaying=!1)},s.StopVideo=function(){null!==this.m_video&&null!==this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()}))},s.OnGameResume=function(){this.m_bIsvideoPlaying&&null!==this.m_video&&this.PlayVideo()},s.Resize=function(){if(this.m_video){var e=window.innerWidth,i=window.innerHeight,t=this.m_video.videoWidth/this.m_video.videoHeight;if(e/i<t){var s=t*i;this.m_video.style.width=s+"px",this.m_video.style.marginLeft=-(s-e)/2+"px",this.m_video.style.height=i+"px",this.m_video.style.marginTop="0px"}else{var n=1/(t/e);this.m_video.style.height=n+"px",this.m_video.style.marginTop=-(n-i)/2+"px",this.m_video.style.width=e+"px",this.m_video.style.marginLeft="0px"}}},e}());s._RF.pop()}}}));

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