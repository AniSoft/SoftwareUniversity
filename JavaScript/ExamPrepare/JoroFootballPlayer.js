function Solve(arr) {
    var leap = arr[0];
    var hollidaysCount = Number(arr[1]);
    var weekendsHomeCount = Number(arr[2]);
    
    var weekendsInYear = 52;
    var normalWeekendsCount = weekendsInYear - weekendsHomeCount;
    var gamesCount = normalWeekendsCount * 2 / 3 + weekendsHomeCount * 1 + hollidaysCount / 2;
    
    if (leap == "t") {
    	gamesCount = gamesCount + 3;
    }
    
    return Math.floor(gamesCount);

}

console.log(Solve(['f', 3, 2]));
console.log(Solve(['t', 2, 3]));
console.log(Solve(['f', 10, 5]));
console.log(Solve(['t', 0, 1]));
