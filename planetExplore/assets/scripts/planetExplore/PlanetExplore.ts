import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { SCENE, ScenesManager } from '../loadingScene/ScenesManager';

@ccclass('PlanetExplore')
export class PlanetExplore extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    goHome(){
        ScenesManager.GetInstance().gotoScene(SCENE.MAIN);
    }
}

