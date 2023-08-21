var fox, foxRunning,foxJumping,foxBase
var enemy, enemyimg
var arrow,arrowImg
var bgimg
var ground,groundImg,groundGroup
function preload(){
  bgimg = loadImage('assets/bg.jpg')
  foxBase = loadAnimation('assets/fox-base.png')
  foxJumping = loadAnimation('assets/fox-jumping-1.png','assets/fox-jumping-2.png','assets/fox-jumping-3.png',
                              'assets/fox-jumping-4.png','assets/fox-jumping-5.png')
  foxRunning = loadAnimation('assets/fox-running-1.png','assets/fox-running-2.png','assets/fox-running-3.png')
  enemyimg = loadImage('assets/evil man.png')
  arrowImg = loadImage('assets/arrow.png') 
  groundImg = loadImage('assets/basic-ground.png')                         
}

function setup(){
  createCanvas(1270,580)
  fox = createSprite(400,320)
  fox.addAnimation('base', foxBase)
  fox.addAnimation('running',foxRunning)
  fox.addAnimation('jumping',foxJumping)
  fox.scale = 2.5

  enemy = createSprite(620,400)
  enemy.addImage(enemyimg)
  enemy.scale = 0.3

  groundGroup = new Group()
  ground = createSprite(400, 370)
  ground.addImage(groundImg)
  ground.scale = 6.5
  groundGroup.add(ground)
  ground.debug = true
  ground.setCollider('rectangle',-100,150,1000,200)


}

function draw(){
  createGround()
  background(bgimg)
  foxMovement()
  drawSprites()
}



function createGround(){
  if(frameCount%60 == 0){
    ground = createSprite(camera.position.x- 200, 280)
    ground.y = Math.round(random(350,500))
    ground.addImage(groundImg)
    ground.scale = 6.5
    groundGroup.add(ground)
    ground.velocityX = 2
    ground.debug = true
    ground.setCollider('rectangle',-30,50,10,4)
    
  }

  }
  function foxMovement(){
    if(keyDown('up')){
      fox.velocityY = -4
    }
    fox.velocityY= fox.velocityY +0.4
    fox.collide(groundGroup)
  }
