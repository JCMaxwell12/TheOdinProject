
function makeGrid(width, height, screenSize) {
	let squareWidth = screenSize[0]/width - 2;
	let squareHeight = screenSize[1]/height - 2;

	squareWidth = squareWidth + 'px';
	squareHeight = squareHeight + 'px';

	const container = document.querySelector('.container');
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
		newRow.appendChild(newSquare);
		newSquare.addEventListener('mouseover', () => {
			newSquare.style.backgroundColor = 'black';
		}); 
	}
	}
}

let screenSize = [960, 960];

makeGrid(16, 16, screenSize)
