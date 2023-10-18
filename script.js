let container = document.querySelector("#container");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let color = input.value;
let size = 25;
container.style.width = `${size}rem`;

input.addEventListener("input", (e) => {
  color = e.target.value;
});

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
    box.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        box.style.backgroundColor = color;
      }
    });
  });
}

btn.addEventListener("click", () => {
  let div = document.querySelectorAll(".box");
  div.forEach((box) => {
    box.style.removeProperty("background-color");
  });
});

createGrids();
fillBoxOnMousedown();
