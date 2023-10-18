let container = document.querySelector("#container");
let size = 16;
container.style.width = `${size}rem`;

function createGrids() {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}

function changeColorOnHover() {
  let div = document.querySelectorAll(".box");
  div.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      box.classList.add("fill");
    });
  });
}

createGrids();
changeColorOnHover();
