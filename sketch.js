var paperIMG,dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinIMG =loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 700);
	var dust = createSprite(860,600,160,20)
	dust.addImage(dustbinIMG)
	dust.scale = .6
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(100,600,40)
bin1 = new Bin(910,620,170,20)
bin2 = new Bin(810,627,20,130)
bin3 = new Bin(980,627,20,130)



ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
ball.display()
//bin1.display()
//bin2.display()
//bin3.display()

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-300})


	}

}
