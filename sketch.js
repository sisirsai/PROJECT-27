const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	var options=
	{
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	roof = new Block(640,100,600,70);
	bob1 = new BOB(440,550,100);
	bob2 = new BOB(540,550,100,options);
	bob3 = new BOB(640,550,100,options);
	bob4 = new BOB(740,550,100,options);
	bob5 = new BOB(840,550,100,options);

	rope1 = new Rope(bob1.body,roof.body,-100^2,0);
	rope2 = new Rope(bob2.body,roof.body,-100^2,0);
	rope3 = new Rope(bob3.body,roof.body,-100^2,0);
	rope4 = new Rope(bob4.body,roof.body,-100^2,0);
	rope5 = new Rope(bob5.body,roof.body,-100^2,0);

    console.log(width);
	Engine.run(engine);
  
}

const Constraint = Matter.Constraint;
function draw() {
		
	rectMode(CENTER);
	background("skyblue");
	

	rope1.display(440);
	rope2.display(540);
	rope3.display(640);
	rope4.display(740);
	rope5.display(840);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	roof.display("indigo");
 
}
function keyPressed()
{
if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:800,y:-800});
}

if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-900,y:90});
}

}
