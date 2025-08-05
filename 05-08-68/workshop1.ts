import * as process from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter number separated by commas: ", (input: string) => {
    const items = input.split(',').map(Number);
    const uniqueItems: number[] = Array.from(new Set(items));
    const sum: number = uniqueItems.reduce(
        (acc: number, curr: number) => acc + curr
    )

    console.log(`Sum of unique numbers: ${sum}`);
    rl.close();
})