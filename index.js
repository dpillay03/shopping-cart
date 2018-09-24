'use strict';
const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => {
    console.log(`on port ${port}`);
})