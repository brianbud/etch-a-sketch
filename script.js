let container = document.querySelector("#container");

function createGrids() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}

function changeColorOnHover() {
  let div = document.querySelectorAll(".box");
  div.forEach((box) => {
    box.addEventListener("click", (e) => {
      box.classList.add("fill");
    });
  });
}

createGrids();
changeColorOnHover();
