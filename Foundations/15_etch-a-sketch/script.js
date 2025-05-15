
function makeGrid(width, height, screenSize) {
	let squareWidth = screenSize[0]/width - 2;
	let squareHeight = screenSize[1]/height - 2;

	squareWidth = squareWidth + 'px';
	squareHeight = squareHeight + 'px';

	const row = document.createElement('div');
	row.classList.add('row');
	const square = document.createElement('div');
	square.style.width = squareWidth;
	square.style.height = squareHeight;
	square.classList.add('square');

	for (let squareY = 0; squareY < height; squareY++) {
		let newRow = row.cloneNode();
		container.appendChild(newRow);
	for (let squareX = 0; squareX < width; squareX++) {
		let newSquare = square.cloneNode();
		newSquare.style.backgroundColor = 'black';
		newSquare.style.opacity = '0';
		newRow.appendChild(newSquare);
		newSquare.addEventListener('mouseover', () => {
			newSquare.style.opacity = parseFloat(newSquare.style.opacity) + 0.1;
		}); 
	}
	}
}

const container = document.querySelector('.container');
let screenSize = [960, 960];

makeGrid(16, 16, screenSize)

const button = document.querySelector('button');
button.addEventListener('click', () => {
	let rows = container.children;
	while (rows.length>0) {
		rows[0].remove();
	}

	let size=0
	while (size<1 || size>100) {
		size = prompt('How many squares? ', 16);
	}

	makeGrid(size, size, screenSize);
});
