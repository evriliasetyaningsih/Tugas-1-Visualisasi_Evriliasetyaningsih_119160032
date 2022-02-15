let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}
 function draw() {
  // put drawing code here
  background(200);
  strokeWeight(2);

 // doraemon kanan
  
 fill(253,154,115);
 var y = 200+20*Math.sin(PI*j/20);
 var r = 70+10*Math.sin(PI*j/20);
 j +=1;
  ellipse(290,85,r,60);
  ellipse(280,80,2,2);
  ellipse(295,80,2,2);
  arc(289,88,40,40,radians(720),radians(180));
  arc(290,120,60,90,radians(336),radians(205));
  rect(270,130,40,0);
  arc(290,130,40,40,radians(720),radians(180));
  rect(280,165,5,25);
  rect(295,165,5,25);
  line(260,120,230,150);
  line(320,120,350,150);


  //pembatas
  line(180,20000,200,0)
  
  // doraemon kiri
  
 fill(0,154,115);
 ellipse(90,85,70,60);
 ellipse(80,80,2,2);
 ellipse(95,80,2,2);
 arc(89,88,40,40,radians(720),radians(180));
 arc(90,120,60,90,radians(336),radians(205));
 rect(70,130,40,0);
 arc(90,130,40,40,radians(720),radians(180));
 rect(80,165,5,25);
 rect(95,165,5,25);
 line(60,115,20,140);
 line(120,115,150,150);
}