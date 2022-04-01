const btnClear = document.querySelector("#btn-clear");
const drawingContainer = document.querySelector("#drawing-container");
const gridSizeRangeInput = document.querySelector("#grid-size");

// Clear drawing grid
function clearDrawingGrid() {
  const columnGrid = drawingContainer.getElementsByClassName("column-grid");
  for (let i = 0; i < columnGrid.length; i++) {
    columnGrid[i].classList.remove("colored");
    columnGrid[i].style.backgroundColor = "";
  }
}

// Generate random color hex code
function createRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create color trail
function generateColorTrail(e) {
  // Check if "colored" class is already added to the grid
  let colored = false;
  const classList = e.target.classList;
  for (const key of Object.keys(classList)) {
    if (classList[key] === "colored") {
      colored = true;
    }
  }

  if (colored) {
    // TODO Add 10% black tint for every hover, until completely black
  } else {
    // Add new random color and flag grid for colored
    e.target.style.backgroundColor = createRandomColor();
    e.target.classList.add("colored");
  }
}

// Draw size x size grid
function generateDrawingGrid(size = 16) {
  // Clear drawing-container div before adding any HTML element
  drawingContainer.innerHTML = "";

  const columnGridHeight = drawingContainer.clientHeight / size;

  for (let i = 0; i < size; i++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.add("row-grid");
    rowGrid.style.height = `${columnGridHeight}px`;
    for (let j = 0; j < size; j++) {
      const columnGrid = document.createElement("div");
      columnGrid.classList.add("column-grid");
      columnGrid.style.width = `${columnGridHeight}px`;
      columnGrid.addEventListener("mouseover", generateColorTrail);
      rowGrid.appendChild(columnGrid);
    }
    drawingContainer.appendChild(rowGrid);
  }
}

// Initial drawing grid
generateDrawingGrid();

btnClear.addEventListener("click", clearDrawingGrid);
gridSizeRangeInput.addEventListener("input", (e) =>
  generateDrawingGrid(e.target.value)
);
