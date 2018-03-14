// Select color input
const formElementColor = document.querySelector('#colorPicker');

// Select size input
const formElementHeight = document.querySelector('#inputHeight');
const formElementWidth = document.querySelector('#inputWidth');

// Draw grid
function makeGrid() {
}

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', makeGrid());

// Prevent submission in order to keep height/width values
document.querySelector('#sizePicker').addEventListener('click', function(e){
	e.preventDefault();
});
