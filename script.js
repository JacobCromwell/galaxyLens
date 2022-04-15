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

function shadedRGB() {
   colorLength++;
   if (colorLength > 255) {
      colorLength = 0;
   }
   return `rgb(${255 - colorLength},0,${255 - colorLength},0.9)`;
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
               if (this.collided === true) {
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

function getVelXSign(quadrant) {
   if (quadrant == 1 || quadrant == 2) {
      return 1;
   } else {
      return -1;
   }
}

function getVelYSign(quadrant) {
   if (quadrant == 1 || quadrant == 4) {
      return 1;
   } else {
      return -1;
   }
}



function determineQuadrant(maxNumOfBalls, currentBall) {
   const quarterOfMax = (maxNumOfBalls / 4);
   if (currentBall <= quarterOfMax) {
      return 1;
   } else if (currentBall <= 2 * quarterOfMax) {
      return 2;
   } else if (currentBall <= 3 * quarterOfMax) {
      return 3;
   } else if (currentBall <= maxNumOfBalls) {
      return 4;
   }
}

// Vars specifically for use in determinePattern, might move in later, look at loop for feasibility
const balls = [];
const maxNumOfBalls = 400;
const quarterOfMax = (maxNumOfBalls / 4);

function determinePattern() {
   if (balls.length > maxNumOfBalls) {
      console.log('There are just too many BALLS!');
   }
   else {
      const size = random(10, 20);
      let quadrant = determineQuadrant(maxNumOfBalls, balls.length);

      if (quadrant === 1) {
         velX = 10;
         velY = quarterOfMax - balls.length;
      } else if (quadrant === 2) {
         velX = 10;
         velY = -1*(balls.length - quarterOfMax);
      } else if (quadrant === 3) {
         velX = -10;
         velY = -1*((3*quarterOfMax) - balls.length);
      } else if (quadrant === 4) {
         velX = -10;
         velY = balls.length - 3*quarterOfMax
      }

      console.log(`x: ${velX}, y: ${velY}`);


      const ball = new Ball(
         // ball position always drawn at least one ball width
         // away from the edge of the canvas, to avoid drawing errors
         (width / 2),
         (height / 2),
         (velX),
         (velY),
         randomRGB(),
         size
      );

      balls.push(ball);
   }
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0, width, height);

   ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
   ctx.fillRect(10, 10, 25, 25);

   ctx.fillRect(20, 20, 25, 25);

   for (const ball of balls) {
      ball.draw();
      ball.update();
      //ball.collisionDetect();  // change color on collision
   }

   determinePattern();

   requestAnimationFrame(loop);
}

loop();