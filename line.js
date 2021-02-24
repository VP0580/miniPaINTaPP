class Line{
    constructor(pc,pw){
        this.px = pwinMouseX;
        this.py=pwinMouseY;
        this.x= mouseX;
        this.y=mouseY;
        this.color = pc;
        this.width = pw;
    }

    display(selColor){
        stroke(this.color);
        strokeWeight(this.width);
        line(this.px, this.py, this.x,this.y);
    }
}