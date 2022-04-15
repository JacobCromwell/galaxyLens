const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


let colorLength = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // function to generate random RGB color value
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }

  function shadedRGB(){
      colorLength++;
      if(colorLength > 255){
          colorLength = 0;
      }
      return `rgb(${255-colorLength},0,${255-colorLength},0.9)`;
  }

class Ball {

    constructor(x, y, velX, velY, color, size) {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
       this.collided = false;
    }
 
    draw() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
    }
 
    update() {
       if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
       }
 
       if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
       }
 
       if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
       }
 
       if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
       }
 
       this.x += this.velX;
       this.y += this.velY;
    }
 
    collisionDetect() {
       for (const ball of balls) {
          if (!(this === ball)) {
             const dx = this.x - ball.x;
             const dy = this.y - ball.y;
             const distance = Math.sqrt(dx * dx + dy * dy);
 
             if (distance < this.size + ball.size) {
               //ball.color = this.color = randomRGB();
               if(this.collided === true){
                  ball.color = this.color = randomRGB();
                  ball.collided = false;
               } else {
                  ball.color = this.color = shadedRGB();
                  ball.collided = true;
               }
             }
          }
       }
    }
 
 }

function getVelX(signCounter){
    if(signCounter == 0 || signCounter == 1){
        return 1;
    } else {
        return -1;
    }
}

function getVelY(signCounter){
    if(signCounter == 0 || signCounter == 3){
        return 1;
    } else {
        return -1;
    }
}

 
const balls = [];
let signCounter = 0;

function sleep(milliseconds) {
   const date = Date.now();
   let currentDate = null;
   do {
     currentDate = Date.now();
   } while (currentDate - date < milliseconds);
 }

 function determinePattern(){
   if(balls.length > 256){
      console.log('There are just too many BALLS!');
   }
   else {
      const size = random(10,20);
   
     if(signCounter > 3){
         signCounter = 0;
     }
     const velX = getVelX(signCounter);
     const velY = getVelY(signCounter);
      
      const ball = new Ball(
         // ball position always drawn at least one ball width
         // away from the edge of the canvas, to avoid drawing errors
         (width/2),
         (height/2),
         (velX*12),
         (velY*12),
         randomRGB(),
         size
      );
   
     balls.push(ball);
     signCounter++;
   }
 }
 
 let loopCounter = 0;
 function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0,  width, height);
 
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();  // change color on collision
    }

    console.log(`loopCounter: ${loopCounter%10}`);
    if(loopCounter%2 == 0){
      determinePattern();
    }
 
    requestAnimationFrame(loop);
    loopCounter++;
 }
 
 loop();