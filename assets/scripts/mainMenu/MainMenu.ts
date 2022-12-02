import { SCENE, ScenesManager } from '../loadingScene/ScenesManager';
import { _decorator, Component, Node, view, macro } from 'cc';
const { ccclass, property } = _decorator;
import VideoCamera from '../VideoCamera';
import { AppManager, CHARACTER } from '../AppManager';

@ccclass('MainMenu')
export class MainMenu extends Component {

    private mVideoCamera = new VideoCamera();

    @property ({type : Node})
    private Astronaut: Node = null!;

    @property ({type : Node})
    private SpaceShip: Node = null!;
    
    start() {
        this.showCharacter();
        view.setOrientation(macro.ORIENTATION_PORTRAIT);
        view.setResizeCallback(this.OnSizeChanged.bind(this));
        this.Playing();
    }

    private showCharacter() {
        if (AppManager.GetInstance() !== null && AppManager.GetInstance().getSelectedCharacter() == CHARACTER.ASTRONAUT) {
            this.showAstronaut();
        }
        else {
            this.showSpaceShip();
        }
    }

    update(deltaTime: number) {
        
    }  

    showAstronaut(){
        if (this.Astronaut !== null) {
            this.Astronaut.active = true;            
        }
        this.hideSpaceShip();
    }

    hideAstronaut(){
        if (this.Astronaut !== null) {
            this.Astronaut.active = false;            
        }
    }
    
    showSpaceShip(){
        if (this.SpaceShip !== null) {
            this.SpaceShip.active = true;            
        }
        this.hideAstronaut();
    }

    hideSpaceShip(){
        if (this.SpaceShip !== null) {
            this.SpaceShip.active = false;            
        }
    }

    gotoPlanetExplore(){
        ScenesManager.GetInstance().gotoScene(SCENE.PLANET_EXPLORE);
    }
    
    gotoSpaceExplore(){
        ScenesManager.GetInstance().gotoScene(SCENE.SPACE_EXPLORE);
    }

    gotoCharacterSelection(){
        ScenesManager.GetInstance().gotoScene(SCENE.CHARACTER_SELECTION);
    }

    public Playing()
    {
        // this.mVideoCamera.Setup("user").then(  //use when need to get front camera
        this.mVideoCamera.Setup().then( // use to get back camera
            video =>
            {
                this.mVideoCamera.Play();
            }
        );
        //this.UICanvas.active = false;
        console.log("Camera");
    }

    OnSizeChanged()
    {
        this.mVideoCamera.Resize();
    }

    switchCharacter(){
        if (AppManager.GetInstance() !== null) {
            AppManager.GetInstance().switchCharacter();
        }
        this.showCharacter();
    }

    playMiniGame(){
        if (AppManager.GetInstance() !== null && AppManager.GetInstance().getSelectedCharacter() == CHARACTER.ASTRONAUT) {
            this.gotoPlanetExplore();
        }
        else {
            this.gotoSpaceExplore();
        }
    }
}

