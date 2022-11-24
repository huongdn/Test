import { _decorator, Component, Node, director, assetManager, game } from 'cc';
const { ccclass, property } = _decorator;
import GameConfig from './GameConfig.json';

export enum SCENE{
    LOADING,
    MAIN,
    SPACE_EXPLORE,
    PLANET_EXPLORE
}

export interface SceneConfig{
    name: string;
    isBundled: boolean;
    bundlePath: string;
}

@ccclass('ScenesManager')
export class ScenesManager extends Component {

    private static instance: ScenesManager;
    
    static GetInstance(): ScenesManager {
        return this.instance;
    }

    onLoad(){
        ScenesManager.instance = this;
    }

    start() {
        this.node.removeFromParent();
        game.addPersistRootNode(this.node);
    }

    update(deltaTime: number) {
        
    }

    gotoScene(scene: SCENE = SCENE.LOADING){
        let sceneConfig: SceneConfig = GameConfig.scene.loadingScene;
        switch (scene) {
            case SCENE.LOADING:
                break;
            case SCENE.MAIN:
                sceneConfig = GameConfig.scene.mainMenuScene;
                break;
            case SCENE.SPACE_EXPLORE:
                sceneConfig = GameConfig.scene.spaceExploreScene;
                break;
            case SCENE.PLANET_EXPLORE:
                sceneConfig = GameConfig.scene.planetExploreScene;
                break;        
            default:
                break;
        }
        this.loadScene(sceneConfig);
    }

    loadScene(sceneConfig: SceneConfig) {
        if (sceneConfig.isBundled) {
            let _bundle = assetManager.getBundle(sceneConfig.bundlePath);
            if (_bundle !== null) {
                _bundle.loadScene(sceneConfig.name, function (err, scene) {
                    director.runScene(scene);
                    });
            }
            else{
                assetManager.loadBundle(sceneConfig.bundlePath, (err, bundle) => {           
                    bundle.loadScene(sceneConfig.name, function (err, scene) {
                        director.runScene(scene);
                        });
                    });
            }            
        }
        else{
            director.loadScene(sceneConfig.name);
        }
    }
}