function Solve (input){
    var n = input[0];
    var assarr = {};
    var count;
    for (var i = 1; i <= n; i++) {
        var tempRow = input[i].split(' ');
        var ip = tempRow[0];
        var user = tempRow[1];
        var minute = parseInt(tempRow[2]);

        if (!(user in assarr)) {
            assarr[user] = {};
            assarr[user][ip] = minute;
        } else if ((user in assarr)&& !(ip in assarr[user])) {
            assarr[user][ip] = minute;
        } else {
            minute = minute + assarr[user][ip];
            assarr[user][ip] = minute;
        }
    }

    var keysUsers = [];
    for(var key in assarr) {
        if (assarr.hasOwnProperty(key)) {
            keysUsers.push(key);
        }
    }
    keysUsers.sort();
    var output = '';
    for (var i = 0; i < keysUsers.length; i++) {
        var sumMinutes = 0;
        var keysUsersIp = [];
        for(var key in assarr[keysUsers[i]]) {
            if (assarr[keysUsers[i]].hasOwnProperty(key)) {
                keysUsersIp.push(key);
                sumMinutes += assarr[keysUsers[i]][key];
            }
        }
        output += keysUsers[i] + ': ' + sumMinutes + ' [' + keysUsersIp.sort().join(', ') + ']\n';
    }
    return output;
}

//when you submit the code into the Judge system, do not copy the code below!

console.log(Solve(['7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'
]));

console.log(Solve(['2',
    '84.238.140.178 nakov 25',
    '84.238.140.178 nakov 35'
]));
