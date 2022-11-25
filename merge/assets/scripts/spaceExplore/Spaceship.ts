import { _decorator, Component, Node, Vec2, Vec3, Enum, CCInteger, RigidBody2D, SystemEventType, EventTouch, misc, CCFloat, lerp, Quat, PolygonCollider2D, Collider2D, IPhysics2DContact, Contact2DType, CircleCollider2D } from 'cc';
import { instance, JoystickDataType, SpeedType } from './Joystick';
const { ccclass, property } = _decorator;

export enum SpaceStatus
{
    FAILURE,
    NORMAL
}

@ccclass('Spaceship')
export class Spaceship extends Component {
    @property({type : Boolean})
    private useRigibody;

    @property({type : Enum(SpeedType)})
    private speedType = SpeedType.STOP;

    @property({type : CCInteger})
    private stopSpeed = 0;

    @property({type : CCInteger})
    private normalSpeed = 100;

    @property({type : CCInteger})
    private fastSpeed = 0;

    @property({type : CCInteger})
    private rotationSpeed;

    @property({type : CCFloat})
    private speedCamera;

    @property({type : CCFloat})
    private rotationAccelerationSpeed;

    @property({type : Node})
    private camera : Node = null;

    private offset : Vec3 = new Vec3(0,0,0);

    private moveDir = new Vec3(0,1,0);

    private body : RigidBody2D | null = null;

    private moveSpeed = 0;

    private rotationLerpTime = 0;

    private quaterion = new Quat();

    private time = 0;

    private timeMove = 0;

    private collider : CircleCollider2D;

    private currentState : SpaceStatus = SpaceStatus.NORMAL;
    onLoad()
    {
        if(this.useRigibody)
        {
            this.body = this.node.getComponent(RigidBody2D);
        }

        instance.on(SystemEventType.TOUCH_START,this.onTounchStart,this);
        instance.on(SystemEventType.TOUCH_MOVE,this.onTouchMove,this);
        instance.on(SystemEventType.TOUCH_END,this.onTouchEnd,this);
        this.collider = this.node.getComponent(CircleCollider2D);
    }
    start() {
        if(this.camera != null)
        {
            this.offset = new Vec3(0,0,0);//this.camera.getPosition().subtract(this.node.getPosition());
        }

    }
    onEnable()
    {
        this.collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
    }
    onDisable()
    {
        this.collider.off(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
    }

    update(deltaTime: number) {

      
        if(this.speedType !== SpeedType.STOP && this.currentState == SpaceStatus.NORMAL)
        {
            this.move(deltaTime);
        }
    
    }
    lateUpdate(deltaTime: number)
    {
        if(this.camera !== null)
        {
            let pos = new Vec3();
            let target = new Vec3();
            let pivot = false;
    
            if(this.camera.position != this.node.getPosition())
            {
                this.timeMove += deltaTime;
                if(this.timeMove* this.speedCamera >= 1)
                {
                    this.timeMove = 1/ this.speedCamera;
                }
            }
            else
            {
                this.timeMove = 0 ;
            }
            if(Math.abs(this.camera.position.x) <= 930 && Math.abs(this.camera.position.y) <= 3500)
            {
                pos.x = this.node.position.x + this.offset.x;
                pos.y = this.node.position.y + this.offset.y;
                //Vec3.lerp(target,this.camera.position,pos,this.timeMove* this.speedCamera);
                this.camera.position = pos;
            }
            if(this.node.position.x >= 930 && this.camera.position.x >= 930)
            {
                pos.x = 930;
                pos.y = this.node.position.y + this.offset.y;
                //Vec3.lerp(target,this.camera.position,pos,this.timeMove * this.speedCamera);
                this.camera.position = pos;
                pivot = true;
            }
            if(this.node.position.x <= -930 && this.camera.position.x <= -930)
            {
                pos.x = -930;
                pos.y = this.node.position.y + this.offset.y;
                //Vec3.lerp(target,this.camera.position,pos,this.timeMove* this.speedCamera);
                this.camera.position = pos;
                pivot = true;
            }
            if(this.node.position.y >= 1300 && this.camera.position.y >= 3500)
            {
                pos.y = 3500;
                if(!pivot)
                {
                    pos.x = this.node.position.x + this.offset.x;
                }
                //Vec3.lerp(target,this.camera.position,pos,this.timeMove* this.speedCamera);
                this.camera.position = pos;
            }
            if(this.node.position.y <= -1300 && this.camera.position.y <= -3500)
            {
                pos.y = -3500;
                if(!pivot)
                {
                    pos.x = this.node.position.x + this.offset.x;
                }
                //Vec3.lerp(target,this.camera.position,pos,this.timeMove* this.speedCamera);
                this.camera.position = pos;
            }
        }
      
        //this.camera.position =new Vec3(this.node.getPosition().x,this.node.getPosition().y,1000); 
    }
    onTounchStart(){}
    onTouchMove(event : EventTouch, data : JoystickDataType)
    {
 
        this.speedType = data.speedType;
        this.moveDir = data.moveVec;
        this.onSetMoveSpeed(this.speedType);
    }
    onTouchEnd(event : EventTouch, data : JoystickDataType)
    {
        this.speedType = data.speedType;

        this.onSetMoveSpeed(this.speedType);
    }
    onSetMoveSpeed(speedType : SpeedType)
    {
        switch(speedType)
        {
            case SpeedType.STOP:
                this.moveSpeed = this.stopSpeed;
            case SpeedType.NORMAL:
                this.moveSpeed = this.normalSpeed;
            case SpeedType.FAST:
                this.moveSpeed = this.fastSpeed;
            default:
                break;
        }
    }

    move(deltaTime : number)
    {
        // Handle rotation
        // rotate from -180 to 180
        let currentAngle =misc.radiansToDegrees(Math.atan2(this.node.position.y, this.node.position.x));

        let angle = misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));

