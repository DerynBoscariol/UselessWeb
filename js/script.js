window.onload = function () {
  const refreshBtn = document.getElementById("refreshBtn");
  const getGems = document.getElementsByClassName("gem");
  const gems = Array.from(getGems);
  const searchArea = document.getElementById("search-area");
  const gemCount = document.getElementById("gemCount");

  console.log(gems.length);
  console.log(gems);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function placeGems() {
    // Clear previously added gems
    searchArea.innerHTML = '';
    gems.splice(7, gems.length - 7);
    // Creating a random set of two numbers per gem
    for (let i = 0; i < gems.length; i++) {
      let gem = gems[i];
      gem.style.position = "absolute";
      // Using said number to place gems at random x and y positions within the view window
      let genRandomX = randomNumber(0, window.innerWidth - 200);
      let genRandomY = randomNumber(0, window.innerHeight - 330);
      let randomX = genRandomX.toString() + "px";
      let randomY = genRandomY.toString() + "px";
      gem.style.left = randomX;
      gem.style.top = randomY;
      console.log(randomX, randomY);
      console.log(gem);

      // Adding an event listener to each gem so it will duplicate when clicked
      gem.addEventListener("click", duplicateGem);
      searchArea.appendChild(gem);
      gemCount.innerHTML = gems.length;
    }
  }

  function duplicateGem(event) {
    console.log("gem clicked");
    let gemClicked = event.target;
    let newGem = gemClicked.cloneNode(true);
  
    // Append the new gem to the parent element
    searchArea.appendChild(newGem);
    
    // Position the new gem randomly
    newGem.style.position = "absolute";
    let genRandomX = randomNumber(0, window.innerWidth - 200);
    let genRandomY = randomNumber(0, window.innerHeight - 330);
    newGem.style.left = genRandomX + "px";
    newGem.style.top = genRandomY + "px";
    newGem.style.zIndex = 2;
  
    // Add the new gem to the gems array
    gems.push(newGem);
  
    // Add click event listener to the new gem for future duplication
    newGem.addEventListener("click", duplicateGem);
  
    // Optionally, add a class for styling purposes
    newGem.classList.add("new");

    gemCount.innerHTML = gems.length;
  
    console.log("Total gems after duplication:", gems.length);
    console.log("Newly created gem:", newGem);
    console.log("New gem left position:", newGem.style.left);
  }

  placeGems();

  // Recalling function to place gems when refresh button is clicked
  if (refreshBtn) {
    refreshBtn.addEventListener("click", placeGems);
  }
  console.log(gems.length);
};