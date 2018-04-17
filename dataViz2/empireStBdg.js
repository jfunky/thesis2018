// Thesis animation/call to action: empire state building animation
// by Jasmine Soltani
// Embodied Energy v.2.1

var ESB = function(Empstbdg) {

  // create variables
  let empstbdg, tomato ;

  //tomato
  let tX, tY, ts;

  //text
  let textY = 40 ;

  //line
  let x = 110 ;
  let y1 ;
  let y2 ;

  // rising & falling
  let rising ;
  let acc ;

  //empire state building
  let size = 2 ;
  let currentTime, timing ;

  Empstbdg.setup = function() {
    var ecanvas = Empstbdg.createCanvas(300, 650);

    ecanvas.parent('sketch-right');


    // tomato location & size
    tX = 110 ;
    tY = 205 ;
    t2Y = 550 ;
    ts = 80 ;
    //line
    y1 = 50 ;
    y2 = 310 ;

    //rising & falling
    rising = true ;
    acc = 1 ;

    // empire state building
    size = 1.9 ;
    eY = 20 ;

    tomato = Empstbdg.loadImage('assets/mytomato.svg');
    empstbdg = Empstbdg.loadImage('assets/myempstbdg.svg');
    empstbdg_u = Empstbdg.loadImage('assets/myempstbdg_u.svg');
  };

  Empstbdg.draw = function() {
    Empstbdg.background(255);
    currentTime = Empstbdg.millis();

    // shrink it
    if (ts > 1){
      y1 +=1.5 ;
      ts -=.45 ;
      tY += 1.6 ;
      tX += .03 ;

      // animate tomato
      if (tY < 18){
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

      Empstbdg.line(110, y1, 110, y2);
      Empstbdg.textSize(16);
      Empstbdg.text("1 meter", 35, 300);
      Empstbdg.image(tomato, tX, tY, ts, ts);
      // Empstbdg.image(empstbdg, 150, 20, empstbdg.width*size, empstbdg.height*size)
    }
    else {
      if (size > 0.5) {
        Empstbdg.text("443 meters", 35, 300);
        size -=.09 ;
        eY +=13.5 ;
        timing = Empstbdg.millis() + 1000 ;
      }
      else if (size <= 0.5) {
        Empstbdg.text("443 meters x 8", 35, 300);
        if (currentTime > timing){
          for (var i=0; i < 4; i++ ){
            Empstbdg.image(empstbdg, 170, ((i * 142) + 93), empstbdg.width*size, empstbdg.height*size)
          }
          for (var i=0; i < 4; i++ ){
            Empstbdg.image(empstbdg_u, 170, ((i * 142)+23), empstbdg_u.width*size, empstbdg_u.height*size)
          }
          // Empstbdg.text("443 meters X 8", 35, 300);
          Empstbdg.text("3,545 meters", 35, 330);

          // animate tomato
          if (t2Y < 20){
            rising = false ;
          }
          else if (t2Y > 530){
            rising = true ;
            acc = .5 ;
          }
          if (rising==true) {
            t2Y -= 1 ;
          }
          if (rising==false){
            acc = acc * (1.1) ;
            t2Y += acc ;
          }

          Empstbdg.image(tomato, 195, t2Y, 30, 30);

        }
      }
    }

    Empstbdg.image(empstbdg, 170, eY, empstbdg.width*size, empstbdg.height*size)

  };
};

var animateESB = new p5(ESB) ;
