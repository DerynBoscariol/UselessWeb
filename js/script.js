
var gem = document.getElementById("gem1");

window.onload = function (){

function placeGem (){
var randomX = (Math.random() * (1200 - 0)) +"px";
var randomY = (Math.random() * (800 - 0)) +"px";
gem.style.left = randomX;
gem.style.top = randomY;
console.log(randomX);
console.log(randomY);
}

placeGem();
}