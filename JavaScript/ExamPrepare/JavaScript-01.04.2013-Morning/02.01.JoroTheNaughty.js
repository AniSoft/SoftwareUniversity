//http://bgcoder.com/Contests/74/JavaScript-1-April-2013-Morning
function Solve(input) {
	var rowsColsAndJumps = parseNumbers(input[0]);
	var startPosition = parseNumbers(input[1]);

	var rows = rowsColsAndJumps[0];
	var cols = rowsColsAndJumps[1];
	var allJumps = rowsColsAndJumps[2];

	var currentRow = startPosition[0];
	var currentCol = startPosition[1];

	return getAnswer();

	function getAnswer() {
		var field = initField();
		var jumps = readJumps();

		var jumpsIndex = 0;
		var escaped = false;
		var sumOfNumbers = 0;
		var totalJumps = 0;

		while (true) {
			if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
				escaped = true;
				break;
			}

			if (field[currentRow][currentCol] === 'X') {
				escaped = false;
				break;
			}

			sumOfNumbers += field[currentRow][currentCol];
			totalJumps++;

			var currentJump = jumps[jumpsIndex++];
			if (jumpsIndex >= jumps.length) {
				jumpsIndex = 0;
			}

			field[currentRow][currentCol] = 'X';

			currentRow += currentJump.row;
			currentCol += currentJump.col;
		}

		return escaped ? 'escaped ' + sumOfNumbers : 'caught ' + totalJumps;
	}

	function initField() {
		var field = [];
		var counter = 1;
		for (var i = 0; i < rows; i++) {
			field[i] = [];
			for (var j = 0; j < cols; j++) {
				field[i][j] = counter++; 
			}
		}
		return field;
	}

	function readJumps() {
		var jumps = [];
		for (var i = 2; i < 2 + allJumps; i++) {
			var parsedJump = parseNumbers(input[i]);

			var currentJump = {
				row: parsedJump[0],
				col: parsedJump[1]
			};
			jumps.push(currentJump);
		}

		return jumps;
	}

	function parseNumbers(input) {
		return input.split(' ').map(Number);
	}

}

console.log(Solve(['6 7 3', '0 0', '2 2', '-2 2', '3 -1']));
