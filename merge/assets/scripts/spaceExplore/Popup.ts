import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { PlanetManager } from './PlanetManager';
const { ccclass, property } = _decorator;

@ccclass('Popup')
export class Popup extends Component {
    @property({type : Node})
    private popupInfor;

    @property({type : Label})
    private descriptionOfPlanet;

    @property({type : Sprite})
    spritePlanet : Sprite;

    start() {

    }

    update(deltaTime: number) {

    }
    
    public showPopupPlanetInfor()
    {
        if(this.popupInfor)
        {
            console.log("Sprite : 1");
            if(PlanetManager.GetInstance().sprite !== null)
            {
                this.spritePlanet.spriteFrame = PlanetManager.GetInstance().sprite;
            }
            this.descriptionOfPlanet.string = PlanetManager.GetInstance().descritpion;

            this.popupInfor.active = true;
            console.log("Sprite : 2");
        }
    }

    public hidePopupPlanetInfor()
    {
        if(this.popupInfor)
        {
            this.popupInfor.active = false;
            console.log("Sprite : 3");
        }
    }
}

