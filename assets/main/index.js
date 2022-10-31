System.register("chunks:///_virtual/Animal.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AnimalManager.ts"],(function(e){"use strict";var t,i,n,l,a,o,c,r,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Toggle,r=e.Node,s=e.Component},function(e){u=e.AnimalManager}],execute:function(){var g,h,p,f,d,m,b,v,S,k,y;a._RF.push({},"c8d65aN9XJPtacH/s2uxMQ5","Animal",void 0);var A=o.ccclass,C=o.property;e("Animal",(g=A("Animal"),h=C(c),p=C(r),f=C(r),d=C(r),g((v=t((b=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(t,"toggleSelection",v,l(t)),n(t,"animalModel",S,l(t)),n(t,"animalUnlockCanvas",k,l(t)),n(t,"lockStatus",y,l(t)),t}i(t,e);var a=t.prototype;return a.init=function(){this.toggleSelection.interactable=!1,this.toggleSelection.isChecked=!1,this.status()},a.update=function(e){},a.status=function(){this.lockStatus.active=!this.toggleSelection.interactable,this.animalModel.active=this.toggleSelection.isChecked,this.animalUnlockCanvas.active=this.toggleSelection.isChecked},a.unlock=function(){u.GetInstance().hideAllModel(),u.GetInstance().setActiveAnimalNode(this.animalModel),this.toggleSelection.interactable=!0,this.toggleSelection.isChecked=!0,this.status()},a.hide=function(){this.toggleSelection.isChecked=!1,this.status()},t}(s)).prototype,"toggleSelection",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(b.prototype,"animalModel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(b.prototype,"animalUnlockCanvas",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(b.prototype,"lockStatus",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=b))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/AnimalManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Animal.ts"],(function(i){"use strict";var n,t,e,a,o,r,l,u,s,c;return{setters:[function(i){n=i.applyDecoratedDescriptor,t=i.inheritsLoose,e=i.initializerDefineProperty,a=i.assertThisInitialized},function(i){o=i.cclegacy,r=i._decorator,l=i.Toggle,u=i.animation,s=i.Component},function(i){c=i.Animal}],execute:function(){var f,g,h,m,p,d,b,A,v,y,z,k,M,w;o._RF.push({},"eb8b7+ixMxD2KAScxnIdYKz","AnimalManager",void 0);var N=r.ccclass,x=r.property;i("AnimalManager",(f=N("AnimalManager"),g=x(c),h=x(c),m=x(c),p=x(c),d=x(l),f(((w=function(i){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return n=i.call.apply(i,[this].concat(o))||this,e(n,"kagaroo",v,a(n)),e(n,"lion",y,a(n)),e(n,"flamingo",z,a(n)),e(n,"giraffe",k,a(n)),e(n,"default",M,a(n)),n.activeAnimalNode=null,n}t(n,i);var o=n.prototype;return o.start=function(){n.instance=this,this.kagaroo.init(),this.lion.init(),this.flamingo.init(),this.giraffe.init()},o.update=function(i){},n.GetInstance=function(){return this.instance},o.changeAnimal=function(){this.kagaroo.status(),this.lion.status(),this.flamingo.status(),this.giraffe.status()},o.hideAllModel=function(){console.log("Hide all model first"),this.default.isChecked=!0,this.kagaroo.hide(),this.lion.hide(),this.flamingo.hide(),this.giraffe.hide()},o.getActiveAnimalNode=function(){return this.activeAnimalNode.getComponent(u.AnimationController)},o.setActiveAnimalNode=function(i){this.activeAnimalNode=i},n}(s)).instance=void 0,v=n((A=w).prototype,"kagaroo",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=n(A.prototype,"lion",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(A.prototype,"flamingo",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(A.prototype,"giraffe",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(A.prototype,"default",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=A))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/AppManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./KagarooController.ts","./VideoCamera.ts"],(function(e){"use strict";var t,i,n,a,r,o,c,l,s,u,p,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){r=e.cclegacy,o=e._decorator,c=e.Node,l=e.view,s=e.macro,u=e.Component},function(e){p=e.KagarooController},function(e){m=e.default}],execute:function(){var f,v,A,h,d;r._RF.push({},"75348tPWIlDzr3PoY+ONjZ9","AppManager",void 0);var g=o.ccclass,C=o.property;e("AppManager",(f=g("AppManager"),v=C({type:c}),f((d=t((h=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,n(t,"ActiveAnimal",d,a(t)),t.mVideoCamera=new m,t}i(t,e);var r=t.prototype;return r.start=function(){l.setOrientation(s.ORIENTATION_PORTRAIT),l.setResizeCallback(this.OnSizeChanged.bind(this)),this.ActiveAnimal.active=!1},r.test=function(){this.ActiveAnimal.active=!1},r.update=function(e){},r.Playing=function(){var e=this;this.mVideoCamera.Setup("user").then((function(t){e.mVideoCamera.Play()})),console.log("Camera")},r.OnSizeChanged=function(){this.mVideoCamera.Resize()},r.activeAnimal=function(){var e;this.ActiveAnimal.active=!0,null==(e=this.ActiveAnimal.getComponent(p))||e.init()},t}(u)).prototype,"ActiveAnimal",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=h))||A));r._RF.pop()}}}));

System.register("chunks:///_virtual/CameraPermissionPopup.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,i;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,i=e.Component}],execute:function(){var r;o._RF.push({},"39f2fM7jelFaZyUGOwsWI38","CameraPermissionPopup",void 0);var s=n.ccclass;n.property,e("CameraPermissionPopup",s("CameraPermissionPopup")(r=function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var n=o.prototype;return n.start=function(){this.node.active=!1},n.update=function(e){},n.show=function(){this.node.active=!0},n.hide=function(){this.node.active=!1},o}(i))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/ChangeAnimalUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,e,i,o;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,i=n._decorator,o=n.Component}],execute:function(){var c;e._RF.push({},"2b974OfW8lHy6X91zIaDTZD","ChangeAnimalUI",void 0);var a=i.ccclass;i.property,n("ChangeAnimalUI",a("ChangeAnimalUI")(c=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var i=e.prototype;return i.init=function(){this.node.active=!1},i.update=function(n){},i.show=function(){this.node.active=!0},i.hide=function(){this.node.active=!1},e}(o))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/CharacterSelectUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,c,r,n;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy,r=t._decorator,n=t.Component}],execute:function(){var i;c._RF.push({},"38f24x0crREJarqw3t2YPCS","CharacterSelectUI",void 0);var o=r.ccclass;r.property,t("CharacterSelectUI",o("CharacterSelectUI")(i=function(t){function c(){return t.apply(this,arguments)||this}e(c,t);var r=c.prototype;return r.init=function(){this.node.active=!0},r.update=function(t){},r.show=function(){this.node.active=!0},r.hide=function(){this.node.active=!1},c}(n))||i);c._RF.pop()}}}));

System.register("chunks:///_virtual/DeviceManger.ts",["cc"],(function(e){"use strict";var r;return{setters:[function(e){r=e.cclegacy}],execute:function(){r._RF.push({},"8aa13qxf8NPSbMyilaC6flY","DeviceManger",void 0);e("DeviceManager",function(){function e(){this.localMediaStream=void 0,this.camera={available:!1,permissionGranted:!1,error:{message:null,name:null}},this.microphone={available:!1,permissionGranted:!1,error:{message:null,name:null}}}var r=e.prototype;return r.identifyDevices=function(){navigator.mediaDevices.enumerateDevices().then((function(e){return console.log({devices:e})})).catch((function(e){return console.error("couldnt get constraints")}))},r.requestCamera=function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(r){if(e.camera.permissionGranted=!0,e.camera.error=null,e.localMediaStream){var a=r.getVideoTracks()[0];e.localMediaStream.addTrack(a),r.getTracks().forEach((function(e){return e.stop()}))}else e.localMediaStream=r})).catch((function(r){e.camera.error.message=r.message,e.camera.error.name=r.name,console.error("no camera",e.camera.error)}))},r.requestMicrophone=function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(r){if(e.microphone.permissionGranted=!0,e.microphone.error=null,e.localMediaStream){var a=r.getAudioTracks()[0];e.localMediaStream.addTrack(a),r.getTracks().forEach((function(e){return e.stop()}))}else e.localMediaStream=r})).catch((function(r){e.microphone.error.message=r.message,e.microphone.error.name=r.name,console.error("no mic",e.microphone.error)}))},e}());r._RF.pop()}}}));

System.register("chunks:///_virtual/EncyclopediaUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RegistrationPopup.ts"],(function(t){"use strict";var i,e,o,n,r,a,l,s,u,c,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Label,s=t.SpriteFrame,u=t.Button,c=t.Component},function(t){p=t.RegistrationPopup}],execute:function(){var b,h,f,S,m,d,g,F,y,P,G,v,N,M,w,z,H,L,B;r._RF.push({},"d5570+aNMNBpKsWeic7F5lj","EncyclopediaUI",void 0);var I=a.ccclass,E=a.property;t("EncyclopediaUI",(b=I("EncyclopediaUI"),h=E(p),f=E(l),S=E(s),m=E(s),d=E(u),g=E(u),F=E(u),y=E(u),b((v=i((G=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return i=t.call.apply(t,[this].concat(r))||this,o(i,"registrationPopup",v,n(i)),o(i,"titleLabel",N,n(i)),o(i,"btnNormalSF",M,n(i)),o(i,"btnSelectSF",w,n(i)),o(i,"btnMap",z,n(i)),o(i,"btnHabitat",H,n(i)),o(i,"btnPicture",L,n(i)),o(i,"btnFood",B,n(i)),i.isGotoMap=!1,i.isGotoHabitat=!1,i.isGotoFood=!1,i.isGotoPicture=!1,i}e(i,t);var r=i.prototype;return r.init=function(){this.node.active=!1,this.registrationPopup.node.active=!1,this.isGotoMap=!1,this.isGotoHabitat=!1,this.isGotoFood=!1,this.isGotoPicture=!1},r.update=function(t){1==this.isGotoMap&&1==this.isGotoHabitat&&1==this.isGotoFood&&1==this.isGotoPicture&&this.registrationPopup.node.active},r.show=function(){this.node.active=!this.node.active,this.gotoMap()},r.hide=function(){this.node.active=!1},r.gotoMap=function(){this.isGotoMap=!0,this.allBtnNormalSprite(),this.btnMap.normalSprite=this.btnSelectSF,this.titleLabel.string="地图"},r.gotoHabitat=function(){this.isGotoHabitat=!0,this.allBtnNormalSprite(),this.btnHabitat.normalSprite=this.btnSelectSF,this.titleLabel.string="澳洲沙漠"},r.gotoFood=function(){this.isGotoFood=!0,this.allBtnNormalSprite(),this.btnFood.normalSprite=this.btnSelectSF,this.titleLabel.string="食草动物"},r.gotoPicture=function(){this.isGotoPicture=!0,this.allBtnNormalSprite(),this.btnPicture.normalSprite=this.btnSelectSF,this.titleLabel.string="图片"},r.allBtnNormalSprite=function(){this.btnMap.normalSprite=this.btnNormalSF,this.btnHabitat.normalSprite=this.btnNormalSF,this.btnPicture.normalSprite=this.btnNormalSF,this.btnFood.normalSprite=this.btnNormalSF},i}(c)).prototype,"registrationPopup",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=i(G.prototype,"titleLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(G.prototype,"btnNormalSF",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(G.prototype,"btnSelectSF",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=i(G.prototype,"btnMap",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=i(G.prototype,"btnHabitat",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(G.prototype,"btnPicture",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(G.prototype,"btnFood",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=G))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/Food.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,e,i,r;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Vec3,r=t.Component}],execute:function(){var s;n._RF.push({},"36bf7HXO8BIo6hgAnIa2Qi5","Food",void 0);var c=e.ccclass;e.property,t("Food",c("Food")(s=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.start=function(){},e.update=function(t){var o=this.node.getPosition(),n=new i(0,-1,0);o.add(n.multiplyScalar(5*t)),console.log(o.y),o.y>=-5.8&&this.node.setPosition(o)},e.Initialize=function(t){this.node.setParent(t)},n}(r))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/FoodManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Food.ts","./KagarooController.ts"],(function(e){"use strict";var n,o,t,r,i,a,l,s,u,p,c;return{setters:[function(e){n=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Prefab,s=e.instantiate,u=e.Component},function(e){p=e.Food},function(e){c=e.KagarooController}],execute:function(){var d,f,g,b,w,h,y,k,m,S,v,z,P;i._RF.push({},"48028piprRLMaVhc/TgnTtM","FoodManager",void 0);var F=a.ccclass,C=a.property;e("FoodManager",(d=F("FoodManager"),f=C(l),g=C(l),b=C(l),w=C(l),h=C(c),d((m=n((k=function(e){function n(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,t(n,"prefabBerries",m,r(n)),t(n,"prefabSteak",S,r(n)),t(n,"prefabTwigs",v,r(n)),t(n,"prefabSeaweed",z,r(n)),t(n,"kangaroo",P,r(n)),n}o(n,e);var i=n.prototype;return i.start=function(){},i.update=function(e){},i.spawnBerries=function(){var e=s(this.prefabBerries).getComponent(p),n=this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));null==e||e.node.setPosition(n),e.Initialize(this.node)},i.spawnSteak=function(){var e=s(this.prefabSteak).getComponent(p),n=this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));null==e||e.node.setPosition(n),e.Initialize(this.node)},i.spawnTwigs=function(){var e=s(this.prefabTwigs).getComponent(p),n=this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));null==e||e.node.setPosition(n),e.Initialize(this.node)},i.spawnSeaweed=function(){var e=s(this.prefabSeaweed).getComponent(p),n=this.kangaroo.node.getPosition().add(this.kangaroo.node.forward.multiplyScalar(2));null==e||e.node.setPosition(n),e.Initialize(this.node)},n}(u)).prototype,"prefabBerries",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l}}),S=n(k.prototype,"prefabSteak",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l}}),v=n(k.prototype,"prefabTwigs",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l}}),z=n(k.prototype,"prefabSeaweed",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l}}),P=n(k.prototype,"kangaroo",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=k))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/FoodUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,e,i;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Component}],execute:function(){var c;n._RF.push({},"b8d4b3RAspMgahjL55H+VVV","FoodUI",void 0);var r=e.ccclass;e.property,t("FoodUI",r("FoodUI")(c=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.init=function(){this.node.active=!1},e.update=function(t){},e.show=function(){this.node.active=!this.node.active},e.hide=function(){this.node.active=!1},n}(i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/HomeUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.Component}],execute:function(){var c;n._RF.push({},"e82abKmN3RKEZxtRGra74Dr","HomeUI",void 0);var r=o.ccclass;o.property,t("HomeUI",r("HomeUI")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.init=function(){this.node.active=!1},o.update=function(t){},o.show=function(){this.node.active=!0},o.hide=function(){this.node.active=!1},n}(i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/KagarooController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AnimalManager.ts"],(function(t){"use strict";var e,o,i,n,r,a,s,l,u,c,h,p,y,f,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Camera,l=t.Node,u=t.geometry,c=t.input,h=t.Input,p=t.PhysicsSystem,y=t.Vec3,f=t.Component},function(t){v=t.AnimalManager}],execute:function(){var d,g,m,P,T,b,C,M,E,_,w,N,U,S;r._RF.push({},"48620PnKRFFB6jQjEJujCIK","KagarooController",void 0);var D=a.ccclass,z=a.property,A=a.float;t("KagarooController",(d=D("KagarooController"),g=z({type:s}),m=z({type:l}),P=z({type:l}),T=z({type:l}),b=z(l),d((E=e((M=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"mainCamera",E,n(e)),i(e,"sphere",_,n(e)),i(e,"targetNode",w,n(e)),i(e,"kangarooNode",N,n(e)),i(e,"feedPosition",U,n(e)),e._ray=new u.Ray,e.activeAnimalNode=null,i(e,"velocity",S,n(e)),e.isMouve=!1,e}o(e,t);var r=e.prototype;return r.init=function(){this.animationController=v.GetInstance().getActiveAnimalNode(),this.animationController.setValue("velocity",0),console.log("init controller")},r.onEnable=function(){c.on(h.EventType.MOUSE_DOWN,this.onMouseDown,this),c.on(h.EventType.MOUSE_UP,this.onMouseUp,this),c.on(h.EventType.TOUCH_START,this.onTouchStart,this),c.on(h.EventType.TOUCH_END,this.onTouchEnd,this)},r.onDisable=function(){c.off(h.EventType.MOUSE_DOWN,this.onMouseDown,this),c.off(h.EventType.MOUSE_UP,this.onMouseUp,this),c.off(h.EventType.TOUCH_START,this.onTouchStart,this),c.off(h.EventType.TOUCH_END,this.onTouchEnd,this)},r.update=function(t){if(this.isMouve){var e;e=this.node.getPosition();var o=this.node.forward;o.multiplyScalar(this.velocity*t),e.add(o),this.node.setPosition(e),Math.abs(this.node.getPosition().x-this.sphere.getPosition().x)<.05&&(this.isMouve=!1,this.animationController.setValue("velocity",0))}},r.onMouseDown=function(t){},r.onMouseUp=function(t){var e=t.getLocation();if(this.mainCamera.screenPointToRay(e.x,e.y,this._ray),p.instance.raycast(this._ray))for(var o=p.instance.raycastResults,i=0;i<o.length;i++){var n=o[i];if(n.collider.node=this.targetNode){var r=new y(n.hitPoint.x,n.hitPoint.y,n.hitPoint.z);this.sphere.setPosition(r),this.node.lookAt(r,this.node.up),this.isMouve=!0,this.animationController.setValue("velocity",1),console.log("Move")}}},r.onTouchStart=function(t){var e=t.getLocation();if(this.mainCamera.screenPointToRay(e.x,e.y,this._ray),p.instance.raycast(this._ray))for(var o=p.instance.raycastResults,i=0;i<o.length;i++){var n=o[i];if(n.collider.node=this.targetNode){var r=new y(n.hitPoint.x,n.hitPoint.y,n.hitPoint.z);this.sphere.setPosition(r),this.node.lookAt(r,this.node.up),this.isMouve=!0,this.animationController.setValue("velocity",1)}}},r.onTouchEnd=function(t){},r.getFeedPosition=function(){return this.feedPosition.getPosition()},e}(f)).prototype,"mainCamera",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(M.prototype,"sphere",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(M.prototype,"targetNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(M.prototype,"kangarooNode",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=e(M.prototype,"feedPosition",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(M.prototype,"velocity",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),C=M))||C));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Animal.ts","./AnimalManager.ts","./AppManager.ts","./DeviceManger.ts","./Food.ts","./FoodManager.ts","./KagarooController.ts","./CameraPermissionPopup.ts","./ChangeAnimalUI.ts","./CharacterSelectUI.ts","./EncyclopediaUI.ts","./FoodUI.ts","./HomeUI.ts","./MainUI.ts","./RegistrationPopup.ts","./UnlockUI.ts","./VideoCamera.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FoodUI.ts","./CharacterSelectUI.ts","./HomeUI.ts","./EncyclopediaUI.ts","./ChangeAnimalUI.ts"],(function(e){"use strict";var i,t,n,o,a,r,c,l,u,h,s,I,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,c=e.Node,l=e.Component},function(e){u=e.FoodUI},function(e){h=e.CharacterSelectUI},function(e){s=e.HomeUI},function(e){I=e.EncyclopediaUI},function(e){f=e.ChangeAnimalUI}],execute:function(){var U,p,m,d,g,b,y,w,A,S,v,z,C,F,L;a._RF.push({},"facc9jj535Fnre+IlyJZiWZ","MainUI",void 0);var M=r.ccclass,H=r.property;e("MainUI",(U=M("MainUI"),p=H(u),m=H(h),d=H(s),g=H(I),b=H(f),y=H(c),U((S=i((A=function(e){function i(){for(var i,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return i=e.call.apply(e,[this].concat(a))||this,n(i,"foodUI",S,o(i)),n(i,"characterSelectUI",v,o(i)),n(i,"homeUI",z,o(i)),n(i,"encyclopediaUI",C,o(i)),n(i,"changeAnimalUI",F,o(i)),n(i,"animalLabel",L,o(i)),i}t(i,e);var a=i.prototype;return a.start=function(){this.homeUI.init(),this.characterSelectUI.init(),this.foodUI.init(),this.encyclopediaUI.init(),this.changeAnimalUI.init(),console.log("Startfasdfasd")},a.update=function(e){},a.gotoFeedAnimal=function(){this.foodUI.show()},a.gotoAnimalSelect=function(){this.characterSelectUI.show(),this.homeUI.hide()},a.gotoEncyclopedia=function(){this.encyclopediaUI.show(),this.homeUI.hide()},a.gotoChangeAnimalUI=function(){this.changeAnimalUI.show(),this.homeUI.hide()},a.gotoHome=function(){this.animalLabel.active=!0,this.homeUI.show()},i}(l)).prototype,"foodUI",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=i(A.prototype,"characterSelectUI",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=i(A.prototype,"homeUI",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(A.prototype,"encyclopediaUI",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(A.prototype,"changeAnimalUI",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(A.prototype,"animalLabel",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=A))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/RegistrationPopup.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,i;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.Component}],execute:function(){var r;o._RF.push({},"da8dfdQT5RBn4slnXwblDiG","RegistrationPopup",void 0);var s=e.ccclass;e.property,t("RegistrationPopup",s("RegistrationPopup")(r=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){},e.update=function(t){},e.testRedirect=function(){window.location.href="#小程序://健达福利社/7yTLvllnWsGIHxz"},o}(i))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/UnlockUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CameraPermissionPopup.ts"],(function(e){"use strict";var i,n,t,o,r,c,s,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,c=e._decorator,s=e.Component},function(e){a=e.CameraPermissionPopup}],execute:function(){var u,p,l,f,h;r._RF.push({},"e1635qo31ZDXY0lR5t4Pnha","UnlockUI",void 0);var m=c.ccclass,P=c.property;e("UnlockUI",(u=m("UnlockUI"),p=P(a),u((h=i((f=function(e){function i(){for(var i,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return i=e.call.apply(e,[this].concat(r))||this,t(i,"cameraPermissionPopup",h,o(i)),i}n(i,e);var r=i.prototype;return r.init=function(){this.node.active=!1},r.update=function(e){},r.show=function(){this.node.active=!0},r.hide=function(){this.node.active=!1},r.askCamPermission=function(){this.cameraPermissionPopup.show()},i}(s)).prototype,"cameraPermissionPopup",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=f))||l));r._RF.pop()}}}));

System.register("chunks:///_virtual/VideoCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,s;return{setters:[function(e){t=e.asyncToGenerator,i=e.regeneratorRuntime},function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"8a6d3RI+ZlJ+b+ao4hjAdQd","VideoCamera",void 0);e("default",function(){function e(){this.video=void 0,this.stream=void 0}var s=e.prototype;return s.Setup=function(){var e=t(i().mark((function e(t){var s,n,o=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t="environment"),this.faceMode=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=6;break}console.log("Display BG"),e.next=22;break;case 6:return s=document.getElementById("video"),n={audio:!1,video:{facingMode:t,width:{ideal:640},height:{ideal:480}}},this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()})),e.next=11,navigator.mediaDevices.getUserMedia(n);case 11:return this.stream=e.sent,s.srcObject=null,s.srcObject=this.stream,s.setAttribute("webkit-playsinline",""),s.setAttribute("playsinline","playsinline"),s.setAttribute("muted",""),s.style.width="640px",s.style.height="480px",s.style.display="none",s.style.transform="user"==t?"scale(-1, 1)":"scale(1, 1)",e.abrupt("return",new Promise((function(e,t){o.video=s,s.onloadedmetadata=function(){o.Resize(),e(s)}})));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),s.Play=function(e){void 0===e&&(e=!1),null!=this.video&&(this.video.play(),this.video.style.display=e?"none":"block")},s.Stop=function(e){(null!=this.video&&(this.video.pause(),this.video.style.display="none"),e)&&(this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()})))},s.Resize=function(){if(this.video){var e=window.innerWidth,t=window.innerHeight,i=this.video.videoWidth/this.video.videoHeight;if(e/t<i){var s=i*t;this.video.style.width=s+"px",this.video.style.marginLeft=-(s-e)/2+"px",this.video.style.height=t+"px",this.video.style.marginTop="0px"}else{var n=1/(i/e);this.video.style.height=n+"px",this.video.style.marginTop=-(n-t)/2+"px",this.video.style.width=e+"px",this.video.style.marginLeft="0px"}}},e}());s._RF.pop()}}}));

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