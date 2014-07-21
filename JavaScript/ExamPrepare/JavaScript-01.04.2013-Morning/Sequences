function Solve(args) {
    var n = parseInt(args[0]);
 
    var arr = [];
    var pairs = 1;
 
    for (var j = 0; j < n; j++) {
        arr[j] = parseInt(args[j + 1]);
    }
 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            pairs++;
        }
    }
 
    console.log(pairs);
}

