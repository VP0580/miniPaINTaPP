var lines=[];

var bg, pc,pw;

function setup(){
    createCanvas(400,400);

  createP("Background Color");  
  bg = createColorPicker("ffggff");
  bg.position(160,410);
  createP("Pen Color");
  pc = createColorPicker()
  pc.position(160,440)
  createP("Pen Width");
  pw = createSelect();
  pw.option("2");
  pw.option("4");
  pw.option("8");
  pw.position(160, 470);
}

function draw(){
    background(bg.value())
    if(mouseIsPressed){
        lines.push(new Line(pc.value(),pw.value()));
    }

    for(var i=0; i<lines.length;i++){
        
        
        lines[i].display();
    }
}