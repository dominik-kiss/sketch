const container = document.getElementById("container");

const button = document.querySelector("button");
button.addEventListener("click", newGrid);

function makeGrid(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  
  for (i = 0; i < num * num; i++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "grid-item";
  }
}

function removeGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function turnBlack() {
  this.style.backgroundColor = "black";
}

function newGrid() {
  gridSize = prompt("Enter a number");
    while (gridSize > 100) {
      gridSize = prompt("100 maximum");
    }
  removeGrid();
  makeGrid(gridSize);
  gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", turnBlack));
}

makeGrid(gridSize = 16);

let gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", turnBlack));
