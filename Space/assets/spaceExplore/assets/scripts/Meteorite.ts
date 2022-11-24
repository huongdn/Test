import { _decorator, Component, Node, CCFloat, Vec3, Collider2D, IPhysics2DContact, RigidBody2D, CircleCollider2D, Contact2DType, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Meteorite')
export class Meteorite extends Component {

    @property({type : Node})
    private startPos;

    @property({type : Node})
    private endPos;

    @property({type : CCFloat})
    private speed;

    private distance ;
    private t = 0;

    private collider : CircleCollider2D;

    onLoad()
    {
        this.collider = this.getComponent(CircleCollider2D);
        //console.log("Sprite stone : " + this.node.getComponent(Sprite).spriteFrame);
    }   
    onEnable()
    {
        this.collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
    }
    onDisable()
    {
        this.collider.off(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
    }
    start() {
        this.distance = Vec3.distance(this.startPos.position, this.endPos.position);
    }

    update(deltaTime: number) {
        let pos = new Vec3();
        this.t+= deltaTime;
        Vec3.lerp(pos,this.startPos.position,this.endPos.position,this.t * this.speed);
        this.node.position = pos;
        if(this.t * this.speed >= 1)
        {
            this.t = 0;
        }
    }

    onBeginContact(selfCollider : Collider2D, otherColiider : Collider2D, contact : IPhysics2DContact | null)
    {
        //console.log("Detect Contact spaceship :" + otherColiider.node.getComponent(RigidBody2D).group.toString());
        if(otherColiider.node.getComponent(RigidBody2D).group.toString() == "2")
        {
            console.log("Contact with Meterite");
            // setTimeout(function () {
            //     this.node.active = false;
            //   }.bind(this), 1);
            this.t = 0;
            this.node.position = new Vec3(this.startPos.x,this.startPos.y,this.startPos.z);
        }
    }
}

