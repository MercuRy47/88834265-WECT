const express = require('express');
const cowsay = require('cowsay');

const app = express();
const PORT = 1010;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });

console.log('Starting server...');
console.log(cowsay.say({
    text: "I'm a moo!",
}));
