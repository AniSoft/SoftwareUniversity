//http://judge.softuni.bg/Contests/2/CSharp-Basics-Exam-10-April-2014-Morning
function Solve(args) {
	var n = Number(args[0]);
	var result = '';
	for (var i = 0; i < n; i++) {
		if (i == 0 || i == n - 1) {
			result += printTopBottomPart(n);
		} else {
			result += printMiddlePart(n, i);
		}
	}
	return result;

	function printMiddlePart(n, i) {
		var lens = repeatStr('/', n * 2 - 2);
		var middleFrame = '*' + lens + '*';
		var connection = repeatStr(' ', n);
		if (i == (n - 1) / 2) {
			connection = repeatStr('|', n);
		}
		return middleFrame + connection + middleFrame + '\n';
	}

	function printTopBottomPart(n) {
		var frame = repeatStr('*', 2 * n);
		var emptySpace = repeatStr(' ', n);
		return frame + emptySpace + frame + '\n';
	}

	function repeatStr(str, times) {
		var result = '';
		for (var i = 0; i < times; i++) {
			result += str;
		}
		return result;
	}
}

console.log(Solve([3]));
console.log(Solve([5]));
