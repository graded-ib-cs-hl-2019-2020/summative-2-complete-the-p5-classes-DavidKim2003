import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
function setup() {
    let numBubbles = 15;
    let numBalls = 12;
    let numFlakes = 40;
    createCanvas(1665, 950);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), randomColor());
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50), transparent());
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 12));
    }
}
function draw() {
    background("DarkSlateBlue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();
    }
}
function mousePressed() {
    for (let b of balls) {
        if (b.touchingMouse()) {
            if (b.isStopped()) {
                b.go();
            }
            else {
                b.stop();
            }
        }
    }
}
function transparent() {
    return "#ffffff80";
}
function randomColor() {
    return "rgb(" +
        Math.floor(random(0, 255)) + "," + " " +
        Math.floor(random(0, 255)) + "," + " " +
        Math.floor(random(0, 255)) + ")";
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map