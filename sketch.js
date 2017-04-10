var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    greenCircle();
    blueStripe();
    whiteLines();
    changeBackground();
  rowCircles(250);
  rowCircles(350);
}

function greenCircle(){
        noStroke();
    fill(110, 244, 66);
    ellipse(mouseX, mouseY, 100, 100);
}

function blueStripe(){
    fill(66, 244, 235);
    x = 200;
    y+=3
    rect(x, y, 100, height);
       
        if(y > height){
        y = 0 - height;
    }
}

function whiteLines(){
       var i = 0;
    var yLine = 20;
    while(i<10){
        stroke(255);
        line(100, yLine, 500, yLine);
        i++;
        yLine += 20;
    }  
}

function changeBackground(){
        if(mouseIsPressed && mouseY < 200){
        background(209, 66, 244);
    }
    else if(mouseIsPressed && mouseY >=200){
        background(244, 65, 155);
    }
}

function rowCircles(yRow){
        var xCircle = 40;
    for(var i = 0; i < 10; i++){
        noStroke();
        fill(244, 244, 65);
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        xCircle += 50;
    }
}    