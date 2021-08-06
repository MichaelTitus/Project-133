object=[]
status = "";
function preload() {
    img = loadImage('My_room.JPG')
}
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectdetector = ml5.objectDetector('cocossd', modelloaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
    
}
function draw() {
    image(img, 0, 0, 640, 420)
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object detected"
            fill("green")
            percent = floor(object[i].confidence * 100)
            console.log(percent)
            text(object[i].label + " " + percent + "%", object[i].x,object[i].y)
            noFill()
            stroke("blue")
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
        }
    }
}

function modelloaded() {
    console.log("model is loaded")
    status = true;
    objectdetector.detect(img, gotresult)
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
    object=results
    }
    
}

function homescreen(){
    window.location="index.html"
}