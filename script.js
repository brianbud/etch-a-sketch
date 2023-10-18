let container = document.querySelector("#container");
let size = 25;
container.style.width = `${size}rem`;

function createGrids() {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}

function fillBoxOnMousedown() {
  let isMouseDown = false;

  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  let div = document.querySelectorAll(".box");
  div.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      if (isMouseDown) {
        box.classList.add("fill");
      }
    });
  });
}

createGrids();
fillBoxOnMousedown();
