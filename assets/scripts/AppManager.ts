import { _decorator, Component, Node, view, macro, Canvas, director } from 'cc';
import VideoCamera from './VideoCamera';
const { ccclass, property } = _decorator;

@ccclass('AppManager')
export class AppManager extends Component {

    //@property ({type : Node})
    //private UICanvas;
    private mVideoCamera = new VideoCamera();
    //private mDeviceMnager = new DeviceManager();
    start() {
        /*this.mVideoCamera.Setup("user");
        this.mVideoCamera.Play();*/
        view.setOrientation(macro.ORIENTATION_PORTRAIT);
        view.setResizeCallback(this.OnSizeChanged.bind(this));
        
        
    }

    update(deltaTime: number) {
        
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
}

