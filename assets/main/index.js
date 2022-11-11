System.register("chunks:///_virtual/AppManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./VideoCamera.ts"],(function(e){"use strict";var n,t,a,r,i,o,c;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,a=e._decorator,r=e.view,i=e.macro,o=e.Component},function(e){c=e.default}],execute:function(){var s;t._RF.push({},"6d9e0nmKQ9DMqjd3VoulmMT","AppManager",void 0);var u=a.ccclass;a.property,e("AppManager",u("AppManager")(s=function(e){function t(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).mVideoCamera=new c,n}n(t,e);var a=t.prototype;return a.start=function(){r.setOrientation(i.ORIENTATION_PORTRAIT),r.setResizeCallback(this.OnSizeChanged.bind(this))},a.update=function(e){},a.Playing=function(){var e=this;this.mVideoCamera.Setup().then((function(n){e.mVideoCamera.Play()})),console.log("Camera")},a.OnSizeChanged=function(){this.mVideoCamera.Resize()},t}(o))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AppManager.ts","./VideoCamera.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/VideoCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,s;return{setters:[function(e){t=e.asyncToGenerator,i=e.regeneratorRuntime},function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"b4a149GHnFMvbn4mmivWed6","VideoCamera",void 0);e("default",function(){function e(){this.video=void 0,this.stream=void 0}var s=e.prototype;return s.Setup=function(){var e=t(i().mark((function e(t){var s,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t={exact:"environment"}),this.faceMode=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=6;break}console.log("Display BG"),e.next=20;break;case 6:return s=document.querySelector("video"),n={audio:!1,video:{facingMode:t,width:{ideal:640},height:{ideal:480}}},this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()})),e.prev=9,e.next=12,navigator.mediaDevices.getUserMedia(n);case 12:this.stream=e.sent,e.next=17;break;case 15:e.prev=15,e.t0=e.catch(9);case 17:void 0!==s.srcObject?s.srcObject=this.stream:window.URL.createObjectURL?s.src=window.URL.createObjectURL(this.stream):window.webkitURL?s.src=window.webkitURL.createObjectURL(this.stream):s.src=this.stream,s.playsInline=!0,s.play();case 20:case"end":return e.stop()}}),e,this,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),s.Play=function(e){void 0===e&&(e=!1),null!=this.video&&(this.video.play(),this.video.style.display=e?"none":"block")},s.Stop=function(e){(null!=this.video&&(this.video.pause(),this.video.style.display="none"),e)&&(this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()})))},s.Resize=function(){if(this.video){var e=window.innerWidth,t=window.innerHeight,i=this.video.videoWidth/this.video.videoHeight;if(e/t<i){var s=i*t;this.video.style.width=s+"px",this.video.style.marginLeft=-(s-e)/2+"px",this.video.style.height=t+"px",this.video.style.marginTop="0px"}else{var n=1/(i/e);this.video.style.height=n+"px",this.video.style.marginTop=-(n-t)/2+"px",this.video.style.width=e+"px",this.video.style.marginLeft="0px"}}},e}());s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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