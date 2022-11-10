System.register("chunks:///_virtual/spaceExplore",["./SpaceExplore.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SpaceExplore.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScenesManager.ts"],(function(e){"use strict";var t,n,o,c,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,c=e.Component},function(e){r=e.ScenesManager,s=e.SCENE}],execute:function(){var a;n._RF.push({},"3224dY3UsBJM4yOI4hSTmm8","SpaceExplore",void 0);var p=o.ccclass;o.property,e("SpaceExplore",p("SpaceExplore")(a=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.start=function(){},o.update=function(e){},o.goHome=function(){r.GetInstance().gotoScene(s.MAIN)},n}(c))||a);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/spaceExplore', 'chunks:///_virtual/spaceExplore'); 
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