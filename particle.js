class particles {
    constructor(x, y, w, h) {
        var options = {

            isStatic: false
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255)),(random(0,255)),(random(0,255));
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(circle);
        //fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};