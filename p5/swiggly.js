class Swiggly{
    constructor(x, y = width/2){
        this.x = x;
        this.y = y;
        this.incx = 0.02;
        this.incy = 0.012;
        this.xgap = 2;
        this.ygap = 50;
    }

    show(){
        noFill();
        stroke(200);
        strokeWeight(2)
        beginShape();
        let y = 0;
        for(let i = 0; i < width;i+=this.xgap){
            let ypos = map(noise(this.x, y), 0, 1, this.y - this.ygap, this.y + this.ygap);
            vertex(i, ypos);
            y += this.incy;
        }

        endShape();

        this.x += this.incx;
    }

}