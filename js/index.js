const btnClear = document.querySelector("#btn-clear");
const drawingContainer = document.querySelector("#drawing-container");
const gridSizeRangeInput = document.querySelector("#grid-size");

// Clear drawing grid
function clearDrawingGrid() {
  const columnGrid = drawingContainer.getElementsByClassName("column-grid");
  for (let i = 0; i < columnGrid.length; i++) {
    columnGrid[i].classList.remove("column-grid-dark-bg");
  }
}

// Create color trail
function generateColorTrail(e) {
  e.target.classList.add("column-grid-dark-bg");
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
