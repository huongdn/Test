import { SCENE, ScenesManager } from './../../loadingScene/scripts/ScenesManager';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }  

    gotoPlanetExplore(){
        ScenesManager.GetInstance().gotoScene(SCENE.PLANET_EXPLORE);
    }
    
    gotoSpaceExplore(){
        ScenesManager.GetInstance().gotoScene(SCENE.SPACE_EXPLORE);
    }
}

