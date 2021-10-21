const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const db = require('./db');
const listRouter = require('./routes/list-routes')
const apiPort = 3000;

const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(urlencoded({extended: true}));
app.use(express.json());

// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req, res) => {
    res.send("I'm here!");
});

app.use('/api', listRouter);

app.listen(apiPort, () => {
    console.log(`server running on port ${apiPort}`);
});
