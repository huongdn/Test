System.register("chunks:///_virtual/main",["./VideoCamera.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/VideoCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,o,n,s,i;return{setters:[function(e){r=e.inheritsLoose,t=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){n=e.cclegacy,s=e._decorator,i=e.Component}],execute:function(){var a;n._RF.push({},"39ef0kmYIdO+KNUhTOlppoz","VideoCamera",void 0);var c=s.ccclass;s.property,e("VideoCamera",c("VideoCamera")(a=function(e){function n(){for(var r,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(r=e.call.apply(e,[this].concat(o))||this).constraints={audio:!1,video:!0},r}r(n,e);var s=n.prototype;return s.start=function(){console.log("Testing start"),this.init("")},s.update=function(e){},s.handleSuccess=function(e){var r=document.querySelector("video"),t=e.getVideoTracks();console.log("Got stream with constraints:"+this.constraints),console.log("Using video device: "+t[0].label),r.style.display="none",r.style.position="absolute",r.srcObject=e},s.handleError=function(e){if("OverconstrainedError"===e.name){this.constraints.video;console.log("The resolution px is not supported by your device.")}else"NotAllowedError"===e.name&&this.errorMsg("Permissions have not been granted to use your camera and microphone, you need to allow the page access to your devices in order for the demo to work.","");this.errorMsg("getUserMedia error: "+e.name,e)},s.errorMsg=function(e,r){document.querySelector("#errorMsg").innerHTML+="<p>"+e+"</p>",void 0!==r&&console.error(r)},s.init=function(){var e=t(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(this.constraints);case 3:t=e.sent,this.handleSuccess(t),r.target.disabled=!0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.handleError(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),n}(i))||a);n._RF.pop()}}}));

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