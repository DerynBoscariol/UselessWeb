window.onload = function (){
  var refreshBtn = document.getElementById("refreshBtn");
  var getGems = document.getElementsByClassName("gem");
  var gems = Array.from(getGems);

  console.log(gems.length);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function placeGems(){
    // Creating a random set of two numbers per gem
    for (var i = 0; i < gems.length; i++){
      // Using said number to place gems at random x and y positions within the view window
      var genRandomX = randomNumber(0, 1300);
      var genRandomY = randomNumber(0, 700);
      var randomX = genRandomX.toString() + "px";
      var randomY = genRandomY.toString() + "px";
      gems[i].style.left = randomX;
      gems[i].style.top = randomY;
      console.log(randomX, randomY);
      console.log(gems[i]);
    }
  }

  placeGems();

  // Recalling function to place gems when refresh button is clicked
  if (refreshBtn) {
    refreshBtn.addEventListener("click", placeGems);
  }
  console.log(gems.length);
}

