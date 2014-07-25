//http://judge.softuni.bg/Contests/Practice/Index/16#0
function Solve(input) {
	//return Numbers
	var numbers = input[0].split(/[ ()]+/);
	numbers = numbers.filter(Boolean).map(Number);

	var maxCounter = 1;
	var counter = 1;
	for (var i = 0; i < numbers.length - 1; i++) {

		if (i > 0 && numbers[i] == 0) {
			if (maxCounter < counter) {
				maxCounter = counter;
			}
			numbers[i] = numbers[i - 1] + 1;
		}

		var isOddCurrent = numbers[i] % 2 !== 0;
		var isOddNext = numbers[i + 1] % 2 !== 0;
		if (!isOddCurrent && numbers[i + 1] === 0) {
			isOddNext = !isOddCurrent;
		}

		if (isOddCurrent !== isOddNext || numbers[i] == 0) {
			counter++;
			if (maxCounter < counter) {
				maxCounter = counter;
			}
		} else {
			counter = 1;
		}
		isOddCurrent = isOddNext;
	}
	return maxCounter;
}

//When you submit the code into the Judge system, do not copy the code below!
console.log(Solve(['(3) (22) (-18) (55) (44) (3) (21)']));
console.log(Solve(['(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)']));
console.log(Solve(['( 2 )  ( 33 ) (1) (4)   (  -1  ) ']));
console.log(Solve(['(102)(103)(0)(105)  (107)(1)']));
console.log(Solve(['(2) (2) (2) (2) (2)']));
