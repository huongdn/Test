import { _decorator, Component, Node, Enum, Vec3, CCInteger, Sprite, SpriteFrame } from 'cc';
import { Planet } from './Planet';
const { ccclass, property } = _decorator;

export enum PlanetInSolarSystem
{
    EARTH,
    MOON,
    VENUS,
    MERCURY,
    SUN,
    MARS,
    JUPITER,
    SATURN,
    URANUS,
    NEPTUNE
}

@ccclass('PlanetManager')
export class PlanetManager extends Component {

    private static instance : PlanetManager;

    @property({type : Node})
    private planets : Node[]=[];

    @property({type : Enum(PlanetInSolarSystem)})
    private currentPlanet ;

    @property({type : Node})
    private spaceShip;

    private targetPos : Vec3;

    public descritpion : String ="";

    public sprite : SpriteFrame = new SpriteFrame();

    public static GetInstance() : PlanetManager
    {
        return this.instance;
    }

    onLoad()
    {
        PlanetManager.instance = this;
    }

    start() {
        this.currentPlanet = PlanetInSolarSystem.EARTH;
    }

    update(deltaTime: number) {
        this.targetPos = this.planets[this.currentPlanet].position;
        //console.log("Position : " + this.targetPos);
        
        for(let i = 0 ; i < this.planets.length;i++)
        {
            let distance = Vec3.distance(this.spaceShip.position,this.planets[i].position);
            let radius = this.planets[i].getComponent(Planet).radius;
            //console.log("String :" + this.descritpion);
            if(distance < radius)
            {
                this.planets[i].getComponent(Planet).ShowButtonInforOfPlanet();
                this.descritpion = this.planets[i].getComponent(Planet).content;
                if(this.planets[i].getComponent(Planet)?.spriteFrame !== null)
                {
                    this.sprite = this.planets[i].getComponent(Planet).spriteFrame;
                }
            }
            else
            {
                this.planets[i].getComponent(Planet).HideButtonInforOfPlanet();
            }
        }
    }
}

