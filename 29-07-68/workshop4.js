const express = require('express');
const app = express();
const port = 1010;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:number', (req, res) => {
    const number = req.params.number;
    let arry = number.toString().split('');
    let sum = null;

    for (let i = 0; i < arry.length; i++) {
        sum += parseInt(arry[i]);
    }
    res.send(sum);
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});