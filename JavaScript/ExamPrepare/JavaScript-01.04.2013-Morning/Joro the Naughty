function Solve(args) {
    var container = args[0].split(' '); // splitvam purviq red za da vzema n, m, j
    var n = parseInt(container[0]);
    var m = parseInt(container[1]);
    var jumps = parseInt(container[2]);
 
    container = args[1].split(' ');
 
    var start_row = parseInt(container[0]);
    var start_col = parseInt(container[1]);
 
    //creating a "matrix" in javascript....in other words array of arrays
    var matrix = new Array();
    var counter = 1;
    var numbersJumpedOn = [];
 
    for (var i = 0; i < n; i++) {
        matrix[i] = new Array();
        for (var j = 0; j < m; j++) {
            matrix[i][j] = counter++;
        }
    }
 
    //adding starting positions to the arrayList - numbersJumpedOn
    numbersJumpedOn.push(matrix[start_row][start_col]);
 
    var allJumps = [];
 
    for (var i = 0; i < jumps; i++) {
        allJumps.push(args[i + 2]);
    }
 
    var k = 0;
 
    while (true) {
        if(k > jumps-1)
        {
            k = 0;
        }
        var container = allJumps[k].split(' ');
        k++;
 
        var nextJum_row = parseInt(container[0]);
        var nextJum_col = parseInt(container[1]);
 
        start_row += nextJum_row;
        start_col += nextJum_col;
 
        if (start_row < 0 || start_col < 0 || start_row > n - 1 || start_col > m - 1) {
            console.log("escaped " + Sum(numbersJumpedOn));
            break;
        }
        if(numbersJumpedOn.indexOf(matrix[start_row][start_col]) == -1)
        {
            numbersJumpedOn.push(matrix[start_row][start_col]);
        }
        else
        {
            console.log("caught " + numbersJumpedOn.length);
            break;
        }
    }
 
    function Sum(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
}

