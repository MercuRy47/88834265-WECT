"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Input numbers (คั่นด้วยช่องว่าง): ', function (line) {
    var cleanInput = line.trim();
    var arr = cleanInput.split(/\s+/).map(Number);
    if (arr.some(isNaN)) {
        console.log('กรุณาใส่ตัวเลขเท่านั้น (คั่นด้วยช่องว่าง)');
        rl.close();
        return;
    }
    var result = number_of_max(arr);
    console.log("\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E0B\u0E49\u0E33\u0E01\u0E31\u0E19\u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E04\u0E37\u0E2D '".concat(result.number, "' (").concat(result.count, " \u0E04\u0E23\u0E31\u0E49\u0E07)"));
    rl.close();
});
function number_of_max(arr) {
    var count = [];
    var maxCount = 0;
    var mostFrequent = null;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequent = num;
        }
    }
    return {
        number: mostFrequent,
        count: maxCount,
    };
}
