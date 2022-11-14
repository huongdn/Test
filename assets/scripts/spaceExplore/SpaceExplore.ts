import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { SCENE, ScenesManager } from '../loadingScene/ScenesManager';

@ccclass('SpaceExplore')
export class SpaceExplore extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    goHome(){
        ScenesManager.GetInstance().gotoScene(SCENE.MAIN);
    }
}

