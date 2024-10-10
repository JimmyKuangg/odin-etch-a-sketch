const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset-btn");

function generateGrid(numPerRow = 16) {
  for (let i = 0; i < numPerRow; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    for (let i = 0; i < numPerRow; i++) {
      const newSqr = document.createElement("div");
      const sqrDimensions = 720 / numPerRow;
      newSqr.setAttribute("style", `width: ${sqrDimensions}px; height: ${sqrDimensions}px;`);
      newSqr.addEventListener("mouseover", fillIn);
      newRow.appendChild(newSqr);
    }

    grid.appendChild(newRow);
  }
}

function fillIn(e) {
  const numTimesDarkened = e.target.classList.length;
  e.target.classList.add(`darken-${numTimesDarkened + 1}`)
}

function promptUser() {
  let userAns;
  let validAns = false;

  while (!validAns) {
    userAns = +(prompt("How many squares would you like per row?"));
    
    if (userAns > 100 || userAns < 1 || isNaN(userAns)) {
      alert("Invalid number (Please enter a number between 1 and 100)");
    } else {
      validAns = true;
    }
  }
  
  generateGrid(userAns);
}

function removeRows() {
  const rows = document.querySelectorAll(".grid-row");
  for (row of rows) {
    grid.removeChild(row);
  }
}

function onResetClick() {
  removeRows();
  promptUser();
}


reset.addEventListener("click", onResetClick);
generateGrid();