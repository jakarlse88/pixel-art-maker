// Select color input
const formElementColor = document.querySelector('#colorPicker');

// When size is submitted by the user, call makeGrid()
const el = document.querySelector('#sizePicker');
el.addEventListener('submit', makeGrid);

// Prevent submission in order to keep height/width values
document.querySelector('#sizePicker').addEventListener('submit', function(e){
	e.preventDefault();
});

// Draw grid
function makeGrid() {
  // Reset canvas (if necessary)
  resetCanvas();

  // Debug
  console.log('Begin makeGrid');

  // Access size input, canvas
  const formElementHeight = document.querySelector('#inputHeight');
  const formElementWidth = document.querySelector('#inputWidth');
  const canvas = document.querySelector('#pixelCanvas');

  // Get canvas size
  let height = formElementHeight.value;
  let width = formElementWidth.value;
  console.log(`Height: ${height} | Width: ${width}`);

  // Draw canvas
  for (let rows = 0; rows < height; rows++) {
    // Insert row
    canvas.appendChild(document.createElement('tr'));
    const canvasRow = canvas.lastChild;

    for (let cells = 0; cells < width; cells++) {
      //Insert cells
        canvasRow.insertAdjacentHTML('afterbegin', '<td></td>');
    }
  }
}

// Reset canvas
function resetCanvas() {
  // Debug
  console.log('Begin resetCanvas');

  // Access canvas
  const canvas = document.querySelector('#pixelCanvas');

  // If present, remove child elements
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}
