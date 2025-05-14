
function makeGrid(width, height, screenSize) {
	const container = document.querySelector('.container');
	const row = document.createElement('div');
	row.classList.add('row');
	const square = document.createElement('div');
	square.classList.add('square');


	for (let squareY = 0; squareY < height; squareY++) {
		let newRow = row.cloneNode();
		container.appendChild(newRow);
	for (let squareX = 0; squareX < width; squareX++) {
		let newSquare = square.cloneNode();
		newRow.appendChild(newSquare);
	}
	}
}

let screenSize = [960, 960];

makeGrid(16, 16, screenSize)
