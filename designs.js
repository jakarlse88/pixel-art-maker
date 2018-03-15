// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

// Prevent submission in order to keep height/width values
document.querySelector('#sizePicker').addEventListener('submit', function(evt){
	evt.preventDefault();
});

document.querySelector('#colorPicker').addEventListener('submit', function(evt) {
	evt.preventDefault();
});

// Draw grid
function makeGrid() {
	// Access size input, canvas, color input
	const height = document.querySelector('#inputHeight').value;
	const width = document.querySelector('#inputWidth').value;
	const canvas = document.querySelector('#pixelCanvas');
	const colorPicker = document.querySelector('#colorPicker');

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

  // Set event listeners to <td> elements
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(evt) {
      this.style.backgroundColor = colorPicker.value;
    });
  }
}

// Reset canvas
function resetCanvas() {
  // Access canvas
  const canvas = document.querySelector('#pixelCanvas');

  // Remove child elements
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}
