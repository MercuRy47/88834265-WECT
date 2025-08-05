"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('How old are you? ', function (input) {
    var age = parseInt(input);
    if (age < 13) {
        console.log('You are child!');
    }
    else if (age > 13 && age < 20) {
        console.log('You are a teenager!');
    }
    else if (age > 20) {
        console.log('You are an adult!');
    }
    else {
        console.log('Invalid age! Please enter a valid number.');
    }
    rl.close();
});
