const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const db = require('./db');
const apiPort = 3000;

const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(urlencoded({extended: true}));

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req, res) => {
    res.send("I'm here!");
});

app.listen(apiPort, () => {
    console.log(`server running on port ${apiPort}`);
});
