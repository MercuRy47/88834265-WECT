import * as process from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Input numbers (คั่นด้วยช่องว่าง): ', (line: string) => {
    const cleanInput = line.trim();
    const arr: number[] = cleanInput.split(/\s+/).map(Number);

    if (arr.some(isNaN)) {
        console.log('กรุณาใส่ตัวเลขเท่านั้น (คั่นด้วยช่องว่าง)');
        rl.close();
        return;
    }

    const result = number_of_max(arr);

    console.log(`เลขที่ซ้ำกันมากที่สุดคือ '${result.number}' (${result.count} ครั้ง)`);
    rl.close();
});

function number_of_max(arr: number[]) {
    const count: number[] = [];
    let maxCount = 0;
    let mostFrequent = null;

    for (let num of arr) {
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