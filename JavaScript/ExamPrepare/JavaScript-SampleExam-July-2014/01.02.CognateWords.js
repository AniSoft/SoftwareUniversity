//http://judge.softuni.bg/Contests/Practice/Index/16#0
function Solve(input) {
	var words=input[0].split(/[^a-zA-Z]+/);
	var output=[];

	for (var a = 0; a < words.length; a++) {
		for (var b = 0; b < words.length; b++) {
			for (var c = 0; c < words.length; c++) {
				//Check if a!=b and a|b=c
				if (b!==a) {
					var check=(words[a]+words[b]===(words[c]));
					var check2=words[a]!==''&&words[b]!==''&&words[c]!=='';
					if (check&& check2) {
						var word=words[a]+"|"+words[b]+"="+words[c];
						if (output.indexOf(word)<0) {
							output.push(word);
						}
					}
				}
			}
		}
	}

	if (output.length<1) {
		return "No";
	}else{
	//	return output.join('\n');
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
