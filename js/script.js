window.onload = function (){
    var gems = document.getElementsByClassName("gem");

    for (let i = 0; i < gems.length; i++){
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    function placeGem (){
        var genRandomX = randomNumber(0, 1300);
        var genRandomY = randomNumber(0, 700);
        var randomX = genRandomX.toString() + "px";
        var randomY = genRandomY.toString() + "px";
        gems[i].style.left = randomX;
        gems[i].style.top = randomY;
        console.log(randomX,randomY);
    }
    placeGem();

    function randomColour(){

    }
}}

