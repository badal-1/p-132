modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
function n1(){
window.location.href="1.html";
}
function n2(){
window.location.href="2.html";
}
function n3(){
window.location.href="3.html";
}
function n4(){
window.location.href="4.html";
}
function n5(){
window.location.href="5.html";
}