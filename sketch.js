const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    log6=new Log(230,180,80,PI/2);
    log7=new Log(230,180,80,PI/2);
    log8=new Log(230,180,80,PI/2);
    log9=new Log(230,180,80,PI/2);
    log10=new Log(230,180,80,PI/2);
    log11=new Log(810,350,80,PI/2);
    log12=new Log(810,350,80,PI/2);
    log13=new Log(810,350,80,PI/2);
    log14=new Log(810,350,80,PI/2);
    log15=new Log(810,350,80,PI/2);
    log16=new Log(810,350,80,PI/2);
    chain=new Chain(bird.body,log6.body);
    chain1=new Chain(bird.body,log7.body);
    chain2=new Chain(bird.body,log8.body);
    chain3=new Chain(bird.body,log9.body);
    chain4=new Chain(bird.body,log10.body);
    chain5=new Chain(pig1.body,log11.body);
    chain6=new Chain(pig1.body,log12.body);
    chain7=new Chain(pig1.body,log13.body);
    chain8=new Chain(pig2.body,log14.body);
    chain9=new Chain(pig2.body,log15.body);
    chain10=new Chain(pig2.body,log16.body);


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    log16.display();

    chain.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
    chain7.display();
    chain8.display();
    chain9.display();
    chain10.display();
}
