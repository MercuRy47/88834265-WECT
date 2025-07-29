const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

console.log('Starting server...');

const rl = readline.createInterface({ input, output });
rl.question('Input number: ', (number) => {
    console.log(number_of_max(number));
});

function number_of_max(array) {
    const count = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let num of array) {
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