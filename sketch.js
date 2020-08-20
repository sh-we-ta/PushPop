 
//  //namespacing
//  const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;

//var box;
let angle=0;

function setup(){
    createCanvas(400,400);
  
    angleMode(DEGREES);
}

function draw(){
    background(0);
//     rectMode(CENTER);
//     //translate(200,200)
//      rotate(angle);
//    rect(200,200,50,50);
//

 push ();
 translate(250,250)
 rotate(angle++);
  fill(229,43,80)
 rect(0,0,100,50);
pop ();


//     movingRect(0,0,angle*3,275);
//    angle++;
//     movingRect(0,0,-angle*9,50);
    
}


function movingRect(x, y,angle,t){
    this.t=t;
    this.x=x;
    this.y=y;
    this.angle= angle;
push();
translate(this.t,this.t);
rotate(this.angle);
fill(random(0,255),random(0,255),random(0,255));
rect(this.x,this.y,60,50);
this.angle= this.angle++;
pop ();

}
// push ();
// translate(275,275)
// rotate(-angle);
// fill(229,43,80)
// rect(0,0,100,50);
// pop ();


// push ();
// translate(275,275)
// rotate(angle*4);
// fill(229,36,0)
// rect(0,0,100,50);
// pop ();

// push ();
// translate(275,275)
// rotate(-angle*2);
// fill(255,191,0)
// rect(0,0,100,50);
// pop ();

//     angle= angle+4;
// }