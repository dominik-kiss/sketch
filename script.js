const container = document.getElementById("container");

function makeRows(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  
  for (i = 0; i < num * num; i++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "grid-item";
  }
}

function turnBlack() {
  this.style.backgroundColor = "black";
}

makeRows(16);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", turnBlack));
