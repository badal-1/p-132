function go1(){
window.location.href="a.html";
}
img ="";
cocossed_status = ""; 
function go1(){
window.location.href="a.html";
}
function preload(){
img = loadImage('img5.png');
}
function setup(){
canvas=createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded!");
cocossed_status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
}
function draw(){
image(img, 0, 0, 640, 420);
}
