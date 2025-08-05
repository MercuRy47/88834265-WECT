import * as process from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('How old are you? ', (input: string) => {
    const age: number = parseInt(input);

    if (age < 13){
        console.log('You are child!');
    }else if (age > 13 && age < 20){
        console.log('You are a teenager!');
    }else if( age > 20){
        console.log('You are an adult!');
    }else {
        console.log('Invalid age! Please enter a valid number.');
    }
    rl.close();
});