import { _decorator, Component, Node, Vec3, math, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Satellite')
export class Satellite extends Component {
    @property({type : Node})
    private planet;

    @property({type : CCFloat})
    private rotateAroundSpeed;

    @property({type : CCFloat})
    private angleStart;
    private radius;
    private t = 0;


    start() {
        this.radius = Vec3.distance(this.node.position,this.planet.position);
    }

    update(deltaTime: number) {
        let pos = new Vec3();
        this.t += deltaTime * this.rotateAroundSpeed * 0.1;
        pos.x = this.planet.position.x + Math.sin(this.angleStart + this.t) * this.radius;
        pos.y = this.planet.position.y + Math.cos(this.angleStart + this.t) * this.radius;
        this.node.position = pos;
    }
}

