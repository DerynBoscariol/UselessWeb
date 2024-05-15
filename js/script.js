
var gem = document.getElementById("gem1");


window.onload = function (){


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    function placeGem (){
        var genRandomX = randomNumber(0, 1200);
        var genRandomY = randomNumber(0, 1200);
        var randomX = genRandomX.toString() + "px";
        var randomY = genRandomY.toString() + "px";
        gem.style.left = randomX;
        gem.style.top = randomY;
        console.log(randomX);
        console.log(randomY);
        console.log(genRandomX);
        console.log(genRandomY);
    }

placeGem();
}