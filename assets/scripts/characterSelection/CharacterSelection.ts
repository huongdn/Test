import { _decorator, Component, Node } from 'cc';
import { AppManager, CHARACTER } from '../AppManager';
const { ccclass, property } = _decorator;
import { SCENE, ScenesManager } from '../loadingScene/ScenesManager';

@ccclass('CharacterSelection')
export class CharacterSelection extends Component {
    
    @property ({type : Node})
    private Popup_ParentControl: Node = null!;

    start() {
        if (this.Popup_ParentControl !== null) {            
            this.Popup_ParentControl.active = false;
        }
    }

    update(deltaTime: number) {
        
    }

    showPopupControl()
    {
        this.Popup_ParentControl.active = true;
    }

    hidePopupControl()
    {
        this.Popup_ParentControl.active = false;
        ScenesManager.GetInstance().gotoScene(SCENE.MAIN);
    }

    onAstronautSelected(){
        if (AppManager.GetInstance() !== null)
        {
            AppManager.GetInstance().setSelectedCharacter(CHARACTER.ASTRONAUT);
        }

        this.checkParentControlPopUpAndSwitchToMainScene();
    }

    onRocketShipSelected(){
        if (AppManager.GetInstance() !== null)
        {
            AppManager.GetInstance().setSelectedCharacter(CHARACTER.ROCKET_SHIP);
        }
        
        this.checkParentControlPopUpAndSwitchToMainScene();
    }

    private checkParentControlPopUpAndSwitchToMainScene() {
        if (AppManager.GetInstance() !== null && !AppManager.GetInstance().isShowedParentControlPopup()) {
            this.showPopupControl();
            AppManager.GetInstance().setShowedParentControlPopup(true);
        }
        else {
            ScenesManager.GetInstance().gotoScene(SCENE.MAIN);
        }
    }
}

