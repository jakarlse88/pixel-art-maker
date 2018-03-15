// When size is submitted by the user, call makeGrid()
const el = document.querySelector('#sizePicker');
el.addEventListener('submit', makeGrid);

// Prevent submission in order to keep height/width values
document.querySelector('#sizePicker').addEventListener('submit', function(e){
	e.preventDefault();
});

// Draw grid
function makeGrid() {
	// Access size/color input, canvas
	const height = document.querySelector('#inputHeight').value;
	const width = document.querySelector('#inputWidth').value;
	const color = document.querySelector('#colorPicker').value;
	const canvas = document.querySelector('#pixelCanvas');

	console.log(`Height: ${height} | Width: ${width} | Color: ${color}`);

	// Reset canvas (if necessary)
	if (canvas.firstChild) {
		resetCanvas();
	}

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

  // Access all <td> elements
  const cells = document.getElementsByTagName('td');
  console.log(cells);

  // Set event listeners to <td> elements
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener('click', function(evt) {
      this.style.backgroundColor = color;
      console.log(`Listener set to ${evt.target}`);
    });
  }

}

// Reset canvas
function resetCanvas() {
  // Access canvas
  const canvas = document.querySelector('#pixelCanvas');

  // If present, remove child elements
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}
