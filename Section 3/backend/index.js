// import express
const express = require('express');
const postRouter = require('./routers/postRouter');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middleware

app.use(cors(
    { origin: ['http://localhost:3000'] }
));
app.use(express.json());

app.use('/post', postRouter);

app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Add Response from express');
});

app.listen( port, () => { console.log('server started'); } );