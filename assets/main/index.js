System.register("chunks:///_virtual/Animal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AnimalManager.ts', './GameTrackingManager.ts', './MainUI.ts', './PopupManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Toggle, EventHandler, Component, AnimalManager, GameTrackingManager, MainUI, PopupManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Toggle = module.Toggle;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }, function (module) {
      AnimalManager = module.AnimalManager;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }, function (module) {
      MainUI = module.MainUI;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      exports('ANIMALTYPE', void 0);

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3;

      cclegacy._RF.push({}, "c8d65aN9XJPtacH/s2uxMQ5", "Animal", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ANIMALTYPE;

      (function (ANIMALTYPE) {
        ANIMALTYPE[ANIMALTYPE["KANGAROO"] = 0] = "KANGAROO";
        ANIMALTYPE[ANIMALTYPE["FLAMINGO"] = 1] = "FLAMINGO";
        ANIMALTYPE[ANIMALTYPE["LION"] = 2] = "LION";
        ANIMALTYPE[ANIMALTYPE["GIRAFFE"] = 3] = "GIRAFFE";
      })(ANIMALTYPE || (ANIMALTYPE = exports('ANIMALTYPE', {})));

      var Animal = exports('Animal', (_dec = ccclass('Animal'), _dec2 = property({
        type: Enum(ANIMALTYPE)
      }), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Animal, _Component);

        function Animal() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "animalType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalTitle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalUnlockImg", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "unlockBG3dWorld", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "toggleSelection", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalModel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalUnlockCanvas", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lockStatus", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalEncyCanvas", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalModelEncy", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "habitatSF", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imageSF", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "foodSF", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapSF", _descriptor14, _assertThisInitialized(_this));

          _this.isUnlock = false;
          return _this;
        }

        var _proto = Animal.prototype;

        _proto.addUnlockEvent = function addUnlockEvent() {
          var clickEventHandler = new EventHandler();
          clickEventHandler.target = this.node;
          clickEventHandler.component = 'Animal';
          clickEventHandler.handler = 'unlock';
          PopupManager.GetInstance().showPopupUnlockAnimal(clickEventHandler);
        };

        _proto.init = function init() {
          this.toggleSelection.interactable = false;
          this.toggleSelection.isChecked = false;
          this.status();
        };

        _proto.status = function status() {
          this.toggleSelection.interactable = this.isUnlock;
          this.animalUnlockImg.active = this.isUnlock;
          this.lockStatus.active = !this.toggleSelection.interactable;
          this.animalModel.active = this.toggleSelection.isChecked;
          this.animalUnlockCanvas.active = this.toggleSelection.isChecked;
          this.animalEncyCanvas.active = this.toggleSelection.isChecked;
          this.animalTitle.active = this.toggleSelection.isChecked;
          this.habitatSF.active = this.toggleSelection.isChecked;
          this.imageSF.active = this.toggleSelection.isChecked;
          this.foodSF.active = this.toggleSelection.isChecked;
          this.mapSF.active = this.toggleSelection.isChecked;
          this.unlockBG3dWorld.active = this.toggleSelection.isChecked; //console.log("status");
        };

        _proto.unlock = function unlock() {
          AnimalManager.GetInstance().hideAllModel();
          AnimalManager.GetInstance().setActiveAnimalModel(this.animalModel);
          AnimalManager.GetInstance().setActiveAnimalNode(this.node);
          GameTrackingManager.getInstance().GetAnimalName(this.animalType);

          if (MainUI.GetInstance().sentSelectAnimal) {
            GameTrackingManager.getInstance().OnSelectedAnimalTrackingEvent();
          } else if (!this.isUnlock) {
            GameTrackingManager.getInstance().OnGoToUnlockAnimalTrackingEvent();
          }

          if (PopupManager.GetInstance().getTriggeredParentPopup() && !this.isUnlock) {
            GameTrackingManager.getInstance().OnUnlockAnimalEvent();
          }

          this.isUnlock = true;
          this.toggleSelection.interactable = true;
          this.toggleSelection.isChecked = true;
          this.status();
        };

        _proto.hide = function hide() {
          this.toggleSelection.isChecked = false;
          this.status();
        };

        _proto.getAnimalType = function getAnimalType() {
          return this.animalType;
        };

        return Animal;
      }(Component), _class3.ANIMALTYPE = ANIMALTYPE, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animalType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ANIMALTYPE.KANGAROO;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animalTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animalUnlockImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "unlockBG3dWorld", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggleSelection", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "animalModel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "animalUnlockCanvas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lockStatus", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "animalEncyCanvas", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "animalModelEncy", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "habitatSF", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "imageSF", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "foodSF", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "mapSF", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimalManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Animal.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, animation, Component, Animal;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      animation = module.animation;
      Component = module.Component;
    }, function (module) {
      Animal = module.Animal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;

      cclegacy._RF.push({}, "eb8b7+ixMxD2KAScxnIdYKz", "AnimalManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AnimalManager = exports('AnimalManager', (_dec = ccclass('AnimalManager'), _dec2 = property(Animal), _dec3 = property(Animal), _dec4 = property(Animal), _dec5 = property(Animal), _dec6 = property(Toggle), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnimalManager, _Component);

        function AnimalManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "kagaroo", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lion", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "flamingo", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "giraffe", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "default", _descriptor5, _assertThisInitialized(_this));

          _this.activeAnimalNode = null;
          _this.activeAnimalModel = null;
          return _this;
        }

        var _proto = AnimalManager.prototype;

        _proto.start = function start() {
          AnimalManager.instance = this;
          this.kagaroo.init();
          this.lion.init();
          this.flamingo.init();
          this.giraffe.init();
        };

        _proto.update = function update(deltaTime) {};

        AnimalManager.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.changeAnimal = function changeAnimal() {
          this.kagaroo.status();
          this.lion.status();
          this.flamingo.status();
          this.giraffe.status();
        };

        _proto.hideAllModel = function hideAllModel() {
          //console.log("Hide all model first");
          this["default"].isChecked = true;
          this.kagaroo.hide();
          this.lion.hide();
          this.flamingo.hide();
          this.giraffe.hide();
        };

        _proto.getActiveAnimalAnimationController = function getActiveAnimalAnimationController() {
          return this.activeAnimalModel.getComponent(animation.AnimationController);
        };

        _proto.getActiveAnimal = function getActiveAnimal() {
          return this.activeAnimalNode.getComponent(Animal);
        };

        _proto.setActiveAnimalNode = function setActiveAnimalNode(activeNode) {
          this.activeAnimalNode = activeNode;
        };

        _proto.setActiveAnimalModel = function setActiveAnimalModel(active) {
          //console.log("setActive");
          this.activeAnimalModel = active;
        };

        return AnimalManager;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kagaroo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lion", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flamingo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "giraffe", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "default", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioControl.ts', './KagarooController.ts', './MainUI.ts', './VideoCamera.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, game, Game, Node, view, macro, Component, AudioControl, KagarooController, MainUI, VideoCamera;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Game = module.Game;
      Node = module.Node;
      view = module.view;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      AudioControl = module.AudioControl;
    }, function (module) {
      KagarooController = module.KagarooController;
    }, function (module) {
      MainUI = module.MainUI;
    }, function (module) {
      VideoCamera = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;

      cclegacy._RF.push({}, "75348tPWIlDzr3PoY+ONjZ9", "AppManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      game.on(Game.EVENT_SHOW, function () {
        AppManager.GetInstance().onGameResume();
      });
      var AppManager = exports('AppManager', (_dec = ccclass('AppManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AppManager, _Component);

        function AppManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ActiveAnimal", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mainUI", _descriptor2, _assertThisInitialized(_this));

          _this.mVideoCamera = new VideoCamera();
          _this.m_isPlayingCamera = false;
          return _this;
        }

        var _proto = AppManager.prototype;

        _proto.start = function start() {
          /*this.mVideoCamera.Setup("user");
          this.mVideoCamera.Play();*/
          AppManager.instance = this;
          view.setOrientation(macro.ORIENTATION_PORTRAIT);
          view.setResizeCallback(this.OnSizeChanged.bind(this));
          this.ActiveAnimal.active = false;
          MainUI.GetInstance().init();
        };

        AppManager.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.test = function test() {
          this.ActiveAnimal.active = false;
        };

        _proto.update = function update(deltaTime) {};

        _proto.Playing = function Playing() {
          var _this2 = this; // this.mVideoCamera.Setup("user").then(  //use when need to get front camera


          this.mVideoCamera.Setup().then( // use to get back camera
          function (video) {
            _this2.m_isPlayingCamera = true;

            _this2.mVideoCamera.Play();
          }); //this.UICanvas.active = false;
          //console.log("Camera");

          this.switchtoPlayAnimalState();
          MainUI.GetInstance().gotoHome();
          this.activeAnimal();
        };

        _proto.OnSizeChanged = function OnSizeChanged() {
          this.mVideoCamera.Resize();
        };

        _proto.activeAnimal = function activeAnimal() {
          var _this$ActiveAnimal$ge;

          this.ActiveAnimal.active = true;
          (_this$ActiveAnimal$ge = this.ActiveAnimal.getComponent(KagarooController)) == null ? void 0 : _this$ActiveAnimal$ge.init();
        };

        _proto.deactiveAnimal = function deactiveAnimal() {
          this.ActiveAnimal.active = false;
        };

        _proto.switchToFeedAnimalState = function switchToFeedAnimalState() {
          var _this$ActiveAnimal$ge2;

          (_this$ActiveAnimal$ge2 = this.ActiveAnimal.getComponent(KagarooController)) == null ? void 0 : _this$ActiveAnimal$ge2.SwitchState(KagarooController.STATE.EAT);
        };

        _proto.switchtoPlayAnimalState = function switchtoPlayAnimalState() {
          var _this$ActiveAnimal$ge3;

          (_this$ActiveAnimal$ge3 = this.ActiveAnimal.getComponent(KagarooController)) == null ? void 0 : _this$ActiveAnimal$ge3.SwitchState(KagarooController.STATE.PLAY);
        };

        _proto.switchToNONEAnimalState = function switchToNONEAnimalState() {
          var _this$ActiveAnimal$ge4;

          (_this$ActiveAnimal$ge4 = this.ActiveAnimal.getComponent(KagarooController)) == null ? void 0 : _this$ActiveAnimal$ge4.SwitchState(KagarooController.STATE.NONE);
        };

        _proto.onGameResume = function onGameResume() {
          if (this.m_isPlayingCamera) {
            this.mVideoCamera.Play();
          }

          AudioControl.GetInstance().onGameResume();
        };

        return AppManager;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ActiveAnimal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameTrackingManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Button, AudioSource, Component, GameTrackingManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;

      cclegacy._RF.push({}, "c77dbLCyX5LurO0ldLEomso", "AudioControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AudioControl = exports('AudioControl', (_dec = ccclass('AudioControl'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Button), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioControl, _Component);

        function AudioControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "uiSoundSF", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "uiSoundMuteSF", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundBtn", _descriptor3, _assertThisInitialized(_this));

          _this.audioSource = null;
          _this.isMute = false;
          _this.isPlayingSound = false;
          return _this;
        }

        var _proto = AudioControl.prototype;

        _proto.start = function start() {
          AudioControl.instance = this;
          this.audioSource = this.node.getComponent(AudioSource);
        };

        AudioControl.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.switchVolume = function switchVolume() {
          this.isMute = !this.isMute;
          this.audioSource.volume = this.isMute ? 0 : 1;
          this.soundBtn.normalSprite = this.isMute ? this.uiSoundMuteSF : this.uiSoundSF;
          var state = this.isMute ? "off" : "on";
          GameTrackingManager.getInstance().OnChangeBGMTrackingEvent(state);
        };

        _proto.playSound = function playSound() {
          this.audioSource.play();
          this.isPlayingSound = true;
        };

        _proto.onGameResume = function onGameResume() {
          if (this.isPlayingSound && !this.isMute) {
            this.playSound();
          }
        };

        return AudioControl;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiSoundSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiSoundMuteSF", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraPermissionPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _class;

      cclegacy._RF.push({}, "39f2fM7jelFaZyUGOwsWI38", "CameraPermissionPopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraPermissionPopup = exports('CameraPermissionPopup', (_dec = ccclass('CameraPermissionPopup'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraPermissionPopup, _Component);

        function CameraPermissionPopup() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CameraPermissionPopup.prototype;

        _proto.start = function start() {
          this.node.active = false;
        };

        _proto.show = function show() {
          this.node.active = true;
        };

        _proto.hide = function hide() {
          this.node.active = false;
        };

        return CameraPermissionPopup;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CapturenScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainUI.ts', './GameTrackingManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RenderTexture, Material, Node, Texture2D, ImageAsset, Component, MainUI, GameTrackingManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RenderTexture = module.RenderTexture;
      Material = module.Material;
      Node = module.Node;
      Texture2D = module.Texture2D;
      ImageAsset = module.ImageAsset;
      Component = module.Component;
    }, function (module) {
      MainUI = module.MainUI;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "d08376zPztHyYCFCQIDFW0A", "CapturenScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CapturenScreen = exports('CapturenScreen', (_dec = ccclass('CapturenScreen'), _dec2 = property({
        type: RenderTexture
      }), _dec3 = property({
        type: Material
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CapturenScreen, _Component);

        function CapturenScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "renderTexture", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "material", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "backGroundNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UIPhoto", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UITitle", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UIHome", _descriptor6, _assertThisInitialized(_this));

          _this.context = void 0;
          _this.video = void 0;
          _this.canvas = void 0;
          _this.corveredImage = void 0;
          _this.imagePhoto = void 0;
          _this.UISprite = void 0;
          _this.dataImage = void 0;
          _this.longTouch = 0;
          _this.isTouch = false;
          return _this;
        }

        var _proto = CapturenScreen.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          if (this.isTouch) {
            this.longTouch += deltaTime;
          }

          if (this.longTouch >= 0.7) {
            GameTrackingManager.getInstance().OnLongPressTrackingEvent();
            this.isTouch = false;
            this.longTouch = 0;
          }
        };

        _proto.CaptureScreenShot = function CaptureScreenShot() {
          this.TakePhoto();
          this.schedule(this.ScreenShot, 0.3, 0);
          GameTrackingManager.getInstance().OnARScreenshotTrackingEvent();
        } // Dowload Image
        ;

        _proto.DownloadImage = function DownloadImage(data, filename) {
          var a = document.createElement('a');
          a.href = data;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
        };

        _proto.ScreenShot = function ScreenShot() {
          var _this2 = this;

          this.corveredImage = document.getElementById('coveredImage');
          this.imagePhoto = document.getElementById('imagePhoto');
          var texture = this.renderTexture;
          var data = this.renderTexture.readPixels();
          var width = texture.width;
          var height = texture.height; // Converting to base64 data

          var canvas = document.createElement('canvas');
          this.context = canvas.getContext('2d');
          canvas.width = width;
          canvas.height = height;
          var rowBytes = width * 4;

          for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var imageData = this.context.createImageData(width, 1);
            var start = srow * width * 4;

            for (var i = 0; i < rowBytes; i++) {
              imageData.data[i] = data[start + i];
            }

            this.context.putImageData(imageData, 0, row);
          }

          var dataUrl = canvas.toDataURL("image/png");
          this.corveredImage.src = dataUrl;
          this.dataImage = dataUrl;
          this.imagePhoto.style.display = 'block';
          /*
            this.DownloadImage(dataUrl,"image/png");
            let spriteFrame = new SpriteFrame();
            let photo = new Texture2D();
            photo.image = new ImageAsset(canvas);
            spriteFrame.texture = photo;
            this.photo.spriteFrame = spriteFrame;
          */
          ////console.log("Width picture : " + photo.width + " Height picture : " + photo.height);
          //this.UISprite.setContentSize(480,720);
          // Show UI game after screen shot

          if (this.backGroundNode.active == true) {
            this.backGroundNode.active = false;
          }

          if (this.UIHome.active == false) {
            this.UIHome.active = true;
          }

          if (this.UITitle.active == false) {
            this.UITitle.active = true;
          }

          if (this.UIPhoto.active == true) {
            this.UIPhoto.active = false;
          } // if(this.UIFood.active == true)
          // {
          //     this.UIFood.active = false;
          // }
          //this.OpenPopupPhoto();
          //Tracking Event


          if (this.corveredImage != null) {
            this.corveredImage.addEventListener('touchstart', function () {
              _this2.isTouch = true;
            }, true, true);
            this.corveredImage.addEventListener('touchend', function () {
              _this2.isTouch = false;
            }, true, true);
          }
        } //Clear canvas
        ;

        _proto.ClearPhoto = function ClearPhoto() {
          var context = this.canvas.getContext('2d');
          context.fillStyle = '#AAA';
          context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };

        _proto.TakePhoto = function TakePhoto() {
          this.video = document.getElementById('video');
          this.canvas = document.getElementById('canvas'); //this.canvas.style.height = 720;
          //console.log("screen width, height :" + width + " " + height);
          //console.log("video width, height : " + this.video.width + "  " + this.video.height);

          this.ClearPhoto();
          var context = this.canvas.getContext('2d');
          context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height); //console.log("canvas width, height :" + this.canvas.width + " " + this.canvas.height);

          var data = this.canvas.toDataURL('image/png'); //localStorage.setItem('img',data);
          //this.DownloadImage(data,'image/png');

          var texture = new Texture2D();
          texture.image = new ImageAsset(this.canvas);
          this.material.setProperty('mainTexture', texture, 0); // show image back

          if (this.backGroundNode.active == false && MainUI.GetInstance().openCamera) {
            this.backGroundNode.active = true;
          } // hide UI to caoture screen


          if (this.UIHome.active == true) {
            this.UIHome.active = false;
          }

          if (this.UITitle.active == true) {
            this.UITitle.active = false;
          }

          if (this.UIPhoto.active == false) {
            this.UIPhoto.active = true;
          } // //console.log("data :" + data);     

        };

        return CapturenScreen;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "renderTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "backGroundNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UIPhoto", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "UITitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "UIHome", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChangeAnimalUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "2b974OfW8lHy6X91zIaDTZD", "ChangeAnimalUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChangeAnimalUI = exports('ChangeAnimalUI', (_dec = ccclass('ChangeAnimalUI'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChangeAnimalUI, _Component);

        function ChangeAnimalUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "kangarooTg", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "flamingoTg", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lionTg", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "giraffeTg", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeBtn", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ChangeAnimalUI.prototype;

        _proto.init = function init() {
          this.node.active = false;
        };

        _proto.show = function show() {
          this.node.active = true;
          this.activeButton(true);
        };

        _proto.hide = function hide() {
          this.node.active = false;
        };

        _proto.activeToggle = function activeToggle(active) {
          this.kangarooTg.interactable = active;
          this.flamingoTg.interactable = active;
          this.lionTg.interactable = active;
          this.giraffeTg.interactable = active;
        };

        _proto.activeButton = function activeButton(active) {
          this.closeBtn.interactable = active;
        };

        return ChangeAnimalUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kangarooTg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "flamingoTg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lionTg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "giraffeTg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterSelectUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainUI.ts', './PopupManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, director, Component, MainUI, PopupManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      MainUI = module.MainUI;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "38f24x0crREJarqw3t2YPCS", "CharacterSelectUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CharacterSelectUI = exports('CharacterSelectUI', (_dec = ccclass('CharacterSelectUI'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterSelectUI, _Component);

        function CharacterSelectUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "bg3dWord", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "kangarooUnlock", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FlamingoUnlock", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lionUnlock", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "giraffeUnlock", _descriptor5, _assertThisInitialized(_this));

          _this.animalName = "";
          return _this;
        }

        var _proto = CharacterSelectUI.prototype;

        _proto.init = function init() {
          this.node.active = true; //this.childrenPopup.active = false;

          this.bg3dWord.active = true;
          this.lockAllUnlockAnimalBtn(true);
        };

        _proto.show = function show() {
          this.init(); //this.node.active = true;
          //this.bg3dWord.active = true;
        };

        _proto.hide = function hide() {
          //this.childrenPopup.active = false;
          this.node.active = false;
          this.bg3dWord.active = false;
        };

        _proto.showParentPopup = function showParentPopup() {
          if (PopupManager.GetInstance().showPopupParent()) {
            this.lockAllUnlockAnimalBtn(false);
          } else {
            MainUI.GetInstance().gotoUnlockUI();
          }
        };

        _proto.lockAllUnlockAnimalBtn = function lockAllUnlockAnimalBtn(lock) {
          this.kangarooUnlock.interactable = lock;
          this.FlamingoUnlock.interactable = lock;
          this.lionUnlock.interactable = lock;
          this.giraffeUnlock.interactable = lock;
        } // test
        ;

        _proto.backToHome = function backToHome() {
          director.loadScene('home');
        };

        return CharacterSelectUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg3dWord", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "kangarooUnlock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "FlamingoUnlock", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lionUnlock", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "giraffeUnlock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeviceManger.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8aa13qxf8NPSbMyilaC6flY", "DeviceManger", undefined);

      var DeviceManager = exports('DeviceManager', /*#__PURE__*/function () {
        function DeviceManager() {
          this.localMediaStream = void 0;
          this.camera = {
            available: false,
            permissionGranted: false,
            error: {
              message: null,
              name: null
            }
          };
          this.microphone = {
            available: false,
            permissionGranted: false,
            error: {
              message: null,
              name: null
            }
          };
        }

        var _proto = DeviceManager.prototype;

        _proto.identifyDevices = function identifyDevices() {
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            return console.log({
              devices: devices
            });
          })["catch"](function (error) {
            return console.error('couldnt get constraints');
          });
        };

        _proto.requestCamera = function requestCamera() {
          var _this = this;

          navigator.mediaDevices.getUserMedia({
            video: true
          }).then(function (mediaStream) {
            _this.camera.permissionGranted = true;
            _this.camera.error = null;

            if (!_this.localMediaStream) {
              _this.localMediaStream = mediaStream;
            } else {
              var videoTrack = mediaStream.getVideoTracks()[0];

              _this.localMediaStream.addTrack(videoTrack);

              mediaStream.getTracks().forEach(function (track) {
                return track.stop();
              });
            }
          })["catch"](function (error) {
            _this.camera.error.message = error.message;
            _this.camera.error.name = error.name;
            console.error('no camera', _this.camera.error);
          });
        };

        _proto.requestMicrophone = function requestMicrophone() {
          var _this2 = this;

          navigator.mediaDevices.getUserMedia({
            audio: true
          }).then(function (mediaStream) {
            _this2.microphone.permissionGranted = true;
            _this2.microphone.error = null;

            if (!_this2.localMediaStream) {
              _this2.localMediaStream = mediaStream;
            } else {
              var audioTrack = mediaStream.getAudioTracks()[0];

              _this2.localMediaStream.addTrack(audioTrack);

              mediaStream.getTracks().forEach(function (track) {
                return track.stop();
              });
            }
          })["catch"](function (error) {
            _this2.microphone.error.message = error.message;
            _this2.microphone.error.name = error.name;
            console.error('no mic', _this2.microphone.error);
          });
        };

        return DeviceManager;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EncyclopediaUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameTrackingManager.ts', './MainUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, Button, Component, GameTrackingManager, MainUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }, function (module) {
      MainUI = module.MainUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

      cclegacy._RF.push({}, "d5570+aNMNBpKsWeic7F5lj", "EncyclopediaUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EncyclopediaUI = exports('EncyclopediaUI', (_dec = ccclass('EncyclopediaUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EncyclopediaUI, _Component);

        function EncyclopediaUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "completeExplorePopup", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tutorialPopup", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnNormalSF", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnSelectSF", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnMap", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnHabitat", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnPicture", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnFood", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapImage", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "habitatImage", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Image", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "foodImage", _descriptor13, _assertThisInitialized(_this));

          _this.isGotoMap = false;
          _this.isGotoHabitat = false;
          _this.isGotoFood = false;
          _this.isGotoPicture = false;
          _this.activeExploreCompletePopup = false;
          _this.askUserTryAnother = false;
          _this.delay = 1;
          _this.currentTab = "";
          _this.time_spent = 0;
          return _this;
        }

        var _proto = EncyclopediaUI.prototype;

        _proto.init = function init() {
          this.node.active = false; //this.registrationPopup.node.active = false;

          this.completeExplorePopup.active = false;
          this.tutorialPopup.active = false;
          this.askUserTryAnother = false;
          this.isGotoMap = false;
          this.isGotoHabitat = false;
          this.isGotoFood = false;
          this.isGotoPicture = false;
          console.log("ency init");
        };

        _proto.update = function update(deltaTime) {
          if (this.activeExploreCompletePopup == true) {
            this.showCompletePopup();
          }

          this.time_spent += deltaTime;
        };

        _proto.show = function show() {
          this.node.active = !this.node.active;
          this.gotoFood();
        };

        _proto.hide = function hide() {
          GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent(this.currentTab, Math.floor(this.time_spent));

          if (this.isGotoMap == true && this.isGotoHabitat == true && this.isGotoFood == true && this.isGotoPicture == true && this.askUserTryAnother == false && this.completeExplorePopup.active == false) {
            this.activeExploreCompletePopup = true;
            this.askUserTryAnother = true;
            GameTrackingManager.getInstance().OnVisitAllSectionsTrackingEvent();
          } else {
            this.node.active = false;

            if (MainUI.GetInstance().openCamera) {
              MainUI.GetInstance().hideBackGround();
            }

            MainUI.GetInstance().gotoHome();
          }
        };

        _proto.close = function close() {};

        _proto.gotoMap = function gotoMap() {
          if (!this.mapImage.active) {
            if (this.currentTab != "") {
              GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent(this.currentTab, Math.floor(this.time_spent));
            }

            this.currentTab = "Location";
            this.time_spent = 0; // GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent("Location");
          }

          if (this.activeExploreCompletePopup == false) {
            this.isGotoMap = true;
            this.allBtnNormalSpriteAndDeactiveImg();
            this.mapImage.active = true;
            this.btnMap.normalSprite = this.btnSelectSF;
          }
        };

        _proto.gotoHabitat = function gotoHabitat() {
          if (!this.habitatImage.active) {
            if (this.currentTab != "") {
              GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent(this.currentTab, Math.floor(this.time_spent));
            }

            this.currentTab = "Habitat";
            this.time_spent = 0; // GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent("Habitat");
          }

          if (this.activeExploreCompletePopup == false) {
            this.isGotoHabitat = true;
            this.allBtnNormalSpriteAndDeactiveImg();
            this.habitatImage.active = true;
            this.btnHabitat.normalSprite = this.btnSelectSF;
          }
        };

        _proto.gotoFood = function gotoFood() {
          if (!this.foodImage.active) {
            if (this.currentTab != "") {
              GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent(this.currentTab, Math.floor(this.time_spent));
            }

            this.currentTab = "Favorite food";
            this.time_spent = 0; // GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent("Favorite food");
          }

          if (this.activeExploreCompletePopup == false) {
            this.isGotoFood = true;
            this.allBtnNormalSpriteAndDeactiveImg();
            this.foodImage.active = true;
            this.btnFood.normalSprite = this.btnSelectSF;
          }
        };

        _proto.gotoPicture = function gotoPicture() {
          if (!this.Image.active) {
            if (this.currentTab != "") {
              GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent(this.currentTab, Math.floor(this.time_spent));
            }

            this.currentTab = "Picture";
            this.time_spent = 0; // GameTrackingManager.getInstance().OnEncyclopediaInformationTrackingEvent("Picture");
          }

          if (this.activeExploreCompletePopup == false) {
            this.isGotoPicture = true;
            this.allBtnNormalSpriteAndDeactiveImg();
            this.Image.active = true;
            this.btnPicture.normalSprite = this.btnSelectSF;
          }
        };

        _proto.allBtnNormalSpriteAndDeactiveImg = function allBtnNormalSpriteAndDeactiveImg() {
          this.btnMap.normalSprite = this.btnNormalSF;
          this.btnHabitat.normalSprite = this.btnNormalSF;
          this.btnPicture.normalSprite = this.btnNormalSF;
          this.btnFood.normalSprite = this.btnNormalSF;
          this.mapImage.active = false;
          this.habitatImage.active = false;
          this.foodImage.active = false;
          this.Image.active = false;
        };

        _proto.showCompletePopup = function showCompletePopup() {
          this.completeExplorePopup.active = true;
        };

        _proto.showTutorialPopup = function showTutorialPopup() {
          this.tutorialPopup.active = true;
          this.hideCompletePopup();
          GameTrackingManager.getInstance().OnGoToApplayduDownloadGuideTrackingEvent();
        };

        _proto.hideCompletePopup = function hideCompletePopup() {
          this.completeExplorePopup.active = false;
          this.activeExploreCompletePopup = false;
        };

        _proto.hideTutorialPopup = function hideTutorialPopup() {
          this.tutorialPopup.active = false;
        };

        _proto.redirectCRM = function redirectCRM() {
          // console.log('Navigating');
          GameTrackingManager.getInstance().OnGoToKinderMPTrackingEvent();
          wx.miniProgram.navigateTo({
            url: '/pages/userPackage/memberRegister?scene=applayduregis'
          });
        };

        return EncyclopediaUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "completeExplorePopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tutorialPopup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animalLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNormalSF", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectSF", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnMap", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnHabitat", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnPicture", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnFood", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mapImage", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "habitatImage", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Image", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "foodImage", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Food.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Animal.ts', './AnimalManager.ts', './AppManager.ts', './FoodManager.ts', './GameTrackingManager.ts', './MainUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Vec3, Component, Animal, AnimalManager, AppManager, FoodManager, GameTrackingManager, MainUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Animal = module.Animal;
    }, function (module) {
      AnimalManager = module.AnimalManager;
    }, function (module) {
      AppManager = module.AppManager;
    }, function (module) {
      FoodManager = module.FoodManager;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }, function (module) {
      MainUI = module.MainUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;

      cclegacy._RF.push({}, "36bf7HXO8BIo6hgAnIa2Qi5", "Food", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TYPE;

      (function (TYPE) {
        TYPE[TYPE["BERRIES"] = 0] = "BERRIES";
        TYPE[TYPE["SEAWEED"] = 1] = "SEAWEED";
        TYPE[TYPE["STEAK"] = 2] = "STEAK";
        TYPE[TYPE["TWIGS"] = 3] = "TWIGS";
      })(TYPE || (TYPE = {}));

      var Food = exports('Food', (_dec = ccclass('Food'), _dec2 = property({
        type: Enum(TYPE)
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Food, _Component);

        function Food() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "foodType", _descriptor, _assertThisInitialized(_this));

          _this.expiredFood = 7;
          _this.eatDelay = 2;
          _this.time_spent = 0;
          _this.isEaten = false;
          _this.currentFoodType = "";
          return _this;
        }

        var _proto = Food.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          var pos = this.node.getPosition();
          var down = new Vec3(0, -1, 0);
          pos.add(down.multiplyScalar(deltaTime * 5));

          if (pos.y >= -5.8) {
            this.node.setPosition(pos);
          }

          if (this.expiredFood > 0) {
            this.time_spent += deltaTime;
            this.expiredFood -= deltaTime;

            if (this.eatDelay > 0) {
              this.eatDelay -= deltaTime;
            } else if (this.isEaten == false) {
              if (this.isAnimalLikeTheFood()) {
                AppManager.GetInstance().switchToFeedAnimalState();
              } else {
                this.expiredFood = 1;
              }

              this.isEaten = true;
            }
          } else {
            AppManager.GetInstance().switchToNONEAnimalState();
            this.destroyFood();
          }
        };

        _proto.isAnimalLikeTheFood = function isAnimalLikeTheFood() {
          var _AnimalManager$GetIns, _AnimalManager$GetIns2, _AnimalManager$GetIns3, _AnimalManager$GetIns4;

          if ((((_AnimalManager$GetIns = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns.getAnimalType()) == Animal.ANIMALTYPE.KANGAROO || ((_AnimalManager$GetIns2 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns2.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) && this.foodType == TYPE.TWIGS || ((_AnimalManager$GetIns3 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns3.getAnimalType()) == Animal.ANIMALTYPE.LION && this.foodType == TYPE.STEAK || ((_AnimalManager$GetIns4 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns4.getAnimalType()) == Animal.ANIMALTYPE.FLAMINGO && this.foodType == TYPE.SEAWEED) {
            return true;
          } else {
            return false;
          }
        };

        _proto.destroyFood = function destroyFood() {
          if (this.node.isValid) {
            this.getFoodType();
            GameTrackingManager.getInstance().OnARScreenshotFoodTrackingEvent(this.currentFoodType, Math.floor(this.time_spent));
            this.node.destroy();
          }
        };

        _proto.onDisable = function onDisable() {
          if (this.node.isValid) {
            this.node.destroy();
          }
        };

        _proto.Initialize = function Initialize(parent) {
          this.node.setParent(parent);
          FoodManager.GetInstance().deactiveFoodBtn();
          MainUI.GetInstance().setAlphaHomeAndFoodPanel(0);
        };

        _proto.getFoodType = function getFoodType() {
          switch (this.foodType) {
            case TYPE.BERRIES:
              this.currentFoodType = "Berries";
              break;

            case TYPE.SEAWEED:
              this.currentFoodType = "Seaweed";
              break;

            case TYPE.STEAK:
              this.currentFoodType = "Steak";
              break;

            case TYPE.TWIGS:
              this.currentFoodType = "Twigs";
              break;
          }

          return this.foodType;
        };

        return Food;
      }(Component), _class3.FOODTYPE = TYPE, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "foodType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TYPE.BERRIES;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FoodManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Animal.ts', './AnimalManager.ts', './Food.ts', './KagarooController.ts', './MainUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Button, Label, instantiate, Component, Animal, AnimalManager, Food, KagarooController, MainUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Button = module.Button;
      Label = module.Label;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Animal = module.Animal;
    }, function (module) {
      AnimalManager = module.AnimalManager;
    }, function (module) {
      Food = module.Food;
    }, function (module) {
      KagarooController = module.KagarooController;
    }, function (module) {
      MainUI = module.MainUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3;

      cclegacy._RF.push({}, "48028piprRLMaVhc/TgnTtM", "FoodManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FoodManager = exports('FoodManager', (_dec = ccclass('FoodManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(KagarooController), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FoodManager, _Component);

        function FoodManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "prefabBerries", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prefabSteak", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prefabTwigs", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prefabSeaweed", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "kangaroo", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spawnBerriesBtn", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spawnSteakBtn", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spawnTwigsBtn", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spawnSeaweedBtn", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeBtn", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "reactionMessage", _descriptor11, _assertThisInitialized(_this));

          _this.isAnimalLikeTheFood = true;
          _this.countdown = 8;
          _this.startCountdown = false;
          return _this;
        }

        var _proto = FoodManager.prototype;

        _proto.start = function start() {
          FoodManager.instance = this;
          this.reactionMessage.node.active = false;
        };

        _proto.update = function update(deltaTime) {
          if (this.startCountdown) {
            this.countdown -= deltaTime;
            this.animalReaction();

            if (this.countdown < 0) {
              this.activeFoodBtn();
              this.resetCountdown();
            }
          }
        };

        FoodManager.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.resetCountdown = function resetCountdown() {
          this.startCountdown = false;
          this.reactionMessage.node.active = false;

          if (this.isAnimalLikeTheFood) {
            this.countdown = 8;
          } else {
            this.countdown = 4;
          }
        };

        _proto.onDisable = function onDisable() {
          this.activeFoodBtn();
        };

        _proto.deactiveFoodBtn = function deactiveFoodBtn() {
          this.spawnBerriesBtn.interactable = false;
          this.spawnSteakBtn.interactable = false;
          this.spawnTwigsBtn.interactable = false;
          this.spawnSeaweedBtn.interactable = false;
          this.closeBtn.interactable = false;
          this.resetCountdown();
          this.startCountdown = true;
        };

        _proto.activeFoodBtn = function activeFoodBtn() {
          this.spawnBerriesBtn.interactable = true;
          this.spawnSteakBtn.interactable = true;
          this.spawnTwigsBtn.interactable = true;
          this.spawnSeaweedBtn.interactable = true;
          this.closeBtn.interactable = true;
          this.resetCountdown();
          MainUI.GetInstance().setAlphaHomeAndFoodPanel(255);
        };

        _proto.animalReaction = function animalReaction() {
          var _AnimalManager$GetIns, _AnimalManager$GetIns2, _AnimalManager$GetIns3, _AnimalManager$GetIns4;

          this.reactionMessage.node.active = true;

          if (((_AnimalManager$GetIns = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns.getAnimalType()) == Animal.ANIMALTYPE.KANGAROO) {
            if (this.isAnimalLikeTheFood) {
              this.reactionMessage.string = "袋鼠喜欢这种食物！";
            } else {
              this.reactionMessage.string = "袋鼠不喜欢这种食物！";
            }
          }

          if (((_AnimalManager$GetIns2 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns2.getAnimalType()) == Animal.ANIMALTYPE.LION) {
            if (this.isAnimalLikeTheFood) {
              this.reactionMessage.string = "狮子喜欢这种食物！";
            } else {
              this.reactionMessage.string = "狮子不喜欢这种食物！";
            }
          }

          if (((_AnimalManager$GetIns3 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns3.getAnimalType()) == Animal.ANIMALTYPE.FLAMINGO) {
            if (this.isAnimalLikeTheFood) {
              this.reactionMessage.string = "火烈鸟喜欢这种食物！";
            } else {
              this.reactionMessage.string = "火烈鸟不喜欢这种食物！";
            }
          }

          if (((_AnimalManager$GetIns4 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns4.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) {
            if (this.isAnimalLikeTheFood) {
              this.reactionMessage.string = "长颈鹿喜欢这种食物！";
            } else {
              this.reactionMessage.string = "长颈鹿不喜欢这种食物！";
            }
          }
        };

        _proto.spawnBerries = function spawnBerries() {
          var _AnimalManager$GetIns5, _AnimalManager$GetIns6;

          var food = instantiate(this.prefabBerries).getComponent(Food);
          this.isAnimalLikeTheFood = food == null ? void 0 : food.isAnimalLikeTheFood();
          var feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));

          if (((_AnimalManager$GetIns5 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns5.getAnimalType()) == Animal.ANIMALTYPE.LION) {
            feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(3));
          }

          if (((_AnimalManager$GetIns6 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns6.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) {
            feedPos = feedPos.add(this.kangaroo.node.right.multiplyScalar(-1.5));
          }

          food == null ? void 0 : food.node.setPosition(feedPos);
          food.Initialize(this.node); // GameTrackingManager.getInstance().OnARScreenshotFoodTrackingEvent("Berries");
        } // TODO: just for testing, should clean these duplicate method later or not kekw
        ;

        _proto.spawnSteak = function spawnSteak() {
          var _AnimalManager$GetIns7, _AnimalManager$GetIns8;

          var food = instantiate(this.prefabSteak).getComponent(Food);
          this.isAnimalLikeTheFood = food == null ? void 0 : food.isAnimalLikeTheFood();
          var feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));

          if (((_AnimalManager$GetIns7 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns7.getAnimalType()) == Animal.ANIMALTYPE.LION) {
            feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(3));
          }

          if (((_AnimalManager$GetIns8 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns8.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) {
            feedPos = feedPos.add(this.kangaroo.node.right.multiplyScalar(-1.5));
          }

          food == null ? void 0 : food.node.setPosition(feedPos);
          food.Initialize(this.node); // GameTrackingManager.getInstance().OnARScreenshotFoodTrackingEvent("Steak");
        };

        _proto.spawnTwigs = function spawnTwigs() {
          var _AnimalManager$GetIns9, _AnimalManager$GetIns10;

          var food = instantiate(this.prefabTwigs).getComponent(Food);
          this.isAnimalLikeTheFood = food == null ? void 0 : food.isAnimalLikeTheFood();
          var feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));

          if (((_AnimalManager$GetIns9 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns9.getAnimalType()) == Animal.ANIMALTYPE.LION) {
            feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(3));
          }

          if (((_AnimalManager$GetIns10 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns10.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) {
            feedPos = feedPos.add(this.kangaroo.node.right.multiplyScalar(-1.5));
          }

          food == null ? void 0 : food.node.setPosition(feedPos);
          food.Initialize(this.node); // GameTrackingManager.getInstance().OnARScreenshotFoodTrackingEvent("Twigs");
        };

        _proto.spawnSeaweed = function spawnSeaweed() {
          var _AnimalManager$GetIns11, _AnimalManager$GetIns12;

          var food = instantiate(this.prefabSeaweed).getComponent(Food);
          this.isAnimalLikeTheFood = food == null ? void 0 : food.isAnimalLikeTheFood();
          var feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));

          if (((_AnimalManager$GetIns11 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns11.getAnimalType()) == Animal.ANIMALTYPE.LION) {
            feedPos = this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(3));
          }

          if (((_AnimalManager$GetIns12 = AnimalManager.GetInstance().getActiveAnimal()) == null ? void 0 : _AnimalManager$GetIns12.getAnimalType()) == Animal.ANIMALTYPE.GIRAFFE) {
            feedPos = feedPos.add(this.kangaroo.node.right.multiplyScalar(-1.5));
          }

          food == null ? void 0 : food.node.setPosition(feedPos);
          food.Initialize(this.node); // GameTrackingManager.getInstance().OnARScreenshotFoodTrackingEvent("Seaweed");
        };

        return FoodManager;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabBerries", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Prefab();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabSteak", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Prefab();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabTwigs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Prefab();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabSeaweed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Prefab();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "kangaroo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spawnBerriesBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spawnSteakBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spawnTwigsBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spawnSeaweedBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "reactionMessage", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FoodUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppManager.ts', './MainUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, AppManager, MainUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AppManager = module.AppManager;
    }, function (module) {
      MainUI = module.MainUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b8d4b3RAspMgahjL55H+VVV", "FoodUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FoodUI = exports('FoodUI', (_dec = ccclass('FoodUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FoodUI, _Component);

        function FoodUI() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = FoodUI.prototype;

        _proto.init = function init() {
          this.node.active = false;
        };

        _proto.show = function show() {
          this.node.active = !this.node.active;

          if (this.node.active) {
            AppManager.GetInstance().switchToNONEAnimalState();
            MainUI.GetInstance().setAlphaHomeAndFoodPanel(255);
          } else {
            AppManager.GetInstance().switchtoPlayAnimalState();
          }
        };

        _proto.hide = function hide() {
          this.node.active = false; //MainUI.GetInstance().gotoHome();
          //AppManager.GetInstance().switchtoPlayAnimalState();
          //MainUI.GetInstance().gotoHome();
        };

        return FoodUI;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameTrackingManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TrackingData.ts', './TrackingConfig.ts', './TrackingManager.ts', './Animal.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, GetTimeSpend, GetCustomTrackingEventData, TRACKING_ACTION_TYPE_SITE_INTERACTION, SetTrackingContext, SendEventTracking, ANIMALTYPE;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      GetTimeSpend = module.GetTimeSpend;
      GetCustomTrackingEventData = module.GetCustomTrackingEventData;
    }, function (module) {
      TRACKING_ACTION_TYPE_SITE_INTERACTION = module.TRACKING_ACTION_TYPE_SITE_INTERACTION;
    }, function (module) {
      SetTrackingContext = module.SetTrackingContext;
      SendEventTracking = module.SendEventTracking;
    }, function (module) {
      ANIMALTYPE = module.ANIMALTYPE;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d374f3afZlFhqlWZXIRgbUa", "GameTrackingManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // this class will handle all implementation of tracking event

      var GameTrackingManager = exports('GameTrackingManager', (_dec = ccclass('GameTrackingManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameTrackingManager, _Component);

        function GameTrackingManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.animalName = "";
          _this.currentTime = 0;
          _this.ARTime = 0;
          _this.FeedingTime = 0;
          _this.EncyclopediaTime = 0;
          _this.AnimalCollectionTime = 0;
          return _this;
        }

        GameTrackingManager.getInstance = function getInstance() {
          return GameTrackingManager.instance;
        };

        var _proto = GameTrackingManager.prototype;

        _proto.onLoad = function onLoad() {
          //const ets_url = `https://etsv3.wshtgame.com/gs_web?ggi=${ggi}`
          // const ets_beta_url = `https://ets-beta.ferrero-kinder.cn/gs_web?ggi=${ggi}`
          GameTrackingManager.instance = this; //config tracking event

          var anonid = localStorage.getItem("uuid");
          var version = '1.0.1bx';
          var pid = '4523'; //live
          //const ets_url = `https://ets.ferrero-kinder.cn`
          //const ggi = '84967' //live
          //beta

          var ets_url = "https://ets-beta.ferrero-kinder.cn";
          var ggi = '84965'; //beta

          var ctx = {
            isDebug: false,
            ets_url: ets_url,
            ggi: ggi,
            anon_id: window.GLOBAL_ANON_ID,
            //anonid,//'1234-5678-ABCD-XYZ-0000000',
            proto_ver: version,
            entity_type: pid + ":" + ggi + ":" + version + ":HTML5:Ads",
            entity_id: 'Tracking Wechat miniprogram',
            GetTrackingEventData: GetCustomTrackingEventData
          }; // Then apply to TrackingManager

          SetTrackingContext(ctx);
          this.OnLaunchWeChatTrackingEvent();
        };

        _proto.start = function start() {
          this.OnGameStartTrackingEvent();
        };

        _proto.OnLaunchWeChatTrackingEvent = function OnLaunchWeChatTrackingEvent() {
          //console.log("send OnLaunchWeChatTrackingEvent: " + GetTimeSpend());
          var customParams = {
            action_type: "Launch WeChat"
          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnLaunchWeChatTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnGameStartTrackingEvent = function OnGameStartTrackingEvent() {
          //console.log("send OnGameStartTrackingEvent: " + GetTimeSpend());
          var customParams = {
            action_type: "First loading finished",
            time_spent: GetTimeSpend()
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnGameStartTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnSelectedAnimalTrackingEvent = function OnSelectedAnimalTrackingEvent() {
          ////console.log("send OnSelectedAnimalTrackingEvent " + animalName);
          var customParams = {
            action_type: "Selected Animal",
            selected_animal: this.animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnSelectedAnimalTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnParentConfirmation = function OnParentConfirmation() {
          //console.log("send OnParentConfirmation");
          var customParams = {
            action_type: "Parent Confirmation",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnParentConfirmation start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnUnlockAnimalEvent = function OnUnlockAnimalEvent() {
          //console.log("send OnUnlockAnimalEvent");
          var customParams = {
            action_type: "Screen AR",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          this.FeedingTime = 0;
          this.EncyclopediaTime = 0;
          this.AnimalCollectionTime = 0;
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnUnlockAnimalEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnAllowCameraTrackingEvent = function OnAllowCameraTrackingEvent() {
          //console.log("send OnAllowCameraTrackingEvent");
          var customParams = {
            action_type: "Allow Camera",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnAllowCameraTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnBlockCameraTrackingEvent = function OnBlockCameraTrackingEvent() {
          //console.log("send OnBlockCameraTrackingEvent");
          var customParams = {
            action_type: "Do not allow Camera",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnBlockCameraTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnFeedingTrackingEvent = function OnFeedingTrackingEvent() {
          //console.log("send OnFeedingTrackingEvent");
          this.FeedingTime += GetTimeSpend() - this.currentTime;
          var customParams = {
            action_type: "AR Feeding",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: this.FeedingTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnFeedingTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnAnimalCollectionTrackingEvent = function OnAnimalCollectionTrackingEvent() {
          //console.log("send OnAnimalCollectionTrackingEvent");
          this.AnimalCollectionTime += GetTimeSpend() - this.currentTime;
          var customParams = {
            action_type: "Animal collection",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: this.AnimalCollectionTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnAnimalCollectionTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnEncyclopediaTrackingEvent = function OnEncyclopediaTrackingEvent() {
          //console.log("send OnEncyclopediaTrackingEvent");
          this.EncyclopediaTime += GetTimeSpend() - this.currentTime;
          var customParams = {
            action_type: "Encyclopedia",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: this.EncyclopediaTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnEncyclopediaTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnARScreenshotTrackingEvent = function OnARScreenshotTrackingEvent() {
          //console.log("sent OnARScreenshotTrackingEvent");
          var customParams = {
            action_type: "AR screenshot",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnARScreenshotTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnVisitAllSectionsTrackingEvent = function OnVisitAllSectionsTrackingEvent() {
          //console.log("sent OnVisitAllSectionsTrackingEvent");
          var customParams = {
            action_type: "Close Encyclopedia pop-up",
            selected_animal: GameTrackingManager.getInstance().animalName
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnVisitAllSectionsTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnUnlockNewAnimalPopupTrackingEvent = function OnUnlockNewAnimalPopupTrackingEvent() {
          //console.log("sent OnUnlockNewAnimalPopupTrackingEvent");
          var customParams = {
            action_type: "Unlock new animal pop-up",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnUnlockNewAnimalPopupTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnGoToKinderMPTrackingEvent = function OnGoToKinderMPTrackingEvent() {
          //console.log("sent OnGoToKinderMPTrackingEvent");
          var customParams = {
            action_type: "Go to Kinder MP",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnGoToKinderMPTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnGoToApplayduDownloadGuideTrackingEvent = function OnGoToApplayduDownloadGuideTrackingEvent() {
          //console.log("sent OnGoToApplayduDownloadGuideTrackingEvent");
          var customParams = {
            action_type: "Go to Applaydu download guide",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnGoToApplayduDownloadGuideTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnGoToAnimalSelectionTrackingEvent = function OnGoToAnimalSelectionTrackingEvent() {
          //console.log("sent OnGoToAnimalSelectionTrackingEvent");
          var customParams = {
            action_type: "Go to animal selection",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnGoToAnimalSelectionTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnGoToUnlockAnimalTrackingEvent = function OnGoToUnlockAnimalTrackingEvent() {
          //console.log("sent OnGoToUnlockAnimalTrackingEvent");
          var customParams = {
            action_type: "Go to unlock animal",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnGoToUnlockAnimalTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnChangeBGMTrackingEvent = function OnChangeBGMTrackingEvent(state) {
          //console.log("sent OnTurnOffBGMTrackingEvent");
          var customParams = {
            action_type: "Turn " + state + " BGM"
          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnTurnOffBGMTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnARScreenshotFoodTrackingEvent = function OnARScreenshotFoodTrackingEvent(foodType, timeSpent) {
          //console.log("sent OnARScreenshotFoodTrackingEvent");
          var customParams = {
            action_type: "AR screenshot - " + foodType,
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: timeSpent
          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnARScreenshotFoodTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnEncyclopediaInformationTrackingEvent = function OnEncyclopediaInformationTrackingEvent(info, timeSpent) {
          //console.log("sent OnEncyclopediaInformationTrackingEvent");
          var customParams = {
            action_type: "Encyclopedia - " + info,
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: timeSpent
          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnEncyclopediaInformationTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnLongPressTrackingEvent = function OnLongPressTrackingEvent() {
          //console.log("OnLongPressTrackingEvent");
          var customParams = {
            action_type: "AR screenshot long press 1.5s",
            selected_animal: GameTrackingManager.getInstance().animalName
          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnLongPressTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnClickCRMButtonTrackingEvent = function OnClickCRMButtonTrackingEvent() {
          var customParams = {
            action_type: "Click CRM button" // selected_animal: GameTrackingManager.getInstance().animalName

          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnClickCRMButtonTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnClickToHomeButtonTrackingEvent = function OnClickToHomeButtonTrackingEvent() {
          var customParams = {
            action_type: "Click to Home button" // selected_animal: GameTrackingManager.getInstance().animalName

          };
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnClickToHomeButtonTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.OnApplayduDownloadGuideFinishedTrackingEvent = function OnApplayduDownloadGuideFinishedTrackingEvent() {
          //console.log("sent OnApplayduDownloadGuideFinishedTrackingEvent");
          var customParams = {
            action_type: "Applaydu download guide finished",
            selected_animal: GameTrackingManager.getInstance().animalName,
            time_spent: GetTimeSpend() - this.currentTime
          };
          this.currentTime = GetTimeSpend();
          SendEventTracking(TRACKING_ACTION_TYPE_SITE_INTERACTION, function (trackingSuccess, trackingResponse) {//console.log("OnApplayduDownloadGuideFinishedTrackingEvent start", trackingSuccess, 'tracking response', trackingResponse)
          }, customParams);
        };

        _proto.GetAnimalName = function GetAnimalName(animatype) {
          if (animatype === ANIMALTYPE.KANGAROO) {
            this.animalName = "KANGAROO";
          } else if (animatype === ANIMALTYPE.FLAMINGO) {
            this.animalName = "FLAMINGO";
          } else if (animatype === ANIMALTYPE.GIRAFFE) {
            this.animalName = "GIRAFFE";
          } else if (animatype === ANIMALTYPE.LION) {
            this.animalName = "LION";
          }
        };

        _proto.SetARTime = function SetARTime() {
          this.ARTime = GetTimeSpend();
        };

        return GameTrackingManager;
      }(Component), _class2.instance = void 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, SpriteFrame, Component, AppManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      AppManager = module.AppManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "e82abKmN3RKEZxtRGra74Dr", "HomeUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HomeUI = exports('HomeUI', (_dec = ccclass('HomeUI'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HomeUI, _Component);

        function HomeUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "titleUI", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "foodBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "encyclopediaBtn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "changeAnimalBtn", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "photoBtn", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "normalSF", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "selectedSF", _descriptor7, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = HomeUI.prototype;

        _proto.init = function init() {
          this.node.active = false;
        };

        _proto.show = function show() {
          this.node.active = true;
          this.titleUI.active = true;
          AppManager.GetInstance().activeAnimal();
          this.activeAllBtn(true);
          this.btnNomalSF();
        };

        _proto.hide = function hide() {
          this.node.active = false;
          this.titleUI.active = false;
          AppManager.GetInstance().deactiveAnimal();
        };

        _proto.activeAllBtn = function activeAllBtn(active) {
          this.foodBtn.interactable = active;
          this.encyclopediaBtn.interactable = active;
          this.changeAnimalBtn.interactable = active;
          this.photoBtn.interactable = active;
          this.btnNomalSF();
        };

        _proto.btnNomalSF = function btnNomalSF() {
          this.foodBtn.normalSprite = this.normalSF;
          this.encyclopediaBtn.normalSprite = this.normalSF;
          this.changeAnimalBtn.normalSprite = this.normalSF;
        } // stupid but fast to implemet COPIUM
        ;

        _proto.pressFoodBtn = function pressFoodBtn() {
          this.btnNomalSF();
          this.foodBtn.normalSprite = this.selectedSF;
        };

        return HomeUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "foodBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "encyclopediaBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "changeAnimalBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "photoBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalSF", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectedSF", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KagarooController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AnimalManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, geometry, input, Input, PhysicsSystem, Vec3, Component, AnimalManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      geometry = module.geometry;
      input = module.input;
      Input = module.Input;
      PhysicsSystem = module.PhysicsSystem;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AnimalManager = module.AnimalManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;

      cclegacy._RF.push({}, "48620PnKRFFB6jQjEJujCIK", "KagarooController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          _float = _decorator["float"];
      var STATE;

      (function (STATE) {
        STATE[STATE["PLAY"] = 0] = "PLAY";
        STATE[STATE["EAT"] = 1] = "EAT";
        STATE[STATE["NONE"] = 2] = "NONE";
      })(STATE || (STATE = {}));

      var KagarooController = exports('KagarooController', (_dec = ccclass('KagarooController'), _dec2 = property({
        type: Camera
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KagarooController, _Component);

        function KagarooController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sphere", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "kangarooNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "feedPosition", _descriptor5, _assertThisInitialized(_this));

          _this._ray = new geometry.Ray();
          _this.activeAnimalNode = null;

          _initializerDefineProperty(_this, "velocity", _descriptor6, _assertThisInitialized(_this));

          _this.animalState = STATE.NONE;
          _this.isMove = false;
          _this.moveable = false;
          return _this;
        }

        var _proto = KagarooController.prototype;

        _proto.init = function init() {
          this.animationController = AnimalManager.GetInstance().getActiveAnimalAnimationController(); //this.animationController.setValue("velocity",0);
          ////console.log("init controller");
          //this.moveable = false;
        };

        _proto.onEnable = function onEnable() {
          //input.on(Input.EventType.MOUSE_DOWN,this.onMouseDown,this);
          //input.on(Input.EventType.MOUSE_UP,this.onMouseUp,this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this); //input.on(Input.EventType.TOUCH_END,this.onTouchEnd,this);
        };

        _proto.onDisable = function onDisable() {
          //input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown,this);
          //input.off(Input.EventType.MOUSE_UP,this.onMouseUp,this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this); //input.off(Input.EventType.TOUCH_END,this.onTouchEnd,this);
        };

        _proto.update = function update(deltaTime) {
          if (this.isMove && this.moveable) {
            var pos;
            pos = this.node.getPosition();
            var distant = this.node.forward;
            distant.multiplyScalar(this.velocity * deltaTime);
            pos.add(distant);
            this.node.setPosition(pos);

            if (Math.abs(this.node.getPosition().x - this.sphere.getPosition().x) < 0.1) {
              this.isMove = false;
              this.animationController.setValue("velocity", 0);
            } //Vec3.add(pos,this.node.getPosition(),Vec3.multiply(posMul,this.node.up,this.velocity*deltaTime));

          } else {
            this.animationController.setValue("velocity", 0);
            this.sphere.setPosition(this.node.getPosition());
          }
        } // onMouseUp(event : EventMouse) {
        //     let posMouse = event.getLocation();
        //     this.mainCamera.screenPointToRay(posMouse.x,posMouse.y,this._ray);
        //     if (this.moveable) {
        //         //console.log("can move mouse");
        //     }
        //     if(PhysicsSystem.instance.raycast(this._ray))
        //     {
        //         const raycastResults = PhysicsSystem.instance.raycastResults;
        //         for(let  i = 0; i< raycastResults.length;i++)
        //         {
        //             const item = raycastResults[i];
        //             if(item.collider.node = this.targetNode)
        //             {
        //                 let pos = new Vec3(item.hitPoint.x,item.hitPoint.y,item.hitPoint.z);
        //                 this.sphere.setPosition(pos);
        //                 this.node.lookAt(pos,this.node.up);
        //                 this.isMove = true;
        //                 this.animationController.setValue("velocity",1);
        //                 //console.log("Move");
        //             }
        //         }
        //     }
        // }
        ;

        _proto.onTouchStart = function onTouchStart(event) {
          var posTouch = event.getLocation();
          this.mainCamera.screenPointToRay(posTouch.x, posTouch.y, this._ray);
          if (this.moveable) ;

          if (PhysicsSystem.instance.raycast(this._ray) && this.moveable) {
            var raycastResults = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < raycastResults.length; i++) {
              var item = raycastResults[i];

              if (item.collider.node = this.targetNode) {
                var pos = new Vec3(item.hitPoint.x, item.hitPoint.y, item.hitPoint.z);
                this.sphere.setPosition(pos);
                this.node.lookAt(pos, this.node.up);
                this.isMove = true;
                this.animationController.setValue("velocity", 1);
              }
            }
          } else {
            this.animationController.setValue("velocity", 0);
            this.sphere.setPosition(this.node.getPosition());
          }
        };

        _proto.SwitchState = function SwitchState(state) {
          this.animalState = state;
          this.moveable = false;

          switch (state) {
            case STATE.PLAY:
              this.moveable = true;
              this.animationController.setValue("EatFood", false);
              break;

            case STATE.EAT:
              this.animationController.setValue("EatFood", true);
              break;

            case STATE.NONE:
              this.animationController.setValue("EatFood", false);
              break;
          }
        };

        _proto.getFeedPosition = function getFeedPosition() {
          return this.feedPosition.getPosition();
        };

        return KagarooController;
      }(Component), _class3.STATE = STATE, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sphere", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "kangarooNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "feedPosition", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, assetManager, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      assetManager = module.assetManager;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "c0e7aDXD4ZGc7AJqzu0ZJmg", "LoadScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadScene = exports('LoadScene', (_dec = ccclass('LoadScene'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadScene, _Component);

        function LoadScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "processText", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoadScene.prototype;

        _proto.loadMainScene = function loadMainScene() {
          var _bundle = assetManager.getBundle('mainScene');

          if (_bundle !== null) {
            this.processText.string = 'Change to main';

            _bundle.loadScene('main', function (err, scene) {
              director.runScene(scene);
            });
          } else {
            this.processText.string = 'load bundle and Change to main';
            assetManager.loadBundle('mainScene', function (err, bundle) {
              bundle.loadScene('main', function (err, scene) {
                director.runScene(scene);
              });
            });
          }
        };

        return LoadScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "processText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Animal.ts', './AnimalManager.ts', './AppManager.ts', './AudioControl.ts', './CapturenScreen.ts', './DeviceManger.ts', './Food.ts', './FoodManager.ts', './GameTrackingManager.ts', './KagarooController.ts', './LoadScene.ts', './TrackingConfig.ts', './TrackingData.ts', './TrackingInterface.ts', './TrackingManager.ts', './TrackingNode.ts', './CameraPermissionPopup.ts', './ChangeAnimalUI.ts', './CharacterSelectUI.ts', './EncyclopediaUI.ts', './FoodUI.ts', './HomeUI.ts', './MainUI.ts', './PopupManager.ts', './RegistrationPopup.ts', './UnlockUI.ts', './VideoCamera.ts', './uuidtest.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FoodUI.ts', './CharacterSelectUI.ts', './HomeUI.ts', './EncyclopediaUI.ts', './ChangeAnimalUI.ts', './AppManager.ts', './UnlockUI.ts', './PopupManager.ts', './GameTrackingManager.ts', './AnimalManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Color, Component, FoodUI, CharacterSelectUI, HomeUI, EncyclopediaUI, ChangeAnimalUI, AppManager, UnlockUI, PopupManager, GameTrackingManager, AnimalManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      FoodUI = module.FoodUI;
    }, function (module) {
      CharacterSelectUI = module.CharacterSelectUI;
    }, function (module) {
      HomeUI = module.HomeUI;
    }, function (module) {
      EncyclopediaUI = module.EncyclopediaUI;
    }, function (module) {
      ChangeAnimalUI = module.ChangeAnimalUI;
    }, function (module) {
      AppManager = module.AppManager;
    }, function (module) {
      UnlockUI = module.UnlockUI;
    }, function (module) {
      PopupManager = module.PopupManager;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }, function (module) {
      AnimalManager = module.AnimalManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;

      cclegacy._RF.push({}, "facc9jj535Fnre+IlyJZiWZ", "MainUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainUI = exports('MainUI', (_dec = ccclass('MainUI'), _dec2 = property(FoodUI), _dec3 = property(CharacterSelectUI), _dec4 = property(UnlockUI), _dec5 = property(HomeUI), _dec6 = property(EncyclopediaUI), _dec7 = property(ChangeAnimalUI), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainUI, _Component);

        function MainUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "foodUI", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "characterSelectUI", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "unlockUI", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homeUI", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "encyclopediaUI", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "changeAnimalUI", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animalLabel", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "homePanelSP", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "foodPanelSP", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bgUnlock3dWorld", _descriptor10, _assertThisInitialized(_this));

          _this.triggerPopup = false;
          _this.openCamera = false;
          _this.sentSelectAnimal = true;
          return _this;
        }

        var _proto = MainUI.prototype;

        _proto.start = function start() {
          MainUI.instance = this;
          this.init();
        };

        _proto.init = function init() {
          this.homeUI.init();
          this.characterSelectUI.init();
          this.foodUI.init();
          this.encyclopediaUI.init();
          this.changeAnimalUI.init();
          this.unlockUI.init(); ////console.log("Startfasdfasd");

          this.animalLabel.active = false;
          this.bgUnlock3dWorld.active = true;
        };

        MainUI.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.gotoUnlockUI = function gotoUnlockUI() {
          this.unlockUI.show();
          this.changeAnimalUI.hide();
          this.characterSelectUI.hide();
          AppManager.GetInstance().deactiveAnimal(); // reinit with new animal

          this.encyclopediaUI.init();
          PopupManager.GetInstance().init();
          this.animalLabel.active = false;
          this.bgUnlock3dWorld.active = true;
          this.sentSelectAnimal = false;
        };

        _proto.gotoFeedAnimal = function gotoFeedAnimal() {
          this.foodUI.show();
          this.homeUI.pressFoodBtn();

          if (this.foodUI.node.active == false) {
            this.homeUI.btnNomalSF();
            AppManager.GetInstance().switchtoPlayAnimalState();
          }

          GameTrackingManager.getInstance().OnFeedingTrackingEvent();
        };

        _proto.gotoAnimalSelect = function gotoAnimalSelect() {
          this.characterSelectUI.show();
          this.homeUI.hide();
          this.changeAnimalUI.hide();
          this.unlockUI.hide();
          this.foodUI.hide(); // reinit with new animal

          this.encyclopediaUI.init();
          PopupManager.GetInstance().init();
          this.animalLabel.active = false;
          this.bgUnlock3dWorld.active = false;
          GameTrackingManager.getInstance().OnGoToAnimalSelectionTrackingEvent();
          this.sentSelectAnimal = true;
        };

        _proto.gotoEncyclopedia = function gotoEncyclopedia() {
          GameTrackingManager.getInstance().OnEncyclopediaTrackingEvent();
          this.encyclopediaUI.show();
          this.changeAnimalUI.hide();
          this.homeUI.hide();
          this.foodUI.hide();
          this.animalLabel.active = true;
          this.bgUnlock3dWorld.active = true;
        };

        _proto.gotoChangeAnimalUI = function gotoChangeAnimalUI() {
          this.changeAnimalUI.show();
          this.homeUI.hide();
          this.foodUI.hide();
          this.animalLabel.active = true;
          AppManager.GetInstance().switchToNONEAnimalState();
          GameTrackingManager.getInstance().OnAnimalCollectionTrackingEvent();
        };

        _proto.gotoHome = function gotoHome() {
          this.animalLabel.active = true;
          this.homeUI.show();
          this.foodUI.hide();
          this.unlockUI.hide(); //this.foodUI.hide();

          this.changeAnimalUI.hide();
          AppManager.GetInstance().switchtoPlayAnimalState();
        };

        _proto.showBackGround = function showBackGround() {
          this.bgUnlock3dWorld.active = true;
        };

        _proto.hideBackGround = function hideBackGround() {
          this.bgUnlock3dWorld.active = false;
        };

        _proto.giftBoxHomeButton = function giftBoxHomeButton() {
          GameTrackingManager.getInstance().OnClickToHomeButtonTrackingEvent();
          PopupManager.GetInstance().showPopupChangeAnimal();
          this.homeUI.activeAllBtn(false);
        };

        _proto.userTriggerPopup = function userTriggerPopup(trigger) {
          //this.triggerPopup = trigger;
          if (trigger) {
            this.homeUI.activeAllBtn(false);
            this.changeAnimalUI.activeToggle(false);
            this.changeAnimalUI.activeButton(false);
            this.unlockUI.activeButton(false);
            this.foodUI.hide();
            AppManager.GetInstance().switchToNONEAnimalState();
          } else {
            this.homeUI.activeAllBtn(true);
            this.unlockUI.activeButton(true);
            this.changeAnimalUI.activeButton(true); // upd toggle interactive status

            AnimalManager.GetInstance().changeAnimal();

            if (this.changeAnimalUI.node.active == false && this.foodUI.node.active == false) {
              AppManager.GetInstance().switchtoPlayAnimalState();
            }
          }
        };

        _proto.setAlphaHomeAndFoodPanel = function setAlphaHomeAndFoodPanel(alpha) {
          //this.homePanelSP.color = new Color(255, 255, 255, alpha);
          this.foodPanelSP.color = new Color(255, 255, 255, alpha);
        };

        return MainUI;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "foodUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "characterSelectUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "unlockUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "homeUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "encyclopediaUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "changeAnimalUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "animalLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "homePanelSP", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "foodPanelSP", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bgUnlock3dWorld", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameTrackingManager.ts', './MainUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, EventHandler, Component, GameTrackingManager, MainUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }, function (module) {
      MainUI = module.MainUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;

      cclegacy._RF.push({}, "ed6bd7rLAVBMaM/SGvjXE4O", "PopupManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);

        function PopupManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "popupChangeAnimal", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popupParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popupUnlockAnimal", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popupRedirectCRML", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popupTutorial", _descriptor5, _assertThisInitialized(_this));

          _this.isTriggerParentPopup = false;
          _this.isTriggerPopup = false;
          return _this;
        }

        var _proto = PopupManager.prototype;

        _proto.start = function start() {
          PopupManager.instance = this;
          this.init();
        };

        _proto.init = function init() {
          this.popupChangeAnimal.active = false;
          this.popupParent.active = false;
          this.popupUnlockAnimal.active = false;
          this.popupRedirectCRML.active = false;
          this.popupTutorial.active = false;
        };

        _proto.showPopupChangeAnimal = function showPopupChangeAnimal() {
          if (this.isTriggerPopup) {
            return;
          }

          this.popupChangeAnimal.active = true;
          this.isTriggerPopup = true;
          MainUI.GetInstance().userTriggerPopup(true);
        };

        _proto.showPopupParent = function showPopupParent() {
          if (this.isTriggerParentPopup == false) {
            this.popupParent.active = true;
            this.isTriggerParentPopup = true;
            MainUI.GetInstance().userTriggerPopup(true);
            return true;
          }

          return false;
        };

        _proto.showPopupUnlockAnimal = function showPopupUnlockAnimal(unlockEvent) {
          var _this$popupUnlockAnim, _this$popupUnlockAnim2, _this$popupUnlockAnim3, _this$popupUnlockAnim4;

          if (this.isTriggerPopup) {
            return;
          }

          if (!this.popupUnlockAnimal.active) {
            GameTrackingManager.getInstance().OnUnlockNewAnimalPopupTrackingEvent();
          }

          this.popupUnlockAnimal.active = true;
          this.isTriggerPopup = true;
          MainUI.GetInstance().userTriggerPopup(true);
          (_this$popupUnlockAnim = this.popupUnlockAnimal.getChildByName('Yes')) == null ? void 0 : (_this$popupUnlockAnim2 = _this$popupUnlockAnim.getComponent(Button)) == null ? void 0 : _this$popupUnlockAnim2.clickEvents.push(unlockEvent);
          var clickNoHandler = new EventHandler();
          clickNoHandler.target = this.node;
          clickNoHandler.component = 'PopupManager';
          clickNoHandler.handler = 'popEvent';
          (_this$popupUnlockAnim3 = this.popupUnlockAnimal.getChildByName('No')) == null ? void 0 : (_this$popupUnlockAnim4 = _this$popupUnlockAnim3.getComponent(Button)) == null ? void 0 : _this$popupUnlockAnim4.clickEvents.push(clickNoHandler);
        };

        _proto.showPopupRedirectCRM = function showPopupRedirectCRM() {
          if (this.isTriggerPopup) {
            return;
          }

          this.popupRedirectCRML.active = true;
          this.isTriggerPopup = true;
          MainUI.GetInstance().userTriggerPopup(true);
          GameTrackingManager.getInstance().OnClickCRMButtonTrackingEvent();
        };

        _proto.showTutorialPopup = function showTutorialPopup() {
          this.popupTutorial.active = true;
          this.popupRedirectCRML.active = false;
          MainUI.GetInstance().userTriggerPopup(true);
          GameTrackingManager.getInstance().OnGoToApplayduDownloadGuideTrackingEvent();
        };

        _proto.popEvent = function popEvent() {
          var _this$popupUnlockAnim5, _this$popupUnlockAnim6, _this$popupUnlockAnim7, _this$popupUnlockAnim8;

          (_this$popupUnlockAnim5 = this.popupUnlockAnimal.getChildByName('Yes')) == null ? void 0 : (_this$popupUnlockAnim6 = _this$popupUnlockAnim5.getComponent(Button)) == null ? void 0 : _this$popupUnlockAnim6.clickEvents.pop();
          var clickYesDefaultHandler = new EventHandler();
          clickYesDefaultHandler.target = MainUI.GetInstance().node;
          clickYesDefaultHandler.component = 'MainUI';
          clickYesDefaultHandler.handler = 'gotoUnlockUI';
          (_this$popupUnlockAnim7 = this.popupUnlockAnimal.getChildByName('Yes')) == null ? void 0 : (_this$popupUnlockAnim8 = _this$popupUnlockAnim7.getComponent(Button)) == null ? void 0 : _this$popupUnlockAnim8.clickEvents.push(clickYesDefaultHandler);
        };

        _proto.closePopup = function closePopup() {
          if (this.popupParent.active) {
            GameTrackingManager.getInstance().OnParentConfirmation();
            GameTrackingManager.getInstance().OnUnlockAnimalEvent();
          }

          if (this.popupTutorial.active) {
            GameTrackingManager.getInstance().OnApplayduDownloadGuideFinishedTrackingEvent();
          }

          this.popupChangeAnimal.active = false;
          this.popupParent.active = false;
          this.popupUnlockAnimal.active = false;
          this.popupRedirectCRML.active = false;
          this.popupTutorial.active = false;
          this.isTriggerPopup = false;
          MainUI.GetInstance().userTriggerPopup(false);
        };

        PopupManager.GetInstance = function GetInstance() {
          return this.instance;
        };

        _proto.getTriggeredParentPopup = function getTriggeredParentPopup() {
          return this.isTriggerParentPopup;
        };

        return PopupManager;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupChangeAnimal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popupParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupUnlockAnimal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "popupRedirectCRML", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "popupTutorial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RegistrationPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "da8dfdQT5RBn4slnXwblDiG", "RegistrationPopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var bgWidth = 0;
      var bgHeight = 0;
      var RegistrationPopup = exports('RegistrationPopup', (_dec = ccclass('RegistrationPopup'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RegistrationPopup, _Component);

        function RegistrationPopup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "img", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = RegistrationPopup.prototype;

        _proto.onLoad = function onLoad() {
          var _this$img$getComponen, _this$img$getComponen2;

          bgWidth = ((_this$img$getComponen = this.img.getComponent(UITransform)) == null ? void 0 : _this$img$getComponen.width) || 1;
          bgHeight = ((_this$img$getComponen2 = this.img.getComponent(UITransform)) == null ? void 0 : _this$img$getComponen2.height) || 1;
        };

        _proto.start = function start() {
          this.resizeImg();
          window.addEventListener('resize', this.resizeImg);
        };

        _proto.resizeImg = function resizeImg() {
          var canvas = document.getElementById("GameCanvas");
          var linkCodeImg = document.getElementById("linkCodeImg");

          if (linkCodeImg && canvas) {
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;
            var correctCanvasWidth = canvasWidth;

            if (canvasWidth / canvasHeight > bgWidth / bgHeight) {
              correctCanvasWidth = bgWidth * canvasHeight / bgHeight;
            }

            linkCodeImg.style.width = correctCanvasWidth * 0.4 + "px";
          }
        };

        _proto.update = function update(deltaTime) {};

        _proto.show = function show() {
          this.node.active = true;
          var element = document.getElementById("linkcode");

          if (element != null) {
            element.style.visibility = 'visible';
          }
        };

        _proto.hideCRMLogo = function hideCRMLogo() {
          var element = document.getElementById("linkcode");

          if (element != null) {
            element.style.visibility = 'hidden';
          } // window.removeEventListener('resize', this.resizeImg)

        };

        _proto.testRedirect = function testRedirect() {
          window.location.href = '#小程序://健达福利社/7yTLvllnWsGIHxz';
        };

        return RegistrationPopup;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "img", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrackingConfig.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _TRACKING_CONFIG;

      cclegacy._RF.push({}, "436e1rHkpZLrpcDbtDGb0FT", "TrackingConfig", undefined);

      var TRACKING_ACTION_TYPE_AD_LOADED = exports('TRACKING_ACTION_TYPE_AD_LOADED', 276761); // The ad unit has been loaded -> time_spent_loading: calculate loading times in millisecnd.

      var TRACKING_ACTION_TYPE_AD_VIEWABLE = exports('TRACKING_ACTION_TYPE_AD_VIEWABLE', 362818); // Calculate the ads loading times from black screen to fully display

      var TRACKING_ACTION_TYPE_AUTO_REDIRECT = exports('TRACKING_ACTION_TYPE_AUTO_REDIRECT', 393731);
      var TRACKING_ACTION_TYPE_CLICK_ON_BUTTON = exports('TRACKING_ACTION_TYPE_CLICK_ON_BUTTON', 384856);
      var TRACKING_ACTION_TYPE_CLICK_TO_INFO = exports('TRACKING_ACTION_TYPE_CLICK_TO_INFO', 343224); // when user tap on the info button, or Privacy Policy link or Term of service link

      var TRACKING_ACTION_TYPE_CLICK_TO_LEADERBOARD = exports('TRACKING_ACTION_TYPE_CLICK_TO_LEADERBOARD', 310924); // Click to Leaderboard

      var TRACKING_ACTION_TYPE_CLICKTHROUGHS = exports('TRACKING_ACTION_TYPE_CLICKTHROUGHS', 191967); // when user already click on a link in the ad (browser was opened)

      var TRACKING_ACTION_TYPE_CLICKTHROUGHS_START = exports('TRACKING_ACTION_TYPE_CLICKTHROUGHS_START', 328898); // when user start to click on a link in the ad (if available)

      var TRACKING_ACTION_TYPE_COMPLETE_ENGAGEMENTS = exports('TRACKING_ACTION_TYPE_COMPLETE_ENGAGEMENTS', 191968); // MIG fully completed

      var TRACKING_ACTION_TYPE_CONFIRMED_ENGAGEMENTS = exports('TRACKING_ACTION_TYPE_CONFIRMED_ENGAGEMENTS', 191963); // User click on the tap to continue button

      var TRACKING_ACTION_TYPE_CONNECTION_LOST_SCREEN = exports('TRACKING_ACTION_TYPE_CONNECTION_LOST_SCREEN', 410905); // When user fail in to Error screen

      var TRACKING_ACTION_TYPE_ENGAGEMENT_LOADING_COMPLETE = exports('TRACKING_ACTION_TYPE_ENGAGEMENT_LOADING_COMPLETE', 238558); // This action is called right before the AP is displayed completely to users.

      var TRACKING_ACTION_TYPE_ENGAGEMENTS = exports('TRACKING_ACTION_TYPE_ENGAGEMENTS', 218009); // MIG starts (user click on the play button)

      var TRACKING_ACTION_TYPE_FIRST_COMPLETE_ENGAGEMENTS = exports('TRACKING_ACTION_TYPE_FIRST_COMPLETE_ENGAGEMENTS', 289812); // Number of times the video played to its completion (ie 100%). Counted only once, meaning if an user replays the video, it is not counted again.

      var TRACKING_ACTION_TYPE_FORM_LEAD = exports('TRACKING_ACTION_TYPE_FORM_LEAD', 221840); // when submit form successfully

      var TRACKING_ACTION_TYPE_IMPRESSIONS = exports('TRACKING_ACTION_TYPE_IMPRESSIONS', 210628); // ad is displayed.

      var TRACKING_ACTION_TYPE_PAGE_VIEWS = exports('TRACKING_ACTION_TYPE_PAGE_VIEWS', 381397); // Detecting if users enter any page. The "page" parameter will return the name of the page.

      var TRACKING_ACTION_TYPE_PAGE_VISITED = exports('TRACKING_ACTION_TYPE_PAGE_VISITED', 223611); // When user change page: using 'page' param (custom_tracking of collection will be for the products)

      var TRACKING_ACTION_TYPE_PLAYER_COLLAPSE = exports('TRACKING_ACTION_TYPE_PLAYER_COLLAPSE', 224026); // When the user un-expand the video player (like on VWRAP/Buddy pack(3R))

      var TRACKING_ACTION_TYPE_PLAYER_EXPAND = exports('TRACKING_ACTION_TYPE_PLAYER_EXPAND', 224025); // When the user expand the video player(like on VWRAP/Buddy Pack/(3R))

      var TRACKING_ACTION_TYPE_REPLAY = exports('TRACKING_ACTION_TYPE_REPLAY', 191964); // user tap on replay button

      var TRACKING_ACTION_TYPE_REWARD_RECEIVED = exports('TRACKING_ACTION_TYPE_REWARD_RECEIVED', 361338); // When user received reward from server. The custom_tracking is the code from server if available.

      var TRACKING_ACTION_TYPE_VIDEO_STARTED = exports('TRACKING_ACTION_TYPE_VIDEO_STARTED', 228364); // When the video loaded & played

      var TRACKING_ACTION_TYPE_FIRST_QUARTILE = exports('TRACKING_ACTION_TYPE_FIRST_QUARTILE', 224028); // When video reaches 25% of its total.

      var TRACKING_ACTION_TYPE_MIDPOINT = exports('TRACKING_ACTION_TYPE_MIDPOINT', 224029); // When video reaches 50% of its total.

      var TRACKING_ACTION_TYPE_THIRD_QUARTILE = exports('TRACKING_ACTION_TYPE_THIRD_QUARTILE', 224030); // When video reaches 75% of its total.
      //wechat add event

      var TRACKING_ACTION_TYPE_SITE_INTERACTION = exports('TRACKING_ACTION_TYPE_SITE_INTERACTION', 222996); ///////////////////////////////////////////////////////////////////////////////////////
      //
      // YOUR CUSTOM TRACKING ACTION TYPE HERE
      //
      ///////////////////////////////////////////////////////////////////////////////////////

      var TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION = exports('TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION', 999999); // your game custom tracking action

      var TRACKING_EVENT_GS_GAME_CUSTOM_EVENT = exports('TRACKING_EVENT_GS_GAME_CUSTOM_EVENT', 123456);
      var TRACKING_CONFIG = exports('TRACKING_CONFIG', (_TRACKING_CONFIG = {}, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_AD_LOADED] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_AD_VIEWABLE] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_AUTO_REDIRECT] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CLICK_ON_BUTTON] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CLICK_TO_INFO] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CLICK_TO_LEADERBOARD] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CLICKTHROUGHS] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CLICKTHROUGHS_START] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_COMPLETE_ENGAGEMENTS] = {
        send_one: false,
        send_score: true,
        send_time_spent: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CONFIRMED_ENGAGEMENTS] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_CONNECTION_LOST_SCREEN] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_ENGAGEMENT_LOADING_COMPLETE] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_ENGAGEMENTS] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_FIRST_COMPLETE_ENGAGEMENTS] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_FORM_LEAD] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_IMPRESSIONS] = {
        send_one: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_PAGE_VIEWS] = {
        send_one: false,
        send_page: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_PAGE_VISITED] = {
        send_one: false,
        send_page: true,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_PLAYER_COLLAPSE] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_PLAYER_EXPAND] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_REPLAY] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_REWARD_RECEIVED] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_VIDEO_STARTED] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_FIRST_QUARTILE] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_MIDPOINT] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_THIRD_QUARTILE] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG[TRACKING_ACTION_TYPE_SITE_INTERACTION] = {
        send_one: false,
        count: 0
      }, _TRACKING_CONFIG));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrackingData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TrackingConfig.ts'], function (exports) {
  'use strict';

  var _extends, cclegacy, game, Game, TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION, TRACKING_EVENT_GS_GAME_CUSTOM_EVENT, TRACKING_ACTION_TYPE_SITE_INTERACTION;

  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
    }, function (module) {
      TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION = module.TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION;
      TRACKING_EVENT_GS_GAME_CUSTOM_EVENT = module.TRACKING_EVENT_GS_GAME_CUSTOM_EVENT;
      TRACKING_ACTION_TYPE_SITE_INTERACTION = module.TRACKING_ACTION_TYPE_SITE_INTERACTION;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c5a8363Cn1OKrKQ5E2sjhxi", "TrackingData", undefined); ///////////////////////////////////////////////////////////////////////////////////////
      //
      // YOUR CUSTOM TRACKING DATA HERE
      //
      ///////////////////////////////////////////////////////////////////////////////////////


      var backgroundTimer = 0;
      var totalIdle = 0;
      game.on(Game.EVENT_HIDE, function () {
        backgroundTimer = Math.floor(Date.now() / 1000);
      });
      game.on(Game.EVENT_SHOW, function () {
        totalIdle += Math.floor(Date.now() / 1000) - backgroundTimer;
      });
      var GetTimeSpend = exports('GetTimeSpend', function GetTimeSpend() {
        if (window.GLOBAL_TRACKING_TIME_START === undefined) {
          window.GLOBAL_TRACKING_TIME_START = Date.now();
        } // in second


        return Math.floor((Date.now() - window.GLOBAL_TRACKING_TIME_START) / 1000) - totalIdle;
      });
      var GetCustomTrackingEventData = exports('GetCustomTrackingEventData', function GetCustomTrackingEventData(ctx, action, custom_tracking_json) {
        if (action === TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION) {
          return {
            gdid: 0,
            type: TRACKING_EVENT_GS_GAME_CUSTOM_EVENT,
            token: ctx.token++,
            anon_id: ctx.anon_id,
            data: _extends({
              action_type: action,
              campaign_id: window.GLOBAL_CAMPAIGN_ID,
              creative_id: window.GLOBAL_CREATIVE_APP_ID,
              d_country: window.GLOBAL_DEVICE_COUNTRY,
              d_browser: "",
              ip_country: "",
              d_os: "",
              d_manufacturer: "",
              d_name: "",
              d_firmware: ""
            }, custom_tracking_json)
          };
        } else if (action === TRACKING_ACTION_TYPE_SITE_INTERACTION) {
          return {
            gdid: 0,
            type: TRACKING_ACTION_TYPE_SITE_INTERACTION,
            token: ctx.token++,
            anon_id: ctx.anon_id,
            data: _extends({
              action_type: action,
              campaign_id: window.GLOBAL_CAMPAIGN_ID,
              creative_id: window.GLOBAL_CREATIVE_APP_ID,
              ses_id: window.GLOBAL_SESSION_ID,
              ses_t: GetTimeSpend(),
              d_country: window.GLOBAL_DEVICE_COUNTRY,
              d_browser: window.GLOBAL_BROWSER_NAME,
              //"N/A",
              ip_country: "N/A",
              d_os: window.GLOBAL_APP_FIRMWARE,
              d_manufacturer: window.GLOBAL_APP_MANUFACTURER,
              d_name: window.GLOBAL_APP_NAME_DEVICE,
              d_firmware: window.GLOBAL_APP_FIRMWARE_VERSION
            }, custom_tracking_json)
          };
        }

        return null;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrackingInterface.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "867c5tTobJG1qmQGVno+T5l", "TrackingInterface", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrackingManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.js', './TrackingConfig.ts'], function (exports) {
  'use strict';

  var _extends, cclegacy, crypto, TRACKING_CONFIG;

  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      crypto = module.default;
    }, function (module) {
      TRACKING_CONFIG = module.TRACKING_CONFIG;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fba1ezjzgpLKYuQnjMcXJMq", "TrackingManager", undefined);

      var evtTrack = Object.assign({}, TRACKING_CONFIG);
      var ctxTrack = {
        isDebug: true,
        ets_url: window.GLOBAL_ETS_URL || 'https://ets-beta.kinder.com',
        ggi: window.GLOBAL_GGI || 0,
        entity_type: window.GLOBAL_ENTITY_TYPE || 'ENTITY_TYPE_UNKNOWN',
        entity_id: window.GLOBAL_ENTITY_ID || 'ENTITY_ID_UNKNOWN',
        proto_ver: window.GLOBAL_PROTO_VER || 'PROTO_VER_UNKNOWN',
        anon_id: window.GLOBAL_ANON_ID || 'ANON_ID_UNKNOWN',
        token: 1,
        GetTrackingEventData: function GetTrackingEventData(ctx, action, custom_tracking_json) {
          return _extends({
            action_type: action
          }, custom_tracking_json);
        },
        Redirect: function Redirect(ctx, redirect_url, trackdata, callback) {
          //console.log('redirect_url', redirect_url)
          //console.log('trackdata', trackdata)
          if (callback) {
            callback(false);
          }

          return false;
        }
      };
      var SetTrackingContext = exports('SetTrackingContext', function SetTrackingContext(ctx) {
        ctxTrack = Object.assign({}, ctxTrack, ctx);
        return ctxTrack;
      }); // const axiosTracking = axios.create()
      // console.debug('axiosTracking', axiosTracking)
      // axiosTracking.interceptors.request.use(
      //     (config: any) => {
      //         return ConfigRequest(config)
      //     },
      //     (error: any) => {
      //         return Promise.reject(error)
      //     }
      // )
      // axiosTracking.interceptors.response.use(
      //     (response: any) => {
      //         return PostProcessing(response)
      //     },
      //     (error: any) => {
      //         return HandleError(error)
      //     }
      // )

      var ConfigRequest = function ConfigRequest(config) {
        // //console.log('Tracking::ConfigRequest before send1', config)
        if (config.hasOwnProperty('payload') === false) {
          return config;
        }

        if (config.payload.hasOwnProperty('headers')) {
          config['headers'] = _extends({}, config['headers'], config.payload['headers']);
        }

        var url = config.baseURL;

        if (config.params) {
          if (url.includes('?')) {
            url += '&';
          } else {
            url += '?';
          }

          url += Object.keys(config.params).map(function (key) {
            return key + "=" + config.params[key];
          }).join('&');
        }

        config['url'] = url;

        if (config['headers']['Content-Type'] === 'multipart/form-data') {
          var formData = config['payload'].data;
          config['data'] = formData;
        } else {
          config['data'] = _extends({}, config['payload'].data);
        } // //console.log('Tracking::ConfigRequest before send2', config)


        return config;
      };

      var PostProcessing = function PostProcessing(res) {
        //console.log('Tracking::PostProcessing', res)
        if (res.status !== 200) {
          return Promise.reject({
            code: res.status || -1,
            title: res.statusText || 'Warning !',
            message: "invalid status " + res.status
          });
        }

        if (res.data) {
          return res.data;
        }

        if (res.status === 200) {
          return res.statusText;
        }

        return Promise.reject({
          code: -2,
          message: "wrong response format " + JSON.stringify(res),
          title: res.statusText || 'Warning !'
        });
      };

      var HandleError = function HandleError(payload) {
        // backend has changed the way throw error
        var response = payload.response || {};
        return Promise.reject({
          code: response.status || -3,
          title: response.statusText || 'Warning !',
          message: response.data && response.data.error || payload.message || 'unknown reason'
        });
      };

      var Request = function Request(method, params, payload, contentType, responseType) {
        if (contentType === void 0) {
          contentType = 'application/json';
        }

        if (responseType === void 0) {
          responseType = 'json';
        }

        var config = {};
        config['baseURL'] = ctxTrack.ets_url;
        config['method'] = method;
        config['params'] = params;
        config['responseType'] = responseType;
        config['headers'] = {
          'Content-Type': contentType
        };
        config['payload'] = payload || {}; // https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
        // return axiosTracking(config)

        return CreateRequest(config);
      };

      var CreateRequest = function CreateRequest(config) {
        var requestConfig = ConfigRequest(config); //console.log('requestConfig', requestConfig)

        var options = {
          method: requestConfig['method'],
          headers: new Headers(requestConfig['headers']),
          body: JSON.stringify(requestConfig['data'])
        };
        return fetch(requestConfig['url'], options).then(function (response) {
          return PostProcessing(response);
        })["catch"](function (err) {
          return HandleError(err);
        });
      };

      var Hash = function Hash(data) {
        var strData = JSON.stringify(data);
        var strHash = crypto.SHA1(strData).toString(crypto.enc.Hex); //console.log('tracking hash', strHash)

        return strHash;
      };

      var FormatNum = function FormatNum(num, min) {
        if (min === void 0) {
          min = 4;
        }

        var hexa = num.toString(16);
        return "" + '0'.repeat(min - hexa.length) + hexa;
      };

      var RandInRange = function RandInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      var GetUDID = function GetUDID() {
        var udid = "\n\t\t\t" + FormatNum(RandInRange(0, 0xffff)) + FormatNum(RandInRange(0, 0xffff)) + "-\n\t\t\t" + FormatNum(RandInRange(0, 0xffff)) + "-\n\t\t\t" + FormatNum(RandInRange(0, 0xffff) | 0x4000) + "-\n\t\t\t" + FormatNum(RandInRange(0, 0xffff) | 0x8000) + "-\n\t\t\t" + FormatNum(RandInRange(0, 0xffff)) + FormatNum(RandInRange(0, 0xffff)) + FormatNum(RandInRange(0, 0xffff)) + "\n        ";
        return udid.replace(/[\t\n\r]/gm, '').trim();
      }; ///////////////////////////////////////////////////////////////////////////////////////
      //
      // YOUR CUSTOM API HERE
      //
      ///////////////////////////////////////////////////////////////////////////////////////


      var SendEventTracking = exports('SendEventTracking', function SendEventTracking(actions, callback, custom_tracking, redirect_url) {
        if (callback === void 0) {
          callback = null;
        }

        if (custom_tracking === void 0) {
          custom_tracking = '';
        }

        if (redirect_url === void 0) {
          redirect_url = '';
        }

        var trackingSuccess = false;
        var trackingResponse = null;

        if (ctxTrack.isDebug === true) {
          if (callback) {
            trackingResponse = 'skip sending tracking because isDebug=true';
            callback(trackingSuccess, trackingResponse);
          }

          return false;
        }

        var custom_tracking_json = {
          custom_tracking: 'N/A'
        };

        if (typeof custom_tracking === 'string') {
          custom_tracking_json = {
            custom_tracking: custom_tracking
          };
        } else if (typeof custom_tracking === 'object') {
          custom_tracking_json = Object.assign({}, custom_tracking_json, custom_tracking);
        }

        if (!(actions instanceof Array)) {
          actions = [actions];
        }

        var trackdata = {
          ggi: ctxTrack.ggi,
          entity_type: ctxTrack.entity_type,
          entity_id: ctxTrack.entity_id,
          proto_ver: ctxTrack.proto_ver,
          events: []
        };
        actions.forEach(function (action) {
          if (evtTrack[action]) {
            if (evtTrack[action].send_one && evtTrack[action].count > 0) {
              if (callback) {
                callback(trackingSuccess, trackingResponse);
              }

              return false;
            }

            evtTrack[action].count++;
          }

          var eventData = ctxTrack.GetTrackingEventData(ctxTrack, action, custom_tracking_json);

          if (eventData != null) {
            trackdata.events.push(eventData);
          }
        }); // add required fields

        var time = Math.floor(Date.now() / 1000) + new Date().getTimezoneOffset() * 60;
        trackdata['ts'] = time;
        trackdata['uuid'] = GetUDID();
        trackdata.events.forEach(function (event) {
          event['ts'] = time;
        });

        if (redirect_url) {
          return ctxTrack.Redirect(ctxTrack, redirect_url, trackdata, callback);
        } //console.log('trackdata', JSON.stringify(trackdata, null, 2))


        var payload = {
          data: trackdata
        };
        var params = {
          'x-ets-ggi': ctxTrack.ggi,
          'x-ets-sha1': Hash(trackdata)
        };
        Request('post', params, payload).then(function (response) {
          trackingSuccess = true;
          trackingResponse = response;

          if (callback) {
            callback(trackingSuccess, trackingResponse);
          }
        })["catch"](function (err) {
          trackingSuccess = false;
          trackingResponse = err;
          actions.forEach(function (action) {
            if (evtTrack[action]) {
              evtTrack[action].count--;
            }
          });

          if (callback) {
            callback(trackingSuccess, trackingResponse);
          }
        });
        return true;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrackingNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TrackingConfig.ts', './TrackingData.ts', './TrackingManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION, GetCustomTrackingEventData, SetTrackingContext, SendEventTracking;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION = module.TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION;
    }, function (module) {
      GetCustomTrackingEventData = module.GetCustomTrackingEventData;
    }, function (module) {
      SetTrackingContext = module.SetTrackingContext;
      SendEventTracking = module.SendEventTracking;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "5d44dqlNfxIwqR5TDX2auzr", "TrackingNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // this is a demo 
      // you can set tracking param via global varible from HTML file

      !window.GLOBAL_CAMPAIGN_ID && (window.GLOBAL_CAMPAIGN_ID = 'CA3');
      !window.GLOBAL_CREATIVE_APP_ID && (window.GLOBAL_CREATIVE_APP_ID = 'CA3_CAF32');
      !window.GLOBAL_ANON_ID && (window.GLOBAL_ANON_ID = '1234-5678-ABCD-XYZ-0000000');
      var TrackingNode = exports('TrackingNode', (_dec = ccclass('TrackingNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TrackingNode, _Component);

        function TrackingNode() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TrackingNode.prototype;

        _proto.onLoad = function onLoad() {
          //console.log('TrackingNode::onLoad')
          // or from inline code
          var version = '145';
          var ggi = '84967';
          var pid = '4523';
          var ets_url = "https://etsv3.wshtgame.com/gs_web?ggi=" + ggi;
          var ctx = {
            isDebug: false,
            ets_url: ets_url,
            ggi: ggi,
            anon_id: window.GLOBAL_ANON_ID,
            proto_ver: version,
            entity_type: pid + ":" + ggi + ":" + version + ":HTML5:Ads",
            entity_id: 'Tracking Cocos Creator Demo',
            GetTrackingEventData: GetCustomTrackingEventData
          }; // Then apply to TrackingManager

          SetTrackingContext(ctx);
        };

        _proto.start = function start() {
          //console.log('TrackingNode::start')
          SendEventTracking(TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION, function (trackingSuccess, trackingResponse) {//console.log('SendEventTracking on scene start', trackingSuccess, 'tracking response', trackingResponse)
          }, 'Tracking when start screen');
        };

        _proto.OnButton1Click = function OnButton1Click() {
          //console.log('OnButton1Click')
          var customTracking = {
            screen: 'my screen game',
            button: 'Button 1',
            custom_tracking: 'hi, how are you?'
          };
          SendEventTracking(TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION, function (trackingSuccess, trackingResponse) {//console.log('SendEventTracking OnButton1Click', trackingSuccess, 'tracking response', trackingResponse)
          }, customTracking);
        };

        _proto.OnButton2Click = function OnButton2Click() {
          //console.log('OnButton2Click')
          var customTracking = {
            custom_field_1: 'hello',
            custom_field_2: 'world'
          };
          SendEventTracking(TRACKING_ACTION_TYPE_GAME_CUSTOM_ACTION, function (trackingSuccess, trackingResponse) {//console.log('SendEventTracking OnButton2Click', trackingSuccess, 'tracking response', trackingResponse)
          }, customTracking);
        };

        return TrackingNode;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnlockUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "e1635qo31ZDXY0lR5t4Pnha", "UnlockUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UnlockUI = exports('UnlockUI', (_dec = ccclass('UnlockUI'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UnlockUI, _Component);

        function UnlockUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "fakeARCamBtn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "kangarooBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "flamingoBtn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lionBtn", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "giraffeBtn", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UnlockUI.prototype;

        _proto.init = function init() {
          this.node.active = false;
        };

        _proto.show = function show() {
          this.node.active = true;
          this.activeButton(true);
        };

        _proto.hide = function hide() {
          this.node.active = false;
        } //askCamPermission() {
        //this.cameraPermissionPopup.show(); 
        //}
        ;

        _proto.activeButton = function activeButton(active) {
          this.fakeARCamBtn.interactable = active; //this.fakeARCamBGBtn.interactable = active;

          this.kangarooBtn.interactable = active;
          this.flamingoBtn.interactable = active;
          this.lionBtn.interactable = active;
          this.giraffeBtn.interactable = active;
        };

        return UnlockUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fakeARCamBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "kangarooBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flamingoBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lionBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "giraffeBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uuidtest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, RichText, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6eb27HnczxB9K2KuFxqvoc0", "uuidtest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var uuidtest = exports('uuidtest', (_dec = ccclass('uuidtest'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uuidtest, _Component);

        function uuidtest() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = uuidtest.prototype; // @property({type:Node}) 
        // info:Node=null!;

        _proto.start = function start() {
          // this.getComponent(EditBox).string = localStorage.getItem("uuid");
          this.getComponent(RichText).string = localStorage.getItem("uuid");
        } // onClickInfoButton()
        // {
        //     this.info.active = !this.info.active;
        //     this.info.getComponent(EditBox).string = localStorage.getItem("uuid");
        // }
        ;

        return uuidtest;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VideoCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainUI.ts', './GameTrackingManager.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, cclegacy, MainUI, GameTrackingManager;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MainUI = module.MainUI;
    }, function (module) {
      GameTrackingManager = module.GameTrackingManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8a6d3RI+ZlJ+b+ao4hjAdQd", "VideoCamera", undefined);

      var VideoCamera = exports('default', /*#__PURE__*/function () {
        function VideoCamera() {
          this.m_video = undefined;
          this.stream = void 0;
          this.videoHeight = void 0;
          this.videoWidth = void 0;
          this.videoMarginLeft = void 0;
          this.videoMarginTop = void 0;
          this.sentBlockCamera = false;
        }

        var _proto = VideoCamera.prototype;

        _proto.Setup = /*#__PURE__*/function () {
          var _Setup = _asyncToGenerator(function* (faceMode) {
            var _this = this;

            if (faceMode === void 0) {
              faceMode = {
                exact: "environment"
              };
            }
            /*if (this.video)
            {
                this.video.pause();
            }
              if (this.faceMode == faceMode)
            {
                return Promise.resolve(this.video);
            }*/


            this.faceMode = faceMode;
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) ;else {
              // let video: any = document.getElementById('video');
              var video = document.querySelector('video');
              var options = {
                audio: false,
                video: {
                  facingMode: faceMode,
                  width: {
                    min: 1280,
                    ideal: 1920,
                    max: 3840
                  },
                  height: {
                    min: 720,
                    ideal: 1080,
                    max: 2160
                  }
                }
              }; // if (this.stream)
              // {
              //     const tracks = this.stream.getTracks();
              //     tracks.forEach((track: any) => track.stop());
              // }

              if (!MainUI.GetInstance().openCamera) {
                try {
                  this.stream = yield navigator.mediaDevices.getUserMedia(options);
                  MainUI.GetInstance().openCamera = true;
                  GameTrackingManager.getInstance().OnAllowCameraTrackingEvent();
                } catch (error) {
                  if (!this.sentBlockCamera) {
                    GameTrackingManager.getInstance().OnBlockCameraTrackingEvent();
                    this.sentBlockCamera = true;
                  }

                  MainUI.GetInstance().openCamera = false;
                }
              }

              if (MainUI.GetInstance().openCamera) {
                MainUI.GetInstance().hideBackGround();
              } else {
                MainUI.GetInstance().showBackGround();
              }

              if (video.srcObject !== undefined) {
                video.srcObject = this.stream;
              } else if (video.mozSrcObject !== undefined) {
                video.mozSrcObject = this.stream;
              } else if (window.URL.createObjectURL) {
                video.src = window.URL.createObjectURL(this.stream);
              } else if (window.webkitURL) {
                video.src = window.webkitURL.createObjectURL(this.stream);
              } else {
                video.src = this.stream;
              }

              video.playsInline = true;
              var playPromise = video.play(); // video.srcObject = null;
              // video.srcObject = this.stream;
              // video.setAttribute('webkit-playsinline', '');
              // video.setAttribute('playsinline', 'playsinline');
              // video.setAttribute('muted', '');
              // video.style.width = '640px';
              // video.style.height = '480px';
              // video.style.display = 'none';
              // if (faceMode == "user")
              // {
              //     video.style.transform = "scale(-1, 1)";
              // }
              // else
              // {
              //         video.style.transform = "scale(1, 1)";
              //     }

              return new Promise(function (resolve, reject) {
                _this.m_video = video;

                video.onloadedmetadata = function () {
                  _this.Resize();

                  resolve(video);
                };
              });
            }
          });

          function Setup(_x) {
            return _Setup.apply(this, arguments);
          }

          return Setup;
        }();

        _proto.Play = function Play(backgroundMode) {
          if (backgroundMode === void 0) {
            backgroundMode = false;
          }

          if (this.m_video != null) {
            this.m_video.play();
            this.m_video.style.display = backgroundMode ? 'none' : 'block';
          }
        };

        _proto.Stop = function Stop(stopTrack) {
          if (this.m_video != null) {
            this.m_video.pause();
            this.m_video.style.display = 'none';
          }

          if (stopTrack) {
            if (this.stream) {
              var tracks = this.stream.getTracks();
              tracks.forEach(function (track) {
                return track.stop();
              });
            }
          }
        };

        _proto.Resize = function Resize() {
          if (this.m_video) {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var sourceWidth = this.m_video.videoWidth;
            var sourceHeight = this.m_video.videoHeight;
            var sourceAspect = sourceWidth / sourceHeight;
            var screenAspect = screenWidth / screenHeight;

            if (screenAspect < sourceAspect) {
              var newWidth = sourceAspect * screenHeight;
              this.m_video.style.width = newWidth + 'px';
              this.m_video.style.marginLeft = -(newWidth - screenWidth) / 2 + 'px';
              this.m_video.style.height = screenHeight + 'px';
              this.m_video.style.marginTop = '0px';
            } else {
              var newHeight = 1 / (sourceAspect / screenWidth);
              this.m_video.style.height = newHeight + 'px';
              this.m_video.style.marginTop = -(newHeight - screenHeight) / 2 + 'px';
              this.m_video.style.width = screenWidth + 'px';
              this.m_video.style.marginLeft = '0px';
            }
          }
        };

        return VideoCamera;
      }());

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