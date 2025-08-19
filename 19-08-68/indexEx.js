const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.get('/titles', (req, res) => {
    res.send('Get all titles');
});

app.get('/title/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get title with ID: ${id}`);
});

app.post('/title', (req, res) => {
    res.send('Create a new title');
});

app.put('/title/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update title with ID: ${id}`);
});

app.delete('/title/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete title with ID: ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});