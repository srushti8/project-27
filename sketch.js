
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var startPosx, startPosy, bobD;
var rope1,rope2,rope3, rope4,rope5;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);
	//ground = new Roof(400,700,800,10);
	startPosx = width/2;
	startPosy = height/4+500;
	bobD = 40;
	bob1 = new Bob(startPosx-bobD*2,startPosy,bobD);
	bob2 = new Bob(startPosx-bobD,startPosy,bobD);
	bob3 = new Bob(startPosx,startPosy,bobD);
	bob4 = new Bob(startPosx+bobD,startPosy,bobD);
	bob5 = new Bob(startPosx+bobD*2,startPosy,bobD);

	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new Rope(bob1.body,roof.body,-bobD*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobD*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobD*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobD*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  //Engine.update(engine);
  
  roof.display();
  //ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  console.log(rope1.rope.bodyA.position.x + ", " + rope1.rope.bodyA.position.y);
  //console.log(rope1.rope.bodyB.position.x + ", " + rope1.rope.bodyB.position.y);
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
}

