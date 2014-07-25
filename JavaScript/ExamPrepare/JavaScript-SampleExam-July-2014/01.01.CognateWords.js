function Solve(input) {
	var text = input[0];
	var words = text.split(/[^A-Za-z]+/);
	words = words.filter(Boolean);
	var output = [];

	for (var a = 0; a < words.length; a++) {
		for (var b = 0; b < words.length; b++) {
			for (var c = 0; c < words.length; c++) {
				if (a !== b) {
					var check = (words[a] + words[b] === words[c]);

					if (check) {
						var cognateWord = words[a] + '|' + words[b] + '=' + words[c];
						if (output.indexOf(cognateWord) < 0) {
							output.push(cognateWord);
						}
					}
				}
			}
		}
	}

	if (output.length < 1) {
		return "No";
	} else {
		return output.join('\n');

	}
}

//When you submit the code into the Judge system, do not copy the code below!
console.log(Solve(['java..?|basics/*-+=javabasics']));
console.log(Solve(['Hi, Hi, Hihi']));
console.log(Solve(['Uni(lo,.ve=I love SoftUni (Soft)']));
console.log(Solve(['a a aa a']));
console.log(Solve(['x a ab b aba a hello+java a b aaaaa']));
console.log(Solve(['aa bb bbaa']));
console.log(Solve(['ho hoho']));
