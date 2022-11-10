System.register("chunks:///_virtual/LoadingScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScenesManager.ts"],(function(e){"use strict";var n,t,c,o,r,s;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,c=e._decorator,o=e.Component},function(e){r=e.ScenesManager,s=e.SCENE}],execute:function(){var a;t._RF.push({},"f933au8ZOxJs6tITAPfdTxe","LoadingScene",void 0);var i=c.ccclass;c.property,e("LoadingScene",i("LoadingScene")(a=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var c=t.prototype;return c.start=function(){r.GetInstance().gotoScene(s.MAIN)},c.update=function(e){},t}(o))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LoadingScene.ts","./ScenesManager.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ScenesManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameConfig.json"],(function(e){"use strict";var n,t,c,a,o,s,i,r;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,c=e._decorator,a=e.game,o=e.assetManager,s=e.director,i=e.Component},function(e){r=e.default}],execute:function(){var u,l;e("SCENE",void 0),t._RF.push({},"63cfeiVRU9Il4WVXnm6kZXG","ScenesManager",void 0);var d,E=c.ccclass;c.property;!function(e){e[e.LOADING=0]="LOADING",e[e.MAIN=1]="MAIN",e[e.SPACE_EXPLORE=2]="SPACE_EXPLORE",e[e.PLANET_EXPLORE=3]="PLANET_EXPLORE"}(d||(d=e("SCENE",{})));e("ScenesManager",E("ScenesManager")(((l=function(e){function t(){return e.apply(this,arguments)||this}n(t,e),t.GetInstance=function(){return this.instance};var c=t.prototype;return c.onLoad=function(){t.instance=this},c.start=function(){this.node.removeFromParent(),a.addPersistRootNode(this.node)},c.update=function(e){},c.gotoScene=function(e){void 0===e&&(e=d.LOADING);var n=r.scene.loadingScene;switch(e){case d.LOADING:break;case d.MAIN:n=r.scene.mainMenuScene;break;case d.SPACE_EXPLORE:n=r.scene.spaceExploreScene;break;case d.PLANET_EXPLORE:n=r.scene.planetExploreScene}this.loadScene(n)},c.loadScene=function(e){if(e.isBundled){var n=o.getBundle(e.bundlePath);null!==n?n.loadScene(e.name,(function(e,n){s.runScene(n)})):o.loadBundle(e.bundlePath,(function(n,t){t.loadScene(e.name,(function(e,n){s.runScene(n)}))}))}else s.loadScene(e.name)},t}(i)).instance=void 0,u=l))||u);t._RF.pop()}}}));

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