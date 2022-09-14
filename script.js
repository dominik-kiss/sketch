const container = document.getElementById("container");

function makeRows(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  
  for (i = 0; i < num * num; i++) {
    let box = document.createElement("div");
    container.appendChild(box).className = "grid-item";
  };
};

makeRows(4, 4);