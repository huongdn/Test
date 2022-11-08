System.register("chunks:///_virtual/Defines.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      exports({
        GAME_STATE: void 0,
        SCENE: void 0
      });

      var _dec, _class;

      cclegacy._RF.push({}, "d98f5LcpaNGZ7T/RzNj+mUy", "Defines", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SCENE;

      (function (SCENE) {
        SCENE[SCENE["mainScene"] = 0] = "mainScene";
        SCENE[SCENE["menuScene"] = 1] = "menuScene";
        SCENE[SCENE["gameScene"] = 2] = "gameScene";
      })(SCENE || (SCENE = exports('SCENE', {})));

      var GAME_STATE;

      (function (GAME_STATE) {
        GAME_STATE[GAME_STATE["INITIAL"] = 0] = "INITIAL";
        GAME_STATE[GAME_STATE["GAME_PLAY"] = 1] = "GAME_PLAY";
        GAME_STATE[GAME_STATE["PAUSED"] = 2] = "PAUSED";
        GAME_STATE[GAME_STATE["RESUME"] = 3] = "RESUME";
        GAME_STATE[GAME_STATE["END"] = 4] = "END";
      })(GAME_STATE || (GAME_STATE = exports('GAME_STATE', {})));

      var GAME_TIME = exports('GAME_TIME', 30);
      var Defines = exports('Defines', (_dec = ccclass('Defines'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Defines, _Component);

        function Defines() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Defines.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return Defines;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Defines.ts', './ScenesMgr.ts', './mainScene.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/mainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, game, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1bf28vHI8pG4Ltrsx3BXMLm", "mainScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var mainScene = exports('mainScene', (_dec = ccclass('mainScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mainScene, _Component);

        function mainScene() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = mainScene.prototype;

        _proto.start = function start() {
          this.node.removeFromParent();
          game.addPersistRootNode(this.node);
          window.onpagehide(this.showLogOnHide.bind(this));
          window.onpagehide(this.showLogOnShow.bind(this));
        };

        _proto.update = function update(deltaTime) {};

        _proto.showLogOnHide = function showLogOnHide() {
          console.log('On hide');
        };

        _proto.showLogOnShow = function showLogOnShow() {
          console.log('On Show');
        };

        return mainScene;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScenesMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Button, assetManager, director, Component, SCENE;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      assetManager = module.assetManager;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      SCENE = module.SCENE;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0f709jN3mxLbK5999bWR+AU", "ScenesMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ScenesMgr = exports('ScenesMgr', (_dec = ccclass('ScenesMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScenesMgr, _Component);

        function ScenesMgr() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ScenesMgr.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.onButtonClickCallBack = function onButtonClickCallBack(event, customEventData) {
          // The event here is a Touch object, and you can get the send node of the event by event.target
          var node = event.target;
          var button = node.getComponent(Button);
          console.log(customEventData); // foobar

          this.gotoScene(customEventData);
        };

        _proto.gotoScene = function gotoScene(scene) {
          if (Object.values(SCENE).includes(scene)) {
            console.log("loadScene: " + scene); // director.loadScene(scene);

            assetManager.loadBundle('https://storage.googleapis.com/huongdn_g4b/menuScene', function (err, bundle) {
              bundle.loadScene('menuScene', function (err, scene) {
                director.runScene(scene);
              });
            });
          } else {
            console.log("Can find Scene: " + scene);
          }
        };

        return ScenesMgr;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

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