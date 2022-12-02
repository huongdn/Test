import { _decorator, Component, Node, view, macro, Canvas, director } from 'cc';
import VideoCamera from './VideoCamera';
const { ccclass, property } = _decorator;

export enum CHARACTER{
    ASTRONAUT,
    ROCKET_SHIP
}

@ccclass('AppManager')
export class AppManager extends Component {

    private static m_sInstance: AppManager;

    private m_SelectedCharacter : CHARACTER = CHARACTER.ROCKET_SHIP;

    private m_bIsShowedParentControlPopUp: boolean = false;

    start() {
        
        AppManager.m_sInstance = this;
    }

    static GetInstance(): AppManager {
        return this.m_sInstance;
    }

    update(deltaTime: number) {
        
    }

    setSelectedCharacter(character : CHARACTER = CHARACTER.ROCKET_SHIP)
    {
        this.m_SelectedCharacter = character;
    }

    switchCharacter(){
        if (this.m_SelectedCharacter == CHARACTER.ROCKET_SHIP) {
            this.m_SelectedCharacter = CHARACTER.ASTRONAUT;
        } else {
            this.m_SelectedCharacter = CHARACTER.ROCKET_SHIP;
        }
    }

    getSelectedCharacter()
    {
        return this.m_SelectedCharacter;
    }

    setShowedParentControlPopup(value : boolean){
        this.m_bIsShowedParentControlPopUp = value;
    }

    isShowedParentControlPopup()
    {
        return this.m_bIsShowedParentControlPopUp;
    }
}

