import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { SCENE, ScenesManager } from './ScenesManager';

@ccclass('LoadingScene')
export class LoadingScene extends Component {
    start() {
        if (ScenesManager.GetInstance()) {            
            ScenesManager.GetInstance().gotoScene(SCENE.CHARACTER_SELECTION);
        }
    }

    update(deltaTime: number) {
        
    }
}

