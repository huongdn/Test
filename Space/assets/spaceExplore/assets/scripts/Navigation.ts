import { _decorator, Component, Node, CCInteger, CCFloat, Vec3, misc } from 'cc';
const { ccclass, property } = _decorator;

export enum NavigationStatus
{
    TURN_ON,
    TURN_OFF
}

@ccclass('Navigation')
export class Navigation extends Component {

    @property({type : Node})
    private targetPlanet;

    @property({type : Node})
    private spaceShip;

    @property({type : Node})
    private arrow;

    @property({type : CCInteger})
    private radian;

    @property({type : CCFloat})
    private speedRotate;

    @property({})
    start() {

    }

    update(deltaTime: number) {
        this.CheckDistanceToShowArrow();
        this.ArrowLookAtTargetPlanet();
    }

    ArrowLookAtTargetPlanet()
    {
        let direction = new Vec3();
        let certer = new Vec3(this.spaceShip.position.x,this.spaceShip.position.y,this.spaceShip.position.z);
        let target = new Vec3(this.targetPlanet.position.x,this.targetPlanet.position.y,this.targetPlanet.position.z);
        direction = certer.subtract(target);
        let directionNormalized =new Vec3();
        directionNormalized = direction.normalize();
        let radianAngle = Math.atan2(directionNormalized.y, directionNormalized.x);
        let angle = misc.radiansToDegrees(radianAngle);
        this.node.angle = angle + 90 - this.spaceShip.angle;
    }

    CheckDistanceToShowArrow()
    {
        if(Vec3.distance(this.spaceShip.position,this.targetPlanet.position) < this.radian)
        {
            this.arrow.active = false;
        }
        else
        {
            this.arrow.active = true;
        }
    }
}

