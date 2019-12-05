export class Ball {
    constructor(x, y, size, color = "red", borderColor = "black") {
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.stopped = false;
        this.color = "red";
        this.borderColor = "black";
        this.x = x;
        this.y = y;
        this.size = random(40, 100);
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
        this.color = color;
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    isStopped() {
        return this.stopped;
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map