import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { SCENE, ScenesManager } from './ScenesManager';

@ccclass('LoadingScene')
export class LoadingScene extends Component {
    start() {
        ScenesManager.GetInstance().gotoScene(SCENE.MAIN);
    }

    update(deltaTime: number) {
        
    }
}

