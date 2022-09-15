const container = document.getElementById("container");

const customizeButton = document.getElementById("customize");
customizeButton.addEventListener("click", newGrid);

let mode = 1;
const modeButtons = document.querySelectorAll(".mode-button");
modeButtons.forEach(modeButton => modeButton.addEventListener("click", setMode));

function getInput() {
  let input = "";
  do {
    input = prompt("Enter a number (maximum 100)");
  } while (input > 100 || isNaN(input) || input == "");
  return input;
}

function newGrid() {
  if (this == customizeButton) { //Only prompt user for grid size if they clicked 'Custom size'
    let userInput = getInput();
    if (userInput == null) {
      return;
    }
    else {
      removeGrid();
      makeGrid(userInput);
    }
  }
  else {
    let currentSize = Math.sqrt(container.childElementCount);
    removeGrid();
    makeGrid(currentSize);
  }
  
  gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", changeColor));
}

function makeGrid(gridSize = 16) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  
  for (i = 0; i < gridSize * gridSize; i++) { //Create num rows and columns 
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "grid-item";
  }
}

function removeGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function setMode() {
  switch (this.id) {
    case "mode1":
      mode = 1;
      break;
    
    case "mode2":
      mode = 2;
      break;

    case "mode3":
      mode = 3;
      break;
  }
  newGrid();
}

function randomNum() {
  return Math.floor(Math.random()* 1000 / 4);
}

function changeColor() {
  let startingColor = "hsl(0, 100%, 100%)";
  switch (mode) {
    case 1:
      this.style.backgroundColor = "black";
      break;
    case 2:
      this.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
      break;
    case 3:
      this.style.backgroundColor = "";
      break;
  }
}

function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

makeGrid();

let gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", changeColor));