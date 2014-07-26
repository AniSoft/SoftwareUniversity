function Solve(args) {
var n = parseInt(args[0]);
var map = {};

for (var i = 0; i < n; i++) {
    var string = args[i + 1]; // ip, name , number
    var arrProperties = string.split(' ');
    if (map[arrProperties[1]] == undefined) { // проверяваме дали с това име има контакт
        map[arrProperties[1]] = [parseInt(arrProperties[2]), []]; // ако е undefined значи трябва да инциализираме ново entry в map
    }                                                             // с името като ключ (индекс) и първоначалният "duration"
                                                                  // и един празен масив за IP-тата
    else {
        map[arrProperties[1]][0] = map[arrProperties[1]][0] + parseInt(arrProperties[2]);
        // обаче ако имаме вече такова име , увеличаваме предишната стойност на "duration" с тази на current елемента
    }
    if (map[arrProperties[1]][1].indexOf(arrProperties[0]) == -1) { // добавянето на IP-та става тука, ако имаме вече такова IP,
        map[arrProperties[1]][1].push(arrProperties[0]);            // в map[arrProperties[1]][1] което е мястото ,
        //където е масива с IP-та , няма да го добавим. Ако извади indexOf == -1 , значи го няма и го слагаме
    }
}

var mapKeys = Object.keys(map); // правим array mapKeys , който ще съдържда само ключовете, т.е. имента от този "map"
mapKeys.sort();                 // сортираме ги
mapKeys.forEach(function (key) { // преди да принтираме елемента влизаме в масива с IP-та и ги сортираме и тях
    map[key][1].sort();
    console.log("%s: %d [%s]", key, map[key][0], map[key][1].join(", "));
});
}

Solve(["7",
"192.168.0.11 peter 33",
"10.10.17.33 alex 12",
"10.10.17.35 peter 30",
"10.10.17.34 peter 120",
"10.10.17.34 peter 120",
"212.50.118.81 alex 46",
"212.50.118.81 alex 4"]
);

Solve(["2",
"84.238.140.178 nakov 25",
"84.238.140.178 nakov 35"]
);

