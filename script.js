console.log("test");

//select container
//create divs
//append div to container
//make sure divs have height and width
let container = document.querySelector("#container");
// let div = document.createElement("div");
// div.classList.add("box");
// container.appendChild(div);

function createGrids() {
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}

createGrids();
