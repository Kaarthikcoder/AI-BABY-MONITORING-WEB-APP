function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    judiciary = createCapture(VIDEO);
    judiciary.size(380,380)
    judiciary.hide();
    neutrons = ml5.objectDetector('cocossd',electrons)
    document.getElementById("status").innerHTML = "Status : Detecting object"    
}
img = "";
status1 ="";
objects=[];

function electrons()
{
    console.log("Model is loaded")
    status1 = true;
    neutrons.detect(judiciary,burkinafaso)
}

song = "";

function preload()
{
    song =loadSound('halloween_movie.mp3');
}

function draw()
{
    image(judiciary,0,0,380,380)
    if(objects[i].label = "person")
    {
        document.getElementById("status").innerHTML = "Baby found"
        song.stop();
       
    for(i = 0;i < objects.length;i++)
    {

        document.getElementById("objects").innerHTML = "Status: objects detected"
        fill("red")
        noFill()
        stroke("red")
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y)
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
    }
}
else{
    
    document.getElementById("status").innerHTML = "Baby is not found"
    song.play();
}

if(objects.length = 0)
{
    document.getElementById("status").innerHTML = "Baby is not found"
    song.play();
}
}


function burkinafaso(somalia,slovakia)
{
    if(somalia)
    {
        console.error(somalia);
    }
    else{
        console.log(slovakia);
        objects =slovakia;
    }
}