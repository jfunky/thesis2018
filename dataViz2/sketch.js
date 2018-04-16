// Thesis animation/call to action
// by Jasmine Soltani
// Embodied Energy v.0.1.

// create variables
var canvas ;
var heart, empstbdg, tomato, lightbulb ;

var h1Size ;
var h2Size ;
var hX, hY, tX, tY;
var rising ;

var timing1 = 40 ;
var timing2 = 80 ;
var interval = 10 ;
var acc ;

// preload SVGs
// function preload(){
//   heart = loadImage('assets/myheart.svg');
//   empstbdg = loadImage('assets/myempstbdg.svg');
//   tomato = loadImage('assets/mytomato.svg');
//   lightbulb = loadImage('assets/mybulb.svg')
// }

// set up
//
function setup() {
  canvas = createCanvas((windowWidth/2-20), windowHeight);
  frames = 0 ;

  // all sizes should be relative sizes
  hX = 25 ;
  hY = 25 ;
  tX = hX+100 ;
  tY = hY+375 ;
  rising = true ;
  acc = 1 ;

  heart = loadImage('assets/myheart.svg');
  empstbdg = loadImage('assets/myempstbdg.svg');
  tomato = loadImage('assets/mytomato.svg');
  lightbulb = loadImage('assets/mybulb.svg')
  
}

function draw() {
  background(235);

  frames = frames+=1 ;

  // animate heartbeats
  if (frames>timing1 && timing1+interval < frames) {
    h1Size = 130 ;
  }
  else {
    h1Size = 100 ;
  }
  if (frames>timing2 && timing2+interval < frames) {
    h2Size = 130 ;
  }
  else {
    h2Size = 100 ;
  }

  if (frames > 100){
    frames = 0 ;
  }

  image(heart, hX, hY, h1Size, h1Size);
  image(heart, hX + 110, hY, h2Size, h2Size);

  // animate tomato
  //strokeWidth(3);
  if (tY < hY+170){
    rising = false ;
  }
  else if (tY > hY+365){
    rising = true ;
    acc = 1 ;
  }
  if (rising==true) {
    tY -=1 ;
  }
  if (rising==false){
    acc = acc * (1.1) ;
    tY += acc ;
  }

  line(120, hY+200, 120, hY+430);
  textSize(16);
  text("1 meter", 50, hY+190);
  image(tomato, tX, tY, 80, 80);

}
