import { _decorator, Component, Node, EventHandler, Button, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelButton')
export class LevelButton extends Component {
    start() {
        const gameManager = find('Canvas/GameManager');
        const chooseLevel = new EventHandler();
        chooseLevel.target = gameManager; //where the script are
        chooseLevel.component = 'MapGenerated';
        chooseLevel.handler = 'SetLevel';

        const button = this.node.getComponent(Button);
        button.clickEvents.push(chooseLevel);
    }

    update(deltaTime: number) {

    }
}