        if(currentAngle != angle)
        {
            this.rotationLerpTime = deltaTime;
        }
                
        angle = angle - 90;
        
        let jsAngle = this.convertTo360(angle);
        let spAngle = this.convertTo360(this.node.angle);
        
        let t = this.rotationLerpTime * this.rotationSpeed;
        
       // console.log("jsAngle and spAngle : " + jsAngle + "  " + spAngle + " diff: " + (jsAngle - spAngle));

        if(jsAngle - spAngle > 180) {
           this.node.angle = lerp(spAngle, jsAngle - 360, this.rotationLerpTime * this.rotationSpeed);
        }
        else if (jsAngle - spAngle < -180) {
           this.node.angle = lerp(spAngle - 360, jsAngle, this.rotationLerpTime * this.rotationSpeed);
        }
        else{
            this.node.angle = lerp(spAngle, jsAngle, this.rotationLerpTime * this.rotationSpeed);
        }
        this.rotationLerpTime += deltaTime*this.rotationAccelerationSpeed;        


        if(this.useRigibody && this.body)
        {
            const moveVec = this.moveDir.clone().multiplyScalar(this.moveSpeed/10);

            const force = new Vec2(moveVec.x,moveVec.y);

            this.body.applyForceToCenter(force,true);
        }
        else
        {
            const oldPos = this.node.getPosition();
            const newPos = oldPos.add(
                // fbs : 60
                this.moveDir.clone().multiplyScalar(this.moveSpeed/60)
            );

            console.log(this.moveSpeed/60);
            this.node.setPosition(newPos);
        }
    }
    convertTo360(angle: number){
        if (angle < 0) {
            return angle + 360;
        }
        if (angle > 360) {
            return angle - 360;
        }
        return angle;
    }

    onBeginContact(selfCollider : Collider2D, otherColiider : Collider2D, contact : IPhysics2DContact | null)
    {
        //console.log("Detect Contact player :" + otherColiider.node.getComponent(RigidBody2D).group.toString());
        if(this.currentState == SpaceStatus.NORMAL)
        {
            if(otherColiider.node.getComponent(RigidBody2D).group.toString() == "1")
            {
                this.currentState = SpaceStatus.FAILURE;
                setTimeout(function () {
                   this.currentState = SpaceStatus.NORMAL;
                }.bind(this), 2000);
            }
        }

    }
}

