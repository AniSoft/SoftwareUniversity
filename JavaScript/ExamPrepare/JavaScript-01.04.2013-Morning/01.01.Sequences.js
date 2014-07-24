function Solve(input) {
	var result = 1;
	input = input.map(Number);

	for (var i = 2; i < input.length; i++) {
		if (input[i - 1] > input[i]) {
			result++;
		}
	}
	return result;
}

console.log(Solve([7, 1, 2, -3, 4, 4, 0, 1]));
console.log(Solve([6, 1, 3, -5, 8, 7, -6]));
console.log(Solve([9, 1, 8, 8, 7, 6, 5, 7, 7, 6]));
