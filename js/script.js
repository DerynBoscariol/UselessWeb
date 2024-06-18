
//var refreshBtn = document.getElementById("refreshBtn");
const gems = [document.getElementsByClassName("gem")];

window.onload = function (){
  console.log(gems.length);
  console.log(gems);
   //Creating a random set of two numbers per gem
    for (let i = 0; i < gems.length; i++){
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    //Using said number to place gems at random x and y positions within the view window
      var genRandomX = randomNumber(0, 1300);
      var genRandomY = randomNumber(0, 700);
      var randomX = genRandomX.toString() + "px";
      var randomY = genRandomY.toString() + "px";

      }

      function placeGems (){
        for (let i = 0; i < gems.length; i++){
          gems[i].style.left = randomX;
          gems[i].style.top = randomY;
          console.log(randomX,randomY);
        }
  
   }
     //calling function to place gems
  placeGems();
   /*
  //Recalling function to place gems when refresh button is clicked
  refreshBtn.onclick = function()
  { 
      placeGems(); 
  
  } */
  console.log(gems.length);
}


