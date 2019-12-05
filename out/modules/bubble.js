export class Bubble {
    constructor(x, y, size, color = "white", borderColor = "blue") {
        this.stopped = false;
        this.x = x;
        this.y = y;
        this.size = random(30, 70);
        this.xSpeed = random(-0.3, 0.3);
        this.ySpeed = random(-3, 0);
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
        if (this.stopped == false)
            this.x = this.xSpeed + this.x;
        this.y = this.ySpeed + this.y;
        this.doBorderBehavior();
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
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map