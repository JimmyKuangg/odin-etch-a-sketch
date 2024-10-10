const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  const newRow = document.createElement("div");
  for (let i = 0; i < 16; i++) {
    const newSqr = document.createElement("div");
    newSqr.setAttribute("style", "width: 45px; height: 45px;");
    newSqr.addEventListener("mouseover", (e) => {
      e.target.classList.add("fill-in");
    })

    newRow.appendChild(newSqr);
  }
  grid.appendChild(newRow);
}