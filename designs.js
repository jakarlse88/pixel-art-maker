// Prevent submission in order to keep height/width values
document.querySelector('#sizePicker').addEventListener('click', function(e){
	e.preventDefault();
});

// Select color input
const formElementColor = document.querySelector('#colorPicker');

// Select size input
const formElementHeight = document.querySelector('#inputHeight');
const formElementWidth = document.querySelector('#inputWidth');

// Draw grid
function makeGrid() {
}
