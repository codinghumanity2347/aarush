const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var boxOne;
var boxTwo;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    //create the object;
    //new : it will create an object
    boxOne = new Box(100, 100, 50, 50);
    boxTwo = new Box(300, 20, 60, 60);
    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(500, 390, 1200, 20, ground_options);
    World.add(world, ground);

    var ball_options = {
        restitution: 1.0
    }

    ball = Bodies.circle(200, 100, 20, ball_options);
    World.add(world, ball);

    console.log(ground);

}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 1200, 20);
    boxOne.display();
    boxTwo.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}