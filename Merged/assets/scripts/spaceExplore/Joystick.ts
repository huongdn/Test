import { _decorator, Component, EventTarget, Node, Vec3, Vec2, CCInteger, Enum, UITransform, Size, EventTouch, UIOpacity, Input, input, SystemEventType} from 'cc';
const { ccclass, property } = _decorator;

// Event global
export const instance = new EventTarget();

export const SET_JOYSTICK_TYPE = "SET_JOYSTICK_TYPE";

export enum DirectionType{
    FOUR,
    EIGHT,
    ALL
}

export enum SpeedType{
    STOP,
    NORMAL,
    FAST
}

// may be not use
export enum JoystickType{
    FIXED,
    FOLLOW
}

export interface JoystickDataType{
    speedType: SpeedType;

    // motion vector
    moveVec: Vec3;
}

// Joystic

@ccclass('Joystick')
export class Joystick extends Component {

    @property({type : Node})
    private dot: Node | null = null;

    @property({type : Node})
    private ring: Node | null = null;

    @property({type : Enum(JoystickType)})
    private joystickType = JoystickType.FIXED;;


    @property({type : Enum(DirectionType)})
    private ditectionType = DirectionType.ALL;

    @property({type : CCInteger})
    private radius = 100;

    private stickPos = new Vec3();

    private touchLocation = new Vec2();

    onLoad()
    {
        console.log("OnLoad()")
        if(!this.dot)
        {
            console.warn("Joystick Dot is null");
            return;
        }

        if(!this.ring)
        {
            console.warn("Joystick ring is null");
            return;
        }

        console.log("run =))");
        this.initTouchEvent();

        // hide joystick when follow
        const uiOpacity = this.node.getComponent(UIOpacity);
        if (this.joystickType === JoystickType.FOLLOW && uiOpacity) {
          uiOpacity.opacity = 0;
        }
    }

    onEnable()
    {
        instance.on(SET_JOYSTICK_TYPE, this.onSetJoystickType, this);
    }


    onDisable(){
        instance.off(SET_JOYSTICK_TYPE, this.onSetJoystickType, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    onSetJoystickType(type: JoystickType) {
        this.joystickType = type;
        const uiOpacity = this.node.getComponent(UIOpacity);
        if (uiOpacity) {
          uiOpacity.opacity = type === JoystickType.FIXED ? 255 : 0;
        }
      }
    

    initTouchEvent()
    {
        this.node.on(SystemEventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(SystemEventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(SystemEventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(SystemEventType.TOUCH_CANCEL, this.touchEndEvent, this);
        console.log("Init touch Event()");
    }

    touchStartEvent(event : EventTouch)
    {
        if (!this.ring || !this.dot) return;

        instance.emit(SystemEventType.TOUCH_START, event);
    
        const location = event.getUILocation();
        const touchPos = new Vec3(location.x, location.y);
    
        if (this.joystickType === JoystickType.FIXED) {
          this.stickPos = this.ring.getPosition();
    
          // vector relative to center
          const moveVec = touchPos.subtract(this.ring.getPosition());

          // The distance between the touch point and the center of the circle
          const distance = moveVec.length();
    
          // The finger touches inside the circle, the joystick follows the touch point
          if (this.radius > distance) {
            this.dot.setPosition(moveVec);
          }
        } else if (this.joystickType === JoystickType.FOLLOW) {
          // Record the joystick position and use it for touch move
          this.stickPos = touchPos;
          this.node.getComponent(UIOpacity)!.opacity = 255;
          this.touchLocation = event.getUILocation();
          // Change the position of the joystick
          this.ring.setPosition(touchPos);
          this.dot.setPosition(new Vec3());
        }
    }

    touchMoveEvent(event : EventTouch)
    {
        if(!this.dot || !this.ring) return;

        if(
           this.joystickType === JoystickType.FOLLOW &&
           this.touchLocation === event.getUILocation()
        )
        {
            return false;
        }

        // get touch coordinates with circle as anchor
        const location = event.getUILocation();
        const touchPos = new Vec3(location.x, location.y);

        // move vector
        const moveVec = touchPos.subtract(this.ring.getPosition());
        const distance = moveVec.length();

        let speedType = SpeedType.NORMAL;
        if (this.radius > distance) {
          this.dot.setPosition(moveVec);
          speedType = SpeedType.NORMAL;
        } else {
          // The joystick stays in the circle forever and follows the touch to update the angle in the circle
          this.dot.setPosition(moveVec.normalize().multiplyScalar(this.radius));
          speedType = SpeedType.FAST;
        }
    
        instance.emit(SystemEventType.TOUCH_MOVE, event, {
          speedType,
          moveVec: moveVec.normalize(),
        });
    }

    touchEndEvent(event : EventTouch)
    {
        if(!this.dot || !this.ring) return;

        this.dot.setPosition(new Vec3());

        if(this.joystickType === JoystickType.FOLLOW){
            this.node.getComponent(UIOpacity)!.opacity = 0;
        }

        instance.emit(SystemEventType.TOUCH_END, event, {
            speedType: SpeedType.STOP,
          });

    }
}
