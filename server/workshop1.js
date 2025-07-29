const readline = require('readline');
const { stdin: input, stdout: output } = require('process'); 

console.log('Starting server...');

const rl = readline.createInterface({ input, output});
rl.question('How old are you? ', (age) => {
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