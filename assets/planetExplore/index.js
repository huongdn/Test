System.register("chunks:///_virtual/planetExplore",["./PlanetExplore.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PlanetExplore.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScenesManager.ts"],(function(e){"use strict";var t,n,o,r,c,a;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.Component},function(e){c=e.ScenesManager,a=e.SCENE}],execute:function(){var s;n._RF.push({},"a86ca116DlLnJgrAXsScytl","PlanetExplore",void 0);var u=o.ccclass;o.property,e("PlanetExplore",u("PlanetExplore")(s=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.start=function(){},o.update=function(e){},o.goHome=function(){c.GetInstance().gotoScene(a.MAIN)},n}(r))||s);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/planetExplore', 'chunks:///_virtual/planetExplore'); 
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