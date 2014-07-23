//http://judge.softuni.bg/Contests/1/CSharp-Basics-Sample-Exam-May-2014
function Solve(args) {
	var x = Number(args[0]);
	var y = Number(args[1]);
	var z = Number(args[2]);
	var n = Number(args[3]);
	var result;

	if (n == 1) {
		result = x;
	} else if (n == 2) {
		result = y;
	} else if (n == 3) {
		result = z;
	} else {
		for (var i = 4; i <= n; i++) {
			var temp = x + y + z;
			x = y;
			y = z;
			z = temp;
		}
		result = temp;
	}
	return result;
}

console.log(Solve([1, 1, 1, 4]));
console.log(Solve([2, 3, 4, 10]));
console.log(Solve([5, -1, 2, 33]));

