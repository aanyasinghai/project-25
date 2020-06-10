
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	paper = new Paper(130,600,50,50);
	
	box1 = new Box();

	ground = new Ground(350,700,800,20);

	Engine.run(engine);
}

function draw() {
  background(255);
  
  //Engine.update(engine);

  ground.display();

  paper.display();

  box1.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}