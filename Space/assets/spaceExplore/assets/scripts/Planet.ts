import { _decorator, Component, Node, RigidBody2D, Collider2D, IPhysics2DContact, CircleCollider2D, Contact2DType, Vec3, PhysicsSystem2D, CCInteger, Sprite, SpriteFrame, Enum } from 'cc';
import { PlanetInSolarSystem, PlanetManager } from './PlanetManager';
const { ccclass, property } = _decorator;

@ccclass('Planet')
export class Planet extends Component {
    @property({type : Enum(PlanetInSolarSystem)})
    public plantID;
    
    @property({type : Node})
    private btnInfor : Node;

    @property({type : CCInteger})
    private speedRotate;

    @property({type : Node})
    private planet : Node;

    @property({type : CCInteger})
    public radius ;

    @property({type : String})
    public content ;

    @property({type : Boolean})
    isRotate;

    public sprite : Sprite = new Sprite();
    public spriteFrame : SpriteFrame = new SpriteFrame();
    onLoad()
    {
        
        let sprite;
        if(this.planet.getComponent(Sprite) !== null)
        {
            sprite = this.planet.getComponent(Sprite);
        }

        if(sprite !== null && sprite !== null)
        {
            //this.sprite.spriteFrame = this.planet.getComponent(Sprite).spriteFrame;
            this.spriteFrame = this.planet.getComponent(Sprite).spriteFrame;
        }
    }   

    start() {

    }



    update(deltaTime: number) {
        if(this.planet)
        {
            if(this.isRotate)
            {
                this.planet.angle = this.planet.angle + deltaTime*this.speedRotate;
                //console.log("planet : " +  this.planet.angle);
            }
        }

    }

    public ShowButtonInforOfPlanet()
    {
        if(this.btnInfor)
        {
            this.btnInfor.active = true;
        }

    }

    public HideButtonInforOfPlanet()
    {
        if(this.btnInfor)
        {
            this.btnInfor.active = false;
        }
    }
}

