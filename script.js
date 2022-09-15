const container = document.getElementById("container");

const customizeButton = document.getElementById("customize");
customizeButton.addEventListener("click", newGrid);

let mode = 1;
const modeButtons = document.querySelectorAll(".mode-button");
modeButtons.forEach(modeButton => modeButton.addEventListener("click", setMode));

function newGrid() {
  if (this == customizeButton) { //Only prompt user for grid size if they clicked 'Custom size'
    gridSize = prompt("Enter a number");
    
    while (gridSize > 100 || isNaN(gridSize) || gridSize == "") {
      gridSize = prompt("Enter a number (maximum 100)");
      if(gridSize == null) {
        break;
      }
    }
    if(gridSize == null) {
      return;
    }
  }
  removeGrid();
  makeGrid(gridSize);
  gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", changeColor));
}

function makeGrid(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  
  for (i = 0; i < num * num; i++) { //Create num rows and columns 
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
  switch (mode) {
    case 1:
      this.style.backgroundColor = "black";
      break;
    case 2:
      this.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
      break;
    case 3:
      //Darken background-color by 10%
      break;
  }
}

makeGrid(gridSize = 16);

let gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", changeColor));