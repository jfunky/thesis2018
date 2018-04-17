// Thesis animation/call to action: tomato animation
// by Jasmine Soltani
// Embodied Energy v.2.1

var t = function(Tomato) {

  // create variables
  var tomato ;

  var tX, tY;
  var rising ;

  var acc ;

  Tomato.setup = function() {
    tcanvas = Tomato.createCanvas(250, 350);

    // Move the canvas so it’s inside our <div id="second">.
    tcanvas.parent('second');

    tX = 110 ;
    tY = 205 ;
    rising = true ;

    acc = 1 ;

    tomato = Tomato.loadImage('assets/mytomato.svg');
  };

  Tomato.draw = function() {
    Tomato.background(255);

    // animate tomato
    if (tY < 20){
      rising = false ;
    }
    else if (tY > 235){
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

    Tomato.line(110, 50, 110, 310);
    Tomato.textSize(16);
    Tomato.text("1 meter", 35, 40);
    Tomato.image(tomato, tX, tY, 80, 80);
  };
};

var animateTomato = new p5(t) ;
