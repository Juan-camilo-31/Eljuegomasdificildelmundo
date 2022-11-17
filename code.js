var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a7c1b006-9dd8-4f72-bfd2-075069f725f8","8420bd79-962a-4787-883b-4bb04326e4d5"],"propsByKey":{"a7c1b006-9dd8-4f72-bfd2-075069f725f8":{"name":"sam","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Cf_agwKQRRE7OjHpIccCxIjjxg5vmEn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a7c1b006-9dd8-4f72-bfd2-075069f725f8.png"},"8420bd79-962a-4787-883b-4bb04326e4d5":{"name":"carro1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":400,"y":288},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:45 UTC","pngLastModified":"2021-01-05 19:46:54 UTC","version":"RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J","sourceUrl":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png","sourceSize":{"x":400,"y":288},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

calle1=createSprite(190,120,420,3)
calle2=createSprite(190,260,420,3)
var car1=createSprite(100,130,10,10)
car1.shapeColor="pink"
car1.setAnimation("carro1")

var car2=createSprite(215,130,10,10)
car2.shapeColor="purple"
car2.setAnimation("carro1")
var car3=createSprite(165,250,10,10)

car3.shapeColor="purple"
car3.setAnimation("carro1")
var car4=createSprite(270,250,10,10)
car4.shapeColor="pink"
car4.setAnimation("carro1")
var sam=createSprite(20,190,13,13)
sam.shapeColor="blue"

//tamaños
sam.scale=0.2
car1.scale=0.1
car2.scale=0.1
car4.scale=0.1
car3.scale=0.1
//animaciones
sam.setAnimation("sam")


//carros





car1.velocityY=8
car2.velocityY=8
car3.velocityY=-8
car4.velocityY=-8
var vidas=0

function draw() {
  background("white")
  textSize(20);
  fill("purple");
  
  text("Vidas: "+vidas, 150, 30);
  
  noStroke();
  fill("yellow");
  rect(0, 120, 52, 140);
  noStroke();
  fill("cyan");
  rect(345, 120, 52, 140);
   
  
  
  car1.bounceOff(calle1)
  car1.bounceOff(calle2)
  car2.bounceOff(calle1)
  car2.bounceOff(calle2)
  car3.bounceOff(calle1)
  car3.bounceOff(calle2)
  car4.bounceOff(calle1)
  car4.bounceOff(calle2)
  if (keyDown("right")) {
    sam.x=sam.x+5
    
  }
  if (keyDown("left")) {
    sam.x=sam.x-2
  }
  
  if (sam.isTouching(car1)||sam.isTouching(car2)|| sam.isTouching(car3)||sam.isTouching(car4)) {
    sam.x=20
    sam.y=190
    vidas=vidas+1
    
  }
  
  
  
  
  
  
  
  
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
