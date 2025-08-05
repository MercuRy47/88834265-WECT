"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter number separated by commas: ", function (input) {
    var items = input.split(',').map(Number);
    var uniqueItems = Array.from(new Set(items));
    var sum = uniqueItems.reduce(function (acc, curr) { return acc + curr; });
    console.log("Sum of unique numbers: ".concat(sum));
    rl.close();
});
